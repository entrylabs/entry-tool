import React, { useEffect, useRef } from 'react';
import _map from 'lodash/map';
import _floor from 'lodash/floor';
import _round from 'lodash/round';
import _slice from 'lodash/slice';
import _unzip from 'lodash/unzip';
import _reduce from 'lodash/reduce';
import _forEach from 'lodash/forEach';
import _toPairs from 'lodash/toPairs';
import _findIndex from 'lodash/findIndex';
import bb from 'billboard.js';

import Theme from '@utils/Theme';
import '@assets/entry/scss/widget/insight.css';

import { CommonUtils } from '@utils/Common';
import {
    isNumberColumn,
    categoryKeys,
    getBinWidth,
    isDrawable,
    getPieChart,
    getNoResultText,
} from '@utils/dataAnalytics';
import {
    GRAPH_COLOR,
    HISTOGRAM,
    SCATTERGRID,
    SCATTER_POINT_PATTERN,
} from '@constants/dataAnalytics';
const { generateHash } = CommonUtils;

const scatterChart = (table, xIndex, yIndex, categoryIndex) =>
    _map(
        table.slice(1).reduce((prev, row) => {
            prev[`${row[categoryIndex]}_y`] = prev[`${row[categoryIndex]}_y`] || [];
            prev[`${row[categoryIndex]}_y`].push(`${row[yIndex]}`);
            prev[`${row[categoryIndex]}_x`] = prev[`${row[categoryIndex]}_x`] || [];
            prev[`${row[categoryIndex]}_x`].push(`${row[xIndex]}`);
            return prev;
        }, {}),
        (value, index) => [index, ...value]
    );

const getHistogramChart = (table, categoryIndexes, bin, boundary) => {
    const { width, min, max } = getBinWidth(table, categoryIndexes, boundary, bin);
    const x = new Array(bin + 1).fill(0);

    const xRow = ['histogram_chart_x', ..._map(x, (__, index) => index * width + min)];
    const extRow = _map(categoryIndexes, (index) => {
        const result = new Array(bin + 1).fill(0);
        result[0] = table[0][index];
        _forEach(table.slice(1), (row) => {
            const binIndex = _floor((Number(row[index]) - min) / width);
            if (Number(row[index]) - max === 0) {
                result[bin]++;
            } else if (Number(row[index]) - min === 0) {
                result[1]++;
            } else if (
                boundary === 'right' &&
                _round(min + width * binIndex, 4) == _round(Number(row[index]), 4)
            ) {
                result[binIndex]++;
            } else if (
                boundary === 'left' &&
                _round(min + width * (binIndex + 1), 4) == _round(Number(row[index]), 4)
            ) {
                result[binIndex + 2]++;
            } else {
                result[binIndex + 1]++;
            }
        });
        result.push(0);

        return result;
    });

    return [xRow, ...extRow];
};

const scatterXs = (columns) => {
    const xs = {};
    for (let index = 0; index < columns.length; index += 2) {
        xs[index / 2] = `${index / 2}_x`;
        columns[index][0] = `${index / 2}`;
        columns[index + 1][0] = `${index / 2}_x`;
    }
    return xs;
};

const deduplicationColumn = (columns) =>
    columns.map((column, index) => {
        const [head, ...ext] = column;
        const prev = _slice(columns, 0, index);
        let count = 0;
        _forEach(prev, ([prevHead]) => {
            if (prevHead == head) {
                count++;
            }
        });
        if (count) {
            return [`${head} (${count})`, ...ext];
        }
        return [head, ...ext];
    });

const getMouseOverStyle = (type, index) => `
    background-color: ${getColor(type, index)};
    float: left;
    width: 14px;
    height: 14px;
    margin: -1px 7px 0 0;
    vertical-align: middle;
`;
const getColor = (type, index) => `${GRAPH_COLOR[type][index % GRAPH_COLOR[type].length]}`;

const generateOption = (option) => {
    const {
        table,
        type,
        xIndex,
        yIndex = -1,
        categoryIndexes,
        id,
        size,
        legend = { show: false },
        axisY,
        theme,
        order,
        bin,
        boundary,
        shortForm,
        bindto,
    } = option;

    let x;
    let xs;
    let columns;
    let grid;
    let point;
    let tooltip;
    let line;
    let {
        axisX = {
            type: 'category',
            tick: {
                fit: true,
                multiline: false,
                autorotate: true,
                culling: true,
            },
        },
    } = option;

    switch (type) {
        case 'bar':
        case 'line': {
            const isAddedOption = xIndex === table[0].length;
            let orderedTable = [...table.slice(1)];
            if (!isAddedOption) {
                const isNumberColumnXIndex = isNumberColumn(table, xIndex);
                if (order === 'ascending') {
                    orderedTable.sort((rowA, rowB) => {
                        const a = isNumberColumnXIndex ? Number(rowA[xIndex]) : rowA[xIndex];
                        const b = isNumberColumnXIndex ? Number(rowB[xIndex]) : rowB[xIndex];
                        if (a > b) {
                            return 1;
                        }
                        if (a < b) {
                            return -1;
                        }
                        return 0;
                    });
                }
            }
            orderedTable = [table[0], ...orderedTable];
            columns = deduplicationColumn(
                [...categoryIndexes].map((index) => _unzip(orderedTable)[index])
            );
            axisX.tick = {
                fit: true,
                multiline: false,
                autorotate: orderedTable.length <= 16,
                rotate: orderedTable.length <= 16 ? 15 : null,
                culling: orderedTable.length > 16,
            };
            axisX.clipPath = false;
            axisX.categories = orderedTable
                .slice(1)
                .map((row, index) => (isAddedOption ? index + 1 : row[xIndex]));

            tooltip = {
                contents: (data) => {
                    const [{ name, value }] = data;
                    const fields = _map(categoryIndexes, (index) => orderedTable[0][index]);
                    const index = _findIndex(fields, (col) => col == name);
                    return `
                        <div class="${theme.chart_tooltip}">
                            <span
                                className="${theme.bg}"
                                style="${getMouseOverStyle(type, index)}"
                            >
                                &nbsp;
                            </span>
                            ${name}: ${value.toLocaleString()}
                        </div>`;
                },
                grouped: false,
                init: {
                    x: 100,
                },
            };
            break;
        }
        case 'pie': {
            const isAddedOption = categoryIndexes[0] === table[0].length;
            const pieChart = getPieChart(table, xIndex, categoryIndexes[0]);
            columns = [pieChart[0], ...pieChart.slice(1).map((value, index) => [index, value[1]])];
            x = table[0][xIndex];
            tooltip = {
                contents: (data) => {
                    const [{ name, ratio, value }] = data;

                    return `
                        <div class="${theme.chart_tooltip}">
                            <span
                                className="${theme.bg}"
                                style="${getMouseOverStyle(type, name)}"
                            >
                                &nbsp;
                            </span>
                            ${pieChart[Number(name) + 1][0]} | ${_floor(ratio * 100)}% (${
                        isAddedOption
                            ? CommonUtils.getLang('DataAnalytics.quantity')
                            : table[0][categoryIndexes[0]]
                    }: ${value.toLocaleString()})
                        </div>`;
                },
                init: {
                    x: 100,
                },
            };
            break;
        }
        case 'scatter': {
            columns = scatterChart(table, xIndex, yIndex, categoryIndexes);
            xs = scatterXs(columns);
            const { tick = {} } = axisX;
            axisX = {
                tick: {
                    ...tick,
                    fit: false,
                },
            };
            grid = {
                x: {
                    show: true,
                },
                y: {
                    show: true,
                },
            };
            point = {
                pattern: SCATTER_POINT_PATTERN,
            };
            tooltip = {
                contents: (data) => {
                    const [{ name, value, x }] = data;
                    const xAxis = table[0][xIndex];
                    const categoryIndex = categoryIndexes[0];
                    const scatterNames = categoryKeys(table, categoryIndex);

                    return `
                        <div class="${theme.chart_tooltip}">
                            <span
                                className="${theme.bg}"
                                style="float: left;
                                    width: 14px;
                                    height: 14px;
                                    margin: -1px 7px 0 0;
                                    vertical-align: middle;"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    style="fill: ${getColor(type, name)};
                                    stroke: ${getColor(type, name)};"
                                    width="16" height="16" viewBox="0 0 10 10">
                                    ${
                                        SCATTER_POINT_PATTERN[
                                            Number(name) % SCATTER_POINT_PATTERN.length
                                        ]
                                    }
                                </svg>
                            </span>
                            ${
                                categoryIndex !== table[0].length
                                    ? `
                                ${scatterNames[Number(name)]}&nbsp;|&nbsp;`
                                    : ''
                            }${xAxis}: ${x.toLocaleString()}
                            &nbsp;${table[0][yIndex]}: ${value.toLocaleString()}
                        </div>`;
                },
                init: {
                    x: 100,
                },
            };
            break;
        }
        case 'histogram': {
            const { width } = getBinWidth(table, categoryIndexes, boundary, bin);
            columns = getHistogramChart(table, categoryIndexes, bin, boundary);
            axisX = {
                type: undefined,
                tick: {
                    ...axisX.tick,
                    multiline: false,
                    culling: false,
                    count: bin + 1,
                    format: (x) => _round(x, 2),
                    fit: undefined,
                    autorotate: undefined,
                },
            };
            x = 'histogram_chart_x';
            line = {
                step: {
                    type: 'step-after',
                },
            };
            tooltip = {
                contents: (data) => {
                    const values = _reduce(
                        data,
                        (prev, curr) => {
                            if (curr.value) {
                                prev.push(curr);
                            }
                            return prev;
                        },
                        []
                    );
                    if (!values.length) {
                        return '';
                    }
                    const text = `
                    <div class="${theme.histogram_legend}">
                        <ul class="${theme.legend_list}">
                            ${data
                                .map(({ value, name, x, index }, idx) =>
                                    value
                                        ? `   
                            <li style="height:14px;">
                                <span class="${theme.bull}" 
                                    style="background-color: ${getColor(type, idx)};">
                                    &nbsp;
                                </span>
                                <span class="${theme.text}">${name}</span>
                                <span class="${theme.text}">${`${value} (${_round(
                                              (value / (table.length - 1)) * 100,
                                              2
                                          )}%): ${_round(x, 2)} ${
                                              boundary === 'left' || index === 0 ? '≤' : '〈'
                                          } X ${
                                              boundary === 'right' || index === bin - 1 ? '≤' : '〈'
                                          } ${_round(x + width, 2)}`}</span> 
                            </li>`
                                        : ''
                                )
                                .join(' ')}
                        </ul>
                    </div>`;
                    return text;
                },
            };
            break;
        }
        default:
            columns = [[]];
            break;
    }

    return {
        id,
        grid,
        size,
        point,
        legend,
        bindto,
        color: {
            pattern: GRAPH_COLOR[type],
        },
        data: {
            x,
            xs,
            columns,
            type: type === HISTOGRAM ? 'area-step' : type,
        },
        axis: {
            x: axisX,
            y: axisY,
        },
        pie: {
            label: {
                show: false,
            },
        },
        tooltip: shortForm ? { show: false } : tooltip,
        line,
    };
};

const Chart = (props) => {
    const theme = Theme.getStyle('popup');
    const { table = [[]], chart = {}, size, legend, axisX, axisY, shortForm = false } = props;
    const chartRef = useRef(null);
    const {
        type = 'bar',
        xIndex = -1,
        yIndex,
        categoryIndexes = [],
        order,
        bin = 5,
        boundary = 'right',
    } = chart;
    const id = `c${generateHash()}`;

    const content = getNoResultText(chart);

    if (!isDrawable({ type, xIndex, yIndex, categoryIndexes })) {
        return shortForm ? (
            <div className={theme.data_add_box}>
                <p>{CommonUtils.getLang('DataAnalytics.unable_to_express_chart')}</p>
            </div>
        ) : (
            <div className={theme.graph_cont}>
                <div id={id} style={{ height: '100%' }}>
                    <div className={theme.alert}>
                        {CommonUtils.getLang('DataAnalytics.unable_to_express_chart')}
                    </div>
                </div>
            </div>
        );
    }

    useEffect(() => {
        if (
            categoryIndexes.length &&
            ((type !== HISTOGRAM && xIndex >= 0 && xIndex <= table[0].length) || type === HISTOGRAM)
        ) {
            const option = generateOption({
                table,
                type,
                xIndex,
                yIndex,
                categoryIndexes,
                id,
                size,
                legend,
                axisX,
                axisY,
                theme,
                order,
                bin: Number(bin),
                boundary,
                shortForm,
                bindto: chartRef.current,
            });
            option && bb.generate(option);
        }
    }, []);

    if (!content) {
        return (
            <div className={theme.chart_area}>
                <div id={id} style={{ height: '100%' }} ref={chartRef} />
            </div>
        );
    }

    return shortForm ? (
        <div className={theme.data_add_box}>
            <p>{content}</p>
        </div>
    ) : (
        <div className={theme.graph_cont}>
            <div id={id} style={{ height: '100%' }} ref={chartRef}>
                <div className={theme.alert}>{content}</div>
            </div>
        </div>
    );
};

export default Chart;

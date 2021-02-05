import React, { useEffect } from 'react';
import _ from 'lodash';
import _map from 'lodash/map';
import _slice from 'lodash/slice';
import _floor from 'lodash/floor';
import _forEach from 'lodash/forEach';
import _toPairs from 'lodash/toPairs';
import _findIndex from 'lodash/findIndex';
import bb from 'billboard.js';

import Theme from '@utils/Theme';
import '@assets/entry/scss/widget/insight.css';

import { CommonUtils } from '@utils/Common';
import { isNumberColumn, hasNumberColumn, categoryKeys, getBinWidth } from '@utils/dataAnalytics';
import { GRAPH_COLOR, HISTOGRAM } from '@constants/dataAnalytics';
const { generateHash } = CommonUtils;

const getPieChart = (table, xIndex, categoryIndex) => {
    const isAddedOption = categoryIndex === table[0].length;
    return [
        [table[0][xIndex], isAddedOption ? '개수' : table[0][categoryIndex]],
        ..._toPairs(
            table.slice(1).reduce((prev, row) => {
                prev[row[xIndex]] = prev[row[xIndex]] || 0;
                prev[row[xIndex]] += Number(isAddedOption ? 1 : row[categoryIndex]);
                return prev;
            }, {})
        ),
    ];
};

const scatterChart = (table, xIndex, yIndex, categoryIndex) =>
    _map(
        table.slice(1).reduce((prev, row) => {
            prev[row[categoryIndex]] = prev[row[categoryIndex]] || [];
            prev[row[categoryIndex]].push(row[yIndex]);
            prev[`${row[categoryIndex]}_x`] = prev[`${row[categoryIndex]}_x`] || [];
            prev[`${row[categoryIndex]}_x`].push(row[xIndex]);
            return prev;
        }, {}),
        (value, index) => [index, ...value]
    );

const getHistogramChart = (table, categoryIndexes, bin, boundary) => {
    const { width: binWidth, min, max } = getBinWidth(table, categoryIndexes, boundary, bin);
    const x = new Array(bin + 1).fill(0);

    const xRow = ['histogram_chart_x', ..._map(x, (__, index) => (index + 1) * binWidth + min)];
    const extRow = _map(categoryIndexes, (index) => {
        const result = new Array(bin + 1).fill(0);
        result[0] = table[0][index];
        _forEach(table.slice(1), (row) => {
            const binIndex = _floor((row[index] - min) / binWidth);
            if (
                (boundary === 'right' && (row[index] - min) % binWidth == 0) ||
                row[index] - max === 0
            ) {
                result[binIndex]++;
            } else {
                result[binIndex + 1]++;
            }
        });
        result.push(0);

        return result;
    });

    console.log({ xRow, extRow });

    return [xRow, ...extRow];
};

const scatterXs = (columns) => {
    const xs = {};
    for (let index = 0; index < columns.length; index += 2) {
        xs[index / 2] = `${index / 2}_x`;
        columns[index][0] = index / 2;
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
    background-color:${GRAPH_COLOR[type][index % GRAPH_COLOR[type].length]};
    float: left;
    width: 14px;
    height: 14px;
    margin: -1px 7px 0 0;
    vertical-align: middle;
`;

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
                [...categoryIndexes].map((index) => _.unzip(orderedTable)[index])
            );
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
                init: {
                    x: 100,
                },
            };
            break;
        }
        case 'pie': {
            const isAddedOption = categoryIndexes[0] === table[0].length;
            const pieChart = getPieChart(table, xIndex, categoryIndexes[0]);
            columns = isAddedOption ? pieChart : deduplicationColumn(pieChart);
            x = table[0][xIndex];
            tooltip = {
                contents: (data) => {
                    const [{ name, ratio, value }] = data;
                    const index = _findIndex(
                        _map(table.slice(1), (row) => row[xIndex]),
                        (col) => col == name
                    );

                    return `
                        <div class="${theme.chart_tooltip}">
                            <span
                                className="${theme.bg}"
                                style="${getMouseOverStyle(type, index)}"
                            >
                                &nbsp;
                            </span>
                            ${name} | ${_floor(ratio * 100)}% (${
                        isAddedOption ? '개수' : table[0][categoryIndexes[0]]
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
                pattern: [
                    '<g transform="translate(-336 -457) translate(336 457)"><circle cx="4" cy="4" r="3"/></g>',
                    '<path d="M1 1H7V7H1z" transform="translate(-384 -457) translate(384 457)"/>',
                    '<path d="M5.937 2.766h-3.6v3.6h3.6v-3.6z" transform="translate(-432 -457) translate(432 456) translate(0 .2) rotate(45 4.137 4.566)"/>',
                    '<path d="M4 2.236L1.618 7h4.764L4 2.236z" transform="translate(-480 -457) translate(480 457)"/>',
                    '<path d="M7.2.8L.8 7.2M7.2 7.2L.8.8" transform="translate(-528 -457) translate(528 457)"/>',
                    '<path d="M0 3.714L8 3.714M4 0L4 8" transform="translate(-576 -457) translate(576 457)"/>',
                ],
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
                                style="${getMouseOverStyle(type, name)}"
                            >
                                &nbsp;
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
            columns = getHistogramChart(table, categoryIndexes, bin, boundary);
            axisX = null;
            x = 'histogram_chart_x';
            line = {
                step: {
                    type: 'step-after',
                },
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
                                style="${getMouseOverStyle(type, name)}"
                            >
                                &nbsp;
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
        bindto: `#${id}`,
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
        tooltip: {
            grouped: false,
            ...tooltip,
        },
        line,
    };
};

const isDrawable = (table) => table[0].length > 1 && hasNumberColumn(table);

const Chart = (props) => {
    const theme = Theme.getStyle('popup');
    const { table = [[]], chart = {}, size, legend, axisX, axisY, shortForm = false } = props;

    const {
        type = 'bar',
        xIndex = -1,
        yIndex,
        categoryIndexes = [],
        order,
        bin = 5,
        boundary = 'left',
    } = chart;
    const id = `c${generateHash()}`;

    let content = '';

    if (!isDrawable(table)) {
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
                bin,
                boundary,
            });
            option && bb.generate(option);
        }
    }, []);

    if (type !== HISTOGRAM && xIndex === -1) {
        content = CommonUtils.getLang('DataAnalytics.select_x_axis');
    } else if (yIndex === -1 && type === 'scatter') {
        content = CommonUtils.getLang('DataAnalytics.select_y_axis');
    } else if (!categoryIndexes.length) {
        content = CommonUtils.getLang('DataAnalytics.select_legend');
    }

    if (!content) {
        return (
            <div className={theme.chart_area}>
                <div id={id} style={{ height: '100%' }} />
            </div>
        );
    }

    return shortForm ? (
        <div className={theme.data_add_box}>
            <p>{content}</p>
        </div>
    ) : (
        <div className={theme.graph_cont}>
            <div id={id} style={{ height: '100%' }}>
                <div className={theme.alert}>{content}</div>
            </div>
        </div>
    );
};

export default Chart;

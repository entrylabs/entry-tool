import React, { useEffect } from 'react';
import _ from 'lodash';
import _slice from 'lodash/slice';
import _forEach from 'lodash/forEach';
import bb from 'billboard.js';

import Theme from '@utils/Theme';
import '@assets/entry/scss/widget/insight.css';

import { CommonUtils } from '@utils/Common';
import { hasNumberColumn, categoryKeys, isZipable } from '@utils/dataAnalytics';
const { generateHash } = CommonUtils;

const pivot = (table, xIndex, yIndex, categoryIndex) =>
    table.slice(1).reduce((prev, row) => {
        prev[row[xIndex]] = prev[row[xIndex]] || {};
        prev[row[xIndex]][row[categoryIndex]] = row[yIndex];
        return prev;
    }, {});

const makeTable = (pvTable, cateKey) =>
    cateKey.map((key) => [key, ..._.map(pvTable, (xAxis) => xAxis[key] || 0)]);

const pivotTable = (table, xIndex, yIndex, categoryIndex) => [
    [table[0][xIndex], ..._.uniq(table.slice(1).map((row) => row[xIndex]))],
    ...makeTable(pivot(table, xIndex, yIndex, categoryIndex), categoryKeys(table, categoryIndex)),
];

const pieChart = (table, xIndex, categoryIndex) => [
    [table[0][xIndex], table[0][categoryIndex]],
    ..._.toPairs(
        table.slice(1).reduce((prev, row) => {
            prev[row[xIndex]] = prev[row[xIndex]] || 0;
            prev[row[xIndex]] += Number(row[categoryIndex]);
            return prev;
        }, {})
    ),
];

const scatterChart = (table, xIndex, yIndex, categoryIndex) =>
    _.map(
        table.slice(1).reduce((prev, row) => {
            prev[`${row[categoryIndex]}-${table[0][yIndex]}`] =
                prev[`${row[categoryIndex]}-${table[0][yIndex]}`] || [];
            prev[`${row[categoryIndex]}-${table[0][yIndex]}`].push(row[yIndex]);
            prev[`${row[categoryIndex]}-${table[0][xIndex]}`] =
                prev[`${row[categoryIndex]}-${table[0][xIndex]}`] || [];
            prev[`${row[categoryIndex]}-${table[0][xIndex]}`].push(row[xIndex]);
            return prev;
        }, {}),
        (value, index) => [index, ...value]
    );

const scatterXs = (table, xIndex, yIndex, categoryIndex) =>
    table.slice(1).reduce((prev, row) => {
        prev[
            `${row[categoryIndex]}-${table[0][yIndex]}`
        ] = `${row[categoryIndex]}-${table[0][xIndex]}`;
        return prev;
    }, {});

const tabString = '&emsp;';

const addValueToKey = (table) => [
    table[0],
    ...table
        .slice(1)
        .map((item) => [`${item[0]}${tabString}|${tabString}${item[1]}${tabString}|`, item[1]]),
];

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

const generateOption = (option) => {
    const {
        table,
        type,
        xIndex,
        yIndex = -1,
        categoryIndexes,
        id,
        size,
        tooltip,
        legend = { show: false },
        axisY,
    } = option;

    let x;
    let xs;
    let columns;
    let grid;
    let point;
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
        case 'line':
            columns = deduplicationColumn(
                [...categoryIndexes].map((index) => _.unzip(table)[index])
            );
            axisX.categories = table.slice(1).map((row) => row[xIndex]);
            break;
        case 'pie':
            columns = deduplicationColumn(
                addValueToKey(pieChart(table, xIndex, categoryIndexes[0]))
            );
            x = table[0][xIndex];
            break;
        case 'scatter': {
            columns = deduplicationColumn(scatterChart(table, xIndex, yIndex, categoryIndexes));
            xs = scatterXs(table, xIndex, yIndex, categoryIndexes);
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
        tooltip,
        bindto: `#${id}`,
        data: {
            x,
            xs,
            columns,
            type,
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
        },
    };
};

const isDrawable = (table) => table[0].length > 1 && hasNumberColumn(table);

const Chart = (props) => {
    const theme = Theme.getStyle('popup');
    const {
        table = [[]],
        chart = {},
        size,
        tooltip = { grouped: false },
        legend,
        axisX,
        axisY,
        shortForm = false,
    } = props;

    const { type = 'bar', xIndex = -1, yIndex, categoryIndexes = [] } = chart;
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
        if (categoryIndexes.length && xIndex >= 0 && xIndex < table[0].length) {
            const option = generateOption({
                table,
                type,
                xIndex,
                yIndex,
                categoryIndexes,
                id,
                size,
                tooltip,
                legend,
                axisX,
                axisY,
            });
            option && bb.generate(option);
        }
    }, []);

    if (xIndex === -1) {
        content = CommonUtils.getLang('DataAnalytics.select_x_axis');
    } else if (
        isZipable(table, xIndex) &&
        yIndex === -1 &&
        !categoryIndexes.length &&
        type !== 'scatter' &&
        type !== 'pie'
    ) {
        content = CommonUtils.getLang('DataAnalytics.select_y_axis_or_legend');
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

import React, { useEffect } from 'react';
import _ from 'lodash';
import bb from 'billboard.js';

import Styles from '@assets/entry/scss/popup.scss';
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
    let { axisX = { type: 'category', tick: { show: true } } } = option;

    switch (type) {
        case 'bar':
        case 'line':
            if (yIndex !== -1) {
                columns = pivotTable(table, xIndex, yIndex, categoryIndexes[0]);
                x = table[0][xIndex];
            } else {
                columns = [...categoryIndexes].map((index) => _.unzip(table)[index]);
                axisX.categories = table.slice(1).map((row) => row[xIndex]);
            }
            break;
        case 'pie':
            columns = addValueToKey(pieChart(table, xIndex, categoryIndexes[0]));
            x = table[0][xIndex];
            break;
        case 'scatter': {
            columns = scatterChart(table, xIndex, yIndex, categoryIndexes);
            xs = scatterXs(table, xIndex, yIndex, categoryIndexes);
            const { tick = {} } = axisX;
            axisX = {
                tick: {
                    ...tick,
                    fit: false,
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
        legend,
        size,
        tooltip,
        bindto: `#${id}`,
        data: {
            x,
            xs,
            columns,
            type,
        },
        axis: {
            x: {
                ...axisX,
                tick: {
                    culling: true,
                },
            },
            y: axisY,
        },
        pie: {
            label: {
                show: false,
            },
        },
    };
};

const isDrawable = (table) => table[0].length > 1 && hasNumberColumn(table);

const Chart = (props) => {
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
            <div className={Styles.data_add_box}>
                <a onClick={(e) => e.preventDefault()}>
                    <span className={Styles.blind}>
                        {CommonUtils.getLang('DataAnalytics.add_data')}
                    </span>
                </a>
                <p>{CommonUtils.getLang('DataAnalytics.unable_to_express_chart')}</p>
            </div>
        ) : (
            <div className={Styles.graph_cont}>
                <div id={id} style={{ height: '100%' }}>
                    <div className={Styles.alert}>
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
            <div className={Styles.chart_area}>
                <div id={id} style={{ height: '100%' }} />
            </div>
        );
    }

    return shortForm ? (
        <div className={Styles.data_add_box}>
            <a onClick={(e) => e.preventDefault()}>
                <span className={Styles.blind}>{content}</span>
            </a>
            <p>{content}</p>
        </div>
    ) : (
        <div className={Styles.graph_cont}>
            <div id={id} style={{ height: '100%' }}>
                <div className={Styles.alert}>{content}</div>
            </div>
        </div>
    );
};

export default Chart;

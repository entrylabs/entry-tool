import React, { useEffect } from 'react';
import bb from 'billboard.js';

import Styles from '@assets/entry/scss/popup.scss';
import '@assets/entry/scss/widget/insight.css';

import { CommonUtils, isString, categoryKeys, isZipable } from '@utils/Common';
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
    } = option;

    let x;
    let xs;
    let columns;
    let axisX = { type: 'category' };

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
            columns = pieChart(table, xIndex, categoryIndexes[0]);
            x = table[0][xIndex];
            break;
        case 'scatter':
            columns = scatterChart(table, xIndex, yIndex, categoryIndexes);
            xs = scatterXs(table, xIndex, yIndex, categoryIndexes);
            axisX = {
                tick: {
                    fit: false,
                },
            };
            break;
        default:
            columns = [[]];
            break;
    }

    return {
        id,
        legend,
        size,
        tooltip,
        bar: {
            width: {
                ratio: 0.7,
            },
        },
        bindto: `#${id}`,
        data: {
            x,
            xs,
            columns,
            type,
        },
        axis: {
            x: axisX,
        },
    };
};

const hasNumberColumn = (table) => {
    for (let j = 0; j < table[0].length; j++) {
        let i = 1;
        for (; i < table.length; i++) {
            if (isString(table[i][j])) {
                break;
            }
        }
        if (i === table.length) {
            return true;
        }
    }
    return false;
};

const isDrawable = (table) => table[0].length > 1 && hasNumberColumn(table);

const Chart = (props) => {
    const { table = [[]], chart = {}, size, tooltip = { grouped: false }, legend } = props;

    const { type = 'bar', xIndex = -1, yIndex, categoryIndexes = [] } = chart;
    const id = `c${generateHash()}`;

    if (!isDrawable(table)) {
        return (
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
            });
            option && bb.generate(option);
        }
    }, []);

    let content = null;

    if (!categoryIndexes.length) {
        content = (
            <div className={Styles.alert}>{CommonUtils.getLang('DataAnalytics.select_legend')}</div>
        );
    }

    if (xIndex === -1) {
        content = (
            <div className={Styles.alert}>{CommonUtils.getLang('DataAnalytics.select_x_axis')}</div>
        );
    } else if (isZipable(table, xIndex) && yIndex === -1 && type !== 'scatter') {
        content = (
            <div className={Styles.alert}>
                {CommonUtils.getLang('DataAnalytics.select_y_axis_or_legend')}
            </div>
        );
    } else if (yIndex === -1 && type === 'scatter') {
        content = (
            <div className={Styles.alert}>{CommonUtils.getLang('DataAnalytics.select_y_axis')}</div>
        );
    }

    return (
        <div className={Styles.graph_cont}>
            <div id={id} style={{ height: '100%' }}>
                {content}
            </div>
        </div>
    );
};

export default Chart;

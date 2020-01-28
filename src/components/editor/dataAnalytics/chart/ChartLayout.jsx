import React, { useContext } from 'react';
import XAxis from './XAxis';
import YAxis from './YAxis';
import Legend from './Legend';
import Chart from '@components/widget/Chart';
import { DataAnalyticsContext } from '../context/DataAnalyticsContext';
import { isString, isZipable, categoryKeys, CommonUtils } from '@utils/Common';

import Styles from '@assets/entry/scss/popup.scss';

const { generateHash } = CommonUtils;

const getNumberColumnIndexes = (table, banIndexes = []) => {
    const columnIndexes = [];
    table[0].forEach((label, index) => {
        if (_.some(banIndexes, (banIndex) => index === banIndex)) {
            return;
        }

        let i;
        for (i = 1; i < table.length; i++) {
            if (isString(table[i][index])) {
                break;
            }
        }

        if (i === table.length) {
            columnIndexes.push(index);
        }
    });
    return columnIndexes;
};
const getXAxis = (table, type) => {
    if (type === 'bar') {
        return getNumberColumnIndexes(table);
    }
    return table[0].map((col, index) => index);
};
const getYAxis = (table, xIndex) => getNumberColumnIndexes(table, [xIndex]);
const getCategory = (table, xIndex, yIndex, categoryIndexes, type) => {
    switch (type) {
        case 'scatter':
            return categoryKeys(table, categoryIndexes[0]);
        case 'pie':
            return categoryKeys(table, xIndex);
        default:
            return yIndex === -1
                ? getNumberColumnIndexes(table, [xIndex])
                : categoryKeys(table, categoryIndexes[0]);
    }
};

const ChartLayout = () => {
    const { dataAnalytics } = useContext(DataAnalyticsContext);
    const { table, charts = [], chartIndex } = dataAnalytics;
    const chart = charts.length ? charts[chartIndex] : {};
    const { xIndex = -1, yIndex = -1, categoryIndexes = [], type } = chart;
    const xAxis = getXAxis(table);
    const yAxis = getYAxis(table, xIndex);
    const category = getCategory(table, xIndex, yIndex, categoryIndexes, type);

    return (
        <div className={Styles.cont_inner}>
            <div className={Styles.chart_box}>
                {charts.length ? (
                    <>
                        <Legend
                            disable={!categoryIndexes.length}
                            checkBox={yIndex === -1 && type !== 'pie' && type !== 'scatter'}
                            categoryIndexes={categoryIndexes}
                            category={category}
                        />

                        {type === 'pie' ? null : (
                            <YAxis
                                disable={!isZipable(table, xIndex)}
                                yAxisIndex={yAxis}
                                yIndex={yIndex}
                            />
                        )}

                        <XAxis xAxisIndex={xAxis} xIndex={xIndex} />

                        {/* 그래프 */}
                        <Chart
                            key={`c${generateHash()}`}
                            legend={{ show: type === 'pie' }}
                            table={table}
                            chart={charts[chartIndex]}
                            size={{
                                height: 397,
                            }}
                        />
                    </>
                ) : (
                    <div className={Styles.data_add_box}>
                        <a href="#" onClick={(event) => event.preventDefault()}>
                            <span className={Styles.blind}>차트 추가하기</span>
                        </a>
                        <p>차트를 먼저 추가해주세요.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChartLayout;

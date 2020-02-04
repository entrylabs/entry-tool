import React, { useContext } from 'react';
import XAxis from './XAxis';
import YAxis from './YAxis';
import Legend from './Legend';
import Chart from '@components/widget/Chart';
import { DataAnalyticsContext } from '../context/DataAnalyticsContext';
import { isString, isZipable, categoryKeys, CommonUtils } from '@utils/Common';

import Styles from '@assets/entry/scss/popup.scss';

const { generateHash } = CommonUtils;

const getNumberColumnIndexes = (table, banIndexes = []) =>
    _.reduce(
        table[0],
        // eslint-disable-next-line no-confusing-arrow
        (prev, curr, index) =>
            !_.some(banIndexes, (banIndex) => index === banIndex) &&
            !_.some(table.slice(1), (row) => isString(row[index]))
                ? [...prev, index]
                : prev,
        []
    );

const getXAxis = (table, type) =>
    // eslint-disable-next-line prettier/prettier
    (type === 'scatter' ? getNumberColumnIndexes(table) : table[0].map((col, index) => index));
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
    const { table = [[]], charts = [], chartIndex } = dataAnalytics;
    const chart = charts.length ? charts[chartIndex] : {};
    const { xIndex = -1, yIndex = -1, categoryIndexes = [], type } = chart;
    const xAxis = getXAxis(table, type);
    const yAxis = getYAxis(table, xIndex);
    const category = getCategory(table, xIndex, yIndex, categoryIndexes, type);

    return (
        <div className={Styles.cont_inner}>
            <div className={Styles.chart_box}>
                {charts.length ? (
                    <>
                        <Legend
                            disabled={
                                !category.length ||
                                xIndex === -1 ||
                                (type === 'scatter' && yIndex === -1)
                            }
                            checkBox={yIndex === -1 && type !== 'pie' && type !== 'scatter'}
                            selectedCategoryIndexes={categoryIndexes}
                            categoryIndexes={getNumberColumnIndexes(table, [xIndex, yIndex])}
                            category={category}
                        />

                        {type === 'pie' ? null : (
                            <YAxis
                                disable={
                                    !yAxis.length ||
                                    (!isZipable(table, xIndex) && type !== 'scatter') ||
                                    xIndex === -1
                                }
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
                        <p>{CommonUtils.getLang('DataAnalytics.add_chart_first')}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChartLayout;

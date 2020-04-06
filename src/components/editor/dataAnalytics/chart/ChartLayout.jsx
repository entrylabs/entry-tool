import React, { useContext } from 'react';
import XAxis from './XAxis';
import YAxis from './YAxis';
import Legend from './Legend';
import Chart from '@components/widget/Chart';
import { DataAnalyticsContext } from '../context/DataAnalyticsContext';
import { isZipable, CommonUtils, getNumberColumnIndexes } from '@utils/Common';

import Styles from '@assets/entry/scss/popup.scss';

const { generateHash } = CommonUtils;

const getXAxis = (table, type) =>
    // eslint-disable-next-line prettier/prettier
    (type === 'scatter' ? getNumberColumnIndexes(table) : table[0].map((col, index) => index));
const getYAxis = (table, xIndex) => getNumberColumnIndexes(table, [xIndex]);

const ChartLayout = () => {
    const { dataAnalytics } = useContext(DataAnalyticsContext);
    const { table = [[]], charts = [], chartIndex } = dataAnalytics;
    const chart = charts.length ? charts[chartIndex] : {};
    const { xIndex = -1, yIndex = -1, type } = chart;
    const xAxis = getXAxis(table, type);
    const yAxis = getYAxis(table, xIndex);
    const dropdownItems = _.reduce(
        table[0],
        // eslint-disable-next-line no-confusing-arrow
        (prev, curr, index) =>
            !_.some([xIndex, yIndex], (banIndex) => index === banIndex) ? [...prev, index] : prev,
        []
    );
    chart.categoryIndexes = chart.categoryIndexes || [];
    if (chart.xIndex > _.max(xAxis)) {
        chart.xIndex = -1;
        chart.yIndex = -1;
        chart.categoryIndexes = [];
    } else if (chart.yIndex > _.max(yAxis)) {
        chart.yIndex = -1;
        chart.categoryIndexes = [];
    } else if (
        _.max(chart.categoryIndexes.length ? chart.categoryIndexes : [-1]) > _.max(dropdownItems)
    ) {
        chart.categoryIndexes = [];
    }

    return (
        <div className={Styles.cont_inner}>
            <div className={Styles.chart_box}>
                {charts.length ? (
                    <>
                        <div className={Styles.legend_box}>
                            <XAxis xAxisIndex={xAxis} xIndex={chart.xIndex} />

                            {type === 'pie' ? null : (
                                <YAxis
                                    disable={
                                        !yAxis.length ||
                                        (!isZipable(table, chart.xIndex) && type !== 'scatter') ||
                                        chart.xIndex === -1
                                    }
                                    yAxisIndex={yAxis}
                                    yIndex={chart.yIndex}
                                />
                            )}

                            <Legend
                                disabled={
                                    chart.xIndex === -1 ||
                                    (type === 'scatter' && chart.yIndex === -1) ||
                                    !dropdownItems.length
                                }
                                checkBox={
                                    chart.yIndex === -1 && type !== 'pie' && type !== 'scatter'
                                }
                                selectedLegend={chart.categoryIndexes}
                                dropdownItems={dropdownItems}
                            />
                        </div>

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
                        <p>{CommonUtils.getLang('DataAnalytics.add_chart_first')}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChartLayout;

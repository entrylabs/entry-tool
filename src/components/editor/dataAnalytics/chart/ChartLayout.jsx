import React, { useContext } from 'react';
import XAxis from './XAxis';
import YAxis from './YAxis';
import Legend from './Legend';
import LegendList from './LegendList';
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
    const { dataAnalytics, dispatch } = useContext(DataAnalyticsContext);
    const { table = [[]], charts = [], chartIndex } = dataAnalytics;
    const chart = charts.length ? charts[chartIndex] : {};
    const { xIndex = -1, yIndex = -1, type, visibleLegend } = chart;
    const xAxis = getXAxis(table, type);
    const yAxis = getYAxis(table, xIndex);
    const dropdownItems = _.reduce(
        table[0],
        // eslint-disable-next-line no-confusing-arrow
        (prev, curr, index) =>
            !_.some([xIndex, yIndex], (banIndex) => index === banIndex) ? [...prev, index] : prev,
        []
    );
    const handleClick = () => {
        dispatch({
            type: 'TOGGLE_VISIBLE_LEGEND',
            visible: !visibleLegend,
        });
    };

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
                        {chart.categoryIndexes.length && (type !== 'scatter' || visibleLegend) ? (
                            <LegendList />
                        ) : null}

                        {/* 그래프 */}
                        <Chart
                            key={`c${generateHash()}`}
                            legend={{ show: false }}
                            table={table}
                            chart={charts[chartIndex]}
                            size={{
                                height: 378,
                            }}
                        />
                        {type === 'scatter' ? (
                            <label htmlFor="switch" className={Styles.scatter_legend}>
                                <span className={Styles.sjt}>표현 값</span>
                                <input
                                    type="checkbox"
                                    id="switch"
                                    name="switch"
                                    className={Styles.blind}
                                    value={visibleLegend}
                                    onClick={handleClick}
                                />
                                <span className={Styles.switch_box}></span>
                            </label>
                        ) : null}
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

import React, { useContext, useCallback } from 'react';
import XAxis from './XAxis';
import YAxis from './YAxis';
import Legend from './Legend';
import Degree from './Degree/Group';
import Order from './Order';
import TitleInput from './TitleInput';
import VerticalLegend from './VerticalLegend';
import HorizontalLegend from './HorizontalLegend';
import Chart from '@components/widget/Chart';
import { DataAnalyticsContext } from '@contexts/dataAnalytics';
import { CommonUtils } from '@utils/Common';
import { getTrimedTable, isDrawable, getNoResultText } from '@utils/dataAnalytics';
import {
    SCATTER,
    PIE,
    NONE,
    LEGEND_OPTIONS,
    SCATTERGRID,
    HISTOGRAM,
} from '@constants/dataAnalytics';
import Theme from '@utils/Theme';

const ChartLayout = () => {
    const theme = Theme.getStyle('popup');
    const { dataAnalytics, dispatch } = useContext(DataAnalyticsContext);
    const { selected = {} } = dataAnalytics;
    const { id, chart = [], chartIndex = 0, table: selectedTable } = selected;
    const table = getTrimedTable(selectedTable);
    const selectedChart = chart[chartIndex] || {};
    const { type, xIndex, yIndex, categoryIndexes = [], order: sort, bin, boundary } =
        selectedChart || {};
    const isHorizontalLegend = type !== 'pie';
    const key =
        `chart_${id}_${chartIndex}_${xIndex}_${yIndex}` +
        `_${categoryIndexes.toString()}_${sort}_${bin}_${boundary}`;
    const {
        xAxis,
        yAxis,
        order,
        degree,
        category,
        checkBox,
        showSelectAll,
        maximumSelectionLength,
    } = LEGEND_OPTIONS[type];

    const handleRemoveClick = useCallback((event) => {
        event.preventDefault();
        dispatch({ type: 'REMOVE_CHART' });
    }, []);

    console.log({ id: isDrawable(selectedChart), selectedChart });

    return (
        <>
            <div className={theme.form_box}>
                <div className={theme.input_inner}>
                    <label htmlFor="ChartName" className={theme.tit_label}>
                        {CommonUtils.getLang('DataAnalytics.chart_name')}
                    </label>
                    <div className={theme.input_box}>
                        <TitleInput />
                    </div>
                    <a role="button" className={theme.del_btn} onClick={handleRemoveClick}>
                        {CommonUtils.getLang('DataAnalytics.remove_chart')}
                    </a>
                </div>
                <div className={theme.input_inner}>
                    {xAxis ? <XAxis key={`${key}_xaxis`} /> : ''}
                    {yAxis ? <YAxis key={`${key}_yaxis`} /> : ''}
                    {category ? (
                        <Legend
                            key={`${key}_category`}
                            checkBox={checkBox}
                            showSelectAll={showSelectAll}
                            maximumSelectionLength={maximumSelectionLength}
                        />
                    ) : (
                        ''
                    )}
                    {degree ? <Degree key={`${key}_degree`} /> : ''}
                    {order ? <Order key={`${key}_order`} /> : ''}
                </div>
            </div>
            {isDrawable(selectedChart) ? (
                <div
                    className={`${theme.graph_box} ${
                        !(categoryIndexes.length && isHorizontalLegend)
                            ? theme.vertical
                            : theme.horizontal
                    } ${theme[type]}
                    `}
                    style={{ backgroundColor: '#fff', height: '100%' }}
                >
                    {categoryIndexes.length &&
                    isHorizontalLegend &&
                    type !== SCATTER &&
                    type !== SCATTERGRID &&
                    categoryIndexes[0] !== table[0].length ? (
                        <HorizontalLegend table={table} chart={selectedChart} />
                    ) : null}
                    <div
                        style={{
                            width: type === PIE ? 500 : '',
                            height: type === PIE ? 500 : 378,
                            margin: 'auto',
                        }}
                    >
                        <Chart
                            key={key}
                            legend={{ show: false }}
                            table={table}
                            chart={chart[chartIndex]}
                            size={{
                                width: type === PIE ? 500 : '',
                                height: type === PIE ? 500 : 378,
                            }}
                        />
                    </div>
                    {categoryIndexes.length && !isHorizontalLegend ? (
                        <VerticalLegend table={table} chart={selectedChart} />
                    ) : null}
                </div>
            ) : (
                <div className={theme.chart_no_result} style={{ backgroundColor: '#fff' }}>
                    <p className={theme.dsc}>{getNoResultText(selectedChart)}</p>
                </div>
            )}
        </>
    );
};

export default ChartLayout;

import React, { useState, useEffect, useContext, useCallback, useMemo } from 'react';
import root from 'window-or-global';
import XAxis from './properties/XAxis';
import YAxis from './properties/YAxis';
import Legend from './properties/Legend';
import Degree from './properties/degree/Group';
import Order from './properties/Order';
import Coefficient from './properties/Coefficient';
import TitleInput from './TitleInput';
import VerticalLegend from './VerticalLegend';
import HorizontalLegend from './HorizontalLegend';
import Chart from '@components/widget/Chart';
import { DataAnalyticsContext } from '@contexts/dataAnalytics';
import { CommonUtils } from '@utils/Common';
import { getTrimedTable, isDrawable, getNoResultText } from '@utils/dataAnalytics';
import { SCATTER, LEGEND_OPTIONS, SCATTERGRID } from '@constants/dataAnalytics';
import Theme from '@utils/Theme';

const ChartLayout = () => {
    const theme = Theme.getStyle('popup');
    const { dataAnalytics, dispatch } = useContext(DataAnalyticsContext);
    const { selected = {}, zoomIn } = dataAnalytics;
    const { id, chart = [], chartIndex = 0, table: selectedTable } = selected;
    const table = getTrimedTable(selectedTable);
    const selectedChart = chart[chartIndex] || {};
    const {
        type,
        xIndex,
        yIndex,
        categoryIndexes = [],
        order: sort,
        bin,
        boundary,
    } = selectedChart || {};
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
        coefficient,
        showSelectAll,
        maximumSelectionLength,
    } = LEGEND_OPTIONS[type];

    const handleRemoveClick = useCallback(
        (event) => {
            event.preventDefault();
            dispatch({ type: 'REMOVE_CHART' });
        },
        [dispatch]
    );

    const getScatterGridSize = useCallback((size) => {
        switch (size) {
            case 2:
                return 368;
            case 3:
                return 480;
            case 4:
            case 5:
                return 560;
            case 6:
                return 600;
            default:
                return 0;
        }
    }, []);

    const size = useMemo(() => {
        let width = root.innerWidth;
        let height = root.innerHeight;
        if (zoomIn) {
            if (type === SCATTERGRID) {
                width = 600;
                height = 600;
            } else {
                width = Math.max(width * 0.8, 600);
                height = (width * 3) / 4;
            }
        } else {
            if (type === SCATTERGRID) {
                width = getScatterGridSize(categoryIndexes.length);
                height = width;
            } else {
                height = Math.max(height * 0.5, 360);
                width = (height * 4) / 3;
            }
        }
        return { width, height };
    }, [categoryIndexes.length, getScatterGridSize, type, zoomIn]);

    return (
        <div className={theme.chart_wrap}>
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
                    {coefficient ? <Coefficient key={`${key}_order`} /> : ''}
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
                            width: size.width,
                            height: size.height,
                            margin: 'auto',
                        }}
                    >
                        <Chart
                            key={key}
                            legend={{ show: false }}
                            table={table}
                            chart={chart[chartIndex]}
                            size={{
                                width: size.width,
                                height: size.height,
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
        </div>
    );
};

export default ChartLayout;

const useChartSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });
    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowSize;
};

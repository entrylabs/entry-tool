import React, { useContext } from 'react';
import Navigation from './Navigation';
import { DataAnalyticsContext } from '@contexts/dataAnalytics';
import ChartLayout from './ChartLayout';
import Theme from '@utils/Theme';

const ChartEditor = () => {
    const theme = Theme.getStyle('popup');
    const { dataAnalytics, dispatch } = useContext(DataAnalyticsContext);
    const { selected } = dataAnalytics;
    const { chart = [], chartIndex = 0 } = selected;

    return (
        <div className={theme.chart_box}>
            <h2 className={theme.blind}>차트</h2>
            <div className={theme.inner}>
                <Navigation />
                {chart.length ? (
                    <ChartLayout />
                ) : (
                    <div className={theme.chart_no_result}>
                        <p className={theme.dsc}>차트를 먼저 추가해 주세요.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChartEditor;

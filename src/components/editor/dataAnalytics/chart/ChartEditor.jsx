import React, { useContext } from 'react';
import Navigation from './Navigation';
import { DataAnalyticsContext } from '@contexts/dataAnalytics';
import ChartLayout from './ChartLayout';
import Theme from '@utils/Theme';
import { CommonUtils } from '@utils/Common';

const ChartEditor = () => {
    const theme = Theme.getStyle('popup');
    const { dataAnalytics, dispatch } = useContext(DataAnalyticsContext);
    const { selected } = dataAnalytics;
    const { chart = [], chartIndex = 0 } = selected;

    return (
        <div className={theme.chart_box}>
            <h2 className={theme.blind}>{CommonUtils.getLang('DataAnalytics.chart')}</h2>
            <div className={theme.inner}>
                <Navigation />
                {chart.length ? (
                    <ChartLayout />
                ) : (
                    <div className={theme.chart_no_result}>
                        <p className={theme.dsc}>
                            {CommonUtils.getLang('DataAnalytics.please_add_chart')}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChartEditor;

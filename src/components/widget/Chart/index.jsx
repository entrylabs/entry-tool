import React, { useMemo } from 'react';

import Theme from '@utils/Theme';
import '@assets/entry/scss/widget/insight.css';

import { CommonUtils } from '@utils/Common';
import { isDrawable, getNoResultText } from '@utils/dataAnalytics';
import { BAR, HISTOGRAM, LINE, PIE, SCATTER, SCATTERGRID } from '@constants/dataAnalytics';

import Line from './Line';
import Bar from './Bar';
import Pie from './Pie';
import Scatter from './Scatter';
import ScatterGrid from './ScatterGrid';
import Histogram from './Histogram';

const Chart = (props) => {
    const theme = Theme.getStyle('popup');
    const { table = [[]], chart = {}, size } = props;
    const { type, xIndex, yIndex, categoryIndexes, id = `c${CommonUtils.generateHash()}` } = chart;

    const noResultContent = getNoResultText(chart);

    const BillboardChart = useMemo(() => {
        switch (type) {
            case LINE:
                return Line;
            case BAR:
                return Bar;
            case PIE:
                return Pie;
            case SCATTER:
                return Scatter;
            case SCATTERGRID:
                return ScatterGrid;
            case HISTOGRAM:
                return Histogram;
            default:
                return <></>;
        }
    }, [type]);

    if (!isDrawable({ type, xIndex, yIndex, categoryIndexes })) {
        return (
            <div className={theme.graph_cont}>
                <div id={id} style={{ height: '100%' }}>
                    <div className={theme.alert}>
                        {CommonUtils.getLang('DataAnalytics.unable_to_express_chart')}
                    </div>
                </div>
            </div>
        );
    }

    if (noResultContent) {
        return (
            <div className={theme.graph_cont}>
                <div id={id} style={{ height: '100%' }}>
                    <div className={theme.alert}>{noResultContent}</div>
                </div>
            </div>
        );
    }

    return <BillboardChart table={table} chart={chart} size={size} />;
};

export default Chart;

export { Line, Bar, Pie, Scatter, ScatterGrid, Histogram };

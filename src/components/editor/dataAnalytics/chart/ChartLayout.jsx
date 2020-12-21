import React, { useContext } from 'react';
import XAxis from './XAxis';
import YAxis from './YAxis';
import Legend from './Legend';
import TitleInput from './TitleInput';
import VerticalLegend from './VerticalLegend';
import HorizontalLegend from './HorizontalLegend';
import Chart from '@components/widget/Chart';
import { DataAnalyticsContext } from '@contexts/dataAnalytics';
import { CommonUtils } from '@utils/Common';
import { SCATTER, NONE } from '@constants/dataAnalytics';
import Theme from '@utils/Theme';

const isDrawable = ({ type = NONE, xIndex, yIndex, categoryIndexes } = {}) =>
    type !== NONE && xIndex !== -1 && categoryIndexes.length && (type !== SCATTER || yIndex !== -1);

const getNoResultText = ({ type = NONE, xIndex, yIndex, categoryIndexes = [] } = {}) => {
    let content;
    console.log({ type, xIndex, yIndex, categoryIndexes });
    if (xIndex === -1) {
        content = CommonUtils.getLang('DataAnalytics.select_x_axis');
    } else if (yIndex === -1 && type === SCATTER) {
        content = CommonUtils.getLang('DataAnalytics.select_y_axis');
    } else if (!categoryIndexes.length) {
        content = CommonUtils.getLang('DataAnalytics.select_legend');
    }
    return content;
};

const ChartLayout = () => {
    const theme = Theme.getStyle('popup');
    const { dataAnalytics, dispatch } = useContext(DataAnalyticsContext);
    const { selected = {} } = dataAnalytics;
    const { chart = [], chartIndex = -1, fields = [], origin = [] } = selected;
    const table = [[...fields], ...origin];
    const selectedChart = chart[chartIndex] || {};
    const { type, visibleLegend, categoryIndexes = [] } = selectedChart || {};
    const isHorizontalLegend = type !== 'pie';

    return (
        <>
            <div className={theme.form_box}>
                <div className={theme.input_inner}>
                    <label htmlFor="ChartName" className={theme.tit_label}>
                        차트 이름
                    </label>
                    <div className={theme.input_box}>
                        <TitleInput />
                    </div>
                    <a role="button" className={theme.del_btn}>
                        차트 삭제
                    </a>
                </div>
                <div className={theme.input_inner}>
                    <XAxis />
                    {type === 'scatter' ? <YAxis /> : ''}
                    <Legend />
                </div>
            </div>
            {isDrawable(selectedChart) ? (
                <div
                    className={`${theme.chart_group} ${
                        !(categoryIndexes.length && isHorizontalLegend)
                            ? theme.vertical
                            : theme.horizontal
                    }`}
                    style={{ backgroundColor: '#fff', height: '100%' }}
                >
                    {categoryIndexes.length &&
                    isHorizontalLegend &&
                    (type !== 'scatter' || visibleLegend) ? (
                        <HorizontalLegend table={table} chart={selectedChart} />
                    ) : null}
                    <Chart
                        legend={{ show: false }}
                        table={table}
                        chart={chart[chartIndex]}
                        size={{
                            height: 378,
                        }}
                    />
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

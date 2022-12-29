import { useMemo, useState } from 'react';
import { pure } from 'recompose';
import Theme from '@utils/Theme';
import Option from '../popup/Contents/Navigation/SearchOption';
import Chart from '@components/widget/Chart/index';
import VerticalLegend from '../editor/dataAnalytics/chart/VerticalLegend';
import HorizontalLegend from '../editor/dataAnalytics/chart/HorizontalLegend';
import { CommonUtils } from '@utils/Common';
import { isDrawableHorizontalLegend } from '@utils/dataAnalytics';
import cn from 'classnames';
import { BAR, HISTOGRAM, LINE, PIE, SCATTER, SCATTERGRID } from '@constants/dataAnalytics';
const { generateHash } = CommonUtils;

const ModalChart = (props) => {
    const theme = Theme.getStyle('popup');

    const { source = {}, onClose, togglePause, stop, isIframe, chartIndex = 0 } = props;
    const [isPaused, setPause] = useState(false);
    const [dropdown, setDropdown] = useState('');
    const [selected, select] = useState(chartIndex || 0);
    const toggleDropDown = (dropdown) => setDropdown(dropdown);
    const { fields = [], origin = [], chart: charts = [] } = source;
    const chartList = charts.map(({ title }, index) => [title, index]);
    const table = [fields, ...origin];
    const chart = charts[selected] || {};
    const selectChart = (option) => {
        // eslint-disable-next-line no-unused-vars
        const [name, index] = option;
        select(index);
    };

    // workspace가 아닌경우만 차트 실행시 스크롤 숨김처리
    const el = document.getElementsByTagName('body');
    const wsPath = window.location.pathname.indexOf('/ws');
    if (wsPath === -1) {
        el[0].style.overflow = 'hidden';
    }
    const closeAction = () => {
        if (wsPath === -1 && el[0] && el[0].style && el[0].style.overflow === 'hidden') {
            el[0].removeAttribute('style');
        }

        onClose();
    };

    const data = table;
    const { type, categoryIndexes } = chart;
    const isHorizontalLegend = useMemo(() => chart.type !== PIE, [chart]);

    const chartKey = useMemo(() => `c${generateHash()}`, [data, chart, isHorizontalLegend]);
    const chartSize = useMemo(() => {
        let width = 0;
        let height = 328;

        if (chart.type === SCATTERGRID) {
            width = 372;
            height = 372;
        } else if (chart.type === LINE || chart.type === BAR || chart.type === HISTOGRAM) {
            width = 700;
            height = 275;
        } else if (chart.type === PIE) {
            width = 448;
            height = 310;
        } else {
            width = 700;
        }

        return {
            width,
            height,
        };
    }, [chart]);
    const isShowSummary = useMemo(() => chart.type !== SCATTERGRID, [chart]);

    return (
        <div className={theme.dimmed}>
            <div className={isIframe ? theme.center_chart : theme.center}>
                <div className={theme.modal}>
                    <div className={theme.head}>
                        <div className={theme.text}>
                            {CommonUtils.getLang('DataAnalytics.show_chart')}
                        </div>
                        <div
                            className={theme.close}
                            id="chart_btn"
                            onClick={() => {
                                closeAction();
                            }}
                        />
                    </div>
                    <div className={theme.body}>
                        <div
                            className={theme.content}
                            style={{ minHeight: '440px', position: 'relative' }}
                        >
                            <Option
                                onSelect={selectChart}
                                options={chartList}
                                setDropdown={toggleDropDown}
                                isOpenDefault={!!dropdown}
                                defaultIndex={selected}
                            />
                            {isShowSummary && (
                                <div className={theme.summary}>
                                    <span className={`${theme.text} ${theme.bold}`}>
                                        {isHorizontalLegend
                                            ? CommonUtils.getLang('DataAnalytics.x_axis')
                                            : CommonUtils.getLang('DataAnalytics.column_name')}
                                    </span>
                                    <span className={`${theme.text} ${theme.cnt}`}>
                                        {table[0][chart.xIndex]}
                                    </span>
                                    {isHorizontalLegend && chart.yIndex !== -1 ? (
                                        <>
                                            <span className={`${theme.text} ${theme.bold}`}>
                                                {CommonUtils.getLang('DataAnalytics.y_axis')}
                                            </span>
                                            <span className={`${theme.text} ${theme.cnt}`}>
                                                {table[0][chart.yIndex]}
                                            </span>
                                        </>
                                    ) : null}
                                    <span className={`${theme.text} ${theme.bold}`}>
                                        {CommonUtils.getLang('DataAnalytics.legend')}
                                    </span>
                                    {chart.categoryIndexes ? (
                                        <span className={`${theme.text} ${theme.cnt}`}>
                                            {chart.categoryIndexes.length <= 1
                                                ? table[0][chart.categoryIndexes[0]]
                                                : `${
                                                      table[0][chart.categoryIndexes[0]]
                                                  } ${CommonUtils.getLang('DataAnalytics.and')} ${
                                                      chart.categoryIndexes.length - 1
                                                  }${CommonUtils.getLang('DataAnalytics.other')}`}
                                        </span>
                                    ) : null}
                                </div>
                            )}
                            {isDrawableHorizontalLegend({
                                categoryIndexes,
                                isHorizontalLegend,
                                type,
                                table,
                            }) ? (
                                <HorizontalLegend table={data} chart={chart} />
                            ) : null}
                            <div
                                className={`${theme.chart_area} ${
                                    isHorizontalLegend ? '' : theme.vertical
                                }`}
                            >
                                {chart && (
                                    <Chart
                                        key={chartKey}
                                        table={data}
                                        chart={chart}
                                        size={chartSize}
                                    />
                                )}
                            </div>
                            {chart.categoryIndexes &&
                            chart.categoryIndexes.length &&
                            !isHorizontalLegend ? (
                                <VerticalLegend table={data} chart={chart} />
                            ) : null}
                        </div>
                    </div>
                    <div className={theme.footer}>
                        <div className={theme.content}>
                            <div
                                className={cn(theme.chart_button, theme.stop)}
                                onClick={() => {
                                    stop();
                                    closeAction();
                                }}
                            >
                                {CommonUtils.getLang('DataAnalytics.stop')}
                            </div>
                            <div
                                className={cn(
                                    theme.chart_button,
                                    { [theme.pause]: !isPaused },
                                    { [theme.start]: isPaused }
                                )}
                                onClick={() => {
                                    setPause(!isPaused);
                                    togglePause();
                                }}
                            >
                                {CommonUtils.getLang(
                                    isPaused ? 'DataAnalytics.restart' : 'DataAnalytics.pause'
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {dropdown}
        </div>
    );
};

export default pure(ModalChart);

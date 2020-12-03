import React, { useContext } from 'react';
import XAxis from './XAxis';
import YAxis from './YAxis';
import Legend from './Legend';
import VerticalLegend from './VerticalLegend';
import HorizontalLegend from './HorizontalLegend';
import Chart from '@components/widget/Chart';
import { DataAnalyticsContext } from '@contexts/dataAnalytics';
import { isZipable, CommonUtils, getNumberColumnIndexes } from '@utils/Common';
import { BAR, LINE, SCATTER, PIE, NONE } from '@constants/dataAnalytics';
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
                        <input type="text" id="ChartName" name="ChartName" />
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
                        // key={`c${generateHash()}`}
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
// const { generateHash } = CommonUtils;

// const getXAxis = (table, type) =>
//     // eslint-disable-next-line prettier/prettier
//     type === 'scatter' ? getNumberColumnIndexes(table) : table[0].map((col, index) => index);
// const getYAxis = (table, xIndex) => getNumberColumnIndexes(table, [xIndex]);

// const ChartLayout = () => {
//     const { dataAnalytics, dispatch } = useContext(DataAnalyticsContext);
//     const { selected } = dataAnalytics;
//     const { field = [], rows = [], chart: charts = [], chartIndex } = selected;
//     const table = [[...field], ...rows];
//     const chart = charts.length ? charts[chartIndex] : {};
//     const { xIndex = -1, yIndex = -1, type, visibleLegend } = chart;
//     const xAxis = getXAxis(table, type);
//     const yAxis = getYAxis(table, xIndex);
//     const dropdownItems = _.reduce(
//         table[0],
//         // eslint-disable-next-line no-confusing-arrow
//         (prev, curr, index) =>
//             !_.some([xIndex, yIndex], (banIndex) => index === banIndex) ? [...prev, index] : prev,
//         []
//     );
//     const isHorizontalLegend = type !== 'pie';

//     const handleClick = () => {
//         dispatch({
//             type: 'TOGGLE_VISIBLE_LEGEND',
//             visible: !visibleLegend,
//         });
//     };

//     chart.categoryIndexes = chart.categoryIndexes || [];
//     if (chart.xIndex > _.max(xAxis)) {
//         chart.xIndex = -1;
//         chart.yIndex = -1;
//         chart.categoryIndexes = [];
//     } else if (chart.yIndex > _.max(yAxis)) {
//         chart.yIndex = -1;
//         chart.categoryIndexes = [];
//     } else if (
//         _.max(chart.categoryIndexes.length ? chart.categoryIndexes : [-1]) > _.max(dropdownItems)
//     ) {
//         chart.categoryIndexes = [];
//     }

//     return (
//         <div className={Styles.cont_inner}>
//             <div className={Styles.chart_box}>
//                 {charts.length ? (
//                     <>
//                         <div className={Styles.legend_box}>
//                             <XAxis xAxisIndex={xAxis} xIndex={chart.xIndex} type={type} />

//                             {type === 'pie' ? null : (
//                                 <YAxis
//                                     disable={
//                                         !yAxis.length ||
//                                         (!isZipable(table, chart.xIndex) && type !== 'scatter') ||
//                                         chart.xIndex === -1
//                                     }
//                                     yAxisIndex={yAxis}
//                                     yIndex={chart.yIndex}
//                                 />
//                             )}

//                             <Legend
//                                 disabled={
//                                     chart.xIndex === -1 ||
//                                     (type === 'scatter' && chart.yIndex === -1) ||
//                                     !dropdownItems.length
//                                 }
//                                 checkBox={
//                                     chart.yIndex === -1 && type !== 'pie' && type !== 'scatter'
//                                 }
//                                 selectedLegend={chart.categoryIndexes}
//                                 dropdownItems={dropdownItems}
//                             />
//                         </div>
//                         <div
//                             className={`${Styles.chart_group} ${
//                                 chart.categoryIndexes.length
//                                     ? isHorizontalLegend
//                                         ? Styles.horizontal
//                                         : Styles.vertical
//                                     : ''
//                             }`}
//                         >
//                             {chart.categoryIndexes.length &&
//                             isHorizontalLegend &&
//                             (type !== 'scatter' || visibleLegend) ? (
//                                 <HorizontalLegend
//                                     table={table}
//                                     charts={charts}
//                                     chartIndex={chartIndex}
//                                 />
//                             ) : null}

//                             {/* 그래프 */}
//                             <Chart
//                                 key={`c${generateHash()}`}
//                                 legend={{ show: false }}
//                                 table={table}
//                                 chart={charts[chartIndex]}
//                                 size={{
//                                     height: 378,
//                                 }}
//                             />
//                             {chart.categoryIndexes.length && !isHorizontalLegend ? (
//                                 <VerticalLegend
//                                     table={table}
//                                     charts={charts}
//                                     chartIndex={chartIndex}
//                                 />
//                             ) : null}
//                         </div>
//                         {type === 'scatter' ? (
//                             <label htmlFor="switch" className={Styles.scatter_legend}>
//                                 <span className={Styles.sjt}>
//                                     {CommonUtils.getLang('DataAnalytics.legend')}
//                                 </span>
//                                 <input
//                                     type="checkbox"
//                                     id="switch"
//                                     name="switch"
//                                     className={Styles.blind}
//                                     checked={visibleLegend ? 'ckecked' : ''}
//                                     onClick={handleClick}
//                                 />
//                                 <span className={Styles.switch_box}></span>
//                             </label>
//                         ) : null}
//                     </>
//                 ) : (
//                     <div className={Styles.data_add_box}>
//                         <p>{CommonUtils.getLang('DataAnalytics.add_chart_first')}</p>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

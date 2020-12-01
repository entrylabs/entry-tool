import React, { useContext } from 'react';
import _ from 'lodash';
import XAxis from './XAxis';
import YAxis from './YAxis';
import Legend from './Legend';
import VerticalLegend from './VerticalLegend';
import HorizontalLegend from './HorizontalLegend';
import Chart from '@components/widget/Chart';
import { DataAnalyticsContext } from '@contexts/dataAnalytics';
import { isZipable, CommonUtils, getNumberColumnIndexes } from '@utils/Common';
import Styles from '@assets/entry/scss/popup.scss';

const ChartLayout = () => {
    const { dataAnalytics, dispatch } = useContext(DataAnalyticsContext);
    return (
        <>
            <div className={Styles.form_box}>
                <div className={Styles.input_inner}>
                    <label htmlFor="ChartName" className={Styles.tit_label}>
                        차트 이름
                    </label>
                    <div className={Styles.input_box}>
                        <input type="text" id="ChartName" name="ChartName" />
                    </div>
                    <a role="button" className={Styles.del_btn}>
                        차트 삭제
                    </a>
                </div>
                <div className={Styles.input_inner}>
                    <XAxis />
                    {/* <YAxis />
                    <Legend /> */}
                    {/* <div className={Styles.select_group}>
                        <label htmlFor="ChartName" className={Styles.tit_label}>
                            가로축
                        </label>
                    </div>
                    <div className={Styles.select_group} style={{ marginLeft: 45 }}>
                        <label htmlFor="ChartName" className={Styles.tit_label}>
                            계열
                        </label>
                    </div> */}
                </div>
            </div>
            {/* 테이블 차트 입력폼 */}
            <div className={Styles.chart_no_result} style={{ backgroundColor: '#fff' }}>
                <p className={Styles.dsc}>{}</p>
            </div>
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

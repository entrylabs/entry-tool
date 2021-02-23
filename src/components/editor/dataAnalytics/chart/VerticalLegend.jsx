import React from 'react';
import _toPairs from 'lodash/toPairs';
import _sumBy from 'lodash/sumBy';
import _round from 'lodash/round';
import { GRAPH_COLOR } from '@constants/dataAnalytics';
import { CommonUtils } from '@utils/Common';
import Theme from '@utils/Theme';
import { getPieChart } from '@utils/dataAnalytics';

const VerticalLegend = (props) => {
    const theme = Theme.getStyle('popup');
    const { table = [[]], charts = [], chartIndex, chart: chartProp } = props;
    const chart = chartProp || (charts.length ? charts[chartIndex] : {});
    const { type, xIndex = -1, categoryIndexes } = chart;
    const categoryIndex = categoryIndexes[0];
    const category = getPieChart(table, xIndex, categoryIndex).slice(1);

    const sum = _round(
        _sumBy(category, (item) => item[1]),
        2
    );

    return (
        <div className={theme.pie_legend}>
            <strong className={theme.legend_sjt}>
                <em>{CommonUtils.getLang('DataAnalytics.total')}</em>
                {sum}
            </strong>
            <div className={theme.scroll_box}>
                <ul className={theme.list}>
                    {category.map((item, index) => (
                        <li key={`legend_${index}`}>
                            <span
                                className={theme.bg}
                                style={{
                                    backgroundColor:
                                        GRAPH_COLOR[type][index % GRAPH_COLOR[type].length],
                                }}
                            >
                                &nbsp;
                            </span>
                            <span className={theme.cnt}>{item[0]}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default VerticalLegend;

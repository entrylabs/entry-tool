import React from 'react';
import _toPairs from 'lodash/toPairs';
import _sumBy from 'lodash/sumBy';
import { GRAPH_COLOR, PIE } from '@constants/dataAnalytics';
import { CommonUtils } from '@utils/Common';
import Theme from '@utils/Theme';

const VerticalLegend = (props) => {
    const theme = Theme.getStyle('popup');
    const { table = [[]], charts = [], chartIndex, chart: chartProp } = props;
    const chart = chartProp || (charts.length ? charts[chartIndex] : {});
    const { type, xIndex = -1, categoryIndexes } = chart;
    const categoryIndex = categoryIndexes[0];

    const category = _toPairs(
        table.slice(1).reduce((prev, row) => {
            prev[row[xIndex]] = prev[row[xIndex]] || 0;
            prev[row[xIndex]] += categoryIndex === table[0].length ? 1 : Number(row[categoryIndex]);
            return prev;
        }, {})
    );

    const sum = _sumBy(category, (item) => item[1]);

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

import React from 'react';
import { GRAPH_COLOR } from '../Constants';
import { CommonUtils } from '@utils/Common';

import Styles from '@assets/entry/scss/popup.scss';

const { generateHash } = CommonUtils;

const VerticalLegend = (props) => {
    const { table = [[]], charts = [], chartIndex } = props;
    const chart = charts.length ? charts[chartIndex] : {};
    const { xIndex = -1, categoryIndexes } = chart;
    const categoryIndex = categoryIndexes[0];

    const category = _.toPairs(
        table.slice(1).reduce((prev, row) => {
            prev[row[xIndex]] = prev[row[xIndex]] || 0;
            prev[row[xIndex]] += Number(row[categoryIndex]);
            return prev;
        }, {})
    );

    const sum = _.sumBy(category, (item) => item[1]);

    return (
        <div className={Styles.pie_legend}>
            <strong className={Styles.legend_sjt}>
                <em>종합</em>
                {sum}
            </strong>
            <div className={Styles.scroll_box}>
                <ul className={Styles.list}>
                    {category.map((item, index) => (
                        <li key={`legend_${generateHash()}`}>
                            <span
                                className={Styles.bg}
                                style={{
                                    backgroundColor: GRAPH_COLOR[index % GRAPH_COLOR.length],
                                }}
                            >
                                &nbsp;
                            </span>
                            <span className={Styles.cnt}>{item[0]}</span>
                            <span className={Styles.cnt}>{item[1]}</span>
                            <span className={Styles.cnt}>
                                {((item[1] / sum) * 100).toFixed(1)}%
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default VerticalLegend;

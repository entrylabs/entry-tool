import React from 'react';
import { CommonUtils, categoryKeys } from '@utils/Common';
import { GRAPH_COLOR } from '../Constants';

import Styles from '@assets/entry/scss/popup.scss';

const { generateHash } = CommonUtils;

const HorizontalLegend = (props) => {
    const { table = [[]], charts = [], chartIndex, chart: chartProp } = props;
    const chart = chartProp || (charts.length ? charts[chartIndex] : {});
    const { type, categoryIndexes } = chart;

    const labels =
        chart.yIndex === -1 && type !== 'scatter'
            ? categoryIndexes.map((index) => table[0][index])
            : categoryKeys(table, categoryIndexes[0]);

    return (
        <div className={Styles.horizontal_legend_box}>
            {labels.map((item, index) => (
                <span key={`legend_${generateHash()}`} className={Styles.legend}>
                    <em style={{ backgroundColor: GRAPH_COLOR[index % GRAPH_COLOR.length] }}>
                        &nbsp;
                    </em>
                    {item}
                </span>
            ))}
        </div>
    );
};

export default HorizontalLegend;

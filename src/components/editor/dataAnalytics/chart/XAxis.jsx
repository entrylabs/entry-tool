import React, { useContext } from 'react';
import { DataAnalyticsContext } from '../context/DataAnalyticsContext';
import Styles from '@assets/entry/scss/popup.scss';

const XAxis = (props) => {
    const { xAxis = [], xIndex = -1 } = props;
    const { dataAnalytics } = useContext(DataAnalyticsContext);
    const { table } = dataAnalytics;

    return (
        <div className={Styles.x_legend_box}>
            <a href="#" className={Styles.common_legend}>
                {xIndex === -1 ? '가로축' : table[0][xIndex]}
            </a>
        </div>
    );
};

export default XAxis;

import React, { useContext } from 'react';
import { DataAnalyticsContext } from '../context/DataAnalyticsContext';
import Styles from '@assets/entry/scss/popup.scss';

const YAxis = (props) => {
    const { disable, yAxis = [], yIndex = -1 } = props;
    const { dataAnalytics } = useContext(DataAnalyticsContext);
    const { table } = dataAnalytics;

    const className = disable
        ? `${Styles.common_legend} ${Styles.disabled}`
        : `${Styles.common_legend}`;
    return (
        <div className={Styles.y_legend_box}>
            <a href="#" className={className}>
                {yIndex === -1 ? '세로축' : table[0][yIndex]}
            </a>
        </div>
    );
};

export default YAxis;

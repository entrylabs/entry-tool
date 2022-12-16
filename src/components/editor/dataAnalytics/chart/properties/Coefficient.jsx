import React, { useContext } from 'react';
import { DataAnalyticsContext } from '@contexts/dataAnalytics';
import { CommonUtils } from '@utils/Common';
import Theme from '@utils/Theme';

const Coefficient = () => {
    const theme = Theme.getStyle('popup');
    const { dataAnalytics, dispatch } = useContext(DataAnalyticsContext);
    const { selected = {} } = dataAnalytics;
    const { chart = [], chartIndex } = selected;
    const { coefficient } = chart[chartIndex] || {};

    const handleClick = (option) => (event) => {
        event.preventDefault();
        if (option != !!coefficient) {
            dispatch({ type: 'EDIT_COEFFICIENT', coefficient: option });
        }
    };

    return (
        <div className={theme.sort_box}>
            <a className={!coefficient ? theme.active : ''} onClick={handleClick(false)}>
                {CommonUtils.getLang('DataAnalytics.show_all_points')}
            </a>
            <a className={coefficient ? theme.active : ''} onClick={handleClick(true)}>
                {CommonUtils.getLang('DataAnalytics.coefficient')}
            </a>
        </div>
    );
};

export default Coefficient;

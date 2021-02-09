import React, { useContext, useState } from 'react';
import { DataAnalyticsContext } from '@contexts/dataAnalytics';
import { CommonUtils } from '@utils/Common';
import Theme from '@utils/Theme';

const Boundary = () => {
    const theme = Theme.getStyle('popup');
    const { dataAnalytics, dispatch } = useContext(DataAnalyticsContext);
    const { selected = {} } = dataAnalytics;
    const { chart = [], chartIndex } = selected;
    const { boundary = 'left' } = chart[chartIndex] || {};

    const handleBoundaryClick = (direction) => (event) => {
        event.preventDefault();
        if (boundary !== direction) {
            dispatch({ type: 'EDIT_BOUNDARY', direction });
        }
    };

    return (
        <div className={theme.select_group} style={{ marginLeft: 30 }}>
            <label htmlFor="CntWidth" className={theme.tit_label}>
                {CommonUtils.getLang('DataAnalytics.bin_boundary')}
            </label>
            <div className={theme.cnt_sort}>
                <a
                    className={boundary === 'left' ? theme.active : ''}
                    onClick={handleBoundaryClick('left')}
                >
                    {CommonUtils.getLang('DataAnalytics.left_closed')}
                </a>
                <a
                    className={boundary === 'right' ? theme.active : ''}
                    onClick={handleBoundaryClick('right')}
                >
                    {CommonUtils.getLang('DataAnalytics.right_closed')}
                </a>
            </div>
        </div>
    );
};

export default Boundary;

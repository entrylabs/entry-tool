import React, { useContext, useState } from 'react';
import { DataAnalyticsContext } from '@contexts/dataAnalytics';
import Theme from '@utils/Theme';

const Order = () => {
    const theme = Theme.getStyle('popup');
    const { dataAnalytics, dispatch } = useContext(DataAnalyticsContext);
    const { selected = {} } = dataAnalytics;
    const { chart = [], chartIndex } = selected;
    const { order = 'default' } = chart[chartIndex] || {};

    const handleOrderClick = (option) => (event) => {
        event.preventDefault();
        if (option !== order) {
            dispatch({ type: 'EDIT_ORDER', order: option });
        }
    };

    return (
        <div className={theme.sort_box}>
            <a
                className={order === 'default' ? theme.active : ''}
                onClick={handleOrderClick('default')}
            >
                원래대로
            </a>
            <a
                className={order === 'ascending' ? theme.active : ''}
                onClick={handleOrderClick('ascending')}
            >
                오름차순
            </a>
        </div>
    );
};

export default Order;

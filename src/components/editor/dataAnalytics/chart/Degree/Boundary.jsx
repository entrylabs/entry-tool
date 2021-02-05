import React, { useContext, useState } from 'react';
import { DataAnalyticsContext } from '@contexts/dataAnalytics';
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
                계급 경계
            </label>
            {/* 계급 폭이 비활성일 때 disabled 클래스 추가 */}
            <div className={theme.cnt_sort}>
                <a
                    className={boundary === 'left' ? theme.active : ''}
                    onClick={handleBoundaryClick('left')}
                >
                    왼쪽 닫힘
                </a>
                <a
                    className={boundary === 'right' ? theme.active : ''}
                    onClick={handleBoundaryClick('right')}
                >
                    오른쪽 닫힘
                </a>
            </div>
        </div>
    );
};

export default Boundary;

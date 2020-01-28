import React, { useContext, useState, useRef } from 'react';
import { DataAnalyticsContext } from '../context/DataAnalyticsContext';
import Dropdown from '@components/widget/dropdown';

import Styles from '@assets/entry/scss/popup.scss';

const XAxis = (props) => {
    const { xAxisIndex = [], xIndex = -1 } = props;
    const [showDropdown, setShowDropdown] = useState(false);
    const axisRef = useRef();
    const { dataAnalytics, dispatch } = useContext(DataAnalyticsContext);
    const { table } = dataAnalytics;
    const xAxis = xAxisIndex.map((index) => [table[0][index], index]);

    const handleSelectDropDown = (value) => {
        dispatch({
            type: 'SELECT_X_AXIS',
            index: value[1],
        });
        setShowDropdown(false);
    };

    const handleOutsideClick = (event) => {
        event.preventDefault();
        setShowDropdown(false);
    };

    const handleClick = (event) => {
        event.preventDefault();
        setShowDropdown(true);
    };

    return (
        <>
            <div className={Styles.x_legend_box}>
                <a ref={axisRef} href="#" className={Styles.common_legend} onClick={handleClick}>
                    {xIndex === -1 ? '가로축' : table[0][xIndex]}
                </a>
            </div>
            {showDropdown && (
                <Dropdown
                    items={xAxis}
                    onSelectDropdown={handleSelectDropDown}
                    onOutsideClick={handleOutsideClick}
                    positionDom={axisRef.current}
                />
            )}
        </>
    );
};

export default XAxis;

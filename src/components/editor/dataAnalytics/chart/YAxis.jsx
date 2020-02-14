import React, { useContext, useState, useRef } from 'react';
import { DataAnalyticsContext } from '../context/DataAnalyticsContext';
import Dropdown from '@components/widget/dropdown';
import { CommonUtils } from '@utils/Common';

import Styles from '@assets/entry/scss/popup.scss';

const YAxis = (props) => {
    const { disable, yAxisIndex = [], yIndex = -1 } = props;
    const [showDropdown, setShowDropdown] = useState(false);
    const axisRef = useRef();
    const { dataAnalytics, dispatch } = useContext(DataAnalyticsContext);
    const { table } = dataAnalytics;
    const isSelected = yIndex !== -1;
    const yAxis = yAxisIndex.map((index) => [table[0][index], index]);

    const handleSelectDropDown = (value) => {
        dispatch({
            type: 'SELECT_Y_AXIS',
            index: value[1],
        });
        setShowDropdown(false);
    };

    const handleOutsideClick = () => {
        setShowDropdown(false);
    };

    const handleClick = (event) => {
        event.preventDefault();
        setShowDropdown(true);
    };

    const handleDeleteClick = (event) => {
        event.preventDefault();
        event.stopPropagation();
        dispatch({
            type: 'SELECT_Y_AXIS',
            index: -1,
        });
    };

    return (
        <>
            <div className={`${Styles.y_legend_box} ${disable ? Styles.disabled : ''}`}>
                <span
                    className={isSelected ? `${Styles.del_legend}` : `${Styles.common_legend}`}
                    onClick={handleClick}
                    ref={axisRef}
                >
                    {yIndex === -1 ? (
                        CommonUtils.getLang('DataAnalytics.y_axis')
                    ) : (
                        <>
                            {table[0][yIndex]}
                            <a href="#" className={Styles.close_btn} onClick={handleDeleteClick}>
                                <span className={Styles.blind}>
                                    {CommonUtils.getLang('DataAnalytics.delete')}
                                </span>
                            </a>
                        </>
                    )}
                </span>
            </div>

            {showDropdown && (
                <Dropdown
                    items={yAxis}
                    onSelectDropdown={handleSelectDropDown}
                    onOutsideClick={handleOutsideClick}
                    positionDom={axisRef.current}
                />
            )}
        </>
    );
};

export default YAxis;

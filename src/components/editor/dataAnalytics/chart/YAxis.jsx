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
        <div className={Styles.legend_cell}>
            <strong className={Styles.cell_sjt}>
                {CommonUtils.getLang('DataAnalytics.y_axis')}
            </strong>
            <div className={`${Styles.pop_selectbox} ${disable ? Styles.disabled : ''}`}>
                <div
                    className={`${Styles.select_link} ${
                        isSelected ? Styles.del_legend : Styles.common_legend
                    } ${
                        showDropdown
                            ? Styles.imico_pop_select_arr_up
                            : Styles.imico_pop_select_arr_down
                    }`}
                    onClick={disable ? () => {} : handleClick}
                    ref={axisRef}
                >
                    {yIndex === -1 ? CommonUtils.getLang('DataAnalytics.y_axis') : table[0][yIndex]}
                </div>
            </div>

            {showDropdown && (
                <Dropdown
                    items={yAxis}
                    onSelectDropdown={handleSelectDropDown}
                    onOutsideClick={handleOutsideClick}
                    positionDom={axisRef.current}
                />
            )}
        </div>
    );
};

export default YAxis;

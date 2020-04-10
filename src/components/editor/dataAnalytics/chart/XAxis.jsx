import React, { useContext, useState, useRef } from 'react';
import { DataAnalyticsContext } from '../context/DataAnalyticsContext';
import Dropdown from '@components/widget/dropdown';
import { CommonUtils } from '@utils/Common';

import Styles from '@assets/entry/scss/popup.scss';

const XAxis = (props) => {
    const { xAxisIndex = [], xIndex = -1, type } = props;
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

    const handleOutsideClick = () => {
        setShowDropdown(false);
    };

    const handleClick = (event) => {
        event.preventDefault();
        setShowDropdown(true);
    };

    return (
        <div className={Styles.legend_cell}>
            <strong className={Styles.cell_sjt}>
                {type === 'pie'
                    ? CommonUtils.getLang('DataAnalytics.column_name')
                    : CommonUtils.getLang('DataAnalytics.x_axis')}
            </strong>
            <div ref={axisRef} className={`${Styles.pop_selectbox} ${Styles.on}`}>
                <div
                    className={`${Styles.select_link} ${
                        showDropdown
                            ? Styles.imico_pop_select_arr_up
                            : Styles.imico_pop_select_arr_down
                    }`}
                    onClick={handleClick}
                >
                    {xIndex === -1 ? CommonUtils.getLang('DataAnalytics.x_axis') : table[0][xIndex]}
                </div>
                {showDropdown && (
                    <Dropdown
                        items={xAxis}
                        onSelectDropdown={handleSelectDropDown}
                        onOutsideClick={handleOutsideClick}
                        positionDom={axisRef.current}
                    />
                )}
            </div>
        </div>
    );
};

export default XAxis;

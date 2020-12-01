import React, { useContext, useState, useRef } from 'react';
import { DataAnalyticsContext } from '@contexts/dataAnalytics';
import Dropdown from '@components/widget/dropdown';
import { CommonUtils, getNumberColumnIndexes } from '@utils/Common';
import Styles from '@assets/entry/scss/popup.scss';

const YAxis = () => {
    const { dataAnalytics, dispatch } = useContext(DataAnalyticsContext);
    const [showDropdown, setShowDropdown] = useState(false);
    const axisRef = useRef();
    const { selected = {} } = dataAnalytics;
    const { fields = [], origin = [], chart, chartIndex } = selected;
    const { yIndex = 0, xIndex } = chart[chartIndex];
    const table = [[...fields], ...origin];
    const disabled = xIndex === -1;
    const yAxisIndex = disabled ? [] : getNumberColumnIndexes(table, [xIndex]);
    const yAxis = yAxisIndex.map((index) => [fields[index], index]);

    const handleSelectDropdown = (value) => {
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

    return (
        <div className={Styles.select_group}>
            <label htmlFor="ChartName" className={Styles.tit_label}>
                {CommonUtils.getLang('DataAnalytics.y_axis')}
            </label>
            <div
                ref={axisRef}
                className={`${Styles.pop_selectbox} ${disabled ? Styles.disabled : ''}`}
                style={{ width: 153 }}
            >
                <div
                    className={`${Styles.select_link} ${
                        yIndex !== -1 ? Styles.del_legend : Styles.common_legend
                    } ${
                        showDropdown
                            ? Styles.imico_pop_select_arr_up
                            : Styles.imico_pop_select_arr_down
                    }`}
                    onClick={disabled ? () => {} : handleClick}
                >
                    {yIndex === -1 ? CommonUtils.getLang('DataAnalytics.y_axis') : fields[yIndex]}
                </div>
            </div>
            {showDropdown && (
                <Dropdown
                    items={yAxis}
                    onSelectDropdown={handleSelectDropdown}
                    onOutsideClick={handleOutsideClick}
                    positionDom={axisRef.current}
                />
            )}
        </div>
    );
};

export default YAxis;

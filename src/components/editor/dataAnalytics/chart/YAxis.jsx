import React, { useContext, useState, useRef } from 'react';
import { DataAnalyticsContext } from '@contexts/dataAnalytics';
import Dropdown from '@components/widget/dropdown';
import { CommonUtils } from '@utils/Common';
import { getNumberColumnIndexes, getTrimedTable, getTable } from '@utils/dataAnalytics';
import Theme from '@utils/Theme';

const YAxis = () => {
    const theme = Theme.getStyle('popup');
    const { dataAnalytics, dispatch } = useContext(DataAnalyticsContext);
    const [showDropdown, setShowDropdown] = useState(false);
    const axisRef = useRef();
    const { selected = {} } = dataAnalytics;
    const { fields = [], chart, chartIndex } = selected;
    const { yIndex = 0, xIndex } = chart[chartIndex];
    const table = getTrimedTable(getTable(selected));
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
        <div className={theme.select_group}>
            <label htmlFor="ChartName" className={theme.tit_label}>
                {CommonUtils.getLang('DataAnalytics.y_axis')}
            </label>
            <div
                ref={axisRef}
                className={`${theme.pop_selectbox} ${disabled ? theme.disabled : ''}`}
                style={{ width: 153 }}
            >
                <div
                    className={`${theme.select_link} ${
                        yIndex !== -1 ? theme.del_legend : theme.common_legend
                    } ${
                        showDropdown
                            ? theme.imico_pop_select_arr_up
                            : theme.imico_pop_select_arr_down
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

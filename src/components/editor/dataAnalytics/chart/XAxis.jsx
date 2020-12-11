import React, { useContext, useState, useRef } from 'react';
import { DataAnalyticsContext } from '@contexts/dataAnalytics';
import Dropdown from '@components/widget/dropdown';
import { CommonUtils } from '@utils/Common';
import { getNumberColumnIndexes, getTrimedTable, getTable } from '@utils/dataAnalytics';
import Theme from '@utils/Theme';

const XAxis = () => {
    const theme = Theme.getStyle('popup');
    const { dataAnalytics, dispatch } = useContext(DataAnalyticsContext);
    const [showDropdown, setShowDropdown] = useState(false);
    const axisRef = useRef();
    const { selected = {} } = dataAnalytics;
    const { fields = [], chart, chartIndex } = selected;
    const { type, xIndex = 0 } = chart[chartIndex];
    const table = getTrimedTable(getTable(selected));
    const xAxis =
        type === 'scatter'
            ? getNumberColumnIndexes(table).map((index) => [fields[index], index])
            : fields.map((item, index) => [item, index]);

    const handleSelectDropdown = (value) => {
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
        <div className={theme.select_group}>
            <label htmlFor="ChartName" className={theme.tit_label}>
                {type === 'pie'
                    ? CommonUtils.getLang('DataAnalytics.column_name')
                    : CommonUtils.getLang('DataAnalytics.x_axis')}
            </label>
            <div
                ref={axisRef}
                className={`${theme.pop_selectbox} ${theme.on}`}
                style={{ width: 153 }}
            >
                <div
                    className={`${theme.select_link} ${
                        showDropdown
                            ? theme.imico_pop_select_arr_up
                            : theme.imico_pop_select_arr_down
                    }`}
                    onClick={handleClick}
                >
                    {xIndex === -1 ? CommonUtils.getLang('DataAnalytics.x_axis') : fields[xIndex]}
                </div>
            </div>
            {showDropdown && (
                <Dropdown
                    items={xAxis}
                    onSelectDropdown={handleSelectDropdown}
                    onOutsideClick={handleOutsideClick}
                    positionDom={axisRef.current}
                />
            )}
        </div>
    );
};

export default XAxis;

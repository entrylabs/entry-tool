import React, { useContext, useState, useRef } from 'react';
import { DataAnalyticsContext } from '@contexts/dataAnalytics';
import Dropdown from '@components/widget/dropdown';
import { CommonUtils } from '@utils/Common';
import { PIE, SCATTER } from '@constants/dataAnalytics';
import { getNumberColumnIndexes, getTrimedTable } from '@utils/dataAnalytics';
import Theme from '@utils/Theme';

const XAxis = () => {
    const theme = Theme.getStyle('popup');
    const { dataAnalytics, dispatch } = useContext(DataAnalyticsContext);
    const [showDropdown, setShowDropdown] = useState(false);
    const axisRef = useRef();
    const { selected = {} } = dataAnalytics;
    const { table: selectedTable, chart, chartIndex = 0 } = selected;
    const { type, xIndex = 0 } = chart[chartIndex];
    const table = getTrimedTable(selectedTable);
    const [fields = []] = table;
    const xAxis =
        type === SCATTER
            ? getNumberColumnIndexes(table).map((index) => [fields[index], index])
            : fields.map((item, index) => [item, index]);
    const disabled = !xAxis.length;
    const titleLabel =
        type === PIE
            ? CommonUtils.getLang('DataAnalytics.legend')
            : CommonUtils.getLang('DataAnalytics.x_axis');

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
        if (xAxis.length) {
            setShowDropdown(true);
        }
    };

    return (
        <div className={theme.select_group}>
            <label htmlFor="ChartName" className={theme.tit_label}>
                {titleLabel}
            </label>
            <div
                ref={axisRef}
                className={`${theme.pop_selectbox} ${theme.on} ${disabled ? theme.disabled : ''}`}
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
                    {xIndex === -1 ? titleLabel : fields[xIndex]}
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

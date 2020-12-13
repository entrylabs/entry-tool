import React, { useContext, useState, useRef } from 'react';
import _some from 'lodash/some';
import _reduce from 'lodash/reduce';
import _findIndex from 'lodash/findIndex';
import { DataAnalyticsContext } from '@contexts/dataAnalytics';
import { CommonUtils } from '@utils/Common';
import {
    getNumberColumnIndexesBySelectedColumns,
    getTrimedTable,
    getTable,
} from '@utils/dataAnalytics';
import Dropdown from '@components/widget/dropdown';
import Theme from '@utils/Theme';

const Legend = () => {
    const theme = Theme.getStyle('popup');
    const { dataAnalytics, dispatch } = useContext(DataAnalyticsContext);
    const [showDropdown, setShowDropdown] = useState(false);
    const axisRef = useRef();
    const { selected = {} } = dataAnalytics;
    const { table: selectedTable, chart, chartIndex = 0 } = selected;
    const { yIndex = 0, xIndex, categoryIndexes: selectedLegend, type } = chart[chartIndex];
    const table = getTrimedTable(selectedTable);
    const checkBox = type === 'bar' || type === 'line';
    const dropdownItems = _reduce(
        table[0],
        (prev, __, index) =>
            !_some([xIndex, yIndex], (banIndex) => index === banIndex) ? [...prev, index] : prev,
        []
    );
    const items = (type === 'scatter'
        ? dropdownItems
        : getNumberColumnIndexesBySelectedColumns(table, dropdownItems)
    ).map((index) => [table[0][index], index]);
    const disabled =
        xIndex === -1 || (type === 'scatter' && yIndex === -1) || !dropdownItems.length;

    const getTitle = () => {
        if (checkBox) {
            if (!selectedLegend.length) {
                return CommonUtils.getLang('DataAnalytics.legend');
            }
            if (selectedLegend.length === 1) {
                return table[0][selectedLegend[0]];
            }
            return `${table[0][selectedLegend[0]]} 외 ${selectedLegend.length - 1}건`;
        }
        return !table[0][selectedLegend[0]]
            ? CommonUtils.getLang('DataAnalytics.legend')
            : table[0][selectedLegend[0]];
    };

    const handleSelectDropDown = (value) => {
        setShowDropdown(false);
        dispatch({
            type: 'SELECT_LEGEND_AXIS',
            indexes: [value[1]],
        });
    };

    const handleOutsideClick = () => {
        setShowDropdown(false);
    };

    const handleCheckOutsideClick = (checkItems) => {
        setShowDropdown(false);
        dispatch({
            type: 'SELECT_LEGEND_AXIS',
            indexes: checkItems.items.map((item) => item[1]),
        });
    };

    const handleClick = (event) => {
        event.preventDefault();
        setShowDropdown(true);
    };

    return (
        <div className={theme.select_group}>
            <label htmlFor="ChartName" className={theme.tit_label}>
                {CommonUtils.getLang('DataAnalytics.legend')}
            </label>
            <div
                ref={axisRef}
                className={`${theme.pop_selectbox} ${disabled ? theme.disabled : ''}`}
                style={{ width: 153 }}
            >
                <div
                    className={`${theme.select_link} ${
                        showDropdown
                            ? theme.imico_pop_select_arr_up
                            : theme.imico_pop_select_arr_down
                    }`}
                    onClick={disabled ? () => {} : handleClick}
                >
                    {getTitle()}
                </div>
            </div>

            {showDropdown && checkBox && (
                <Dropdown
                    multiple
                    showSelectAll={true}
                    checkedIndex={selectedLegend.map((index) =>
                        _findIndex(
                            getNumberColumnIndexesBySelectedColumns(table, dropdownItems),
                            (categoryIndex) => categoryIndex === index
                        )
                    )}
                    items={items}
                    onOutsideClick={handleCheckOutsideClick}
                    positionDom={axisRef.current}
                />
            )}

            {showDropdown && !checkBox && (
                <Dropdown
                    items={items}
                    onSelectDropdown={handleSelectDropDown}
                    onOutsideClick={handleOutsideClick}
                    positionDom={axisRef.current}
                />
            )}
        </div>
    );
};

export default Legend;

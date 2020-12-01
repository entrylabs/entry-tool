import React, { useContext, useState, useRef } from 'react';
import { DataAnalyticsContext } from '@contexts/dataAnalytics';
import { CommonUtils, getNumberColumnIndexesBySelectedColumns } from '@utils/Common';
import Dropdown from '@components/widget/dropdown';
import _some from 'lodash/some';
import _reduce from 'lodash/reduce';
import Styles from '@assets/entry/scss/popup.scss';

const Legend = () => {
    const { dataAnalytics, dispatch } = useContext(DataAnalyticsContext);
    const [showDropdown, setShowDropdown] = useState(false);
    const axisRef = useRef();
    const { selected = {} } = dataAnalytics;
    const { fields = [], origin = [], chart, chartIndex } = selected;
    const { yIndex = 0, xIndex, categoryIndexes: selectedLegend, type } = chart[chartIndex];
    const table = [[...fields], ...origin];
    const checkBox = type === 'bar' || type === 'line';
    const dropdownItems = _reduce(
        table[0],
        (prev, __, index) =>
            !_some([xIndex, yIndex], (banIndex) => index === banIndex) ? [...prev, index] : prev,
        []
    );
    const items = (checkBox
        ? getNumberColumnIndexesBySelectedColumns(table, dropdownItems)
        : dropdownItems
    ).map((index) => [table[0][index], index]);
    const disabled =
        chart.xIndex === -1 || (type === 'scatter' && chart.yIndex === -1) || !dropdownItems.length;

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
        <div className={Styles.select_group}>
            <label htmlFor="ChartName" className={Styles.tit_label}>
                {CommonUtils.getLang('DataAnalytics.legend')}
            </label>
            <div
                ref={axisRef}
                className={`${Styles.pop_selectbox} ${disabled ? Styles.disabled : ''}`}
                style={{ width: 153 }}
            >
                <div
                    className={`${Styles.select_link} ${
                        showDropdown
                            ? Styles.imico_pop_select_arr_up
                            : Styles.imico_pop_select_arr_down
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
                        _.findIndex(
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

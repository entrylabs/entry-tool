import React, { useContext, useState, useRef } from 'react';
import _ from 'lodash';
import { DataAnalyticsContext } from '../context/DataAnalyticsContext';
import { CommonUtils, getNumberColumnIndexesBySelectedColumns } from '@utils/Common';
import Dropdown from '@components/widget/dropdown';

import Styles from '@assets/entry/scss/popup.scss';

const Legend = (props) => {
    const { checkBox, disabled, selectedLegend, dropdownItems = [] } = props;
    const [showDropdown, setShowDropdown] = useState(false);
    const { dataAnalytics, dispatch } = useContext(DataAnalyticsContext);
    const axisRef = useRef();
    const { table } = dataAnalytics;
    const items = (checkBox
        ? getNumberColumnIndexesBySelectedColumns(table, dropdownItems)
        : dropdownItems
    ).map((index) => [table[0][index], index]);

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
        <div className={Styles.legend_cell}>
            <strong className={Styles.cell_sjt}>
                {CommonUtils.getLang('DataAnalytics.legend')}
            </strong>
            <div
                className={
                    disabled ? `${Styles.pop_selectbox} ${Styles.disabled}` : Styles.pop_selectbox
                }
            >
                <div
                    className={`${Styles.select_link} ${
                        showDropdown
                            ? Styles.imico_pop_select_arr_up
                            : Styles.imico_pop_select_arr_down
                    }`}
                    onClick={disabled ? () => {} : handleClick}
                    ref={axisRef}
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

import React, { useContext, useState, useRef } from 'react';
import _some from 'lodash/some';
import _reduce from 'lodash/reduce';
import _findIndex from 'lodash/findIndex';
import Dropdown from '@components/widget/dropdown';
import { CommonUtils } from '@utils/Common';
import { PIE, BAR, LINE, SCATTER, HISTOGRAM } from '@constants/dataAnalytics';
import { DataAnalyticsContext } from '@contexts/dataAnalytics';
import { getNumberColumnIndexesBySelectedColumns, getTrimedTable } from '@utils/dataAnalytics';
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
    const checkBox = type === BAR || type === LINE || type === HISTOGRAM;
    const fields = [...table[0]];
    const dropdownItems = _reduce(
        fields,
        (prev, __, index) =>
            !_some([xIndex, yIndex], (banIndex) => index === banIndex) ? [...prev, index] : prev,
        []
    );
    const items = (type === SCATTER
        ? dropdownItems
        : getNumberColumnIndexesBySelectedColumns(table, dropdownItems)
    ).map((index) => [fields[index], index]);
    const disabled =
        (xIndex === -1 || (type === SCATTER && yIndex === -1) || (type !== PIE && !items.length)) &&
        (type !== HISTOGRAM || !items.length);
    const titleLabel =
        type === PIE
            ? CommonUtils.getLang('DataAnalytics.value')
            : CommonUtils.getLang('DataAnalytics.legend');

    if (type === PIE) {
        items.push([CommonUtils.getLang('DataAnalytics.quantity'), fields.length]);
        fields.push(CommonUtils.getLang('DataAnalytics.quantity'));
    }
    if (type === SCATTER) {
        items.push([CommonUtils.getLang('DataAnalytics.not_distinguished'), fields.length]);
        fields.push(CommonUtils.getLang('DataAnalytics.not_distinguished'));
    }

    const getTitle = () => {
        if (checkBox) {
            if (!selectedLegend.length) {
                return titleLabel;
            }
            if (selectedLegend.length === 1) {
                return fields[selectedLegend[0]];
            }
            return `${fields[selectedLegend[0]]} 외 ${selectedLegend.length - 1}건`;
        }
        return !fields[selectedLegend[0]] ? titleLabel : fields[selectedLegend[0]];
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
                {titleLabel}
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

            {showDropdown && (
                <Dropdown
                    items={items}
                    onSelectDropdown={handleSelectDropDown}
                    onOutsideClick={checkBox ? handleCheckOutsideClick : handleOutsideClick}
                    positionDom={axisRef.current}
                    checkedIndex={
                        checkBox
                            ? selectedLegend.map((index) =>
                                  _findIndex(
                                      getNumberColumnIndexesBySelectedColumns(table, dropdownItems),
                                      (categoryIndex) => categoryIndex === index
                                  )
                              )
                            : ''
                    }
                    multiple={checkBox && type !== HISTOGRAM}
                    showSelectAll={checkBox && type !== HISTOGRAM}
                    maximumSelectionLength={checkBox && type === HISTOGRAM ? 3 : ''}
                />
            )}
        </div>
    );
};

export default Legend;

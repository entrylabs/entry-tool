import { useContext, useState, useRef } from 'react';
import _some from 'lodash/some';
import _reduce from 'lodash/reduce';
import _findIndex from 'lodash/findIndex';
import Dropdown from '@components/widget/dropdown';
import { CommonUtils } from '@utils/Common';
import { PIE, SCATTER, HISTOGRAM, SCATTERGRID } from '@constants/dataAnalytics';
import { DataAnalyticsContext } from '@contexts/dataAnalytics';
import { getNumberColumnIndexesBySelectedColumns, getTrimedTable } from '@utils/dataAnalytics';
import Theme from '@utils/Theme';

const Legend = ({ maximumSelectionLength, showSelectAll, checkBox }) => {
    const axisRef = useRef();
    const theme = Theme.getStyle('popup');
    const [showDropdown, setShowDropdown] = useState(false);
    const { dataAnalytics, dispatch } = useContext(DataAnalyticsContext);
    const { selected = {} } = dataAnalytics;
    const { table: selectedTable, chart, chartIndex = 0 } = selected;
    const { yIndex = 0, xIndex, categoryIndexes: selectedLegend = [], type } = chart[chartIndex];
    const table = getTrimedTable(selectedTable);
    const fields = [...table[0]];
    const dropdownItems = _reduce(
        fields,
        (prev, __, index) =>
            !_some([xIndex, yIndex], (banIndex) => index === banIndex) ? [...prev, index] : prev,
        []
    );
    const items = (
        type === SCATTER
            ? dropdownItems
            : getNumberColumnIndexesBySelectedColumns(table, dropdownItems)
    ).map((index) => [fields[index], index]);
    const disabled =
        !((type === HISTOGRAM || type === SCATTERGRID || type === PIE) && items.length) &&
        (xIndex === -1 || (type === SCATTER && yIndex === -1));
    const checkedIndex = checkBox
        ? selectedLegend.map((index) =>
              _findIndex(
                  getNumberColumnIndexesBySelectedColumns(table, dropdownItems),
                  (categoryIndex) => categoryIndex === index
              )
          )
        : '';

    let titleLabel = CommonUtils.getLang('DataAnalytics.legend');
    if (type === PIE) {
        titleLabel = CommonUtils.getLang('DataAnalytics.value');
        items.push([CommonUtils.getLang('DataAnalytics.quantity'), fields.length]);
        fields.push(CommonUtils.getLang('DataAnalytics.quantity'));
    }
    if (type === SCATTER) {
        items.push([CommonUtils.getLang('DataAnalytics.not_distinguished'), fields.length]);
        fields.push(CommonUtils.getLang('DataAnalytics.not_distinguished'));
    }

    const getTitle = () =>
        checkBox && selectedLegend.length > 1
            ? `${fields[selectedLegend[0]]} 외 ${selectedLegend.length - 1}건`
            : fields[selectedLegend[0]] || titleLabel;

    const handleSelectDropdown = (value) => {
        setShowDropdown(false);
        dispatch({
            type: 'SELECT_LEGEND_AXIS',
            indexes: [value[1]],
        });
    };

    const handleOutsideClick = (checkItems) => {
        setShowDropdown(false);
        console.log('hihi');
        if (checkBox) {
            dispatch({
                type: 'SELECT_LEGEND_AXIS',
                indexes: checkItems.items.map((item) => item[1]),
            });
        }
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
                    onSelectDropdown={handleSelectDropdown}
                    onOutsideClick={handleOutsideClick}
                    positionDom={axisRef.current}
                    multiple={showSelectAll}
                    showSelectAll={showSelectAll}
                    maximumSelectionLength={maximumSelectionLength}
                    checkedIndex={checkedIndex}
                />
            )}
        </div>
    );
};

export default Legend;

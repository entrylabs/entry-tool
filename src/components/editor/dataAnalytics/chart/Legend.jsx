import React, { useContext, useState, useRef } from 'react';
import { DataAnalyticsContext } from '../context/DataAnalyticsContext';
import { GRAPH_COLOR } from '@components/editor/dataAnalytics/Constants';
import { CommonUtils, categoryKeys, getNumberColumnIndexesBySelectedColumns } from '@utils/Common';
import Dropdown from '@components/widget/dropdown';

import Styles from '@assets/entry/scss/popup.scss';

const { generateHash } = CommonUtils;

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

    const labels = checkBox
        ? selectedLegend.map((index) => table[0][index])
        : categoryKeys(table, selectedLegend[0]);

    const title =
        checkBox || !table[0][selectedLegend[0]]
            ? CommonUtils.getLang('DataAnalytics.legend')
            : table[0][selectedLegend[0]];

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
        <>
            <div
                className={disabled ? `${Styles.legend_box} ${Styles.disabled}` : Styles.legend_box}
            >
                <a href="#" className={Styles.common_legend} onClick={handleClick} ref={axisRef}>
                    {title}
                </a>
                {labels.length && selectedLegend.length ? (
                    <div className={Styles.legend_scroll}>
                        <ul className={Styles.legend_list}>
                            {labels.map((item, index) => (
                                <li key={`cate_${generateHash()}`}>
                                    <span
                                        className={Styles.color}
                                        style={{
                                            backgroundColor:
                                                GRAPH_COLOR[index % GRAPH_COLOR.length],
                                        }}
                                    >
                                        &nbsp;
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : null}
            </div>

            {showDropdown && checkBox && (
                <Dropdown
                    multiple
                    checkedIndex={selectedLegend.map((index) =>
                        _.findIndex(
                            getNumberColumnIndexesBySelectedColumns(table, dropdownItems),
                            (categoryIndex) => categoryIndex === index
                        )
                    )}
                    items={items}
                    onSelectDropdown={() => {}}
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
        </>
    );
};

export default Legend;

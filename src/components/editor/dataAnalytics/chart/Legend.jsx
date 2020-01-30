import React, { useContext, useState, useRef } from 'react';
import { DataAnalyticsContext } from '../context/DataAnalyticsContext';
import { GRAPH_COLOR } from '@components/editor/dataAnalytics/Constants';
import { CommonUtils } from '@utils/Common';
import Dropdown from '@components/widget/dropdown';

import Styles from '@assets/entry/scss/popup.scss';

const { generateHash } = CommonUtils;

const Legend = (props) => {
    const {
        checkBox,
        disabled,
        selectedCategoryIndexes,
        categoryIndexes = [],
        category = [],
    } = props;
    const [showDropdown, setShowDropdown] = useState(false);
    const { dataAnalytics, dispatch } = useContext(DataAnalyticsContext);
    const axisRef = useRef();
    const { table } = dataAnalytics;

    const labels = checkBox
        ? selectedCategoryIndexes.map((index) => [table[0][index], index])
        : category.map((name, index) => [name, index]);
    const title =
        checkBox || !table[0][selectedCategoryIndexes[0]]
            ? CommonUtils.getLang('DataAnalytics.legend')
            : table[0][selectedCategoryIndexes[0]];

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
                {labels.length && selectedCategoryIndexes.length ? (
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
                                    {item[0]}
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : null}
            </div>

            {showDropdown && checkBox && (
                <Dropdown
                    multiple
                    checkedIndex={selectedCategoryIndexes.map((index) =>
                        _.findIndex(categoryIndexes, (categoryIndex) => categoryIndex === index)
                    )}
                    items={category.map((index) => [table[0][index], index])}
                    onSelectDropdown={() => {}}
                    onOutsideClick={handleCheckOutsideClick}
                    positionDom={axisRef.current}
                />
            )}

            {showDropdown && !checkBox && (
                <Dropdown
                    items={categoryIndexes.map((index) => [table[0][index], index])}
                    onSelectDropdown={handleSelectDropDown}
                    onOutsideClick={handleOutsideClick}
                    positionDom={axisRef.current}
                />
            )}
        </>
    );
};

export default Legend;

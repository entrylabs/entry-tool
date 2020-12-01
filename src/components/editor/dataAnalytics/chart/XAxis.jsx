import React, { useContext, useState, useRef } from 'react';
import { DataAnalyticsContext } from '@contexts/dataAnalytics';
import Dropdown from '@components/widget/dropdown';
import { CommonUtils, getNumberColumnIndexes } from '@utils/Common';
import Styles from '@assets/entry/scss/popup.scss';

const XAxis = () => {
    const { dataAnalytics, dispatch } = useContext(DataAnalyticsContext);
    const [showDropdown, setShowDropdown] = useState(false);
    const axisRef = useRef();
    const { selected = {} } = dataAnalytics;
    const { fields = [], origin = [], chart, chartIndex } = selected;
    const { type, xIndex = 0 } = chart[chartIndex];
    const table = [[...fields], ...origin];
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
        <div className={Styles.select_group}>
            <label htmlFor="ChartName" className={Styles.tit_label}>
                {type === 'pie'
                    ? CommonUtils.getLang('DataAnalytics.column_name')
                    : CommonUtils.getLang('DataAnalytics.x_axis')}
            </label>
            <div
                ref={axisRef}
                className={`${Styles.pop_selectbox} ${Styles.on}`}
                style={{ width: 208 }}
            >
                <div
                    className={`${Styles.select_link} ${
                        showDropdown
                            ? Styles.imico_pop_select_arr_up
                            : Styles.imico_pop_select_arr_down
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

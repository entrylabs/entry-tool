import React, { useState, useContext } from 'react';
import { DataAnalyticsContext } from '@contexts/dataAnalytics';
import OutsideClick from '@components/common/outsideClick';
import SelectChartDropdown from './SelectChartDropdown';
import { CommonUtils } from '@utils/Common';
import Styles from '@assets/entry/scss/popup.scss';

const Navigation = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const { dataAnalytics, dispatch } = useContext(DataAnalyticsContext);
    const { selected: selectedTable = {} } = dataAnalytics;
    const { chart = [], chartIndex: selected = 0 } = selectedTable;

    const chartName = (chartType) => {
        switch (chartType) {
            case 'bar':
                return CommonUtils.getLang('DataAnalytics.bar');
            case 'line':
                return CommonUtils.getLang('DataAnalytics.line');
            case 'pie':
                return CommonUtils.getLang('DataAnalytics.pie');
            case 'scatter':
                return CommonUtils.getLang('DataAnalytics.scatter');
            case 'plus':
                return CommonUtils.getLang('DataAnalytics.plus');
            default:
                return '';
        }
    };

    const handleClickItem = (index) => (event) => {
        event.preventDefault();
        dispatch({
            type: 'SET_CHART_INDEX',
            index,
        });
    };

    const handleOutsideClick = () => {
        setShowDropdown(false);
    };

    const handleAClick = (event) => {
        event.preventDefault();
        setShowDropdown(true);
    };

    const handleClick = (value) => (event) => {
        dispatch({
            type: 'ADD_CHART',
            chartType: value,
        });
        setShowDropdown(false);
    };

    return (
        <div className={Styles.chart_navi}>
            {chart.map((chart, index) => (
                <a
                    key={`chart_${index}`}
                    className={`${Styles.chart_link} ${Styles[chart.type]} ${
                        index !== selected ? Styles.disabled : ''
                    }`}
                    onClick={handleClickItem(index)}
                >
                    <span className={Styles.blind}>{chartName(chart.type)}</span>
                </a>
            ))}
            {chart.length < 10 ? (
                <div className={Styles.add_link_box}>
                    <a className={Styles.add_link} onClick={handleAClick} role="button">
                        <span className={Styles.blind}>{chartName('plus')}</span>
                    </a>

                    {showDropdown ? (
                        <OutsideClick onOutsideClick={handleOutsideClick}>
                            <SelectChartDropdown onClick={handleClick} />
                        </OutsideClick>
                    ) : null}
                </div>
            ) : null}
        </div>
    );
};

export default Navigation;

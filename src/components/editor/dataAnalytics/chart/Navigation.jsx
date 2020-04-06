import React, { useState, useContext } from 'react';
import { DataAnalyticsContext } from '../context/DataAnalyticsContext';
import OutsideClick from '@components/common/outsideClick';
import SelectChartDropdown from './SelectChartDropdown';
import { CommonUtils } from '@utils/Common';
import Styles from '@assets/entry/scss/popup.scss';

const Navigation = (props) => {
    const { charts, onClickItem, selected } = props;
    const [showDropdown, setShowDropdown] = useState(false);
    const { dispatch } = useContext(DataAnalyticsContext);

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

    const navigationList = (charts) =>
        charts.map((chart, index) => (
            <a
                key={`chart_${index}`}
                href="#"
                className={`${Styles.chart_link} ${Styles[chart.type]} ${
                    index !== selected ? Styles.disabled : ''
                }`}
                onClick={onClickItem(index)}
            >
                <span className={Styles.blind}>{chartName(chart.type)}</span>
            </a>
        ));

    return (
        <div className={Styles.chart_navi}>
            {navigationList(charts)}

            {charts.length < 10 ? (
                <div className={Styles.add_link_box}>
                    <a href="#" className={Styles.add_link} onClick={handleAClick} role="button">
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

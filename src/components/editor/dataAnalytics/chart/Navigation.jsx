import React, { useState, useContext } from 'react';
import { DataAnalyticsContext } from '../context/DataAnalyticsContext';
import OutsideClick from '@components/common/outsideClick';
import SelectChartDropdown from './SelectChartDropdown';
import Styles from '@assets/entry/scss/popup.scss';

const Navigation = (props) => {
    const { charts, onClickItem, selected } = props;
    const [showDropdown, setShowDropdown] = useState(false);
    const { dispatch } = useContext(DataAnalyticsContext);

    const chartName = (chartType) => {
        switch (chartType) {
            case 'bar':
                return '막대 그래프';
            case 'line':
                return '꺽은선 그래프';
            case 'pie':
                return '원형 그래프';
            case 'scatter':
                return '점 그래프';
            case 'plus':
                return '추가';
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
            <li
                key={`chart_${index}`}
                className={`${Styles[chart.type]} ${index === selected ? Styles.on : ''}`}
            >
                <a href="#" onClick={onClickItem(index)}>
                    <span className={Styles.blind}>{chartName(chart.type)}</span>
                </a>
            </li>
        ));

    return (
        <div className={Styles.chart_navi}>
            <ul className={Styles.list}>{navigationList(charts)}</ul>

            {charts.length < 10 ? (
                <div className={Styles.chart_add_box}>
                    <a href="#" className={Styles.chart_add} onClick={handleAClick}>
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

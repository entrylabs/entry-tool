import React from 'react';
import Styles from '@assets/entry/scss/popup.scss';

const ChartNavigation = (props) => {
    const { charts, onClickItem, selected } = props;

    const chartName = (chartType) => {
        switch (chartType) {
            case 'bar':
                return '막대 그래프';
            case 'line':
                return '꺽은선 그래프';
            case 'pie':
                return '원형 그래프';
            case '':
                return '점 그래프';
            default:
                return '';
        }
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
        </div>
    );
};

export default ChartNavigation;

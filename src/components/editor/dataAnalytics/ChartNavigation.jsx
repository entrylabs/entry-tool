import React from 'react';
import Styles from '@assets/entry/scss/popup.scss';

const ChartNavigation = (props) => {
    const { charts, onClickItem } = props;

    const handleMouseEnter = (event) => {
        event.currentTarget.classList(Styles.on);
    };

    const handleMouseLeave = (event) => {
        event.currentTarget.classList(Styles.on);
    };

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
                className={`${Styles[chart.type]} ${Styles.on}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <a href="#" onClick={onClickItem(index)}>
                    <span className={Styles.blind}>{chartName(chart.type)}</span>
                </a>
            </li>
        ));

    return (
        <div className={Styles.chart_navi}>
            <ul className={Styles.list}>
                {/* 링크가 선택되면 on 클래스 추가 */}
                {/* <li className={`${Styles[sel1]} ${Styles.on}`}>
                            <a href="#">
                                <span className={Styles.blind}>막대 그래프</span>
                            </a>
                        </li>
                        <li className={Styles.sel2}>
                            <a href="#">
                                <span className={Styles.blind}>꺽은선 그래프</span>
                            </a>
                        </li>
                        <li className={Styles.sel3}>
                            <a href="#">
                                <span className={Styles.blind}>원형 그래프</span>
                            </a>
                        </li>
                        <li className={Styles.sel4}>
                            <a href="#">
                                <span className={Styles.blind}>점 그래프</span>
                            </a>
                        </li> */}
                {navigationList(charts)}
            </ul>
        </div>
    );
};

export default ChartNavigation;

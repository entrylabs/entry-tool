import React, { useContext } from 'react';
import Chart from '@components/widget/Chart';
import { DataAnalyticsContext } from '../context/DataAnalyticsContext';
import Styles from '@assets/entry/scss/popup.scss';
import { CHART } from '../Constants';

const ChartList = (props) => {
    const { table, charts } = props;
    const { dispatch } = useContext(DataAnalyticsContext);

    const handleClickChart = (tab, index) => () => {
        dispatch({
            type: 'SET_TAB',
            tab,
            index,
        });
    };

    const handleMouseEnter = (event) => {
        event.currentTarget.className = Styles.on;
    };

    const handleMouseLeave = (event) => {
        event.currentTarget.className = '';
    };

    const chartList = (charts) => {
        if (charts.length === 0) {
            return null;
        }

        return charts.map((chart, index) => (
            <li
                key={`chart_${index}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleClickChart(CHART, index)}
            >
                <Chart
                    chart={chart}
                    table={table}
                    size={{
                        width: 236,
                        height: 140,
                    }}
                    legend={{ show: false }}
                    tooltip={{ show: false }}
                />
            </li>
        ));
    };

    return (
        <>
            <div className={Styles.title_box}>
                <strong>차트</strong>
            </div>
            <div className={Styles.chart_list}>
                <ul className={Styles.list} style={{ width: `${252 * charts.length}px` }}>
                    {chartList(charts)}
                </ul>
            </div>
        </>
    );
};

export default ChartList;
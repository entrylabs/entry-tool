import React from 'react';
import Chart from '@components/widget/Chart';
import Styles from '@assets/entry/scss/popup.scss';

const SummaryChartList = (props) => {
    const { table, charts } = props;

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
            >
                <Chart
                    type={chart.type}
                    xIndex={chart.xIndex}
                    yIndexs={chart.yIndexs}
                    table={table}
                    size={{
                        width: 236,
                        height: 140,
                    }}
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
                <ul className={Styles.list} style={{ width: `${152 * charts.length}px` }}>
                    {chartList(charts)}
                </ul>
            </div>
        </>
    );
};

export default SummaryChartList;

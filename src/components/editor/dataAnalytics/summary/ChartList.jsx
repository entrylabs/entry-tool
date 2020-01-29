import React, { useContext } from 'react';
import Chart from '@components/widget/Chart';
import { DataAnalyticsContext } from '../context/DataAnalyticsContext';
import { CommonUtils } from '@utils/Common';
import { CHART } from '../Constants';

import Styles from '@assets/entry/scss/popup.scss';

const { generateHash } = CommonUtils;

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
            return (
                <li onClick={handleClickChart(CHART, 0)}>
                    <div className={Styles.data_add_box}>
                        <a href="#" onClick={(e) => e.preventDefault()}>
                            <span className={Styles.blind}>데이터 추가하기</span>
                        </a>
                        <p>
                            추가된 차트가 없습니다.
                            <br />
                            차트를 생성해주세요.
                        </p>
                    </div>
                </li>
            );
        }

        return charts.map((chart, index) => (
            <li
                key={`chart_${generateHash()}`}
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
                <ul className={Styles.list}>{chartList(charts)}</ul>
            </div>
        </>
    );
};

export default ChartList;

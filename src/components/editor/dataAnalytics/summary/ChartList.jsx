import React, { useContext } from 'react';
import Chart from '@components/widget/Chart';
import { DataAnalyticsContext } from '@contexts/dataAnalytics';
import { CommonUtils } from '@utils/Common';
import { CHART } from '@constants/dataAnalytics';

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
        event.currentTarget.classList.add(Styles.on);
    };

    const handleMouseLeave = (event) => {
        event.currentTarget.classList.remove(Styles.on);
    };

    const chartList = (charts) => {
        if (charts.length === 0) {
            return (
                <li onClick={handleClickChart(CHART, 0)}>
                    <div className={Styles.data_add_box}>
                        <a onClick={(e) => e.preventDefault()}>
                            <span className={Styles.blind}>
                                {CommonUtils.getLang('DataAnalytics.add_data')}
                            </span>
                        </a>
                        <p>{CommonUtils.getLang('DataAnalytics.add_chart_alert')}</p>
                    </div>
                </li>
            );
        }

        return charts.map((chart, index) => (
            <li
                className={Styles[chart.type]}
                key={`chart_li_${generateHash()}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleClickChart(CHART, index)}
            >
                <Chart
                    chart={chart}
                    table={table}
                    size={{
                        width: 180,
                        height: 106,
                    }}
                    legend={{ show: false }}
                    tooltip={{ show: false }}
                    axisX={{
                        tick: {
                            show: false,
                            text: {
                                show: false,
                            },
                        },
                    }}
                    axisY={{
                        tick: {
                            culling: true,
                        },
                    }}
                    shortForm={true}
                    key={`chart_${generateHash()}`}
                />
            </li>
        ));
    };

    return (
        <>
            <div className={Styles.title_box}>
                <strong>{CommonUtils.getLang('DataAnalytics.chart')}</strong>
            </div>
            <div className={Styles.chart_list}>
                <ul className={Styles.list}>{chartList(charts)}</ul>
            </div>
        </>
    );
};

export default ChartList;

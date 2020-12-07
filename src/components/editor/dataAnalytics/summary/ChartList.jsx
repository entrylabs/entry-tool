import React, { useContext } from 'react';
import Chart from '@components/widget/Chart';
import { DataAnalyticsContext } from '@contexts/dataAnalytics';
import { CommonUtils } from '@utils/Common';
import { CHART } from '@constants/dataAnalytics';
import Theme from '@utils/Theme';

const ChartList = () => {
    const theme = Theme.getStyle('popup');
    const { dataAnalytics, dispatch } = useContext(DataAnalyticsContext);
    const { selected } = dataAnalytics;
    const { fields = [], origin, chart: charts = [], chartIndex = 0 } = selected;
    const table = [[...fields], ...origin];

    const handleClickChart = (tab, index) => () => {
        dispatch({
            type: 'SET_TAB',
            tab,
            index,
        });
    };

    const handleMouseEnter = (event) => {
        event.currentTarget.classList.add(theme.on);
    };

    const handleMouseLeave = (event) => {
        event.currentTarget.classList.remove(theme.on);
    };

    return (
        <div className={theme.category_box}>
            <ul className={theme.chart_list}>
                {charts.length === 0 ? (
                    <li onClick={handleClickChart(CHART, 0)}>
                        <div className={theme.data_add_box}>
                            <a onClick={(e) => e.preventDefault()}>
                                <span className={theme.blind}>
                                    {CommonUtils.getLang('DataAnalytics.add_data')}
                                </span>
                            </a>
                            <p>{CommonUtils.getLang('DataAnalytics.add_chart_alert')}</p>
                        </div>
                    </li>
                ) : (
                    charts.map((chart, index) => (
                        <li
                            key={`summary_chart_${index}`}
                            className={theme[chart.type]}
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
                                key={`chart_${index}`}
                            />
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default ChartList;

import React, { useContext } from 'react';
import Chart from '@components/widget/Chart';
import { DataAnalyticsContext } from '@contexts/dataAnalytics';
import { CHART } from '@constants/dataAnalytics';
import { getTrimedTable, getTable } from '@utils/dataAnalytics';
import Theme from '@utils/Theme';
import { CommonUtils } from '@utils/Common';

const ChartList = () => {
    const theme = Theme.getStyle('popup');
    const { dataAnalytics, dispatch } = useContext(DataAnalyticsContext);
    const { selected } = dataAnalytics;
    const { table: selectedTable, chart: charts = [] } = selected;
    const table = getTrimedTable(selectedTable);

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
            {charts.length ? (
                <div className={theme.chart_list}>
                    <ul className={theme.list}>
                        {charts.map((chart, index) => (
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
                                        width: 190,
                                        height: 128,
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
                        ))}
                    </ul>
                </div>
            ) : (
                <div className={theme.table_sjt}>
                    <strong>{CommonUtils.getLang('DataAnalytics.chart')}</strong>
                    <p className={theme.title_dsc}>
                        {CommonUtils.getLang('DataAnalytics.not_exist_chart')}
                    </p>
                </div>
            )}
        </div>
    );
};

export default ChartList;

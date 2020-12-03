import React, { useContext } from 'react';
import Chart from '@components/widget/Chart';
import { DataAnalyticsContext } from '@contexts/dataAnalytics';
import { CommonUtils } from '@utils/Common';
import { CHART } from '@constants/dataAnalytics';
import Theme from '@utils/Theme';

const { generateHash } = CommonUtils;

const ChartList = (props) => {
    const theme = Theme.getStyle('popup');
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
        event.currentTarget.classList.add(theme.on);
    };

    const handleMouseLeave = (event) => {
        event.currentTarget.classList.remove(theme.on);
    };

    const chartList = (charts) => {
        if (charts.length === 0) {
            return (
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
            );
        }

        return charts.map((chart, index) => (
            <li
                className={theme[chart.type]}
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
            <div className={theme.title_box}>
                <strong>{CommonUtils.getLang('DataAnalytics.chart')}</strong>
            </div>
            <div className={theme.chart_list}>
                <ul className={theme.list}>{chartList(charts)}</ul>
            </div>
        </>
    );
};

export default ChartList;

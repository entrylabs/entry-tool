import { useContext } from 'react';
import { DataAnalyticsContext } from '@contexts/dataAnalytics';
import { CHART } from '@constants/dataAnalytics';
import Theme from '@utils/Theme';
import { CommonUtils } from '@utils/Common';
import cx from 'classnames';

const ChartList = () => {
    const theme = Theme.getStyle('popup');
    const { dataAnalytics, dispatch } = useContext(DataAnalyticsContext);
    const { selected } = dataAnalytics;
    const { chart: charts = [] } = selected;

    const handleChartClick = (tab, index) => () => {
        dispatch({
            type: 'SET_TAB',
            tab,
            index,
        });
    };

    return (
        <div className={theme.category_box}>
            <div className={theme.table_sjt}>
                <strong>{CommonUtils.getLang('DataAnalytics.chart')}</strong>
                {!charts.length ? (
                    <p className={theme.title_dsc}>
                        {CommonUtils.getLang('DataAnalytics.not_exist_chart')}
                    </p>
                ) : null}
            </div>
            {charts.length ? (
                <div className={theme.chart_list}>
                    <ul className={theme.chart_list}>
                        {charts.map((chart, index) => (
                            <li
                                key={`summary_chart_${index}`}
                                onClick={handleChartClick(CHART, index)}
                            >
                                <button className={cx(theme.chart_link, theme[chart.type])}>
                                    <strong className={theme.title}>{chart.title}</strong>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : null}
        </div>
    );
};

export default ChartList;

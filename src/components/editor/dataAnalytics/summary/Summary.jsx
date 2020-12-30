import React, { useContext } from 'react';
import Table from './Table';
import ChartList from './ChartList';
import Theme from '@utils/Theme';
import { CommonUtils } from '@utils/Common';
import { DataAnalyticsContext } from '@contexts/dataAnalytics';

const Summary = () => {
    const theme = Theme.getStyle('popup');
    const { dataAnalytics } = useContext(DataAnalyticsContext);
    const { selected } = dataAnalytics;
    const { summary: info } = selected;
    return (
        <div className={theme.chart_box}>
            <h2 className={theme.blind}>정보</h2>
            <div className={theme.inner}>
                {info ? (
                    <div className={theme.category_box}>
                        <div className={theme.table_sjt}>
                            <strong>{CommonUtils.getLang('DataAnalytics.summary')}</strong>
                            <p className={theme.title_dsc}>{info}</p>
                        </div>
                    </div>
                ) : (
                    ''
                )}
                <Table />
                <ChartList />
            </div>
        </div>
    );
};

export default Summary;

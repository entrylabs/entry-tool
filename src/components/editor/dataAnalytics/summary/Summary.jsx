import React, { useContext } from 'react';
import Styles from '@assets/entry/scss/popup.scss';
import Table from './Table';
import ChartList from './ChartList';
import { DataAnalyticsContext } from '@contexts/dataAnalytics';
import { CommonUtils, getSummary } from '@utils/Common';

const Summary = () => {
    const { dataAnalytics } = useContext(DataAnalyticsContext);
    const { selected } = dataAnalytics;
    const { table, title, charts, summary: info } = selected;

    const summary = getSummary(table);
    return (
        <div className={Styles.chart_box}>
            <h2 className={Styles.blind}>정보</h2>
            <div className={Styles.inner}>
                <Table />
                <div className={Styles.category_box}>
                    <div className={Styles.table_sjt}>
                        <strong>차트</strong>
                        <p className={Styles.title_dsc}>추가한 차트가 없습니다.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Summary2 = () => {
    const { dataAnalytics } = useContext(DataAnalyticsContext);
    const { selected } = dataAnalytics;
    const { table, title, charts, summary: info } = selected;

    const summary = getSummary(table);

    return (
        <section className={`${Styles.detail_cont}`}>
            <div className={Styles.content_box}>
                {info ? (
                    <div className={Styles.depth_title_box}>
                        <h2 className={Styles.tit}>
                            {CommonUtils.getLang('DataAnalytics.summary')}
                        </h2>
                        <p className={Styles.tit_dsc}>{info}</p>
                    </div>
                ) : null}

                <div className={Styles.cont_inner}>
                    <Table summary={summary} title={title} table={table} />
                    <ChartList table={table} charts={charts} />
                </div>
            </div>
        </section>
    );
};

export default Summary;

import React, { useContext } from 'react';
import Styles from '@assets/entry/scss/popup.scss';
import Table from './Table';
import ChartList from './ChartList';
import { DataAnalyticsContext } from '../context/DataAnalyticsContext';
import { CommonUtils, getSummary } from '@utils/Common';

const Summary = () => {
    const { dataAnalytics } = useContext(DataAnalyticsContext);
    const { table, title, charts, summary: info } = dataAnalytics;

    const summary = getSummary(table);

    return (
        <section className={`${Styles.detail_cont}`}>
            <div className={Styles.content_box}>
                {info ? (
                    <div className={Styles.depth_title_box}>
                        <h2 className={Styles.tit}>
                            {CommonUtils.getLang('DataAnalytics.summary')}
                        </h2>
                        <p className={Styles.tit_dsc}>
                            {CommonUtils.getLang('DataAnalytics.title_descript')}
                        </p>
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

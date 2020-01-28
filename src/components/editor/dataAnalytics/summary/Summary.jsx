import React, { useContext } from 'react';
import TitleInput from '@components/editor/dataAnalytics/TitleInput';
import Styles from '@assets/entry/scss/popup.scss';
import Table from './Table';
import ChartList from './ChartList';
import { DataAnalyticsContext } from '../context/DataAnalyticsContext';
import { getSummary } from '@utils/Common';

const Summary = () => {
    const { dataAnalytics, dispatch } = useContext(DataAnalyticsContext);
    const { table, title, charts } = dataAnalytics;

    const summary = getSummary(table);

    const handleChangeTitle = (value) => (event) => {
        dispatch({
            type: 'EDIT_TITLE',
            title: value,
        });
    };

    return (
        <section className={`${Styles.detail_cont}`}>
            <h2 className={Styles.blind}>요약</h2>
            <div className={Styles.content_box}>
                <div className={Styles.input_box}>
                    <TitleInput title={title} onChangeTitle={handleChangeTitle} />
                    <ul className={Styles.cnt_result}>
                        <li>열 {summary.length}개</li>
                        <li>행 {table.length - 1}행</li>
                        <li>칸 {summary.length * (table.length - 1)}개</li>
                    </ul>
                </div>

                <div className={Styles.cont_inner}>
                    <Table summary={summary} />
                    <ChartList table={table} charts={charts} />
                </div>
            </div>
        </section>
    );
};

export default Summary;

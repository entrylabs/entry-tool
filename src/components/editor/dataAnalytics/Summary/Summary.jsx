import React from 'react';

import TitleInput from '@components/editor/dataAnalytics/TitleInput';
import Styles from '@assets/entry/scss/popup.scss';
import Table from './Table';
import ChartList from './ChartList';
import { getSummary } from '@utils/Common';

const Summary = (props) => {
    const { table = [[]], title = '', charts = [], onChangeTitle, onClickChart } = props;

    const summary = getSummary(table);

    return (
        <section className={`${Styles.detail_cont}`}>
            <h2 className={Styles.blind}>요약</h2>
            <div className={Styles.content_box}>
                <div className={Styles.input_box}>
                    <TitleInput title={title} onChangeTitle={onChangeTitle} />
                    <ul className={Styles.cnt_result}>
                        <li>속성 {summary.length}개</li>
                        <li>행 {table.length - 1}행</li>
                        <li>값 {summary.length * (table.length - 1)}개</li>
                    </ul>
                </div>

                <div className={Styles.cont_inner}>
                    <Table summary={summary} />
                    <ChartList table={table} charts={charts} onClickChart={onClickChart} />
                </div>
            </div>
        </section>
    );
};

export default Summary;

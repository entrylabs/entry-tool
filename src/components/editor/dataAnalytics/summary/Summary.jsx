import React, { useContext } from 'react';
import TitleInput from '@components/editor/dataAnalytics/TitleInput';
import Styles from '@assets/entry/scss/popup.scss';
import Table from './Table';
import ChartList from './ChartList';
import { DataAnalyticsContext } from '../context/DataAnalyticsContext';
import { CommonUtils, getSummary } from '@utils/Common';

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
                        <li>{`${CommonUtils.getLang('DataAnalytics.attribute')} ${
                            summary.length
                        }${CommonUtils.getLang('DataAnalytics.attribute_count')}`}</li>
                        <li>{`${CommonUtils.getLang('DataAnalytics.row')} ${table.length -
                            1}${CommonUtils.getLang('DataAnalytics.row_count')}`}</li>
                        <li>{`${CommonUtils.getLang('DataAnalytics.cell')} ${summary.length *
                            (table.length - 1)}${CommonUtils.getLang(
                            'DataAnalytics.cell_count'
                        )}`}</li>
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

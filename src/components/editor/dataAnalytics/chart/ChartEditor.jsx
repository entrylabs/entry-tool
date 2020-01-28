import React, { useContext } from 'react';
import Navigation from './Navigation';
import TitleInput from '../TitleInput';
import { DataAnalyticsContext } from '../context/DataAnalyticsContext';

import { CommonUtils } from '@utils/Common';
import ChartLayout from './ChartLayout';

import Styles from '@assets/entry/scss/popup.scss';
const { generateHash } = CommonUtils;

const ChartEditor = () => {
    const { dataAnalytics, dispatch } = useContext(DataAnalyticsContext);
    const { charts, title, chartIndex: selected = 0 } = dataAnalytics;

    const handleChangeTitle = (value) => (event) => {
        dispatch({
            type: 'EDIT_TITLE',
            title: value,
        });
    };

    const handleChangeChartTitle = (value) => (event) => {
        dispatch({
            type: 'EDIT_CHART_TITLE',
            title: value,
        });
    };

    const handleClickItem = (index) => (event) => {
        event.preventDefault();
        dispatch({
            type: 'SET_CHART_INDEX',
            index,
        });
    };

    const handleClickDelete = (event) => {
        event.preventDefault();
        dispatch({
            type: 'DELETE_CHART',
            selected,
        });
    };

    const selectedChart = charts[selected] || {};
    const chartTitle = selectedChart.title;

    return (
        <section className={`${Styles.detail_cont} ${Styles.chart_state}`}>
            <h2 className={Styles.blind}>차트</h2>
            <Navigation selected={selected} charts={charts} onClickItem={handleClickItem} />
            <div className={Styles.content_box}>
                <div className={Styles.input_box}>
                    <div className={Styles.input_inner}>
                        <TitleInput title={title} onChangeTitle={handleChangeTitle} />
                    </div>
                    <div className={Styles.input_inner}>
                        <TitleInput
                            key={`c${generateHash()}`}
                            title={chartTitle}
                            onChangeTitle={handleChangeChartTitle}
                            disabled={!charts.length}
                        />
                    </div>
                    <a href="#" className={Styles.chart_del} onClick={handleClickDelete}>
                        차트 삭제
                    </a>
                </div>
                <ChartLayout />
            </div>
        </section>
    );
};

export default ChartEditor;

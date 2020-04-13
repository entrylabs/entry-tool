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
    const chartTitle =
        selectedChart.title || `${title}_${CommonUtils.getLang('DataAnalytics.chart_title')}`;

    return (
        <section className={`${Styles.detail_cont} ${Styles.chart_state}`}>
            <div className={Styles.content_box}>
                <h2 className={Styles.blind}>{CommonUtils.getLang('DataAnalytics.chart')}</h2>
                <Navigation selected={selected} charts={charts} onClickItem={handleClickItem} />
                <div className={Styles.input_box}>
                    {charts.length ? (
                        <>
                            <div className={Styles.input_inner}>
                                <TitleInput
                                    key={`c${generateHash()}`}
                                    title={chartTitle}
                                    onChangeTitle={handleChangeChartTitle}
                                    disabled={!charts.length}
                                />
                            </div>
                            <a href="#" className={Styles.chart_del} onClick={handleClickDelete}>
                                {CommonUtils.getLang('DataAnalytics.remove_chart')}
                            </a>
                        </>
                    ) : null}
                </div>
                <ChartLayout />
            </div>
        </section>
    );
};

export default ChartEditor;

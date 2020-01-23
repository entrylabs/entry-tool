import React, { useContext } from 'react';
import Navigation from './Navigation';
import TitleInput from '../TitleInput';
import Chart from '@components/widget/Chart';
import { DataAnalyticsContext } from '../context/DataAnalyticsContext';

import Styles from '@assets/entry/scss/popup.scss';

import { CommonUtils } from '@utils/Common';
const { generateHash } = CommonUtils;

const ChartEditor = () => {
    const { dataAnalytics, dispatch } = useContext(DataAnalyticsContext);
    const { table, charts, title, chartIndex: selected = 0 } = dataAnalytics;

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
        if (index !== -1) {
            dispatch({
                index,
                type: 'SET_CHART_INDEX',
            });
        } else {
            dispatch({
                type: 'ADD_CHART',
                chartType: 'bar',
            });
        }
    };

    const chartTitle = (charts[selected] && charts[selected].title) || `${title}_차트 제목`;

    return (
        <section className={`${Styles.detail_cont} ${Styles.chart_state}`}>
            <h2 className={Styles.blind}>차트</h2>
            <Navigation selected={selected} charts={charts} onClickItem={handleClickItem} />
            {charts.length ? (
                <div className={Styles.content_box}>
                    <div className={Styles.input_box}>
                        <TitleInput title={title} onChangeTitle={handleChangeTitle} />
                        <TitleInput
                            key={`c${generateHash()}`}
                            title={chartTitle}
                            onChangeTitle={handleChangeChartTitle}
                        />
                    </div>
                    <div className={Styles.cont_inner}>
                        <div className={Styles.chart_box}>
                            <Chart
                                key={`c${generateHash()}`}
                                table={table}
                                chart={charts[selected] || {}}
                                size={{ height: 552 }}
                                showAxis={true}
                                showLegend={true}
                            />
                        </div>
                    </div>
                </div>
            ) : (
                <div>차트를 먼저 추가해주세요</div>
            )}
        </section>
    );
};

export default ChartEditor;

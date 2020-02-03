import React, { createContext, useReducer, useEffect } from 'react';
import { SUMMARY } from '../Constants';
import { dataAnalyticsReducer } from '../reducer/DataAnalyticsReducer';

export const DataAnalyticsContext = createContext();

const DataAnalyticsContextProvider = (props) => {
    const { analytics = {} } = props;
    const {
        title = '',
        table = [[]],
        charts = [],
        id,
        tab,
        onToastDataAnalytics,
        onSubmitDataAnalytics,
    } = analytics;
    const [dataAnalytics, dispatch] = useReducer(dataAnalyticsReducer, {
        id,
        title,
        table,
        charts,
        tab,
        chartIndex: 0,
        isFullScreen: false,
        onToastDataAnalytics,
        onSubmitDataAnalytics,
    });

    useEffect(() => {
        const { title = '', table = [[]], charts = [], id } = analytics;
        dispatch({
            type: 'SET_DATA',
            payload: {
                id,
                title,
                table,
                charts,
                tab: tab || dataAnalytics.tab,
                chartIndex: 0,
                isFullScreen: false,
            },
        });
    }, [analytics, dispatch]);

    return (
        <DataAnalyticsContext.Provider value={{ dataAnalytics, dispatch }}>
            {props.children}
        </DataAnalyticsContext.Provider>
    );
};

export default DataAnalyticsContextProvider;

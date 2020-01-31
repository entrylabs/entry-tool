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
        onToastDataAnalytics,
        onSummitDataAnalytics,
    } = analytics;
    const [dataAnalytics, dispatch] = useReducer(dataAnalyticsReducer, {
        id,
        title,
        table,
        charts,
        tab: SUMMARY,
        chartIndex: 0,
        isFullScreen: false,
        onToastDataAnalytics,
        onSummitDataAnalytics,
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

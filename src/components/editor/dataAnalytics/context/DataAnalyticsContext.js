import React, { createContext, useReducer, useEffect } from 'react';
import { SUMMARY } from '../Constants';
import { dataAnalyticsReducer } from '../reducer/DataAnalyticsReducer';

export const DataAnalyticsContext = createContext();

const DataAnalyticsContextProvider = (props) => {
    const { analytics = {} } = props;
    const { title = '', table = [[]], charts = [] } = analytics;
    const [dataAnalytics, dispatch] = useReducer(dataAnalyticsReducer, {
        title,
        table,
        charts,
        tab: SUMMARY,
        chartIndex: 0,
    });

    useEffect(() => {
        const { title = '', table = [[]], charts = [] } = analytics;
        dispatch({
            type: 'SET_DATA',
            payload: {
                title,
                table,
                charts,
                chartIndex: 0,
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

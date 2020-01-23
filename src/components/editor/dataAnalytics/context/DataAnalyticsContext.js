import React, { createContext, useReducer } from 'react';
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

    return (
        <DataAnalyticsContext.Provider value={{ dataAnalytics, dispatch }}>
            {props.children}
        </DataAnalyticsContext.Provider>
    );
};

export default DataAnalyticsContextProvider;

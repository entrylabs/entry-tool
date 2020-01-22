import React, { createContext, useReducer } from 'react';
import { dataAnalyticsReducer } from '../reducer/DataAnalyticsReducer';

export const DataAnalyticsContext = createContext();

const DataAnalyticsContextProvider = (props) => {
    const [dataAnalytics, dispatch] = useReducer(dataAnalyticsReducer, {
        name: '',
        table: [],
        charts: [],
        tab: '',
    });

    return (
        <DataAnalyticsContext.Provider value={{ dataAnalytics, dispatch }}>
            {props.children}
        </DataAnalyticsContext.Provider>
    );
};

export default DataAnalyticsContextProvider;

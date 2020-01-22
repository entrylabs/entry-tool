import React, { createContext, useReducer } from 'react';
import { dataAnalyticsReducer } from '../reducers/DataAnalyticsReducer';

export const DataAnalyticsContext = createContext();

const DataAnalyticsContextProvider = (props) => {
    const [dataAnalytics, dispatch] = useReducer(dataAnalyticsReducer, {
        name: '',
        table: [],
        charts: [],
    });

    return (
        <DataAnalyticsContext.Provider value={{ dataAnalytics, dispatch }}>
            {props.children}
        </DataAnalyticsContext.Provider>
    );
};

export default DataAnalyticsContextProvider;

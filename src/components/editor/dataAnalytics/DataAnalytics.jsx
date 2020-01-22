import React from 'react';
import DataAnalyticsEditor from './DataAnalyticsEditor';
import DataAnalyticsContextProvider from './context/DataAnalyticsContext';

const DataAnalytics = (props) => {
    const { table = {} } = props;
    const { name = '', fields, origin = [], chart = [] } = table;

    const data = {
        title: name,
        table: [fields, ...origin],
        charts: chart,
    };

    return (
        <DataAnalyticsContextProvider analytics={data}>
            <DataAnalyticsEditor />
        </DataAnalyticsContextProvider>
    );
};

export default DataAnalytics;

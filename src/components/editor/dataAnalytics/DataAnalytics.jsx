import React from 'react';
import DataAnalyticsEditor from './DataAnalyticsEditor';
import DataAnalyticsContextProvider from './context/DataAnalyticsContext';

const DataAnalytics = (props) => {
    const { table = {}, onSummitDataAnalytics = () => {}, onToastDataAnalytics = () => {} } = props;
    const { name = '', fields, origin = [], chart = [], id } = table;
    const dataTable = fields ? [fields, ...origin] : [[]];

    const data = {
        id,
        title: name,
        table: dataTable,
        charts: chart,
        onToastDataAnalytics,
        onSummitDataAnalytics,
    };

    return (
        <DataAnalyticsContextProvider analytics={data}>
            <DataAnalyticsEditor />
        </DataAnalyticsContextProvider>
    );
};

export default DataAnalytics;

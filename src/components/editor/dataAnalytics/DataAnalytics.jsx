import React from 'react';
import DataAnalyticsEditor from './DataAnalyticsEditor';
import DataAnalyticsContextProvider from './context/DataAnalyticsContext';

const DataAnalytics = (props) => {
    const { table = {}, onSummitDataAnalytics = () => {} } = props;
    const { name = '', fields, origin = [], chart = [], id } = table;
    const dataTable = fields ? [fields, ...origin] : [[]];

    const data = {
        id,
        title: name,
        table: dataTable,
        charts: chart,
    };

    return (
        <DataAnalyticsContextProvider analytics={data}>
            <DataAnalyticsEditor onSummitDataAnalytics={onSummitDataAnalytics} />
        </DataAnalyticsContextProvider>
    );
};

export default DataAnalytics;

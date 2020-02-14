import React from 'react';
import DataAnalyticsEditor from './DataAnalyticsEditor';
import DataAnalyticsContextProvider from './context/DataAnalyticsContext';

const DataAnalytics = (props) => {
    const { table = {}, onSubmitDataAnalytics = () => {}, onToastDataAnalytics = () => {} } = props;
    const { name = '', fields, origin = [], chart = [], id, tab } = table;
    const dataTable = fields ? [[...fields], ...origin] : [[]];

    const data = {
        id,
        tab,
        title: name,
        table: dataTable,
        charts: chart,
        onToastDataAnalytics,
        onSubmitDataAnalytics,
    };

    return (
        <DataAnalyticsContextProvider analytics={data}>
            <DataAnalyticsEditor />
        </DataAnalyticsContextProvider>
    );
};

export default DataAnalytics;

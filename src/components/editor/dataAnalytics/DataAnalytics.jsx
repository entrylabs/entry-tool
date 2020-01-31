import React from 'react';
import DataAnalyticsEditor from './DataAnalyticsEditor';
import DataAnalyticsContextProvider from './context/DataAnalyticsContext';
import { SUMMARY } from './Constants';

const DataAnalytics = (props) => {
    const { table = {}, onSummitDataAnalytics = () => {}, onToastDataAnalytics = () => {} } = props;
    const { name = '', fields, origin = [], chart = [], id, tab = SUMMARY } = table;
    const dataTable = fields ? [fields, ...origin] : [[]];

    const data = {
        id,
        tab,
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

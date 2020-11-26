import React from 'react';
import DataAnalyticsEditor from './DataAnalyticsEditor';
import DataAnalyticsContextProvider from '@contexts/dataAnalytics';

const DataAnalytics = (props) => {
    const {
        table = {},
        onSubmitDataAnalytics = () => {},
        onToastDataAnalytics = () => {},
        onChangeDataAnalytics = () => {},
        onAlertDataAnalytics = () => {},
        onCloseButtonClick = () => {},
    } = props;
    const { name = '', fields, origin = [], chart = [], id, tab, summary } = table;
    const dataTable = fields ? [[...fields], ...origin] : [[]];

    const data = {
        id,
        tab,
        summary,
        title: name,
        table: dataTable.map((row) => row.map((column) => column)),
        charts: chart,
        onToastDataAnalytics,
        onSubmitDataAnalytics,
        onChangeDataAnalytics,
        onAlertDataAnalytics,
        onCloseButtonClick,
    };

    return (
        <DataAnalyticsContextProvider analytics={data}>
            <DataAnalyticsEditor />
        </DataAnalyticsContextProvider>
    );
};

export default DataAnalytics;

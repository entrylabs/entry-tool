import React from 'react';
import DataAnalyticsEditor from './DataAnalyticsEditor';
import DataAnalyticsContextProvider from '@contexts/dataAnalytics';
import { TABLE } from '@constants/dataAnalytics';

const DataAnalytics = (props) => {
    const {
        tab = TABLE,
        list = [],
        onSubmitDataAnalytics = () => {},
        onToastDataAnalytics = () => {},
        onChangeDataAnalytics = () => {},
        onAlertDataAnalytics = () => {},
        onCloseButtonClick = () => {},
        onAddTableButtonClick = () => {},
    } = props;
    const { name = '', fields, origin = [], chart = [], id, summary } = list[0] || {};
    const dataTable = fields ? [[...fields], ...origin] : [[]];

    const data = {
        tab,
        list,
        selectedIndex: 0,
        selected: {
            id,
            tab,
            summary,
            title: name,
            table: dataTable.map((row) => row.map((column) => column)),
            charts: chart,
        },
        fold: false,
        onToastDataAnalytics,
        onSubmitDataAnalytics,
        onChangeDataAnalytics,
        onAlertDataAnalytics,
        onCloseButtonClick,
        onAddTableButtonClick,
    };

    return (
        <DataAnalyticsContextProvider analytics={data}>
            <DataAnalyticsEditor />
        </DataAnalyticsContextProvider>
    );
};

export default DataAnalytics;

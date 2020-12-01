import React from 'react';
import DataAnalyticsEditor from './DataAnalyticsEditor';
import DataAnalyticsContextProvider from '@contexts/dataAnalytics';
import { TABLE } from '@constants/dataAnalytics';

const DataAnalytics = (props) => {
    const {
        tab,
        list = [],
        onSubmitDataAnalytics = () => {},
        onToastDataAnalytics = () => {},
        onChangeDataAnalytics = () => {},
        onAlertDataAnalytics = () => {},
        onCloseButtonClick = () => {},
        onAddTableButtonClick = () => {},
    } = props;

    const data = {
        tab: tab || (list[0] && TABLE),
        list,
        selectedIndex: 0,
        selected: list[0],
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

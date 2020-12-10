import React from 'react';
import _cloneDeep from 'lodash/cloneDeep';
import DataAnalyticsEditor from './DataAnalyticsEditor';
import DataAnalyticsContextProvider from '@contexts/dataAnalytics';
import { TABLE } from '@constants/dataAnalytics';

const DataAnalytics = (props) => {
    const {
        tab,
        list = [],
        selectedIndex = 0,
        onSubmitDataAnalytics = () => {},
        onToastDataAnalytics = () => {},
        onChangeDataAnalytics = () => {},
        onAlertDataAnalytics = () => {},
        onCloseButtonClick = () => {},
        onAddTableButtonClick = () => {},
    } = props;

    const index = selectedIndex == 0 ? 0 : list.length - 1;

    const data = {
        tab: tab || (list[0] && TABLE),
        list,
        selectedIndex: index,
        selected: _cloneDeep(list[index]),
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

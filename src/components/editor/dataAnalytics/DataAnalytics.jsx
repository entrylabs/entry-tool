import React, { useState, useCallback } from 'react';

import Header from './Header';
import Summary from './summary/Summary';
import TableEditor from './TableEditor';
import ChartEditor from './chart/ChartEditor';
import DataAnalyticsContextProvider from './context/DataAnalyticsContext';
import { SUMMARY, TABLE, CHART, TAB_ITEMS } from './Constants';

import Styles from '@assets/entry/scss/popup.scss';

const DataAnalytics = (props) => {
    const { table = {} } = props;
    const { name = '', fields, origin = [], chart = [] } = table;
    const [{ tab, selectedChart }, setTab] = useState({ tab: SUMMARY, selectedChart: 0 });
    const [title, setTitle] = useState(name);
    const originTable = [fields, ...origin];

    const handleChangeTab = (tab, index) => (event) => {
        event.preventDefault();
        setTab({ tab, selectedChart: index || selectedChart });
    };

    const handleChangeTitle = useCallback(
        (value) => {
            setTitle(value);
        },
        [title]
    );

    let content;
    if (!table) {
        content = null;
    } else {
        switch (tab) {
            case SUMMARY:
                content = (
                    <Summary
                        title={title}
                        table={originTable}
                        charts={chart}
                        onChangeTitle={handleChangeTitle}
                        onClickChart={handleChangeTab}
                    />
                );
                break;
            case TABLE:
                content = (
                    <TableEditor
                        title={title}
                        table={originTable}
                        onChangeTitle={handleChangeTitle}
                    />
                );
                break;
            case CHART:
                content = (
                    <ChartEditor
                        title={title}
                        table={originTable}
                        charts={chart}
                        selected={selectedChart}
                        onChangeTitle={handleChangeTitle}
                    />
                );
                break;
            default:
                break;
        }
    }

    return (
        <DataAnalyticsContextProvider>
            <div className={Styles.data_detail_wrap}>
                <Header selected={tab} tabItems={TAB_ITEMS} onClickTab={handleChangeTab} />
                {content}
            </div>
        </DataAnalyticsContextProvider>
    );
};

export default DataAnalytics;

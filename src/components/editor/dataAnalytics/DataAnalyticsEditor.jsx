import React, { useContext } from 'react';

import Header from './Header';
import Summary from './summary/Summary';
import TableEditor from './TableEditor';
import ChartEditor from './chart/ChartEditor';
import { DataAnalyticsContext } from './context/DataAnalyticsContext';
import { SUMMARY, TABLE, CHART, TAB_ITEMS } from './Constants';
import Styles from '@assets/entry/scss/popup.scss';

const DataAnalyticsEditor = () => {
    const { dataAnalytics } = useContext(DataAnalyticsContext);
    const { tab, table } = dataAnalytics;

    let content;
    if (!table) {
        content = null;
    } else {
        switch (tab) {
            case SUMMARY:
                content = <Summary />;
                break;
            case TABLE:
                content = <TableEditor />;
                break;
            case CHART:
                content = <ChartEditor />;
                break;
            default:
                break;
        }
    }

    return (
        <div className={Styles.data_detail_wrap}>
            <Header selected={tab} tabItems={TAB_ITEMS} />
            {content}
        </div>
    );
};

export default DataAnalyticsEditor;

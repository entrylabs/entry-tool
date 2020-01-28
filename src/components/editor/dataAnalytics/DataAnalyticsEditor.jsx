import React, { useContext, useState } from 'react';

import Header from './Header';
import Summary from './summary/Summary';
import TableEditor from './TableEditor';
import ChartEditor from './chart/ChartEditor';
import { DataAnalyticsContext } from './context/DataAnalyticsContext';
import { SUMMARY, TABLE, CHART, TAB_ITEMS } from './Constants';
import Styles from '@assets/entry/scss/popup.scss';

const DataAnalyticsEditor = () => {
    const [isFullScreen, setIsFullScreen] = useState(false);
    const { dataAnalytics } = useContext(DataAnalyticsContext);
    const { tab, table } = dataAnalytics;

    const handleFullScreenClick = (event) => {
        event.preventDefault();
        setIsFullScreen(!isFullScreen);
    };

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
        <div
            className={
                isFullScreen
                    ? `${Styles.data_detail_wrap} ${Styles.full}`
                    : `${Styles.data_detail_wrap}`
            }
        >
            <Header selected={tab} tabItems={TAB_ITEMS} onFullScreenClick={handleFullScreenClick} />
            {content}
        </div>
    );
};

export default DataAnalyticsEditor;

import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Summary from './summary/Summary';
import TableEditor from './TableEditor';
import ChartEditor from './chart/ChartEditor';
import { DataAnalyticsContext } from './context/DataAnalyticsContext';
import { SUMMARY, TABLE, CHART, TAB_ITEMS } from './Constants';
import Styles from '@assets/entry/scss/popup.scss';

const Portal = ({ children }) => {
    const el = document.querySelector('body');
    return ReactDOM.createPortal(children, el);
};

const DataAnalyticsEditor = () => {
    const { dataAnalytics, dispatch } = useContext(DataAnalyticsContext);
    const { tab, table, isFullScreen } = dataAnalytics;

    const handleFullScreenClick = (event) => {
        event.preventDefault();
        dispatch({
            type: 'TOGGLE_FULLSCREEN',
            isFullScreen: !isFullScreen,
        });
    };

    const header = (
        <Header
            selected={tab}
            tabItems={TAB_ITEMS}
            isFullScreen={isFullScreen}
            onFullScreenClick={handleFullScreenClick}
        />
    );
    let content = null;
    if (table) {
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

    return isFullScreen ? (
        <Portal>
            <div className={`${Styles.data_detail_wrap} ${Styles.full}`}>
                {header}
                {content}
            </div>
        </Portal>
    ) : (
        <div className={`${Styles.data_detail_wrap}`}>
            {header}
            {content}
        </div>
    );
};

export default DataAnalyticsEditor;

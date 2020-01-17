import React, { useState } from 'react';

import Header from './Header';
import Summary from './Summary/Summary';
import TableEditor from './TableEditor';
import ChartEditor from './ChartEditor';
import { SUMMARY, TABLE, CHART, TAB_ITEMS } from './Constants';

import Styles from '@assets/entry/scss/popup.scss';

const DataAnalytics = (props) => {
    const { table } = props;
    const [tab, setTab] = useState(SUMMARY);
    const handleClickTab = (name) => (event) => {
        event.preventDefault();
        setTab(name);
    };
    
    let content;
    if (!table) {
        content = null;
    } else {
        const { name, fields, origin = [], chart } = table;
        const originTable = [fields, ...origin];
        switch (tab) {
            case SUMMARY:
                content = <Summary name={name} table={originTable} charts={chart} />;
                break;
            case TABLE:
                content = <TableEditor table={originTable} />;
                break;
            case CHART:
                content = <ChartEditor table={originTable} charts={chart} />;
                break;
            default:
                break;
        }
    }

    return (
        <div className={Styles.data_detail_wrap}>
            <Header selected={tab} tabItems={TAB_ITEMS} onClickTab={handleClickTab} />
            {/* [D] 메뉴 카테고리 선택에 따라 텍스트 변경  */}
            {content}
        </div>
    );
};

export default DataAnalytics;

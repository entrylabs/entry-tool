import React, { useState } from 'react';

import Header from './Header';
import Summary from './Summary';
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
    switch (tab) {
        case SUMMARY:
            content = <Summary table={table} />;
            break;
        case TABLE:
            content = <TableEditor table={table} />;
            break;
        case CHART:
            content = <ChartEditor table={table} />;
            break;
        default:
            break;
    }

    return (
        <div className={Styles.data_detail_wrap}>
            <Header selected={tab} tabItems={TAB_ITEMS} onClickTab={handleClickTab} />
            <section className={`${Styles.detail_cont} ${Styles.table_state}`}>
                {/* [D] 메뉴 카테고리 선택에 따라 텍스트 변경  */}
                {content}
            </section>
        </div>
    );
};

export default DataAnalytics;

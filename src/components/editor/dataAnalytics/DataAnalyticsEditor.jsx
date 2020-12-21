import React, { useState, useContext, useCallback } from 'react';
import _every from 'lodash/every';
import _difference from 'lodash/difference';
import Summary from './summary/Summary';
import TableEditor from './TableEditor';
import ChartEditor from './chart/ChartEditor';
import SideTab from './SideTab';
import Tab from './Tab';
import Title from './Title';
import SaveConfirm from './SaveConfirm';
import EmptyContents from './EmptyContents';
import { DataAnalyticsContext } from '@contexts/dataAnalytics';
import { SUMMARY, TABLE, CHART } from '@constants/dataAnalytics';
import { isChangeTable } from '@utils/dataAnalytics';
import Theme from '@utils/Theme';
import { CommonUtils } from '@utils/Common';

const DataAnalyticsEditor = () => {
    const theme = Theme.getStyle('popup');
    const [showConfirm, setShowConfirm] = useState(false);
    const { dataAnalytics } = useContext(DataAnalyticsContext);
    const {
        tab,
        selected = {},
        selectedIndex,
        onCloseButtonClick,
        isChanged = true,
        gridRef,
    } = dataAnalytics;
    const { table = [[]] } = selected;

    const handleButtonClick = (event) => {
        event.preventDefault();
        if (!isChanged) {
            if (tab === TABLE) {
                const grid = gridRef?.current?.getSheetData().data;
                if (!isChangeTable(table, grid)) {
                    return onCloseButtonClick();
                }
            } else {
                return onCloseButtonClick();
            }
        }
        setShowConfirm(true);
    };

    const handleConfirmClick = useCallback(() => {
        setShowConfirm(false);
        onCloseButtonClick();
    }, []);

    let sectionCSS = theme.chart_content;
    let Contents = EmptyContents;

    console.log({ selectedIndex });
    if (selectedIndex !== -1) {
        switch (tab) {
            case TABLE:
                Contents = TableEditor;
                break;
            case CHART:
                Contents = ChartEditor;
                break;
            case SUMMARY:
                Contents = Summary;
                sectionCSS = theme.summary_content;
                break;
        }
    }

    return (
        <div className={theme.popup_wrap}>
            <header className={theme.pop_header}>
                <h1>{CommonUtils.getLang('DataAnalytics.load_data_analytics')}</h1>
                <button
                    onClick={handleButtonClick}
                    className={`${theme.btn_back} ${theme.imbtn_pop_close}`}
                >
                    <span className={theme.blind}>뒤로가기</span>
                </button>
            </header>
            <section className={`${theme.pop_content} ${sectionCSS}`}>
                <SideTab />
                {selectedIndex === -1 ? (
                    <section className={theme.content}>
                        <p className={theme.caution_dsc}>먼저 테이블을 추가해 주세요.</p>
                    </section>
                ) : (
                    <div className={theme.section_cont}>
                        <div className={theme.sheet_form_box}>
                            <Title key={`title_${selected ? selected.id : 'null'}`} />
                            <Tab />
                        </div>
                        <Contents />
                    </div>
                )}
            </section>
            {showConfirm && <SaveConfirm onClick={handleConfirmClick} />}
        </div>
    );
};

export default DataAnalyticsEditor;

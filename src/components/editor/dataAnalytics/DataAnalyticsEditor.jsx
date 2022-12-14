import React, { useState, useContext, useCallback, useEffect } from 'react';
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
import { getTrimedTable, isChangeTable } from '@utils/dataAnalytics';
import Theme from '@utils/Theme';
import { CommonUtils } from '@utils/Common';
import classname from 'classnames';

const DataAnalyticsEditor = () => {
    const theme = Theme.getStyle('popup');
    const [showConfirm, setShowConfirm] = useState(false);
    const [applyClicked, setApplyClicked] = useState(false);
    const { dataAnalytics, dispatch } = useContext(DataAnalyticsContext);
    const {
        tab,
        list,
        zoomIn = false,
        gridRef,
        selected = {},
        isChanged,
        selectedIndex,
        onCloseButtonClick,
    } = dataAnalytics;
    const { table = [[]], name = '' } = selected;

    const apply = () => {
        let table;
        if (tab === TABLE) {
            table = getTrimedTable(gridRef?.current?.getSheetData().data);
        }
        dispatch({ type: 'SAVE', table });
        setApplyClicked(true);
    };

    const handleButtonClick = (showConfirm) => (event) => {
        event.preventDefault();
        if (!list.length) {
            return onCloseButtonClick();
        }
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
        if (showConfirm) {
            setShowConfirm(true);
        } else {
            apply();
        }
    };

    const handleConfirmClick = useCallback(() => {
        setShowConfirm(false);
        onCloseButtonClick();
    }, []);

    useEffect(() => {
        if (applyClicked && !isChanged) {
            onCloseButtonClick();
        }
    }, [applyClicked, isChanged]);

    let containerClass = theme.chart_container;
    let Contents = EmptyContents;

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
                containerClass = theme.summary_container;
                break;
        }
    }

    return (
        <div className={theme.popup_wrap}>
            <header className={theme.pop_header}>
                <h1>{CommonUtils.getLang('DataAnalytics.load_data_analytics')}</h1>
                <button
                    onClick={handleButtonClick(true)}
                    className={`${theme.btn_back} ${theme.imbtn_pop_close}`}
                >
                    <span className={theme.blind}>{CommonUtils.getLang('Buttons.back')}</span>
                </button>
                <a className={theme.btn} role="button" onClick={handleButtonClick(false)}>
                    {CommonUtils.getLang('Buttons.apply')}
                </a>
            </header>
            <div
                className={classname(theme.section_container, containerClass, {
                    [theme.zoom_in]: zoomIn,
                })}
            >
                <SideTab />
                <div className={theme.container_inner}>
                    {selectedIndex === -1 ? (
                        <section className={`${theme.content} ${theme.table_no_result_content}`}>
                            <div className={theme.inner}>
                                <p className={theme.dsc_title}>
                                    {CommonUtils.getLang('DataAnalytics.select_table')}
                                </p>
                                <dl className={theme.dsc_list}>
                                    <dt>
                                        {CommonUtils.getLang('DataAnalytics.select_table_title')}
                                    </dt>
                                    <dd>
                                        {CommonUtils.getLang('DataAnalytics.select_table_des1')}
                                    </dd>
                                    <dd>
                                        {CommonUtils.getLang('DataAnalytics.select_table_des2')}
                                    </dd>
                                    <dd>
                                        {CommonUtils.getLang('DataAnalytics.select_table_des3')}
                                    </dd>
                                </dl>
                            </div>
                        </section>
                    ) : (
                        <div className={theme.section_content}>
                            <div className={theme.sheet_form_box}>
                                <Title key={`table_title_${selectedIndex}`} title={name} />
                                <Tab />
                            </div>
                            <Contents />
                        </div>
                    )}
                </div>
            </div>
            {showConfirm && <SaveConfirm onClick={handleConfirmClick} />}
        </div>
    );
};

export default DataAnalyticsEditor;

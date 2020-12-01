import React, { useContext } from 'react';
import Table from '@components/widget/Table';
import { DataAnalyticsContext } from '@contexts/dataAnalytics';
import { CommonUtils } from '@utils/Common';
import Styles from '@assets/entry/scss/popup.scss';

const TableEditor = () => {
    const { dataAnalytics, dispatch } = useContext(DataAnalyticsContext);
    const {
        table,
        title,
        onToastDataAnalytics,
        onChangeDataAnalytics,
        onAlertDataAnalytics,
        isFullScreen,
        gridRef,
    } = dataAnalytics;

    const addColumn = (columnIndex, columnName) => {
        dispatch({
            type: 'ADD_COLUMN',
            columnIndex,
            columnName,
        });
    };

    const deleteColumn = (columnIndex) => {
        dispatch({
            type: 'DELETE_COLUMN',
            columnIndex,
        });
    };

    const addRow = (rowIndex) => {
        dispatch({
            type: 'ADD_ROW',
            rowIndex,
        });
    };

    const deleteRow = (rowIndex) => {
        dispatch({
            type: 'DELETE_ROW',
            rowIndex,
        });
    };

    return (
        <section className={`${Styles.detail_cont} ${Styles.table_state}`}>
            <h2 className={Styles.blind}>{CommonUtils.getLang('DataAnalytics.table')}</h2>
            <div className={Styles.content_box}>
                <div className={Styles.title_box}>
                    <strong>{title}</strong>
                </div>

                <div className={Styles.table_box} style={{ height: 555 }}>
                    {/* <Table
                        table={table}
                        onToastDataAnalytics={onToastDataAnalytics}
                        onChangeDataAnalytics={onChangeDataAnalytics}
                        onAlertDataAnalytics={onAlertDataAnalytics}
                        isFullScreen={isFullScreen}
                        dataAnalytics={dataAnalytics}
                        gridRef={gridRef}
                        addColumn={addColumn}
                        deleteColumn={deleteColumn}
                        addRow={addRow}
                        deleteRow={deleteRow}
                    /> */}
                </div>
            </div>
        </section>
    );
};

export default TableEditor;

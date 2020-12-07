import React, { useContext, useRef } from 'react';
import EntrySheet from 'entry-sheet';
import Table from '@components/widget/Table';
import { DataAnalyticsContext } from '@contexts/dataAnalytics';
import { CommonUtils } from '@utils/Common';
import _map from 'lodash/map';
import Theme from '@utils/Theme';
import { Array } from 'window-or-global';

const getTableData = (table) => {
    const rows = table.length < 10 ? new Array(10).fill('') : table;
    return _map(rows, (row) => {
        const cols = row.length < 10 ? new Array(10).fill('') : row;
        return _map(cols, (__, index) => row[index] || '');
    });
};

const TableEditor = () => {
    const theme = Theme.getStyle('popup');
    const { dataAnalytics, dispatch } = useContext(DataAnalyticsContext);
    // const tableRef = useRef();
    // const {
    //     table,
    //     title,
    //     onToastDataAnalytics,
    //     onChangeDataAnalytics,
    //     onAlertDataAnalytics,
    //     isFullScreen,
    //     gridRef,
    // } = dataAnalytics;
    const { selected = {}, gridRef } = dataAnalytics;
    const { fields = [], origin = [] } = selected;
    const table = [[...fields], ...origin];

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
        <div className={theme.sheet_box}>
            <div className={theme.inner}>
                <EntrySheet
                    sheetData={{
                        fields: {
                            cols: [],
                            rows: [],
                        },
                        data: getTableData(table),
                    }}
                    option={{
                        type: 'EDITOR',
                    }}
                    ref={gridRef}
                />
            </div>
        </div>
    );

    // return (
    //     <section className={`${Styles.detail_cont} ${Styles.table_state}`}>
    //         <h2 className={Styles.blind}>{CommonUtils.getLang('DataAnalytics.table')}</h2>
    //         <div className={Styles.content_box}>
    //             <div className={Styles.title_box}>
    //                 <strong>{title}</strong>
    //             </div>

    //             <div className={Styles.table_box} style={{ height: 555 }}>
    //                 <EntrySheet />
    //                 <Table
    //                     table={table}
    //                     onToastDataAnalytics={onToastDataAnalytics}
    //                     onChangeDataAnalytics={onChangeDataAnalytics}
    //                     onAlertDataAnalytics={onAlertDataAnalytics}
    //                     isFullScreen={isFullScreen}
    //                     dataAnalytics={dataAnalytics}
    //                     gridRef={gridRef}
    //                     addColumn={addColumn}
    //                     deleteColumn={deleteColumn}
    //                     addRow={addRow}
    //                     deleteRow={deleteRow}
    //                 />
    //             </div>
    //         </div>
    //     </section>
    // );
};

export default TableEditor;

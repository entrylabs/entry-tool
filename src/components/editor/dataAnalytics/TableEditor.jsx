import React, { useContext, useRef } from 'react';
import EntrySheet from 'entry-sheet';
import Table from '@components/widget/Table';
import { DataAnalyticsContext } from '@contexts/dataAnalytics';
import { CommonUtils } from '@utils/Common';
import Theme from '@utils/Theme';

const TableEditor = () => {
    const theme = Theme.getStyle('popup');
    const { dataAnalytics, dispatch } = useContext(DataAnalyticsContext);
    const tableRef = useRef();
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

    // return <>hihi</>;
    return (
        <EntrySheet
            sheetData={{
                fields: {
                    cols: [],
                    rows: [],
                },
                data: [
                    [1, 2, 3],
                    [4, 5, 6],
                    [7, 8, 9],
                ],
            }}
        />
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

import React, { useContext, useEffect } from 'react';
import EntrySheet from 'entry_sheet';
import { DataAnalyticsContext } from '@contexts/dataAnalytics';
import { getTrimedTable, getTable } from '@utils/dataAnalytics';
import _map from 'lodash/map';
import Theme from '@utils/Theme';
import { Array } from 'window-or-global';

const getTableData = (table) => {
    const rows = table.length < 10 ? new Array(10).fill('') : table;
    return _map(rows, (row) => {
        const cols = row.length < 10 ? new Array(10).fill('') : row;
        return _map(cols, (__, index) => row[index]);
    });
};

const TableEditor = () => {
    const theme = Theme.getStyle('popup');
    const { dataAnalytics, dispatch } = useContext(DataAnalyticsContext);
    const { selected = {}, gridRef } = dataAnalytics;
    const { table: selectedTable } = selected;
    const table = getTrimedTable(selectedTable);

    const handleColumnEdit = ({ editType, index }) => {
        if (editType === 'ADD') {
            dispatch({
                type: 'ADD_COLUMN',
                index,
            });
        } else if (editType === 'REMOVE') {
            dispatch({
                type: 'DELETE_COLUMN',
                index,
            });
        }
    };

    return (
        <div className={theme.sheet_box}>
            <EntrySheet
                ref={gridRef}
                sheetData={{
                    fields: {
                        cols: [],
                        rows: [],
                    },
                    data: getTableData(table),
                }}
                option={{
                    type: 'EDITOR',
                    callBack: { onColumnEdit: handleColumnEdit },
                }}
            />
        </div>
    );
};

export default TableEditor;

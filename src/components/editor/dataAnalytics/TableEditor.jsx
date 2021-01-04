import React, { useContext, useEffect } from 'react';
import EntrySheet from 'entry_sheet';
import { DataAnalyticsContext } from '@contexts/dataAnalytics';
import _map from 'lodash/map';
import Theme from '@utils/Theme';
import { downloadXLSX } from '@utils/dataAnalytics';

const TableEditor = () => {
    const theme = Theme.getStyle('popup');
    const { dataAnalytics, dispatch } = useContext(DataAnalyticsContext);
    const { selected = {}, gridRef } = dataAnalytics;
    const { table = [[]] } = selected;

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

    const saveExcel = () => {
        const { name } = selected;
        const sheet = gridRef?.current?.getSheetData().data;
        downloadXLSX(sheet, name);
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
                    data: table,
                }}
                option={{
                    type: 'EDITOR',
                    callBack: { onColumnEdit: handleColumnEdit, saveExcel },
                    config: {
                        maxCell: 30000,
                    },
                }}
            />
        </div>
    );
};

export default TableEditor;

import React, { useContext, useState } from 'react';
import EntrySheet from 'entry_sheet';
import { DataAnalyticsContext } from '@contexts/dataAnalytics';
import { Alert as AlertModal } from '@entrylabs/modal';
import _map from 'lodash/map';
import Theme from '@utils/Theme';
import { CommonUtils } from '@utils/Common';
import { downloadXLSX } from '@utils/dataAnalytics';

const TableEditor = () => {
    const theme = Theme.getStyle('popup');
    const [showAlert, setShowAlert] = useState(false);
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

    const handleCellAdd = () => {
        setShowAlert(true);
    };

    return (
        <>
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
                        callBack: {
                            saveExcel,
                            onColumnEdit: handleColumnEdit,
                            maxCellPopup: handleCellAdd,
                        },
                        config: {
                            maxCell: 30000,
                            language: {
                                copy: CommonUtils.getLang('DataAnalytics.copy'),
                                cut: CommonUtils.getLang('DataAnalytics.cut'),
                                delete: CommonUtils.getLang('DataAnalytics.delete'),
                                paste: CommonUtils.getLang('DataAnalytics.paste'),
                                addLeftRow: CommonUtils.getLang('DataAnalytics.add_property_left'),
                                addRightRow: CommonUtils.getLang(
                                    'DataAnalytics.add_property_right'
                                ),
                                deleteRow: CommonUtils.getLang('DataAnalytics.delete_attribute'),
                                addUpCol: CommonUtils.getLang('DataAnalytics.add_row_above'),
                                addDownCol: CommonUtils.getLang('DataAnalytics.add_row_below'),
                                deleteCol: CommonUtils.getLang('DataAnalytics.delete_row'),
                                maxCellPopup: CommonUtils.getLang(
                                    'DataAnalytics.not_editable_content'
                                ),
                                maxCellPopupDown: CommonUtils.getLang(
                                    'DataAnalytics.download_table'
                                ),
                            },
                        },
                    }}
                />
            </div>
            {showAlert ? (
                <AlertModal
                    content={CommonUtils.getLang('DataAnalytics.limit_cell_count_content')}
                    title={CommonUtils.getLang('DataAnalytics.limit_cell_count_title')}
                    onEvent={() => {
                        setShowAlert(false);
                    }}
                    options={{
                        positiveButtonText: CommonUtils.getLang('DataAnalytics.confirm'),
                    }}
                />
            ) : (
                ''
            )}
        </>
    );
};

export default TableEditor;

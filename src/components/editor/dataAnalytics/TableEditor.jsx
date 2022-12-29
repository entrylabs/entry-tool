import { useContext, useState, useCallback } from 'react';
import EntrySheet from 'entry_sheet';
import { DataAnalyticsContext } from '@contexts/dataAnalytics';
import { Alert as AlertModal } from '@entrylabs/modal';
import _map from 'lodash/map';
import Theme from '@utils/Theme';
import { CommonUtils } from '@utils/Common';
import { downloadXLSX } from '@utils/dataAnalytics';

const TableEditor = () => {
    const theme = Theme.getStyle('popup');
    const { dataAnalytics, dispatch } = useContext(DataAnalyticsContext);
    const { selected = {}, gridRef } = dataAnalytics;
    const { table = [[]] } = selected;

    const [alertMsg, setAlertMsg] = useState({
        title: '',
        content: '',
        isShow: false,
    });

    const handleColumnEdit = useCallback(
        ({ editType, index }) => {
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
        },
        [dispatch]
    );

    const handleRowEdit = useCallback(
        ({ editType, index }) => {
            if (editType === 'ADD') {
                dispatch({
                    type: 'ADD_ROW',
                    index,
                });
            } else if (editType === 'REMOVE') {
                dispatch({
                    type: 'DELETE_ROW',
                    index,
                });
            }
        },
        [dispatch]
    );

    const saveExcel = () => {
        const { name } = selected;
        const sheet = gridRef?.current?.getSheetData().data;
        downloadXLSX(sheet, name);
    };

    const handleCellAdd = useCallback(() => {
        setAlertMsg({
            title: CommonUtils.getLang('DataAnalytics.limit_cell_count_title'),
            content: CommonUtils.getLang('DataAnalytics.limit_cell_count_content'),
            isShow: true,
        });
    }, [setAlertMsg]);

    const handleCellRemove = useCallback(() => {
        setAlertMsg({
            title: CommonUtils.getLang('General.alert_title'),
            content: CommonUtils.getLang('DataAnalytics.must_have_one_row_content'),
            isShow: true,
        });
    }, [setAlertMsg]);

    const handleCloseAlert = useCallback(() => {
        setAlertMsg({
            title: '',
            content: '',
            isShow: false,
        });
    }, [setAlertMsg]);

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
                            onRowEdit: handleRowEdit,
                            maxCellPopup: handleCellAdd,
                            minCellPopup: handleCellRemove,
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
            {alertMsg.isShow && (
                <AlertModal
                    title={alertMsg.title}
                    content={alertMsg.content}
                    onEvent={handleCloseAlert}
                    options={{
                        positiveButtonText: CommonUtils.getLang('DataAnalytics.confirm'),
                    }}
                />
            )}
        </>
    );
};

export default TableEditor;

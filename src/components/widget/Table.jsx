import React, { useState, useCallback, useEffect } from 'react';
import _ from 'lodash';
import TuiGrid from 'tui-grid';
import Grid from '@toast-ui/react-grid';
import { Prompt } from '@entrylabs/modal';

import Theme from '@utils/Theme';
import { CommonUtils } from '@utils/Common';
import { getHeader, getData } from '@utils/dataAnalytics';
import ContextMenu from '../widget/contextMenu';
import OutsideClick from '../common/outsideClick';

import 'tui-grid/dist/tui-grid.css';

const LEFT_CLICK = 1;
const RIGHT_CLICK = 3;
const TABLE_MAX_ROW = 5000;

TuiGrid.applyTheme('entry', {
    cell: {
        normal: {
            border: '#f2f2f2',
            showVerticalBorder: true,
        },
        header: {
            showVerticalBorder: false,
        },
        focused: {
            border: '#4f80ff',
        },
        selectedHeader: {
            background: '#f4f4f4',
        },
        rowHeader: {
            background: '#f4f4f4',
        },
        selectedRowHeader: {
            background: '#f4f4f4',
        },
    },
});

const handleContextMenu = (event) => {
    event.preventDefault();
};

let lastColumnName;
const isColumnDblClick = ({ nativeEvent, columnName, targetType }) => {
    const { which } = nativeEvent;
    if (which !== LEFT_CLICK || targetType !== 'columnHeader') {
        lastColumnName = undefined;
    } else if (!lastColumnName) {
        lastColumnName = columnName;
        setTimeout(() => {
            lastColumnName = undefined;
        }, 300);
    } else {
        return true;
    }
    return false;
};

const Table = (props) => {
    const [table, setTable] = useState();
    const [{ x, y, isVisible, contextMenu }, setContextMenuOption] = useState({
        x: 0,
        y: 0,
        isVisible: false,
        contextMenu: false,
    });
    const [{ showPrompt, promptText, promptFunction }, setShowPrompt] = useState({
        showPrompt: false,
        promptText: '',
    });
    const {
        table: tableProps = [],
        width,
        bodyHeight = 510,
        columnOptions = {
            minWidth: 150,
        },
        editable = 'text',
        rowHeight = 40,
        rowHeaders = [{ type: 'rowNum', width: 98 }],
        needRowHeader = true,
        onToastDataAnalytics = () => {},
        onChangeDataAnalytics = () => {},
        onAlertDataAnalytics = () => {},
        dataAnalytics,
        isFullScreen,
        gridRef,
        addColumn,
        deleteColumn,
        addRow,
        deleteRow,
    } = props;

    useEffect(() => {
        setTable(tableProps);
    }, [tableProps]);

    useEffect(() => {
        const { current = {} } = gridRef;
        if (current.getInstance) {
            current.getInstance().refreshLayout();
        }
    }, [isFullScreen]);

    const handleNameChange = (index) => (name) => {
        if (
            _.some(
                tableProps[0],
                (columnName, colIndex) => columnName === name && index !== colIndex
            )
        ) {
            onToastDataAnalytics({
                title: CommonUtils.getLang('DataAnalytics.duplicate_attribute_name_title'),
                content: CommonUtils.getLang('DataAnalytics.duplicate_attribute_name_content'),
            });
            return;
        }
        if (name) {
            setTable((table) => {
                table[0][index] = name;
                onChangeDataAnalytics({ ...dataAnalytics, table });
                return table;
            });
        }
        setShowPrompt({
            showPrompt: false,
        });
    };

    const handleClick = useCallback(
        (event) => {
            const {
                instance,
                columnName,
                nativeEvent,
                targetType = 'columnHeader',
                rowKey,
            } = event;

            if (!nativeEvent) {
                return;
            }
            const { which } = nativeEvent;
            if (!columnName) {
                instance.finishEditing();
            } else if (which === LEFT_CLICK && isColumnDblClick(event)) {
                const colIndex = instance.getIndexOfColumn(columnName);
                if (colIndex < 0) {
                    return;
                }
                setTable((table = [[]]) => {
                    const [fields] = table;
                    setShowPrompt({
                        showPrompt: true,
                        promptText: fields[colIndex],
                        promptFunction: handleNameChange(colIndex),
                    });
                    onChangeDataAnalytics({ ...dataAnalytics, table });
                    return table;
                });
            }
            if (targetType === 'cell' && columnName && rowKey > -1) {
                instance.startEditing(rowKey, columnName);
            }
        },
        [setTable, setShowPrompt]
    );

    const makeContextMenu = (event) => {
        const { targetType, columnName, rowKey, instance } = event;
        if (targetType === 'rowHeader') {
            const rowIndex = instance.getIndexOfRow(rowKey) + 1;
            return [
                {
                    text: CommonUtils.getLang('DataAnalytics.add_row_above'),
                    callback: () => {
                        addRow
                            ? addRow(rowIndex)
                            : setTable((table) => {
                                  table.splice(rowIndex, 0, Array(table[0].length).fill(0));

                                  onChangeDataAnalytics({ ...dataAnalytics, table });
                                  return [...table];
                              });
                    },
                },
                {
                    text: CommonUtils.getLang('DataAnalytics.add_row_below'),
                    callback: () => {
                        if (tableProps.length + 1 > TABLE_MAX_ROW) {
                            onAlertDataAnalytics({
                                message: CommonUtils.getLang('DataAnalytics.max_row_count_error'),
                            });
                        }
                        addRow
                            ? addRow(rowIndex + 1)
                            : setTable((table) => {
                                  table.splice(rowIndex + 1, 0, Array(table[0].length).fill(0));

                                  onChangeDataAnalytics({ ...dataAnalytics, table });
                                  return [...table];
                              });
                    },
                },
                {
                    text: CommonUtils.getLang('DataAnalytics.delete_row'),
                    callback: () => {
                        deleteRow
                            ? deleteRow(rowIndex)
                            : setTable((table) => {
                                  if (table.length <= 2) {
                                      onToastDataAnalytics({
                                          title: CommonUtils.getLang(
                                              'DataAnalytics.do_not_delete_row'
                                          ),
                                          content: CommonUtils.getLang(
                                              'DataAnalytics.rows_cannot_less_one'
                                          ),
                                      });
                                  } else {
                                      table.splice(rowIndex, 1);

                                      onChangeDataAnalytics({ ...dataAnalytics, table });
                                  }
                                  return table;
                              });
                    },
                },
            ];
        } else if (targetType === 'columnHeader' && columnName !== '_number') {
            const colIndex = instance.getIndexOfColumn(columnName);
            return [
                {
                    text: CommonUtils.getLang('DataAnalytics.add_property_left'),
                    callback: () => {
                        setShowPrompt({
                            showPrompt: true,
                            promptFunction: handleAddColumn(colIndex),
                        });
                    },
                },
                {
                    text: CommonUtils.getLang('DataAnalytics.add_property_right'),
                    callback: () => {
                        setShowPrompt({
                            showPrompt: true,
                            promptFunction: handleAddColumn(colIndex + 1),
                        });
                    },
                },
                {
                    text: CommonUtils.getLang('DataAnalytics.edit_attribute_name'),
                    callback: () => {
                        const colIndex = instance.getIndexOfColumn(columnName);
                        const [fields] = tableProps;
                        setShowPrompt({
                            showPrompt: true,
                            promptText: fields[colIndex],
                            promptFunction: handleNameChange(colIndex),
                        });
                    },
                },
                {
                    text: CommonUtils.getLang('DataAnalytics.delete_attribute'),
                    callback: () => {
                        deleteColumn
                            ? deleteColumn(colIndex)
                            : setTable((table) =>
                                  table.map((row) => {
                                      row.splice(colIndex, 1);
                                      return row;
                                  })
                              );
                    },
                },
            ];
        }
    };

    const handleMousedown = useCallback(
        (event) => {
            const { nativeEvent } = event;
            const { which, clientX, clientY } = nativeEvent;
            if (which !== RIGHT_CLICK) {
                return;
            }
            const contextMenu = makeContextMenu(event);
            if (contextMenu) {
                setContextMenuOption(() => ({
                    x: clientX,
                    y: clientY,
                    contextMenu,
                    isVisible: true,
                }));
            }
        },
        [setTable]
    );

    const handleOutsideClick = () => {
        setContextMenuOption({ isVisible: false });
    };

    const handleAddColumn = (colIndex) => (columnName) => {
        setShowPrompt({
            showPrompt: false,
        });
        if (colIndex === -1) {
            return;
        }

        addColumn
            ? addColumn(colIndex, columnName)
            : setTable((table) =>
                  table.map((row, index) => {
                      row.splice(
                          colIndex,
                          0,
                          index
                              ? 0
                              : CommonUtils.getOrderedName(
                                    columnName ||
                                        CommonUtils.getLang('DataAnalytics.new_attribute'),
                                    table[0]
                                )
                      );
                      return row;
                  })
              );
    };

    const handleEditingFinish = useCallback(
        (event) => {
            const { instance, columnName, rowKey, value } = event;
            const colIndex = instance.getIndexOfColumn(columnName);
            const rowIndex = instance.getIndexOfRow(rowKey);
            setTable((table) => {
                const isChange = table[rowIndex + 1][colIndex] != value;
                table[rowIndex + 1][colIndex] = value;

                isChange && onChangeDataAnalytics({ ...dataAnalytics, table });
                return [...table];
            });
        },
        [setTable]
    );

    const data = getData(table);
    const columns = getHeader(table, editable);
    const theme = Theme.getStyle('table');

    return (
        <div className={`${theme.Table} ${theme.tui_grid}`} onContextMenu={handleContextMenu}>
            <OutsideClick
                onOutsideClick={() => {
                    const { current = {} } = gridRef;
                    if (current.getInstance) {
                        current.getInstance().finishEditing();
                    }
                }}
            >
                <Grid
                    ref={gridRef}
                    data={data}
                    columns={columns}
                    width={width}
                    rowHeight={rowHeight}
                    bodyHeight={bodyHeight}
                    columnOptions={columnOptions}
                    virtualScrolling={true}
                    usageStatistics={false}
                    rowHeaders={needRowHeader ? rowHeaders : {}}
                    onMousedown={handleMousedown}
                    onClick={handleClick}
                    tabMode="move"
                    onEditingFinish={handleEditingFinish}
                />
            </OutsideClick>
            {isVisible && (
                <ContextMenu
                    onOutsideClick={handleOutsideClick}
                    items={contextMenu}
                    coordinate={{
                        x,
                        y,
                    }}
                />
            )}
            {showPrompt && (
                <Prompt
                    content={CommonUtils.getLang('DataAnalytics.enter_attribute_name')}
                    defaultValue={promptText}
                    title={CommonUtils.getLang('DataAnalytics.attribute')}
                    onEvent={(event) => {
                        if (event != null && promptFunction) {
                            promptFunction(event);
                        } else {
                            setShowPrompt({
                                showPrompt: false,
                            });
                        }
                    }}
                    options={{
                        placeholder: CommonUtils.getLang(
                            'DataAnalytics.placeholder_attribute_name'
                        ),
                        negativeButtonText: CommonUtils.getLang('DataAnalytics.cancel'),
                        positiveButtonText: CommonUtils.getLang('DataAnalytics.confirm'),
                    }}
                />
            )}
        </div>
    );
};

export default Table;

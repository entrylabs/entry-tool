import React, { useState, useRef, useCallback, useEffect } from 'react';
import TuiGrid from 'tui-grid';
import Grid from '@toast-ui/react-grid';
import { Prompt } from '@entrylabs/modal';

import Theme from '@utils/Theme';
import { getHeader, getData } from '@utils/Common';
import ContextMenu from '../widget/contextMenu';
import OutsideClick from '../common/outsideClick';

import 'tui-grid/dist/tui-grid.css';
import '@entrylabs/modal/dist/entry/entry-modal.css';

import Styles from '@assets/entry/scss/popup.scss';

const LEFT_CLICK = 1;
const RIGHT_CLICK = 3;

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
    const gridRef = useRef();
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
    } = props;

    useEffect(() => {
        setTable(tableProps);
    }, [tableProps]);

    const handleNameChange = (index) => (name) => {
        if (name) {
            setTable((table) => {
                table[0][index] = name;
                return table;
            });
        }
        setShowPrompt({
            showPrompt: false,
        });
    };

    const handleClick = useCallback(
        (event) => {
            if (!table) {
                return;
            }

            const { instance, columnName, nativeEvent } = event;
            const { which } = nativeEvent;
            if (!columnName) {
                instance.finishEditing();
            } else if (which === LEFT_CLICK && isColumnDblClick(event)) {
                const colIndex = instance.getIndexOfColumn(columnName);
                const [fields] = table;
                setShowPrompt({
                    showPrompt: true,
                    promptText: fields[colIndex],
                    promptFunction: handleNameChange(colIndex),
                });
            }
        },
        [table, setTable, setShowPrompt]
    );

    const makeContextMenu = (event) => {
        const { targetType, columnName, rowKey, instance } = event;
        if (targetType === 'rowHeader') {
            const rowIndex = instance.getIndexOfRow(rowKey) + 1;
            return [
                {
                    text: '위에 행 추가하기',
                    callback: () => {
                        setTable((table) => {
                            table.splice(rowIndex, 0, Array(table[0].length).fill(0));
                            return table;
                        });
                    },
                },
                {
                    text: '아래에 행 추가하기',
                    callback: () => {
                        setTable((table) => {
                            table.splice(rowIndex + 1, 0, Array(table[0].length).fill(0));
                            return table;
                        });
                    },
                },
                {
                    text: '행 삭제하기',
                    callback: () => {
                        setTable((table) => {
                            table.splice(rowIndex, 1);
                            return table;
                        });
                    },
                },
            ];
        } else if (targetType === 'columnHeader' && columnName !== '_number') {
            const colIndex = instance.getIndexOfColumn(columnName);
            return [
                {
                    text: '왼쪽에 열 추가하기',
                    callback: () => {
                        setShowPrompt({
                            showPrompt: true,
                            promptFunction: handleAddColumn(colIndex),
                        });
                    },
                },
                {
                    text: '오른쪽에 열 추가하기',
                    callback: () => {
                        setShowPrompt({
                            showPrompt: true,
                            promptFunction: handleAddColumn(colIndex + 1),
                        });
                    },
                },
                {
                    text: '열 삭제하기',
                    callback: () => {
                        setTable((table) =>
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
            const { which, x, y } = nativeEvent;
            if (which !== RIGHT_CLICK) {
                return;
            }
            const contextMenu = makeContextMenu(event);
            if (contextMenu) {
                setContextMenuOption(() => ({ x, y, contextMenu, isVisible: true }));
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
        if (colIndex === -1 || !columnName) {
            return;
        }
        setTable((table) =>
            table.map((row, index) => {
                row.splice(colIndex, 0, index ? 0 : columnName);
                return row;
            })
        );
    };

    const handleEditingFinish = useCallback(
        (event) => {
            const { instance, columnName, rowKey } = event;
            const colIndex = instance.getIndexOfColumn(columnName);
            const rowIndex = instance.getIndexOfRow(rowKey);
            tableProps[rowIndex][colIndex] = event.value;
        },
        [tableProps]
    );

    const data = getData(table);
    const columns = getHeader(table, editable);
    const theme = Theme.getStyle('table');

    return (
        <div className={`${theme.Table} ${Styles.tui_grid}`} onContextMenu={handleContextMenu}>
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
                    content="content"
                    defaultValue={promptText}
                    title="title"
                    onEvent={(event) => {
                        if (promptFunction) {
                            promptFunction(event);
                        } else {
                            setShowPrompt({
                                showPrompt: false,
                            });
                        }
                    }}
                    options={{
                        placeholder: '',
                        negativeButtonText: 'cancel',
                        positiveButtonText: 'ok',
                    }}
                />
            )}
        </div>
    );
};

export default Table;

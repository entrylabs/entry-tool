import React, { useState, useRef, useCallback, useEffect } from 'react';
import TuiGrid from 'tui-grid';
import Grid from '@toast-ui/react-grid';
import { Prompt } from '@entrylabs/modal';

import Theme from '@utils/Theme';
import { getHeader, getData } from '@utils/Common';
import ContextMenu from '../widget/contextMenu';

import 'tui-grid/dist/tui-grid.css';
import '@entrylabs/modal/dist/entry/entry-modal.css';

const LEFT_CLICK = 1;
const RIGHT_CLICK = 3;
let removeColumnIndex = -1;

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
    const { table: tableProps = [] } = props;
    const [table, setTable] = useState(tableProps);
    const gridRef = useRef();

    useEffect(() => {
        setTable(tableProps);
    }, [tableProps]);

    const {
        width,
        bodyHeight = 510,
        columnOptions = {
            minWidth: 130,
        },
        editable = 'text',
        rowHeight = 40,
        rowHeaders = [{ type: 'rowNum', width: 98 }],
        needRowHeader = true,
    } = props;

    const handleNameChange = (name, index) => {
        setTable((table) => {
            table[0][index] = name;
            return table;
        });
    };

    const handleClick = useCallback(
        (event) => {
            const { nativeEvent } = event;
            const { which, target } = nativeEvent;
            const { cellIndex } = target;
            const [fields] = table;
            if (which === LEFT_CLICK && isColumnDblClick(event)) {
                setShowPrompt({
                    showPrompt: true,
                    promptText: fields[cellIndex],
                    promptFunction: (name) => {
                        if (name) {
                            handleNameChange(name, cellIndex);
                        }
                        setShowPrompt({
                            showPrompt: false,
                        });
                    },
                });
            }
        },
        [table]
    );

    const handleMousedown = useCallback(
        (event) => {
            const { nativeEvent } = event;
            const { which, x, y } = nativeEvent;
            if (which !== RIGHT_CLICK) {
                return;
            }

            const { targetType, columnName, rowKey } = event;
            let contextMenu = [];
            if (targetType === 'columnHeader' && columnName !== '_number') {
                contextMenu = makeContextMenu(table, setTable, 'column', columnName);
            } else if (targetType === 'rowHeader') {
                contextMenu = makeContextMenu(table, setTable, 'row', rowKey);
            } else {
                return;
            }
            setContextMenuOption(() => ({ x, y, contextMenu, isVisible: true }));
        },
        [table]
    );

    const handleOutsideClick = () => {
        setContextMenuOption((prev) => ({ ...prev, isVisible: false }));
    };

    const handleAddColumn = (columnName) => {
        if (removeColumnIndex === -1) {
            return;
        }
        setShowPrompt({
            showPrompt: false,
        });
        // todo: columnName 중복 제거 로직 추가
        setTable(
            table.map((row, index) => {
                row.splice(removeColumnIndex, 0, index ? 0 : columnName);
                return row;
            })
        );
        removeColumnIndex = -1;
    };

    const handleEditingFinish = useCallback((event) => {
        tableProps[event.rowKey + 1][table[0].findIndex((header) => event.columnName === header)] =
            event.value;
    });

    const makeContextMenu = (targetTable, setTable, type, key) => {
        const table = [...targetTable];
        if (type === 'row') {
            return [
                {
                    text: '위에 행 추가하기',
                    callback: () => {
                        table.splice(key + 1, 0, Array(table[0].length).fill(0));
                        setTable(table);
                    },
                },
                {
                    text: '아래에 행 추가하기',
                    callback: () => {
                        setTable(table.splice(key + 2, 0, Array(table[0].length).fill(0)));
                        setTable(table);
                    },
                },
                {
                    text: '행 삭제하기',
                    callback: () => {
                        setTable(table.splice(key + 1, 1));
                        setTable(table);
                    },
                },
            ];
        } else if (type === 'column') {
            return [
                {
                    text: '왼쪽에 속성 추가하기',
                    callback: () => {
                        removeColumnIndex = table[0].findIndex((header) => key === header);
                        setShowPrompt({
                            showPrompt: true,
                            promptFunction: handleAddColumn,
                        });
                    },
                },
                {
                    text: '오른쪽에 속성 추가하기',
                    callback: () => {
                        removeColumnIndex = table[0].findIndex((header) => key === header) + 1;
                        setShowPrompt({
                            showPrompt: true,
                            promptFunction: handleAddColumn,
                        });
                    },
                },
                {
                    text: '속성 삭제하기',
                    callback: () => {
                        const index = table[0].findIndex((header) => key === header);
                        setTable(
                            table.map((row) => {
                                row.splice(index, 1);
                                return row;
                            })
                        );
                    },
                },
            ];
        }
        return [{ text: ' ' }, handleAddColumn];
    };

    const data = getData(table);
    const columns = getHeader(table, editable);
    const theme = Theme.getStyle('table');

    return (
        <div className={`${theme.Table} ${theme.tui_grid}`} onContextMenu={handleContextMenu}>
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

import React, { useState, useRef, useCallback } from 'react';
import TuiGrid from 'tui-grid';
import 'tui-grid/dist/tui-grid.css';
import Grid from '@toast-ui/react-grid';
import { getHeader, getData } from '@utils/Common';
import ContextMenu from '../widget/contextMenu';
import Theme from '@utils/Theme';

const RIGHT_CLICK = 3;

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
                    const index = table[0].findIndex((header) => key === header);
                    setTable(
                        table.map((row) => {
                            row.splice(index, 0, 0);
                            return row;
                        })
                    );
                },
            },
            {
                text: '오른쪽에 속성 추가하기',
                callback: () => {
                    const index = table[0].findIndex((header) => key === header) + 1;
                    setTable(
                        table.map((row) => {
                            row.splice(index, 0, 0);
                            return row;
                        })
                    );
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
    return [{ text: ' ' }];
};

TuiGrid.applyTheme('entry', {
    cell: {
        header: {
            background: '#f4f4f4',
        },
    },
});
let t;
const Table = (props) => {
    const [{ x, y, isVisible, contextMenu }, setContextMenuOption] = useState({
        x: 0,
        y: 0,
        isVisible: false,
        contextMenu: [],
    });
    const { table: tableProps = [] } = props;
    const [table, setTable] = useState(tableProps);
    const gridRef = useRef();

    const {
        width = 500,
        bodyHeight = 290,
        columnOptions = {},
        editable = 'text',
        rowHeight = 40,
        rowHeaders = [{ type: 'rowNum' }],
        needRowHeader = true,
    } = props;

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
            setContextMenuOption((prev) => ({ x, y, contextMenu, isVisible: true }));
        },
        [table]
    );

    const handleOutsideClick = () => {
        setContextMenuOption((prev) => ({ ...prev, isVisible: false }));
    };

    const handleContextMenu = (event) => {
        event.preventDefault();
    };

    const data = getData(table);
    const columns = getHeader(table, editable);
    const theme = Theme.getStyle('table');

    return (
        <div className={theme.Table} onContextMenu={handleContextMenu}>
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
        </div>
    );
};

export default Table;

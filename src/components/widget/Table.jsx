import React, { useState, useRef, useEffect, useCallback } from 'react';
import TuiGrid from 'tui-grid';
import 'tui-grid/dist/tui-grid.css';
import Grid from '@toast-ui/react-grid';
import { getHeader, getData } from '@utils/Common';
import ContextMenu from '../widget/contextMenu';
import Theme from '@utils/Theme';

const RIGHT_CLICK = 3;
const BLANK = ' ';
const rowContextMenu = [
    {
        text: '위에 행 추가하기',
        callback: () => {
            console.log('위에 행 추가하기');
        },
    },
    {
        text: '아래에 행 추가하기',
        callback: () => {
            console.log('아래에 행 추가하기');
        },
    },
    {
        text: '행 삭제하기',
        callback: () => {
            console.log('행삭제하기');
        },
    },
];
const columnContextMenu = [
    {
        text: '왼쪽에 속성 추가하기',
        callback: () => {
            console.log('위에 행 추가하기');
        },
    },
    {
        text: '오른쪽에 속성 추가하기',
        callback: () => {
            console.log('아래에 행 추가하기');
        },
    },
    {
        text: '속성 삭제하기',
        callback: () => {
            console.log('행삭제하기');
        },
    },
];

const makeContextMenu = (grid, type) => {
    if (type === 'row') {
        return [
            {
                text: '위에 행 추가하기',
                callback: () => {
                    console.log('위에 행 추가하기');
                },
            },
            {
                text: '아래에 행 추가하기',
                callback: () => {
                    console.log('아래에 행 추가하기');
                },
            },
            {
                text: '행 삭제하기',
                callback: () => {
                    console.log('행삭제하기');
                },
            },
        ];
    } else if (type === 'column') {
        return [
            {
                text: '왼쪽에 속성 추가하기',
                callback: () => {
                    console.log('위에 행 추가하기');
                },
            },
            {
                text: '오른쪽에 속성 추가하기',
                callback: () => {
                    console.log('아래에 행 추가하기');
                },
            },
            {
                text: '속성 삭제하기',
                callback: () => {
                    console.log('행삭제하기');
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

const Table = (props) => {
    const [{ x, y, isVisible, contextMenu }, setContextMenuOption] = useState({
        x: 0,
        y: 0,
        isVisible: false,
        contextMenu: [],
    });
    const gridRef = useRef();
    let grid = { off: () => {} };

    const { table = [] } = props;
    const {
        width = 500,
        bodyHeight = 290,
        columnOptions = {},
        editable = 'text',
        rowHeight = 40,
        rowHeaders = [{ type: 'rowNum' }],
        needRowHeader = true,
    } = props;

    useEffect(() => {
        grid = gridRef.current.getInstance();
    }, []);

    const handleMousedown = useCallback((event) => {
        const { nativeEvent } = event;
        const { which, x, y } = nativeEvent;
        if (which !== RIGHT_CLICK) {
            return;
        }

        let contextMenu = [];
        if (event.targetType === 'columnHeader' && needRowHeader && event.columnName !== BLANK) {
            contextMenu = columnContextMenu;
        } else if (event.targetType === 'cell' && event.columnName === BLANK) {
            contextMenu = rowContextMenu;
        } else {
            return;
        }

        setContextMenuOption((prev) => ({ x, y, contextMenu, isVisible: true }));
    }, []);

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

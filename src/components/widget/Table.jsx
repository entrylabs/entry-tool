import React, { useState, useRef, useEffect, useCallback } from 'react';
import 'tui-grid/dist/tui-grid.css';
import Grid from '@toast-ui/react-grid';
import { getHeader, getData } from '@utils/Common';
import ContextMenu from '../widget/contextMenu';

const RIGHT_CLICK = 3;
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

const Table = (props) => {
    const [{ x, y, isVisible, contextMenu }, setContextMenuOption] = useState({
        x: 0,
        y: 0,
        isVisible: false,
        contextMenu: [],
    });
    const gridRef = useRef();
    let grid = { off: () => {} };
    const {
        table = [],
        width = 500,
        bodyHeight = 200,
        columnOptions = {},
        rowHeight = 25,
        editor = 'text',
        rowHeaders = [{ type: 'rowNum' }],
    } = props;
    const data = getData(table);
    const columns = getHeader(table, editor);

    useEffect(() => {
        grid = gridRef.current.getInstance();
    }, []);

    const handleMousedown = useCallback((event) => {
        let contextMenu = [];
        const { nativeEvent } = event;
        const { which, x, y } = nativeEvent;
        if (which !== RIGHT_CLICK) {
            return;
        }

        switch (event.targetType) {
            case 'columnHeader':
                contextMenu = columnContextMenu;
                break;
            case 'rowHeader':
                contextMenu = rowContextMenu;
                break;
            default:
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
    return (
        <div onContextMenu={handleContextMenu} style={{ height: '100vh' }}>
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
                rowHeaders={rowHeaders}
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

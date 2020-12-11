import React, { useState, useContext, useCallback, useMemo } from 'react';
import XLSX from 'xlsx';
import { DataAnalyticsContext } from '@contexts/dataAnalytics';
import ContextMenu from '@components/widget/contextMenu';
import { getTable } from '@utils/dataAnalytics';
import Theme from '@utils/Theme';

const SideTab = () => {
    const theme = Theme.getStyle('popup');
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [visible, setVisible] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [clickedIndex, setClickedIndex] = useState(0);
    const { dataAnalytics, dispatch } = useContext(DataAnalyticsContext);
    const {
        tab,
        gridRef,
        selected,
        selectedIndex,
        list,
        fold,
        onAddTableButtonClick,
        onSubmitDataAnalytics,
    } = dataAnalytics;

    const contextMenu = useMemo(
        () => [
            { text: '복제', callback: () => dispatch({ type: 'COPY_TALBE', index: clickedIndex }) },
            {
                text: '삭제',
                callback: () => dispatch({ type: 'REMOVE_TABLE', index: clickedIndex }),
            },
            {
                text: 'PC에 저장',
                callback: () => {
                    const dataTable = list[clickedIndex];
                    const { name } = dataTable;
                    const table = getTable(dataTable);
                    const worksheet = XLSX.utils.aoa_to_sheet(table);
                    const workbook = XLSX.utils.book_new();
                    XLSX.utils.book_append_sheet(workbook, worksheet);

                    XLSX.writeFile(workbook, `${name}.xlsx`);
                },
            },
        ],
        [clickedIndex]
    );

    const handleClick = useCallback(
        (index) => (event) => {
            event.preventDefault();
            dispatch({ type: 'SELECT_TABLE', index });
        },
        []
    );

    const handleContext = useCallback(
        (index) => (event) => {
            event.preventDefault();
            const { nativeEvent } = event;
            const { clientX, clientY } = nativeEvent;
            setX(clientX);
            setY(clientY);
            setClickedIndex(index);
            setVisible(true);
        },
        []
    );

    const handleRemoveClick = useCallback(
        (index) => (event) => {
            event.preventDefault();
            dispatch({
                type: 'REMOVE_TABLE',
                index,
            });
        },
        []
    );

    const handleFoldButtonClick = useCallback((event) => {
        event.preventDefault();
        dispatch({ type: 'FOLD' });
    }, []);

    const handleAddTableClick = useCallback((event) => {
        event.preventDefault();
        onAddTableButtonClick();
    }, []);

    const handleOutsideClick = useCallback((event) => {
        setVisible(false);
    }, []);

    return (
        <section className={`${theme.aside} ${fold ? theme.fold : ''}`}>
            <h2 className={theme.blind}>테이블 추가하기</h2>
            <div className={theme.add_btn_box}>
                <a onClick={handleAddTableClick} role="button">
                    테이블 추가하기
                </a>
            </div>
            <ul className={theme.list}>
                {list.map(({ name }, index) => (
                    <li
                        key={`side_tab_${index}`}
                        className={index === selectedIndex ? theme.active : ''}
                        onClick={handleClick(index)}
                        onContextMenu={handleContext(index)}
                    >
                        <span className={theme.text}>{name}</span>
                        <a onClick={handleRemoveClick} className={theme.btn_close}>
                            <span className={theme.blind}>삭제</span>
                        </a>
                    </li>
                ))}
            </ul>
            {visible && (
                <ContextMenu
                    onOutsideClick={handleOutsideClick}
                    items={contextMenu}
                    coordinate={{ x, y }}
                />
            )}
            {showConfirm && (
                <Confirm
                    content="변경된 테이블과 차트를 저장할까요?"
                    title="확인"
                    onEvent={(data) => {
                        console.log({ data });
                        if (data) {
                            const selectedDataAnalytics = selected;
                            if (tab === TABLE) {
                                selectedDataAnalytics.table = gridRef?.current?.getSheetData().data;
                            }
                            console.log({ selectedDataAnalytics });
                            onSubmitDataAnalytics({
                                selected: selectedDataAnalytics,
                                index: selectedIndex,
                            });
                        }
                        setShowConfirm(false);
                    }}
                    options={{
                        negativeButtonText: '취소',
                        positiveButtonText: '확인',
                    }}
                />
            )}
            <a role="button" className={theme.split_bar} onClick={handleFoldButtonClick}>
                <span className={theme.blind}>창 조절하기</span>
            </a>
        </section>
    );
};

export default SideTab;

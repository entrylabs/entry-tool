import React, { useState, useContext, useCallback, useMemo } from 'react';
import _every from 'lodash/every';
import _difference from 'lodash/difference';
import XLSX from 'xlsx';
import ContextMenu from '@components/widget/contextMenu';
import SaveConfirm from './SaveConfirm';
import { DataAnalyticsContext } from '@contexts/dataAnalytics';
import { isChangeTable } from '@utils/dataAnalytics';
import { TABLE } from '@constants/dataAnalytics';
import Theme from '@utils/Theme';

const SideTab = () => {
    const theme = Theme.getStyle('popup');
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [visible, setVisible] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [clickedIndex, setClickedIndex] = useState(0);
    const [confirmType, setConfirmType] = useState('');
    const { dataAnalytics, dispatch } = useContext(DataAnalyticsContext);
    const {
        tab,
        fold,
        list,
        gridRef,
        selected,
        isChanged,
        selectedIndex,
        onAddTableButtonClick,
    } = dataAnalytics;
    const { table = [[]] } = selected;

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
                    const { name, table } = dataTable;
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

            if (!isChanged) {
                if (tab === TABLE) {
                    const grid = gridRef?.current?.getSheetData().data;
                    if (isChangeTable(table, grid)) {
                        return dispatch({ type: 'SELECT_TABLE', index });
                    }
                }
                return dispatch({ type: 'SELECT_TABLE', index });
            }
            setClickedIndex(index);
            setConfirmType('SELECT_TABLE');
            setShowConfirm(true);
        },
        [tab, gridRef, isChanged, table]
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

    const handleRemoveClick = (index) => (event) => {
        event.preventDefault();
        console.log({ index });
        dispatch({
            type: 'REMOVE_TABLE',
            index,
        });
    };

    const handleFoldButtonClick = useCallback((event) => {
        event.preventDefault();
        dispatch({ type: 'FOLD' });
    }, []);

    const handleAddTableClick = useCallback(
        (event) => {
            event.preventDefault();

            if (!isChanged) {
                if (tab === TABLE) {
                    const grid = gridRef?.current?.getSheetData().data;
                    if (isChangeTable(table, grid)) {
                        return onAddTableButtonClick();
                    }
                }
                return onAddTableButtonClick();
            }
            setConfirmType('SAVE');
            setShowConfirm(true);
        },
        [tab, gridRef, isChanged]
    );

    const handleOutsideClick = useCallback((event) => {
        setVisible(false);
    }, []);

    const handleConfirmClick = useCallback(() => {
        setShowConfirm(false);
        if (confirmType !== 'SAVE') {
            dispatch({ type: 'SELECT_TABLE', index: clickedIndex });
        }
    }, [clickedIndex]);

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
            {showConfirm && <SaveConfirm onClick={handleConfirmClick} />}
            <a role="button" className={theme.split_bar} onClick={handleFoldButtonClick}>
                <span className={theme.blind}>창 조절하기</span>
            </a>
        </section>
    );
};

export default SideTab;

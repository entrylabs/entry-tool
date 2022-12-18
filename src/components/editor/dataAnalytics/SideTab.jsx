import { useState, useContext, useCallback, useMemo } from 'react';
import _every from 'lodash/every';
import _difference from 'lodash/difference';
import ContextMenu from '@components/widget/contextMenu';
import SaveConfirm from './SaveConfirm';
import { Confirm as ConfirmModal } from '@entrylabs/modal';
import { DataAnalyticsContext } from '@contexts/dataAnalytics';
import { downloadXLSX, isChangeTable } from '@utils/dataAnalytics';
import { CommonUtils } from '@utils/Common';
import { TABLE } from '@constants/dataAnalytics';
import Theme from '@utils/Theme';

const SideTab = () => {
    const theme = Theme.getStyle('popup');
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [visible, setVisible] = useState(false);
    const [confirmType, setConfirmType] = useState('');
    const [clickedIndex, setClickedIndex] = useState(0);
    const [showSaveConfirm, setShowSaveConfirm] = useState(false);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
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
    const { table = [[]] } = selected || {};

    const contextMenu = useMemo(
        () => [
            {
                text: CommonUtils.getLang('DataAnalytics.duplicate'),
                callback: () => dispatch({ type: 'COPY_TABLE', index: clickedIndex }),
            },
            {
                text: CommonUtils.getLang('DataAnalytics.delete'),
                callback: () => setShowDeleteConfirm(true),
            },
            {
                text: CommonUtils.getLang('DataAnalytics.download'),
                callback: () => {
                    const dataTable = list[clickedIndex];
                    const { name, table } = dataTable;
                    downloadXLSX(table, name);
                },
            },
        ],
        [clickedIndex]
    );

    const handleClick = useCallback(
        (index) => (event) => {
            event.preventDefault();
            if (index === selectedIndex) {
                return;
            }

            if (!isChanged) {
                if (tab === TABLE) {
                    const grid = gridRef?.current?.getSheetData().data;
                    if (!isChangeTable(table, grid)) {
                        return dispatch({ type: 'SELECT_TABLE', index });
                    }
                } else {
                    return dispatch({ type: 'SELECT_TABLE', index });
                }
            }
            setClickedIndex(index);
            setConfirmType('SELECT_TABLE');
            setShowSaveConfirm(true);
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
        event.stopPropagation();
        setClickedIndex(index);
        setShowDeleteConfirm(true);
    };

    const handleFoldButtonClick = useCallback((event) => {
        event.preventDefault();
        dispatch({ type: 'FOLD' });
    }, []);

    const handleAddTableClick = useCallback(
        (event) => {
            event.preventDefault();

            if (!list.length) {
                return onAddTableButtonClick();
            }

            if (!isChanged) {
                if (tab === TABLE) {
                    const grid = gridRef?.current?.getSheetData().data;
                    if (!isChangeTable(table, grid)) {
                        return onAddTableButtonClick();
                    }
                } else {
                    return onAddTableButtonClick();
                }
            }
            setConfirmType('SAVE');
            setShowSaveConfirm(true);
        },
        [tab, gridRef, isChanged, list]
    );

    const handleOutsideClick = useCallback((event) => {
        setVisible(false);
    }, []);

    const handleConfirmClick = useCallback(() => {
        setShowSaveConfirm(false);
        if (confirmType !== 'SAVE') {
            dispatch({ type: 'SELECT_TABLE', index: clickedIndex });
        } else {
            onAddTableButtonClick();
        }
    }, [clickedIndex, confirmType]);

    return (
        <section className={`${theme.aside} ${fold ? theme.fold : ''}`}>
            <h2 className={theme.blind}>{CommonUtils.getLang('DataAnalytics.add_table')}</h2>
            <div className={theme.add_btn_box}>
                <a onClick={handleAddTableClick} role="button">
                    {CommonUtils.getLang('DataAnalytics.add_table')}
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
                        <a onClick={handleRemoveClick(index)} className={theme.btn_close}>
                            <span className={theme.blind}>
                                {CommonUtils.getLang('DataAnalytics.delete')}
                            </span>
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
            {showSaveConfirm && <SaveConfirm onClick={handleConfirmClick} />}
            {showDeleteConfirm && (
                <ConfirmModal
                    title={CommonUtils.getLang('DataAnalytics.confirm')}
                    content={CommonUtils.getLang('DataAnalytics.remove_confirm_content')}
                    onEvent={(data) => {
                        if (data) {
                            dispatch({
                                type: 'REMOVE_TABLE',
                                index: clickedIndex,
                            });
                        }
                        setShowDeleteConfirm(false);
                    }}
                    options={{
                        negativeButtonText: CommonUtils.getLang('DataAnalytics.cancel'),
                        positiveButtonText: CommonUtils.getLang('DataAnalytics.confirm'),
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

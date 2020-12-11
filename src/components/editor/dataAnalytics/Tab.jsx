import React, { useContext, useState, useCallback } from 'react';
import _every from 'lodash/every';
import _difference from 'lodash/difference';
import Confirm from './Confirm';
import { DataAnalyticsContext } from '@contexts/dataAnalytics';
import { CommonUtils } from '@utils/Common';
import { TAB_ITEMS, TABLE } from '@constants/dataAnalytics';
import { getTable } from '@utils/dataAnalytics';
import '@entrylabs/modal/dist/entry/entry-modal.css';
import Theme from '@utils/Theme';

const Tab = () => {
    const theme = Theme.getStyle('popup');
    const [showConfirm, setShowConfirm] = useState(false);
    const { dataAnalytics, dispatch } = useContext(DataAnalyticsContext);
    const { tab, selected, gridRef, isChanged = true } = dataAnalytics;
    const table = getTable(selected);

    const handleClick = useCallback(
        (value) => (event) => {
            event.preventDefault();
            if (!selected) {
                return;
            }

            dispatch({
                type: 'SET_TAB',
                tab: value,
                table: gridRef?.current?.getSheetData().data,
            });
        },
        []
    );

    const handleSaveClick = useCallback(() => {
        if (!isChanged && tab === TABLE) {
            const grid = gridRef?.current?.getSheetData().data;
            if (_every(table, (row, index) => _difference(row, grid[index]))) {
                return;
            }
        }
        setShowConfirm(true);
    }, [isChanged]);

    const handleConfirmClick = useCallback(() => {
        setShowConfirm(false);
    }, []);

    return (
        <div className={theme.btn_box}>
            <div className={theme.tab}>
                {TAB_ITEMS.map(({ value, name }) => (
                    <a
                        key={`tab_${value}`}
                        role="button"
                        onClick={handleClick(value)}
                        className={tab === value ? theme.active : ''}
                    >
                        {CommonUtils.getLang(name)}
                    </a>
                ))}
            </div>
            <a role="button" className={theme.btn_save} onClick={handleSaveClick}>
                저장하기
            </a>
            {showConfirm && <Confirm onClick={handleConfirmClick} />}
        </div>
    );
};

export default Tab;

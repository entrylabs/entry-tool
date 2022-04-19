import React, { useContext, useState, useCallback } from 'react';
import _every from 'lodash/every';
import _difference from 'lodash/difference';
import SaveConfirm from './SaveConfirm';
import { DataAnalyticsContext } from '@contexts/dataAnalytics';
import { CommonUtils } from '@utils/Common';
import { TAB_ITEMS, TABLE } from '@constants/dataAnalytics';
import Theme from '@utils/Theme';

const Tab = () => {
    const theme = Theme.getStyle('popup');
    const [showConfirm, setShowConfirm] = useState(false);
    const { dataAnalytics, dispatch } = useContext(DataAnalyticsContext);
    const { tab, selected, gridRef, isChanged } = dataAnalytics;

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
        setShowConfirm(true);
    }, [isChanged, selected]);

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
                {CommonUtils.getLang('DataAnalytics.save')}
            </a>
            {showConfirm && <SaveConfirm onClick={handleConfirmClick} />}
        </div>
    );
};

export default Tab;

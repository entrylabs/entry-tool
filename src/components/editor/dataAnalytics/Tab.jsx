import React, { useContext } from 'react';
import { DataAnalyticsContext } from '@contexts/dataAnalytics';
import { CommonUtils } from '@utils/Common';
import { TAB_ITEMS } from '@constants/dataAnalytics';
import Theme from '@utils/Theme';

const Tab = () => {
    const theme = Theme.getStyle('popup');
    const { dataAnalytics, dispatch } = useContext(DataAnalyticsContext);
    const { tab, selected, gridRef } = dataAnalytics;

    const handleClick = (value) => (event) => {
        event.preventDefault();
        if (!selected) {
            return;
        }

        dispatch({
            type: 'SET_TAB',
            tab: value,
            table: gridRef?.current?.getSheetData().data,
        });
    };

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
            <a role="button" className={theme.btn_save}>
                저장하기
            </a>
        </div>
    );
};

export default Tab;

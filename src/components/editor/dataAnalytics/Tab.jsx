import React, { useContext } from 'react';
import { DataAnalyticsContext } from '@contexts/dataAnalytics';
import { CommonUtils } from '@utils/Common';
import Styles from '@assets/entry/scss/popup.scss';
import { TAB_ITEMS } from '@constants/dataAnalytics';

const Tab = () => {
    const { dataAnalytics, dispatch } = useContext(DataAnalyticsContext);
    const { tab, selected } = dataAnalytics;

    const handleClick = (value) => (event) => {
        event.preventDefault();
        if (!selected) {
            return;
        }
        dispatch({
            type: 'SET_TAB',
            tab: value,
        });
    };

    return (
        <div className={Styles.btn_box}>
            <div className={Styles.tab}>
                {TAB_ITEMS.map(({ value, name }) => (
                    <a
                        key={`tab_${value}`}
                        role="button"
                        onClick={handleClick(value)}
                        className={tab === value ? Styles.active : ''}
                    >
                        {CommonUtils.getLang(name)}
                    </a>
                ))}
            </div>
            <a role="button" className={Styles.btn_save}>
                저장하기
            </a>
        </div>
    );
};

export default Tab;

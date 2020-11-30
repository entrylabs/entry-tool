import React, { useContext } from 'react';
import { DataAnalyticsContext } from '@contexts/dataAnalytics';
import { CommonUtils } from '@utils/Common';
import Styles from '@assets/entry/scss/popup.scss';
import { SUMMARY, TABLE, CHART, TAB_ITEMS } from '@constants/dataAnalytics';

const Tab = () => {
    const { dataAnalytics, dispatch } = useContext(DataAnalyticsContext);
    const { selected } = dataAnalytics;
    const { tab } = selected || {};

    const handleClick = (value) => (event) => {
        event.preventDefault();
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
                {/* <a role="button">테이블</a>
                <a role="button" className={Styles.active}>
                    차트
                </a>
                <a role="button">정보</a> */}
            </div>
            <a role="button" className={Styles.btn_save}>
                저장하기
            </a>
        </div>
    );
};

export default Tab;

const Tab2 = (props) => {
    const { selected, tabItems = [] } = props;
    const { dispatch } = useContext(DataAnalyticsContext);

    const handleClick = (value) => (event) => {
        event.preventDefault();
        dispatch({
            type: 'SET_TAB',
            tab: value,
        });
    };

    return (
        <ul className={Styles.tab_box}>
            {tabItems.map((item, index) => (
                <li
                    className={selected === item.value ? Styles.on : ''}
                    value={item.value}
                    key={`tab_${index}`}
                >
                    <a href="#" onClick={handleClick(item.value)}>
                        {CommonUtils.getLang(item.name)}
                    </a>
                </li>
            ))}
        </ul>
    );
};

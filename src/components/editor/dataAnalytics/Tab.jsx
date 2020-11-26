import React, { useContext } from 'react';
import { DataAnalyticsContext } from '@contexts/dataAnalytics';
import { CommonUtils } from '@utils/Common';
import Styles from '@assets/entry/scss/popup.scss';

const Tab = (props) => {
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

export default Tab;

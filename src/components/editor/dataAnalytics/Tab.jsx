import React from 'react';
import Styles from '@assets/entry/scss/popup.scss';

const Tab = (props) => {
    const { selected, tabItems = [], onClickTab } = props;

    return (
        <ul className={Styles.tab_box}>
            {tabItems.map((item, index) => (
                <li
                    className={selected === item.value ? Styles.on : ''}
                    value={item.value}
                    key={`tab_${index}`}
                >
                    <a href="#" onClick={onClickTab(item.value)}>
                        {item.name}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default Tab;

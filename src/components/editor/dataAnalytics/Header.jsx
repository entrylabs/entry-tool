import React from 'react';
import Styles from '@assets/entry/scss/popup.scss';
import Tab from './Tab';

const Header = (props) => {
    const { selected, tabItems, onClickTab } = props;

    return (
        <div className={Styles.detail_top}>
            <a href="#" role="button" className={Styles.switch_btn}>
                <span className={Styles.blind}>창 전환</span>
            </a>
            <Tab selected={selected} tabItems={tabItems} onClickTab={onClickTab} />
            <a href="#" className={Styles.btn_save} role="button">
                저장하기
            </a>
        </div>
    );
};

export default Header;

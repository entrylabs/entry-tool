import React from 'react';
import Styles from '@assets/entry/scss/popup.scss';
import Tab from './Tab';

const Header = (props) => {
    const { selected, tabItems, onFullScreenClick = () => {} } = props;

    return (
        <div className={Styles.detail_top}>
            <a href="#" role="button" className={Styles.switch_btn} onClick={onFullScreenClick}>
                <span className={Styles.blind}>창 전환</span>
            </a>
            <Tab selected={selected} tabItems={tabItems} />
            <a href="#" className={Styles.btn_save} role="button">
                저장하기
            </a>
        </div>
    );
};

export default Header;

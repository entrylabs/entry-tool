import React from 'react';
import Styles from '@assets/entry/scss/popup.scss';
import Tab from './Tab';

const Header = (props) => {
    const { selected, tabItems, isFullScreen = false, onFullScreenClick = () => {} } = props;

    return (
        <div
            className={
                isFullScreen ? `${Styles.detail_top} ${Styles.fullscreen}` : Styles.detail_top
            }
        >
            <a
                href="#"
                role="button"
                className={
                    isFullScreen ? `${Styles.switch_btn} ${Styles.fullscreen}` : Styles.switch_btn
                }
                onClick={onFullScreenClick}
            >
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

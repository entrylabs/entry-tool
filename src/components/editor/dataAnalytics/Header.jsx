import React, { useContext } from 'react';
import Tab from './Tab';
import { DataAnalyticsContext } from './context/DataAnalyticsContext';
import { CommonUtils } from '@utils/Common';
import Styles from '@assets/entry/scss/popup.scss';

const Header = (props) => {
    // const { selected, tabItems, isFullScreen = false, onFullScreenClick = () => {} } = props;
    const { selected, tabItems } = props;
    const { dataAnalytics } = useContext(DataAnalyticsContext);
    const { onSubmitDataAnalytics } = dataAnalytics;

    const handleClick = (event) => {
        event.preventDefault();
        onSubmitDataAnalytics(dataAnalytics);
    };

    return (
        <div
            className={
                // isFullScreen ? `${Styles.detail_top} ${Styles.fullscreen}` : Styles.detail_top
                `${Styles.detail_top} ${Styles.fullscreen}`
            }
        >
            {/* <a
                href="#"
                role="button"
                className={
                    isFullScreen ? `${Styles.switch_btn} ${Styles.fullscreen}` : Styles.switch_btn
                }
                onClick={onFullScreenClick}
            >
                <span className={Styles.blind}>창 전환</span>
            </a> */}
            <Tab selected={selected} tabItems={tabItems} />
            <a className={Styles.btn_save} role="button" onClick={handleClick}>
                {CommonUtils.getLang('DataAnalytics.save')}
            </a>
        </div>
    );
};

export default Header;

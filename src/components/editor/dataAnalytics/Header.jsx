import React, { useContext } from 'react';
import Tab from './Tab';
import { DataAnalyticsContext } from '@contexts/dataAnalytics';
import { CommonUtils } from '@utils/Common';
import Theme from '@utils/Theme';

const Header = (props) => {
    const theme = Theme.getStyle('popup');
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
                `${theme.detail_top} ${theme.fullscreen}`
            }
        >
            {/* <a
                href="#"
                role="button"
                className={
                    isFullScreen ? `${theme.switch_btn} ${theme.fullscreen}` : theme.switch_btn
                }
                onClick={onFullScreenClick}
            >
                <span className={theme.blind}>창 전환</span>
            </a> */}
            <Tab selected={selected} tabItems={tabItems} />
            <a className={theme.btn_save} role="button" onClick={handleClick}>
                {CommonUtils.getLang('DataAnalytics.save')}
            </a>
        </div>
    );
};

export default Header;

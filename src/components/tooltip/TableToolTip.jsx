import React, { useState } from 'react';
import OutsideClick from '../common/outsideClick';
import { CommonUtils } from '@utils/Common';

import Styles from '@assets/entry/scss/popup.scss';

const TableToolTip = () => {
    const [showHelp, setShowHelp] = useState('none');

    const handleClickHelp = (event) => {
        event.preventDefault();
        setShowHelp(showHelp === 'none' ? 'block' : 'none');
    };

    return (
        <OutsideClick
            className={Styles.q_box}
            onOutsideClick={() => {
                setShowHelp('none');
            }}
        >
            <a className={Styles.ico_q} onClick={handleClickHelp}>
                <span className={Styles.blind}>도움말</span>
            </a>
            <div className={Styles.tooltip_box} style={{ display: showHelp }}>
                <div className={Styles.tooltip_inner}>
                    <strong className={Styles.sjt}>
                        {CommonUtils.getLang('DataAnalytics.data_alert')}
                    </strong>
                    <ul className={Styles.tooltip_list}>
                        <li>
                            <em className={Styles.tit}>
                                {CommonUtils.getLang('DataAnalytics.average')}
                            </em>
                            <p className={Styles.dsc}>
                                {CommonUtils.getLang('DataAnalytics.average_explain')}
                            </p>
                        </li>
                        <li>
                            <em className={Styles.tit}>
                                {CommonUtils.getLang('DataAnalytics.standard_deviation')}
                            </em>
                            <p className={Styles.dsc}>
                                {CommonUtils.getLang('DataAnalytics.standard_deviation_explain')}
                            </p>
                        </li>
                        <li>
                            <em className={Styles.tit}>
                                {CommonUtils.getLang('DataAnalytics.maximum')}/
                                {CommonUtils.getLang('DataAnalytics.minimum')}
                            </em>
                            <p className={Styles.dsc}>
                                {CommonUtils.getLang('DataAnalytics.maximum_minimum_explain')}
                            </p>
                        </li>
                        <li>
                            <em className={Styles.tit}>
                                {CommonUtils.getLang('DataAnalytics.median')}
                            </em>
                            <p className={Styles.dsc}>
                                {CommonUtils.getLang('DataAnalytics.median_explain')}
                            </p>
                        </li>
                    </ul>
                </div>
                <span className={`${Styles.arr} ${Styles.free}`} style={{ left: '40px' }}>
                    <i></i>
                </span>
            </div>
        </OutsideClick>
    );
};

export default TableToolTip;

import { useState } from 'react';
import OutsideClick from '../common/outsideClick';
import { CommonUtils } from '@utils/Common';

import Theme from '@utils/Theme';

const TableToolTip = () => {
    const theme = Theme.getStyle('popup');
    const [showHelp, setShowHelp] = useState('none');

    const handleClickHelp = (event) => {
        event.preventDefault();
        setShowHelp(showHelp === 'none' ? 'block' : 'none');
    };

    return (
        <OutsideClick
            className={theme.q_box}
            onOutsideClick={() => {
                setShowHelp('none');
            }}
        >
            <a className={theme.ico_q} onClick={handleClickHelp}>
                <span className={theme.blind}>도움말</span>
            </a>
            <div className={theme.tooltip_box} style={{ display: showHelp }}>
                <div className={theme.tooltip_inner}>
                    <strong className={theme.sjt}>
                        {CommonUtils.getLang('DataAnalytics.data_alert')}
                    </strong>
                    <ul className={theme.tooltip_list}>
                        <li>
                            <em className={theme.tit}>
                                {CommonUtils.getLang('DataAnalytics.average')}
                            </em>
                            <p className={theme.dsc}>
                                {CommonUtils.getLang('DataAnalytics.average_explain')}
                            </p>
                        </li>
                        <li>
                            <em className={theme.tit}>
                                {CommonUtils.getLang('DataAnalytics.standard_deviation')}
                            </em>
                            <p className={theme.dsc}>
                                {CommonUtils.getLang('DataAnalytics.standard_deviation_explain')}
                            </p>
                        </li>
                        <li>
                            <em className={theme.tit}>
                                {CommonUtils.getLang('DataAnalytics.maximum')}/
                                {CommonUtils.getLang('DataAnalytics.minimum')}
                            </em>
                            <p className={theme.dsc}>
                                {CommonUtils.getLang('DataAnalytics.maximum_minimum_explain')}
                            </p>
                        </li>
                        <li>
                            <em className={theme.tit}>
                                {CommonUtils.getLang('DataAnalytics.median')}
                            </em>
                            <p className={theme.dsc}>
                                {CommonUtils.getLang('DataAnalytics.median_explain')}
                            </p>
                        </li>
                    </ul>
                </div>
                <span className={`${theme.arr} ${theme.free}`} style={{ left: '40px' }}>
                    <i></i>
                </span>
            </div>
        </OutsideClick>
    );
};

export default TableToolTip;

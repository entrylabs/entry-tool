import React from 'react';
import { CommonUtils } from '@utils/Common';
import Styles from '@assets/entry/scss/popup.scss';

const SelectChartDropdown = (props) => {
    const { position = { left: '-3px', top: '55px' }, onClick = () => {} } = props;

    const handleAClick = (event) => {
        event.preventDefault();
    };

    return (
        <div className={Styles.vertical_tooltip} style={{ left: '56px', display: 'block' }}>
            <ul className={Styles.graph_list}>
                <li className={Styles.bar} onClick={onClick('bar')}>
                    <a href="#" onClick={handleAClick} role="button">
                        {CommonUtils.getLang('DataAnalytics.bar')}
                        <span className={Styles.blind}>
                            {CommonUtils.getLang('DataAnalytics.graph')}
                        </span>
                    </a>
                </li>
                <li className={Styles.line} onClick={onClick('line')}>
                    <a href="#" onClick={handleAClick} role="button">
                        {CommonUtils.getLang('DataAnalytics.line')}
                        <span className={Styles.blind}>
                            {CommonUtils.getLang('DataAnalytics.graph')}
                        </span>
                    </a>
                </li>
                <li className={Styles.pie} onClick={onClick('pie')}>
                    <a href="#" onClick={handleAClick} role="button">
                        {CommonUtils.getLang('DataAnalytics.pie')}
                        <span className={Styles.blind}>
                            {CommonUtils.getLang('DataAnalytics.graph')}
                        </span>
                    </a>
                </li>
                <li className={Styles.scatter} onClick={onClick('scatter')}>
                    <a href="#" onClick={handleAClick} role="button">
                        {CommonUtils.getLang('DataAnalytics.scatter')}
                        <span className={Styles.blind}>
                            {CommonUtils.getLang('DataAnalytics.graph')}
                        </span>
                    </a>
                </li>
            </ul>
            <span className={`${Styles.arr}`}>
                <i />
            </span>
        </div>
    );
};

export default SelectChartDropdown;

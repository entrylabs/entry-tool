import React from 'react';
import { CommonUtils } from '@utils/Common';
import Theme from '@utils/Theme';

const SelectChartDropdown = (props) => {
    const theme = Theme.getStyle('popup');
    const { position = { left: '-3px', top: '55px' }, onClick = () => {} } = props;

    const handleAClick = (event) => {
        event.preventDefault();
    };

    return (
        <div className={theme.vertical_tooltip} style={{ left: '56px', display: 'block' }}>
            <ul className={theme.graph_list}>
                <li className={theme.bar} onClick={onClick('bar')}>
                    <a onClick={handleAClick} role="button">
                        {CommonUtils.getLang('DataAnalytics.bar')}
                        <span className={theme.blind}>
                            {CommonUtils.getLang('DataAnalytics.graph')}
                        </span>
                    </a>
                </li>
                <li className={theme.line} onClick={onClick('line')}>
                    <a onClick={handleAClick} role="button">
                        {CommonUtils.getLang('DataAnalytics.line')}
                        <span className={theme.blind}>
                            {CommonUtils.getLang('DataAnalytics.graph')}
                        </span>
                    </a>
                </li>
                <li className={theme.pie} onClick={onClick('pie')}>
                    <a onClick={handleAClick} role="button">
                        {CommonUtils.getLang('DataAnalytics.pie')}
                        <span className={theme.blind}>
                            {CommonUtils.getLang('DataAnalytics.graph')}
                        </span>
                    </a>
                </li>
                <li className={theme.scatter} onClick={onClick('scatter')}>
                    <a onClick={handleAClick} role="button">
                        {CommonUtils.getLang('DataAnalytics.scatter')}
                        <span className={theme.blind}>
                            {CommonUtils.getLang('DataAnalytics.graph')}
                        </span>
                    </a>
                </li>
            </ul>
            <span className={`${theme.arr}`}>
                <i />
            </span>
        </div>
    );
};

export default SelectChartDropdown;

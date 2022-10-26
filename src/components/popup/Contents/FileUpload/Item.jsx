import React from 'react';
import Theme from '@utils/Theme';
import { CommonUtils } from '@utils/Common';
import classname from 'classnames';
import SelectItem from '../includes/SelectItem/index';

export default ({ type, excluded, item = {}, onClick, baseUrl }) => {
    const theme = Theme.getStyle('popup');
    return (
        <li className={classname({ [theme.on]: excluded, [theme.active]: excluded })}>
            <a className={theme.link} onClick={CommonUtils.handleClick(() => onClick(item))}>
                <SelectItem type={type} theme={theme} item={item} baseUrl={baseUrl} upload />
            </a>
        </li>
    );
};

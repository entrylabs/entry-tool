import React, { useState } from 'react';
import { CommonUtils } from '@utils/Common';
import Theme from '@utils/Theme';
import classname from 'classnames';

export default ({ sidebar = {}, onClick }) => {
    const theme = Theme.getStyle('popup');
    const list = Object.keys(sidebar);
    const [selected, select] = useState(list[0]);
    const selectItem = (item) => (e) => {
        e.preventDefault();
        select(item);
        if (onClick) {
            onClick(item);
        }
    };

    return (
        <ul className={theme.menu_list}>
            {list.map((item) => {
                const clazz = classname({ [theme.on]: selected === item });
                return (
                    <li key={item} onClick={selectItem(item)} className={clazz}>
                        <a href="#NULL">{CommonUtils.getLang(sidebar[item].name)}</a>
                    </li>
                );
            })}
        </ul>
    );
};

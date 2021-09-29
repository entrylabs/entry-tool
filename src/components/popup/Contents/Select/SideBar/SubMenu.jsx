import React, { useEffect, useState } from 'react';
import { CommonUtils } from '@utils/Common';
import Theme from '@utils/Theme';
import classname from 'classnames';

export default ({ menus = {}, onClick, isDrawVector, isVectorOnly, toggleVector }) => {
    const theme = Theme.getStyle('popup');
    const list = Object.keys(menus);
    const [selected, select] = useState(list[0]);
    const selectItem = (key) => (e) => {
        e && e.preventDefault();
        select(key);
        if (onClick) {
            onClick(key);
        }
    };

    useEffect(() => {
        selectItem(list[0]).apply();
    }, [menus]);

    if (!list.length) {
        return <div />;
    }

    return (
        <div className={theme.sub_tab}>
            <div className={theme.menu_inner}>
                {list.map((key) => {
                    const { name } = menus[key];
                    const clazz = classname({ [theme.on]: selected === key });
                    return (
                        <a key={key} href={'#NULL'} className={clazz} onClick={selectItem(key)}>
                            {CommonUtils.getLang(name)}
                        </a>
                    );
                })}
            </div>
            {isDrawVector && (
                <div className={theme.checkbox}>
                    <input
                        className={theme.blind}
                        type="checkbox"
                        id="vector"
                        name="vector"
                        checked={isVectorOnly}
                        onClick={toggleVector}
                    />

                    <label htmlFor="vector">
                        {CommonUtils.getLang('Buttons.show_only_vector')}
                    </label>
                </div>
            )}
        </div>
    );
};

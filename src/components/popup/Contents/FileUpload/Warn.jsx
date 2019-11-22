import React from 'react';
import classname from 'classnames';
import Theme from '@utils/Theme';

export default ({ title, desc, type }) => {
    const theme = Theme.getStyle('popup');
    return (
        <div className={classname(theme.img_caution_box, theme[type])}>
            <div className={theme.inner}>
                <span className={classname(theme.thmb, theme.imico_warning)} />
                <div className={theme.dsc_box}>
                    <strong>{title}</strong>
                    <div className={theme.dsc} dangerouslySetInnerHTML={{ __html: desc }} />
                </div>
            </div>
        </div>
    );
};

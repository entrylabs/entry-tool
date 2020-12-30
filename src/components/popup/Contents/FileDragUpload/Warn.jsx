import React from 'react';
import Theme from '@utils/Theme';
import { CommonUtils } from '@utils/Common';

export default ({ title, desc1, desc2 }) => {
    const theme = Theme.getStyle('popup');
    return (
        <div className={theme.caution_box}>
            <p className={theme.dsc}>
                <strong>{title}</strong>
                <span>
                    {desc1}
                    <br />
                    {desc2}
                    <a href="/" className={theme.link}>
                        [{CommonUtils.getLang('Menus.file_upload_warn_link')}]
                    </a>
                </span>
            </p>
        </div>
    );
};

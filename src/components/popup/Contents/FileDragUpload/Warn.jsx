import React from 'react';
import Theme from '@utils/Theme';
import { CommonUtils } from '@utils/Common';

const copyRightLink =
    'https://copyright.or.kr/education/educlass/learning/infringement-case/index.do';
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
                    <a href={copyRightLink} className={theme.link}>
                        [{CommonUtils.getLang('Menus.file_upload_warn_link')}]
                    </a>
                </span>
            </p>
        </div>
    );
};

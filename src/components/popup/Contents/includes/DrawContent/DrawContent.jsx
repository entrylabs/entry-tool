import React from 'react';
import classname from 'classnames';
import { CommonUtils } from '@utils/Common';

const copyRightLink = 'https://www.copyright.or.kr/education/educlass/learning/infringement-case/index.do';
export default ({ theme, goDraw }) => {
    const warnMessage = `${CommonUtils.getLang('Menus.file_upload_warn_desc_image')} <a 
            target="_blank" 
            class="${theme.copyright_link}"
            href="${copyRightLink}">
            [${CommonUtils.getLang('Menus.file_upload_warn_link')}]
        </a>`;
    return (
        <div className={theme.draw_box}>
            <div className={classname(theme.thmb, theme.imico_pop_draw_thmb)}>
                &nbsp;
            </div>
            <p className={theme.draw_dsc}>
                {CommonUtils.getLang('Menus.draw_new_ques_1')}
                <br />
                {CommonUtils.getLang('Menus.draw_new_ques_2')}
            </p>
            <div className={theme.warn_box}>
                <p className={theme.warn_title}>
                    {CommonUtils.getLang('Menus.file_upload_warn_title_image')}
                </p>
                <div
                    className={theme.warn_desc}
                    dangerouslySetInnerHTML={{ __html: warnMessage }}
                />
            </div>
            <div className={theme.pop_btn_box}>
                <a
                    href="#NULL"
                    className={theme.active}
                    onClick={CommonUtils.handleClick(goDraw)}
                >
                    {CommonUtils.getLang('Menus.draw_new_go')}
                </a>
            </div>
        </div>
    );
};

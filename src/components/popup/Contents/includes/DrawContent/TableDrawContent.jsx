import React from 'react';
import { CommonUtils } from '@utils/Common';

const copyRightLink =
    'https://copyright.or.kr/education/educlass/learning/infringement-case/index.do';
export default ({ theme, goDraw }) => (
    <section className={`${theme.pop_content} ${theme.table_file_add}`}>
        <div className={theme.section_cont}>
            <div className={theme.file_add_box}>
                <div className={theme.new_add_box}>
                    <p className={theme.dsc}>
                        <strong>{CommonUtils.getLang('Menus.file_upload_table_title')}</strong>
                        <span>{CommonUtils.getLang('Menus.file_upload_table_sub_title')}</span>
                    </p>
                </div>
            </div>
            <div className={theme.caution_box}>
                <p className={theme.dsc}>
                    <strong>{CommonUtils.getLang('Menus.file_upload_warn_title_table')}</strong>
                    <span>
                        {CommonUtils.getLang('Menus.file_upload_warn_desc_table_1')}
                        <br />
                        {CommonUtils.getLang('Menus.file_upload_warn_desc_table_2')}
                        <a className={theme.link} target="_blank" href={copyRightLink}>
                            [{CommonUtils.getLang('Menus.file_upload_warn_link')}]
                        </a>
                    </span>
                </p>
            </div>
            <div className={theme.pop_btn_box}>
                <div
                    className={theme.active}
                    style={{ width: 180 }}
                    onClick={CommonUtils.handleClick(goDraw)}
                >
                    {CommonUtils.getLang('Menus.file_upload_add')}
                </div>
            </div>
        </div>
    </section>
);

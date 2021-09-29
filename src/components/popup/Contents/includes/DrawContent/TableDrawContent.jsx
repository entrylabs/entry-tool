import React from 'react';
import { CommonUtils } from '@utils/Common';

const copyRightLink =
    'https://copyright.or.kr/education/educlass/learning/infringement-case/index.do';

export default ({ theme, goDraw, HeaderButtonPortal }) => (
    <>
        <div className={theme.new_add_box}>
            <p className={theme.dsc}>
                <strong>{CommonUtils.getLang('Menus.file_upload_table_title')}</strong>
                <span>{CommonUtils.getLang('Menus.file_upload_table_sub_title')}</span>
            </p>
            <label htmlFor="table_add" className={theme.add_label}>
                {CommonUtils.getLang('Buttons.create_new_table')}
                <input
                    type="file"
                    id="table_add"
                    name="table_add"
                    className={theme.blind}
                    onClick={CommonUtils.handleClick(goDraw)}
                />
            </label>
        </div>
        <div className={theme.caution_box}>
            <p className={theme.caution}>
                <strong>{CommonUtils.getLang('Menus.file_upload_warn_title_table')}</strong>
                <br />
                <span className={theme.sub_dsc}>
                    {CommonUtils.getLang('Menus.file_upload_warn_desc_table_1')}
                    {CommonUtils.getLang('Menus.file_upload_warn_desc_table_2')}
                </span>{' '}
                <a target="_blank" href={copyRightLink}>
                    [{CommonUtils.getLang('Menus.file_upload_warn_link')}]
                </a>
            </p>
        </div>
        <HeaderButtonPortal>
            <a className={theme.btn} role="button" onClick={CommonUtils.handleClick(goDraw)}>
                {CommonUtils.getLang('Buttons.add2')}
            </a>
        </HeaderButtonPortal>
    </>
);

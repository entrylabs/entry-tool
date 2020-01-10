import React from 'react';
import { CommonUtils } from '@utils/Common';
import classname from 'classnames';

export default ({ theme, item, upload, children }) => {
    const { info = {}, fields = [] } = item;
    const { summary, rows = 0, name } = info;
    if (upload) {
        return (
            <>
                <div className={classname(theme.thmb, theme.imico_pop_data_thmb)} />
                <em className={theme.sjt}>{name}</em>
            </>
        );
    }
    return (
        <>
            <strong className={theme.sjt}>{name}</strong>
            <div className={theme.info}>
                <em>
                    {`${CommonUtils.getLang('Menus.data_table_attribute')} : ` +
                        `${fields.length}${CommonUtils.getLang('Menus.count_ko')}`}
                </em>
                <p>{fields.join(', ')}</p>
            </div>
            <div className={theme.info2}>
                <em>
                    {`${CommonUtils.getLang('Menus.data_table_row')} : ` +
                        `${rows}${CommonUtils.getLang('Menus.count_ko')}`}
                </em>
                <p>{summary}</p>
            </div>
            <a href="/" className={theme.text_link}>
                {CommonUtils.getLang('Menus.read_more')}
            </a>
        </>
    );
}

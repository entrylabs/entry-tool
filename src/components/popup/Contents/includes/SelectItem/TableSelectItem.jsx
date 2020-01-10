import React from 'react';
import { openModal } from '@actions/popup';
import { connect } from 'react-redux';
import { CommonUtils } from '@utils/Common';
import classname from 'classnames';

const getLocalString = (obj) => {
    if (!obj || typeof obj === 'string') {
        return obj;
    }
    const lang = CommonUtils.getLangType();
    return obj[lang] || obj[Object.keys(obj)[0]];
};

const DetailModal = ({ theme, info = {} }) => {
    const { provider, summary, rows = 0, label, fields: fieldObj, modifiDate, description } = info;
    const fields = getLocalString(fieldObj) || [];
    return (
        <>
            <strong className={theme.more_sjt}>{getLocalString(label)}</strong>
            <ul className={theme.more_info}>
                <li>
                    {`${CommonUtils.getLang('Menus.data_table_provider')} : ` +
                        `${getLocalString(provider)}`}
                </li>
                <li>{`${CommonUtils.getLang('Menus.data_table_modifidate')} : ${modifiDate}`}</li>
            </ul>
            <ul className={theme.more_sub_info}>
                <li>
                    <strong>
                        {`${CommonUtils.getLang('Menus.data_table_attribute')} : ` +
                            `${fields.length}${CommonUtils.getLang('Menus.count_ko')}`}
                    </strong>
                    <p>{fields.join(', ')}</p>
                </li>
                <li>
                    <strong>
                        {`${CommonUtils.getLang('Menus.data_table_row')} : ` +
                            `${rows}${CommonUtils.getLang('Menus.count_ko')}`}
                    </strong>
                </li>
            </ul>
            <p className={theme.more_dsc}>{getLocalString(description)}</p>
        </>
    );
};

const TableSelectItem = ({ theme, item, upload, openModal }) => {
    const { info = {} } = item;
    const { summary, rows = 0, label, fields: fieldObj } = info;
    if (upload) {
        return (
            <>
                <div className={classname(theme.thmb, theme.imico_pop_data_thmb)} />
                <em className={theme.sjt}>{getLocalString(label)}</em>
            </>
        );
    }
    const fields = getLocalString(fieldObj) || [];
    const handleClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        openModal(<DetailModal theme={theme} info={info} />);
    };
    return (
        <>
            <strong className={theme.sjt}>{getLocalString(label)}</strong>
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
                <p>{getLocalString(summary)}</p>
            </div>
            <a href="/" className={theme.text_link} onClick={handleClick}>
                {CommonUtils.getLang('Menus.read_more')}
            </a>
        </>
    );
};

const mapDispatchToProps = (dispatch) => ({
    openModal: (component) => dispatch(openModal(component)),
});

export default connect(null, mapDispatchToProps)(TableSelectItem);

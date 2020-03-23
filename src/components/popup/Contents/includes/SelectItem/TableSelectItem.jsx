import React from 'react';
import { openModal } from '@actions/popup';
import { connect } from 'react-redux';
import { CommonUtils } from '@utils/Common';
import classname from 'classnames';
import moment from 'moment';

const DetailModal = ({ theme, info = {} }) => {
    const { provider, rows = 0, name, fields, updatedAt = '', description } = info;
    const updated = moment(new Date(updatedAt)).format('YYYY-MM-DD');
    return (
        <div className={theme.contents}>
            <strong className={theme.more_sjt}>{name}</strong>
            <ul className={theme.more_info}>
                <li>{`${CommonUtils.getLang('Menus.data_table_provider')} : ` + `${provider}`}</li>
                <li>{`${CommonUtils.getLang('Menus.data_table_modifidate')} : ${updated}`}</li>
            </ul>
            <ul className={theme.more_sub_info}>
                <li>
                    <strong>
                        {`${CommonUtils.getLang('Menus.data_table_column')} : ` +
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
            <p className={theme.more_dsc}>{description}</p>
        </div>
    );
};

const TableSelectItem = ({ theme, item, upload, openModal }) => {
    const { summary, rows = 0, name, fields = [] } = item;
    if (upload) {
        return (
            <>
                <div className={classname(theme.thmb, theme.imico_pop_data_thmb)} />
                <em className={theme.sjt}>{name}</em>
            </>
        );
    }
    const handleClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        openModal(<DetailModal theme={theme} info={item} />);
    };
    return (
        <>
            <strong className={theme.sjt}>{name}</strong>
            <div className={theme.info}>
                <em>
                    {`${CommonUtils.getLang('Menus.data_table_column')} : ` +
                        `${fields.length}${CommonUtils.getLang('Menus.count_ko')}`}
                </em>
                <p className={theme.fields}>{fields.join(', ')}</p>
            </div>
            <div className={theme.info2}>
                <em>
                    {`${CommonUtils.getLang('Menus.data_table_row')} : ` +
                        `${rows}${CommonUtils.getLang('Menus.count_ko')}`}
                </em>
                <p className={theme.summary}>{summary}</p>
            </div>
            {item.exampleurl && (
                <a
                    className={theme.text_url_link}
                    href={item.exampleurl}
                    rel="noopener noreferrer"
                    target="_blank"
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                >
                    {CommonUtils.getLang('Menus.sample_project')}
                </a>
            )}
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

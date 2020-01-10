import React, { useState, useEffect } from 'react';
import Theme from '@utils/Theme';
import { CommonUtils } from '@utils/Common';
import classname from 'classnames';
import Item from './Item';
import Warn from './Warn';
import UploadInput from './UploadInput';
import { EMIT_TYPES as Types } from '@constants';
import { closePopup, applyUploaded } from '@actions/popup';
import { connect } from 'react-redux';
import { triggerEvent } from '@actions/index';

const Index = (props) => {
    const { type, opt = {}, uploads = [], baseUrl } = props;
    const { submit, select, deselect, closePopup, applyUploaded, uploadedItems } = props;
    const [excluded, setExcluded] = useState([]);
    const [isUploading, setUploadState] = useState(false);
    const theme = Theme.getStyle('popup');
    const { warnExt, title, desc } = getWarnMsg(opt.uploadAllowed, theme.copyright_link);
    const getExcludedIndex = (item) => excluded.findIndex(({ _id }) => _id === item._id);
    const onItemClick = (item) => {
        if (!opt.multiSelect) {
            setExcluded([item]);
            select(item);
            return;
        }
        const index = getExcludedIndex(item);
        if (index >= 0) {
            setExcluded(excluded.filter((t, i) => i !== index));
            deselect(item);
        } else {
            setExcluded([...excluded, item]);
            select(item);
        }
    };

    const onSubmit = () => {
        let selected = excluded;
        if (opt.multiSelect) {
            selected = uploadedItems.filter((item) => !excluded.includes(item));
        }
        submit(selected);
    };

    useEffect(() => {
        const result = [...uploadedItems, ...uploads].filter(CommonUtils.distinct);
        if (result.length !== uploadedItems.length) {
            applyUploaded(result);
            if (!opt.multiSelect) {
                setExcluded(uploads);
            }
        }
        isUploading && setUploadState(false);
    }, [uploads]);

    return (
        <>
            <section className={classname(theme.pop_content, theme.file_add_list_content)}>
                <h2 className={theme.blind}>Upload File {excluded.length}</h2>
                {isUploading && (
                    <div className={theme.fileupload_loding}>
                        <span className={theme.loding_text}>
                            {CommonUtils.getLang('Menus.file_upload_loading')}
                        </span>
                    </div>
                )}
                <div className={theme.section_cont}>
                    <p className={classname(theme.caution, theme.imico_pop_caution)}>{warnExt}</p>
                    <div className={classname(theme.list_area, theme[`${type}_type`])}>
                        <UploadInput
                            uploadNotAllowedExt={opt.uploadNotAllowedExt}
                            uploadAllowed={opt.uploadAllowed}
                            setUploadState={(state) => setUploadState(state)}
                        />
                        <ul className={theme.obj_list}>
                            {uploadedItems.map((item) => (
                                <Item
                                    key={item._id}
                                    item={item}
                                    type={type}
                                    baseUrl={baseUrl}
                                    onClick={onItemClick}
                                    excluded={opt.multiSelect !== getExcludedIndex(item) >= 0}
                                />
                            ))}
                        </ul>
                    </div>
                    <Warn title={title} desc={desc} type={type} />
                </div>
            </section>
            <div className={theme.pop_btn_box}>
                <a href="#NULL" onClick={CommonUtils.handleClick(closePopup)}>
                    {CommonUtils.getLang('Buttons.cancel')}
                </a>
                <a
                    href="#NULL"
                    className={theme.active}
                    onClick={CommonUtils.handleClick(onSubmit)}
                >
                    {CommonUtils.getLang('Buttons.add')}
                </a>
            </div>
        </>
    );
};

const mapStateToProps = (state) => ({
    uploadedItems: state.popupReducer.uploads,
});

const mapDispatchToProps = (dispatch) => ({
    submit: (uploads) => {
        dispatch(triggerEvent(Types.submitUploads, { uploads }, false));
        dispatch(closePopup());
    },
    closePopup: () => dispatch(closePopup()),
    select: (id) => dispatch(triggerEvent(Types.itemon, { id }, false)),
    deselect: (id) => dispatch(triggerEvent(Types.itemoff, { id }, false)),
    applyUploaded: (list) => dispatch(applyUploaded(list)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);

const getWarnMsg = (allowed, copyrightClass) => {
    const result = { warnExt: '', title: '', desc: '' };
    if (allowed.sound) {
        result.warnExt = CommonUtils.getLang('Menus.sound_upload_warn_1');
        result.title = CommonUtils.getLang('Menus.file_upload_warn_title_sound');
        result.desc = CommonUtils.getLang('Menus.file_upload_warn_desc_sound');
    } else if (allowed.table) {
        result.warnExt = CommonUtils.getLang('Menus.table_upload_warn_1');
        result.title = CommonUtils.getLang('Menus.file_upload_warn_title_table');
        result.desc = CommonUtils.getLang('Menus.file_upload_warn_desc_table');
    } else if (allowed.object && allowed.image) {
        result.warnExt = CommonUtils.getLang('Menus.sprite_upload_warn');
        result.title = CommonUtils.getLang('Menus.file_upload_warn_title_image');
        result.desc = CommonUtils.getLang('Menus.file_upload_warn_desc_image');
    } else if (!allowed.object && allowed.image) {
        result.warnExt = CommonUtils.getLang('Menus.picture_upload_warn_1');
        result.title = CommonUtils.getLang('Menus.file_upload_warn_title_image');
        result.desc = CommonUtils.getLang('Menus.file_upload_warn_desc_image');
    }
    result.desc = `${result.desc} <a 
            target="_blank" 
            class="${copyrightClass}"
            href="https://copyright.or.kr/education/educlass/learning/infringement-case/index.do">
            [${CommonUtils.getLang('Menus.file_upload_warn_link')}]
        </a>`;
    return result;
};

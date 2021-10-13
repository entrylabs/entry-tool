import React, { useEffect, useState } from 'react';
import Theme from '@utils/Theme';
import { CommonUtils } from '@utils/Common';
import classname from 'classnames';
import Item from './Item';
import UploadInput from './UploadInput';
import { EMIT_TYPES as Types } from '@constants';
import { applyUploaded, closePopup } from '@actions/popup';
import { connect } from 'react-redux';
import { triggerEvent } from '@actions/index';
import Styles from '@assets/entry/scss/popup.scss';

const copyrightLinkUrl =
    'https://copyright.or.kr/education/educlass/learning/infringement-case/index.do';

const Index = (props) => {
    const { type, opt = {}, uploads = [], baseUrl, HeaderButtonPortal } = props;
    const { submit, select, deselect, applyUploaded, uploadedItems } = props;
    const [excluded, setExcluded] = useState([]);
    const [isUploading, setUploadState] = useState(false);
    const theme = Theme.getStyle('popup');
    const warnMessages = getWarnMsg(opt.uploadAllowed);
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
        if (result.length > 0 && isUploading && uploadedItems.length === result.length) {
            setUploadState(false);
        }
    }, [uploads, uploadedItems]);

    return (
        <div className={classname([theme.section_content, theme.file_add_list_content])}>
            <h2 className={theme.blind}>{CommonUtils.getLang('Menus.file_upload')}</h2>
            <div className={classname(theme.list_area, theme[`${type}_list_area`])}>
                <UploadInput
                    uploadNotAllowedExt={opt.uploadNotAllowedExt}
                    uploadAllowed={opt.uploadAllowed}
                    setUploadState={(state) => setUploadState(state)}
                />
                <ul className={theme.obj_list}>
                    {uploadedItems.map((item) => (
                        <Item
                            key={item._id || item.id}
                            item={item}
                            type={type}
                            baseUrl={baseUrl}
                            onClick={onItemClick}
                            excluded={opt.multiSelect !== getExcludedIndex(item) >= 0}
                        />
                    ))}
                </ul>
                {isUploading && (
                    <div className={theme.fileupload_loding}>
                        <span className={theme.loding_text}>
                            {CommonUtils.getLang('Menus.file_upload_loading')}
                        </span>
                    </div>
                )}
            </div>
            <div className={Styles.caution_box}>
                {warnMessages.map(({ title, desc }) => (
                    <p key={title} className={theme.caution}>
                        {desc ? (
                            <>
                                <strong>{title}</strong>
                                <br />
                                <span className={theme.sub_dsc}>{desc}</span>
                                <a target="_blank" href={copyrightLinkUrl}>
                                    [{CommonUtils.getLang('Menus.file_upload_warn_link')}]
                                </a>
                            </>
                        ) : (
                            title
                        )}
                    </p>
                ))}
            </div>
            <HeaderButtonPortal>
                <a className={theme.btn} role="button" onClick={CommonUtils.handleClick(onSubmit)}>
                    {CommonUtils.getLang('Buttons.add2')}
                </a>
            </HeaderButtonPortal>
        </div>
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

const getWarnMsg = (allowed) => {
    if (allowed.sound) {
        return [
            { title: CommonUtils.getLang('Menus.sound_upload_warn_1') },
            {
                title: CommonUtils.getLang('Menus.file_upload_warn_title_sound'),
                desc: CommonUtils.getLang('Menus.file_upload_warn_desc_sound'),
            },
        ];
    } else if (allowed.table) {
        return [
            { title: CommonUtils.getLang('Menus.table_upload_warn_1') },
            {
                title: CommonUtils.getLang('Menus.file_upload_warn_title_table'),
                desc: CommonUtils.getLang('Menus.file_upload_warn_desc_table'),
            },
        ];
    } else if (allowed.object && allowed.image) {
        return [
            { title: CommonUtils.getLang('Menus.sprite_upload_warn') },
            {
                title: CommonUtils.getLang('Menus.file_upload_warn_title_image'),
                desc: CommonUtils.getLang('Menus.file_upload_warn_desc_image'),
            },
        ];
    } else if (!allowed.object && allowed.image) {
        return [
            { title: CommonUtils.getLang('Menus.picture_upload_warn_1') },
            {
                title: CommonUtils.getLang('Menus.file_upload_warn_title_image'),
                desc: CommonUtils.getLang('Menus.file_upload_warn_desc_image'),
            },
        ];
    }
    return [];
};

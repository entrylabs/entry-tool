import React, { useState, useEffect } from 'react';
import Theme from '@utils/Theme';
import { CommonUtils } from '@utils/Common';
import classname from 'classnames';
import Item from './Item';
import Warn from './Warn';
import UploadInput from './UploadInput';
import DragArea from './DragArea';
import { EMIT_TYPES as Types } from '@constants';
import { closePopup, applyUploaded } from '@actions/popup';
import { connect } from 'react-redux';
import { triggerEvent } from '@actions/index';

const FileDragUpload = (props) => {
    const { type, opt = {}, uploads = [], baseUrl } = props;
    const { submit, select, deselect, applyUploaded, uploadedItems = [] } = props;
    const [excluded, setExcluded] = useState([]);
    const [isUploading, setUploadState] = useState(false);
    const theme = Theme.getStyle('popup');
    const { warnExt, title, desc1, desc2, dragTitle, dragDesc } = getWarnMsg(
        opt.uploadAllowed,
        theme.copyright_link
    );
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
        <section className={`${theme.pop_content} ${theme.table_file_add}`}>
            {/* [D] 메뉴 카테고리 선택에 따라 텍스트 변경  */}
            <h2 className={theme.blind}>파일 올리기</h2>
            <div className={theme.section_cont}>
                <div className={theme.file_add_box}>
                    <p className={`${theme.caution} ${theme.imico_pop_caution}`}>{warnExt}</p>
                    {uploadedItems.length ? (
                        ''
                    ) : (
                        <DragArea title={dragTitle} description={dragDesc} />
                    )}
                </div>
                <Warn title={title} desc1={desc1} desc2={desc2} />
                <div className={theme.pop_btn_box}>
                    <div
                        className={theme.active}
                        style={{ width: 180 }}
                        onClick={CommonUtils.handleClick(onSubmit)}
                    >
                        {CommonUtils.getLang('Buttons.add')}
                    </div>
                </div>
            </div>
        </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(FileDragUpload);

const getWarnMsg = (allowed) => {
    const result = { warnExt: '', title: '', desc: '' };
    if (allowed.table) {
        result.warnExt = CommonUtils.getLang('Menus.table_upload_warn_1');
        result.title = CommonUtils.getLang('Menus.file_upload_warn_title_table');
        result.desc1 = CommonUtils.getLang('Menus.file_upload_warn_desc_table_1');
        result.desc2 = CommonUtils.getLang('Menus.file_upload_warn_desc_table_2');
        result.dragTitle = CommonUtils.getLang('Menus.table_drag_upload_title');
        result.dragDesc = CommonUtils.getLang('Menus.table_drag_upload_desc');
    }
    return result;
};

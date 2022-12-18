import { useState, useEffect } from 'react';
import Theme from '@utils/Theme';
import { CommonUtils } from '@utils/Common';
import Item from './Item';
import Warn from './Warn';
import UploadInput from './UploadInput';
import DragArea from './DragArea';
import { EMIT_TYPES as Types } from '@constants';
import { closePopup, applyUploaded } from '@actions/popup';
import { connect } from 'react-redux';
import { triggerEvent } from '@actions/index';
import classname from 'classnames';

const FileDragUpload = (props) => {
    const { type, opt = {}, uploads = [], baseUrl, HeaderButtonPortal } = props;
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
        if (result.length > 0 && isUploading && uploadedItems.length === result.length) {
            setUploadState(false);
        }
    }, [uploads, uploadedItems]);

    return (
        <div className={classname(theme.section_content, theme.table_file_add_content)}>
            {uploadedItems.length ? (
                <div className={theme.file_list_box}>
                    <div className={theme.list_file_add}>
                        <UploadInput
                            uploadNotAllowedExt={opt.uploadNotAllowedExt}
                            uploadAllowed={opt.uploadAllowed}
                            setUploadState={(state) => setUploadState(state)}
                        />
                    </div>
                    <div
                        className={theme.list_inner}
                        style={{ width: uploadedItems.length * 132 + 10 }}
                    >
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
                    </div>
                </div>
            ) : (
                <DragArea
                    title={dragTitle}
                    description={dragDesc}
                    uploadNotAllowedExt={opt.uploadNotAllowedExt}
                    uploadAllowed={opt.uploadAllowed}
                    setUploadState={(state) => setUploadState(state)}
                />
            )}
            <Warn warnExt={warnExt} title={title} desc1={desc1} desc2={desc2} />
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

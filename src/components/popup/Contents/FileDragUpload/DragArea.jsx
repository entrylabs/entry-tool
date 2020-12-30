import React from 'react';
import { connect } from 'react-redux';
import { triggerEvent } from '@actions/index';
import Theme from '@utils/Theme';
import { CommonUtils } from '@utils/Common';
import { isValidFiles, createData } from '@utils/popup';
import { EMIT_TYPES as Types } from '@constants';

const DragArea = ({
    title,
    description,
    uploadNotAllowedExt,
    uploadAllowed,
    uploadFail,
    upload,
    setUploadState,
}) => {
    const theme = Theme.getStyle('popup');
    const onInputChanged = (e) => {
        e.preventDefault();
        const $upload = e.currentTarget;
        const uploadFiles = $upload.files;
        if (!isValidFiles(uploadFiles, uploadFail)) {
            return false;
        }
        setUploadState(true);
        const result = createData({
            uploadNotAllowedExt,
            uploadAllowed,
            uploadFiles,
            failEvent: uploadFail,
        });
        if (result) {
            upload(result);
            $upload.value = '';
        } else {
            setUploadState(false);
        }
    };
    return (
        <div className={theme.file_add}>
            <p className={theme.dsc}>
                <strong>{title}</strong>
                <span>{description}</span>
            </p>
            <label htmlFor="file_add" className={theme.add_label}>
                {CommonUtils.getLang('Menus.upload_select_file')}
                <input
                    type="file"
                    id="file_add"
                    name="file_add"
                    multiple="multiple"
                    className={theme.blind}
                    onChange={onInputChanged}
                />
            </label>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    upload: (data) => dispatch(triggerEvent(Types.uploads, data, false)),
    uploadFail: (err) => dispatch(triggerEvent(Types.uploadFail, err, false)),
});

export default connect(null, mapDispatchToProps)(DragArea);

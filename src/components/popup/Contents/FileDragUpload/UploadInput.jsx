import React from 'react';
import classname from 'classnames';
import Theme from '@utils/Theme';
import { CommonUtils } from '@utils/Common';
import { isValidFiles, createData } from '@utils/popup';
import { triggerEvent } from '@actions/index';
import { EMIT_TYPES as Types } from '@constants';
import { connect } from 'react-redux';

const Index = ({ uploadNotAllowedExt, uploadAllowed, uploadFail, upload, setUploadState }) => {
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
        <div className={theme.file_add_box}>
            <label htmlFor="inpt_file" className={classname(theme.upload, theme.imbtn_pop_upload)}>
                {CommonUtils.getLang('Workspace.upload_addfile')}
            </label>
            <input
                type="file"
                name="inpt_file"
                id="inpt_file"
                multiple="multiple"
                onChange={onInputChanged}
                style={{ fontSize: 0 }}
            />
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    upload: (data) => dispatch(triggerEvent(Types.uploads, data, false)),
    uploadFail: (err) => dispatch(triggerEvent(Types.uploadFail, err, false)),
});

export default connect(null, mapDispatchToProps)(Index);

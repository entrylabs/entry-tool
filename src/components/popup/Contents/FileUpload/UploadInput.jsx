import classname from 'classnames';
import Theme from '@utils/Theme';
import { CommonUtils } from '@utils/Common';
import _includes from 'lodash/includes';
import _range from 'lodash/range';
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
            $upload.value = '';
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
        } else {
            setUploadState(false);
        }
        $upload.value = '';
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

const appendData = (target, name, file) => {
    let result = target;
    if (!target) {
        result = new FormData();
        if (name !== 'objects') {
            result.append('type', 'user');
        }
    }
    result.append(name, file);
    return result;
};

const isValidFiles = (files, failEvent) => {
    if (!files) {
        failEvent({ messageParent: 'Menus', message: 'file_required' });
        return false;
    }
    if (files.length > 10) {
        failEvent({ messageParent: 'Menus', message: 'file_upload_max_count' });
        return false;
    }
    return files.length >= 1;
};
const checkFileType = ({ file, uploadNotAllowedExt, failEvent, uploadAllowed: allowed }) => {
    const isImage = /^image\//.test(file.type);
    // const isGif = /^image\/gif/.test(file.type);
    const isObject = /\.eo$/.test(file.name);
    const isAudio = file.name.toLowerCase().indexOf('.mp3') >= 0;
    const isTable = /\.(csv|xlsx?|json|xml)$/.test(file.name);
    const splittedNames = file.name.split('.');
    const ext = splittedNames[splittedNames.length - 1];
    const notSupported = { messageParent: 'Workspace', message: 'upload_not_supported_file_msg' };
    if (file.size > 1024 * 1024 * 10) {
        failEvent({ messageParent: 'Menus', message: 'file_upload_max_size' });
        return false;
    }
    if (_includes(uploadNotAllowedExt, ext)) {
        failEvent(notSupported);
        return false;
    }

    if (allowed.sound && isAudio) {
        return 'sound';
    }
    if (allowed.object && isObject) {
        return 'object';
    }
    if (allowed.image && isImage) {
        return 'image';
    }
    if (allowed.table && isTable) {
        return 'table';
    }

    failEvent(notSupported);
    return false;
};

const createData = ({ uploadFiles, failEvent, uploadNotAllowedExt, uploadAllowed }) => {
    let formData = null;
    let objectData = null;
    const checkFiles = _range(uploadFiles.length).some((idx) => {
        const file = uploadFiles.item(idx);
        switch (checkFileType({ file, uploadNotAllowedExt, failEvent, uploadAllowed })) {
            case 'sound':
            case 'image':
            case 'table':
                formData = appendData(formData, `uploadFile${idx}`, file);
                break;
            case 'object':
                objectData = appendData(objectData, 'objects', file);
                break;
            default:
                return true;
        }
        return false;
    });
    if (checkFiles) {
        return null;
    }
    return { formData, objectData };
};

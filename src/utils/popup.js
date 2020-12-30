import _range from 'lodash/range';
import _includes from 'lodash/includes';

export const appendData = (target, name, file) => {
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

export const isValidFiles = (files, failEvent) => {
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

export const checkFileType = ({ file, uploadNotAllowedExt, failEvent, uploadAllowed: allowed }) => {
    const isImage = /^image\//.test(file.type);
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

export const createData = ({ uploadFiles, failEvent, uploadNotAllowedExt, uploadAllowed }) => {
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

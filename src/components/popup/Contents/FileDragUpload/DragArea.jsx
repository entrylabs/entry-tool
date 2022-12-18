import { useState, useRef, useEffect } from 'react';
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
    const [drag, setDrag] = useState(false);
    const [dragCounter, setDragCounter] = useState(false);
    const dropRef = useRef();

    useEffect(() => {
        const div = dropRef.current;
        div.addEventListener('dragenter', handleDragIn);
        div.addEventListener('dragleave', handleDragOut);
        div.addEventListener('dragover', handleDrag);
        div.addEventListener('drop', handleDrop);

        return () => {
            div.removeEventListener('dragenter', handleDragIn);
            div.removeEventListener('dragleave', handleDragOut);
            div.removeEventListener('dragover', handleDrag);
            div.removeEventListener('drop', handleDrop);
        };
    }, []);

    const handleDrag = (event) => {
        event.preventDefault();
        event.stopPropagation();
    };

    const handleDragIn = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setDragCounter(dragCounter + 1);
        if (event.dataTransfer.items && event.dataTransfer.items.length > 0) {
            setDrag(true);
        }
    };

    const handleDragOut = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setDragCounter(dragCounter - 1);
        if (dragCounter === 0) {
            setDrag(false);
        }
    };

    const handleDrop = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setDrag(false);
        if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
            setUploadFiles(event.dataTransfer.files);
            event.dataTransfer.clearData();
            setDragCounter(0);
        }
    };

    const setUploadFiles = (files) => {
        if (!isValidFiles(files, uploadFail)) {
            return false;
        }
        setUploadState(true);
        const result = createData({
            uploadNotAllowedExt,
            uploadAllowed,
            uploadFiles: files,
            failEvent: uploadFail,
        });
        if (result) {
            upload(result);
        } else {
            setUploadState(false);
        }
        return result;
    };

    const onInputChanged = (event) => {
        event.preventDefault();
        const $upload = event.currentTarget;
        const uploadFiles = $upload.files;
        setUploadFiles(uploadFiles);
        $upload.value = '';
    };

    return (
        <div className={theme.file_add} ref={dropRef}>
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

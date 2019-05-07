import React, { Component } from 'react';
import { connect } from 'react-redux';
import range from 'lodash/range';
import _includes from 'lodash/includes';
import { updateUploads } from '@actions/popup';
import { CommonUtils } from '@utils/Common';
import { triggerEvent } from '@actions';
import Theme from '@utils/Theme';

class Item extends Component {
    constructor(props) {
        super(props);
        this.theme = Theme.getStyle('popup');
        this.onClickItem = this.onClickItem.bind(this);
    }

    drawImage() {
        if (this.props.type && this.props.type === 'sound') {
            return <div className={`${this.theme.thmb} ${this.theme.imico_pop_sound_thmb}`}>&nbsp;</div>;
        }
        const { filename, fileurl } = this.props.item;
        let thumb;
        if (fileurl) {
            thumb = fileurl.thumb || fileurl;
        }
        return (
            <div className={this.theme.thmb}>
                <img src={thumb || CommonUtils.createImageUrl(filename, this.props.baseUrl)} alt=""/>
            </div>
        );
    }

    onClickItem(e) {
        e.preventDefault();
        this.props.clickHandler(this.props.item);
    }

    render() {
        return (
            <li className={CommonUtils.toggleClass(this.props.excluded, '', this.theme.on)}>
                <a href="#NULL" className={this.theme.link} onClick={this.onClickItem}>
                    {this.drawImage()}
                    <em className={this.theme.sjt}>{this.props.item.name}</em>
                </a>
            </li>
        );
    }
}

class FileUpload extends Component {
    constructor(props) {
        super(props);
        this.theme = Theme.getStyle('popup');
        this.state = {
            isUploading: false,
            excluded: [],
        };

        this.onAddItemChanged = this.onAddItemChanged.bind(this);
        this.checkFIleType = this.checkFIleType.bind(this);
        this.onItemClick = this.onItemClick.bind(this);
        this.onApplyItemClicked = this.onApplyItemClicked.bind(this);
    }

    componentDidUpdate(prevProps) {
        const { uploads = [], updateUploads } = this.props;
        const beforeUpload = prevProps.uploads || [];
        const updatedUploads = uploads
            .filter((afterItem) => !beforeUpload.find((beforeItem) => afterItem._id === beforeItem._id));

        if (beforeUpload.length !== uploads.length) {
            updateUploads(this.props.type, uploads);
        } else if (updatedUploads.length > 0) {
            updateUploads(this.props.type, updatedUploads);
        }
    }

    componentWillUpdate() {
        if (this.state.isUploading) {
            this.setState({ isUploading: false });
        }
    }

    isValidFiles(files) {
        if (!files) {
            this.props.triggerEvent(
                'uploadFail',
                { messageParent: 'Menus', message: 'file_required' },
                false,
            );
            return false;
        }

        if (files.length > 10) {
            this.props.triggerEvent(
                'uploadFail',
                { messageParent: 'Menus', message: 'file_upload_max_count' },
                false,
            );
            return false;
        }

        if (files.length > 0) {
            this.setState({ isUploading: true });
        }

        return true;
    }

    triggerNotSuportFileError() {
        this.setState({ isUploading: false });
        this.props.triggerEvent(
            'uploadFail',
            {
                messageParent: 'Workspace',
                message: 'upload_not_supported_file_msg',
            },
            false,
        );
        return false;
    }

    checkFIleType(file) {
        const isImage = /^image\//.test(file.type);
        // const isGif = /^image\/gif/.test(file.type);
        const isObject = /\.eo$/.test(file.name);
        const isAudio = file.name.toLowerCase()
            .indexOf('.mp3') >= 0;
        const splittedNames = file.name.split('.');
        const ext = splittedNames[splittedNames.length - 1];
        const allowed = this.props.options.uploadAllowed;
        if (file.size > 1024 * 1024 * 10) {
            this.props.triggerEvent(
                'uploadFail',
                { messageParent: 'Menus', message: 'file_upload_max_size' },
                false,
            );
            return false;
        }
        if (_includes(this.props.options.uploadNotAllowedExt, ext)) {
            return this.triggerNotSuportFileError();
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

        return this.triggerNotSuportFileError();
    }

    onAddItemChanged(e) {
        e.preventDefault();
        const $upload = e.currentTarget;
        const uploadFiles = $upload.files;
        let formData = null;
        let objectData = null;
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

        if (!this.isValidFiles(uploadFiles)) {
            return false;
        }

        const checkFiles = range(uploadFiles.length)
            .some((idx) => {
                const file = uploadFiles.item(idx);
                switch (this.checkFIleType(file)) {
                    case 'sound':
                    case 'image':
                        formData = appendData(formData, `uploadFile${idx}`, file);
                        break;
                    case 'object':
                        objectData = appendData(objectData, 'objects', file);
                        break;
                    default:
                        break;
                }
                return false;
            });

        if (!checkFiles) {
            this.props.triggerEvent('dummyUploads', { formData, objectData }, false);
            $upload.value = '';
        }
    }

    onApplyItemClicked(e) {
        e.preventDefault();
        let selected = [];
        if (this.props.options.multiSelect) {
            selected = this.props.popupReducer.uploads.filter(
                (item) => !this.state.excluded.includes(item),
            );
        } else {
            selected = this.state.excluded;
        }
        this.props.triggerEvent('uploads', { uploads: selected }, true);
    }

    getExcludedIndex(item) {
        return this.state.excluded.findIndex((element) => element._id === item._id);
    }

    onItemClick(item) {
        const index = this.getExcludedIndex(item);
        const excluded = this.state.excluded;

        if (this.props.options.multiSelect) {
            if (index >= 0) {
                excluded.splice(index, 1);
                this.props.triggerEvent('itemon', { id: item._id }, false);
            } else {
                excluded.push(item);
                this.props.triggerEvent('itemoff', null, false);
            }
            this.setState({ excluded });
        } else {
            this.setState({ excluded: [item] });
            this.props.triggerEvent('itemon', { id: item._id }, false);
        }
    }

    drawItems() {
        return this.props.popupReducer.uploads.map((item) => {
            let isExcluded = this.getExcludedIndex(item) >= 0;
            if (!this.props.options.multiSelect) {
                isExcluded = !isExcluded;
            }
            return (
                <Item
                    key={item._id}
                    item={item}
                    type={this.props.type}
                    baseUrl={this.props.popupReducer.baseUrl}
                    clickHandler={this.onItemClick}
                    excluded={isExcluded}
                />
            );
        });
    }

    getWarnMsg() {
        const allowed = this.props.options.uploadAllowed;
        if (allowed.sound) {
            return CommonUtils.getLang('Menus.sound_upload_warn_1');
        }
        if (allowed.object && allowed.image) {
            return CommonUtils.getLang('Menus.sprite_upload_warn');
        }
        if (!allowed.object && allowed.image) {
            return CommonUtils.getLang('Menus.picture_upload_warn_1');
        }
        return '';
    }

    render() {
        return (
            <React.Fragment>
                <section className={`${this.theme.pop_content} ${this.theme.file_add_list_content}`}>
                    {/* [D] 메뉴 카테고리 선택에 따라 텍스트 변경  */}
                    <h2 className={this.theme.blind}>파일 올리기</h2>
                    {this.state.isUploading && (
                        <div className={this.theme.fileupload_loding}>
                            <span className={this.theme.loding_text}>
                                {CommonUtils.getLang('Menus.file_upload_loading')}
                            </span>
                        </div>
                    )}
                    <div className={this.theme.section_cont}>
                        <p className={`${this.theme.caution} ${this.theme.imico_pop_caution}`}>
                            {this.getWarnMsg()}
                        </p>

                        <div
                            className={`${this.theme.list_area} ${CommonUtils.toggleClass(
                                this.props.type === 'sound',
                                this.theme.sound_type,
                            )}`}
                        >
                            <div className={this.theme.file_add_box}>
                                <label
                                    htmlFor="inpt_file"
                                    className={`${this.theme.upload} ${this.theme.imbtn_pop_upload}`}
                                >
                                    {CommonUtils.getLang('Workspace.upload_addfile')}
                                </label>
                                <input
                                    type="file"
                                    name="inpt_file"
                                    id="inpt_file"
                                    multiple="multiple"
                                    onChange={this.onAddItemChanged}
                                    style={{ fontSize: 0 }}
                                />
                            </div>
                            <ul className={this.theme.obj_list}>
                                {/* [D] 오브젝트 링크가 클릭되면 li에 on  추가 */}
                                {this.drawItems()}
                            </ul>
                        </div>

                        {this.props.options.uploadAllowed.image && (
                            <div className={this.theme.img_caution_box}>
                                <div className={this.theme.inner}>
                                    <span className={`${this.theme.thmb} ${this.theme.imico_warning}`}>
                                        &nbsp;
                                    </span>
                                    <div className={this.theme.dsc_box}>
                                        <strong>
                                            {CommonUtils.getLang('Menus.file_upload_desc_1')}
                                        </strong>
                                        <p className={this.theme.dsc}>
                                            {CommonUtils.getLang('Menus.file_upload_desc_2')}
                                            <br/>
                                            {CommonUtils.getLang('Menus.file_upload_desc_3')}
                                            <br/>
                                            {CommonUtils.getLang('Menus.file_upload_desc_4')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
                <div className={this.theme.pop_btn_box}>
                    <a href="#NULL" onClick={(e) => {
                        e.preventDefault();
                        this.props.triggerEvent('close', null, true);
                    }}>
                        {CommonUtils.getLang('Buttons.cancel')}
                    </a>
                    <a href="#NULL" className={this.theme.active} onClick={this.onApplyItemClicked}>
                        {CommonUtils.getLang('Buttons.add')}
                    </a>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    ...state,
});

const mapDispatchToProps = (dispatch) => ({
    triggerEvent: (event, data, hidden) => dispatch(triggerEvent(event, data, hidden)),
    updateUploads: (type, data) => dispatch(updateUploads(type, data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(FileUpload);

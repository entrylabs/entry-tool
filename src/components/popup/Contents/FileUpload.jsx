import React, { Component } from 'react';
import { connect } from 'react-redux';
import range from 'lodash/range';
import _includes from 'lodash/includes';
import Styles from '@assets/scss/popup.scss';
import { uploadItem } from '@actions/popup';
import { CommonUtils } from '@utils/Common';
import { triggerEvent } from '@actions';

class Item extends Component {
    constructor(props) {
        super(props);

        this.onClickItem = this.onClickItem.bind(this);
    }

    drawImage() {
        if (this.props.reducer.type && this.props.reducer.type === 'sound') {
            return <div className={`${Styles.thmb} ${Styles.imico_pop_sound_thmb}`}>&nbsp;</div>;
        }
        return (
            <div className={Styles.thmb}>
                <img
                    src={
                        this.props.item.fileurl ||
                        CommonUtils.createImageUrl(this.props.item.filename, this.props.reducer.baseUrl)
                    }
                    alt=""
                />
            </div>
        );
    }

    onClickItem(e) {
        e.preventDefault();
        this.props.clickHandler(this.props.item);
    }

    render() {
        return (
            <li className={CommonUtils.toggleClass(this.props.excluded, '', Styles.on)}>
                <a href="#NULL" className={Styles.link} onClick={this.onClickItem}>
                    {this.drawImage()}
                    <em className={Styles.sjt}>{this.props.item.name}</em>
                </a>
            </li>
        );
    }
}

class FileUpload extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isUploading: false,
            excluded: [],
        };

        this.onAddItemChanged = this.onAddItemChanged.bind(this);
        this.checkFIleType = this.checkFIleType.bind(this);
        this.onItemClick = this.onItemClick.bind(this);
        this.onApplyItemClicked = this.onApplyItemClicked.bind(this);
    }

    isValidFiles(files) {
        if (!files) {
            this.props.triggerEvent(
                'uploadFail',
                { messageParent: 'Menus', message: 'file_required' },
                false
            );
            return false;
        }

        if (files.length > 10) {
            this.props.triggerEvent(
                'uploadFail',
                { messageParent: 'Menus', message: 'file_upload_max_count' },
                false
            );
            return false;
        }

        if (files.length > 0) {
            this.setState({ isUploading: true });
        }

        return true;
    }

    triggerNotSuportFileError() {
        this.props.triggerEvent(
            'uploadFail',
            {
                messageParent: 'Workspace',
                message: 'upload_not_supported_file_msg',
            },
            false
        );
        return false;
    }

    checkFIleType(file) {
        const isImage = /^image\//.test(file.type);
        // const isGif = /^image\/gif/.test(file.type);
        const isObject = /\.eo$/.test(file.name);
        const isAudio = file.name.toLowerCase().indexOf('.mp3') >= 0;
        const splittedNames = file.name.split('.');
        const ext = splittedNames[splittedNames.length - 1];
        const allowed = this.props.options.uploadAllowed;
        if (file.size > 1024 * 1024 * 10) {
            this.props.triggerEvent(
                'uploadFail',
                { messageParent: 'Menus', message: 'file_upload_max_size' },
                false
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

    upload(formData, objectData, check) {
        let csrf = '';
        if (document.querySelector('meta[name="csrf-token"]')) {
            csrf = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        }
        const headers = {
            'Content-Type': undefined, // important
            'csrf-token': csrf,
        };

        if (this.props.isOffline) {
            this.props.triggerEvent(
                'dummyUploads',
                formData,
                false,
            );
            return;
        }

        if (check.file > 0) {
            this.props.uploadItem(this.props.popupReducer.type, formData, headers);
        }

        if (check.object > 0) {
            this.props.uploadItem('object', objectData, headers);
        }
    }

    onAddItemChanged(e) {
        e.preventDefault();
        const $upload = e.currentTarget;
        const uploadFiles = $upload.files;

        const check = {
            file: 0,
            object: 0,
        };

        const formData = new FormData();
        formData.append('type', 'user');
        const objectData = new FormData();

        if (!this.isValidFiles(uploadFiles)) {
            return false;
        }

        const checkFiles = range(uploadFiles.length).some((idx) => {
            const file = uploadFiles.item(idx);
            switch (this.checkFIleType(file)) {
                case 'sound':
                case 'image':
                    formData.append(`uploadFile${idx}`, file);
                    check.file++;
                    break;
                case 'object':
                    objectData.append('objects', file);
                    check.object++;
                    break;
                default:
                    break;
            }
            return false;
        });

        if (!checkFiles) {
            this.upload(formData, objectData, check);
            $upload.value = '';
            this.setState({ isUploading: true });
        }
    }

    onApplyItemClicked(e) {
        e.preventDefault();
        let selected = [];
        if (this.props.options.multiSelect) {
            selected = this.props.popupReducer.uploads.filter(
                (item) => !this.state.excluded.includes(item)
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
                    reducer={this.props.popupReducer}
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
                <section className={`${Styles.pop_content} ${Styles.file_add_list_content}`}>
                    {/* [D] 메뉴 카테고리 선택에 따라 텍스트 변경  */}
                    <h2 className={Styles.blind}>파일 올리기</h2>
                    <div className={Styles.section_cont}>
                        <p className={`${Styles.caution} ${Styles.imico_pop_caution}`}>
                            {this.getWarnMsg()}
                        </p>

                        <div
                            className={`${Styles.list_area} ${CommonUtils.toggleClass(
                                this.props.popupReducer.type === 'sound',
                                Styles.sound_type
                            )}`}
                        >
                            <div className={Styles.file_add_box}>
                                <label
                                    htmlFor="inpt_file"
                                    className={`${Styles.upload} ${Styles.imbtn_pop_upload}`}
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
                            <ul className={Styles.obj_list}>
                                {/* [D] 오브젝트 링크가 클릭되면 li에 on  추가 */}
                                {this.drawItems()}
                            </ul>
                        </div>

                        {this.props.options.uploadAllowed.image && (
                            <div className={Styles.img_caution_box}>
                                <div className={Styles.inner}>
                                    <span className={`${Styles.thmb} ${Styles.imico_warning}`}>
                                        &nbsp;
                                    </span>
                                    <div className={Styles.dsc_box}>
                                        <strong>
                                            {CommonUtils.getLang('Menus.file_upload_desc_1')}
                                        </strong>
                                        <p className={Styles.dsc}>
                                            {CommonUtils.getLang('Menus.file_upload_desc_2')}
                                            <br />
                                            {CommonUtils.getLang('Menus.file_upload_desc_3')}
                                            <br />
                                            {CommonUtils.getLang('Menus.file_upload_desc_4')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
                <div className={Styles.pop_btn_box}>
                    <a href="#NULL" onClick={() => this.props.triggerEvent('close', null, true)}>
                        {CommonUtils.getLang('Buttons.cancel')}
                    </a>
                    <a href="#NULL" className={Styles.active} onClick={this.onApplyItemClicked}>
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
    uploadItem: (type, formData, header) => dispatch(uploadItem(type, formData, header)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FileUpload);

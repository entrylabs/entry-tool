import React, { Component } from 'react';
import { connect } from 'react-redux';
import { range } from 'lodash-es';
import Styles from '../../../assets/scss/popup.scss';
import { uploadItem } from '../../../actions/popup';

import { CommonUtils } from '../../../utils/Common';
import { triggerEvent } from '../../../actions';

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
                        CommonUtils.createImageUrl(this.props.item.filename)
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
            <li className={CommonUtils.toggleClass(this.props.selected, Styles.on)}>
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
            selected: [],
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

    checkFIleType(file) {
        const isImage = /^image\//.test(file.type);
        const isGif = /^image\/gif/.test(file.type);
        const isObject = /\.eo$/.test(file.name);
        const isAudio = file.name.toLowerCase().indexOf('.mp3');

        if (file.size > 1024 * 1024 * 10) {
            this.props.triggerEvent(
                'uploadFail',
                { messageParent: 'Menus', message: 'file_upload_max_size' },
                false
            );
            return false;
        }

        switch (this.props.popupReducer.type) {
            case 'sprite':
                if (!isObject && (!isImage || isGif)) {
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

                if (isObject) {
                    return 'object';
                }
                break;
            case 'sound':
                if (isAudio < 0) {
                    return false;
                }
                break;
            default:
                return false;
        }

        return this.props.popupReducer.type;
    }

    upload(formData, objectData) {
        let csrf = '';
        if (document.querySelector('meta[name="csrf-token"]')) {
            csrf = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        }
        const headers = {
            'Content-Type': undefined, // important
            'csrf-token': csrf,
        };
        if (formData.get('uploadFile0')) {
            this.props.uploadItem(this.props.popupReducer.type, formData, headers);
        }

        if (objectData.get('objects')) {
            this.props.uploadItem('object', objectData, headers);
        }
    }

    onAddItemChanged(e) {
        e.preventDefault();
        const $upload = e.currentTarget;
        const uploadFiles = $upload.files;

        let formData = new FormData();
        formData.append('type', 'user');
        let objectData = new FormData();

        if (!this.isValidFiles(uploadFiles)) {
            return false;
        }

        const checkFiles = range(uploadFiles.length).some((i) => {
            const file = uploadFiles.item(i);
            switch (this.checkFIleType(file)) {
                case 'sound':
                case 'sprite':
                    formData.append('uploadFile' + i, file);
                    break;
                case 'object':
                    objectData.append('objects', file);
                    break;
                default:
                    break;
            }
            return false;
        });

        if (!checkFiles) {
            this.upload(formData, objectData);
            $upload.value = '';
            this.setState({ isUploading: true });
        }
    }

    onApplyItemClicked(e) {
        this.props.triggerEvent('uploads', { uploads: this.state.selected }, true);
    }

    getSelectedIndex(item) {
        return this.state.selected.findIndex((element) => element._id === item._id);
    }

    onItemClick(item) {
        const index = this.getSelectedIndex(item);
        let selected = this.state.selected;
        if (index >= 0) {
            selected.splice(index, 1);
            this.props.triggerEvent('itemoff', null, false);
        } else {
            selected.push(item);
            this.props.triggerEvent('itemon', { id: item._id }, false);
        }

        this.setState({ selected });
    }

    drawItems() {
        return this.props.popupReducer.uploads.map((item) => {
            return (
                <Item
                    key={item._id}
                    item={item}
                    reducer={this.props.popupReducer}
                    clickHandler={this.onItemClick}
                    selected={this.getSelectedIndex(item) >= 0}
                />
            );
        });
    }

    render() {
        return (
            <React.Fragment>
                <section className={`${Styles.pop_content} ${Styles.file_add_list_content}`}>
                    {/* [D] 메뉴 카테고리 선택에 따라 텍스트 변경  */}
                    <h2 className={Styles.blind}>파일 올리기</h2>
                    <div className={Styles.section_cont}>
                        <p className={`${Styles.caution} ${Styles.imico_pop_caution}`}>
                            10MB 이하의 jpg, png, bmp 또는 eo 형식의 오브젝트를 추가할 수 있습니다.
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
                                    파일 올리기
                                </label>
                                <input
                                    type="file"
                                    name="inpt_file"
                                    id="inpt_file"
                                    multiple="multiple"
                                    onChange={this.onAddItemChanged}
                                />
                            </div>
                            <ul className={Styles.obj_list}>
                                {/* [D] 오브젝트 링크가 클릭되면 li에 on  추가 */}
                                {this.drawItems()}
                            </ul>
                        </div>

                        <div className={Styles.img_caution_box}>
                            <div className={Styles.inner}>
                                <span className={`${Styles.thmb} ${Styles.imico_warning}`}>
                                    &nbsp;
                                </span>
                                <div className={Styles.dsc_box}>
                                    <strong>
                                        아래와 같은 그림은 이용약관 및 관련 법률에 의해 제재를
                                        받으실 수 있습니다.
                                    </strong>
                                    <p className={Styles.dsc}>
                                        폭력적이고 잔인한 그림
                                        <br />
                                        선정적인 신체 노출 그림
                                        <br />
                                        불쾌감을 주거나 혐오감을 일으키는 그림
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className={Styles.pop_btn_box}>
                    <a href="#NULL" onClick={(e) => this.props.triggerEvent('close', null, true)}>
                        취소
                    </a>
                    <a href="#NULL" className={Styles.active} onClick={this.onApplyItemClicked}>
                        추가하기
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

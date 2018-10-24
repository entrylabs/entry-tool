import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Styles from '../../../assets/scss/popup.scss';
import { uploadItem, visibleAction } from '../../../actions';
import { CommonUtils } from '../../../utils/Common';

class FileUpload extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isUploading : false
        }

        this.onAddItemChanged = this.onAddItemChanged.bind(this);
        this.checkFIleType = this.checkFIleType.bind(this);
        this.onApplyItemClicked = this.onApplyItemClicked.bind(this);
        this.onCancelBtnClicked = this.onCancelBtnClicked.bind(this);
    }

    isValidFiles(files) {
        if (!files) {
            //window.entrylms.alert(window.Lang.Menus.file_required);
            return false;
        }

        if (files.length > 10) {
            //window.entrylms.alert(window.Lang.Menus.file_upload_max_count);
            return false;
        }

        if (files.length > 0) {
            this.setState({isUploading:true})
        }

        return true;
    }

    checkFIleType(file) {
        const isImage = /^image\//.test(file.type);
        const isGif = /^image\/gif/.test(file.type);
        const isObject = /\.eo$/.test(file.name);
        const isAudio = file.name.toLowerCase().indexOf('.mp3');

        if (file.size > 1024 * 1024 * 10) {
            //window.entrylms.alert(window.Lang.Menus.file_upload_max_size);
            console.log("maxsize")
            return false;
        }

        switch(this.props.popupReducer.type) {
            case "sprite":
                if (!isObject && (!isImage || isGif)) {
                    //window.entrylms.alert(window.Lang.Workspace.upload_not_supported_file_msg);
                    console.log("uploadnotsupport")
                    return false;
                }

                if(isObject) {
                    return "object";
                }
                break;
            case "sound":
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
        if(formData.get("uploadFile0")) {
            this.props.uploadItem(this.props.popupReducer.type, formData);
        }

        if(objectData.get("objects")){
            this.props.uploadItem("object", objectData);
        }
    }

    onAddItemChanged(e) {
        e.preventDefault();
        const $upload = e.currentTarget;
        const uploadFiles = $upload.files;

        let formData = new FormData();
        formData.append('type', 'user');
        let objectData = new FormData();

        if(!this.isValidFiles(uploadFiles)) {
            return false;
        }

        const checkFiles = _.range(uploadFiles.length).some(i => {
            const file = uploadFiles.item(i);
            switch(this.checkFIleType(file)){
                case "sound":
                case "sprite":
                    formData.append('uploadFile' + i, file);
                    break;
                case "object":
                    objectData.append('objects', file);
                    break;
                default:
                    break;
            }
            return false;
        });

        if(!checkFiles) {
            this.upload(formData, objectData);
            $upload.value = '';
            this.setState({isUploading:true});
        }
    }

    onApplyItemClicked(e) {
        e.preventDefault();
        this.props.popupReducer.uploads.forEach(function(item, index, array) {
            if (!item.id) {
                item.id = window.Entry.generateHash();
            }
            var object = {
                id: window.Entry.generateHash(),
                objectType: 'sprite',
                sprite: {
                    name: item.name,
                    pictures: [item],
                    sounds: [],
                    category: {}
                }
            };
            window.Entry.container.addObject(object, 0);
        });
        window.createjs.Sound.stop();
        this.props.visibleAction(false);
    }

    onCancelBtnClicked(e) {
        e.preventDefault();
        this.props.visibleAction(false);
    }

    drawItems() {
        return this.props.popupReducer.uploads.map((item) => {
            return (
                <li key={item._id}>
                    <a href="#NULL" className={Styles.link}>
                        <div className={Styles.thmb}>
                            <img src={CommonUtils.createImageUrl(item.filename)} alt=""/>
                        </div>
                        <em className={Styles.sjt}>{item.name}</em>
                    </a>
                </li>
            )
        })
    }

    render() {
        return (
            <div className={Styles.section_cont}>
                {/* [D] 메뉴 카테고리 선택에 따라 텍스트 변경  */}
                <h2 className={Styles.blind}>파일 올리기</h2>
                <div className={Styles.cont_box}>
                    <div className={Styles.file_add_list_box}>
                        <p className={Styles.caution + " " + Styles.imico_pop_caution}>
                            10MB 이하의 jpg, png, bmp 또는 eo 형식의 오브젝트를 추가할 수 있습니다.
                        </p>
                        <div className={Styles.scroll_box}>
                            <div className={Styles.file_add_box}>
                                <label htmlFor="inpt_file" className={Styles.upload + " " + Styles.imbtn_pop_upload}>파일 올리기
                                </label>
                                <input type="file" name="inpt_file" id="inpt_file" multiple="multiple" onChange={this.onAddItemChanged}/>
                            </div>
                            <ul className={Styles.obj_list}>
                                {/* [D] 오브젝트 링크가 클릭되면 li에 on  추가 */}
                                {this.drawItems()}
                            </ul>
                        </div>
                        <div className={Styles.img_caution_box}>
                            <div className={Styles.inner}>
                                            <span className={Styles.thmb}>
                                                <img src="https://media.kappamoto.com/AK-Moto/foto/BMW_F700GS%20(13-16)_lato_K.jpg" alt=""/>
                                            </span>
                                <div className={Styles.dsc_box}>
                                    <strong>
                                        아래와 같은 그림은 이용약관 및 관련 법률에 의해 제재를 받으실 수 있습니다.
                                    </strong>
                                    <p className={Styles.dsc}>
                                        폭력적이고 잔인한 그림<br/>
                                        선정적인 신체 노출 그림<br/>
                                        불쾌감을 주거나 혐오감을 일으키는 그림
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={Styles.pop_btn_box}>
                    <a href="#NULL" onClick={this.onCancelBtnClicked}>취소</a>
                    <a href="#NULL" className={Styles.active} onClick={this.onApplyItemClicked}>추가하기</a>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    ...state,
});

const mapDispatchToProps = (dispatch) => ({
    visibleAction: (visible) => dispatch(visibleAction(visible)),
    uploadItem: (type, formData) => dispatch(uploadItem(type, formData))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(FileUpload);


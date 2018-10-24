import React, { Component } from 'react';
import { connect } from 'react-redux';
import Styles from '../../../assets/scss/popup.scss';

class Draw extends Component {
    onMoveBtnClicked(e) {
        e.preventDefault();
        const object = {
            id: window.Entry.generateHash(),
            objectType: 'sprite',
            sprite : {
                name : window.Lang.Workspace.new_object + (window.Entry.container.getAllObjects().length + 1),
                pictures : [
                    {
                        dimension: {
                            width: 960,
                            height: 540,
                        },
                        fileurl: window.Entry.mediaFilePath + '_1x1.png',
                        name: window.Lang.Workspace.new_picture,
                        type: '_system_',
                    }
                ],
                sounds : [],
                category : {
                    main : "new"
                }
            }
        };
        window.Entry.container.addObject(object, 0);
        window.Entry.playground.changeViewMode('picture');
    }

    render() {
        return (
            <div className={Styles.section_cont}>
                {/* [D] 메뉴 카테고리 선택에 따라 텍스트 변경  */}
                <h2 className={Styles.blind}>그리기</h2>
                <div className={Styles.cont_box}>
                    <div className={Styles.draw_box}>
                        <div className={Styles.thmb}>
                            <img src="https://media.kappamoto.com/AK-Moto/foto/BMW_F700GS%20(13-16)_lato_K.jpg" alt=""/>
                        </div>
                        <p className={Styles.draw_dsc}>
                            그림을 그려 오브젝트로 저장할 수 있습니다.<br/>
                            그리기 화면으로 이동하시겠습니까?
                        </p>
                        <div className={Styles.pop_btn_box}>
                            <a href="#NULL" className={Styles.active} onClick={this.onMoveBtnClicked}>이동하기</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    null,
    null,
)(Draw);
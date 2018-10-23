import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CommonUtils } from '../../../utils/Common';
import Styles from '../../../assets/scss/popup.scss';

class WriteBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            writeType: 'one',
            effects: {
                bold: {
                    text: '굵게',
                    apply: false,
                },
                underline: {
                    text: '밑줄',
                    apply: false,
                },
                italic: {
                    text: '기울임',
                    apply: false,
                },
                through: {
                    text: '취소선',
                    apply: false,
                },
                color: {
                    text: '글자색',
                    apply: false,
                },
                paint: {
                    text: '배경색',
                    apply: false,
                },
            },
        };

        this.drawWriteBox = this.drawWriteBox.bind(this);
        this.drawEffects = this.drawEffects.bind(this);
        this.applyEffect = this.applyEffect.bind(this);
        this.changeWriteType = this.changeWriteType.bind(this);
    }

    drawWriteBox() {
        if (this.state.writeType === 'one') {
            return this.oneLine();
        } else {
            return this.multiLine();
        }
    }

    changeWriteType(e) {
        e.preventDefault();
        const $target = e.target;
        const type = $target.getAttribute('data-type');
        this.setState({ writeType: type });
    }

    drawEffects() {
        return Object.keys(this.state.effects).map((key) => {
            const effect = this.state.effects[key];
            let className = Styles['imbtn_pop_font_' + key] + ' ' + CommonUtils.toggleClass(effect.apply, Styles.on);
            return (
                <a href="#NULL" key={key} className={className} data-effect={key} title={effect.text}>
                    <span className="blind">글자 {effect.text}</span>
                </a>
            );
        });
    }

    applyEffect(e) {
        e.preventDefault();
        const effectName = e.target.getAttribute('data-effect');
        if (!effectName) {
            return;
        }
        if (this.state.effects[effectName].apply) {
            this.setState(state => (state.effects[effectName].apply = false, state));
        } else {
            this.setState(state => (state.effects[effectName].apply = true, state));
        }

        console.log(this.state.effects);
    }

    initInput(e) {
        e.preventDefault();
        document.querySelectorAll(Styles.input_inner + " label")[0].style.display = 'none';
    }

    render() {
        return (
            <div className={Styles.section_cont}>
                {/* [D] 메뉴 카테고리 선택에 따라 텍스트 변경  */}
                <h2 className={Styles.blind}>글상자</h2>
                <div className={Styles.cont_box}>
                    <div className={Styles.write_box}>
                        <div className={Styles.write_set}>
                            <div className={Styles.select_box}>
                                <a href="#NULL" className={Styles.select + " " + Styles.imico_pop_select_arr} title="글꼴">
                                    NanumGothicOTF
                                </a>
                                <div className={Styles.layer_box}>
                                    <ul className="list">
                                        <li>
                                            <a href="#NULL" className={Styles.list_lnk}>
                                                Gothic
                                            </a>
                                            <a href="#NULL" className={Styles.list_lnk}>
                                                Gothic
                                            </a>
                                            <a href="#NULL" className={Styles.list_lnk}>
                                                Gothic
                                            </a>
                                            <a href="#NULL" className={Styles.list_lnk}>
                                                Gothic
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className={Styles.font_style_box} onClick={this.applyEffect}>
                                {this.drawEffects()}
                            </div>
                            <div className={Styles.write_type_box} onClick={this.changeWriteType}>
                                <a href="#NULL" className={CommonUtils.toggleClass(this.state.writeType === 'one', Styles.on)}
                                   data-type="one">한줄쓰기</a>
                                <a href="#NULL" className={CommonUtils.toggleClass(this.state.writeType === 'multi', Styles.on)}
                                   data-type="multi">여러 줄 쓰기</a>
                            </div>
                        </div>
                        {this.drawWriteBox()}
                    </div>
                </div>
                <div className={Styles.pop_btn_box}>
                    <a href="#NULL">취소</a>
                    <a href="#NULL" className={Styles.active}>추가하기</a>
                </div>
            </div>
        );
    }

    multiLine() {
        return (
            <div className={Styles.input_box}>
                <div className={Styles.input_inner} style={{ height: 228 + 'px' }} onFocus={this.initInput}>
                    {/* input에 포커스가 가거나 글자가 들어가면 label을 display: none 처리 해주세요 */}
                    <label htmlFor="textarea">
                        글상자의 내용을 입력하세요.
                    </label>
                    <textarea name="textarea" id="textarea" cols="30" rows="10"></textarea>
                </div>
                <ul className={Styles.list}>
                    <li>
                        내용 작성 시 엔터키로 줄바꿈을 할 수 있습니다.
                    </li>
                    <li>
                        글상자의 크기가 글자가 쓰일 수 있는 영역을 결정 합니다.
                    </li>
                    <li>
                        새로운 글자 추가 시 문장의 길이가 글상자의 기로 영역을 넘어가면 자동으로 줄이 바뀝니다.
                    </li>
                </ul>
            </div>
        );
    }

    oneLine() {
        return (
            <div className={Styles.input_box}>
                <div className={Styles.input_inner} onFocus={this.initInput}>
                    {/* input에 포커스가 가거나 글자가 들어가면 label을 display: none 처리 해주세요 */}
                    <label htmlFor="inpt">
                        글상자의 내용을 입력하세요.
                    </label>
                    <input type="text" id="inpt" name="inpt"/>
                </div>
                <ul className={Styles.list}>
                    <li>
                        내용을 한 줄로만 작성할 수 있습니다.
                    </li>
                    <li>
                        새로운 글자가 추가되면 글상자의 좌우 길이가 길어집니다.
                    </li>
                </ul>
            </div>
        );
    }
}

export default connect(
    null,
    null,
)(WriteBox);
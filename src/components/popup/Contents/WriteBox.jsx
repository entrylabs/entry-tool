import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CommonUtils } from '../../../utils/Common';
import Styles from '../../../assets/scss/popup.scss';
import { applySelected, fetchItems, visibleAction } from '../../../actions';
import { WRITE_BOX } from '../../../constatns';

class FontElement extends Component {
    constructor(props) {
        super(props);

        this.fontClicked = this.fontClicked.bind(this);
    }

    fontClicked(e) {
        e.preventDefault();
        this.props.clickFunc(this.props.font);
    }

    render() {
        return (
            <li className={Styles.list_item} onClick={this.fontClicked}>
                <a href="#" className={Styles.list_link}>
                    {this.props.font.name}
                </a>
            </li>);
    }
}

class WriteBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            writeType: 'one',
            fontBoxOpen: false,
            effects: WRITE_BOX.EFFECTS,
            fonts: WRITE_BOX.FONTS,
            font: WRITE_BOX.FONTS[0],
            textAreaActive: false,
            text: '',
        };

        this.onEffectBtnClicked = this.onEffectBtnClicked.bind(this);
        this.onWriteTypeChangeBtnClicked = this.onWriteTypeChangeBtnClicked.bind(this);
        this.onFontClicked = this.onFontClicked.bind(this);
        this.onFontBoxClicked = this.onFontBoxClicked.bind(this);
        this.onInputFocus = this.onInputFocus.bind(this);
        this.onInputBlur = this.onInputBlur.bind(this);
        this.onCancelBtnClicked = this.onCancelBtnClicked.bind(this);
        this.onSubmitBtnClicked = this.onSubmitBtnClicked.bind(this);
    }

    drawWriteBox() {
        if (this.state.writeType === 'one') {
            return this.oneLine();
        } else {
            return this.multiLine();
        }
    }

    drawEffects() {
        return Object.keys(this.state.effects).map((key) => {
            const effect = this.state.effects[key];
            let className = Styles.style_link + ' ' + Styles['imbtn_pop_font_' + key.toLowerCase()] + ' ' + CommonUtils.toggleClass(effect.apply, Styles.on);
            return (
                <a href="#NULL" key={key} className={className} data-effect={key} title={effect.text}>
                    <span className="blind">글자 {effect.text}</span>
                </a>
            );
        });
    }

    drawFonts() {
        return this.state.fonts.map(font => {
            return <FontElement key={font['$$hashKey']} font={font} clickFunc={this.onFontClicked}/>;
        });
    }

    onEffectBtnClicked(e) {
        e.preventDefault();
        const effectName = e.target.getAttribute('data-effect');
        if (!effectName) {
            return;
        }
        this.setState(state => (state.effects[effectName].apply = !state.effects[effectName].apply, state));
    }

    onWriteTypeChangeBtnClicked(e) {
        e.preventDefault();
        const $target = e.target;
        const type = $target.getAttribute('data-type');
        this.setState({ writeType: type });
    }

    onInputFocus(e) {
        e.preventDefault();
        this.setState({ textAreaActive: true });
    }

    onInputBlur(e) {
        e.preventDefault();
        if (e.currentTarget.lastElementChild.value == '') {
            this.setState({ textAreaActive: false });
        }
        this.setState({ text: e.currentTarget.lastElementChild.value });
    }

    onFontBoxClicked(e) {
        e.preventDefault();
        this.setState({ fontBoxOpen: !this.state.fontBoxOpen });
    }

    onFontClicked(font) {
        this.setState({ font: font });
        this.setState({ fontBoxOpen: false });
    }

    onCancelBtnClicked(e) {
        e.preventDefault();
        this.props.visibleAction(false);
    }

    onSubmitBtnClicked(e) {
        e.preventDefault();
        let effects = {};
        Object.keys(this.state.effects).forEach(name => {
            effects[name] = this.state.effects[name].apply
        })

        var text = this.state.text || window.Lang.Blocks.TEXT;
        var object = {
            id: window.Entry.generateHash(),
            name: text,//Lang.Workspace.textbox,
            text: text,
            options: {
                font: this.state.font,
                bold: false,
                underLine: false,
                italic: false,
                strike: false,
                colour: '#000000',
                background: '#ffffff',
                lineBreak: false,
                ...effects
            },
            objectType: 'textBox',
            sprite: {sounds:[], pictures:[]}
        };
        window.Entry.container.addObject(object, 0);
        this.props.visibleAction(false);
    }

    render() {
        return (
            <div className={Styles.section_cont}>
                {/* [D] 메뉴 카테고리 선택에 따라 텍스트 변경  */}
                <h2 className={Styles.blind}>글상자</h2>
                <div className={Styles.cont_box}>
                    <div className={Styles.write_box}>
                        <div className={Styles.write_set}>
                            {/* [D] 링크가 클릭되면 pop_selectbox클래스에 on 클래스 추가  */}
                            <div
                                className={`${Styles.pop_selectbox}  ${CommonUtils.toggleClass(this.state.fontBoxOpen, Styles.on)}`}>
                                <a href="#" className={`${Styles.select_link} ${Styles.imico_pop_select_arr_down}`}
                                   onClick={this.onFontBoxClicked} title="글꼴">
                                    {this.state.font.name}
                                </a>
                                {/* 공통 툴팁의 화살표 기본 위치는 가운데 입니다. */}
                                {/* 툴팁 화살표 위치를 변경하려면 arr 요소에서 margin-left:0;left: 원하는 값 으로 style이 정의 되어야 합니다. */}
                                <div className={Styles.tooltip_box}>
                                    <div className={Styles.tooltip_inner}>
                                        <ul className={Styles.select_list}>
                                            {this.drawFonts()}
                                        </ul>
                                    </div>
                                    <span className={Styles.arr}><i></i></span>
                                </div>
                            </div>

                            <div className={Styles.font_style_box} onClick={this.onEffectBtnClicked}>
                                {/* 링크가 클릭되면 on 클래스 토글 */}
                                {this.drawEffects()}
                            </div>
                            <div className={Styles.write_type_box} onClick={this.onWriteTypeChangeBtnClicked}>
                                {/* 링크가 클릭되면 on 클래스 토글 */}
                                <a href="#"
                                   className={CommonUtils.toggleClass(this.state.writeType === 'one', Styles.on)}
                                   data-type="one">한줄쓰기</a>
                                <a href="#"
                                   className={CommonUtils.toggleClass(this.state.writeType === 'multi', Styles.on)}
                                   data-type="multi">여러 줄 쓰기</a>
                            </div>
                        </div>
                        {this.drawWriteBox()}
                    </div>
                </div>
                <div className={Styles.pop_btn_box}>
                    <a href="#NULL" onClick={this.onCancelBtnClicked}>취소</a>
                    <a href="#NULL" className={Styles.active} onClick={this.onSubmitBtnClicked}>추가하기</a>
                </div>
            </div>
        );
    }

    getFontStyle() {
        let css = { fontFamily : this.state.font.family };
        Object.keys(this.state.effects).forEach(key => {
            const effect = this.state.effects[key];
            if(effect.apply) {
                if(effect.css.hasOwnProperty("textDecorationLine") && css.textDecorationLine) {
                    css.textDecorationLine = css.textDecorationLine + " " + effect.css.textDecorationLine;
                }else {
                    css = {...css, ...effect.css};
                }
            }
        });
        return css;
    }

    multiLine() {
        return (
            <div className={Styles.input_box}>
                <div className={Styles.input_inner} style={{ height: 228 + 'px' }} onFocus={this.onInputFocus}
                     onBlur={this.onInputBlur}>
                    {/* input에 포커스가 가거나 글자가 들어가면 label을 display: none 처리 해주세요 */}
                    <label htmlFor="textarea"
                           style={{ display: CommonUtils.toggleClass(this.state.textAreaActive, 'none') }}>
                        글상자의 내용을 입력하세요.
                    </label>
                    <textarea name="textarea" id="textarea" cols="30" rows="10" defaultValue={this.state.text} style={this.getFontStyle()}></textarea>
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
                <div className={Styles.input_inner} onFocus={this.onInputFocus} onBlur={this.onInputBlur}>
                    {/* input에 포커스가 가거나 글자가 들어가면 label을 display: none 처리 해주세요 */}
                    <label htmlFor="inpt"
                           style={{ display: CommonUtils.toggleClass(this.state.textAreaActive, 'none') }}>
                        글상자의 내용을 입력하세요.
                    </label>
                    <input type="text" id="inpt" name="inpt" defaultValue={this.state.text}  style={this.getFontStyle()}/>
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


const mapDispatchToProps = (dispatch) => ({
    visibleAction: (visible) => dispatch(visibleAction(visible)),
});

export default connect(
    null,
    mapDispatchToProps,
)(WriteBox);
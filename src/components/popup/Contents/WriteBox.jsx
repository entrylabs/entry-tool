import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CommonUtils } from '@utils/Common';
import Styles from '@assets/scss/popup.scss';
import { triggerEvent } from '@actions';
import ColorPicker from '@components/picker/color';
import Dropdown from '@components/widget/dropdown';

const FIELDS = {
    one : {
        inputInnerStyle : null,
        inputType : "input",
        descriptions : ["내용을 한 줄로만 작성할 수 있습니다.", "새로운 글자가 추가되면 글상자의 좌우 길이가 길어집니다."]
    },
    multi : {
        inputInnerStyle : { height: 228 + 'px' },
        inputType : "textarea",
        descriptions : ["내용 작성 시 엔터키로 줄바꿈을 할 수 있습니다.", "글상자의 크기가 글자가 쓰일 수 있는 영역을 결정 합니다.", "새로운 글자 추가 시 문장의 길이가 글상자의 기로 영역을 넘어가면 자동으로 줄이 바뀝니다."]

    }
};

const handle = (e, cb) => {
    e.preventDefault();
    cb();
};

class Input extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false,
            text: ''
        };

        this.onInputBlur = this.onInputBlur.bind(this);
    }

    onInputBlur(e) {
        e.preventDefault();
        if (e.currentTarget.lastElementChild.value === '') {
            this.setState({ active: false });
        }
        const text = e.currentTarget.lastElementChild.value;
        this.setState({ text });
        this.props.onChange(text);
    }

    getFontStyle() {
        let css = { fontFamily: this.props.font.family };
        Object.keys(this.props.effects).forEach(key => {
            const effect = this.props.effects[key];
            if (effect.apply) {
                if (effect.css.hasOwnProperty('textDecorationLine') && css.textDecorationLine) {
                    css.textDecorationLine = css.textDecorationLine + ' ' + effect.css.textDecorationLine;
                } else {
                    css = { ...css, ...effect.css };
                }
            }
        });
        return css;
    }

    render() {
        const filed = FIELDS[this.props.writeType];
        return (
            <div className={Styles.input_box}>
                <div className={Styles.input_inner} style={filed.inputInnerStyle} onFocus={e=>handle(e, ()=>this.setState({ active: true }))} onBlur={this.onInputBlur}>
                    {/* input에 포커스가 가거나 글자가 들어가면 label을 display: none 처리 해주세요 */}
                    <label htmlFor="inpt" style={{ display: CommonUtils.toggleClass(this.state.active, 'none') }}>
                        글상자의 내용을 입력하세요.
                    </label>
                    <filed.inputType type="text" id="inpt" name="inpt" defaultValue={this.state.text} style={this.getFontStyle()}/>
                </div>
                <ul className={Styles.list}>
                    {filed.descriptions.map((description, index) => <li key={index}>{description}</li>)}
                </ul>
            </div>
        );
    }
}

class WriteBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            writeType: 'one',
            effects: this.props.fontOption.EFFECTS,
            fonts: this.props.fontOption.FONTS,
            font: this.props.fontOption.FONTS[0],
        };

        this.onEffectBtnClicked = this.onEffectBtnClicked.bind(this);
        this.onFontBoxClicked = this.onFontBoxClicked.bind(this);
        this.onSubmitBtnClicked = this.onSubmitBtnClicked.bind(this);
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

    createColorPicker(target, color, effects, effectName) {
        return (<ColorPicker color={color}
                             positionDom={target}
                             onOutsideClick={e=>{this.setState({colorPicker:null})}}
                             onChangeColorPicker={color => {
                                 effects[effectName].apply = true;
                                 effects[effectName].css = { [effectName]: color };
                                 this.setState({ effects });
                             }}/>);
    }

    onEffectBtnClicked(e) {
        e.preventDefault();
        const effectName = e.target.getAttribute('data-effect');
        if (!effectName) {
            return;
        }
        const effects = this.state.effects;
        const effect = effects[effectName];
        switch (effectName) {
            case 'backgroundColor':
            case 'color':
                const colorPicker = this.createColorPicker(e.target, effect.css[effectName], effects, effectName);
                this.setState({ colorPicker });
                break;
            default:
                effect.apply = !effect.apply;
                break;
        }
        effects[effectName] = effect;
        this.setState({ effects });
    }

    onFontBoxClicked(e) {
        e.preventDefault();
        const dropDown = <Dropdown items={this.state.fonts.map((font, index)=> [font.name, index])}
                                   positionDom={e.target}
                                   onSelectDropdown={(font)=>{
                                       this.setState({font : this.state.fonts[font[1]]});
                                       this.setState({ dropDown: null });
                                   }}
                                   onOutsideClick={e=>{this.setState({dropDown:null})}}/>;
        this.setState({ dropDown });
    }

    onSubmitBtnClicked(e) {
        const effects = Object.keys(this.state.effects).reduce((effects, name) => {
            switch (name) {
                case 'backgroundColor':
                case 'color':
                    effects[name] = this.state.effects[name].css[name];
                    break;
                default:
                    effects[name] = this.state.effects[name].apply;
                    break;
            }
            return effects;
        }, {});

        const result =  {
            text: this.state.text,
            effects: effects,
            font: this.state.font,
            writeType: this.state.writeType,
        };

        this.props.triggerEvent('write', result);
    }

    render() {
        return (
            <React.Fragment>
                <section className={Styles.pop_content}>
                    <div className={Styles.section_cont}>
                        {/* [D] 메뉴 카테고리 선택에 따라 텍스트 변경  */}
                        <h2 className={Styles.blind}>글상자</h2>
                        <div className={Styles.cont_box}>
                            <div className={Styles.write_box}>
                                <div className={Styles.write_set}>
                                    <div className={Styles.pop_selectbox}>
                                        <a href="#NULL" className={`${Styles.select_link} ${CommonUtils.toggleClass(this.state.dropDown, Styles.imico_pop_select_arr_up, Styles.imico_pop_select_arr_down)}`} onClick={this.onFontBoxClicked} title="글꼴">
                                            {this.state.font.name}
                                        </a>
                                    </div>

                                    <div className={Styles.font_style_box} onClick={this.onEffectBtnClicked}>
                                        {this.drawEffects()}
                                    </div>
                                    <div className={Styles.write_type_box}>
                                        {/* 링크가 클릭되면 on 클래스 토글 */}
                                        <a href="#NULL" className={CommonUtils.toggleClass(this.state.writeType === 'one', Styles.on)} onClick={e=>{handle(e, ()=>this.setState({ writeType: "one" }))}}>한줄쓰기</a>
                                        <a href="#NULL" className={CommonUtils.toggleClass(this.state.writeType === 'multi', Styles.on)} onClick={e=>{handle(e, ()=>this.setState({ writeType: "multi" }))}}>여러 줄 쓰기</a>
                                    </div>
                                </div>
                                <Input writeType={this.state.writeType} font={this.state.font} effects={this.state.effects} onChange={(text)=>{this.setState({text})}}/>
                            </div>
                        </div>
                    </div>
                    {this.state.colorPicker}
                    {this.state.dropDown}
                </section>
                <div className={Styles.pop_btn_box}>
                    <a href="#NULL" onClick={e => this.props.triggerEvent('close', null, true)}>취소</a>
                    <a href="#NULL" className={Styles.active} onClick={this.onSubmitBtnClicked}>추가하기</a>
                </div>
            </React.Fragment>
        );
    }
}


const mapDispatchToProps = (dispatch) => ({
    triggerEvent: (event, data) => dispatch(triggerEvent(event, data)),
});

export default connect(
    null,
    mapDispatchToProps,
)(WriteBox);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CommonUtils } from '@utils/Common';
import Styles from '@assets/scss/popup.scss';
import { triggerEvent } from '@actions';
import ColorPicker from '@components/picker/color';
import Dropdown from '@components/widget/dropdown';
import { EMIT_TYPES } from '@constants';
import _cloneDeep from 'lodash/cloneDeep';

/* eslint-disable array-element-newline */
const FIELDS = {
    one: {
        inputInnerStyle: null,
        inputType: 'input',
        descriptions: ['Menus.linebreak_off_desc_2', 'Menus.linebreak_off_desc_3'],
    },
    multi: {
        inputInnerStyle: { height: '228px' },
        inputType: 'textarea',
        descriptions: [
            'Menus.linebreak_on_desc_2',
            'Menus.linebreak_on_desc_1',
            'Menus.linebreak_on_desc_3',
        ],
    },
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
            text: '',
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
        Object.keys(this.props.effects).forEach((key) => {
            const effect = this.props.effects[key];
            if (effect.apply) {
                /* eslint-disable no-prototype-builtins */
                if (effect.css.hasOwnProperty('textDecorationLine') && css.textDecorationLine) {
                    css.textDecorationLine = `${css.textDecorationLine} ${
                        effect.css.textDecorationLine
                        }`;
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
                <div
                    className={Styles.input_inner}
                    onFocus={(e) => handle(e, () => this.setState({ active: true }))}
                    onBlur={this.onInputBlur}
                >
                    {/* input에 포커스가 가거나 글자가 들어가면 label을 display: none 처리 해주세요 */}
                    <label
                        htmlFor="inpt"
                        style={{ display: CommonUtils.toggleClass(this.state.active, 'none') }}
                    >
                        {CommonUtils.getLang('Workspace.textbox_input')}
                    </label>
                    <filed.inputType
                        type="text"
                        id="inpt"
                        name="inpt"
                        defaultValue={this.state.text}
                        style={this.getFontStyle()}
                    />
                </div>
                <ul className={Styles.list}>
                    {filed.descriptions.map((description, index) => (
                        <li key={index}>{CommonUtils.getLang(description)}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

class WriteBox extends Component {
    constructor(props) {
        super(props);

        this.fonts = CommonUtils.getFonts();
        this.state = {
            writeType: 'one',
            effects: _cloneDeep(this.props.fontOption.EFFECTS),
            fonts: this.fonts,
            font: this.fonts[0],
        };

        this.onEffectBtnClicked = this.onEffectBtnClicked.bind(this);
        this.onFontBoxClicked = this.onFontBoxClicked.bind(this);
        this.onSubmitBtnClicked = this.onSubmitBtnClicked.bind(this);
    }

    drawEffects() {
        return Object.keys(this.state.effects).map((key) => {
            const effect = this.state.effects[key];
            const className = `${Styles.style_link} ${
                Styles[`imbtn_pop_font_${key.toLowerCase()}`]
                } ${CommonUtils.toggleClass(effect.apply, Styles.on)}`;
            return (
                <a
                    href="#NULL"
                    key={key}
                    className={className}
                    data-effect={key}
                    title={effect.text}
                >
                    <span className="blind">글자 {effect.text}</span>
                </a>
            );
        });
    }

    createColorPicker(target, color, effects, effectName) {
        return (
            <ColorPicker
                color={color}
                positionDom={target}
                onOutsideClick={() => {
                    this.setState({ colorPicker: null });
                }}
                onChangeColorPicker={(color) => {
                    effects[effectName].apply = true;
                    effects[effectName].css = { [effectName]: color };
                    this.setState({ effects });
                }}
            />
        );
    }

    onEffectBtnClicked(e) {
        e.preventDefault();
        const effectName = e.target.getAttribute('data-effect');
        if (!effectName) {
            return;
        }
        const effects = this.state.effects;
        const effect = effects[effectName];
        /* eslint-disable no-case-declarations */
        switch (effectName) {
            case 'backgroundColor':
            case 'color':
                const colorPicker = this.createColorPicker(
                    e.target,
                    effect.css[effectName],
                    effects,
                    effectName
                );
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
        const dropDown = (
            <Dropdown
                items={this.state.fonts.map((font, index) => [font.name, index])}
                positionDom={e.target}
                onSelectDropdown={(font) => {
                    this.setState({ font: this.state.fonts[font[1]] });
                    this.setState({ dropDown: null });
                }}
                onOutsideClick={() => {
                    this.setState({ dropDown: null });
                }}
            />
        );
        this.setState({ dropDown });
    }

    onSubmitBtnClicked(e) {
        e.preventDefault();
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

        const result = {
            effects,
            text: this.state.text,
            font: this.state.font,
            writeType: this.state.writeType,
        };

        this.props.triggerEvent(EMIT_TYPES.write, result);
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
                                        <a
                                            href="#NULL"
                                            className={`${
                                                Styles.select_link
                                                } ${CommonUtils.toggleClass(
                                                    this.state.dropDown,
                                                    Styles.imico_pop_select_arr_up,
                                                    Styles.imico_pop_select_arr_down
                                                )}`}
                                            onClick={this.onFontBoxClicked}
                                            title="글꼴"
                                        >
                                            {this.state.font.name}
                                        </a>
                                    </div>

                                    <div
                                        className={Styles.font_style_box}
                                        onClick={this.onEffectBtnClicked}
                                    >
                                        {this.drawEffects()}
                                    </div>
                                    <div className={Styles.write_type_box}>
                                        {/* 링크가 클릭되면 on 클래스 토글 */}
                                        <a
                                            href="#NULL"
                                            className={CommonUtils.toggleClass(
                                                this.state.writeType === 'one',
                                                Styles.on
                                            )}
                                            onClick={(e) => {
                                                handle(e, () =>
                                                    this.setState({ writeType: 'one' })
                                                );
                                            }}
                                        >
                                            {CommonUtils.getLang('Buttons.single_line')}
                                        </a>
                                        <a
                                            href="#NULL"
                                            className={CommonUtils.toggleClass(
                                                this.state.writeType === 'multi',
                                                Styles.on
                                            )}
                                            onClick={(e) => {
                                                handle(e, () =>
                                                    this.setState({ writeType: 'multi' })
                                                );
                                            }}
                                        >
                                            {CommonUtils.getLang('Buttons.multi_line')}
                                        </a>
                                    </div>
                                </div>
                                <Input
                                    writeType={this.state.writeType}
                                    font={this.state.font}
                                    effects={this.state.effects}
                                    onChange={(text) => {
                                        this.setState({ text });
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    {this.state.colorPicker}
                    {this.state.dropDown}
                </section>
                <div className={Styles.pop_btn_box}>
                    <a
                        href="#NULL"
                        onClick={(e) => {
                            e.preventDefault();
                            this.props.triggerEvent(EMIT_TYPES.close, null, true);
                        }}
                    >
                        {CommonUtils.getLang('Buttons.cancel')}
                    </a>
                    <a href="#NULL" className={Styles.active} onClick={this.onSubmitBtnClicked}>
                        {CommonUtils.getLang('Buttons.apply')}
                    </a>
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
    mapDispatchToProps
)(WriteBox);

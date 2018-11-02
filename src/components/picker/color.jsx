import React, { Component } from 'react';
import chroma from 'chroma-js';
import { Object } from 'core-js';
import Styles from '../../assets/scss/popup.scss';
import { debounce } from 'lodash';
// import { EFAULT } from 'constants';

function getColorByHsv({ red, green, blue }) {
    const color = chroma(red, green, blue);
    let [hue, saturation, brightness] = color.hsv();
    if (isNaN(hue)) {
        hue = 0;
    }
    return {
        red,
        green,
        blue,
        hue: Math.round(hue / 3.6),
        saturation: Math.round(saturation * 100),
        brightness: Math.round(brightness * 100),
        color: color.hex(),
    };
}

function getColorByRGB({ hue, saturation, brightness }) {
    const color = chroma.hsv(hue * 3.6, saturation / 100, brightness / 100);
    const [red, green, blue] = color.rgb();
    return {
        red,
        green,
        blue,
        hue,
        saturation,
        brightness,
        color: color.hex(),
    };
}

function getColorByHex(hex) {
    const color = chroma(hex);
    const [red, green, blue] = color.rgb();
    let [hue, saturation, brightness] = color.hsv();
    hue = hue || 0;
    saturation = saturation || 0;
    brightness = brightness || 0;
    return {
        red,
        green,
        blue,
        hue: Math.round(hue / 3.6),
        saturation: Math.round(saturation * 100),
        brightness: Math.round(brightness * 100),
        color: hex,
    };
}

function setScaleRatioX(value) {
    return Math.round(value * 1.77);
}

class ColorPicker extends Component {
    get SCALE_RATIO_X() {
        return 1.77;
    }

    get PICKER_WIDTH() {
        return 398;
    }

    get PICKER_WIDTH_MARGIN() {
        return 25;
    }

    get MAX_ARROW_POSITION() {
        return 366;
    }

    get PICKER_HEIGHT() {
        return 248;
    }

    get SLIDER_SIZE() {
        return 28;
    }

    state = {
        hue: 0,
        saturation: 100,
        brightness: 100,
        red: 255,
        green: 0,
        blue: 0,
        color: '#ff0000',
        arrowLeft: this.MAX_ARROW_POSITION / 2,
    };
    constructor(props) {
        super(props);
        const { color, ColorPickAction } = props;
        if (color) {
            this.state = getColorByHex(color);
            ColorPickAction(this.state.color);
        }
    }
    hueGradient() {
        return {
            background: `linear-gradient(
                to right,
                hsl(0, 100%, 50%) 0%,
                hsl(36, 100%, 50%) 10%,
                hsl(72, 100%, 50%) 20%,
                hsl(108, 100%, 50%) 30%,
                hsl(144, 100%, 50%) 40%,
                hsl(180, 100%, 50%) 50%,
                hsl(216, 100%, 50%) 60%,
                hsl(252, 100%, 50%) 70%,
                hsl(288, 100%, 50%) 80%,
                hsl(324, 100%, 50%) 90%,
                hsl(360, 100%, 50%) 100%
            )`,
        };
    }
    saturationGradient() {
        const { hue } = this.state;
        const hueValue = hue * 3.6;
        const start = chroma.hsv(hueValue, 0, 1);
        const end = chroma.hsv(hueValue, 1, 1);
        return {
            background: `linear-gradient(
                to right,
                ${start.css()} 0%,
                ${end.css()} 100%
            )`,
        };
    }
    brightnessGradient() {
        const { hue } = this.state;
        const hueValue = hue * 3.6;
        const start = chroma.hsv(hueValue, 1, 0);
        const end = chroma.hsv(hueValue, 1, 1);
        return {
            background: `linear-gradient(
                to right,
                ${start.css()} 0%,
                ${end.css()} 100%
            )`,
        };
    }
    resultBackground() {
        const { hue, saturation, brightness } = this.state;
        const hueValue = hue * 3.6;
        return {
            background: chroma.hsv(hueValue, saturation / 100, brightness / 100).css(),
        };
    }

    handleChangeHsv(type, value) {
        const { ColorPickAction } = this.props;
        value = parseInt(value, 10);
        this.setState((state) => {
            const hsv = Object.assign({}, state, { [type]: value });
            const nextState = getColorByRGB(hsv);
            ColorPickAction(nextState.color);
            return nextState;
        });
    }

    handleChangeRGB(type, target) {
        const { ColorPickAction } = this.props;
        let { value = 0 } = target;
        value = parseInt(value, 10);
        this.setState((state) => {
            const rgb = Object.assign({}, state, { [type]: value });
            const nextState = getColorByHsv(rgb);
            ColorPickAction(nextState.color);
            return nextState;
        });
    }

    handleSliderMove = (e) => {
        if (this.canMoveCapture) {
            const { clientX } = e;
            let result = (clientX - this.sliderStartX) / this.SCALE_RATIO_X + this.sliderValue;
            result = Math.round(Math.max(Math.min(result, 100), 0));
            this.handleChangeHsv(this.sliderType, result);
        }
    };

    handleSliderUp = () => {
        this.canMoveCapture = false;
        this.setState(() => {
            return {
                isActiveSlider: null,
            };
        });
    };
    handleWindowResize = debounce(() => {
        this.alignPosition();
    }, 300);

    handleSliderBarClick(e, type) {
        const { clientX, target } = e;
        const { left = 0 } = target.getBoundingClientRect() || {};
        let result = (clientX - left - this.SLIDER_SIZE / 2) / this.SCALE_RATIO_X;
        result = Math.round(Math.max(Math.min(result, 100), 0));
        this.handleChangeHsv(type, result);
    }

    componentDidMount() {
        document.addEventListener('mousemove', this.handleSliderMove);
        document.addEventListener('mouseup', this.handleSliderUp);
        window.addEventListener('resize', this.handleWindowResize);
        this.alignPosition();
    }

    componentWillUnmount() {
        document.removeEventListener('mousemove', this.handleSliderMove);
        document.removeEventListener('mouseup', this.handleSliderUp);
        window.removeEventListener('resize', this.handleWindowResize);
    }

    handleSliderMouseDown(e, type) {
        const { nativeEvent = {} } = e;
        const { clientX } = nativeEvent;
        this.canMoveCapture = true;
        this.sliderStartX = clientX;
        this.sliderType = type;
        this.sliderValue = this.state[type];
        this.setState(() => {
            return {
                isActiveSlider: type,
            };
        });
    }

    alignPosition() {
        const { innerHeight, innerWidth } = window;
        const [transX, transY] = this.getTranslate3d(this.colorPicker);
        const thisRect = this.colorPicker.getBoundingClientRect();
        let { left, top } = thisRect;
        // console.log(top, transY, innerHeight);
        left += this.PICKER_WIDTH + this.PICKER_WIDTH_MARGIN - transX;
        top += -transY;
        const x = left > innerWidth ? left - innerWidth : 0;
        const y = top > innerHeight ? top - innerHeight : 0;
        const arrowLeft = Math.max(
            Math.min(x + this.MAX_ARROW_POSITION / 2, this.MAX_ARROW_POSITION),
            0
        );
        this.setState(() => {
            return {
                arrowLeft,
                transform: `translate3d(-${x}px, -${y}px, 0)`,
            };
        });
    }

    getTranslate3d(el) {
        var values = el.style.transform.split(/\w+\(|\);?/);
        if (!values[1] || !values[1].length) {
            return [0, 0, 0];
        }
        return values[1].split(/,\s?/g).map((value) => {
            return parseInt(value, 10);
        });
    }

    makeColorPickerStyle() {
        const { positionDom, marginRect } = this.props;
        const { transform } = this.state;
        const parentRect = positionDom ? positionDom.getBoundingClientRect() : {};
        const { marginLeft = 0, marginTop = 0 } = marginRect;
        let { left = 0, top = 0 } = parentRect;
        left -= this.PICKER_WIDTH / 2 + marginLeft;
        top -= this.PICKER_HEIGHT + marginTop;
        return {
            left,
            top,
            transform,
            position: 'fixed',
            transition: 'all ease .3s',
        };
    }

    render() {
        const { className } = this.props;
        const {
            hue,
            saturation,
            brightness,
            red,
            green,
            blue,
            isActiveSlider,
            arrowLeft,
        } = this.state;
        return (
            <div
                ref={(dom) => {
                    this.colorPicker = dom;
                }}
                className={`${Styles.popup_wrap} ${className}`}
                style={this.makeColorPickerStyle()}
            >
                <div className={`${Styles.tooltip_box} ${Styles.color_picker} ${Styles.up}`}>
                    <div className={`${Styles.tooltip_inner}`}>
                        <div className={`${Styles.color_box}`}>
                            <span
                                className={`${Styles.color} ${Styles.imico_pop_circle_check}`}
                                style={this.resultBackground()}
                            />
                            <ul className={`${Styles.color_list}`}>
                                <li className={`${Styles.item}`}>
                                    <label htmlFor="red">빨강(R)</label>
                                    <input
                                        value={red}
                                        type="number"
                                        min="0"
                                        max="255"
                                        onChange={({ target }) => {
                                            this.handleChangeRGB('red', target);
                                        }}
                                        id="red"
                                        name="red"
                                    />
                                    <div className={`${Styles.graph}`} />
                                </li>
                                <li className={`${Styles.item}`}>
                                    <label htmlFor="green">녹색(G)</label>
                                    <input
                                        value={green}
                                        type="number"
                                        min="0"
                                        max="255"
                                        onChange={({ target }) => {
                                            this.handleChangeRGB('green', target);
                                        }}
                                        id="green"
                                        name="green"
                                    />
                                </li>
                                <li className={`${Styles.item}`}>
                                    <label htmlFor="blue">파랑(B)</label>
                                    <input
                                        value={blue}
                                        type="number"
                                        min="0"
                                        max="255"
                                        onChange={({ target }) => {
                                            this.handleChangeRGB('blue', target);
                                        }}
                                        id="blue"
                                        name="blue"
                                    />
                                </li>
                            </ul>
                        </div>
                        <div className={`${Styles.color_graph}`}>
                            <ul className={`${Styles.graph_list}`}>
                                <li className={`${Styles.item}`}>
                                    <label htmlFor="hue">색상</label>
                                    <input
                                        value={hue}
                                        type="number"
                                        min="0"
                                        max="100"
                                        onChange={({ target }) => {
                                            const { value = 0 } = target;
                                            this.handleChangeHsv('hue', value);
                                        }}
                                        id="hue"
                                        name="hue"
                                    />
                                    <div className={`${Styles.graph_box}`}>
                                        <span
                                            className={`${Styles.slider} ${
                                                Styles.btn_pop_color_slide
                                            } ${isActiveSlider === 'hue' ? Styles.on : ''}`}
                                            onMouseDown={(e) => {
                                                this.handleSliderMouseDown(e, 'hue');
                                            }}
                                            style={{ left: setScaleRatioX(hue) + 'px' }}
                                        />
                                        <div
                                            className={`${Styles.bar}`}
                                            style={this.hueGradient()}
                                            onClick={(e) => {
                                                this.handleSliderBarClick(e, 'hue');
                                            }}
                                        />
                                    </div>
                                </li>
                                <li className={`${Styles.item}`}>
                                    <label htmlFor="saturation">채도</label>
                                    <input
                                        value={saturation}
                                        type="number"
                                        min="0"
                                        max="100"
                                        onChange={({ target }) => {
                                            const { value = 0 } = target;
                                            this.handleChangeHsv('saturation', value);
                                        }}
                                        id="saturation"
                                        name="saturation"
                                    />
                                    <div className={`${Styles.graph_box}`}>
                                        <span
                                            className={`${Styles.slider} ${
                                                Styles.btn_pop_color_slide
                                            } ${isActiveSlider === 'saturation' ? Styles.on : ''}`}
                                            onMouseDown={(e) => {
                                                this.handleSliderMouseDown(e, 'saturation');
                                            }}
                                            style={{ left: setScaleRatioX(saturation) + 'px' }}
                                        />
                                        <div
                                            className={`${Styles.bar}`}
                                            style={this.saturationGradient()}
                                            onClick={(e) => {
                                                this.handleSliderBarClick(e, 'saturation');
                                            }}
                                        />
                                    </div>
                                </li>
                                <li className={`${Styles.item}`}>
                                    <label htmlFor="saturation">명도</label>
                                    <input
                                        value={brightness}
                                        type="number"
                                        min="0"
                                        max="100"
                                        onChange={({ target }) => {
                                            const { value = 0 } = target;
                                            this.handleChangeHsv('brightness', value);
                                        }}
                                        id="lightness"
                                        name="lightness"
                                    />
                                    <div className={`${Styles.graph_box}`}>
                                        <span
                                            className={`${Styles.slider} ${
                                                Styles.btn_pop_color_slide
                                            } ${isActiveSlider === 'brightness' ? Styles.on : ''}`}
                                            onMouseDown={(e) => {
                                                this.handleSliderMouseDown(e, 'brightness');
                                            }}
                                            style={{ left: setScaleRatioX(brightness) + 'px' }}
                                        />
                                        <div
                                            className={`${Styles.bar}`}
                                            style={this.brightnessGradient()}
                                            onClick={(e) => {
                                                this.handleSliderBarClick(e, 'brightness');
                                            }}
                                        />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* left 값 조절로 화살표 위치 잡을 수 있습니다. */}
                    <span
                        className={`${Styles.arr} ${Styles.free}`}
                        style={{ left: arrowLeft + 'px' }}
                    >
                        <i />
                    </span>
                </div>
            </div>
        );
    }
}

export default ColorPicker;

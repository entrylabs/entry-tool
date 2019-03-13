import React, { Component } from 'react';
import chroma from 'chroma-js';
import Styles from '../../assets/scss/popup.scss';
import { pure } from 'recompose';
import root from 'window-or-global';
import { COLOR_PICKER_MODE } from '../../constants';
import memoize from 'lodash/memoize';

function getColorByHsv({ red, green, blue }) {
    const color = chroma(red, green, blue);
    /* eslint-disable prefer-const */
    let [hue, saturation, brightness] = color.hsv();
    if (isNaN(hue)) {
        hue = 0;
    }
    return {
        red,
        green,
        blue,
        hue: Math.round(hue),
        saturation: Math.round(saturation * 100),
        brightness: Math.round(brightness * 100),
        color: color.hex(),
    };
}

function getColorByRGB({ hue, saturation, brightness }) {
    const color = chroma.hsv(hue, saturation / 100, brightness / 100);
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

function getColorByHex(value) {
    let hex = '';
    let isTransparent = false;
    if (value === 'transparent') {
        hex = 'rgba(255, 0, 0, 0)';
        isTransparent = true;
    } else {
        hex = value;
    }
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
        isTransparent,
        hue: Math.round(hue),
        saturation: Math.round(saturation * 100),
        brightness: Math.round(brightness * 100),
        color: value,
    };
}

function setScaleRatioX(value, ratio = 1) {
    return Math.round(value * 1.77 * ratio);
}

function getRangeValue(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

function getClassifyEvent(e) {
    let event = null;
    if (root.TouchEvent && e instanceof root.TouchEvent) {
        event = e.changedTouches[0];
    } else {
        event = e;
    }
    return event;
}

function handleTouchPreventDefault(e) {
    e.preventDefault();
}

const metaRgbContoller = [
    {
        label: '빨강(R)',
        key: 'red',
    },
    {
        label: '녹색(G)',
        key: 'green',
    },
    {
        label: '파랑(B)',
        key: 'blue',
    },
];

const metaHSVContoller = [
    {
        label: '색상',
        key: 'hue',
    },
    {
        label: '채도',
        key: 'saturation',
    },
    {
        label: '명도',
        key: 'brightness',
    },
];

class ColorPicker extends Component {
    get SCALE_RATIO_X() {
        return 1.77;
    }

    get SCALE_RATIO_X_BY_HUE() {
        return 177 / 360;
    }

    getScaleRatioX = memoize((type) => {
        if (type === 'hue') {
            return this.SCALE_RATIO_X_BY_HUE;
        } else {
            return this.SCALE_RATIO_X;
        }
    });

    constructor(props) {
        super(props);
        const { color, onChangeColor, lastColor } = props;
        let state = {
            isTransparent: false,
        };
        if (color) {
            state.originColor = lastColor || color;
            Object.assign(state, getColorByHex(lastColor || color));
            if (onChangeColor) {
                onChangeColor(state.color);
            }
        }
        this.state = state;
    }

    static getDerivedStateFromProps({ color, onChangeColor, lastColor }, { originColor }) {
        if (lastColor && lastColor !== color) {
            return Object.assign(
                {
                    originColor: color,
                },
                getColorByHex(lastColor)
            );
        }
        if (color !== originColor) {
            if (onChangeColor) {
                onChangeColor(color);
            }
            return Object.assign(
                {
                    originColor: color,
                },
                getColorByHex(color)
            );
        }

        return null;
    }

    getGradientBackground(type) {
        if (type === 'hue') {
            return this.hueGradient();
        } else if (type === 'saturation') {
            return this.saturationGradient();
        } else {
            return this.brightnessGradient();
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
        const hueValue = hue;
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
        const hueValue = hue;
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
        const hueValue = hue;
        return {
            background: chroma.hsv(hueValue, saturation / 100, brightness / 100).css(),
        };
    }

    handleBlurHsv(type, value = 0) {
        let result = value;
        if (typeof value === 'string' && !value.length) {
            result = 0;
        }
        this.handleChangeHsv(type, result);
    }

    handleChangeHsv(type, value) {
        if (typeof value === 'string' && !value.length) {
            return this.setState(() => {
                return {
                    [type]: value,
                };
            });
        }
        const { onChangeColor } = this.props;
        let max = type === 'hue' ? 360 : 100;
        let thisValue = Number(value);
        thisValue = getRangeValue(parseInt(thisValue, 10), 0, max);
        if (!isNaN(thisValue)) {
            this.setState((state) => {
                const hsv = Object.assign({}, state, { [type]: thisValue });
                const nextState = getColorByRGB(hsv);
                const { color: updateColor } = nextState;
                onChangeColor(updateColor);
                return nextState;
            });
        }
    }

    handleBlurRGB(type, value = 0) {
        let result = value;
        if (typeof value === 'string' && !value.length) {
            result = 0;
        }
        this.handleChangeRGB(type, result);
    }

    handleChangeRGB(type, value) {
        if (typeof value === 'string' && !value.length) {
            return this.setState(() => {
                return {
                    [type]: value,
                };
            });
        }
        const { onChangeColor } = this.props;
        let thisValue = Number(value);
        thisValue = getRangeValue(parseInt(thisValue, 10), 0, 255);
        if (!isNaN(thisValue)) {
            this.setState((state) => {
                const rgb = Object.assign({}, state, { [type]: thisValue });
                const nextState = getColorByHsv(rgb);
                const { color: updateColor } = nextState;
                onChangeColor(updateColor);
                return nextState;
            });
        }
    }

    handleSliderMove = (e) => {
        if (this.canMoveCapture) {
            e.preventDefault();
            let event = getClassifyEvent(e);
            const target = this.moveCaptureTarget || {};
            const { dataset } = target || {};
            const { type } = dataset || {};
            const { clientX } = event;
            let result =
                (clientX - this.sliderStartX) / this.getScaleRatioX(type) + this.sliderValue;
            let max = type === 'hue' ? 360 : 100;
            result = Math.round(getRangeValue(result, 0, max));
            this.handleChangeHsv(this.sliderType, result);
        }
    };

    handleSliderUp = () => {
        document.removeEventListener('touchmove', handleTouchPreventDefault);
        this.canMoveCapture = false;
        this.setState(() => {
            return {
                isActiveSlider: null,
            };
        });
    };

    handleColorClick = () => {
        const { onChangeColor, canTransparent, defaultColor = '#FF0000' } = this.props;
        if (canTransparent) {
            this.setState(({ isTransparent, color }) => {
                let colorValue = '';
                let colorObj = {};
                if (!isTransparent) {
                    colorValue = 'transparent';
                } else if (isTransparent && color && color !== 'transparent') {
                    colorValue = color;
                } else {
                    colorValue = defaultColor;
                    colorObj = getColorByHex(colorValue);
                }

                onChangeColor(colorValue);
                return {
                    ...colorObj,
                    isTransparent: !isTransparent,
                };
            });
        }
    };

    handleSliderBarClick(e, type) {
        const { clientX, target } = e;
        const { left = 0 } = target.getBoundingClientRect() || {};
        let result = (clientX - left - this.SLIDER_SIZE / 2) / this.getScaleRatioX(type);
        result = Math.round(Math.max(Math.min(result, 100), 0));
        this.handleChangeHsv(type, result);
    }

    componentDidMount() {
        document.addEventListener('mousemove', this.handleSliderMove);
        document.addEventListener('mouseup', this.handleSliderUp);
        document.addEventListener('touchmove', this.handleSliderMove, { passive: false });
        document.addEventListener('touchend', this.handleSliderUp);
    }

    componentWillUnmount() {
        document.removeEventListener('mousemove', this.handleSliderMove);
        document.removeEventListener('mouseup', this.handleSliderUp);
        document.removeEventListener('touchmove', this.handleSliderMove);
        document.removeEventListener('touchend', this.handleSliderUp);
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return !isEqual(this.state, nextState);
    // }

    handleSliderMouseDown(e, type) {
        const { nativeEvent = {} } = e;
        const { clientX } = getClassifyEvent(nativeEvent);
        document.addEventListener('touchmove', handleTouchPreventDefault, { passive: false });
        this.canMoveCapture = true;
        this.moveCaptureTarget = e.target;
        this.sliderStartX = clientX;
        this.sliderType = type;
        this.sliderValue = this.state[type];
        this.setState(() => {
            return {
                isActiveSlider: type,
            };
        });
    }

    getTranslate3d(el) {
        const values = el.style.transform.split(/\w+\(|\);?/);
        if (!values[1] || !values[1].length) {
            return [0, 0, 0];
        }
        return values[1].split(/,\s?/g).map((value) => {
            return parseInt(value, 10);
        });
    }

    makeHSVController() {
        const { isTransparent, isActiveSlider } = this.state;
        let itemClassName = isTransparent ? Styles.disabled : '';
        return metaHSVContoller.map(({ key, label }) => {
            let max = 100;
            let ratio = 1;
            if (key === 'hue') {
                max = 360;
                ratio = 100 / 360;
            }
            return (
                <li key={key} className={`${Styles.item} ${itemClassName}`}>
                    <label htmlFor={key}>{label}</label>
                    <input
                        value={String(this.state[key])}
                        type="number"
                        min="0"
                        max={max}
                        onChange={({ target }) => {
                            const { value = 0 } = target;
                            this.handleChangeHsv(key, value);
                        }}
                        onBlur={({ target }) => {
                            const { value = 0 } = target;
                            this.handleBlurHsv(key, value);
                        }}
                        id={key}
                        name={key}
                        disabled={isTransparent}
                    />
                    <div className={`${Styles.graph_box}`} touch-action="none">
                        <span
                            data-type={key}
                            data-my-type={key}
                            className={`${Styles.slider} ${Styles.btn_pop_color_slide} ${
                                isActiveSlider === key ? Styles.on : ''
                            }`}
                            onMouseDown={(e) => {
                                !isTransparent && this.handleSliderMouseDown(e, key);
                            }}
                            onTouchStart={(e) => {
                                !isTransparent && this.handleSliderMouseDown(e, key);
                            }}
                            style={{ left: `${setScaleRatioX(this.state[key], ratio)}px` }}
                        />
                        <div
                            className={`${Styles.bar}`}
                            style={this.getGradientBackground(key)}
                            onMouseDown={(e) => {
                                !isTransparent && this.handleSliderBarClick(e, key);
                            }}
                            onTouchStart={(e) => {
                                !isTransparent && this.handleSliderBarClick(e, key);
                            }}
                        />
                    </div>
                </li>
            );
        });
    }
    makeRGBController() {
        const { isTransparent } = this.state;
        let itemClassName = '';
        if (isTransparent) {
            itemClassName = Styles.disabled;
        }

        return metaRgbContoller.map(({ label, key }) => {
            return (
                <li key={key} className={`${Styles.item} ${itemClassName}`}>
                    <label htmlFor={key}>{label}</label>
                    <input
                        value={String(this.state[key])}
                        type="number"
                        min="0"
                        max="255"
                        onChange={({ target }) => {
                            const { value } = target;
                            this.handleChangeRGB(key, value);
                        }}
                        onBlur={({ target }) => {
                            const { value } = target;
                            this.handleBlurRGB(key, value);
                        }}
                        id={key}
                        name={key}
                        disabled={isTransparent}
                    />
                    <div className={`${Styles.graph}`} />
                </li>
            );
        });
    }

    render() {
        const {
            onSpoidClick,
            canSpoide,
            canTransparent,
            activeSpoid,
            onChangePickerMode,
        } = this.props;
        const { isTransparent } = this.state;
        let colorClassName = '';
        let colorBackground = null;
        let transparentEnableClassName = canTransparent ? '' : Styles.disabled;
        if (isTransparent) {
            colorClassName = `${Styles.imico_pop_color_uncheck} ${Styles.imico_pop_circle_check}`;
        } else {
            colorClassName = Styles.imico_pop_circle_check_on;
            colorBackground = this.resultBackground();
        }
        return (
            <div className={Styles.colorSlider}>
                <div
                    className={Styles.colorSwatchesButton}
                    onClick={() => {
                        onChangePickerMode(COLOR_PICKER_MODE.SWATCHES);
                    }}
                />
                <div className={`${Styles.tooltip_inner}`}>
                    <div className={`${Styles.color_box}`}>
                        <span
                            className={`${
                                Styles.color
                            } ${colorClassName} ${transparentEnableClassName}`}
                            style={colorBackground}
                            onClick={this.handleColorClick}
                        />
                        <ul className={`${Styles.color_list}`}>{this.makeRGBController()}</ul>
                        {canSpoide && (
                            <div
                                onClick={onSpoidClick}
                                className={`${Styles.btn_picker} ${Styles.imbtn_picker} ${
                                    activeSpoid ? Styles.on : ''
                                }`}
                            >
                                컬러피커 열기
                            </div>
                        )}
                    </div>
                    <div className={`${Styles.color_graph}`}>
                        <ul className={`${Styles.graph_list}`}>{this.makeHSVController()}</ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default pure(ColorPicker);

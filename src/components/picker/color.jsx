import React, { Component } from 'react';
import chroma from 'chroma-js';
import { Object } from 'core-js';
import Styles from '../../assets/scss/popup.scss';
import debounce from 'lodash/debounce';
import { pure } from 'recompose';
import isEqual from 'lodash/isEqual';
import OutsideClick from '../common/outsideClick';
import root from 'window-or-global';

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
        hue: Math.round(hue / 3.6),
        saturation: Math.round(saturation * 100),
        brightness: Math.round(brightness * 100),
        color: value,
    };
}

function setScaleRatioX(value) {
    return Math.round(value * 1.77);
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

    get ARROW_HEIGHT() {
        return 9;
    }

    get SLIDER_SIZE() {
        return 28;
    }

    constructor(props) {
        super(props);
        const { color, onChangeColorPicker } = props;
        let state = {
            isTransparent: false,
        };
        if (color) {
            Object.assign(state, getColorByHex(color));
            if (onChangeColorPicker) {
                onChangeColorPicker(state.color);
            }
        }
        Object.assign(state, this.getDefaultColorPickerStyle());
        this.state = state;
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
        const { onChangeColorPicker } = this.props;
        let thisValue = Number(value);
        thisValue = getRangeValue(parseInt(thisValue, 10), 0, 100);
        if (!isNaN(thisValue)) {
            this.setState((state) => {
                const hsv = Object.assign({}, state, { [type]: thisValue });
                const nextState = getColorByRGB(hsv);
                if (onChangeColorPicker) {
                    onChangeColorPicker(nextState.color);
                }
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
        const { onChangeColorPicker } = this.props;
        let thisValue = Number(value);
        thisValue = getRangeValue(parseInt(thisValue, 10), 0, 255);
        if (!isNaN(thisValue)) {
            this.setState((state) => {
                const rgb = Object.assign({}, state, { [type]: thisValue });
                const nextState = getColorByHsv(rgb);
                if (onChangeColorPicker) {
                    onChangeColorPicker(nextState.color);
                }
                return nextState;
            });
        }
    }

    handleSliderMove = (e) => {
        if (this.canMoveCapture) {
            e.preventDefault();
            let event = getClassifyEvent(e);
            const { clientX } = event;
            let result = (clientX - this.sliderStartX) / this.SCALE_RATIO_X + this.sliderValue;
            result = Math.round(getRangeValue(result, 0, 100));
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

    handleWindowResize = debounce(() => {
        this.alignPosition();
    }, 300);

    handleColorClick = () => {
        const { canTransparent, onChangeColorPicker, defaultColor = '#FF0000' } = this.props;
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
                if (onChangeColorPicker) {
                    onChangeColorPicker(colorValue);
                }
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
        let result = (clientX - left - this.SLIDER_SIZE / 2) / this.SCALE_RATIO_X;
        result = Math.round(Math.max(Math.min(result, 100), 0));
        this.handleChangeHsv(type, result);
    }

    componentDidMount() {
        document.addEventListener('mousemove', this.handleSliderMove);
        document.addEventListener('mouseup', this.handleSliderUp);
        document.addEventListener('touchmove', this.handleSliderMove, { passive: false });
        document.addEventListener('touchend', this.handleSliderUp);
        root.addEventListener('resize', this.handleWindowResize);
        this.alignPosition();
    }

    componentWillUnmount() {
        document.removeEventListener('mousemove', this.handleSliderMove);
        document.removeEventListener('mouseup', this.handleSliderUp);
        document.removeEventListener('touchmove', this.handleSliderMove);
        document.removeEventListener('touchend', this.handleSliderUp);
        root.removeEventListener('resize', this.handleWindowResize);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return !isEqual(this.state, nextState);
    }

    handleSliderMouseDown(e, type) {
        const { nativeEvent = {} } = e;
        const { clientX } = getClassifyEvent(nativeEvent);
        document.addEventListener('touchmove', handleTouchPreventDefault, { passive: false });
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

    // 정해진 Dom위치에 Picker 배치
    getColorPickerPosition() {
        const { positionDom, marginRect = {}, positionRect, boundaryDom } = this.props;

        let boundaryHeight = 0;
        if (boundaryDom) {
            const { top = 0 } = boundaryDom.getBoundingClientRect();
            boundaryHeight = boundaryDom.clientHeight + top;
        } else {
            boundaryHeight = root.innerHeight || 0;
        }

        let rect = {};
        if (positionRect) {
            rect = positionRect;
        } else if (positionDom) {
            rect = positionDom.getBoundingClientRect();
        }

        const { x: marginX = 0, y: marginY = 0 } = marginRect;
        let { top = 0, width = 0, height = 0, left = 0 } = rect;
        left -= this.PICKER_WIDTH / 2 - width / 2 - marginX;
        const isUpStyle = boundaryHeight - top - height / 2 < boundaryHeight / 2;
        if (isUpStyle) {
            top -= this.PICKER_HEIGHT + (this.ARROW_HEIGHT + 2) - marginY;
        } else {
            top += this.ARROW_HEIGHT + height + 2 + marginY;
        }
        return {
            isUpStyle,
            left,
            top,
        };
    }

    getAlignPosition() {
        const { boundaryDom } = this.props;
        const { top, left, isUpStyle } = this.getColorPickerPosition();

        let boundrayRect = {};
        if (boundaryDom) {
            boundrayRect = boundaryDom.getBoundingClientRect();
        } else {
            boundrayRect = {
                top: 0,
                left: 0,
                right: root.innerWidth || 0,
                bottom: root.innerHeight || 0,
            };
        }

        const colorPickerRect = this.colorPicker.getBoundingClientRect();
        let { width, height } = colorPickerRect;
        let bottom = top + height;
        let right = left + width;
        let x = 0;
        let y = 0;

        // 상하좌우 범위 계산
        if (left < boundrayRect.left) {
            x = boundrayRect.left + this.PICKER_WIDTH_MARGIN - left;
        } else if (right > boundrayRect.right) {
            x = boundrayRect.right - right - this.PICKER_WIDTH_MARGIN;
        }
        if (top < boundrayRect.top) {
            y = top - boundrayRect.top + this.PICKER_WIDTH_MARGIN;
        } else if (bottom > boundrayRect.bottom) {
            y = boundrayRect.bottom - bottom - this.PICKER_WIDTH_MARGIN;
        }
        const arrowLeft = Math.max(
            Math.min(this.MAX_ARROW_POSITION / 2 - x, this.MAX_ARROW_POSITION),
            0
        );

        return {
            arrowLeft,
            isUpStyle,
            colorPickerStyle: {
                left,
                top,
                transform: `translate3d(${x}px, ${y}px, 0)`,
            },
        };
    }

    alignPosition(updateState) {
        this.setState(() => {
            return Object.assign(this.getAlignPosition(), updateState);
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

    getDefaultColorPickerStyle() {
        const { left, top, isUpStyle } = this.getColorPickerPosition();
        return {
            isUpStyle,
            arrowLeft: 183,
            colorPickerStyle: {
                left,
                top,
                transform: `translate3d(0px, 0px, 0)`,
            },
        };
    }

    makeHSVController() {
        const { isTransparent, isActiveSlider } = this.state;
        let itemClassName = isTransparent ? Styles.disabled : '';
        return metaHSVContoller.map(({ key, label }) => {
            return (
                <li key={key} className={`${Styles.item} ${itemClassName}`}>
                    <label htmlFor={key}>{label}</label>
                    <input
                        value={String(this.state[key])}
                        type="number"
                        min="0"
                        max="100"
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
                            className={`${Styles.slider} ${Styles.btn_pop_color_slide} ${
                                isActiveSlider === key ? Styles.on : ''
                            }`}
                            onMouseDown={(e) => {
                                !isTransparent && this.handleSliderMouseDown(e, key);
                            }}
                            onTouchStart={(e) => {
                                !isTransparent && this.handleSliderMouseDown(e, key);
                            }}
                            style={{ left: `${setScaleRatioX(this.state[key])}px` }}
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
            className,
            onClick,
            onOutsideClick,
            onSpoidClick,
            canSpoide,
            canTransparent,
        } = this.props;
        const { color, arrowLeft, isUpStyle, isTransparent, colorPickerStyle } = this.state;
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
            <OutsideClick
                onOutsideClick={() => {
                    if (onOutsideClick) {
                        onOutsideClick(color);
                    }
                }}
                eventTypes={['mouseup', 'touchend', 'wheel']}
            >
                <div
                    ref={(dom) => {
                        this.colorPicker = dom;
                    }}
                    style={colorPickerStyle}
                    onClick={onClick}
                    className={`${Styles.tooltip_box} ${Styles.color_picker} ${
                        isUpStyle ? Styles.up : ''
                    }
                        ${className}`}
                >
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
                                    className={`${Styles.btn_picker} ${Styles.imbtn_picker}`}
                                >
                                    컬러피커 열기
                                </div>
                            )}
                        </div>
                        <div className={`${Styles.color_graph}`}>
                            <ul className={`${Styles.graph_list}`}>{this.makeHSVController()}</ul>
                        </div>
                    </div>
                    <span
                        className={`${Styles.arr} ${Styles.free}`}
                        style={{ left: `${arrowLeft}px` }}
                    >
                        <i />
                    </span>
                </div>
            </OutsideClick>
        );
    }
}

export default pure(ColorPicker);

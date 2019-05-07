import React, { Component } from 'react';
import debounce from 'lodash/debounce';
import { pure } from 'recompose';
import OutsideClick from '../common/outsideClick';
import root from 'window-or-global';
import ColorSlider from './ColorSlider';
import ColorSwatches from './ColorSwatches';
import produce from 'immer';
import { COLOR_PICKER_MODE } from '../../constants';
import Theme from '@utils/Theme';

class ColorPicker extends Component {
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
        return 278;
    }

    get ARROW_HEIGHT() {
        return 9;
    }

    get SLIDER_SIZE() {
        return 28;
    }

    constructor(props) {
        super(props);
        this.theme = Theme.getStyle("popup");
        const state = {
            isTransparent: false,
            pickerMode: this.defaultPickerMode(),
        };
        Object.assign(state, this.getDefaultColorPickerStyle());
        this.state = state;
    }

    componentDidMount() {
        root.addEventListener('resize', this.handleWindowResize);
        this.alignPosition();
    }

    componentWillUnmount() {
        root.removeEventListener('resize', this.handleWindowResize);
    }

    defaultPickerMode() {
        let pickerMode = localStorage.getItem('colorPickerMode');
        if (!pickerMode) {
            pickerMode = COLOR_PICKER_MODE.SLIDER;
            localStorage.setItem('colorPickerMode', pickerMode);
        }
        return pickerMode;
    }

    handleChangePickerMode = (pickerMode) => {
        this.setState(
            produce((draft) => {
                const { color } = this.state;
                draft.pickerMode = pickerMode;
                this.lastColor = color;
                localStorage.setItem('colorPickerMode', pickerMode);
            })
        );
    };

    handleChangeColor = (color) => {
        const { onChangeColorPicker } = this.props;
        this.setState(
            produce((draft) => {
                draft.color = color;
                if (onChangeColorPicker) {
                    onChangeColorPicker(color);
                }
            })
        );
    };

    alignPosition(updateState) {
        this.setState(() => {
            return Object.assign(this.getAlignPosition(), updateState);
        });
    }

    handleWindowResize = debounce(() => {
        this.alignPosition();
    }, 300);

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
        let { top = 0, left = 0 } = rect;
        const { width = 0, height = 0 } = rect;
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
        const { width, height } = colorPickerRect;
        const bottom = top + height;
        const right = left + width;
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

    render() {
        const {
            className,
            onClick,
            onOutsideClick,
            outsideExcludeDom,
            eventTypes = ['mouseup', 'touchend', 'wheel'],
        } = this.props;
        const {
            color,
            arrowLeft,
            isUpStyle,
            colorPickerStyle,
            pickerMode = COLOR_PICKER_MODE.SLIDER,
        } = this.state;

        let lastColor;
        if (this.lastColor) {
            lastColor = this.lastColor;
            this.lastColor = undefined;
        }
        return (
            <OutsideClick
                outsideExcludeDom={outsideExcludeDom}
                onOutsideClick={() => {
                    if (onOutsideClick) {
                        onOutsideClick(color);
                    }
                }}
                eventTypes={eventTypes}
            >
                <div
                    ref={(dom) => {
                        this.colorPicker = dom;
                    }}
                    style={colorPickerStyle}
                    onClick={onClick}
                    className={`${this.theme.tooltip_box} ${this.theme.color_picker} ${
                        isUpStyle ? this.theme.up : ''
                    }
                        ${className}`}
                >
                    {pickerMode === COLOR_PICKER_MODE.SLIDER && (
                        <ColorSlider
                            {...this.props}
                            onChangePickerMode={this.handleChangePickerMode}
                            onChangeColor={this.handleChangeColor}
                            lastColor={lastColor}
                        />
                    )}
                    {pickerMode !== COLOR_PICKER_MODE.SLIDER && (
                        <ColorSwatches
                            {...this.props}
                            onChangePickerMode={this.handleChangePickerMode}
                            onChangeColor={this.handleChangeColor}
                        />
                    )}
                    <span
                        className={`${this.theme.arr} ${this.theme.free}`}
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

import React, { Component } from 'react';
import { pure } from 'recompose';
import Styles from '../../assets/scss/popup.scss';
import OutsideClick from '../common/outsideClick';
import { debounce } from 'lodash';

/* eslint-disable jsx-a11y/anchor-is-valid*/
/* eslint-disable array-element-newline */
const numberList = [
    '7', '8', '9',
    '4', '5', '6',
    '1', '2', '3',
    '-', '0', '.',
];

class Number extends Component {
    get MAX_ARROW_POSITION() {
        return 184; // WIDGET_HEIGHT - WIDGET_MARGIN
    }

    get WIDGET_WIDTH() {
        return 216;
    }

    get WIDGET_HEIGHT() {
        return 304;
    }

    get ARROW_HEIGHT() {
        return 9;
    }

    get WIDGET_MARGIN() {
        return 32;
    }

    constructor(props) {
        super(props);

        const { left, top, isUpStyle } = this.getWidgetPosition();
        this.state = {
            arrowLeft: this.MAX_ARROW_POSITION / 2,
            isUpStyle,
            colorPickerStyle: {
                left,
                top,
                transform: 'translate3d(0px, 0px, 0)',
            },
        };

        this._makeNumberButtons.bind(this);
    };

    componentDidMount() {
        window.addEventListener('resize', this.handleWindowResize);
        this.alignPosition();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowResize);
    }

    handleWindowResize = debounce(() => {
        this.alignPosition();
    }, 300);

    alignPosition(updateState) {
        this.setState(() => Object.assign(this.getAlignPosition(), updateState));
    }

    getAlignPosition() {
        const { top, left, isUpStyle } = this.getWidgetPosition();

        const boundaryRect = {
            top: 0,
            left: 0,
            right: window.innerWidth || 0,
            bottom: window.innerHeight || 0,
        };

        const { width, height } = this.numberWidget.getBoundingClientRect();
        const bottom = top + height;
        const right = left + width;
        let x = 0;
        let y = 0;
        // 상하좌우 범위 계산
        if (left < boundaryRect.left) {
            x = boundaryRect.left + this.WIDGET_MARGIN - left;
        } else if (right > boundaryRect.right) {
            x = boundaryRect.right - right - this.WIDGET_MARGIN;
        }
        if (top < boundaryRect.top) {
            y = top - boundaryRect.top + this.WIDGET_MARGIN;
        } else if (bottom > boundaryRect.bottom) {
            y = boundaryRect.bottom - bottom - this.WIDGET_MARGIN;
        }
        const arrowLeft = Math.max(
            Math.min(this.MAX_ARROW_POSITION / 2 - x, this.MAX_ARROW_POSITION),
            0,
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

    _makeNumberButtons() {
        const { onButtonPressed } = this.props;

        return numberList.map((value) => (
            <a className={Styles.btn_cnt} key={value} onClick={() => onButtonPressed(value)}>
                {value}
            </a>
        ));
    }

    getWidgetPosition() {
        const { positionDom, marginRect = {}, positionRect } = this.props;

        const boundaryHeight = window.innerHeight || 0;
        let rect = {};
        if (positionRect) {
            rect = positionRect;
        } else if (positionDom) {
            rect = positionDom.getBoundingClientRect();
        }

        let { top = 0, left = 0 } = rect;
        const { width = 0, height = 0 } = rect;
        const { x: marginX = 0, y: marginY = 0 } = marginRect;

        left -= this.WIDGET_WIDTH / 2 - width / 2 - marginX;
        const isUpStyle = boundaryHeight - top - height / 2 < boundaryHeight / 2;
        if (isUpStyle) {
            top -= this.WIDGET_HEIGHT + (this.ARROW_HEIGHT + 2) - marginY;
        } else {
            top += this.ARROW_HEIGHT + height + 2 + marginY;
        }
        return {
            isUpStyle,
            left,
            top,
        };
    }

    render() {
        const { onOutsideClick, onBackButtonPressed } = this.props;
        const { arrowLeft, isUpStyle, colorPickerStyle } = this.state;

        return (
            <OutsideClick
                onOutsideClick={() => {
                    if (onOutsideClick) {
                        onOutsideClick();
                    }
                }}
                eventTypes={['mouseup', 'touchend']}
            >
                <div
                    ref={(dom) => {
                        this.numberWidget = dom;
                    }}
                    style={colorPickerStyle}
                    className={`${Styles.tooltip_box} ${Styles.pad_only} ${
                        isUpStyle ? Styles.up : ''
                    }`}
                >
                    <div className={Styles.tooltip_inner}>
                        <div className={Styles.time_board}>
                            {this._makeNumberButtons()}
                            <a
                                className={`${Styles.btn_cnt} ${Styles.btn_del} ${Styles.imico_pop_key_del}`}
                                onClick={() => {
                                    onBackButtonPressed();
                                }}
                            >
                                <span className={Styles.blind}>지우기</span>
                            </a>
                        </div>
                    </div>
                    <span
                        className={`${Styles.arr} ${Styles.free}`}
                        style={{ left: `${arrowLeft}px` }}
                    >
                        <i/>
                    </span>
                </div>
            </OutsideClick>
        );
    }
}

export default pure(Number);

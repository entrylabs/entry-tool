import { Component } from 'react';
import { pure } from 'recompose';
import OutsideClick from '../common/outsideClick';
import { debounce } from 'lodash';
import root from 'window-or-global';
import produce from 'immer';
import Theme from '@utils/Theme';
import Dropdown from '@components/widget/dropdown';

class LedPicker extends Component {
    get PICKER_WIDTH() {
        return 222;
    }

    get PICKER_WIDTH_MARGIN() {
        return 25;
    }

    get MAX_ARROW_POSITION() {
        return 192;
    }

    get PICKER_HEIGHT() {
        return 296.8;
    }

    get ARROW_HEIGHT() {
        return 9;
    }

    constructor(props) {
        super(props);
        this.theme = Theme.getStyle('popup');
        const state = {};
        const { defaultStatus, maxBrightness, withLevel } = this.props;
        this.defaultLedStatus = defaultStatus || [
            [0, 0, 0, 0, 0],
            [0, 1, 0, 1, 0],
            [0, 0, 0, 0, 0],
            [1, 0, 0, 0, 1],
            [0, 1, 1, 1, 0],
        ];

        Object.assign(state, this.getDefaultLedPickerStyle());
        if (this.props.ledStatus) {
            const clonedArray = JSON.parse(JSON.stringify(this.props.ledStatus));
            Object.assign(state, { ledStatus: clonedArray || this.defaultLedStatus });
        }

        this.state = state;
    }

    componentDidMount() {
        root.addEventListener('resize', this.handleWindowResize);
        this.alignPosition();
    }

    componentWillUnmount() {
        root.removeEventListener('resize', this.handleWindowResize);
    }

    alignPosition(updateState) {
        this.setState(() => Object.assign(this.getAlignPosition(), updateState));
    }

    handleWindowResize = debounce(() => {
        this.alignPosition();
    }, 300);

    // 정해진 Dom위치에 Picker 배치
    getLedPickerPosition() {
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

    getDefaultLedPickerStyle() {
        const { left, top, isUpStyle } = this.getLedPickerPosition();
        return {
            isUpStyle,
            arrowLeft: 0,
            LedPickerStyle: {
                left,
                top,
                transform: `translate3d(0px, 0px, 0)`,
            },
        };
    }

    getAlignPosition() {
        const { boundaryDom } = this.props;
        const { top, left, isUpStyle } = this.getLedPickerPosition();

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

        const ledPickerRect = this.ledPicker.getBoundingClientRect();
        const { width, height } = ledPickerRect;
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
            ledPickerStyle: {
                left,
                top,
                transform: `translate3d(${x}px, ${y}px, 0)`,
                backgroundColor: '#d6e9f4',
            },
        };
    }
    _handleLedStatusChange = ({ x, y, isReset, value }) => {
        const { onChangeLedPicker, withLevel, maxBrightness } = this.props;
        const status = this.state.ledStatus;
        const targetBrightness = maxBrightness || 1;
        if (isReset) {
            for (let i = 0; i < status.length; i++) {
                const row = status[i];
                const rowLength = row.length;
                status[i] = new Array(rowLength).fill(0);
            }
        } else {
            if (withLevel) {
                status[x][y] += 1;
                if (status[x][y] > 9) {
                    status[x][y] = 0;
                }
            } else {
                if (status[x][y] == targetBrightness) {
                    status[x][y] = 0;
                } else {
                    status[x][y] = targetBrightness;
                }
            }
        }

        this.setState(
            produce((draft) => {
                draft.lastState = status;
                if (onChangeLedPicker) {
                    onChangeLedPicker(status);
                }
            })
        );
    };

    render() {
        const {
            className,
            onClick,
            onOutsideClick,
            outsideExcludeDom,
            eventTypes = ['mouseup', 'touchend'],
            animation = true,
            withLevel,
        } = this.props;
        const { color, arrowLeft, isUpStyle, ledPickerStyle, ledStatus } = this.state;
        let animationStyle = {};
        if (!animation) {
            animationStyle = {
                transition: 'none',
            };
        }
        return (
            <OutsideClick
                outsideExcludeDom={outsideExcludeDom}
                onOutsideClick={() => {
                    if (onOutsideClick) {
                        onOutsideClick(ledStatus);
                    }
                }}
                eventTypes={eventTypes}
            >
                <div
                    ref={(dom) => {
                        this.ledPicker = dom;
                    }}
                    style={ledPickerStyle}
                    onClick={onClick}
                    className={`${this.theme.tooltip_box} ${this.theme.led_picker} ${
                        isUpStyle ? this.theme.up : ''
                    }`}
                >
                    {withLevel ? (
                        <div className={this.theme.led_picker_inner}>
                            {ledStatus.map((leds, x) =>
                                leds.map((led, y) => {
                                    const brightness = ledStatus[x][y];
                                    const targetStyle = this.theme[
                                        `led_item_selected_${brightness}`
                                    ];
                                    const key = `led${x}${y}`;

                                    return (
                                        <div
                                            className={`${this.theme.led_item} ${brightness > 0 &&
                                                this.theme.led_item_selected} ${targetStyle}`}
                                            key={key}
                                            onClick={() => {
                                                this._handleLedStatusChange({
                                                    x,
                                                    y,
                                                    isReset: false,
                                                });
                                            }}
                                        >
                                            <div className={`${this.theme.led_item_indicator}`}>
                                                {brightness}
                                            </div>
                                        </div>
                                    );
                                })
                            )}
                        </div>
                    ) : (
                        <div className={this.theme.led_picker_inner}>
                            {ledStatus.map((leds, x) =>
                                leds.map((led, y) => {
                                    const brightness = ledStatus[x][y];
                                    return (
                                        <div
                                            className={`${this.theme.led_item} ${brightness > 0 &&
                                                this.theme.led_item_selected}`}
                                            key={`led${x}${y}`}
                                            onClick={() =>
                                                this._handleLedStatusChange({
                                                    x,
                                                    y,
                                                    isReset: false,
                                                })
                                            }
                                        />
                                    );
                                })
                            )}
                        </div>
                    )}

                    <div
                        className={this.theme.led_clear}
                        onClick={() => this._handleLedStatusChange({ isReset: true })}
                    >
                        <p className={this.theme.led_clear_text}>
                            <span className={this.theme.led_clear_text_content}>
                                {Lang && Lang.Msgs
                                    ? Lang.Msgs.microbit_led_erase_all
                                    : '모두 지우기'}
                            </span>
                        </p>
                    </div>
                    <span
                        className={`${this.theme.arr} ${this.theme.free}`}
                        style={{ left: `${arrowLeft}px` }}
                    >
                        <i style={{ backgroundColor: '#d6e9f4' }} />
                    </span>
                </div>
            </OutsideClick>
        );
    }
}

export default pure(LedPicker);

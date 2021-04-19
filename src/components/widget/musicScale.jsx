import React, { Component } from 'react';
import { pure } from 'recompose';
import { CommonUtils } from '@utils/Common';
import OutsideClick from '../common/outsideClick';
import { debounce, camelCase } from 'lodash';
import root from 'window-or-global';
import Theme from '@utils/Theme';
import _clamp from 'lodash/clamp';

/* eslint-disable jsx-a11y/anchor-is-valid*/
/* eslint-disable array-element-newline */
/* eslint-disable array-bracket-newline */
const normalScale = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
const halfScale = ['C#', 'D#', 'F#', 'G#', 'A#'];
const replacement = {
    'C#': 'D♭',
    'D#': 'E♭',
    'F#': 'G♭',
    'G#': 'A♭',
    'A#': 'B♭',
};
const octave = [1, 2, 3, 4, 5];

class MusicScale extends Component {
    getPositionOptions() {
        return {
            widthMargin: 32,
            maxArrowPosition: 184,
            arrowWidth: 15,
            arrowHeight: 9,
            width: 216,
            height: 304,
        };
    }

    constructor(props) {
        super(props);
        this.theme = Theme.getStyle('popup');
        this.state = CommonUtils.getDefaultComponentPosition(props, this.getPositionOptions());
        this.makeScaleButtons = this.makeScaleButtons.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.makeHalfScaleButtons = this.makeHalfScaleButtons.bind(this);
        this.state = { scale: this.props.scale, octave: _clamp(this.props.octave, 1, 5) };
    }

    componentDidMount() {
        root.addEventListener('resize', this.handleWindowResize);
        this.alignPosition();
    }

    componentWillUnmount() {
        root.removeEventListener('resize', this.handleWindowResize);
    }

    handleWindowResize = debounce(() => {
        this.alignPosition();
    }, 300);

    alignPosition(updateState) {
        this.setState(() =>
            Object.assign(
                CommonUtils.getAlignPosition(
                    this.props,
                    this.musicScaleWidget,
                    this.getPositionOptions()
                ),
                updateState
            )
        );
    }
    makeScaleButtons(selected) {
        return normalScale.map((value) => {
            const isSelected = selected && value == selected;
            return (
                <div
                    className={`${this.theme.normal_scale} ${
                        isSelected ? this.theme.selected : ''
                    } ${this.theme.scale_common}`}
                    key={value}
                    onClick={() => {
                        this.handleButtonClick('scale', value);
                    }}
                >
                    <p>{value}</p>
                </div>
            );
        });
    }
    makeHalfScaleButtons(selected) {
        return halfScale.map((value, i) => {
            const isSelected = selected && value == selected;
            return (
                <div
                    className={`${this.theme.half_scale} ${this.theme[`half_${i + 1}`]} ${
                        isSelected ? this.theme.selected : ''
                    } ${this.theme.scale_common}`}
                    key={value}
                    onClick={() => {
                        this.handleButtonClick('scale', value);
                    }}
                >
                    <p>
                        {value}
                        <br />
                        <span>{replacement[value]}</span>
                    </p>
                </div>
            );
        });
    }

    handleButtonClick(type, value) {
        const { eventEmitter: emitter } = this.props;
        if (emitter) {
            if (type == 'scale') {
                this.setState({ ...this.state, scale: value });
                emitter.emit('click', 'changedValue', `${value}${this.state.octave}`);
            } else if (type == 'octave' && value > 0 && value < 6) {
                this.setState({ ...this.state, octave: value });
                emitter.emit('click', 'changedValue', `${this.state.scale}${value}`);
            }
        } else {
            const event = camelCase(`on-${type}`);
            if (typeof this.props[event] === 'function') {
                this.props[event](value);
            }
        }
    }

    render() {
        const { onOutsideClick, eventTypes = ['mouseup', 'touchend', 'wheel'] } = this.props;
        const { arrowLeft, isUpStyle, componentPosition, scale, octave } = this.state;

        return (
            <OutsideClick
                onOutsideClick={() => {
                    if (onOutsideClick) {
                        onOutsideClick();
                    }
                }}
                eventTypes={eventTypes}
            >
                <div
                    ref={(dom) => {
                        this.musicScaleWidget = dom;
                    }}
                    style={componentPosition}
                    className={`${this.theme.tooltip_box} ${this.theme.music_scale} ${
                        isUpStyle ? this.theme.up : ''
                    }`}
                >
                    <div className={this.theme.tooltip_inner}>
                        {this.makeScaleButtons(scale)}
                        {this.makeHalfScaleButtons(scale)}
                        <div className={this.theme.octave_wrapper}>
                            <div className={this.theme.ocatave_wrapper}>
                                <p>옥타브</p>
                                <div className={this.theme.octave_button_wrapper}>
                                    <div
                                        className={this.theme.octave_button}
                                        onClick={() => {
                                            if (this.state.octave < 5) {
                                                this.handleButtonClick(
                                                    'octave',
                                                    Number(this.state.octave) + 1
                                                );
                                            }
                                        }}
                                    >
                                        <p>+</p>
                                    </div>
                                    <div className={this.theme.octave_ind}>
                                        <p>{this.state.octave}</p>
                                    </div>
                                    <div
                                        className={`${this.theme.octave_button} ${this.theme.bottom}`}
                                        onClick={() => {
                                            if (this.state.octave > 1) {
                                                this.handleButtonClick(
                                                    'octave',
                                                    Number(this.state.octave) - 1
                                                );
                                            }
                                        }}
                                    >
                                        <span />
                                        {/* <p>ㅡ</p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

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

export default pure(MusicScale);

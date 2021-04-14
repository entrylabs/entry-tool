import React, { Component } from 'react';
import { pure } from 'recompose';
import { CommonUtils } from '@utils/Common';
import OutsideClick from '../common/outsideClick';
import { debounce, camelCase } from 'lodash';
import root, { alert, console } from 'window-or-global';
import Theme from '@utils/Theme';

/* eslint-disable jsx-a11y/anchor-is-valid*/
/* eslint-disable array-element-newline */
/* eslint-disable array-bracket-newline */
const normalScale = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
const halfScale = ['C#', 'D#', 'F#', 'G#', 'A#'];

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
        this.state = { selected: this.props.value };
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
                <a
                    className={`${this.theme.normal_scale} ${
                        isSelected ? this.theme.selected : ''
                    }`}
                    key={value}
                    onClick={() => {
                        this.handleButtonClick('buttonPressed', value);
                    }}
                ></a>
            );
        });
    }
    makeHalfScaleButtons(selected) {
        return halfScale.map((value, i) => {
            const isSelected = selected && value == selected;
            return (
                <a
                    className={`${this.theme.half_scale} ${this.theme[`half_${i + 1}`]} ${
                        isSelected ? this.theme.selected : ''
                    }`}
                    key={value}
                    onClick={() => {
                        this.handleButtonClick('buttonPressed', value);
                    }}
                ></a>
            );
        });
    }

    handleButtonClick(type, value) {
        const { eventEmitter: emitter } = this.props;
        if (emitter) {
            emitter.emit('click', type, value);
            this.setState({ ...this.state, selected: value });
        } else {
            const event = camelCase(`on-${type}`);
            if (typeof this.props[event] === 'function') {
                this.props[event](value);
            }
        }
    }

    render() {
        const { onOutsideClick, eventTypes = ['mouseup', 'touchend', 'wheel'] } = this.props;
        const { arrowLeft, isUpStyle, componentPosition, selected } = this.state;

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
                        {this.makeScaleButtons(selected)}
                        {this.makeHalfScaleButtons(selected)}
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

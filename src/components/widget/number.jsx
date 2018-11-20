import React, { Component } from 'react';
import { pure } from 'recompose';
import Styles from '@assets/scss/popup.scss';
import { CommonUtils } from '@utils/Common';
import OutsideClick from '../common/outsideClick';
import { debounce } from 'lodash';

/* eslint-disable jsx-a11y/anchor-is-valid*/
/* eslint-disable array-element-newline */
const numberList = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '-', '0', '.'];

class Number extends Component {
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
        this.state = CommonUtils.getDefaultComponentPosition(props, this.getPositionOptions());
        this.makeNumberButtons = this.makeNumberButtons.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

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
        this.setState(() =>
            Object.assign(
                CommonUtils.getAlignPosition(
                    this.props,
                    this.numberWidget,
                    this.getPositionOptions()
                ),
                updateState
            )
        );
    }

    makeNumberButtons() {
        return numberList.map((value) => (
            <a
                className={Styles.btn_cnt}
                key={value}
                onClick={() => {
                    this.handleButtonClick('buttonPressed', value);
                }}
            >
                {value}
            </a>
        ));
    }

    handleButtonClick(type, value) {
        const { eventEmitter: emitter } = this.props;

        if (emitter) {
            emitter.emit('click', type, value);
        }
    }

    render() {
        const { onOutsideClick, eventTypes = ['mouseup', 'touchend', 'wheel'] } = this.props;
        const { arrowLeft, isUpStyle, componentPosition } = this.state;

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
                        this.numberWidget = dom;
                    }}
                    style={componentPosition}
                    className={`${Styles.tooltip_box} ${Styles.pad_only} ${
                        isUpStyle ? Styles.up : ''
                    }`}
                >
                    <div className={Styles.tooltip_inner}>
                        <div className={Styles.time_board}>
                            {this.makeNumberButtons()}
                            <a
                                className={`${Styles.btn_cnt} ${Styles.btn_del} ${
                                    Styles.imico_pop_key_del
                                }`}
                                onClick={() => {
                                    this.handleButtonClick('backButtonPressed');
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
                        <i />
                    </span>
                </div>
            </OutsideClick>
        );
    }
}

export default pure(Number);

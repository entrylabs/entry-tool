import React, { Component } from 'react';
import { CommonUtils } from '@utils/Common';
import { debounce } from 'lodash';
import Styles from '../../assets/scss/popup.scss';
import OutsideClick from "../common/outsideClick";

/* eslint-disable jsx-a11y/anchor-is-valid*/
/* eslint-disable array-element-newline */
const numberList = [
    '7', '8', '9',
    '4', '5', '6',
    '1', '2', '3',
    '-', '0', '.',
];

const noop = () => {};

class angle extends Component {
    getPositionOptions() {
        return {
            widthMargin: 1,
            maxArrowPosition: 406,
            arrowWidth: 15,
            arrowHeight: 9,
            width: 408,
            height: 300,
        };
    }

    constructor(props) {
        super(props);

        const defaultState = {
            degree: 0,
        };
        this.state = Object.assign(
            defaultState,
            CommonUtils.getDefaultComponentPosition(props, this.getPositionOptions())
        );

        this.handleAngleArrowMove = this.handleAngleArrowMove.bind(this);
        this.removeMouseMove = this.removeMouseMove.bind(this);
        this.addMouseMove = this.addMouseMove.bind(this);
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
        this.setState(() => {
            return Object.assign(
                CommonUtils.getAlignPosition(this.props, this.widgetDom, this.getPositionOptions()),
                updateState
            );
        });
    }

    handleAngleArrowMove(event) {
        event.preventDefault();
        event.stopPropagation();

        let classifiedEvent;
        if (window.TouchEvent && event instanceof window.TouchEvent) {
            classifiedEvent = event.changedTouches[0];
        } else {
            classifiedEvent = event;
        }

        const { pageX, pageY } = classifiedEvent;
        console.log(pageX, pageY);
    };

    addMouseMove() {
        document.addEventListener('mousemove', this.handleAngleArrowMove);
        document.addEventListener('touchmove', this.handleAngleArrowMove);
        document.addEventListener('mouseup', this.removeMouseMove);
        document.addEventListener('touchend', this.removeMouseMove);
    }

    removeMouseMove() {
        document.removeEventListener('mousemove', this.handleAngleArrowMove);
        document.removeEventListener('touchmove', this.handleAngleArrowMove);
    }

    _makeNumberButtons() {
        const { onButtonPressed = noop } = this.props;

        return numberList.map((value) => (
            <a className={Styles.btn_cnt} key={value} onClick={() => onButtonPressed(value)}>
                {value}
            </a>
        ));
    }

    render() {
        const { onOutsideClick = noop, onBackButtonPressed = noop } = this.props;
        const { isUpStyle, arrowLeft, componentPosition } = this.state;

        return (
            <OutsideClick
                onOutsideClick={() => {
                    onOutsideClick();
                }}
                eventTypes={['mouseup', 'touchend', 'wheel']}
            >
                <div
                    ref={(dom) => (this.widgetDom = dom)}
                    style={componentPosition}
                    className={`${Styles.tooltip_box} ${Styles.clock_box} ${
                        isUpStyle ? Styles.up : ''
                    }`}
                >
                    <div className={Styles.tooltip_inner}>
                        <div className={Styles.clock_board}>
                            <div
                                className={`${Styles.clock}`}
                                onMouseDown={this.addMouseMove}
                                onTouchStart={this.addMouseMove}
                            >
                                <div
                                    className={`${Styles.arrow}`}
                                >
                                </div>
                            </div>
                        </div>
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
                    <span style={{ left: `${arrowLeft}px` }} className={Styles.arr}>
                        <i />
                    </span>
                </div>
            </OutsideClick>
        );
    }
}

export default angle;

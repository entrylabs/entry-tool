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

const dummyDegree = 90;

class Angle extends Component {
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

        const { onAngleChanged = noop } = this.props;

        let classifiedEvent;
        if (window.TouchEvent && event instanceof window.TouchEvent) {
            classifiedEvent = event.changedTouches[0];
        } else {
            classifiedEvent = event;
        }

        const { clientX, clientY } = classifiedEvent;
        onAngleChanged(this.calculateArrowDegree(clientX, clientY));
    };

    calculateArrowDegree(mousePosX, mousePosY) {
        const clockRect = this.clockDom.getBoundingClientRect();
        const centerPosX = clockRect.left + clockRect.width / 2 + 1;
        const centerPosY = clockRect.top + clockRect.height / 2 + 1;

        const dy = mousePosY - centerPosY;
        const dx = mousePosX - centerPosX;

        const angleRadian = Math.atan2(-dy, dx);
        let angleDegree = 90 - (angleRadian * 180 / Math.PI);

        if (angleDegree < 0) {
            angleDegree += 360;
        }

        return (Math.round(angleDegree / 15) * 15) % 360;
    }

    makeCircleSection(degree) {
        const refinedDegree = this.refineDegree(degree);
        let startOffset = -90;
        let endOffset = refinedDegree - 90;
        let startStyle = `linear-gradient(${startOffset}deg, transparent 50%, white 50%)`;

        if (refinedDegree > 180) {
            startOffset = refinedDegree - 270;
            endOffset = 90;
            startStyle = `linear-gradient(${startOffset}deg, #ffb500 50%, transparent 50%)`;
        }


        const pieStyle = {
            backgroundImage:
                `${startStyle},linear-gradient(${endOffset}deg, white 50%, transparent 50%)`,
        };

        return (
            <div
                className={Styles.pie}
                style={pieStyle}
            >
            </div>
        );
    }

    refineDegree(degree) {
        let refinedDegree = degree;
        if (refinedDegree > 360) {
            refinedDegree %= 360;
        } else if (refinedDegree < 0) {
            refinedDegree = (refinedDegree % 360) + 360;
        }

        return refinedDegree;
    }

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

    makeNumberButtons() {
        const { onButtonPressed = noop } = this.props;

        return numberList.map((value) => (
            <a className={Styles.btn_cnt} key={value} onClick={() => onButtonPressed(value)}>
                {value}
            </a>
        ));
    }

    render() {
        const { onOutsideClick = noop, onBackButtonPressed = noop, degree = 0 } = this.props;
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
                                ref={(dom) => (this.clockDom = dom)}
                                className={Styles.clock}
                                onMouseDown={this.addMouseMove}
                                onTouchStart={this.addMouseMove}
                                onClick={this.handleAngleArrowMove}
                            >
                                {this.makeCircleSection(degree)}
                                <div
                                    className={`${Styles.arrow}`}
                                    style={{
                                        transform: `rotate(${degree}deg)`,
                                    }}
                                >
                                </div>
                            </div>
                        </div>
                        <div className={Styles.time_board}>
                            {this.makeNumberButtons()}
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

export default Angle;

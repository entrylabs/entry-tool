import React, { Component } from 'react';
import { CommonUtils } from '@utils/Common';
import { debounce } from 'lodash';
import { pure } from 'recompose';
import OutsideClick from '../common/outsideClick';
import root from 'window-or-global';
import Theme from '@utils/Theme';
/* eslint-disable jsx-a11y/anchor-is-valid*/
/* eslint-disable array-element-newline */
/* eslint-disable array-bracket-newline */
const numberList = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '-', '0', '.'];

function handleTouchPreventDefault(e) {
    e.preventDefault();
}

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
        this.theme = Theme.getStyle("popup");
        this.state = CommonUtils.getDefaultComponentPosition(props, this.getPositionOptions());
        this.handleAngleArrowMove = this.handleAngleArrowMove.bind(this);
        this.removeMouseMove = this.removeMouseMove.bind(this);
        this.addMouseMove = this.addMouseMove.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
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
        this.setState(() => {
            return Object.assign(
                CommonUtils.getAlignPosition(this.props, this.widgetDom, this.getPositionOptions()),
                updateState
            );
        });
    }

    handleAngleArrowMove(event) {
        const { onChangeAngle } = this.props;

        let classifiedEvent;
        if (window.TouchEvent && event instanceof window.TouchEvent) {
            classifiedEvent = event.changedTouches[0];
        } else {
            classifiedEvent = event;
        }

        const { clientX, clientY } = classifiedEvent;
        onChangeAngle(this.calculateArrowDegree(clientX, clientY));
    }

    calculateArrowDegree(mousePosX, mousePosY) {
        const clockRect = this.clockDom.getBoundingClientRect();
        const centerPosX = clockRect.left + clockRect.width / 2;
        const centerPosY = clockRect.top + clockRect.height / 2;

        const dy = mousePosY - centerPosY;
        const dx = mousePosX - centerPosX;

        const angleRadian = Math.atan2(-dy, dx);
        let angleDegree = 90 - (angleRadian * 180) / Math.PI;

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
            backgroundImage: `${startStyle},linear-gradient(${endOffset}deg, white 50%, transparent 50%)`,
        };

        return <div className={this.theme.pie} style={pieStyle} />;
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
        document.addEventListener('touchmove', handleTouchPreventDefault, { passive: false });
        document.addEventListener('mousemove', this.handleAngleArrowMove);
        document.addEventListener('touchmove', this.handleAngleArrowMove);
        document.addEventListener('mouseup', this.removeMouseMove);
        document.addEventListener('touchend', this.removeMouseMove);
    }

    removeMouseMove() {
        document.removeEventListener('touchmove', handleTouchPreventDefault);
        document.removeEventListener('mousemove', this.handleAngleArrowMove);
        document.removeEventListener('touchmove', this.handleAngleArrowMove);
    }

    makeNumberButtons() {
        return numberList.map((value) => (
            <a
                className={this.theme.btn_cnt}
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
        const {
            onOutsideClick = () => {},
            angle = 0,
            outsideExcludeDom,
            eventTypes = ['mouseup', 'touchend', 'wheel'],
        } = this.props;
        const { isUpStyle, arrowLeft, componentPosition } = this.state;

        return (
            <OutsideClick
                outsideExcludeDom={outsideExcludeDom}
                onOutsideClick={() => {
                    onOutsideClick(angle);
                }}
                eventTypes={eventTypes}
            >
                <div
                    ref={(dom) => (this.widgetDom = dom)}
                    style={componentPosition}
                    className={`${this.theme.tooltip_box} ${this.theme.clock_box} ${
                        isUpStyle ? this.theme.up : ''
                    }`}
                >
                    <div className={this.theme.tooltip_inner}>
                        <div className={this.theme.clock_board}>
                            <div
                                ref={(dom) => (this.clockDom = dom)}
                                className={this.theme.clock}
                                onMouseDown={this.addMouseMove}
                                onTouchStart={this.addMouseMove}
                                onClick={this.handleAngleArrowMove}
                            >
                                {this.makeCircleSection(angle)}
                                <div
                                    className={`${this.theme.arrow}`}
                                    style={{
                                        transform: `rotate(${angle}deg)`,
                                    }}
                                />
                            </div>
                        </div>
                        <div className={this.theme.time_board}>
                            {this.makeNumberButtons()}
                            <a
                                className={`${this.theme.btn_cnt} ${this.theme.btn_del} ${
                                    this.theme.imico_pop_key_del
                                }`}
                                onClick={() => {
                                    this.handleButtonClick('backButtonPressed');
                                }}
                            >
                                <span className={this.theme.blind}>지우기</span>
                            </a>
                        </div>
                    </div>
                    <span style={{ left: `${arrowLeft}px` }} className={this.theme.arr}>
                        <i />
                    </span>
                </div>
            </OutsideClick>
        );
    }
}

export default pure(Angle);

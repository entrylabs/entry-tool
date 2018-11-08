import React, { Component } from 'react';
import { pure } from 'recompose';
import Styles from '../../assets/scss/popup.scss';
import OutsideClick from '../common/outsideClick';

/* eslint-disable jsx-a11y/anchor-is-valid*/
/* eslint-disable array-element-newline */
const numberList = [
    '7', '8', '9',
    '4', '5', '6',
    '1', '2', '3',
    '-', '0', '.',
];

class NumberPad extends Component {
    constructor(props) {
        super(props);
        this._makeNumberButtons.bind(this);
    };

    _makeNumberButtons() {
        const { onButtonPressed } = this.props;

        return numberList.map((value) => (
            <a className={Styles.btn_cnt} key={value} onClick={() => onButtonPressed(value)}>
                {value}
            </a>
        ));
    }

    render() {
        const { onOutsideClick, onBackButtonPressed } = this.props;

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
                    className={`${Styles.tooltip_box} ${Styles.pad_only} ${Styles.up}`}
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
                    {/* left 값 조절로 화살표 위치 잡을 수 있습니다. */}
                    <span className={Styles.arr}>
                        <i/>
                    </span>
                </div>
            </OutsideClick>
        );
    }
}

export default pure(NumberPad);

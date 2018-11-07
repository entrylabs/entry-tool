import React, { Component } from 'react';
import { pure } from 'recompose';
import Styles from '../../assets/scss/popup.scss';
import OutsideClick from '../common/outsideClick';


/* eslint-disable array-element-newline */
const keyPadList = [
    '7', '8', '9',
    '4', '5', '6',
    '1', '2', '3',
    '-', '0', '.',
];

/* eslint-disable array-element-newline */

class NumberPad extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        const { onOutsideClick } = this.props;

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
                            {keyPadList.map((value) => (
                                <a className={Styles.btn_cnt} key={value}>
                                    {value}
                                </a>
                            ))}
                            <a
                                className={`${Styles.btn_cnt} ${Styles.btn_del} ${Styles.imico_pop_key_del}`}
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

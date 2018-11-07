import React, { Component } from 'react';
import { pure } from 'recompose';
import OutsideClick from '../common/outsideClick';

class NumberPad extends Component {
    constructor(props) {
        super();
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
                eventTypes={['click', 'touchstart']}
            >
                <div>
                    Hello NumberPad
                </div>
            </OutsideClick>
        );
    }
}

export default pure(NumberPad);

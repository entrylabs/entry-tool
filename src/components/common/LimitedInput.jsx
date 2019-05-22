import React, { Component } from 'react';
import produce from 'immer';
import { CommonUtils } from '@utils/Common';
const { getByteLength } = CommonUtils;

class LimitedInput extends Component {
    state = {
        value: this.props.value,
    };

    handleChange = (e) => {
        const { maxLength } = this.props;
        const { target } = e;
        const { value } = target;
        if (!maxLength || getByteLength(value) <= maxLength) {
            this.setState(
                produce((draft) => {
                    draft.value = value;
                })
            );
        }
    };

    render() {
        const { type, className, onKeyUp, onFocus, onBlur, inputRef } = this.props;
        const { value } = this.state;
        const options = {
            type,
            className,
            onKeyUp,
            onFocus,
            onBlur,
            value,
            ref: inputRef,
        };
        return <input {...options} onChange={this.handleChange} />;
    }
}

export default LimitedInput;

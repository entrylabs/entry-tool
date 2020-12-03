import React from 'react';
import { CommonUtils } from '@utils/Common';
import Theme from '@utils/Theme';

const TitleInput = (props) => {
    const theme = Theme.getStyle('popup');
    const { title = '', onChangeTitle = () => {}, disabled = false } = props;

    const handleClick = (event) => {
        event.preventDefault();
        onChangeTitle('')();
    };

    const handleBlur = (event) => {
        const { target = {} } = event;
        const { value = '' } = target;
        onChangeTitle(value)();
    };

    return (
        <div className={theme.input_inner}>
            <input type="text" defaultValue={title} onBlur={handleBlur} disabled={disabled} />
            <a className={title ? theme.close_btn : ''} role="button" onClick={handleClick}>
                <span className={theme.blind}>입력 취소</span>
            </a>
        </div>
    );
};

export default TitleInput;

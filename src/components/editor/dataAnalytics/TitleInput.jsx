import React from 'react';
import { CommonUtils } from '@utils/Common';
import Styles from '@assets/entry/scss/popup.scss';

const { generateHash } = CommonUtils;

const TitleInput = (props) => {
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

    console.log(title);

    return (
        <div className={Styles.input_inner}>
            <input
                key={`title_${generateHash()}`}
                type="text"
                defaultValue={title}
                onBlur={handleBlur}
                disabled={disabled}
            />
            <a
                href="#"
                className={title ? Styles.close_btn : ''}
                role="button"
                onClick={handleClick}
            >
                <span className={Styles.blind}>입력 취소</span>
            </a>
        </div>
    );
};

export default TitleInput;

import React, { useState } from 'react';
import Styles from '@assets/entry/scss/popup.scss';

const TitleInput = (props) => {
    const { title: propsTitle = '', onChangeTitle = () => {} } = props;
    const [title, setTitle] = useState(propsTitle);

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleClick = (event) => {
        event.preventDefault();
        onChangeTitle('')();
        setTitle('');
    };

    return (
        <div className={Styles.input_inner}>
            <input
                type="text"
                value={title}
                onChange={handleChange}
                onBlur={onChangeTitle(title)}
            />
            <a
                href="#"
                className={propsTitle ? Styles.close_btn : ''}
                role="button"
                onClick={handleClick}
            >
                <span className={Styles.blind}>입력 취소</span>
            </a>
        </div>
    );
};

export default TitleInput;

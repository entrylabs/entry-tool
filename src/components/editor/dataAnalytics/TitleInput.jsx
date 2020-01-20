import React, { useState } from 'react';
import Styles from '@assets/entry/scss/popup.scss';

const TitleInput = (props) => {
    const { title: propsTitle = '', onChangeTitle = () => {} } = props;
    const [title, setTitle] = useState(propsTitle);

    const handleChange = (event) => {
        setTitle(event.target.value);
        onChangeTitle(event.target.value);
    };

    const handleClick = (event) => {
        event.preventDefault();
        setTitle('');
        onChangeTitle('');
    };

    return (
        <div className={Styles.input_inner}>
            <input type="text" value={title} onChange={handleChange} />
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

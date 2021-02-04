import React from 'react';
import Theme from '@utils/Theme';

const Count = () => {
    const theme = Theme.getStyle('popup');
    const handleDecreaseClick = (event) => {
        event.prevetDefault();
    };
    const handleIncreaseClick = (event) => {
        event.prevetDefault();
    };
    return (
        <div className={theme.select_group} style={{ marginLeft: 30 }}>
            <label htmlFor="Cnt" className={theme.tit_label}>
                계급 수
            </label>
            <div className={theme.cnt_box}>
                <a role="button" className={theme.btn} onClick={handleDecreaseClick}>
                    <span className={theme.blind}>감소</span>
                </a>
                <a role="button" className={theme.btn} onClick={handleIncreaseClick}>
                    <span className={theme.blind}>증가</span>
                </a>
                <input type="text" className={theme.input} id="Cnt" name="Cnt" />
            </div>
        </div>
    );
};

export default Count;

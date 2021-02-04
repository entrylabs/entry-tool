import React from 'react';
import Theme from '@utils/Theme';

const Range = () => {
    const theme = Theme.getStyle('popup');
    return (
        <div className={theme.select_group} style={{ marginLeft: 30 }}>
            <label htmlFor="CntWidth" className={theme.tit_label}>
                계급 폭
            </label>
            {/* 계급 폭이 비활성일 때 disabled 클래스 추가 */}
            <div className={`${theme.cnt_width} ${theme.disabled}`}>
                {/* 위 disabled 클래스가 추가되면 input 요소에 readOnly 추가 */}
                <input
                    type="text"
                    className={theme.input}
                    id="Cnt"
                    name="Cnt"
                    value="1.0"
                    readOnly
                />
            </div>
        </div>
    );
};

export default Range;

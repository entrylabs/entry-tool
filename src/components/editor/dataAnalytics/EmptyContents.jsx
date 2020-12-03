import React from 'react';
import Theme from '@utils/Theme';

const EmptyContents = () => {
    const theme = Theme.getStyle('popup');
    return (
        <div className={theme.chart_box}>
            <div className={theme.inner}>
                <div className={theme.chart_no_result}>
                    <p className={theme.dsc}>테이블을 먼저 추가해 주세요.</p>
                </div>
            </div>
        </div>
    );
};

export default EmptyContents;

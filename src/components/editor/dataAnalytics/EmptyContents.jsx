import React from 'react';
import Styles from '@assets/entry/scss/popup.scss';

const EmptyContents = () => (
    <div className={Styles.chart_box}>
        <div className={Styles.inner}>
            <div className={Styles.chart_no_result}>
                <p className={Styles.dsc}>테이블을 먼저 추가해 주세요.</p>
            </div>
        </div>
    </div>
);

export default EmptyContents;

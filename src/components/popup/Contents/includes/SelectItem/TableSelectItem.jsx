import React from 'react';
import { CommonUtils } from '@utils/Common';

export default ({ theme, item, children }) => {
    const { info = {}, fields = [] } = item;
    const { name } = CommonUtils.getImageSummary(item);
    const { summary, length = 0 } = info;

    return (
        <>
            <strong className={theme.sjt}>{name}</strong>
            <div className={theme.info}>
                <em>속성 : {fields.length}개</em>
                <p>{fields.join(', ')}</p>
            </div>
            <div className={theme.info2}>
                <em>행 : {length}개</em>
                <p>{summary}</p>
            </div>
            <a href="/" className={theme.text_link}>
                자세히 보기
            </a>
        </>
    );
}

import React from 'react';
import { CommonUtils } from '@utils/Common';

export default ({ theme, item, baseUrl, onDelete }) => {
    const { thumb, filename = '' } = CommonUtils.getImageSummary(item);
    const src = thumb || CommonUtils.createImageUrl(filename, baseUrl);

    return (
        <li>
            <div className={theme.thmb}>
                <img src={src} alt={filename} />
            </div>
            <a className={theme.btn_del} onClick={onDelete}>
                <span className={theme.blind}>{CommonUtils.getLang('Buttons.delete')}</span>
            </a>
        </li>
    );
};

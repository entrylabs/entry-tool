import React from 'react';
import classname from 'classnames';
import { CommonUtils } from '@utils/Common';

export default ({ theme, item, baseUrl }) => {
    const { thumb, filename = '', imageType, name } = CommonUtils.getImageSummary(item);
    const src = thumb || CommonUtils.createImageUrl(filename, baseUrl);

    return (
        <>
            <div className={classname(theme.thmb, { [theme[imageType]]: !!imageType })}>
                <img src={src} alt={filename} />
            </div>
            <em className={theme.sjt}>{name}</em>
        </>
    );
};

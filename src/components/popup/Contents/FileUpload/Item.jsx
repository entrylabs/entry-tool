import React from 'react';
import Theme from '@utils/Theme';
import { CommonUtils } from '@utils/Common';
import classname from 'classnames';

const getImageSrc = (filename, fileUrl, baseUrl) => {
    if (fileUrl) {
        return fileUrl.thumb || fileUrl;
    }
    return CommonUtils.createImageUrl(filename, baseUrl);
};

export default ({ isSound, excluded, item = {}, onClick, baseUrl }) => {
    const theme = Theme.getStyle('popup');
    const { filename, fileurl } = item;
    const src = getImageSrc(filename, fileurl, baseUrl);
    return (
        <li className={classname({ [theme.on]: excluded })}>
            <a
                href="#NULL"
                className={theme.link}
                onClick={CommonUtils.handleClick(() => onClick(item))}
            >
                {isSound && <div className={classname(theme.thmb, theme.imico_pop_sound_thmb)} />}
                {!isSound && (
                    <div className={theme.thmb}>
                        <img src={src} alt="" />
                    </div>
                )}
                <em className={theme.sjt}>{item.name}</em>
            </a>
        </li>
    );
};

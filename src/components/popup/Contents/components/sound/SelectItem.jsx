import React from 'react';
import classname from 'classnames';
import { CommonUtils } from '@utils/Common';

export default ({ theme, item }) => {
    const { name } = CommonUtils.getImageSummary(item);
    return (
        <>
            <div className={classname(theme.thmb, theme.imico_pop_sound_thmb)} />
            <em className={theme.sjt}>{name}</em>
        </>
    );
};

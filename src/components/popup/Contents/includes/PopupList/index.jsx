import React from 'react';
import DefaultPopupList from './PopupList';
import TablePopupList from './TablePopupList';
import SoundPopupList from './SoundPopupList';

const PopupList = {
    sound: SoundPopupList,
    table: TablePopupList,
};

export default (props) => {
    const { type = 'default' } = props;
    let Component = DefaultPopupList;
    if (PopupList[type]) {
        Component = PopupList[type];
    }
    return <Component {...props} />;
};

import React from 'react';

import SoundPopupList from './sound/PopupList';
import SoundSelectItem from './sound/SelectItem';
import TablePopupList from './table/PopupList';
import TableSelectItem from './table/SelectItem';
import DefaultPopupList from './default/PopupList';
import DefaultSelectItem from './default/SelectItem';

const Components = {
    sound: {
        PopupList: SoundPopupList,
        SelectItem: SoundSelectItem,
    },
    table: {
        PopupList: TablePopupList,
        SelectItem: TableSelectItem,
    },
    default: {
        PopupList: DefaultPopupList,
        SelectItem: DefaultSelectItem,
    },
};

const createComonent = (name) => (props) => {
    let { type } = props;
    const TypeComponent = Components[type] ? Components[type] : Components.default;
    const View = TypeComponent[name];
    return <View {...props} />;
};

export const PopupList = createComonent('PopupList');
export const SelectItem = createComonent('SelectItem');

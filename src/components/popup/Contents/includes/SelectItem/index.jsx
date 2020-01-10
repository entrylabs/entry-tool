import React from 'react';
import DefaultSelectItem from './SelectItem';
import TableSelectItem from './TableSelectItem';
import SoundSelectItem from './SoundSelectItem';

const SelectItem = {
    sound: SoundSelectItem,
    table: TableSelectItem,
};

export default (props) => {
    const { type = 'default' } = props;
    let Component = DefaultSelectItem;
    if (SelectItem[type]) {
        Component = SelectItem[type];
    }
    return <Component {...props} />;
};

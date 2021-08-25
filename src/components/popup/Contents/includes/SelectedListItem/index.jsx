import React from 'react';
import SpriteSelectedItem from './SpriteSelectedListItem';

const ListSelectedItem = {
    sprite: SpriteSelectedItem,
};

export default (props) => {
    const { type } = props;
    const Component = ListSelectedItem[type];
    if (!Component) {
        return <></>;
    }
    return <Component {...props} />;
};

import React from 'react';
import SpriteSelectedListItem from './SpriteSelectedListItem';
import SoundSelectedListItem from './SoundSelectedListItem';

const ListSelectedItem = {
    sprite: SpriteSelectedListItem,
    picture: SpriteSelectedListItem,
    sound: SoundSelectedListItem,
};

export default (props) => {
    const { type } = props;
    const Component = ListSelectedItem[type];
    if (!Component) {
        return <></>;
    }
    return <Component {...props} />;
};

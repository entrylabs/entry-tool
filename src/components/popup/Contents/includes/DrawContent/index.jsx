import React from 'react';
import DefaultDrawContent from './DrawContent';
import TableDrawContent from './TableDrawContent';

const DrawContent = {
    table: TableDrawContent,
};

export default (props) => {
    const { type = 'default' } = props;
    const Component = DrawContent[type] || DefaultDrawContent;
    return <Component {...props} />;
};

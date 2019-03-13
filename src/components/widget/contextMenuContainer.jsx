import React, { Component } from 'react';
import withWrapper from '@hoc/withWrapper';
import { connect } from 'react-redux';
import ContextMenu from './contextMenu';

class ContextMenuContainer extends Component {
    render() {
        return <ContextMenu {...this.props} />;
    }
}

export default withWrapper({
    type: 'widget',
})(
    connect(
        undefined,
        undefined
    )(ContextMenuContainer)
);

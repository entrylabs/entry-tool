import React, { Component } from 'react';
import withWrapper from '@hoc/withWrapper';
import { connect } from 'react-redux';
import Draggable from './draggable';

class DraggableContainer extends Component {
    render() {
        return <Draggable {...this.props} />;
    }
}

export default withWrapper({
    type: 'Draggable',
})(
    connect(
        undefined,
        undefined
    )(DraggableContainer)
);

import React, { Component } from 'react';
import withWrapper from '@hoc/withWrapper';
import { connect } from 'react-redux';
import { onChangeDragType, onDragActionChange, onDragData } from '@actions/widget';
import Backpack from './Backpack';

class BackpackContainer extends Component {
    render() {
        // const { onChangeDragType, onDragActionChange, onDragData } = this.props;
        return (
            <Backpack
                {...this.props}
                // onDragData={onDragData}
                // onChangeDragType={onChangeDragType}
                // onDragActionChange={onDragActionChange}
            />
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    onChangeDragType: (type) => dispatch(onChangeDragType(type)),
    onDragActionChange: (type) => dispatch(onDragActionChange(type)),
    onDragData: (type) => dispatch(onDragData(type)),
});

export default withWrapper({
    type: 'widget',
})(
    connect(
        undefined,
        mapDispatchToProps
    )(BackpackContainer)
);

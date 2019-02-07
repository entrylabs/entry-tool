import React, { Component } from 'react';
import withWrapper from '@hoc/withWrapper';
import { connect } from 'react-redux';
import Sortable from './sortable';
import { onChangeSortableList } from '@actions/widget';

class SortableContainer extends Component {
    render() {
        return <Sortable {...this.props} />;
    }
}

const mapDispatchToProps = (dispatch) => ({
    onChangeList: (newIndex, oldIndex) => dispatch(onChangeSortableList(newIndex, oldIndex)),
});

export default withWrapper({
    type: 'sortable',
})(
    connect(
        undefined,
        mapDispatchToProps
    )(SortableContainer)
);

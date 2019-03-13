import React, { Component } from 'react';
import withWrapper from '@hoc/withWrapper';
import { connect } from 'react-redux';
import { onChangeDragType } from '@actions/widget';
import BackPack from './BackPack';

class BackPackContainer extends Component {
    render() {
        const { onChangeDragType } = this.props;
        return <BackPack {...this.props} onChangeDragType={onChangeDragType} />;
    }
}

const mapDispatchToProps = (dispatch) => ({
    onChangeDragType: (type) => dispatch(onChangeDragType(type)),
});

export default withWrapper({
    type: 'widget',
})(
    connect(
        undefined,
        mapDispatchToProps
    )(BackPackContainer)
);

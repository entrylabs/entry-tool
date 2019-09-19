import React, { Component } from 'react';
import withWrapper from '@hoc/withWrapper';
import { connect } from 'react-redux';
import { onPickColor } from '../../actions/widget';
import { visibleAction } from '../../actions/index';
import Dropper from './Dropper';

class DropperContainer extends Component {
    render() {
        return <Dropper {...this.props} />;
    }
}

const mapDispatchToProps = (dispatch) => ({
    onPickColor: (color) => dispatch(onPickColor(color)),
    setVisible: (isShow) => dispatch(visibleAction(isShow)),
});

export default withWrapper({
    type: 'dropper',
})(
    connect(
        undefined,
        mapDispatchToProps
    )(DropperContainer)
);

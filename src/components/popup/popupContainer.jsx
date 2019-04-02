import React, { Component } from 'react';
import withWrapper from '@hoc/withWrapper';
import { connect } from 'react-redux';
import Popup from './index';
import { visibleAction } from '@actions/index';

class PopupContainer extends Component {
    render() {
        return <Popup {...this.props} />;
    }
}

const mapStateToProps = (state) => ({
    ...state,
});

const mapDispatchToProps = (dispatch) => ({
    visibleAction: (visible) => dispatch(visibleAction(visible)),
});

export default withWrapper({
    type: 'popup',
})(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(PopupContainer)
);

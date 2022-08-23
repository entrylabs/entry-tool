import React, { Component } from 'react';
import withWrapper from '@hoc/withWrapper';
import { connect } from 'react-redux';
import List from './index';
import { visibleAction } from '@actions/index';

class ListTool extends Component {
    render() {
        return <List {...this.props} />;
    }
}

const mapStateToProps = (state) => ({
    ...state,
});

const mapDispatchToProps = (dispatch) => ({
    visibleAction: (visible) => dispatch(visibleAction(visible)),
});

export default withWrapper({
    type: 'listTool',
})(connect(mapStateToProps, mapDispatchToProps)(ListTool));

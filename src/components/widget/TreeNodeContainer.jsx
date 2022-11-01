import React, { Component } from 'react';
import withWrapper from '@hoc/withWrapper';
import { connect } from 'react-redux';
import { visibleAction } from '../../actions/index';
import Tree from './Tree';

class TreeNodeContainer extends Component {
    render() {
        return <Tree {...this.props} onClose={() => this.props.setVisible(false)} />;
    }
}

const mapDispatchToProps = (dispatch) => ({
    setVisible: (isShow) => dispatch(visibleAction(isShow)),
});

export default withWrapper({
    type: 'widget',
})(connect(undefined, mapDispatchToProps)(TreeNodeContainer));

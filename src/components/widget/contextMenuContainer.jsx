import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContextMenu from "./contextMenu";

class ContextMenuContainer extends Component {
    render() {
        return <ContextMenu {...this.props} />;
    }
}

export default connect(
    undefined,
    undefined,
)(ContextMenuContainer);

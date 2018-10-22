import React, { Component } from 'react';
import { connect } from 'react-redux';
import SideBar from './SideBar';
import BigICON from './BigICON';

class Select extends Component {
    renderContent() {
        if (this.props.type === 'sidebar') {
            return <SideBar data={this.props.data} sidebar={this.props.sidebar}/>;
        } else {
            return <BigICON data={this.props.data}/>;
        }
    }

    render() {
        return this.renderContent();
    }
}

const mapStateToProps = (state) => ({
    ...state,
});

export default connect(
    mapStateToProps,
    null,
)(Select);
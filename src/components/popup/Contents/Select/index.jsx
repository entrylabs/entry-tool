import React, { Component } from 'react';
import { connect } from 'react-redux';
import SideBar from './SideBar';
import BigICON from './BigICON';

class Select extends Component {
    renderContent() {
        if (this.props.subType === 'sidebar') {
            return (
                <SideBar
                    type={this.props.type}
                    data={this.props.data}
                    sidebar={this.props.sidebar}
                    t
                />
            );
        } else {
            return <BigICON type={this.props.type} data={this.props.data} />;
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
    null
)(Select);

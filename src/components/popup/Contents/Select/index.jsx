import React, { Component } from 'react';
import { connect } from 'react-redux';
import SideBar from './SideBar';
import BigICON from './BigICON';

class Select extends Component {
    renderContent() {
        if (this.props.sidebar) {
            return (
                <SideBar { ...this.props}/>
            );
        } else {
            return <BigICON { ...this.props}/>;
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

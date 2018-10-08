import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
    render() {
        const { children, visible, type } = this.props;
        return <div type={type}>{visible && children} </div>;
    }
}

const mapStateToProps = ({ commonReducer = {} } = {}) => {
    const { visible } = commonReducer;
    return {
        visible,
    };
};

export default connect(mapStateToProps)(App);

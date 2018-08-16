import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
    render() {
        const { children, visibility } = this.props;
        console.log(visibility);
        return <div>{visibility && children} </div>;
    }
}

const mapStateToProps = ({ commonReducer = {} } = {}) => {
    console.log(commonReducer);
    const { visibility } = commonReducer;
    return {
        visibility,
    };
};

export default connect(mapStateToProps)(App);

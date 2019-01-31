import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
    render() {
        const { children, visible, className, container } = this.props;
        container.style.display = visible ? 'block' : 'none';

        return <div className={className}>{visible && children} </div>;
    }
}

const mapStateToProps = ({ commonReducer = {} } = {}) => {
    const { visible } = commonReducer;
    return {
        visible,
    };
};

export default connect(mapStateToProps)(App);

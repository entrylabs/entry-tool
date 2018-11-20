import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onChangeAngle } from '@actions/widget';
import Angle from "./angle";

class AngleContainer extends Component {
    render() {
        return (
            <Angle { ...this.props } />
        );
    }
}


const mapDispatchToProps = (dispatch) => ({
    onChangeAngle: (value) => dispatch(onChangeAngle(value)),
});

export default connect(
    undefined,
    mapDispatchToProps
)(AngleContainer);

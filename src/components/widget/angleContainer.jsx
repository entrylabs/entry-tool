import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onChangeAngle } from '@actions/widget';
import Angle from "./angle";
import { clickButton } from "@actions/index";

class AngleContainer extends Component {
    render() {
        return (
            <Angle { ...this.props } />
        );
    }
}


const mapDispatchToProps = (dispatch) => ({
    onAngleChanged: (value) => dispatch(onChangeAngle(value)),
    onButtonPressed: (value) => dispatch(clickButton({ event: 'buttonPressed', data: value })),
    onBackButtonPressed: () => dispatch(clickButton({ event: 'backButtonPressed' })),
});

export default connect(
    undefined,
    mapDispatchToProps
)(AngleContainer);

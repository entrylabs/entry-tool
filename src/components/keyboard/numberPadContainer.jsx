import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clickButton } from '../../actions';
import NumberPad from './numberPad';

class numberPadContainer extends Component {
    render() {
        return <NumberPad {...this.props} />;
    }
}

const mapDispatchToProps = (dispatch) => ({
    onButtonPressed: (value) => dispatch(clickButton({ event: 'buttonPressed', data: value })),
    onBackButtonPressed: () => dispatch(clickButton({ event: 'backButtonPressed' })),
});

export default connect(
    undefined,
    mapDispatchToProps,
)(numberPadContainer);

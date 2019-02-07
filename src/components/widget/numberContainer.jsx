import React, { Component } from 'react';
import withWrapper from '@hoc/withWrapper';
import { connect } from 'react-redux';
import Number from './number';

class numberContainer extends Component {
    render() {
        return <Number {...this.props} />;
    }
}

/*const mapDispatchToProps = (dispatch) => ({
    onButtonPressed: (value) => dispatch(clickButton({ event: 'buttonPressed', data: value })),
    onBackButtonPressed: () => dispatch(clickButton({ event: 'backButtonPressed' })),
});*/

export default withWrapper({
    type: 'widget',
})(
    connect(
        undefined,
        undefined /*mapDispatchToProps*/
    )(numberContainer)
);

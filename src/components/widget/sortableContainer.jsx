import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sortable from './sortable';

class SortableContainer extends Component {
    render() {
        return <Sortable {...this.props} />;
    }
}

/*const mapDispatchToProps = (dispatch) => ({
    onButtonPressed: (value) => dispatch(clickButton({ event: 'buttonPressed', data: value })),
    onBackButtonPressed: () => dispatch(clickButton({ event: 'backButtonPressed' })),
});*/

export default connect(
    undefined,
    undefined /*mapDispatchToProps*/
)(SortableContainer);

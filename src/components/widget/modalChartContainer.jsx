import React, { Component } from 'react';
import withWrapper from '@hoc/withWrapper';
import { connect } from 'react-redux';
import { visibleAction } from '../../actions/index';
import ModalChart from './modalChart';

class ModalChartContainer extends Component {
    render() {
        return <ModalChart {...this.props} onClose={() => this.props.setVisible(false)} />;
    }
}

const mapDispatchToProps = (dispatch) => ({
    setVisible: (isShow) => dispatch(visibleAction(isShow)),
});

export default withWrapper({
    type: 'widget',
})(connect(undefined, mapDispatchToProps)(ModalChartContainer));

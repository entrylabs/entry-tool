import React, { Component } from 'react';
import { connect } from 'react-redux';
import { triggerEvent } from '../../../../actions';
import Terms from './Terms';
import Form from './Form';
import Info from './Info';
import Complete from './complete';
import Styles from '../../../../assets/scss/popup.scss';

class Index extends Component {
    constructor(props) {
        super(props);

        this.sequence = [<Terms/>, <Form/>, <Info/>, <Complete/>];
        this.state = {
            sequence: 1,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(data) {
        this.props.triggerEvent(data);
    }

    render() {
        return this.sequence[this.props.joinReducer.page];
    }
}

const mapStateToProps = (state) => ({
    ...state,
});

const mapDispatchToProps = (dispatch) => ({
    triggerEvent: (data) => dispatch(triggerEvent('draw', data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Index);


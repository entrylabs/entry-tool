import React, { Component } from 'react';
import { connect } from 'react-redux';
import Styles from '../../../../../assets/scss/popup.scss';
import { triggerEvent } from '../../../../../actions/index';

class Foot extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event, data) {
        this.props.triggerEvent(event, data);
    }

    render() {
        return (
            <div className={Styles.pop_btn_box}>
                <a href="#NULL" onClick={e => this.handleSubmit('close')}>취소</a>
                <a href="#NULL" className={Styles.active} onClick={e => this.handleSubmit('submit', { selected: this.props.popupReducer.selected })}>추가하기</a>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    ...state,
});

const mapDispatchToProps = (dispatch) => ({
    triggerEvent: (event, data) => dispatch(triggerEvent(event, data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Foot);
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
        return (
            <div className={Styles.popup_wrap}>
                <header className={Styles.pop_header}>
                    <h1>회원가입</h1>
                    <button onClick={this.close} className={`${Styles.btn_back} ${Styles.imbtn_pop_back}`}>
                        <span className={Styles.blind}>뒤로가기</span>
                    </button>
                </header>
                {this.sequence[this.props.joinReducer.page]}
            </div>
        );
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


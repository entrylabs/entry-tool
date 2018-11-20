import React, { Component } from 'react';
import { connect } from 'react-redux';
import Styles from '@assets/scss/popup.scss';
import { triggerEvent } from '@actions';

class Complete extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event, data) {
        this.props.triggerEvent(event, data);
    }

    drawEmailAuthMsg() {
        if (this.props.joinReducer.email) {
            return (
                <p className={Styles.result_dsc}>
                    입력된 이메일 주소로 인증 메일이 발송되었습니다. <br/>
                    이메일 주소를 인증해주세요.
                </p>
            );
        }
        return '';
    }

    render() {
        return (
            <section className={`${Styles.pop_content} ${Styles.login_area}`}>
                <section className={Styles.login_header}>
                    <h2 className={`${Styles.tit} ${Styles.imico_entrylogo}`}>
                        <span className={Styles.blind}>entry</span>
                    </h2>
                    <p className={Styles.dsc}>
                        소프트웨어의 첫걸음,<br/>
                        엔트리에 오신 것을 환영 합니다.
                    </p>
                </section>
                <section className={`${Styles.result_cont} ${Styles.imico_signup}`}>
                    <strong className={Styles.result_tit}>
                        회원가입이 완료되었습니다.
                    </strong>
                    {this.drawEmailAuthMsg()}
                    <div className={Styles.pop_btn_box}>
                        <a href="#NULL" className={Styles.active} onClick={e => this.handleSubmit('close')}>확인</a>
                    </div>
                </section>
            </section>
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
)(Complete);


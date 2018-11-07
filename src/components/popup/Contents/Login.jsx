import React, { Component } from 'react';
import { connect } from 'react-redux';
import Styles from '../../../assets/scss/popup.scss';
import { triggerEvent } from '../../../actions';

class Login extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event, data) {
        this.props.triggerEvent(event, data);
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
                <section className={`${Styles.pop_content} ${Styles.login_area}`}>
                    <section className={Styles.login_header}>
                        <h2 className={`${Styles.tit} ${Styles.imico_entrylogo}`}>
                            <span className={Styles.blind}>entry</span>
                        </h2>
                    </section>
                    <section className={Styles.login_cont}>
                        <div className={Styles.input_box}>
                            {/* 로그인 default */}
                            <div className={Styles.pop_inpt_text}>
                                <label htmlFor="inpt_id" className={Styles.inpt_label}>
                                    아이디 입력 <em className={Styles.chk_point}>(필수)</em>
                                </label>
                                <input type="text" id="inpt_id" name="inpt_id" placeholder="4~20자의 영문 대 소문자, 숫자를 사용하세요." />
                            </div>
                            <div className={Styles.pop_inpt_text}>
                                <label htmlFor="inpt_pw1" className={Styles.inpt_label}>
                                    비밀번호 입력 <em className={Styles.chk_point}>(필수)</em>
                                </label>
                                <input type="password" id="inpt_pw1" name="inpt_pw1" placeholder="5~20자의 영문 대 소문자, 숫자를 사용하세요." />
                                <div className={Styles.login_chk_box}>
                                        <span className={Styles.pop_checkbox}>
                                            <input type="checkbox" id="login_id" name="login_id" className={Styles.blind} />
                                            <label htmlFor="login_id" className={Styles.imbtn_pop_checked}>
                                                <span className={Styles.text}>
                                                    아이디 저장
                                                </span>
                                            </label>
                                        </span>
                                    <span className={Styles.pop_checkbox}>
                                            <input type="checkbox" id="login_auto" name="login_auto" className={Styles.blind} />
                                            <label htmlFor="login_auto" className={Styles.imbtn_pop_checked}>
                                                <span className={Styles.text}>
                                                    자동 로그인
                                                </span>
                                            </label>
                                        </span>
                                </div>
                            </div>

                            {/* 로그인 문자 실패 */}
                            {/* 에러일 경우 error 클래스 추가 */}
                            <div className={`${Styles.pop_inpt_text} ${Styles.error}`}>
                                <label htmlFor="inpt_id" className={Styles.inpt_label}>
                                    아이디 입력 <em className={Styles.chk_point}>(필수)</em>
                                </label>
                                <input type="text" id="inpt_id" name="inpt_id" />
                            </div>
                            {/* 에러일 경우 error 클래스 추가 */}
                            <div className={`${Styles.pop_inpt_text} ${Styles.error}`}>
                                <label htmlFor="inpt_pw1" className={Styles.inpt_label}>
                                    비밀번호 입력 <em className={Styles.chk_point}>(필수)</em>
                                </label>
                                <input type="password" id="inpt_pw1" name="inpt_pw1" />
                                <div className={Styles.login_chk_box}>
                                        <span className={Styles.pop_checkbox}>
                                            <input type="checkbox" id="login_id" name="login_id" className={Styles.blind} />
                                            <label htmlFor="login_id" className={Styles.imbtn_pop_checked}>
                                                <span className={Styles.text}>
                                                    아이디 저장
                                                </span>
                                            </label>
                                        </span>
                                    <span className={Styles.pop_checkbox}>
                                            <input type="checkbox" id="login_auto" name="login_auto" className={Styles.blind} />
                                            <label htmlFor="login_auto" className={Styles.imbtn_pop_checked}>
                                                <span className={Styles.text}>
                                                    자동 로그인
                                                </span>
                                            </label>
                                        </span>
                                    <p className={Styles.error_dsc}>
                                        * 아이디 또는 비밀번호를 잘못 입력하셨습니다.
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className={Styles.pop_btn_box}>
                            <a href="#" className={Styles.active}>로그인</a>
                        </div>
                    </section>
                    <div className={Styles.find_log}>
                        <a href="#">아이디, 비밀번호 찾기</a>
                        <a href="#">회원가입하기</a>
                    </div>
                </section>
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
)(Login);


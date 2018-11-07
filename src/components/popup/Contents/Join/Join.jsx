import React, { Component } from 'react';
import { connect } from 'react-redux';
import Styles from '../../../../assets/scss/popup.scss';
import { triggerEvent } from '../../../../actions';

class Join extends Component {
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
                    <button
                        onClick={this.close}
                        className={`${Styles.btn_back} ${Styles.imbtn_pop_back}`}
                    >
                        <span className={Styles.blind}>뒤로가기</span>
                    </button>
                </header>
                <section className={`${Styles.pop_content} ${Styles.login_area}`}>
                    <section className={Styles.login_header}>
                        <h2 className={`${Styles.tit} ${Styles.imico_entrylogo}`}>
                            <span className={Styles.blind}>entry</span>
                        </h2>
                        <p className={Styles.dsc}>
                            소프트웨어의 첫걸음,
                            <br />
                            엔트리에 오신 것을 환영 합니다.
                        </p>
                    </section>
                    <section className={Styles.login_cont}>
                        <div className={Styles.depth_list}>
                            <span className={Styles.on}>1</span>
                            {/* [D] 최종 단계에 있을 곳에 <em className={Styles.blind}>단계</em> 찍어주세요  */}
                            <span className={Styles.on}>2<em className={Styles.blind}>단계</em></span>
                            <span>3</span>
                        </div>
                        <h3 className={Styles.cont_tit}>아이디, 비밀번호 입력</h3>
                        <div className={Styles.input_box}>
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
                            </div>
                            <div className={Styles.pop_inpt_text}>
                                <label htmlFor="inpt_pw2" className={Styles.inpt_label}>
                                    비밀번호 확인 <em className={Styles.chk_point}>(필수)</em>
                                </label>
                                <input type="password" id="inpt_pw2" name="inpt_pw2" placeholder="비밀번호를 한번 더 입력하세요." />
                            </div>

                            {/* error 문구 */}
                            {/* error 문구 일때 error 클래스 추가 */}
                            <div className={`${Styles.pop_inpt_text} ${Styles.error}`}>
                                <label htmlFor="inpt_id" className={Styles.inpt_label}>
                                    아이디 입력 <em className={Styles.chk_point}>(필수)</em>
                                </label>
                                <input type="text" id="inpt_id" name="inpt_id" />
                                <p className={Styles.error_dsc}>
                                    * 4~20자의 영문/숫자를 조합하여 아이디를 입력하세요.
                                </p>
                            </div>
                            <div className={`${Styles.pop_inpt_text} ${Styles.error}`}>
                                <label htmlFor="inpt_pw1" className={Styles.inpt_label}>
                                    비밀번호 입력 <em className={Styles.chk_point}>(필수)</em>
                                </label>
                                <input type="password" id="inpt_pw1" name="inpt_pw1" />
                                <p className={Styles.error_dsc}>
                                    * 5~10자의 영문/숫자를 조합하여 비밀번호를 입력하세요.
                                </p>
                            </div>
                            <div className={`${Styles.pop_inpt_text} ${Styles.error}`}>
                                <label htmlFor="inpt_pw2" className={Styles.inpt_label}>
                                    비밀번호 확인 <em className={Styles.chk_point}>(필수)</em>
                                </label>
                                <input type="password" id="inpt_pw2" name="inpt_pw2" />
                                <p className={Styles.error_dsc}>
                                    * 같은 비밀번호를 입력해 주세요.
                                </p>
                            </div>
                        </div>
                        <div className={Styles.pop_btn_box}>
                            <a href="#">이전</a>
                            <a href="#" className={Styles.active}>
                                다음
                            </a>
                        </div>
                    </section>
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
)(Join);


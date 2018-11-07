import React, { Component } from 'react';
import { connect } from 'react-redux';
import Styles from '../../../../assets/scss/popup.scss';
import { triggerEvent } from '../../../actions';

class Sample extends Component {
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
                        <p className={Styles.dsc}>
                            소프트웨어의 첫걸음,<br />
                            엔트리에 오신 것을 환영 합니다.
                        </p>
                    </section>
                    <section className={Styles.login_cont}>
                        <div className={Styles.depth_list}>
                            <span className={Styles.on}>1</span>
                            <span className={Styles.on}>2</span>
                            {/* [D] 최종 단계에 있을 곳에 <em className={Styles.blind}>단계</em> 찍어주세요  */}
                            <span className={Styles.on}>3<em className={Styles.blind}>단계</em></span>
                        </div>
                        <h3 className={Styles.cont_tit}>개인정보 입력</h3>
                        <div className={Styles.input_box}>
                            {/* [D] 링크가 클릭되면 pop_selectbox클래스에 on 클래스 추가  */}
                            <div className={Styles.pop_selectbox}>
                                <em className={Styles.inpt_label}>
                                    학년 <em className={Styles.chk_point}>(필수)</em>
                                </em>
                                <a href="#" className={`${Styles.select_link} ${Styles.imico_pop_select_arr_down}`}>
                                    학년을 선택하세요.
                                </a>
                                {/* 공통 툴팁의 화살표 기본 위치는 가운데 입니다. */}
                                {/* 툴팁 화살표 위치를 변경하려면 arr 요소에서 margin-left:0;left: 원하는 값 으로 style이 정의 되어야 합니다. */}
                                <div className={Styles.tooltip_box}>
                                    <div className={Styles.tooltip_inner}>
                                        <ul className={Styles.select_list}>
                                            <li className={Styles.list_item}>
                                                <a href="#" className={Styles.list_link}>
                                                    초등 1학년
                                                </a>
                                            </li>
                                            <li className={Styles.list_item}>
                                                <a href="#" className={Styles.list_link}>
                                                    초등 2학년
                                                </a>
                                            </li>
                                            <li className={Styles.list_item}>
                                                <a href="#" className={Styles.list_link}>
                                                    초등 3학년
                                                </a>
                                            </li>
                                            <li className={Styles.list_item}>
                                                <a href="#" className={Styles.list_link}>
                                                    초등 4학년
                                                </a>
                                            </li>
                                            <li className={Styles.list_item}>
                                                <a href="#" className={Styles.list_link}>
                                                    초등 5학년
                                                </a>
                                            </li>
                                            <li className={Styles.list_item}>
                                                <a href="#" className={Styles.list_link}>
                                                    초등 6학년
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <span className={Styles.arr}><i></i></span>
                                </div>
                            </div>
                            {/* [D] 링크가 클릭되면 on 클래스 추가 해주세요 */}
                            <div className={`${Styles.pop_selectbox} ${Styles.on}`}>
                                <em className={Styles.inpt_label}>
                                    성별 <em className={Styles.chk_point}>(필수)</em>
                                </em>
                                {/* [D] on 클래스가 들어오면  imico_pop_select_arr_up 으로 바꿔주세요 */}
                                <a href="#" className={`${Styles.select_link} ${Styles.imico_pop_select_arr_up}`}>
                                    성별을 선택하세요.
                                </a>
                                {/* 공통 툴팁의 화살표 기본 위치는 가운데 입니다. */}
                                <div className={Styles.tooltip_box}>
                                    <div className={Styles.tooltip_inner}>
                                        <ul className={Styles.select_list}>
                                            <li className={Styles.list_item}>
                                                <a href="#" className={Styles.list_link}>
                                                    남자
                                                </a>
                                            </li>
                                            <li className={Styles.list_item}>
                                                <a href="#" className={Styles.list_link}>
                                                    여자
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <span className={Styles.arr}><i></i></span>
                                </div>
                            </div>

                            <div className={Styles.pop_inpt_text}>
                                <label htmlFor="inpt_email" className={Styles.inpt_label}>
                                    이메일 <em className={Styles.chk_point}>(선택)</em>
                                </label>
                                <input type="text" id="inpt_email" name="inpt_email" placeholder="이메일 주소를 입력하세요." />
                                <p className={Styles.email_dsc}>
                                    * 비밀번호를 잊은 경우 이메일로 비밀번호를 찾을 수 있습니다.
                                </p>
                            </div>


                            {/* error 문구 */}
                            {/* error 문구가 뜨면 error 클래스 추가 */}
                            <div className={`${Styles.pop_selectbox} ${Styles.error}`}>
                                <em className={Styles.inpt_label}>
                                    학년 <em className={Styles.chk_point}>(필수)</em>
                                </em>
                                <a href="#" className={`${Styles.select_link} ${Styles.imico_pop_select_arr_down}`}>
                                    학년을 선택하세요.
                                </a>
                                {/* 공통 툴팁의 화살표 기본 위치는 가운데 입니다. */}
                                {/* 툴팁 화살표 위치를 변경하려면 arr 요소에서 margin-left:0;left: 원하는 값 으로 style이 정의 되어야 합니다. */}
                                <p className={Styles.error_dsc}>* 학년을 선택해주세요.</p>
                            </div>
                            {/* [D] 링크가 클릭되면 on 클래스 추가 해주세요 */}
                            {/* error 문구가 뜨면 error 클래스 추가 */}
                            <div className={`${Styles.pop_selectbox} ${Styles.error}`}>
                                <em className={Styles.inpt_label}>
                                    성별 <em className={Styles.chk_point}>(필수)</em>
                                </em>
                                {/* [D] on 클래스가 들어오면  imico_pop_select_arr_up 으로 바꿔주세요 */}
                                <a href="#" className={`${Styles.select_link} ${Styles.imico_pop_select_arr_up}`}>
                                    성별을 선택하세요.
                                </a>
                                <p className={Styles.error_dsc}>* 성별을 선택해주세요.</p>
                            </div>
                            <div className={Styles.pop_inpt_text}>
                                <label htmlFor="inpt_email" className={Styles.inpt_label}>
                                    이메일 <em className={Styles.chk_point}>(선택)</em>
                                </label>
                                <input type="text" id="inpt_email" name="inpt_email" placeholder="이메일 주소를 입력하세요." />
                                <p className={Styles.email_dsc}>
                                    * 비밀번호를 잊은 경우 이메일로 비밀번호를 찾을 수 있습니다.
                                </p>
                            </div>
                        </div>
                        <div className={Styles.pop_btn_box}>
                            <a href="#">이전</a>
                            <a href="#" className={Styles.active}>다음</a>
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
)(Sample);


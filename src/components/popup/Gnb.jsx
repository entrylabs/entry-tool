import React, { Component } from 'react';
import { connect } from 'react-redux';
import { visibleAction } from '../../actions/index';
import Styles from '../../assets/entry/scss/gnb.scss';

class Gnb extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        window.onpopstate = this.close;
        window.history.pushState({}, 'popup');
    }
    componentWillUnmount() {
        window.removeEventListener('onpopstate', this.close, false);
    }

    close = () => {
        const { visibleAction } = this.props;
        visibleAction(false);
    };

    render() {
        return (
            <div>
                {/* 개발해주실때, header의 style은 제거 해주세요. */}
                {/* 새로 만들기 / 오프라인 작품 불러오기 */}
                <header className={Styles.common_gnb}>
                    <h1 className={`${Styles.logo} ${Styles.logo_gnb}`}>
                        <a href="#">Entry</a>
                    </h1>
                    <div className={Styles.srch_box}>
                        <input type="text" id="common_srch" name="common_srch" placeholder="[스선,인작]테스트입니다." />
                    </div>
                    <div className={Styles.group_box}>
                        <div className={Styles.group_inner}>
                            <div className={Styles.work_space}>
                                {/* 링크가 클릭되면 on 클래스 넣어주세요 */}
                                <a href="#" title="언어선택" className={`${Styles.btn_work_space} ${Styles.btn_workspace_lang}`}>
                                    <span className={Styles.blind}>언어선택</span>
                                </a>
                                <div className={Styles.tooltip_box}>
                                    <div className={Styles.tooltip_inner}>
                                        <ul className={Styles.select_list}>
                                            <li className={Styles.list_item}>
                                                <a href="#" className={Styles.list_link}>
                                                    블록코딩
                                                </a>
                                            </li>
                                            <li className={Styles.list_item}>
                                                <a href="#" className={Styles.list_link}>
                                                    엔트리 파이선
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <span className={Styles.arr}><i></i></span>
                                </div>

                            </div>
                            <div className={Styles.work_space}>
                                <a href="#" title="파일" className={`${Styles.btn_work_space} ${Styles.btn_workspace_file} ${Styles.on}`}>
                                    <span className={Styles.blind}>파일</span>
                                </a>
                                <div className={Styles.tooltip_box}>
                                    <div className={Styles.tooltip_inner}>
                                        <ul className={Styles.select_list}>
                                            <li className={Styles.list_item}>
                                                <a href="#" className={Styles.list_link}>
                                                    새로 만들기
                                                </a>
                                            </li>
                                            <li className={Styles.list_item}>
                                                <a href="#" className={Styles.list_link}>
                                                    오프라인 작품 불러오기
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <span className={Styles.arr}><i></i></span>
                                </div>
                            </div>
                            <div className={Styles.work_space}>
                                <a href="#" title="저장하기" className={`${Styles.btn_work_space} ${Styles.btn_workspace_save}`}>
                                    <span className={Styles.blind}>저장하기</span>
                                </a>
                                <div className={Styles.tooltip_box}>
                                    <div className={Styles.tooltip_inner}>
                                        <ul className={Styles.select_list}>
                                            <li className={Styles.list_item}>
                                                <a href="#" className={Styles.list_link}>
                                                    내 컴퓨터에 저장하기
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <span className={Styles.arr}><i></i></span>
                                </div>
                            </div>
                            <div className={Styles.work_space}>
                                <a href="#" title="도움말" className={`${Styles.btn_work_space} ${Styles.btn_workspace_help}`}>
                                    <span className={Styles.blind}>도움말</span>
                                </a>
                                <div className={Styles.tooltip_box}>
                                    <div className={Styles.tooltip_inner}>
                                        <ul className={Styles.select_list}>
                                            <li className={Styles.list_item}>
                                                <a href="#" className={Styles.list_link}>
                                                    만들기 이용 안내
                                                </a>
                                            </li>
                                            <li className={Styles.list_item}>
                                                <a href="#" className={Styles.list_link}>
                                                    블록 도움말
                                                </a>
                                            </li>
                                            <li className={Styles.list_item}>
                                                <a href="#" className={Styles.list_link}>
                                                    하드웨어 연결 안내
                                                </a>
                                            </li>
                                            <li className={Styles.list_item}>
                                                <a href="#" className={Styles.list_link}>
                                                    엔트리파이선 이용 안내
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <span className={Styles.arr}><i></i></span>
                                </div>
                            </div>
                            <div className={Styles.work_space}>
                                <a href="#" title="인쇄" className={Styles.btn_workspace_print}>
                                    <span className={Styles.blind}>인쇄</span>
                                </a>
                            </div>
                        </div>

                        <div className={Styles.group_inner}>
                            <div className={Styles.work_space}>
                                <a href="#" title="입력취소" className={Styles.btn_workspace_redo}>
                                    <span className={Styles.blind}>입력취소</span>
                                </a>
                            </div>
                            <div className={Styles.work_space}>
                                <a href="#" title="다시실행" className={Styles.btn_workspace_undo}>
                                    <span className={Styles.blind}>다시실행</span>
                                </a>
                            </div>
                        </div>

                        <div className={Styles.group_inner}>
                            <div className={Styles.work_space}>
                                <a href="#" className={Styles.link_workspace_text}>
                                    기본형<em className={Styles.ico_workspace_practical}>실과</em>
                                </a>
                            </div>
                        </div>

                        <div className={Styles.group_inner}>
                            <div className={Styles.work_space}>
                                <a href="#" className={Styles.link_workspace_text}>
                                    로그인
                            </a>
                                <a href="#" className={Styles.link_workspace_text}>
                                    회원가입
                            </a>
                            </div>
                        </div>
                        <div className={Styles.lang_select_box}>
                            {/* 링크가 클릭되면 on 클래스 추가 */}
                            <a href="#" className={`${Styles.select_link} ${Styles.ico_white_select_arr}`}>한국어</a>
                            <div className={Styles.tooltip_box}>
                                <div className={Styles.tooltip_inner}>
                                    <ul className={Styles.select_list}>
                                        <li className={Styles.list_item}>
                                            <a href="#" className={Styles.list_link}>
                                                한국어
                                        </a>
                                        </li>
                                        <li className={Styles.list_item}>
                                            <a href="#" className={Styles.list_link}>
                                                English
                                        </a>
                                        </li>
                                        <li className={Styles.list_item}>
                                            <a href="#" className={Styles.list_link}>
                                                日本語
                                        </a>
                                        </li>
                                        <li className={Styles.list_item}>
                                            <a href="#" className={Styles.list_link}>
                                                베트남어
                                        </a>
                                        </li>
                                    </ul>
                                </div>
                                <span className={`${Styles.arr} ${Styles.free}`}><i></i></span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* 저장하기 */}
                <header className={Styles.common_gnb} style={{ marginTop: '126px' }}>
                    <h1 className={`${Styles.logo} ${Styles.logo_gnb}`}>
                        <a href="#">Entry</a>
                    </h1>
                    <div className={Styles.srch_box}>
                        <input type="text" id="common_srch" name="common_srch" placeholder="[스선,인작]테스트입니다." />
                    </div>
                    <div className={Styles.group_box}>
                        <div className={Styles.group_inner}>
                            <div className={Styles.work_space}>
                                {/* 링크가 클릭되면 on 클래스 넣어주세요 */}
                                <a href="#" title="언어선택" className={`${Styles.btn_work_space} ${Styles.btn_workspace_lang}`}>
                                    <span className={Styles.blind}>언어선택</span>
                                </a>
                                <div className={Styles.tooltip_box}>
                                    <div className={Styles.tooltip_inner}>
                                        <ul className={Styles.select_list}>
                                            <li className={Styles.list_item}>
                                                <a href="#" className={Styles.list_link}>
                                                    블록코딩
                                                </a>
                                            </li>
                                            <li className={Styles.list_item}>
                                                <a href="#" className={Styles.list_link}>
                                                    엔트리 파이선
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <span className={Styles.arr}><i></i></span>
                                </div>

                            </div>
                            <div className={Styles.work_space}>
                                <a href="#" title="파일" className={`${Styles.btn_work_space} ${Styles.btn_workspace_file}`}>
                                    <span className={Styles.blind}>파일</span>
                                </a>
                                <div className={Styles.tooltip_box}>
                                    <div className={Styles.tooltip_inner}>
                                        <ul className={Styles.select_list}>
                                            <li className={Styles.list_item}>
                                                <a href="#" className={Styles.list_link}>
                                                    새로 만들기
                                                </a>
                                            </li>
                                            <li className={Styles.list_item}>
                                                <a href="#" className={Styles.list_link}>
                                                    오프라인 작품 불러오기
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <span className={Styles.arr}><i></i></span>
                                </div>
                            </div>
                            <div className={Styles.work_space}>
                                <a href="#" title="저장하기" className={`${Styles.btn_work_space} ${Styles.btn_workspace_save} ${Styles.on}`}>
                                    <span className={Styles.blind}>저장하기</span>
                                </a>
                                <div className={Styles.tooltip_box}>
                                    <div className={Styles.tooltip_inner}>
                                        <ul className={Styles.select_list}>
                                            <li className={Styles.list_item}>
                                                <a href="#" className={Styles.list_link}>
                                                    내 컴퓨터에 저장하기
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <span className={Styles.arr}><i></i></span>
                                </div>
                            </div>
                            <div className={Styles.work_space}>
                                <a href="#" title="도움말" className={`${Styles.btn_work_space} ${Styles.btn_workspace_help}`}>
                                    <span className={Styles.blind}>도움말</span>
                                </a>
                                <div className={Styles.tooltip_box}>
                                    <div className={Styles.tooltip_inner}>
                                        <ul className={Styles.select_list}>
                                            <li className={Styles.list_item}>
                                                <a href="#" className={Styles.list_link}>
                                                    만들기 이용 안내
                                                </a>
                                            </li>
                                            <li className={Styles.list_item}>
                                                <a href="#" className={Styles.list_link}>
                                                    블록 도움말
                                                </a>
                                            </li>
                                            <li className={Styles.list_item}>
                                                <a href="#" className={Styles.list_link}>
                                                    하드웨어 연결 안내
                                                </a>
                                            </li>
                                            <li className={Styles.list_item}>
                                                <a href="#" className={Styles.list_link}>
                                                    엔트리파이선 이용 안내
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <span className={Styles.arr}><i></i></span>
                                </div>
                            </div>
                            <div className={Styles.work_space}>
                                <a href="#" title="인쇄" className={Styles.btn_workspace_print}>
                                    <span className={Styles.blind}>인쇄</span>
                                </a>
                            </div>
                        </div>

                        <div className={Styles.group_inner}>
                            <div className={Styles.work_space}>
                                <a href="#" title="입력취소" className={Styles.btn_workspace_redo}>
                                    <span className={Styles.blind}>입력취소</span>
                                </a>
                            </div>
                            <div className={Styles.work_space}>
                                <a href="#" title="다시실행" className={Styles.btn_workspace_undo}>
                                    <span className={Styles.blind}>다시실행</span>
                                </a>
                            </div>
                        </div>

                        <div className={Styles.group_inner}>
                            <div className={Styles.work_space}>
                                <a href="#" className={Styles.link_workspace_text}>
                                    기본형<em className={Styles.ico_workspace_practical}>실과</em>
                                </a>
                            </div>
                        </div>

                        <div className={Styles.group_inner}>
                            <div className={Styles.work_space}>
                                <a href="#" className={Styles.link_workspace_text}>
                                    로그인
                            </a>
                                <a href="#" className={Styles.link_workspace_text}>
                                    회원가입
                            </a>
                            </div>
                        </div>
                        <div className={Styles.lang_select_box}>
                            {/* 링크가 클릭되면 on 클래스 추가 */}
                            <a href="#" className={`${Styles.select_link} ${Styles.ico_white_select_arr}`}>한국어</a>
                            <div className={Styles.tooltip_box}>
                                <div className={Styles.tooltip_inner}>
                                    <ul className={Styles.select_list}>
                                        <li className={Styles.list_item}>
                                            <a href="#" className={Styles.list_link}>
                                                한국어
                                        </a>
                                        </li>
                                        <li className={Styles.list_item}>
                                            <a href="#" className={Styles.list_link}>
                                                English
                                        </a>
                                        </li>
                                        <li className={Styles.list_item}>
                                            <a href="#" className={Styles.list_link}>
                                                日本語
                                        </a>
                                        </li>
                                        <li className={Styles.list_item}>
                                            <a href="#" className={Styles.list_link}>
                                                베트남어
                                        </a>
                                        </li>
                                    </ul>
                                </div>
                                <span className={`${Styles.arr} ${Styles.free}`}><i></i></span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* 도움말 */}
                <header className={Styles.common_gnb} style={{ marginTop: '80px' }}>
                    <h1 className={`${Styles.logo} ${Styles.logo_gnb}`}>
                        <a href="#">Entry</a>
                    </h1>
                    <div className={Styles.srch_box}>
                        <input type="text" id="common_srch" name="common_srch" placeholder="[스선,인작]테스트입니다." />
                    </div>
                    <div className={Styles.group_box}>
                        <div className={Styles.group_inner}>
                            <div className={Styles.work_space}>
                                {/* 링크가 클릭되면 on 클래스 넣어주세요 */}
                                <a href="#" title="언어선택" className={`${Styles.btn_work_space} ${Styles.btn_workspace_lang}`}>
                                    <span className={Styles.blind}>언어선택</span>
                                </a>
                                <div className={Styles.tooltip_box}>
                                    <div className={Styles.tooltip_inner}>
                                        <ul className={Styles.select_list}>
                                            <li className={Styles.list_item}>
                                                <a href="#" className={Styles.list_link}>
                                                    블록코딩
                                                </a>
                                            </li>
                                            <li className={Styles.list_item}>
                                                <a href="#" className={Styles.list_link}>
                                                    엔트리 파이선
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <span className={Styles.arr}><i></i></span>
                                </div>

                            </div>
                            <div className={Styles.work_space}>
                                <a href="#" title="파일" className={`${Styles.btn_work_space} ${Styles.btn_workspace_file}`}>
                                    <span className={Styles.blind}>파일</span>
                                </a>
                                <div className={Styles.tooltip_box}>
                                    <div className={Styles.tooltip_inner}>
                                        <ul className={Styles.select_list}>
                                            <li className={Styles.list_item}>
                                                <a href="#" className={Styles.list_link}>
                                                    새로 만들기
                                                </a>
                                            </li>
                                            <li className={Styles.list_item}>
                                                <a href="#" className={Styles.list_link}>
                                                    오프라인 작품 불러오기
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <span className={Styles.arr}><i></i></span>
                                </div>
                            </div>
                            <div className={Styles.work_space}>
                                <a href="#" title="저장하기" className={`${Styles.btn_work_space} ${Styles.btn_workspace_save}`}>
                                    <span className={Styles.blind}>저장하기</span>
                                </a>
                                <div className={Styles.tooltip_box}>
                                    <div className={Styles.tooltip_inner}>
                                        <ul className={Styles.select_list}>
                                            <li className={Styles.list_item}>
                                                <a href="#" className={Styles.list_link}>
                                                    내 컴퓨터에 저장하기
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <span className={Styles.arr}><i></i></span>
                                </div>
                            </div>
                            <div className={Styles.work_space}>
                                <a href="#" title="도움말" className={`${Styles.btn_work_space} ${Styles.btn_workspace_help} ${Styles.on}`}>
                                    <span className={Styles.blind}>도움말</span>
                                </a>
                                <div className={Styles.tooltip_box}>
                                    <div className={Styles.tooltip_inner}>
                                        <ul className={Styles.select_list}>
                                            <li className={Styles.list_item}>
                                                <a href="#" className={Styles.list_link}>
                                                    만들기 이용 안내
                                                </a>
                                            </li>
                                            <li className={Styles.list_item}>
                                                <a href="#" className={Styles.list_link}>
                                                    블록 도움말
                                                </a>
                                            </li>
                                            <li className={Styles.list_item}>
                                                <a href="#" className={Styles.list_link}>
                                                    하드웨어 연결 안내
                                                </a>
                                            </li>
                                            <li className={Styles.list_item}>
                                                <a href="#" className={Styles.list_link}>
                                                    엔트리파이선 이용 안내
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <span className={Styles.arr}><i></i></span>
                                </div>
                            </div>
                            <div className={Styles.work_space}>
                                <a href="#" title="인쇄" className={Styles.btn_workspace_print}>
                                    <span className={Styles.blind}>인쇄</span>
                                </a>
                            </div>
                        </div>

                        <div className={Styles.group_inner}>
                            <div className={Styles.work_space}>
                                <a href="#" title="입력취소" className={Styles.btn_workspace_redo}>
                                    <span className={Styles.blind}>입력취소</span>
                                </a>
                            </div>
                            <div className={Styles.work_space}>
                                <a href="#" title="다시실행" className={Styles.btn_workspace_undo}>
                                    <span className={Styles.blind}>다시실행</span>
                                </a>
                            </div>
                        </div>

                        <div className={Styles.group_inner}>
                            <div className={Styles.work_space}>
                                <a href="#" className={Styles.link_workspace_text}>
                                    기본형<em className={Styles.ico_workspace_practical}>실과</em>
                                </a>
                            </div>
                        </div>

                        <div className={Styles.group_inner}>
                            <div className={Styles.work_space}>
                                <a href="#" className={Styles.link_workspace_text}>
                                    로그인
                            </a>
                                <a href="#" className={Styles.link_workspace_text}>
                                    회원가입
                            </a>
                            </div>
                        </div>
                        <div className={Styles.lang_select_box}>
                            {/* 링크가 클릭되면 on 클래스 추가 */}
                            <a href="#" className={`${Styles.select_link} ${Styles.ico_white_select_arr}`}>한국어</a>
                            <div className={Styles.tooltip_box}>
                                <div className={Styles.tooltip_inner}>
                                    <ul className={Styles.select_list}>
                                        <li className={Styles.list_item}>
                                            <a href="#" className={Styles.list_link}>
                                                한국어
                                        </a>
                                        </li>
                                        <li className={Styles.list_item}>
                                            <a href="#" className={Styles.list_link}>
                                                English
                                        </a>
                                        </li>
                                        <li className={Styles.list_item}>
                                            <a href="#" className={Styles.list_link}>
                                                日本語
                                        </a>
                                        </li>
                                        <li className={Styles.list_item}>
                                            <a href="#" className={Styles.list_link}>
                                                베트남어
                                        </a>
                                        </li>
                                    </ul>
                                </div>
                                <span className={`${Styles.arr} ${Styles.free}`}><i></i></span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* 프로그래밍 언어 / 국가별 언어 선택 */}
                <header className={Styles.common_gnb} style={{ marginTop: '220px' }}>
                    <h1 className={`${Styles.logo} ${Styles.logo_gnb}`}>
                        <a href="#">Entry</a>
                    </h1>
                    <div className={Styles.srch_box}>
                        <input type="text" id="common_srch" name="common_srch" placeholder="[스선,인작]테스트입니다." />
                    </div>
                    <div className={Styles.group_box}>
                        <div className={Styles.group_inner}>
                            <div className={Styles.work_space}>
                                {/* 링크가 클릭되면 on 클래스 넣어주세요 */}
                                <a href="#" title="언어선택" className={`${Styles.btn_work_space} ${Styles.btn_workspace_lang} ${Styles.on}`}>
                                    <span className={Styles.blind}>언어선택</span>
                                </a>
                                <div className={Styles.tooltip_box}>
                                    <div className={Styles.tooltip_inner}>
                                        <ul className={Styles.select_list}>
                                            <li className={Styles.list_item}>
                                                <a href="#" className={Styles.list_link}>
                                                    블록코딩
                                                </a>
                                            </li>
                                            <li className={Styles.list_item}>
                                                <a href="#" className={Styles.list_link}>
                                                    엔트리 파이선
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <span className={Styles.arr}><i></i></span>
                                </div>

                            </div>
                            <div className={Styles.work_space}>
                                <a href="#" title="파일" className={`${Styles.btn_work_space} ${Styles.btn_workspace_file}`}>
                                    <span className={Styles.blind}>파일</span>
                                </a>
                                <div className={Styles.tooltip_box}>
                                    <div className={Styles.tooltip_inner}>
                                        <ul className={Styles.select_list}>
                                            <li className={Styles.list_item}>
                                                <a href="#" className={Styles.list_link}>
                                                    새로 만들기
                                                </a>
                                            </li>
                                            <li className={Styles.list_item}>
                                                <a href="#" className={Styles.list_link}>
                                                    오프라인 작품 불러오기
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <span className={Styles.arr}><i></i></span>
                                </div>
                            </div>
                            <div className={Styles.work_space}>
                                <a href="#" title="저장하기" className={`${Styles.btn_work_space} ${Styles.btn_workspace_save}`}>
                                    <span className={Styles.blind}>저장하기</span>
                                </a>
                                <div className={Styles.tooltip_box}>
                                    <div className={Styles.tooltip_inner}>
                                        <ul className={Styles.select_list}>
                                            <li className={Styles.list_item}>
                                                <a href="#" className={Styles.list_link}>
                                                    내 컴퓨터에 저장하기
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <span className={Styles.arr}><i></i></span>
                                </div>
                            </div>
                            <div className={Styles.work_space}>
                                <a href="#" title="도움말" className={`${Styles.btn_work_space} ${Styles.btn_workspace_help}`}>
                                    <span className={Styles.blind}>도움말</span>
                                </a>
                                <div className={Styles.tooltip_box}>
                                    <div className={Styles.tooltip_inner}>
                                        <ul className={Styles.select_list}>
                                            <li className={Styles.list_item}>
                                                <a href="#" className={Styles.list_link}>
                                                    만들기 이용 안내
                                                </a>
                                            </li>
                                            <li className={Styles.list_item}>
                                                <a href="#" className={Styles.list_link}>
                                                    블록 도움말
                                                </a>
                                            </li>
                                            <li className={Styles.list_item}>
                                                <a href="#" className={Styles.list_link}>
                                                    하드웨어 연결 안내
                                                </a>
                                            </li>
                                            <li className={Styles.list_item}>
                                                <a href="#" className={Styles.list_link}>
                                                    엔트리파이선 이용 안내
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <span className={Styles.arr}><i></i></span>
                                </div>
                            </div>
                            <div className={Styles.work_space}>
                                <a href="#" title="인쇄" className={Styles.btn_workspace_print}>
                                    <span className={Styles.blind}>인쇄</span>
                                </a>
                            </div>
                        </div>

                        <div className={Styles.group_inner}>
                            <div className={Styles.work_space}>
                                <a href="#" title="입력취소" className={Styles.btn_workspace_redo}>
                                    <span className={Styles.blind}>입력취소</span>
                                </a>
                            </div>
                            <div className={Styles.work_space}>
                                <a href="#" title="다시실행" className={Styles.btn_workspace_undo}>
                                    <span className={Styles.blind}>다시실행</span>
                                </a>
                            </div>
                        </div>

                        <div className={Styles.group_inner}>
                            <div className={Styles.work_space}>
                                <a href="#" className={`${Styles.link_workspace_text} ${Styles.on}`}>
                                    기본형<em className={Styles.ico_workspace_practical}>실과</em>
                                </a>
                                <div className={Styles.tooltip_box}>
                                    <div className={Styles.tooltip_inner}>
                                        <ul className={Styles.select_list}>
                                            <li className={Styles.list_item}>
                                                <a href="#" className={Styles.list_link}>
                                                    기본형
                                                </a>
                                            </li>
                                            <li className={Styles.list_item}>
                                                <a href="#" className={Styles.list_link}>
                                                    교과형<em className={Styles.ico_workspace_practical}>실과</em>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <span className={Styles.arr}><i></i></span>
                                </div>
                            </div>
                        </div>

                        <div className={Styles.group_inner}>
                            <div className={Styles.work_space}>
                                <a href="#" className={Styles.link_workspace_text}>
                                    로그인
                            </a>
                                <a href="#" className={Styles.link_workspace_text}>
                                    회원가입
                            </a>
                            </div>
                        </div>
                        <div className={Styles.lang_select_box}>
                            {/* 링크가 클릭되면 on 클래스 추가 */}
                            <a href="#" className={`${Styles.select_link} ${Styles.ico_white_select_arr} ${Styles.on}`}>한국어</a>
                            <div className={Styles.tooltip_box}>
                                <div className={Styles.tooltip_inner}>
                                    <ul className={Styles.select_list}>
                                        <li className={Styles.list_item}>
                                            <a href="#" className={Styles.list_link}>
                                                한국어
                                        </a>
                                        </li>
                                        <li className={Styles.list_item}>
                                            <a href="#" className={Styles.list_link}>
                                                English
                                        </a>
                                        </li>
                                        <li className={Styles.list_item}>
                                            <a href="#" className={Styles.list_link}>
                                                日本語
                                        </a>
                                        </li>
                                        <li className={Styles.list_item}>
                                            <a href="#" className={Styles.list_link}>
                                                베트남어
                                        </a>
                                        </li>
                                    </ul>
                                </div>
                                <span className={`${Styles.arr} ${Styles.free}`}><i></i></span>
                            </div>
                        </div>
                    </div>
                </header>

            </div>



        );
    }
}

const mapStateToProps = (state) => ({
    ...state,
});

const mapDispatchToProps = (dispatch) => ({
    visibleAction: (visible) => dispatch(visibleAction(visible)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Gnb);

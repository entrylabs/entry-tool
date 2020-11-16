import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { visibleAction } from '../../actions/index';
import Styles from '../../assets/entry/scss/popup.scss';

class TableChart extends Component {
    render() {
        const { Dimmed } = this.props;
        if( Dimmed == true) {
            return (
                <div className={Styles.popup_wrap}>
                    <header className={Styles.pop_header}>
                        <h1>데이터 추가하기</h1>
                        <button
                            onClick={this.close}
                            className={`${Styles.btn_back} ${Styles.imbtn_pop_back}`}
                        >
                            <span className={Styles.blind}>뒤로가기</span>
                        </button>
                    </header>
                    <div className={Styles.section_navi}>
                        <ul className={Styles.list}>
                            <li className={Styles.on}>
                                <div>테이블 선택</div>
                            </li>
                            <li>
                                <div>파일 올리기</div>
                            </li>
                            <li>
                                <div>새로 만들기</div>
                            </li>
                        </ul>
                        <div className={Styles.srch_box}>
                            <label htmlFor="srch">
                                <input type="text" id="srch" name="" />
                            </label>
                            <button
                                type="button"
                                className={`${Styles.btn_srch} ${Styles.imbtn_pop_srch}`}
                            >
                                <span className={Styles.blind}>검색</span>
                            </button>
                        </div>
                    </div>
                    <section className= {`${Styles.pop_content} ${Styles.data_select_content}`}>
                        <div className={Styles.section_cont}>
                            <div className={Styles.data_selbox}>
                                <ul className={Styles.list}>
                                    {/* li 요소가 선택되면 active 클래스 추가 */}
                                    <li>
                                        <strong className={Styles.sjt}>
                                            한국국제교류재단 한국음식정보
                                        </strong>
                                        <div className={Styles.info}>
                                            <em>속성 : 3개</em>
                                            <p>
                                                요리명, 재료, 조리법
                                            </p>
                                        </div>
                                        <div className={Styles.info2}>
                                            <em>행 : 813개</em>
                                            <p>
                                                800여 가지의 한식을 재료별(곡물, 콩, 채소, 고기 등), 조리법별(밥, 국, 찌개, 구이 등)로 분류한 데이터입니다.
                                            </p>
                                        </div>
                                        <a href="/" className={Styles.text_link}>
                                            자세히 보기
                                        </a>
                                    </li>
                                    <li>
                                        <strong className={Styles.sjt}>
                                            한국국제교류재단 한국음식정보한국국제교류재단 한국음식정보한국국제교류재단 한국음식정보
                                        </strong>
                                        <div className={Styles.info}>
                                            <em>속성 : 3개</em>
                                            <p>
                                                요리명, 재료, 조리법
                                            </p>
                                        </div>
                                        <div className={Styles.info2}>
                                            <em>행 : 813개</em>
                                            <p>
                                                800여 가지의 한식을 재료별(곡물, 콩, 채소, 고기 등), 조리법별(밥, 국, 찌개, 구이 등)로 분류한 데이터입니다.
                                                800여 가지의 한식을 재료별(곡물, 콩, 채소, 고기 등), 조리법별(밥, 국, 찌개, 구이 등)로 분류한 데이터입니다.
                                            </p>
                                        </div>
                                        <a href="/" className={Styles.text_link}>
                                            자세히 보기
                                        </a>
                                    </li>
                                    <li>
                                        <strong className={Styles.sjt}>
                                            한국국제교류재단 한국음식정보
                                        </strong>
                                        <div className={Styles.info}>
                                            <em>속성 : 3개</em>
                                            <p>
                                                요리명, 재료, 조리법
                                            </p>
                                        </div>
                                        <div className={Styles.info2}>
                                            <em>행 : 813개</em>
                                            <p>
                                                800여 가지의 한식을 재료별(곡물, 콩, 채소, 고기 등), 조리법별(밥, 국, 찌개, 구이 등)로 분류한 데이터입니다.
                                            </p>
                                        </div>
                                        <a href="/" className={Styles.text_link}>
                                            자세히 보기
                                        </a>
                                    </li>
                                    <li>
                                        <strong className={Styles.sjt}>
                                            한국국제교류재단 한국음식정보한국국제교류재단 한국음식정보한국국제교류재단 한국음식정보
                                        </strong>
                                        <div className={Styles.info}>
                                            <em>속성 : 3개</em>
                                            <p>
                                                요리명, 재료, 조리법
                                            </p>
                                        </div>
                                        <div className={Styles.info2}>
                                            <em>행 : 813개</em>
                                            <p>
                                                800여 가지의 한식을 재료별(곡물, 콩, 채소, 고기 등), 조리법별(밥, 국, 찌개, 구이 등)로 분류한 데이터입니다.
                                                800여 가지의 한식을 재료별(곡물, 콩, 채소, 고기 등), 조리법별(밥, 국, 찌개, 구이 등)로 분류한 데이터입니다.
                                            </p>
                                        </div>
                                        <a href="/" className={Styles.text_link}>
                                            자세히 보기
                                        </a>
                                    </li>
                                    <li>
                                        <strong className={Styles.sjt}>
                                            한국국제교류재단 한국음식정보
                                        </strong>
                                        <div className={Styles.info}>
                                            <em>속성 : 3개</em>
                                            <p>
                                                요리명, 재료, 조리법
                                            </p>
                                        </div>
                                        <div className={Styles.info2}>
                                            <em>행 : 813개</em>
                                            <p>
                                                800여 가지의 한식을 재료별(곡물, 콩, 채소, 고기 등), 조리법별(밥, 국, 찌개, 구이 등)로 분류한 데이터입니다.
                                            </p>
                                        </div>
                                        <a href="/" className={Styles.text_link}>
                                            자세히 보기
                                        </a>
                                    </li>
                                    <li>
                                        <strong className={Styles.sjt}>
                                            한국국제교류재단 한국음식정보한국국제교류재단 한국음식정보한국국제교류재단 한국음식정보
                                        </strong>
                                        <div className={Styles.info}>
                                            <em>속성 : 3개</em>
                                            <p>
                                                요리명, 재료, 조리법
                                            </p>
                                        </div>
                                        <div className={Styles.info2}>
                                            <em>행 : 813개</em>
                                            <p>
                                                800여 가지의 한식을 재료별(곡물, 콩, 채소, 고기 등), 조리법별(밥, 국, 찌개, 구이 등)로 분류한 데이터입니다.
                                                800여 가지의 한식을 재료별(곡물, 콩, 채소, 고기 등), 조리법별(밥, 국, 찌개, 구이 등)로 분류한 데이터입니다.
                                            </p>
                                        </div>
                                        <a href="/" className={Styles.text_link}>
                                            자세히 보기
                                        </a>
                                    </li>
                                    <li>
                                        <strong className={Styles.sjt}>
                                            한국국제교류재단 한국음식정보
                                        </strong>
                                        <div className={Styles.info}>
                                            <em>속성 : 3개</em>
                                            <p>
                                                요리명, 재료, 조리법
                                            </p>
                                        </div>
                                        <div className={Styles.info2}>
                                            <em>행 : 813개</em>
                                            <p>
                                                800여 가지의 한식을 재료별(곡물, 콩, 채소, 고기 등), 조리법별(밥, 국, 찌개, 구이 등)로 분류한 데이터입니다.
                                            </p>
                                        </div>
                                        <a href="/" className={Styles.text_link}>
                                            자세히 보기
                                        </a>
                                    </li>
                                    <li>
                                        <strong className={Styles.sjt}>
                                            한국국제교류재단 한국음식정보한국국제교류재단 한국음식정보한국국제교류재단 한국음식정보
                                        </strong>
                                        <div className={Styles.info}>
                                            <em>속성 : 3개</em>
                                            <p>
                                                요리명, 재료, 조리법
                                            </p>
                                        </div>
                                        <div className={Styles.info2}>
                                            <em>행 : 813개</em>
                                            <p>
                                                800여 가지의 한식을 재료별(곡물, 콩, 채소, 고기 등), 조리법별(밥, 국, 찌개, 구이 등)로 분류한 데이터입니다.
                                                800여 가지의 한식을 재료별(곡물, 콩, 채소, 고기 등), 조리법별(밥, 국, 찌개, 구이 등)로 분류한 데이터입니다.
                                            </p>
                                        </div>
                                        <a href="/" className={Styles.text_link}>
                                            자세히 보기
                                        </a>
                                    </li>
                                    <li>
                                        <strong className={Styles.sjt}>
                                            한국국제교류재단 한국음식정보
                                        </strong>
                                        <div className={Styles.info}>
                                            <em>속성 : 3개</em>
                                            <p>
                                                요리명, 재료, 조리법
                                            </p>
                                        </div>
                                        <div className={Styles.info2}>
                                            <em>행 : 813개</em>
                                            <p>
                                                800여 가지의 한식을 재료별(곡물, 콩, 채소, 고기 등), 조리법별(밥, 국, 찌개, 구이 등)로 분류한 데이터입니다.
                                            </p>
                                        </div>
                                        <a href="/" className={Styles.text_link}>
                                            자세히 보기
                                        </a>
                                    </li>
                                    <li>
                                        <strong className={Styles.sjt}>
                                            한국국제교류재단 한국음식정보한국국제교류재단 한국음식정보한국국제교류재단 한국음식정보
                                        </strong>
                                        <div className={Styles.info}>
                                            <em>속성 : 3개</em>
                                            <p>
                                                요리명, 재료, 조리법
                                            </p>
                                        </div>
                                        <div className={Styles.info2}>
                                            <em>행 : 813개</em>
                                            <p>
                                                800여 가지의 한식을 재료별(곡물, 콩, 채소, 고기 등), 조리법별(밥, 국, 찌개, 구이 등)로 분류한 데이터입니다.
                                                800여 가지의 한식을 재료별(곡물, 콩, 채소, 고기 등), 조리법별(밥, 국, 찌개, 구이 등)로 분류한 데이터입니다.
                                            </p>
                                        </div>
                                        <a href="/" className={Styles.text_link}>
                                            자세히 보기
                                        </a>
                                    </li>
                                    <li>
                                        <strong className={Styles.sjt}>
                                            한국국제교류재단 한국음식정보
                                        </strong>
                                        <div className={Styles.info}>
                                            <em>속성 : 3개</em>
                                            <p>
                                                요리명, 재료, 조리법
                                            </p>
                                        </div>
                                        <div className={Styles.info2}>
                                            <em>행 : 813개</em>
                                            <p>
                                                800여 가지의 한식을 재료별(곡물, 콩, 채소, 고기 등), 조리법별(밥, 국, 찌개, 구이 등)로 분류한 데이터입니다.
                                            </p>
                                        </div>
                                        <a href="/" className={Styles.text_link}>
                                            자세히 보기
                                        </a>
                                    </li>
                                    <li>
                                        <strong className={Styles.sjt}>
                                            한국국제교류재단 한국음식정보한국국제교류재단 한국음식정보한국국제교류재단 한국음식정보
                                        </strong>
                                        <div className={Styles.info}>
                                            <em>속성 : 3개</em>
                                            <p>
                                                요리명, 재료, 조리법
                                            </p>
                                        </div>
                                        <div className={Styles.info2}>
                                            <em>행 : 813개</em>
                                            <p>
                                                800여 가지의 한식을 재료별(곡물, 콩, 채소, 고기 등), 조리법별(밥, 국, 찌개, 구이 등)로 분류한 데이터입니다.
                                                800여 가지의 한식을 재료별(곡물, 콩, 채소, 고기 등), 조리법별(밥, 국, 찌개, 구이 등)로 분류한 데이터입니다.
                                            </p>
                                        </div>
                                        <a href="/" className={Styles.text_link}>
                                            자세히 보기
                                        </a>
                                    </li>
                                    <li>
                                        <strong className={Styles.sjt}>
                                            한국국제교류재단 한국음식정보
                                        </strong>
                                        <div className={Styles.info}>
                                            <em>속성 : 3개</em>
                                            <p>
                                                요리명, 재료, 조리법
                                            </p>
                                        </div>
                                        <div className={Styles.info2}>
                                            <em>행 : 813개</em>
                                            <p>
                                                800여 가지의 한식을 재료별(곡물, 콩, 채소, 고기 등), 조리법별(밥, 국, 찌개, 구이 등)로 분류한 데이터입니다.
                                            </p>
                                        </div>
                                        <a href="/" className={Styles.text_link}>
                                            자세히 보기
                                        </a>
                                    </li>
                                    <li>
                                        <strong className={Styles.sjt}>
                                            한국국제교류재단 한국음식정보한국국제교류재단 한국음식정보한국국제교류재단 한국음식정보
                                        </strong>
                                        <div className={Styles.info}>
                                            <em>속성 : 3개</em>
                                            <p>
                                                요리명, 재료, 조리법
                                            </p>
                                        </div>
                                        <div className={Styles.info2}>
                                            <em>행 : 813개</em>
                                            <p>
                                                800여 가지의 한식을 재료별(곡물, 콩, 채소, 고기 등), 조리법별(밥, 국, 찌개, 구이 등)로 분류한 데이터입니다.
                                                800여 가지의 한식을 재료별(곡물, 콩, 채소, 고기 등), 조리법별(밥, 국, 찌개, 구이 등)로 분류한 데이터입니다.
                                            </p>
                                        </div>
                                        <a href="/" className={Styles.text_link}>
                                            자세히 보기
                                        </a>
                                    </li>
                                    <li>
                                        <strong className={Styles.sjt}>
                                            한국국제교류재단 한국음식정보
                                        </strong>
                                        <div className={Styles.info}>
                                            <em>속성 : 3개</em>
                                            <p>
                                                요리명, 재료, 조리법
                                            </p>
                                        </div>
                                        <div className={Styles.info2}>
                                            <em>행 : 813개</em>
                                            <p>
                                                800여 가지의 한식을 재료별(곡물, 콩, 채소, 고기 등), 조리법별(밥, 국, 찌개, 구이 등)로 분류한 데이터입니다.
                                            </p>
                                        </div>
                                        <a href="/" className={Styles.text_link}>
                                            자세히 보기
                                        </a>
                                    </li>
                                    <li>
                                        <strong className={Styles.sjt}>
                                            한국국제교류재단 한국음식정보한국국제교류재단 한국음식정보한국국제교류재단 한국음식정보
                                        </strong>
                                        <div className={Styles.info}>
                                            <em>속성 : 3개</em>
                                            <p>
                                                요리명, 재료, 조리법
                                            </p>
                                        </div>
                                        <div className={Styles.info2}>
                                            <em>행 : 813개</em>
                                            <p>
                                                800여 가지의 한식을 재료별(곡물, 콩, 채소, 고기 등), 조리법별(밥, 국, 찌개, 구이 등)로 분류한 데이터입니다.
                                                800여 가지의 한식을 재료별(곡물, 콩, 채소, 고기 등), 조리법별(밥, 국, 찌개, 구이 등)로 분류한 데이터입니다.
                                            </p>
                                        </div>
                                        <a href="/" className={Styles.text_link}>
                                            자세히 보기
                                        </a>
                                    </li>
                                    <li>
                                        <strong className={Styles.sjt}>
                                            한국국제교류재단 한국음식정보
                                        </strong>
                                        <div className={Styles.info}>
                                            <em>속성 : 3개</em>
                                            <p>
                                                요리명, 재료, 조리법
                                            </p>
                                        </div>
                                        <div className={Styles.info2}>
                                            <em>행 : 813개</em>
                                            <p>
                                                800여 가지의 한식을 재료별(곡물, 콩, 채소, 고기 등), 조리법별(밥, 국, 찌개, 구이 등)로 분류한 데이터입니다.
                                            </p>
                                        </div>
                                        <a href="/" className={Styles.text_link}>
                                            자세히 보기
                                        </a>
                                    </li>
                                    <li>
                                        <strong className={Styles.sjt}>
                                            한국국제교류재단 한국음식정보한국국제교류재단 한국음식정보한국국제교류재단 한국음식정보
                                        </strong>
                                        <div className={Styles.info}>
                                            <em>속성 : 3개</em>
                                            <p>
                                                요리명, 재료, 조리법
                                            </p>
                                        </div>
                                        <div className={Styles.info2}>
                                            <em>행 : 813개</em>
                                            <p>
                                                800여 가지의 한식을 재료별(곡물, 콩, 채소, 고기 등), 조리법별(밥, 국, 찌개, 구이 등)로 분류한 데이터입니다.
                                                800여 가지의 한식을 재료별(곡물, 콩, 채소, 고기 등), 조리법별(밥, 국, 찌개, 구이 등)로 분류한 데이터입니다.
                                            </p>
                                        </div>
                                        <a href="/" className={Styles.text_link}>
                                            자세히 보기
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <div className={Styles.pop_btn_box}>
                        <div>취소</div>
                        <div className={Styles.active}>추가하기</div>
                    </div>
                    {/* 딤드 영역 */}
                    <div className={Styles.dimmed}>
                        <div className={Styles.more_popup}>
                            <div className={Styles.contents}>
                                <strong className={Styles.more_sjt}>
                                    한국국제교류재단 한국음식정보
                                </strong>
                                <ul className={Styles.more_info}>
                                    <li>
                                        제공처 : 한국국제교류재단 문화예술사업부
                                    </li>
                                    <li>
                                        수정일 : 2019-12-31
                                    </li>
                                </ul>
                                <ul className={Styles.more_sub_info}>
                                    <li>
                                        <strong>속성 : 3개</strong>
                                        <p>
                                            요리명, 재료, 조리법, 요리명, 재료, 조리법, 요리명, 재료, 조리법, 요리명
                                        </p>
                                    </li>
                                    <li>
                                        <strong>행 : 813개</strong>
                                    </li>
                                </ul>
                                <p className={Styles.more_dsc}>
                                    한국국제교류재단은 한국인의 매일 먹는 밥, 반찬, 찌개, 국부터 전통음힉에 이르기까지 800여 가지가 넘는 한식의 보다 정확한 정보를 스마트폰으로 쉽게 찾고, 듣고, 공유할 수 있도록 ‘Korean Food Guide 800’ 앱으로 출시하였다. 이에 800여가지의 한식을 재료별(곡물, 콩, 채소, 고기 등) 조리법별(밥, 국, 찌개, 구이 등)로 분류한 엑셀데이터를 공공데이터로 공개한다. 분류한 엑셀데이터를 공공데이터로 공개한다.
                                    한국국제교류재단은 한국인의 매일 먹는 밥, 반찬, 찌개, 국부터 전통음힉에 이르기까지 800여 가지가 넘는 한식의 보다 정확한 정보를 스마트폰으로 쉽게 찾고, 듣고, 공유할 수 있도록 ‘Korean Food Guide 800’ 앱으로 출시하였다. 이에 800여가지의 한식을 재료별(곡물, 콩, 채소, 고기 등) 조리법별(밥, 국, 찌개, 구이 등)로 분류한 엑셀데이터를 공공데이터로 공개한다. 분류한 엑셀데이터를 공공데이터로 공개한다.      
                                </p>
                            </div>
                            <a href="#" className={Styles.link_close}>
                                <span className={Styles.blind}>닫기</span>
                            </a>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className={Styles.popup_wrap}>
                    <header className={Styles.pop_header}>
                        <h1>데이터 추가하기</h1>
                        <button
                            onClick={this.close}
                            className={`${Styles.btn_back} ${Styles.imbtn_pop_back}`}
                        >
                            <span className={Styles.blind}>뒤로가기</span>
                        </button>
                    </header>
                    <div className={Styles.section_navi}>
                        <ul className={Styles.list}>
                            <li className={Styles.on}>
                                <div>테이블 선택</div>
                            </li>
                            <li>
                                <div>파일 올리기</div>
                            </li>
                            <li>
                                <div>새로 만들기</div>
                            </li>
                        </ul>
                        <div className={Styles.srch_box}>
                            <label htmlFor="srch">
                                <input type="text" id="srch" name="" />
                            </label>
                            <button
                                type="button"
                                className={`${Styles.btn_srch} ${Styles.imbtn_pop_srch}`}
                            >
                                <span className={Styles.blind}>검색</span>
                            </button>
                        </div>
                    </div>
                    <section className= {`${Styles.pop_content} ${Styles.data_select_content}`}>
                        {/* [D] 메뉴 카테고리 선택에 따라 텍스트 변경  */}
                        <div className={Styles.section_cont}>
                            <div className={Styles.data_selbox}>
                                <ul className={Styles.list}>
                                    {/* li 요소가 선택되면 active 클래스 추가 */}
                                    <li className={Styles.active}>
                                        <strong className={Styles.sjt}>
                                            한국국제교류재단 한국음식정보
                                        </strong>
                                        <div className={Styles.info}>
                                            <em>속성 : 3개</em>
                                            <p>
                                                요리명, 재료, 조리법
                                            </p>
                                        </div>
                                        <div className={Styles.info2}>
                                            <em>행 : 813개</em>
                                            <p>
                                                800여 가지의 한식을 재료별(곡물, 콩, 채소, 고기 등), 조리법별(밥, 국, 찌개, 구이 등)로 분류한 데이터입니다.
                                            </p>
                                        </div>
                                        <a href="/" className={Styles.text_link}>
                                            자세히 보기
                                        </a>
                                        <a href="/" className={Styles.text_url_link}>
                                            예시 작품 확인하기
                                        </a>
                                    </li>
                                    <li>
                                        <strong className={Styles.sjt}>
                                            한국국제교류재단 한국음식정보한국국제교류재단 한국음식정보한국국제교류재단 한국음식정보
                                        </strong>
                                        <div className={Styles.info}>
                                            <em>속성 : 3개</em>
                                            <p>
                                                요리명, 재료, 조리법
                                            </p>
                                        </div>
                                        <div className={Styles.info2}>
                                            <em>행 : 813개</em>
                                            <p>
                                                800여 가지의 한식을 재료별(곡물, 콩, 채소, 고기 등), 조리법별(밥, 국, 찌개, 구이 등)로 분류한 데이터입니다.
                                                800여 가지의 한식을 재료별(곡물, 콩, 채소, 고기 등), 조리법별(밥, 국, 찌개, 구이 등)로 분류한 데이터입니다.
                                            </p>
                                        </div>
                                        <a href="/" className={Styles.text_link}>
                                            자세히 보기
                                        </a>
                                    </li>
                                    <li className={Styles.active}>
                                        <strong className={Styles.sjt}>
                                            한국국제교류재단 한국음식정보
                                        </strong>
                                        <div className={Styles.info}>
                                            <em>속성 : 3개</em>
                                            <p>
                                                요리명, 재료, 조리법
                                            </p>
                                        </div>
                                        <div className={Styles.info2}>
                                            <em>행 : 813개</em>
                                            <p>
                                                800여 가지의 한식을 재료별(곡물, 콩, 채소, 고기 등), 조리법별(밥, 국, 찌개, 구이 등)로 분류한 데이터입니다.
                                            </p>
                                        </div>
                                        <a href="/" className={Styles.text_link}>
                                            자세히 보기
                                        </a>
                                        <a href="/" className={Styles.text_url_link}>
                                            예시 작품 확인하기
                                        </a>
                                    </li>
                                    <li>
                                        <strong className={Styles.sjt}>
                                            한국국제교류재단 한국음식정보한국국제교류재단 한국음식정보한국국제교류재단 한국음식정보
                                        </strong>
                                        <div className={Styles.info}>
                                            <em>속성 : 3개</em>
                                            <p>
                                                요리명, 재료, 조리법
                                            </p>
                                        </div>
                                        <div className={Styles.info2}>
                                            <em>행 : 813개</em>
                                            <p>
                                                800여 가지의 한식을 재료별(곡물, 콩, 채소, 고기 등), 조리법별(밥, 국, 찌개, 구이 등)로 분류한 데이터입니다.
                                                800여 가지의 한식을 재료별(곡물, 콩, 채소, 고기 등), 조리법별(밥, 국, 찌개, 구이 등)로 분류한 데이터입니다.
                                            </p>
                                        </div>
                                        <a href="/" className={Styles.text_link}>
                                            자세히 보기
                                        </a>
                                    </li>
                                    <li>
                                        <strong className={Styles.sjt}>
                                            한국국제교류재단 한국음식정보
                                        </strong>
                                        <div className={Styles.info}>
                                            <em>속성 : 3개</em>
                                            <p>
                                                요리명, 재료, 조리법
                                            </p>
                                        </div>
                                        <div className={Styles.info2}>
                                            <em>행 : 813개</em>
                                            <p>
                                                800여 가지의 한식을 재료별(곡물, 콩, 채소, 고기 등), 조리법별(밥, 국, 찌개, 구이 등)로 분류한 데이터입니다.
                                            </p>
                                        </div>
                                        <a href="/" className={Styles.text_link}>
                                            자세히 보기
                                        </a>
                                    </li>
                                    <li>
                                        <strong className={Styles.sjt}>
                                            한국국제교류재단 한국음식정보한국국제교류재단 한국음식정보한국국제교류재단 한국음식정보
                                        </strong>
                                        <div className={Styles.info}>
                                            <em>속성 : 3개</em>
                                            <p>
                                                요리명, 재료, 조리법
                                            </p>
                                        </div>
                                        <div className={Styles.info2}>
                                            <em>행 : 813개</em>
                                            <p>
                                                800여 가지의 한식을 재료별(곡물, 콩, 채소, 고기 등), 조리법별(밥, 국, 찌개, 구이 등)로 분류한 데이터입니다.
                                                800여 가지의 한식을 재료별(곡물, 콩, 채소, 고기 등), 조리법별(밥, 국, 찌개, 구이 등)로 분류한 데이터입니다.
                                            </p>
                                        </div>
                                        <a href="/" className={Styles.text_link}>
                                            자세히 보기
                                        </a>
                                    </li>
                                    <li>
                                        <strong className={Styles.sjt}>
                                            한국국제교류재단 한국음식정보
                                        </strong>
                                        <div className={Styles.info}>
                                            <em>속성 : 3개</em>
                                            <p>
                                                요리명, 재료, 조리법
                                            </p>
                                        </div>
                                        <div className={Styles.info2}>
                                            <em>행 : 813개</em>
                                            <p>
                                                800여 가지의 한식을 재료별(곡물, 콩, 채소, 고기 등), 조리법별(밥, 국, 찌개, 구이 등)로 분류한 데이터입니다.
                                            </p>
                                        </div>
                                        <a href="/" className={Styles.text_link}>
                                            자세히 보기
                                        </a>
                                    </li>
                                    <li>
                                        <strong className={Styles.sjt}>
                                            한국국제교류재단 한국음식정보한국국제교류재단 한국음식정보한국국제교류재단 한국음식정보
                                        </strong>
                                        <div className={Styles.info}>
                                            <em>속성 : 3개</em>
                                            <p>
                                                요리명, 재료, 조리법
                                            </p>
                                        </div>
                                        <div className={Styles.info2}>
                                            <em>행 : 813개</em>
                                            <p>
                                                800여 가지의 한식을 재료별(곡물, 콩, 채소, 고기 등), 조리법별(밥, 국, 찌개, 구이 등)로 분류한 데이터입니다.
                                                800여 가지의 한식을 재료별(곡물, 콩, 채소, 고기 등), 조리법별(밥, 국, 찌개, 구이 등)로 분류한 데이터입니다.
                                            </p>
                                        </div>
                                        <a href="/" className={Styles.text_link}>
                                            자세히 보기
                                        </a>
                                    </li>
                                    <li>
                                        <strong className={Styles.sjt}>
                                            한국국제교류재단 한국음식정보
                                        </strong>
                                        <div className={Styles.info}>
                                            <em>속성 : 3개</em>
                                            <p>
                                                요리명, 재료, 조리법
                                            </p>
                                        </div>
                                        <div className={Styles.info2}>
                                            <em>행 : 813개</em>
                                            <p>
                                                800여 가지의 한식을 재료별(곡물, 콩, 채소, 고기 등), 조리법별(밥, 국, 찌개, 구이 등)로 분류한 데이터입니다.
                                            </p>
                                        </div>
                                        <a href="/" className={Styles.text_link}>
                                            자세히 보기
                                        </a>
                                    </li>
                                    <li>
                                        <strong className={Styles.sjt}>
                                            한국국제교류재단 한국음식정보한국국제교류재단 한국음식정보한국국제교류재단 한국음식정보
                                        </strong>
                                        <div className={Styles.info}>
                                            <em>속성 : 3개</em>
                                            <p>
                                                요리명, 재료, 조리법
                                            </p>
                                        </div>
                                        <div className={Styles.info2}>
                                            <em>행 : 813개</em>
                                            <p>
                                                800여 가지의 한식을 재료별(곡물, 콩, 채소, 고기 등), 조리법별(밥, 국, 찌개, 구이 등)로 분류한 데이터입니다.
                                                800여 가지의 한식을 재료별(곡물, 콩, 채소, 고기 등), 조리법별(밥, 국, 찌개, 구이 등)로 분류한 데이터입니다.
                                            </p>
                                        </div>
                                        <a href="/" className={Styles.text_link}>
                                            자세히 보기
                                        </a>
                                    </li>
                                    <li>
                                        <strong className={Styles.sjt}>
                                            한국국제교류재단 한국음식정보
                                        </strong>
                                        <div className={Styles.info}>
                                            <em>속성 : 3개</em>
                                            <p>
                                                요리명, 재료, 조리법
                                            </p>
                                        </div>
                                        <div className={Styles.info2}>
                                            <em>행 : 813개</em>
                                            <p>
                                                800여 가지의 한식을 재료별(곡물, 콩, 채소, 고기 등), 조리법별(밥, 국, 찌개, 구이 등)로 분류한 데이터입니다.
                                            </p>
                                        </div>
                                        <a href="/" className={Styles.text_link}>
                                            자세히 보기
                                        </a>
                                    </li>
                                    <li>
                                        <strong className={Styles.sjt}>
                                            한국국제교류재단 한국음식정보한국국제교류재단 한국음식정보한국국제교류재단 한국음식정보
                                        </strong>
                                        <div className={Styles.info}>
                                            <em>속성 : 3개</em>
                                            <p>
                                                요리명, 재료, 조리법
                                            </p>
                                        </div>
                                        <div className={Styles.info2}>
                                            <em>행 : 813개</em>
                                            <p>
                                                800여 가지의 한식을 재료별(곡물, 콩, 채소, 고기 등), 조리법별(밥, 국, 찌개, 구이 등)로 분류한 데이터입니다.
                                                800여 가지의 한식을 재료별(곡물, 콩, 채소, 고기 등), 조리법별(밥, 국, 찌개, 구이 등)로 분류한 데이터입니다.
                                            </p>
                                        </div>
                                        <a href="/" className={Styles.text_link}>
                                            자세히 보기
                                        </a>
                                    </li>
                                    <li>
                                        <strong className={Styles.sjt}>
                                            한국국제교류재단 한국음식정보
                                        </strong>
                                        <div className={Styles.info}>
                                            <em>속성 : 3개</em>
                                            <p>
                                                요리명, 재료, 조리법
                                            </p>
                                        </div>
                                        <div className={Styles.info2}>
                                            <em>행 : 813개</em>
                                            <p>
                                                800여 가지의 한식을 재료별(곡물, 콩, 채소, 고기 등), 조리법별(밥, 국, 찌개, 구이 등)로 분류한 데이터입니다.
                                            </p>
                                        </div>
                                        <a href="/" className={Styles.text_link}>
                                            자세히 보기
                                        </a>
                                    </li>
                                    <li>
                                        <strong className={Styles.sjt}>
                                            한국국제교류재단 한국음식정보한국국제교류재단 한국음식정보한국국제교류재단 한국음식정보
                                        </strong>
                                        <div className={Styles.info}>
                                            <em>속성 : 3개</em>
                                            <p>
                                                요리명, 재료, 조리법
                                            </p>
                                        </div>
                                        <div className={Styles.info2}>
                                            <em>행 : 813개</em>
                                            <p>
                                                800여 가지의 한식을 재료별(곡물, 콩, 채소, 고기 등), 조리법별(밥, 국, 찌개, 구이 등)로 분류한 데이터입니다.
                                                800여 가지의 한식을 재료별(곡물, 콩, 채소, 고기 등), 조리법별(밥, 국, 찌개, 구이 등)로 분류한 데이터입니다.
                                            </p>
                                        </div>
                                        <a href="/" className={Styles.text_link}>
                                            자세히 보기
                                        </a>
                                    </li>
                                    <li>
                                        <strong className={Styles.sjt}>
                                            한국국제교류재단 한국음식정보
                                        </strong>
                                        <div className={Styles.info}>
                                            <em>속성 : 3개</em>
                                            <p>
                                                요리명, 재료, 조리법
                                            </p>
                                        </div>
                                        <div className={Styles.info2}>
                                            <em>행 : 813개</em>
                                            <p>
                                                800여 가지의 한식을 재료별(곡물, 콩, 채소, 고기 등), 조리법별(밥, 국, 찌개, 구이 등)로 분류한 데이터입니다.
                                            </p>
                                        </div>
                                        <a href="/" className={Styles.text_link}>
                                            자세히 보기
                                        </a>
                                    </li>
                                    <li>
                                        <strong className={Styles.sjt}>
                                            한국국제교류재단 한국음식정보한국국제교류재단 한국음식정보한국국제교류재단 한국음식정보
                                        </strong>
                                        <div className={Styles.info}>
                                            <em>속성 : 3개</em>
                                            <p>
                                                요리명, 재료, 조리법
                                            </p>
                                        </div>
                                        <div className={Styles.info2}>
                                            <em>행 : 813개</em>
                                            <p>
                                                800여 가지의 한식을 재료별(곡물, 콩, 채소, 고기 등), 조리법별(밥, 국, 찌개, 구이 등)로 분류한 데이터입니다.
                                                800여 가지의 한식을 재료별(곡물, 콩, 채소, 고기 등), 조리법별(밥, 국, 찌개, 구이 등)로 분류한 데이터입니다.
                                            </p>
                                        </div>
                                        <a href="/" className={Styles.text_link}>
                                            자세히 보기
                                        </a>
                                    </li>
                                    <li>
                                        <strong className={Styles.sjt}>
                                            한국국제교류재단 한국음식정보
                                        </strong>
                                        <div className={Styles.info}>
                                            <em>속성 : 3개</em>
                                            <p>
                                                요리명, 재료, 조리법
                                            </p>
                                        </div>
                                        <div className={Styles.info2}>
                                            <em>행 : 813개</em>
                                            <p>
                                                800여 가지의 한식을 재료별(곡물, 콩, 채소, 고기 등), 조리법별(밥, 국, 찌개, 구이 등)로 분류한 데이터입니다.
                                            </p>
                                        </div>
                                        <a href="/" className={Styles.text_link}>
                                            자세히 보기
                                        </a>
                                    </li>
                                    <li>
                                        <strong className={Styles.sjt}>
                                            한국국제교류재단 한국음식정보한국국제교류재단 한국음식정보한국국제교류재단 한국음식정보
                                        </strong>
                                        <div className={Styles.info}>
                                            <em>속성 : 3개</em>
                                            <p>
                                                요리명, 재료, 조리법
                                            </p>
                                        </div>
                                        <div className={Styles.info2}>
                                            <em>행 : 813개</em>
                                            <p>
                                                800여 가지의 한식을 재료별(곡물, 콩, 채소, 고기 등), 조리법별(밥, 국, 찌개, 구이 등)로 분류한 데이터입니다.
                                                800여 가지의 한식을 재료별(곡물, 콩, 채소, 고기 등), 조리법별(밥, 국, 찌개, 구이 등)로 분류한 데이터입니다.
                                            </p>
                                        </div>
                                        <a href="/" className={Styles.text_link}>
                                            자세히 보기
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <div className={Styles.pop_btn_box}>
                        <div>취소</div>
                        <div className={Styles.active}>추가하기</div>
                    </div>
                </div>
            )
        }
    }
}

export default TableChart;

import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { visibleAction } from '../../actions/index';
import Styles from '../../assets/entry/scss/popup.scss';

class TableChart extends Component {
    render () {
        const { ChartState, NoResultText } = this.props;
        if (ChartState == 'Default') {
            return (
                <Fragment>
                    <div className={Styles.popup_wrap}>
                        <header className={Styles.pop_header}>
                            <h1>테이블 불러오기</h1>
                            <button
                                onClick={this.close}
                                className={`${Styles.btn_back} ${Styles.imbtn_pop_close}`}
                            >
                                <span className={Styles.blind}>뒤로가기</span>
                            </button>
                        </header>
                        <section className={`${Styles.pop_content} ${Styles.chart_content}`}>
                            {/* [D] 메뉴 카테고리 선택에 따라 텍스트 변경  */}
                            {/* 창 조절하기 버튼을 누르면 fold 클래스 추가 */}
                            <section className={Styles.aside}>
                                <h2 className={Styles.blind}>테이블 추가하기</h2>
                                <div className={Styles.add_btn_box}>
                                    <a href="/" role="button">테이블 추가하기</a>
                                </div>
                                <ul className={Styles.list}>
                                    <li>
                                        새로운 테이블
                                        <a href="/" className={Styles.btn_close}>
                                            <span className={Styles.blind}>삭제</span>
                                        </a>
                                    </li>
                                    {/* 활성화 시 active 클래스 추가 */}
                                    <li className={Styles.active}>
                                        새로운 테이블
                                        <a href="/" className={Styles.btn_close}>
                                            <span className={Styles.blind}>삭제</span>
                                        </a>
                                        {/* active 클래스가 들어오면 노출 시켜 주세요 */}
                                        <div className={Styles.cell_layer} style={{ width: 120, top: 20, right: 8 }}>
                                            <ul>
                                                <li>
                                                    <a href="/" className={Styles.link}>복제</a>
                                                </li>
                                                <li>
                                                    <a href="/" className={Styles.link}>삭제</a>
                                                </li>
                                                <li>
                                                    <a href="/" className={Styles.link}>PC에 저장</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        새로운 테이블
                                        <a href="/" className={Styles.btn_close}>
                                            <span className={Styles.blind}>삭제</span>
                                        </a>
                                    </li>
                                </ul>
                                <a href="/" role="button" className={Styles.split_bar}>
                                    <span className={Styles.blind}>창 조절하기</span>
                                </a>
                            </section>
                            <div className={Styles.section_cont}>
                                <div className={Styles.sheet_form_box}>
                                    <input type="text" id="sheet_sjt" name="sheet_sjt" className={Styles.input} />
                                    <div className={Styles.btn_box}>
                                        <div className={Styles.tab}>
                                            <a href="/" role="button">테이블</a>
                                            <a href="/" role="button" className={Styles.active}>차트</a>
                                            <a href="/" role="button">정보</a>
                                        </div>
                                        <a href="/" role="button" className={Styles.btn_save}>저장하기</a>
                                    </div>
                                </div>
                                <div className={Styles.chart_box}>
                                    <h2 className={Styles.blind}>차트</h2>
                                    <div className={Styles.inner}>
                                        {/* 테이블 선택 */}
                                        <div className={Styles.chart_navi}>
                                            <a href="#" className={`${Styles.chart_link} ${Styles.bar} ${Styles.disabled}`}>
                                                <span className={Styles.blind}>막대형</span>
                                            </a>
                                            <a href="#" className={`${Styles.chart_link} ${Styles.line} ${Styles.disabled}`}>
                                                <span className={Styles.blind}>꺽은선형</span>
                                            </a>
                                            <a href="#" className={`${Styles.chart_link} ${Styles.pie} ${Styles.disabled}`}>
                                                <span className={Styles.blind}>원형</span>
                                            </a>
                                            <a href="#" className={`${Styles.chart_link} ${Styles.scatter} ${Styles.disabled}`}>
                                                <span className={Styles.blind}>방사형</span>
                                            </a>
                                            <div className={Styles.add_link_box}>
                                                <a href="#" className={Styles.add_link} role="button">
                                                    <span className={Styles.blind}>추가하기</span>
                                                </a>
                                                {/* 추가하기 링크가 클릭되면 display: block 처리 해주세요 */}
                                                <div className={Styles.vertical_tooltip} style={{ left: '56px', display: 'block' }}>
                                                    <ul className={Styles.graph_list}>
                                                        <li className={Styles.bar}>
                                                            <a href="#" role="button">막대</a>
                                                        </li>
                                                        <li className={Styles.line}>
                                                            <a href="#" role="button">선</a>
                                                        </li>
                                                        <li className={Styles.pie}>
                                                            <a href="#" role="button">원</a>
                                                        </li>
                                                        <li className={Styles.scatter}>
                                                            <a href="#" role="button">점</a>
                                                        </li>
                                                    </ul>
                                                    <span className={Styles.arr}><i></i></span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* 테이블 차트 입력폼 */}
                                        <div className={Styles.chart_no_result}>
                                            <p className={Styles.dsc}>
                                                차트를 먼저 추가해 주세요.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </Fragment>
            )
        } else if (ChartState == 'Depth2') {
            return (
                <Fragment>
                    <div className={Styles.popup_wrap}>
                        <header className={Styles.pop_header}>
                            <h1>테이블 불러오기</h1>
                            <button
                                onClick={this.close}
                                className={`${Styles.btn_back} ${Styles.imbtn_pop_close}`}
                            >
                                <span className={Styles.blind}>뒤로가기</span>
                            </button>
                        </header>
                        <section className={`${Styles.pop_content} ${Styles.chart_content}`}>
                            {/* [D] 메뉴 카테고리 선택에 따라 텍스트 변경  */}
                            {/* 창 조절하기 버튼을 누르면 fold 클래스 추가 */}
                            <section className={`${Styles.aside} ${Styles.fold}`}>
                                <h2 className={Styles.blind}>테이블 추가하기</h2>
                                <div className={Styles.add_btn_box}>
                                    <a href="/" role="button">테이블 추가하기</a>
                                </div>
                                <ul className={Styles.list}>
                                    <li>
                                        새로운 테이블
                                        <a href="/" className={Styles.btn_close}>
                                            <span className={Styles.blind}>삭제</span>
                                        </a>
                                    </li>
                                    {/* 활성화 시 active 클래스 추가 */}
                                    <li className={Styles.active}>
                                        새로운 테이블
                                        <a href="/" className={Styles.btn_close}>
                                            <span className={Styles.blind}>삭제</span>
                                        </a>
                                        {/* active 클래스가 들어오면 노출 시켜 주세요 */}
                                        <div className={Styles.cell_layer} style={{ width: 120, top: 20, right: 8, display: 'none' }}>
                                            <ul>
                                                <li>
                                                    <a href="/" className={Styles.link}>복제</a>
                                                </li>
                                                <li>
                                                    <a href="/" className={Styles.link}>삭제</a>
                                                </li>
                                                <li>
                                                    <a href="/" className={Styles.link}>PC에 저장</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        새로운 테이블
                                        <a href="/" className={Styles.btn_close}>
                                            <span className={Styles.blind}>삭제</span>
                                        </a>
                                    </li>
                                </ul>
                                <a href="/" role="button" className={Styles.split_bar}>
                                    <span className={Styles.blind}>창 조절하기</span>
                                </a>
                            </section>
                            <div className={Styles.section_cont}>
                                <div className={Styles.sheet_form_box}>
                                    <input type="text" id="sheet_sjt" name="sheet_sjt" className={Styles.input} />
                                    <div className={Styles.btn_box}>
                                        <div className={Styles.tab}>
                                            <a href="/" role="button">테이블</a>
                                            <a href="/" role="button" className={Styles.active}>차트</a>
                                            <a href="/" role="button">정보</a>
                                        </div>
                                        <a href="/" role="button" className={Styles.btn_save}>저장하기</a>
                                    </div>
                                </div>
                                <div className={Styles.chart_box}>
                                    <h2 className={Styles.blind}>차트</h2>
                                    <div className={Styles.inner}>
                                        {/* 테이블 선택 */}
                                        <div className={Styles.chart_navi}>
                                            <a href="#" className={`${Styles.chart_link} ${Styles.bar} ${Styles.disabled}`}>
                                                <span className={Styles.blind}>막대형</span>
                                            </a>
                                            <a href="#" className={`${Styles.chart_link} ${Styles.line} ${Styles.disabled}`}>
                                                <span className={Styles.blind}>꺽은선형</span>
                                            </a>
                                            <a href="#" className={`${Styles.chart_link} ${Styles.pie} ${Styles.disabled}`}>
                                                <span className={Styles.blind}>원형</span>
                                            </a>
                                            <a href="#" className={`${Styles.chart_link} ${Styles.scatter} ${Styles.disabled}`}>
                                                <span className={Styles.blind}>방사형</span>
                                            </a>
                                            <div className={Styles.add_link_box}>
                                                <a href="#" className={Styles.add_link} role="button">
                                                    <span className={Styles.blind}>추가하기</span>
                                                </a>
                                                {/* 추가하기 링크가 클릭되면 display: block 처리 해주세요 */}
                                                <div className={Styles.vertical_tooltip} style={{ left: '56px', display: 'none' }}>
                                                    <ul className={Styles.graph_list}>
                                                        <li className={Styles.bar}>
                                                            <a href="#" role="button">막대</a>
                                                        </li>
                                                        <li className={Styles.line}>
                                                            <a href="#" role="button">선</a>
                                                        </li>
                                                        <li className={Styles.pie}>
                                                            <a href="#" role="button">원</a>
                                                        </li>
                                                        <li className={Styles.scatter}>
                                                            <a href="#" role="button">점</a>
                                                        </li>
                                                    </ul>
                                                    <span className={Styles.arr}><i></i></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={Styles.form_box}>
                                            <div className={Styles.input_inner}>
                                                <label htmlFor="ChartName" className={Styles.tit_label}>차트 이름</label>
                                                <div className={Styles.input_box}>
                                                    <input type="text" id="ChartName" name="ChartName" />
                                                </div>
                                                <a href="/" role="button" className={Styles.del_btn}>차트 삭제</a>
                                            </div>
                                            <div className={Styles.input_inner}>
                                                <div className={Styles.select_group}>
                                                    <label htmlFor="ChartName" className={Styles.tit_label}>가로축</label>
                                                    <div className={`${Styles.pop_selectbox} ${Styles.on}`} style={{ width: 208 }}>
                                                        {/* [D] on 클래스가 들어오면  imico_pop_select_arr_up 으로 바꿔주세요 */}
                                                        <div className={`${Styles.select_link} ${Styles.imico_pop_select_arr_up}`}>선택</div>
                                                        {/* 공통 툴팁의 화살표 기본 위치는 가운데 입니다. */}
                                                            <div className={Styles.tooltip_box} style={{ width: 208 }}>
                                                            <div className={Styles.tooltip_inner}>
                                                                <ul className={Styles.select_list}>
                                                                    <li className={Styles.list_item}>
                                                                        <label className={Styles.check_inner} htmlFor="Chk1">
                                                                            <input type="checkbox" id="Chk1" name="Chk1" className={Styles.blind} />
                                                                            <span>&nbsp;</span>
                                                                            <em className={Styles.text}>모두</em>
                                                                        </label>
                                                                    </li>
                                                                    <li className={Styles.list_item}>
                                                                        <label className={Styles.check_inner} htmlFor="Chk2">
                                                                            <input type="checkbox" id="Chk2" name="Chk2" className={Styles.blind} />
                                                                            <span>&nbsp;</span>
                                                                            <em className={Styles.text}>발표 시간</em>
                                                                        </label>
                                                                    </li>
                                                                    <li className={Styles.list_item}>
                                                                        <label className={Styles.check_inner} htmlFor="Chk1">
                                                                            <input type="checkbox" id="Chk1" name="Chk1" className={Styles.blind} />
                                                                            <span>&nbsp;</span>
                                                                            <em className={Styles.text}>모두</em>
                                                                        </label>
                                                                    </li>
                                                                    <li className={Styles.list_item}>
                                                                        <label className={Styles.check_inner} htmlFor="Chk2">
                                                                            <input type="checkbox" id="Chk2" name="Chk2" className={Styles.blind} />
                                                                            <span>&nbsp;</span>
                                                                            <em className={Styles.text}>발표 시간</em>
                                                                        </label>
                                                                    </li>
                                                                    <li className={Styles.list_item}>
                                                                        <label className={Styles.check_inner} htmlFor="Chk1">
                                                                            <input type="checkbox" id="Chk1" name="Chk1" className={Styles.blind} />
                                                                            <span>&nbsp;</span>
                                                                            <em className={Styles.text}>모두</em>
                                                                        </label>
                                                                    </li>
                                                                    <li className={Styles.list_item}>
                                                                        <label className={Styles.check_inner} htmlFor="Chk2">
                                                                            <input type="checkbox" id="Chk2" name="Chk2" className={Styles.blind} />
                                                                            <span>&nbsp;</span>
                                                                            <em className={Styles.text}>발표 시간</em>
                                                                        </label>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <span className={Styles.arr}>
                                                                <i />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={Styles.select_group} style={{ marginLeft : 45 }}>
                                                    <label htmlFor="ChartName" className={Styles.tit_label}>계열</label>
                                                    <div className={Styles.pop_selectbox} style={{ width: 208 }}>
                                                        {/* [D] on 클래스가 들어오면  imico_pop_select_arr_up 으로 바꿔주세요 */}
                                                        <div className={`${Styles.select_link} ${Styles.imico_pop_select_arr_down}`}>선택</div>
                                                        {/* 공통 툴팁의 화살표 기본 위치는 가운데 입니다. */}
                                                            <div className={Styles.tooltip_box} style={{ width: 208, display: 'none' }}>
                                                            <div className={Styles.tooltip_inner}>
                                                                <ul className={Styles.select_list}>
                                                                    <li className={Styles.list_item}>
                                                                        <label className={Styles.check_inner} htmlFor="Chk1">
                                                                            <input type="checkbox" id="Chk1" name="Chk1" className={Styles.blind} />
                                                                            <span>&nbsp;</span>
                                                                            <em className={Styles.text}>모두</em>
                                                                        </label>
                                                                    </li>
                                                                    <li className={Styles.list_item}>
                                                                        <label className={Styles.check_inner} htmlFor="Chk2">
                                                                            <input type="checkbox" id="Chk2" name="Chk2" className={Styles.blind} />
                                                                            <span>&nbsp;</span>
                                                                            <em className={Styles.text}>발표 시간</em>
                                                                        </label>
                                                                    </li>
                                                                    <li className={Styles.list_item}>
                                                                        <label className={Styles.check_inner} htmlFor="Chk1">
                                                                            <input type="checkbox" id="Chk1" name="Chk1" className={Styles.blind} />
                                                                            <span>&nbsp;</span>
                                                                            <em className={Styles.text}>모두</em>
                                                                        </label>
                                                                    </li>
                                                                    <li className={Styles.list_item}>
                                                                        <label className={Styles.check_inner} htmlFor="Chk2">
                                                                            <input type="checkbox" id="Chk2" name="Chk2" className={Styles.blind} />
                                                                            <span>&nbsp;</span>
                                                                            <em className={Styles.text}>발표 시간</em>
                                                                        </label>
                                                                    </li>
                                                                    <li className={Styles.list_item}>
                                                                        <label className={Styles.check_inner} htmlFor="Chk1">
                                                                            <input type="checkbox" id="Chk1" name="Chk1" className={Styles.blind} />
                                                                            <span>&nbsp;</span>
                                                                            <em className={Styles.text}>모두</em>
                                                                        </label>
                                                                    </li>
                                                                    <li className={Styles.list_item}>
                                                                        <label className={Styles.check_inner} htmlFor="Chk2">
                                                                            <input type="checkbox" id="Chk2" name="Chk2" className={Styles.blind} />
                                                                            <span>&nbsp;</span>
                                                                            <em className={Styles.text}>발표 시간</em>
                                                                        </label>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <span className={Styles.arr}>
                                                                <i />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* 테이블 차트 입력폼 */}
                                        <div className={Styles.chart_no_result} style={{ backgroundColor : '#fff' }}>
                                            <p className={Styles.dsc}>
                                                {NoResultText}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </Fragment>
            )
        } else if (ChartState == 'Depth2Graph') {
            return (
                <Fragment>
                    <div className={Styles.popup_wrap}>
                        <header className={Styles.pop_header}>
                            <h1>테이블 불러오기</h1>
                            <button
                                onClick={this.close}
                                className={`${Styles.btn_back} ${Styles.imbtn_pop_close}`}
                            >
                                <span className={Styles.blind}>뒤로가기</span>
                            </button>
                        </header>
                        <section className={`${Styles.pop_content} ${Styles.chart_content}`}>
                            {/* [D] 메뉴 카테고리 선택에 따라 텍스트 변경  */}
                            {/* 창 조절하기 버튼을 누르면 fold 클래스 추가 */}
                            <section className={`${Styles.aside} ${Styles.fold}`}>
                                <h2 className={Styles.blind}>테이블 추가하기</h2>
                                <div className={Styles.add_btn_box}>
                                    <a href="/" role="button">테이블 추가하기</a>
                                </div>
                                <ul className={Styles.list}>
                                    <li>
                                        새로운 테이블
                                        <a href="/" className={Styles.btn_close}>
                                            <span className={Styles.blind}>삭제</span>
                                        </a>
                                    </li>
                                    {/* 활성화 시 active 클래스 추가 */}
                                    <li className={Styles.active}>
                                        새로운 테이블
                                        <a href="/" className={Styles.btn_close}>
                                            <span className={Styles.blind}>삭제</span>
                                        </a>
                                        {/* active 클래스가 들어오면 노출 시켜 주세요 */}
                                        <div className={Styles.cell_layer} style={{ width: 120, top: 20, right: 8, display: 'none' }}>
                                            <ul>
                                                <li>
                                                    <a href="/" className={Styles.link}>복제</a>
                                                </li>
                                                <li>
                                                    <a href="/" className={Styles.link}>삭제</a>
                                                </li>
                                                <li>
                                                    <a href="/" className={Styles.link}>PC에 저장</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        새로운 테이블
                                        <a href="/" className={Styles.btn_close}>
                                            <span className={Styles.blind}>삭제</span>
                                        </a>
                                    </li>
                                </ul>
                                <a href="/" role="button" className={Styles.split_bar}>
                                    <span className={Styles.blind}>창 조절하기</span>
                                </a>
                            </section>
                            <div className={Styles.section_cont}>
                                <div className={Styles.sheet_form_box}>
                                    <input type="text" id="sheet_sjt" name="sheet_sjt" className={Styles.input} />
                                    <div className={Styles.btn_box}>
                                        <div className={Styles.tab}>
                                            <a href="/" role="button">테이블</a>
                                            <a href="/" role="button" className={Styles.active}>차트</a>
                                            <a href="/" role="button">정보</a>
                                        </div>
                                        <a href="/" role="button" className={Styles.btn_save}>저장하기</a>
                                    </div>
                                </div>
                                <div className={Styles.chart_box}>
                                    <h2 className={Styles.blind}>차트</h2>
                                    <div className={Styles.inner}>
                                        {/* 테이블 선택 */}
                                        <div className={Styles.chart_navi}>
                                            <a href="#" className={`${Styles.chart_link} ${Styles.bar} ${Styles.disabled}`}>
                                                <span className={Styles.blind}>막대형</span>
                                            </a>
                                            <a href="#" className={`${Styles.chart_link} ${Styles.line} ${Styles.disabled}`}>
                                                <span className={Styles.blind}>꺽은선형</span>
                                            </a>
                                            <a href="#" className={`${Styles.chart_link} ${Styles.pie} ${Styles.disabled}`}>
                                                <span className={Styles.blind}>원형</span>
                                            </a>
                                            <a href="#" className={`${Styles.chart_link} ${Styles.scatter} ${Styles.disabled}`}>
                                                <span className={Styles.blind}>방사형</span>
                                            </a>
                                            <div className={Styles.add_link_box}>
                                                <a href="#" className={Styles.add_link} role="button">
                                                    <span className={Styles.blind}>추가하기</span>
                                                </a>
                                                {/* 추가하기 링크가 클릭되면 display: block 처리 해주세요 */}
                                                <div className={Styles.vertical_tooltip} style={{ left: '56px', display: 'none' }}>
                                                    <ul className={Styles.graph_list}>
                                                        <li className={Styles.bar}>
                                                            <a href="#" role="button">막대</a>
                                                        </li>
                                                        <li className={Styles.line}>
                                                            <a href="#" role="button">선</a>
                                                        </li>
                                                        <li className={Styles.pie}>
                                                            <a href="#" role="button">원</a>
                                                        </li>
                                                        <li className={Styles.scatter}>
                                                            <a href="#" role="button">점</a>
                                                        </li>
                                                    </ul>
                                                    <span className={Styles.arr}><i></i></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={Styles.form_box}>
                                            <div className={Styles.input_inner}>
                                                <label htmlFor="ChartName" className={Styles.tit_label}>차트 이름</label>
                                                <div className={Styles.input_box}>
                                                    <input type="text" id="ChartName" name="ChartName" />
                                                </div>
                                                <a href="/" role="button" className={Styles.del_btn}>차트 삭제</a>
                                            </div>
                                            <div className={Styles.input_inner}>
                                                <div className={Styles.select_group}>
                                                    <label htmlFor="ChartName" className={Styles.tit_label}>가로축</label>
                                                    <div className={Styles.pop_selectbox} style={{ width: 208 }}>
                                                        {/* [D] on 클래스가 들어오면  imico_pop_select_arr_up 으로 바꿔주세요 */}
                                                        <div className={`${Styles.select_link} ${Styles.imico_pop_select_arr_down}`}>선택</div>
                                                        {/* 공통 툴팁의 화살표 기본 위치는 가운데 입니다. */}
                                                            <div className={Styles.tooltip_box} style={{ width: 208, display: 'none' }}>
                                                            <div className={Styles.tooltip_inner}>
                                                                <ul className={Styles.select_list}>
                                                                    <li className={Styles.list_item}>
                                                                        <label className={Styles.check_inner} htmlFor="Chk1">
                                                                            <input type="checkbox" id="Chk1" name="Chk1" className={Styles.blind} />
                                                                            <span>&nbsp;</span>
                                                                            <em className={Styles.text}>모두</em>
                                                                        </label>
                                                                    </li>
                                                                    <li className={Styles.list_item}>
                                                                        <label className={Styles.check_inner} htmlFor="Chk2">
                                                                            <input type="checkbox" id="Chk2" name="Chk2" className={Styles.blind} />
                                                                            <span>&nbsp;</span>
                                                                            <em className={Styles.text}>발표 시간</em>
                                                                        </label>
                                                                    </li>
                                                                    <li className={Styles.list_item}>
                                                                        <label className={Styles.check_inner} htmlFor="Chk1">
                                                                            <input type="checkbox" id="Chk1" name="Chk1" className={Styles.blind} />
                                                                            <span>&nbsp;</span>
                                                                            <em className={Styles.text}>모두</em>
                                                                        </label>
                                                                    </li>
                                                                    <li className={Styles.list_item}>
                                                                        <label className={Styles.check_inner} htmlFor="Chk2">
                                                                            <input type="checkbox" id="Chk2" name="Chk2" className={Styles.blind} />
                                                                            <span>&nbsp;</span>
                                                                            <em className={Styles.text}>발표 시간</em>
                                                                        </label>
                                                                    </li>
                                                                    <li className={Styles.list_item}>
                                                                        <label className={Styles.check_inner} htmlFor="Chk1">
                                                                            <input type="checkbox" id="Chk1" name="Chk1" className={Styles.blind} />
                                                                            <span>&nbsp;</span>
                                                                            <em className={Styles.text}>모두</em>
                                                                        </label>
                                                                    </li>
                                                                    <li className={Styles.list_item}>
                                                                        <label className={Styles.check_inner} htmlFor="Chk2">
                                                                            <input type="checkbox" id="Chk2" name="Chk2" className={Styles.blind} />
                                                                            <span>&nbsp;</span>
                                                                            <em className={Styles.text}>발표 시간</em>
                                                                        </label>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <span className={Styles.arr}>
                                                                <i />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={Styles.select_group} style={{ marginLeft : 45 }}>
                                                    <label htmlFor="ChartName" className={Styles.tit_label}>계열</label>
                                                    <div className={Styles.pop_selectbox} style={{ width: 208 }}>
                                                        {/* [D] on 클래스가 들어오면  imico_pop_select_arr_up 으로 바꿔주세요 */}
                                                        <div className={`${Styles.select_link} ${Styles.imico_pop_select_arr_down}`}>선택</div>
                                                        {/* 공통 툴팁의 화살표 기본 위치는 가운데 입니다. */}
                                                            <div className={Styles.tooltip_box} style={{ width: 208, display: 'none' }}>
                                                            <div className={Styles.tooltip_inner}>
                                                                <ul className={Styles.select_list}>
                                                                    <li className={Styles.list_item}>
                                                                        <label className={Styles.check_inner} htmlFor="Chk1">
                                                                            <input type="checkbox" id="Chk1" name="Chk1" className={Styles.blind} />
                                                                            <span>&nbsp;</span>
                                                                            <em className={Styles.text}>모두</em>
                                                                        </label>
                                                                    </li>
                                                                    <li className={Styles.list_item}>
                                                                        <label className={Styles.check_inner} htmlFor="Chk2">
                                                                            <input type="checkbox" id="Chk2" name="Chk2" className={Styles.blind} />
                                                                            <span>&nbsp;</span>
                                                                            <em className={Styles.text}>발표 시간</em>
                                                                        </label>
                                                                    </li>
                                                                    <li className={Styles.list_item}>
                                                                        <label className={Styles.check_inner} htmlFor="Chk1">
                                                                            <input type="checkbox" id="Chk1" name="Chk1" className={Styles.blind} />
                                                                            <span>&nbsp;</span>
                                                                            <em className={Styles.text}>모두</em>
                                                                        </label>
                                                                    </li>
                                                                    <li className={Styles.list_item}>
                                                                        <label className={Styles.check_inner} htmlFor="Chk2">
                                                                            <input type="checkbox" id="Chk2" name="Chk2" className={Styles.blind} />
                                                                            <span>&nbsp;</span>
                                                                            <em className={Styles.text}>발표 시간</em>
                                                                        </label>
                                                                    </li>
                                                                    <li className={Styles.list_item}>
                                                                        <label className={Styles.check_inner} htmlFor="Chk1">
                                                                            <input type="checkbox" id="Chk1" name="Chk1" className={Styles.blind} />
                                                                            <span>&nbsp;</span>
                                                                            <em className={Styles.text}>모두</em>
                                                                        </label>
                                                                    </li>
                                                                    <li className={Styles.list_item}>
                                                                        <label className={Styles.check_inner} htmlFor="Chk2">
                                                                            <input type="checkbox" id="Chk2" name="Chk2" className={Styles.blind} />
                                                                            <span>&nbsp;</span>
                                                                            <em className={Styles.text}>발표 시간</em>
                                                                        </label>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <span className={Styles.arr}>
                                                                <i />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={Styles.graph_box}>
                                            <div style={{ height: 500, backgroundColor : 'orange'}}>
                                                여기에 그래프를 넣어주세요
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </Fragment>
            )
        } else if (ChartState == 'Depth3') {
            return (
                <Fragment>
                    <div className={Styles.popup_wrap}>
                        <header className={Styles.pop_header}>
                            <h1>테이블 불러오기</h1>
                            <button
                                onClick={this.close}
                                className={`${Styles.btn_back} ${Styles.imbtn_pop_close}`}
                            >
                                <span className={Styles.blind}>뒤로가기</span>
                            </button>
                        </header>
                        <section className={`${Styles.pop_content} ${Styles.chart_content}`}>
                            {/* [D] 메뉴 카테고리 선택에 따라 텍스트 변경  */}
                            {/* 창 조절하기 버튼을 누르면 fold 클래스 추가 */}
                            <section className={`${Styles.aside} ${Styles.fold}`}>
                                <h2 className={Styles.blind}>테이블 추가하기</h2>
                                <div className={Styles.add_btn_box}>
                                    <a href="/" role="button">테이블 추가하기</a>
                                </div>
                                <ul className={Styles.list}>
                                    <li>
                                        새로운 테이블
                                        <a href="/" className={Styles.btn_close}>
                                            <span className={Styles.blind}>삭제</span>
                                        </a>
                                    </li>
                                    {/* 활성화 시 active 클래스 추가 */}
                                    <li className={Styles.active}>
                                        새로운 테이블
                                        <a href="/" className={Styles.btn_close}>
                                            <span className={Styles.blind}>삭제</span>
                                        </a>
                                        {/* active 클래스가 들어오면 노출 시켜 주세요 */}
                                        <div className={Styles.cell_layer} style={{ width: 120, top: 20, right: 8, display: 'none' }}>
                                            <ul>
                                                <li>
                                                    <a href="/" className={Styles.link}>복제</a>
                                                </li>
                                                <li>
                                                    <a href="/" className={Styles.link}>삭제</a>
                                                </li>
                                                <li>
                                                    <a href="/" className={Styles.link}>PC에 저장</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        새로운 테이블
                                        <a href="/" className={Styles.btn_close}>
                                            <span className={Styles.blind}>삭제</span>
                                        </a>
                                    </li>
                                </ul>
                                <a href="/" role="button" className={Styles.split_bar}>
                                    <span className={Styles.blind}>창 조절하기</span>
                                </a>
                            </section>
                            <div className={Styles.section_cont}>
                                <div className={Styles.sheet_form_box}>
                                    <input type="text" id="sheet_sjt" name="sheet_sjt" className={Styles.input} />
                                    <div className={Styles.btn_box}>
                                        <div className={Styles.tab}>
                                            <a href="/" role="button">테이블</a>
                                            <a href="/" role="button" className={Styles.active}>차트</a>
                                            <a href="/" role="button">정보</a>
                                        </div>
                                        <a href="/" role="button" className={Styles.btn_save}>저장하기</a>
                                    </div>
                                </div>
                                <div className={Styles.chart_box}>
                                    <h2 className={Styles.blind}>차트</h2>
                                    <div className={Styles.inner}>
                                        {/* 테이블 선택 */}
                                        <div className={Styles.chart_navi}>
                                            <a href="#" className={`${Styles.chart_link} ${Styles.bar} ${Styles.disabled}`}>
                                                <span className={Styles.blind}>막대형</span>
                                            </a>
                                            <a href="#" className={`${Styles.chart_link} ${Styles.line} ${Styles.disabled}`}>
                                                <span className={Styles.blind}>꺽은선형</span>
                                            </a>
                                            <a href="#" className={`${Styles.chart_link} ${Styles.pie} ${Styles.disabled}`}>
                                                <span className={Styles.blind}>원형</span>
                                            </a>
                                            <a href="#" className={`${Styles.chart_link} ${Styles.scatter} ${Styles.disabled}`}>
                                                <span className={Styles.blind}>방사형</span>
                                            </a>
                                            <div className={Styles.add_link_box}>
                                                <a href="#" className={Styles.add_link} role="button">
                                                    <span className={Styles.blind}>추가하기</span>
                                                </a>
                                                {/* 추가하기 링크가 클릭되면 display: block 처리 해주세요 */}
                                                <div className={Styles.vertical_tooltip} style={{ left: '56px', display: 'none' }}>
                                                    <ul className={Styles.graph_list}>
                                                        <li className={Styles.bar}>
                                                            <a href="#" role="button">막대</a>
                                                        </li>
                                                        <li className={Styles.line}>
                                                            <a href="#" role="button">선</a>
                                                        </li>
                                                        <li className={Styles.pie}>
                                                            <a href="#" role="button">원</a>
                                                        </li>
                                                        <li className={Styles.scatter}>
                                                            <a href="#" role="button">점</a>
                                                        </li>
                                                    </ul>
                                                    <span className={Styles.arr}><i></i></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={Styles.form_box}>
                                            <div className={Styles.input_inner}>
                                                <label htmlFor="ChartName" className={Styles.tit_label}>차트 이름</label>
                                                <div className={Styles.input_box}>
                                                    <input type="text" id="ChartName" name="ChartName" />
                                                </div>
                                                <a href="/" role="button" className={Styles.del_btn}>차트 삭제</a>
                                            </div>
                                            <div className={Styles.input_inner}>
                                                <div className={Styles.select_group}>
                                                    <label htmlFor="ChartName" className={Styles.tit_label}>가로축</label>
                                                    <div className={`${Styles.pop_selectbox} ${Styles.on}`} style={{ width: 153 }}>
                                                        {/* [D] on 클래스가 들어오면  imico_pop_select_arr_up 으로 바꿔주세요 */}
                                                        <div className={`${Styles.select_link} ${Styles.imico_pop_select_arr_down}`}>선택</div>
                                                        {/* 공통 툴팁의 화살표 기본 위치는 가운데 입니다. */}
                                                            <div className={Styles.tooltip_box} style={{ width: 153, display: 'none' }}>
                                                                <div className={Styles.tooltip_inner}>
                                                                    <ul className={Styles.select_list}>
                                                                        <li className={Styles.list_item}>
                                                                            <label className={Styles.check_inner} htmlFor="Chk1">
                                                                                <input type="checkbox" id="Chk1" name="Chk1" className={Styles.blind} />
                                                                                <span>&nbsp;</span>
                                                                                <em className={Styles.text}>모두</em>
                                                                            </label>
                                                                        </li>
                                                                        <li className={Styles.list_item}>
                                                                            <label className={Styles.check_inner} htmlFor="Chk2">
                                                                                <input type="checkbox" id="Chk2" name="Chk2" className={Styles.blind} />
                                                                                <span>&nbsp;</span>
                                                                                <em className={Styles.text}>발표 시간</em>
                                                                            </label>
                                                                        </li>
                                                                        <li className={Styles.list_item}>
                                                                            <label className={Styles.check_inner} htmlFor="Chk1">
                                                                                <input type="checkbox" id="Chk1" name="Chk1" className={Styles.blind} />
                                                                                <span>&nbsp;</span>
                                                                                <em className={Styles.text}>모두</em>
                                                                            </label>
                                                                        </li>
                                                                        <li className={Styles.list_item}>
                                                                            <label className={Styles.check_inner} htmlFor="Chk2">
                                                                                <input type="checkbox" id="Chk2" name="Chk2" className={Styles.blind} />
                                                                                <span>&nbsp;</span>
                                                                                <em className={Styles.text}>발표 시간</em>
                                                                            </label>
                                                                        </li>
                                                                        <li className={Styles.list_item}>
                                                                            <label className={Styles.check_inner} htmlFor="Chk1">
                                                                                <input type="checkbox" id="Chk1" name="Chk1" className={Styles.blind} />
                                                                                <span>&nbsp;</span>
                                                                                <em className={Styles.text}>모두</em>
                                                                            </label>
                                                                        </li>
                                                                        <li className={Styles.list_item}>
                                                                            <label className={Styles.check_inner} htmlFor="Chk2">
                                                                                <input type="checkbox" id="Chk2" name="Chk2" className={Styles.blind} />
                                                                                <span>&nbsp;</span>
                                                                                <em className={Styles.text}>발표 시간</em>
                                                                            </label>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <span className={Styles.arr}>
                                                                    <i />
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                <div className={Styles.select_group}>
                                                    <label htmlFor="ChartName" className={Styles.tit_label}>세로축</label>
                                                    <div className={`${Styles.pop_selectbox} ${Styles.on}`} style={{ width: 153 }}>
                                                        {/* [D] on 클래스가 들어오면  imico_pop_select_arr_up 으로 바꿔주세요 */}
                                                        <div className={`${Styles.select_link} ${Styles.imico_pop_select_arr_down}`}>선택</div>
                                                        {/* 공통 툴팁의 화살표 기본 위치는 가운데 입니다. */}
                                                        <div className={Styles.tooltip_box} style={{ width: 153, display: 'none' }}>
                                                            <div className={Styles.tooltip_inner}>
                                                                <ul className={Styles.select_list}>
                                                                    <li className={Styles.list_item}>
                                                                        <label className={Styles.check_inner} htmlFor="Chk1">
                                                                            <input type="checkbox" id="Chk1" name="Chk1" className={Styles.blind} />
                                                                            <span>&nbsp;</span>
                                                                            <em className={Styles.text}>모두</em>
                                                                        </label>
                                                                    </li>
                                                                    <li className={Styles.list_item}>
                                                                        <label className={Styles.check_inner} htmlFor="Chk2">
                                                                            <input type="checkbox" id="Chk2" name="Chk2" className={Styles.blind} />
                                                                            <span>&nbsp;</span>
                                                                            <em className={Styles.text}>발표 시간</em>
                                                                        </label>
                                                                    </li>
                                                                    <li className={Styles.list_item}>
                                                                        <label className={Styles.check_inner} htmlFor="Chk1">
                                                                            <input type="checkbox" id="Chk1" name="Chk1" className={Styles.blind} />
                                                                            <span>&nbsp;</span>
                                                                            <em className={Styles.text}>모두</em>
                                                                        </label>
                                                                    </li>
                                                                    <li className={Styles.list_item}>
                                                                        <label className={Styles.check_inner} htmlFor="Chk2">
                                                                            <input type="checkbox" id="Chk2" name="Chk2" className={Styles.blind} />
                                                                            <span>&nbsp;</span>
                                                                            <em className={Styles.text}>발표 시간</em>
                                                                        </label>
                                                                    </li>
                                                                    <li className={Styles.list_item}>
                                                                        <label className={Styles.check_inner} htmlFor="Chk1">
                                                                            <input type="checkbox" id="Chk1" name="Chk1" className={Styles.blind} />
                                                                            <span>&nbsp;</span>
                                                                            <em className={Styles.text}>모두</em>
                                                                        </label>
                                                                    </li>
                                                                    <li className={Styles.list_item}>
                                                                        <label className={Styles.check_inner} htmlFor="Chk2">
                                                                            <input type="checkbox" id="Chk2" name="Chk2" className={Styles.blind} />
                                                                            <span>&nbsp;</span>
                                                                            <em className={Styles.text}>발표 시간</em>
                                                                        </label>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <span className={Styles.arr}>
                                                                <i />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={Styles.select_group}>
                                                    <label htmlFor="ChartName" className={Styles.tit_label}>계열</label>
                                                    <div className={`${Styles.pop_selectbox} ${Styles.on}`} style={{ width: 153 }}>
                                                        {/* [D] on 클래스가 들어오면  imico_pop_select_arr_up 으로 바꿔주세요 */}
                                                        <div className={`${Styles.select_link} ${Styles.imico_pop_select_arr_down}`}>선택</div>
                                                        {/* 공통 툴팁의 화살표 기본 위치는 가운데 입니다. */}
                                                            <div className={Styles.tooltip_box} style={{ width: 153, display: 'none' }}>
                                                                <div className={Styles.tooltip_inner}>
                                                                <ul className={Styles.select_list}>
                                                                    <li className={Styles.list_item}>
                                                                        <label className={Styles.check_inner} htmlFor="Chk1">
                                                                            <input type="checkbox" id="Chk1" name="Chk1" className={Styles.blind} />
                                                                            <span>&nbsp;</span>
                                                                            <em className={Styles.text}>모두</em>
                                                                        </label>
                                                                    </li>
                                                                    <li className={Styles.list_item}>
                                                                        <label className={Styles.check_inner} htmlFor="Chk2">
                                                                            <input type="checkbox" id="Chk2" name="Chk2" className={Styles.blind} />
                                                                            <span>&nbsp;</span>
                                                                            <em className={Styles.text}>발표 시간</em>
                                                                        </label>
                                                                    </li>
                                                                    <li className={Styles.list_item}>
                                                                        <label className={Styles.check_inner} htmlFor="Chk1">
                                                                            <input type="checkbox" id="Chk1" name="Chk1" className={Styles.blind} />
                                                                            <span>&nbsp;</span>
                                                                            <em className={Styles.text}>모두</em>
                                                                        </label>
                                                                    </li>
                                                                    <li className={Styles.list_item}>
                                                                        <label className={Styles.check_inner} htmlFor="Chk2">
                                                                            <input type="checkbox" id="Chk2" name="Chk2" className={Styles.blind} />
                                                                            <span>&nbsp;</span>
                                                                            <em className={Styles.text}>발표 시간</em>
                                                                        </label>
                                                                    </li>
                                                                    <li className={Styles.list_item}>
                                                                        <label className={Styles.check_inner} htmlFor="Chk1">
                                                                            <input type="checkbox" id="Chk1" name="Chk1" className={Styles.blind} />
                                                                            <span>&nbsp;</span>
                                                                            <em className={Styles.text}>모두</em>
                                                                        </label>
                                                                    </li>
                                                                    <li className={Styles.list_item}>
                                                                        <label className={Styles.check_inner} htmlFor="Chk2">
                                                                            <input type="checkbox" id="Chk2" name="Chk2" className={Styles.blind} />
                                                                            <span>&nbsp;</span>
                                                                            <em className={Styles.text}>발표 시간</em>
                                                                        </label>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <span className={Styles.arr}>
                                                                <i />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* 테이블 차트 입력폼 */}
                                        <div className={Styles.chart_no_result} style={{ backgroundColor : '#fff' }}>
                                            <p className={Styles.dsc}>
                                                {NoResultText}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </Fragment>
            )
        } else if (ChartState == 'Depth3Graph') {
            return (
                <Fragment>
                    <div className={Styles.popup_wrap}>
                        <header className={Styles.pop_header}>
                            <h1>테이블 불러오기</h1>
                            <button
                                onClick={this.close}
                                className={`${Styles.btn_back} ${Styles.imbtn_pop_close}`}
                            >
                                <span className={Styles.blind}>뒤로가기</span>
                            </button>
                        </header>
                        <section className={`${Styles.pop_content} ${Styles.chart_content}`}>
                            {/* [D] 메뉴 카테고리 선택에 따라 텍스트 변경  */}
                            {/* 창 조절하기 버튼을 누르면 fold 클래스 추가 */}
                            <section className={`${Styles.aside} ${Styles.fold}`}>
                                <h2 className={Styles.blind}>테이블 추가하기</h2>
                                <div className={Styles.add_btn_box}>
                                    <a href="/" role="button">테이블 추가하기</a>
                                </div>
                                <ul className={Styles.list}>
                                    <li>
                                        새로운 테이블
                                        <a href="/" className={Styles.btn_close}>
                                            <span className={Styles.blind}>삭제</span>
                                        </a>
                                    </li>
                                    {/* 활성화 시 active 클래스 추가 */}
                                    <li className={Styles.active}>
                                        새로운 테이블
                                        <a href="/" className={Styles.btn_close}>
                                            <span className={Styles.blind}>삭제</span>
                                        </a>
                                        {/* active 클래스가 들어오면 노출 시켜 주세요 */}
                                        <div className={Styles.cell_layer} style={{ width: 120, top: 20, right: 8, display: 'none' }}>
                                            <ul>
                                                <li>
                                                    <a href="/" className={Styles.link}>복제</a>
                                                </li>
                                                <li>
                                                    <a href="/" className={Styles.link}>삭제</a>
                                                </li>
                                                <li>
                                                    <a href="/" className={Styles.link}>PC에 저장</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        새로운 테이블
                                        <a href="/" className={Styles.btn_close}>
                                            <span className={Styles.blind}>삭제</span>
                                        </a>
                                    </li>
                                </ul>
                                <a href="/" role="button" className={Styles.split_bar}>
                                    <span className={Styles.blind}>창 조절하기</span>
                                </a>
                            </section>
                            <div className={Styles.section_cont}>
                                <div className={Styles.sheet_form_box}>
                                    <input type="text" id="sheet_sjt" name="sheet_sjt" className={Styles.input} />
                                    <div className={Styles.btn_box}>
                                        <div className={Styles.tab}>
                                            <a href="/" role="button">테이블</a>
                                            <a href="/" role="button" className={Styles.active}>차트</a>
                                            <a href="/" role="button">정보</a>
                                        </div>
                                        <a href="/" role="button" className={Styles.btn_save}>저장하기</a>
                                    </div>
                                </div>
                                <div className={Styles.chart_box}>
                                    <h2 className={Styles.blind}>차트</h2>
                                    <div className={Styles.inner}>
                                        {/* 테이블 선택 */}
                                        <div className={Styles.chart_navi}>
                                            <a href="#" className={`${Styles.chart_link} ${Styles.bar} ${Styles.disabled}`}>
                                                <span className={Styles.blind}>막대형</span>
                                            </a>
                                            <a href="#" className={`${Styles.chart_link} ${Styles.line} ${Styles.disabled}`}>
                                                <span className={Styles.blind}>꺽은선형</span>
                                            </a>
                                            <a href="#" className={`${Styles.chart_link} ${Styles.pie} ${Styles.disabled}`}>
                                                <span className={Styles.blind}>원형</span>
                                            </a>
                                            <a href="#" className={`${Styles.chart_link} ${Styles.scatter} ${Styles.disabled}`}>
                                                <span className={Styles.blind}>방사형</span>
                                            </a>
                                            <div className={Styles.add_link_box}>
                                                <a href="#" className={Styles.add_link} role="button">
                                                    <span className={Styles.blind}>추가하기</span>
                                                </a>
                                                {/* 추가하기 링크가 클릭되면 display: block 처리 해주세요 */}
                                                <div className={Styles.vertical_tooltip} style={{ left: '56px', display: 'none' }}>
                                                    <ul className={Styles.graph_list}>
                                                        <li className={Styles.bar}>
                                                            <a href="#" role="button">막대</a>
                                                        </li>
                                                        <li className={Styles.line}>
                                                            <a href="#" role="button">선</a>
                                                        </li>
                                                        <li className={Styles.pie}>
                                                            <a href="#" role="button">원</a>
                                                        </li>
                                                        <li className={Styles.scatter}>
                                                            <a href="#" role="button">점</a>
                                                        </li>
                                                    </ul>
                                                    <span className={Styles.arr}><i></i></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={Styles.form_box}>
                                            <div className={Styles.input_inner}>
                                                <label htmlFor="ChartName" className={Styles.tit_label}>차트 이름</label>
                                                <div className={Styles.input_box}>
                                                    <input type="text" id="ChartName" name="ChartName" />
                                                </div>
                                                <a href="/" role="button" className={Styles.del_btn}>차트 삭제</a>
                                            </div>
                                            <div className={Styles.input_inner}>
                                                <div className={Styles.select_group}>
                                                    <label htmlFor="ChartName" className={Styles.tit_label}>가로축</label>
                                                    <div className={`${Styles.pop_selectbox} ${Styles.on}`} style={{ width: 153 }}>
                                                        {/* [D] on 클래스가 들어오면  imico_pop_select_arr_up 으로 바꿔주세요 */}
                                                        <div className={`${Styles.select_link} ${Styles.imico_pop_select_arr_down}`}>선택</div>
                                                        {/* 공통 툴팁의 화살표 기본 위치는 가운데 입니다. */}
                                                            <div className={Styles.tooltip_box} style={{ width: 153, display: 'none' }}>
                                                                <div className={Styles.tooltip_inner}>
                                                                    <ul className={Styles.select_list}>
                                                                        <li className={Styles.list_item}>
                                                                            <label className={Styles.check_inner} htmlFor="Chk1">
                                                                                <input type="checkbox" id="Chk1" name="Chk1" className={Styles.blind} />
                                                                                <span>&nbsp;</span>
                                                                                <em className={Styles.text}>모두</em>
                                                                            </label>
                                                                        </li>
                                                                        <li className={Styles.list_item}>
                                                                            <label className={Styles.check_inner} htmlFor="Chk2">
                                                                                <input type="checkbox" id="Chk2" name="Chk2" className={Styles.blind} />
                                                                                <span>&nbsp;</span>
                                                                                <em className={Styles.text}>발표 시간</em>
                                                                            </label>
                                                                        </li>
                                                                        <li className={Styles.list_item}>
                                                                            <label className={Styles.check_inner} htmlFor="Chk1">
                                                                                <input type="checkbox" id="Chk1" name="Chk1" className={Styles.blind} />
                                                                                <span>&nbsp;</span>
                                                                                <em className={Styles.text}>모두</em>
                                                                            </label>
                                                                        </li>
                                                                        <li className={Styles.list_item}>
                                                                            <label className={Styles.check_inner} htmlFor="Chk2">
                                                                                <input type="checkbox" id="Chk2" name="Chk2" className={Styles.blind} />
                                                                                <span>&nbsp;</span>
                                                                                <em className={Styles.text}>발표 시간</em>
                                                                            </label>
                                                                        </li>
                                                                        <li className={Styles.list_item}>
                                                                            <label className={Styles.check_inner} htmlFor="Chk1">
                                                                                <input type="checkbox" id="Chk1" name="Chk1" className={Styles.blind} />
                                                                                <span>&nbsp;</span>
                                                                                <em className={Styles.text}>모두</em>
                                                                            </label>
                                                                        </li>
                                                                        <li className={Styles.list_item}>
                                                                            <label className={Styles.check_inner} htmlFor="Chk2">
                                                                                <input type="checkbox" id="Chk2" name="Chk2" className={Styles.blind} />
                                                                                <span>&nbsp;</span>
                                                                                <em className={Styles.text}>발표 시간</em>
                                                                            </label>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <span className={Styles.arr}>
                                                                    <i />
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                <div className={Styles.select_group}>
                                                    <label htmlFor="ChartName" className={Styles.tit_label}>세로축</label>
                                                    <div className={`${Styles.pop_selectbox} ${Styles.on}`} style={{ width: 153 }}>
                                                        {/* [D] on 클래스가 들어오면  imico_pop_select_arr_up 으로 바꿔주세요 */}
                                                        <div className={`${Styles.select_link} ${Styles.imico_pop_select_arr_down}`}>선택</div>
                                                        {/* 공통 툴팁의 화살표 기본 위치는 가운데 입니다. */}
                                                        <div className={Styles.tooltip_box} style={{ width: 153, display: 'none' }}>
                                                            <div className={Styles.tooltip_inner}>
                                                                <ul className={Styles.select_list}>
                                                                    <li className={Styles.list_item}>
                                                                        <label className={Styles.check_inner} htmlFor="Chk1">
                                                                            <input type="checkbox" id="Chk1" name="Chk1" className={Styles.blind} />
                                                                            <span>&nbsp;</span>
                                                                            <em className={Styles.text}>모두</em>
                                                                        </label>
                                                                    </li>
                                                                    <li className={Styles.list_item}>
                                                                        <label className={Styles.check_inner} htmlFor="Chk2">
                                                                            <input type="checkbox" id="Chk2" name="Chk2" className={Styles.blind} />
                                                                            <span>&nbsp;</span>
                                                                            <em className={Styles.text}>발표 시간</em>
                                                                        </label>
                                                                    </li>
                                                                    <li className={Styles.list_item}>
                                                                        <label className={Styles.check_inner} htmlFor="Chk1">
                                                                            <input type="checkbox" id="Chk1" name="Chk1" className={Styles.blind} />
                                                                            <span>&nbsp;</span>
                                                                            <em className={Styles.text}>모두</em>
                                                                        </label>
                                                                    </li>
                                                                    <li className={Styles.list_item}>
                                                                        <label className={Styles.check_inner} htmlFor="Chk2">
                                                                            <input type="checkbox" id="Chk2" name="Chk2" className={Styles.blind} />
                                                                            <span>&nbsp;</span>
                                                                            <em className={Styles.text}>발표 시간</em>
                                                                        </label>
                                                                    </li>
                                                                    <li className={Styles.list_item}>
                                                                        <label className={Styles.check_inner} htmlFor="Chk1">
                                                                            <input type="checkbox" id="Chk1" name="Chk1" className={Styles.blind} />
                                                                            <span>&nbsp;</span>
                                                                            <em className={Styles.text}>모두</em>
                                                                        </label>
                                                                    </li>
                                                                    <li className={Styles.list_item}>
                                                                        <label className={Styles.check_inner} htmlFor="Chk2">
                                                                            <input type="checkbox" id="Chk2" name="Chk2" className={Styles.blind} />
                                                                            <span>&nbsp;</span>
                                                                            <em className={Styles.text}>발표 시간</em>
                                                                        </label>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <span className={Styles.arr}>
                                                                <i />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={Styles.select_group}>
                                                    <label htmlFor="ChartName" className={Styles.tit_label}>계열</label>
                                                    <div className={`${Styles.pop_selectbox} ${Styles.on}`} style={{ width: 153 }}>
                                                        {/* [D] on 클래스가 들어오면  imico_pop_select_arr_up 으로 바꿔주세요 */}
                                                        <div className={`${Styles.select_link} ${Styles.imico_pop_select_arr_down}`}>선택</div>
                                                        {/* 공통 툴팁의 화살표 기본 위치는 가운데 입니다. */}
                                                            <div className={Styles.tooltip_box} style={{ width: 153, display: 'none' }}>
                                                                <div className={Styles.tooltip_inner}>
                                                                <ul className={Styles.select_list}>
                                                                    <li className={Styles.list_item}>
                                                                        <label className={Styles.check_inner} htmlFor="Chk1">
                                                                            <input type="checkbox" id="Chk1" name="Chk1" className={Styles.blind} />
                                                                            <span>&nbsp;</span>
                                                                            <em className={Styles.text}>모두</em>
                                                                        </label>
                                                                    </li>
                                                                    <li className={Styles.list_item}>
                                                                        <label className={Styles.check_inner} htmlFor="Chk2">
                                                                            <input type="checkbox" id="Chk2" name="Chk2" className={Styles.blind} />
                                                                            <span>&nbsp;</span>
                                                                            <em className={Styles.text}>발표 시간</em>
                                                                        </label>
                                                                    </li>
                                                                    <li className={Styles.list_item}>
                                                                        <label className={Styles.check_inner} htmlFor="Chk1">
                                                                            <input type="checkbox" id="Chk1" name="Chk1" className={Styles.blind} />
                                                                            <span>&nbsp;</span>
                                                                            <em className={Styles.text}>모두</em>
                                                                        </label>
                                                                    </li>
                                                                    <li className={Styles.list_item}>
                                                                        <label className={Styles.check_inner} htmlFor="Chk2">
                                                                            <input type="checkbox" id="Chk2" name="Chk2" className={Styles.blind} />
                                                                            <span>&nbsp;</span>
                                                                            <em className={Styles.text}>발표 시간</em>
                                                                        </label>
                                                                    </li>
                                                                    <li className={Styles.list_item}>
                                                                        <label className={Styles.check_inner} htmlFor="Chk1">
                                                                            <input type="checkbox" id="Chk1" name="Chk1" className={Styles.blind} />
                                                                            <span>&nbsp;</span>
                                                                            <em className={Styles.text}>모두</em>
                                                                        </label>
                                                                    </li>
                                                                    <li className={Styles.list_item}>
                                                                        <label className={Styles.check_inner} htmlFor="Chk2">
                                                                            <input type="checkbox" id="Chk2" name="Chk2" className={Styles.blind} />
                                                                            <span>&nbsp;</span>
                                                                            <em className={Styles.text}>발표 시간</em>
                                                                        </label>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <span className={Styles.arr}>
                                                                <i />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={Styles.graph_box}>
                                            <div style={{ height: 500, backgroundColor : 'orange'}}>
                                                여기에 그래프를 넣어주세요
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </Fragment>
            )
        } else {
            return (
                <Fragment>
                    <div className={Styles.popup_wrap}>
                        <header className={Styles.pop_header}>
                            <h1>테이블 불러오기</h1>
                            <button
                                onClick={this.close}
                                className={`${Styles.btn_back} ${Styles.imbtn_pop_close}`}
                            >
                                <span className={Styles.blind}>뒤로가기</span>
                            </button>
                        </header>
                        <section className={`${Styles.pop_content} ${Styles.chart_content}`}>
                            {/* [D] 메뉴 카테고리 선택에 따라 텍스트 변경  */}
                            {/* 창 조절하기 버튼을 누르면 fold 클래스 추가 */}
                            <section className={`${Styles.aside} ${Styles.fold}`}>
                                <h2 className={Styles.blind}>테이블 추가하기</h2>
                                <div className={Styles.add_btn_box}>
                                    <a href="/" role="button">테이블 추가하기</a>
                                </div>
                                <ul className={Styles.list}>
                                    <li>
                                        새로운 테이블
                                        <a href="/" className={Styles.btn_close}>
                                            <span className={Styles.blind}>삭제</span>
                                        </a>
                                    </li>
                                    {/* 활성화 시 active 클래스 추가 */}
                                    <li className={Styles.active}>
                                        새로운 테이블
                                        <a href="/" className={Styles.btn_close}>
                                            <span className={Styles.blind}>삭제</span>
                                        </a>
                                        {/* active 클래스가 들어오면 노출 시켜 주세요 */}
                                        <div className={Styles.cell_layer} style={{ width: 120, top: 20, right: 8, display: 'none' }}>
                                            <ul>
                                                <li>
                                                    <a href="/" className={Styles.link}>복제</a>
                                                </li>
                                                <li>
                                                    <a href="/" className={Styles.link}>삭제</a>
                                                </li>
                                                <li>
                                                    <a href="/" className={Styles.link}>PC에 저장</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        새로운 테이블
                                        <a href="/" className={Styles.btn_close}>
                                            <span className={Styles.blind}>삭제</span>
                                        </a>
                                    </li>
                                </ul>
                                <a href="/" role="button" className={Styles.split_bar}>
                                    <span className={Styles.blind}>창 조절하기</span>
                                </a>
                            </section>
                            <div className={Styles.section_cont}>
                                <div className={Styles.sheet_form_box}>
                                    <input type="text" id="sheet_sjt" name="sheet_sjt" className={Styles.input} />
                                    <div className={Styles.btn_box}>
                                        <div className={Styles.tab}>
                                            <a href="/" role="button">테이블</a>
                                            <a href="/" role="button" className={Styles.active}>차트</a>
                                            <a href="/" role="button">정보</a>
                                        </div>
                                        <a href="/" role="button" className={Styles.btn_save}>저장하기</a>
                                    </div>
                                </div>
                                <div className={Styles.chart_box}>
                                    <h2 className={Styles.blind}>차트</h2>
                                    <div className={Styles.inner}>
                                        {/* 테이블 선택 */}
                                        <div className={Styles.chart_navi}>
                                            <a href="#" className={`${Styles.chart_link} ${Styles.bar} ${Styles.disabled}`}>
                                                <span className={Styles.blind}>막대형</span>
                                            </a>
                                            <a href="#" className={`${Styles.chart_link} ${Styles.line} ${Styles.disabled}`}>
                                                <span className={Styles.blind}>꺽은선형</span>
                                            </a>
                                            <a href="#" className={`${Styles.chart_link} ${Styles.pie} ${Styles.disabled}`}>
                                                <span className={Styles.blind}>원형</span>
                                            </a>
                                            <a href="#" className={`${Styles.chart_link} ${Styles.scatter} ${Styles.disabled}`}>
                                                <span className={Styles.blind}>방사형</span>
                                            </a>
                                            <div className={Styles.add_link_box}>
                                                <a href="#" className={Styles.add_link} role="button">
                                                    <span className={Styles.blind}>추가하기</span>
                                                </a>
                                                {/* 추가하기 링크가 클릭되면 display: block 처리 해주세요 */}
                                                <div className={Styles.vertical_tooltip} style={{ left: '56px', display: 'block' }}>
                                                    <ul className={Styles.graph_list}>
                                                        <li className={Styles.bar}>
                                                            <a href="#" role="button">막대</a>
                                                        </li>
                                                        <li className={Styles.line}>
                                                            <a href="#" role="button">선</a>
                                                        </li>
                                                        <li className={Styles.pie}>
                                                            <a href="#" role="button">원</a>
                                                        </li>
                                                        <li className={Styles.scatter}>
                                                            <a href="#" role="button">점</a>
                                                        </li>
                                                    </ul>
                                                    <span className={Styles.arr}><i></i></span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* 테이블 차트 입력폼 */}
                                        <div className={Styles.chart_no_result}>
                                            <p className={Styles.dsc}>
                                                차트를 먼저 추가해 주세요.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </Fragment>
            )
        }
    
    }
}
export default TableChart;
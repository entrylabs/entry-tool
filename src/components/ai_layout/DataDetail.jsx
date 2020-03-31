import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { visibleAction } from '../../actions/index';
import Styles from '../../assets/entry/scss/popup.scss';

class DataDetail extends Component {
    render() {
        const { DetailState } = this.props;
        if (DetailState == 'Table') {
            return (
                <div className={Styles.data_detail_wrap}>
                    <div className={Styles.detail_top}>
                        <a href="#" role="button" class={Styles.switch_btn}>
                            <span className={Styles.blind}>창 전환</span>
                        </a>
                        <ul className={Styles.tab_box}>
                            <li>
                                <a href="#">요약</a>
                            </li>
                            <li className={Styles.on}>
                                <a href="#">테이블</a>
                            </li>
                            <li>
                                <a href="#">차트</a>
                            </li>
                        </ul>
                        <a href="#" className={Styles.btn_save} role="button">
                            저장하기
                        </a>
                    </div>
                    <section className={`${Styles.detail_cont} ${Styles.table_state}`}>
                        <div className={Styles.content_box}>
                            <div className={Styles.cont_inner}>
                                <div className={Styles.title_box}>
                                    <strong>인천시내 학교 현황</strong>
                                </div>
                                {/* 높이값은 브라우저 높이 대비 -38px(하단 여뱍) 으로 넣어주세요 */}
                                <div className={Styles.table_box} style={{ height: 660 }}>
                                    {/* 여기 테이블은 더미 데이터 입니다. */}
                                    <table className={Styles.table}>
                                        <colgroup>
                                            <col style={{ width: 100 }} />
                                            <col style={{ width: 'auto' }} />
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th scope="col">&nbsp;</th>
                                                <th scope="col">
                                                    <div className={Styles.headtit}>개수</div>
                                                </th>
                                                <th scope="col">
                                                    <div className={Styles.headtit}>학교명</div>
                                                </th>
                                                <th scope="col">
                                                    <div className={Styles.headtit}>학생수</div>
                                                </th>
                                                <th scope="col">
                                                    <div className={Styles.headtit}>주소</div>
                                                </th>
                                                <th scope="col">
                                                    <div className={Styles.headtit}>주소2</div>
                                                </th>
                                                <th scope="col">
                                                    <div className={Styles.headtit}>주소3</div>
                                                </th>
                                                <th scope="col">
                                                    <div className={Styles.headtit}>주소4</div>
                                                </th>
                                                <th scope="col">
                                                    <div className={Styles.headtit}>주소5</div>
                                                </th>
                                                <th scope="col">
                                                    <div className={Styles.headtit}>주소6</div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">개수</th>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">평균</th>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">표준편차</th>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">최대값</th>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">75%</th>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">50%</th>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">25%</th>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">0%</th>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            );
        } else if (DetailState == 'ChartAdd') {
            return (
                <div className={Styles.data_detail_wrap}>
                    <div className={Styles.detail_top}>
                        <a href="#" role="button" class={Styles.switch_btn}>
                            <span className={Styles.blind}>창 전환</span>
                        </a>
                        <ul className={Styles.tab_box}>
                            <li>
                                <a href="#">요약</a>
                            </li>
                            <li>
                                <a href="#">테이블</a>
                            </li>
                            <li className={Styles.on}>
                                <a href="#">차트</a>
                            </li>
                        </ul>
                        <a href="#" className={Styles.btn_save} role="button">
                            저장하기
                        </a>
                    </div>
                    <section className={`${Styles.detail_cont} ${Styles.chart_state}`}>
                        <div className={Styles.content_box}>
                            <h2 className={Styles.blind}>차트</h2>
                            <div className={Styles.chart_navi}>
                                {/* 그패프는 최대 10개까지 노출 */}
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
                                <a href="#" className={`${Styles.chart_link} ${Styles.bar}`}>
                                    <span className={Styles.blind}>막대형</span>
                                </a>
                                <a href="#" className={`${Styles.chart_link} ${Styles.line}`}>
                                    <span className={Styles.blind}>꺽은선형</span>
                                </a>
                                <a href="#" className={`${Styles.chart_link} ${Styles.pie}`}>
                                    <span className={Styles.blind}>원형</span>
                                </a>
                                <a href="#" className={`${Styles.chart_link} ${Styles.scatter}`}>
                                    <span className={Styles.blind}>방사형</span>
                                </a>
                                <a href="#" className={`${Styles.chart_link} ${Styles.line}`}>
                                    <span className={Styles.blind}>꺽은선형</span>
                                </a>
                                <a href="#" className={`${Styles.chart_link} ${Styles.line}`}>
                                    <span className={Styles.blind}>꺽은선형</span>
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
                                                <a href="#" role="button">꺽은선</a>
                                            </li>
                                            <li className={Styles.pie}>
                                                <a href="#" role="button">원형</a>
                                            </li>
                                            <li className={Styles.scatter}>
                                                <a href="#" role="button">방사형</a>
                                            </li>
                                        </ul>
                                        <span className={Styles.arr}><i></i></span>
                                    </div>
                                </div>
                            </div>
                            <div className={Styles.cont_inner}>
                                <a href="#" className={Styles.chart_add_link} role="button">차트를 먼저 추가해주세요.</a>
                            </div>
                        </div>
                    </section>
                </div>
            );
        } else if (DetailState == 'Chart') {
            return (
                <div className={Styles.data_detail_wrap}>
                    <div className={Styles.detail_top}>
                        <a href="#" role="button" class={Styles.switch_btn}>
                            <span className={Styles.blind}>창 전환</span>
                        </a>
                        <ul className={Styles.tab_box}>
                            <li>
                                <a href="#">요약</a>
                            </li>
                            <li>
                                <a href="#">테이블</a>
                            </li>
                            <li className={Styles.on}>
                                <a href="#">차트</a>
                            </li>
                        </ul>
                        <a href="#" className={Styles.btn_save} role="button">
                            저장하기
                        </a>
                    </div>
                    <section className={`${Styles.detail_cont} ${Styles.chart_state}`}>
                        <div className={Styles.content_box}>
                            <h2 className={Styles.blind}>차트</h2>
                            <div className={Styles.chart_navi}>
                                {/* 그패프는 최대 10개까지 노출 */}
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
                                <a href="#" className={`${Styles.chart_link} ${Styles.bar}`}>
                                    <span className={Styles.blind}>막대형</span>
                                </a>
                                <a href="#" className={`${Styles.chart_link} ${Styles.line}`}>
                                    <span className={Styles.blind}>꺽은선형</span>
                                </a>
                                <a href="#" className={`${Styles.chart_link} ${Styles.pie}`}>
                                    <span className={Styles.blind}>원형</span>
                                </a>
                                <a href="#" className={`${Styles.chart_link} ${Styles.scatter}`}>
                                    <span className={Styles.blind}>방사형</span>
                                </a>
                                <a href="#" className={`${Styles.chart_link} ${Styles.line}`}>
                                    <span className={Styles.blind}>꺽은선형</span>
                                </a>
                                <a href="#" className={`${Styles.chart_link} ${Styles.line}`}>
                                    <span className={Styles.blind}>꺽은선형</span>
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
                                                <a href="#" role="button">꺽은선</a>
                                            </li>
                                            <li className={Styles.pie}>
                                                <a href="#" role="button">원형</a>
                                            </li>
                                            <li className={Styles.scatter}>
                                                <a href="#" role="button">방사형</a>
                                            </li>
                                        </ul>
                                        <span className={Styles.arr}><i></i></span>
                                    </div>
                                </div>
                            </div>
                            <div className={Styles.input_box}>
                                <div className={Styles.input_inner}>
                                    <input type="text" id="data1" name="data1" />
                                    {/* 인풋에 내용이 들어가면 close_btn을 활성화 해주세요 */}
                                    <a href="#" className={Styles.close_btn} role="button">
                                        <span className={Styles.blind}>입력 취소</span>
                                    </a>
                                </div>
                                <a href="#" className={Styles.chart_del}>차트 삭제</a>
                            </div>
                            <div className={Styles.cont_inner}>
                                <div className={Styles.chart_box}>
                                    <div className={Styles.legend_box}>
                                        <div className={Styles.legend_cell}>
                                            <strong className={Styles.cell_sjt}>가로축</strong>
                                            <div className={`${Styles.pop_selectbox} ${Styles.on}`}>
                                                {/* [D] on 클래스가 들어오면  imico_pop_select_arr_up 으로 바꿔주세요 */}
                                                <div className={`${Styles.select_link} ${Styles.imico_pop_select_arr_up}`}>선택</div>
                                                {/* 공통 툴팁의 화살표 기본 위치는 가운데 입니다. */}
                                                <div className={Styles.tooltip_box}>
                                                    <div className={Styles.tooltip_inner}>
                                                        <ul className={Styles.select_list}>
                                                            <li className={Styles.list_item}>
                                                                <div className={Styles.list_link}>
                                                                    일자
                                                                </div>
                                                            </li>
                                                            <li className={Styles.list_item}>
                                                                <div className={Styles.list_link}>
                                                                    발표시간
                                                                </div>
                                                            </li>
                                                            <li className={Styles.list_item}>
                                                                <div className={Styles.list_link}>
                                                                    발표시간
                                                                </div>
                                                            </li>
                                                            <li className={Styles.list_item}>
                                                                <div className={Styles.list_link}>
                                                                    발표시간
                                                                </div>
                                                            </li>
                                                            <li className={Styles.list_item}>
                                                                <div className={Styles.list_link}>
                                                                    발표시간
                                                                </div>
                                                            </li>
                                                            <li className={Styles.list_item}>
                                                                <div className={Styles.list_link}>
                                                                    발표시간발표시간발표시간발표시간발표시간발표시간발표시간
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <span className={Styles.arr}>
                                                        <i />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={Styles.legend_cell}>
                                            <strong className={Styles.cell_sjt}>세로축</strong>
                                            <div className={`${Styles.pop_selectbox} ${Styles.disabled}`}>
                                                {/* [D] on 클래스가 들어오면  imico_pop_select_arr_up 으로 바꿔주세요 */}
                                                <div className={`${Styles.select_link} ${Styles.imico_pop_select_arr_down}`}>선택</div>
                                                {/* 공통 툴팁의 화살표 기본 위치는 가운데 입니다. */}
                                                <div className={Styles.tooltip_box}>
                                                    <div className={Styles.tooltip_inner}>
                                                        <ul className={Styles.select_list}>
                                                            <li className={Styles.list_item}>
                                                                <div className={Styles.list_link}>
                                                                    일자
                                                                </div>
                                                            </li>
                                                            <li className={Styles.list_item}>
                                                                <div className={Styles.list_link}>
                                                                    발표시간
                                                                </div>
                                                            </li>
                                                            <li className={Styles.list_item}>
                                                                <div className={Styles.list_link}>
                                                                    발표시간
                                                                </div>
                                                            </li>
                                                            <li className={Styles.list_item}>
                                                                <div className={Styles.list_link}>
                                                                    발표시간
                                                                </div>
                                                            </li>
                                                            <li className={Styles.list_item}>
                                                                <div className={Styles.list_link}>
                                                                    발표시간
                                                                </div>
                                                            </li>
                                                            <li className={Styles.list_item}>
                                                                <div className={Styles.list_link}>
                                                                    발표시간발표시간발표시간발표시간발표시간발표시간발표시간
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <span className={Styles.arr}>
                                                        <i />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={Styles.legend_cell}>
                                            <strong className={Styles.cell_sjt}>표현 값</strong>
                                            <div className={Styles.pop_selectbox}>
                                                {/* [D] on 클래스가 들어오면  imico_pop_select_arr_up 으로 바꿔주세요 */}
                                                <div className={`${Styles.select_link} ${Styles.imico_pop_select_arr_down}`}>선택</div>
                                                {/* 공통 툴팁의 화살표 기본 위치는 가운데 입니다. */}
                                                <div className={Styles.tooltip_box}>
                                                    <div className={Styles.tooltip_inner}>
                                                        <ul className={Styles.select_list}>
                                                            <li className={Styles.list_item}>
                                                                <div className={Styles.list_link}>
                                                                    일자
                                                                </div>
                                                            </li>
                                                            <li className={Styles.list_item}>
                                                                <div className={Styles.list_link}>
                                                                    발표시간
                                                                </div>
                                                            </li>
                                                            <li className={Styles.list_item}>
                                                                <div className={Styles.list_link}>
                                                                    발표시간
                                                                </div>
                                                            </li>
                                                            <li className={Styles.list_item}>
                                                                <div className={Styles.list_link}>
                                                                    발표시간
                                                                </div>
                                                            </li>
                                                            <li className={Styles.list_item}>
                                                                <div className={Styles.list_link}>
                                                                    발표시간
                                                                </div>
                                                            </li>
                                                            <li className={Styles.list_item}>
                                                                <div className={Styles.list_link}>
                                                                    발표시간발표시간발표시간발표시간발표시간발표시간발표시간
                                                                </div>
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
                                    <div className={Styles.caution_dsc}>
                                        가로축을 선택해주세요.
                                    </div>
                                    {/* 
                                        <div className={Styles.chart_area}>
                                            이곳에 차트를 넣어주세요
                                        </div>
                                     */}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            );
        } else if (DetailState == 'PieChart') {
            return (
                <div className={Styles.data_detail_wrap}>
                    <div className={Styles.detail_top}>
                        <a href="#" role="button" class={Styles.switch_btn}>
                            <span className={Styles.blind}>창 전환</span>
                        </a>
                        <ul className={Styles.tab_box}>
                            <li>
                                <a href="#">요약</a>
                            </li>
                            <li>
                                <a href="#">테이블</a>
                            </li>
                            <li className={Styles.on}>
                                <a href="#">차트</a>
                            </li>
                        </ul>
                        <a href="#" className={Styles.btn_save} role="button">
                            저장하기
                        </a>
                    </div>
                    <section className={`${Styles.detail_cont} ${Styles.chart_state}`}>
                        <div className={Styles.content_box}>
                            <h2 className={Styles.blind}>차트</h2>
                            <div className={Styles.chart_navi}>
                                {/* 그패프는 최대 10개까지 노출 */}
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
                                <a href="#" className={`${Styles.chart_link} ${Styles.bar}`}>
                                    <span className={Styles.blind}>막대형</span>
                                </a>
                                <a href="#" className={`${Styles.chart_link} ${Styles.line}`}>
                                    <span className={Styles.blind}>꺽은선형</span>
                                </a>
                                <a href="#" className={`${Styles.chart_link} ${Styles.pie}`}>
                                    <span className={Styles.blind}>원형</span>
                                </a>
                                <a href="#" className={`${Styles.chart_link} ${Styles.scatter}`}>
                                    <span className={Styles.blind}>방사형</span>
                                </a>
                                <a href="#" className={`${Styles.chart_link} ${Styles.line}`}>
                                    <span className={Styles.blind}>꺽은선형</span>
                                </a>
                                <a href="#" className={`${Styles.chart_link} ${Styles.line}`}>
                                    <span className={Styles.blind}>꺽은선형</span>
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
                                                <a href="#" role="button">꺽은선</a>
                                            </li>
                                            <li className={Styles.pie}>
                                                <a href="#" role="button">원형</a>
                                            </li>
                                            <li className={Styles.scatter}>
                                                <a href="#" role="button">방사형</a>
                                            </li>
                                        </ul>
                                        <span className={Styles.arr}><i></i></span>
                                    </div>
                                </div>
                            </div>
                            <div className={Styles.input_box}>
                                <div className={Styles.input_inner}>
                                    <input type="text" id="data1" name="data1" />
                                    {/* 인풋에 내용이 들어가면 close_btn을 활성화 해주세요 */}
                                    <a href="#" className={Styles.close_btn} role="button">
                                        <span className={Styles.blind}>입력 취소</span>
                                    </a>
                                </div>
                                <a href="#" className={Styles.chart_del}>차트 삭제</a>
                            </div>
                            <div className={Styles.cont_inner}>
                                <div className={Styles.chart_box}>
                                    <div className={Styles.legend_box}>
                                        <div className={Styles.legend_cell}>
                                            <strong className={Styles.cell_sjt}>가로축</strong>
                                            <div className={Styles.pop_selectbox}>
                                                {/* [D] on 클래스가 들어오면  imico_pop_select_arr_up 으로 바꿔주세요 */}
                                                <div className={`${Styles.select_link} ${Styles.imico_pop_select_arr_down}`}>선택</div>
                                                {/* 공통 툴팁의 화살표 기본 위치는 가운데 입니다. */}
                                                <div className={Styles.tooltip_box}>
                                                    <div className={Styles.tooltip_inner}>
                                                        <ul className={Styles.select_list}>
                                                            <li className={Styles.list_item}>
                                                                <div className={Styles.list_link}>
                                                                    일자
                                                                </div>
                                                            </li>
                                                            <li className={Styles.list_item}>
                                                                <div className={Styles.list_link}>
                                                                    발표시간
                                                                </div>
                                                            </li>
                                                            <li className={Styles.list_item}>
                                                                <div className={Styles.list_link}>
                                                                    발표시간
                                                                </div>
                                                            </li>
                                                            <li className={Styles.list_item}>
                                                                <div className={Styles.list_link}>
                                                                    발표시간
                                                                </div>
                                                            </li>
                                                            <li className={Styles.list_item}>
                                                                <div className={Styles.list_link}>
                                                                    발표시간
                                                                </div>
                                                            </li>
                                                            <li className={Styles.list_item}>
                                                                <div className={Styles.list_link}>
                                                                    발표시간발표시간발표시간발표시간발표시간발표시간발표시간
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <span className={Styles.arr}>
                                                        <i />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={Styles.legend_cell}>
                                            <strong className={Styles.cell_sjt}>세로축</strong>
                                            <div className={`${Styles.pop_selectbox} ${Styles.disabled}`}>
                                                {/* [D] on 클래스가 들어오면  imico_pop_select_arr_up 으로 바꿔주세요 */}
                                                <div className={`${Styles.select_link} ${Styles.imico_pop_select_arr_down}`}>선택</div>
                                                {/* 공통 툴팁의 화살표 기본 위치는 가운데 입니다. */}
                                                <div className={Styles.tooltip_box}>
                                                    <div className={Styles.tooltip_inner}>
                                                        <ul className={Styles.select_list}>
                                                            <li className={Styles.list_item}>
                                                                <div className={Styles.list_link}>
                                                                    일자
                                                                </div>
                                                            </li>
                                                            <li className={Styles.list_item}>
                                                                <div className={Styles.list_link}>
                                                                    발표시간
                                                                </div>
                                                            </li>
                                                            <li className={Styles.list_item}>
                                                                <div className={Styles.list_link}>
                                                                    발표시간
                                                                </div>
                                                            </li>
                                                            <li className={Styles.list_item}>
                                                                <div className={Styles.list_link}>
                                                                    발표시간
                                                                </div>
                                                            </li>
                                                            <li className={Styles.list_item}>
                                                                <div className={Styles.list_link}>
                                                                    발표시간
                                                                </div>
                                                            </li>
                                                            <li className={Styles.list_item}>
                                                                <div className={Styles.list_link}>
                                                                    발표시간발표시간발표시간발표시간발표시간발표시간발표시간
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <span className={Styles.arr}>
                                                        <i />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={Styles.legend_cell}>
                                            <strong className={Styles.cell_sjt}>표현 값</strong>
                                            <div className={Styles.pop_selectbox}>
                                                {/* [D] on 클래스가 들어오면  imico_pop_select_arr_up 으로 바꿔주세요 */}
                                                <div className={`${Styles.select_link} ${Styles.imico_pop_select_arr_down}`}>선택</div>
                                                {/* 공통 툴팁의 화살표 기본 위치는 가운데 입니다. */}
                                                <div className={Styles.tooltip_box}>
                                                    <div className={Styles.tooltip_inner}>
                                                        <ul className={Styles.select_list}>
                                                            <li className={Styles.list_item}>
                                                                <div className={Styles.list_link}>
                                                                    일자
                                                                </div>
                                                            </li>
                                                            <li className={Styles.list_item}>
                                                                <div className={Styles.list_link}>
                                                                    발표시간
                                                                </div>
                                                            </li>
                                                            <li className={Styles.list_item}>
                                                                <div className={Styles.list_link}>
                                                                    발표시간
                                                                </div>
                                                            </li>
                                                            <li className={Styles.list_item}>
                                                                <div className={Styles.list_link}>
                                                                    발표시간
                                                                </div>
                                                            </li>
                                                            <li className={Styles.list_item}>
                                                                <div className={Styles.list_link}>
                                                                    발표시간
                                                                </div>
                                                            </li>
                                                            <li className={Styles.list_item}>
                                                                <div className={Styles.list_link}>
                                                                    발표시간발표시간발표시간발표시간발표시간발표시간발표시간
                                                                </div>
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
                                    <div className={Styles.chart_area}>
                                        이곳에 차트를 넣어주세요
                                        <div className={Styles.pie_legend}>
                                            <strong className={Styles.legend_sjt}>
                                                <em>종합</em>200,000
                                            </strong>
                                            <div className={Styles.scroll_box}>
                                                <ul className={Styles.list}>
                                                    <li>
                                                        {/* 범례에 맞는 컬러를 넣어주세요 */}
                                                        <span className={Styles.bg} style={{backgroundColor: '#4f80ff'}}>&nbsp;</span>
                                                        <span className={Styles.cnt}>2018.02</span>
                                                        <span className={Styles.cnt}>999</span>
                                                        <span className={Styles.cnt}>99%</span>
                                                    </li>
                                                    <li>
                                                        {/* 범례에 맞는 컬러를 넣어주세요 */}
                                                        <span className={Styles.bg} style={{backgroundColor: '#8274ff'}}>&nbsp;</span>
                                                        <span className={Styles.cnt}>2018.02</span>
                                                        <span className={Styles.cnt}>999</span>
                                                        <span className={Styles.cnt}>99%</span>
                                                    </li>
                                                    <li>
                                                        {/* 범례에 맞는 컬러를 넣어주세요 */}
                                                        <span className={Styles.bg} style={{backgroundColor: '#4f80ff'}}>&nbsp;</span>
                                                        <span className={Styles.cnt}>2018.02</span>
                                                        <span className={Styles.cnt}>999</span>
                                                        <span className={Styles.cnt}>99%</span>
                                                    </li>
                                                    <li>
                                                        {/* 범례에 맞는 컬러를 넣어주세요 */}
                                                        <span className={Styles.bg} style={{backgroundColor: '#8274ff'}}>&nbsp;</span>
                                                        <span className={Styles.cnt}>2018.02</span>
                                                        <span className={Styles.cnt}>999</span>
                                                        <span className={Styles.cnt}>99%</span>
                                                    </li>
                                                    <li>
                                                        {/* 범례에 맞는 컬러를 넣어주세요 */}
                                                        <span className={Styles.bg} style={{backgroundColor: '#4f80ff'}}>&nbsp;</span>
                                                        <span className={Styles.cnt}>2018.02</span>
                                                        <span className={Styles.cnt}>999</span>
                                                        <span className={Styles.cnt}>99%</span>
                                                    </li>
                                                    <li>
                                                        {/* 범례에 맞는 컬러를 넣어주세요 */}
                                                        <span className={Styles.bg} style={{backgroundColor: '#8274ff'}}>&nbsp;</span>
                                                        <span className={Styles.cnt}>2018.02</span>
                                                        <span className={Styles.cnt}>999</span>
                                                        <span className={Styles.cnt}>99%</span>
                                                    </li>
                                                    <li>
                                                        {/* 범례에 맞는 컬러를 넣어주세요 */}
                                                        <span className={Styles.bg} style={{backgroundColor: '#4f80ff'}}>&nbsp;</span>
                                                        <span className={Styles.cnt}>2018.02</span>
                                                        <span className={Styles.cnt}>999</span>
                                                        <span className={Styles.cnt}>99%</span>
                                                    </li>
                                                    <li>
                                                        {/* 범례에 맞는 컬러를 넣어주세요 */}
                                                        <span className={Styles.bg} style={{backgroundColor: '#8274ff'}}>&nbsp;</span>
                                                        <span className={Styles.cnt}>2018.02</span>
                                                        <span className={Styles.cnt}>999</span>
                                                        <span className={Styles.cnt}>99%</span>
                                                    </li>
                                                    <li>
                                                        {/* 범례에 맞는 컬러를 넣어주세요 */}
                                                        <span className={Styles.bg} style={{backgroundColor: '#4f80ff'}}>&nbsp;</span>
                                                        <span className={Styles.cnt}>2018.02</span>
                                                        <span className={Styles.cnt}>999</span>
                                                        <span className={Styles.cnt}>99%</span>
                                                    </li>
                                                    <li>
                                                        {/* 범례에 맞는 컬러를 넣어주세요 */}
                                                        <span className={Styles.bg} style={{backgroundColor: '#8274ff'}}>&nbsp;</span>
                                                        <span className={Styles.cnt}>2018.02</span>
                                                        <span className={Styles.cnt}>999</span>
                                                        <span className={Styles.cnt}>99%</span>
                                                    </li>
                                                    <li>
                                                        {/* 범례에 맞는 컬러를 넣어주세요 */}
                                                        <span className={Styles.bg} style={{backgroundColor: '#4f80ff'}}>&nbsp;</span>
                                                        <span className={Styles.cnt}>2018.02</span>
                                                        <span className={Styles.cnt}>999</span>
                                                        <span className={Styles.cnt}>99%</span>
                                                    </li>
                                                    <li>
                                                        {/* 범례에 맞는 컬러를 넣어주세요 */}
                                                        <span className={Styles.bg} style={{backgroundColor: '#8274ff'}}>&nbsp;</span>
                                                        <span className={Styles.cnt}>2018.02</span>
                                                        <span className={Styles.cnt}>999</span>
                                                        <span className={Styles.cnt}>99%</span>
                                                    </li>
                                                    <li>
                                                        {/* 범례에 맞는 컬러를 넣어주세요 */}
                                                        <span className={Styles.bg} style={{backgroundColor: '#4f80ff'}}>&nbsp;</span>
                                                        <span className={Styles.cnt}>2018.02</span>
                                                        <span className={Styles.cnt}>999</span>
                                                        <span className={Styles.cnt}>99%</span>
                                                    </li>
                                                    <li>
                                                        {/* 범례에 맞는 컬러를 넣어주세요 */}
                                                        <span className={Styles.bg} style={{backgroundColor: '#8274ff'}}>&nbsp;</span>
                                                        <span className={Styles.cnt}>2018.02</span>
                                                        <span className={Styles.cnt}>999</span>
                                                        <span className={Styles.cnt}>99%</span>
                                                    </li>
                                                    <li>
                                                        {/* 범례에 맞는 컬러를 넣어주세요 */}
                                                        <span className={Styles.bg} style={{backgroundColor: '#4f80ff'}}>&nbsp;</span>
                                                        <span className={Styles.cnt}>2018.02</span>
                                                        <span className={Styles.cnt}>999</span>
                                                        <span className={Styles.cnt}>99%</span>
                                                    </li>
                                                    <li>
                                                        {/* 범례에 맞는 컬러를 넣어주세요 */}
                                                        <span className={Styles.bg} style={{backgroundColor: '#8274ff'}}>&nbsp;</span>
                                                        <span className={Styles.cnt}>2018.02</span>
                                                        <span className={Styles.cnt}>999</span>
                                                        <span className={Styles.cnt}>99%</span>
                                                    </li>
                                                    <li>
                                                        {/* 범례에 맞는 컬러를 넣어주세요 */}
                                                        <span className={Styles.bg} style={{backgroundColor: '#4f80ff'}}>&nbsp;</span>
                                                        <span className={Styles.cnt}>2018.02</span>
                                                        <span className={Styles.cnt}>999</span>
                                                        <span className={Styles.cnt}>99%</span>
                                                    </li>
                                                    <li>
                                                        {/* 범례에 맞는 컬러를 넣어주세요 */}
                                                        <span className={Styles.bg} style={{backgroundColor: '#8274ff'}}>&nbsp;</span>
                                                        <span className={Styles.cnt}>2018.02</span>
                                                        <span className={Styles.cnt}>999</span>
                                                        <span className={Styles.cnt}>99%</span>
                                                    </li>
                                                    <li>
                                                        {/* 범례에 맞는 컬러를 넣어주세요 */}
                                                        <span className={Styles.bg} style={{backgroundColor: '#4f80ff'}}>&nbsp;</span>
                                                        <span className={Styles.cnt}>2018.02</span>
                                                        <span className={Styles.cnt}>999</span>
                                                        <span className={Styles.cnt}>99%</span>
                                                    </li>
                                                    <li>
                                                        {/* 범례에 맞는 컬러를 넣어주세요 */}
                                                        <span className={Styles.bg} style={{backgroundColor: '#8274ff'}}>&nbsp;</span>
                                                        <span className={Styles.cnt}>2018.02</span>
                                                        <span className={Styles.cnt}>999</span>
                                                        <span className={Styles.cnt}>99%</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            );
        } else if (DetailState == 'ScatterChart') {
            return (
                <div className={Styles.data_detail_wrap}>
                    <div className={Styles.detail_top}>
                        <a href="#" role="button" class={Styles.switch_btn}>
                            <span className={Styles.blind}>창 전환</span>
                        </a>
                        <ul className={Styles.tab_box}>
                            <li>
                                <a href="#">요약</a>
                            </li>
                            <li>
                                <a href="#">테이블</a>
                            </li>
                            <li className={Styles.on}>
                                <a href="#">차트</a>
                            </li>
                        </ul>
                        <a href="#" className={Styles.btn_save} role="button">
                            저장하기
                        </a>
                    </div>
                    <section className={`${Styles.detail_cont} ${Styles.chart_state}`}>
                        <div className={Styles.content_box}>
                            <h2 className={Styles.blind}>차트</h2>
                            <div className={Styles.chart_navi}>
                                {/* 그패프는 최대 10개까지 노출 */}
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
                                <a href="#" className={`${Styles.chart_link} ${Styles.bar}`}>
                                    <span className={Styles.blind}>막대형</span>
                                </a>
                                <a href="#" className={`${Styles.chart_link} ${Styles.line}`}>
                                    <span className={Styles.blind}>꺽은선형</span>
                                </a>
                                <a href="#" className={`${Styles.chart_link} ${Styles.pie}`}>
                                    <span className={Styles.blind}>원형</span>
                                </a>
                                <a href="#" className={`${Styles.chart_link} ${Styles.scatter}`}>
                                    <span className={Styles.blind}>방사형</span>
                                </a>
                                <a href="#" className={`${Styles.chart_link} ${Styles.line}`}>
                                    <span className={Styles.blind}>꺽은선형</span>
                                </a>
                                <a href="#" className={`${Styles.chart_link} ${Styles.line}`}>
                                    <span className={Styles.blind}>꺽은선형</span>
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
                                                <a href="#" role="button">꺽은선</a>
                                            </li>
                                            <li className={Styles.pie}>
                                                <a href="#" role="button">원형</a>
                                            </li>
                                            <li className={Styles.scatter}>
                                                <a href="#" role="button">방사형</a>
                                            </li>
                                        </ul>
                                        <span className={Styles.arr}><i></i></span>
                                    </div>
                                </div>
                            </div>
                            <div className={Styles.input_box}>
                                <div className={Styles.input_inner}>
                                    <input type="text" id="data1" name="data1" />
                                    {/* 인풋에 내용이 들어가면 close_btn을 활성화 해주세요 */}
                                    <a href="#" className={Styles.close_btn} role="button">
                                        <span className={Styles.blind}>입력 취소</span>
                                    </a>
                                </div>
                                <a href="#" className={Styles.chart_del}>차트 삭제</a>
                            </div>
                            <div className={Styles.cont_inner}>
                                <div className={Styles.chart_box}>
                                    <div className={Styles.legend_box}>
                                        <div className={Styles.legend_cell}>
                                            <strong className={Styles.cell_sjt}>가로축</strong>
                                            <div className={Styles.pop_selectbox}>
                                                {/* [D] on 클래스가 들어오면  imico_pop_select_arr_up 으로 바꿔주세요 */}
                                                <div className={`${Styles.select_link} ${Styles.imico_pop_select_arr_down}`}>선택</div>
                                                {/* 공통 툴팁의 화살표 기본 위치는 가운데 입니다. */}
                                                <div className={Styles.tooltip_box}>
                                                    <div className={Styles.tooltip_inner}>
                                                        <ul className={Styles.select_list}>
                                                            <li className={Styles.list_item}>
                                                                <div className={Styles.list_link}>
                                                                    일자
                                                                </div>
                                                            </li>
                                                            <li className={Styles.list_item}>
                                                                <div className={Styles.list_link}>
                                                                    발표시간
                                                                </div>
                                                            </li>
                                                            <li className={Styles.list_item}>
                                                                <div className={Styles.list_link}>
                                                                    발표시간
                                                                </div>
                                                            </li>
                                                            <li className={Styles.list_item}>
                                                                <div className={Styles.list_link}>
                                                                    발표시간
                                                                </div>
                                                            </li>
                                                            <li className={Styles.list_item}>
                                                                <div className={Styles.list_link}>
                                                                    발표시간
                                                                </div>
                                                            </li>
                                                            <li className={Styles.list_item}>
                                                                <div className={Styles.list_link}>
                                                                    발표시간발표시간발표시간발표시간발표시간발표시간발표시간
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <span className={Styles.arr}>
                                                        <i />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={Styles.legend_cell}>
                                            <strong className={Styles.cell_sjt}>세로축</strong>
                                            <div className={`${Styles.pop_selectbox} ${Styles.disabled}`}>
                                                {/* [D] on 클래스가 들어오면  imico_pop_select_arr_up 으로 바꿔주세요 */}
                                                <div className={`${Styles.select_link} ${Styles.imico_pop_select_arr_down}`}>선택</div>
                                                {/* 공통 툴팁의 화살표 기본 위치는 가운데 입니다. */}
                                                <div className={Styles.tooltip_box}>
                                                    <div className={Styles.tooltip_inner}>
                                                        <ul className={Styles.select_list}>
                                                            <li className={Styles.list_item}>
                                                                <div className={Styles.list_link}>
                                                                    일자
                                                                </div>
                                                            </li>
                                                            <li className={Styles.list_item}>
                                                                <div className={Styles.list_link}>
                                                                    발표시간
                                                                </div>
                                                            </li>
                                                            <li className={Styles.list_item}>
                                                                <div className={Styles.list_link}>
                                                                    발표시간
                                                                </div>
                                                            </li>
                                                            <li className={Styles.list_item}>
                                                                <div className={Styles.list_link}>
                                                                    발표시간
                                                                </div>
                                                            </li>
                                                            <li className={Styles.list_item}>
                                                                <div className={Styles.list_link}>
                                                                    발표시간
                                                                </div>
                                                            </li>
                                                            <li className={Styles.list_item}>
                                                                <div className={Styles.list_link}>
                                                                    발표시간발표시간발표시간발표시간발표시간발표시간발표시간
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <span className={Styles.arr}>
                                                        <i />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={Styles.legend_cell}>
                                            <strong className={Styles.cell_sjt}>표현 값</strong>
                                            <div className={Styles.pop_selectbox}>
                                                {/* [D] on 클래스가 들어오면  imico_pop_select_arr_up 으로 바꿔주세요 */}
                                                <div className={`${Styles.select_link} ${Styles.imico_pop_select_arr_down}`}>선택</div>
                                                {/* 공통 툴팁의 화살표 기본 위치는 가운데 입니다. */}
                                                <div className={Styles.tooltip_box}>
                                                    <div className={Styles.tooltip_inner}>
                                                        <ul className={Styles.select_list}>
                                                            <li className={Styles.list_item}>
                                                                <div className={Styles.list_link}>
                                                                    일자
                                                                </div>
                                                            </li>
                                                            <li className={Styles.list_item}>
                                                                <div className={Styles.list_link}>
                                                                    발표시간
                                                                </div>
                                                            </li>
                                                            <li className={Styles.list_item}>
                                                                <div className={Styles.list_link}>
                                                                    발표시간
                                                                </div>
                                                            </li>
                                                            <li className={Styles.list_item}>
                                                                <div className={Styles.list_link}>
                                                                    발표시간
                                                                </div>
                                                            </li>
                                                            <li className={Styles.list_item}>
                                                                <div className={Styles.list_link}>
                                                                    발표시간
                                                                </div>
                                                            </li>
                                                            <li className={Styles.list_item}>
                                                                <div className={Styles.list_link}>
                                                                    발표시간발표시간발표시간발표시간발표시간발표시간발표시간
                                                                </div>
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
                                    <div className={Styles.chart_area}>
                                        이곳에 차트를 넣어주세요
                                        <label htmlFor="switch" className={Styles.scatter_legend}>
                                            <span className={Styles.sjt}>표현 값</span>
                                            <input type="checkbox" id="switch" name="switch" className={Styles.blind} />
                                            <span className={Styles.switch_box}></span>
                                        </label>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            );
        } else if (DetailState == 'DataOff') {
            return (
                <div className={Styles.data_detail_wrap}>
                    <div className={Styles.detail_top}>
                        <a href="#" role="button" class={Styles.switch_btn}>
                            <span className={Styles.blind}>창 전환</span>
                        </a>
                        <ul className={Styles.tab_box}>
                            <li className={Styles.on}>
                                <a href="#">요약</a>
                            </li>
                            <li>
                                <a href="#">테이블</a>
                            </li>
                            <li>
                                <a href="#">차트</a>
                            </li>
                        </ul>
                        <a href="#" className={Styles.btn_save} role="button">
                            저장하기
                        </a>
                    </div>
                    <section className={Styles.detail_cont}>
                        <div className={Styles.content_box}>
                            <div className={Styles.cont_inner}>
                                <div className={Styles.title_box}>
                                    <strong>테이블</strong>
                                    <div className={Styles.q_box}>
                                        <a href="#" className={Styles.ico_q}>
                                            <span className={Styles.blind}>도움말</span>
                                        </a>
                                        {/* 도움말을 클릭하면 display: block 처리 해주세요 */}
                                        <div
                                            className={Styles.tooltip_box}
                                            style={{ display: 'none' }}
                                        >
                                            <div className={Styles.tooltip_inner}>
                                                <strong className={Styles.sjt}>
                                                    숫자가 아닌 값이 포함된 속성은 개수만 확인할 수
                                                    있습니다.
                                                </strong>
                                                <ul className={Styles.tooltip_list}>
                                                    <li>
                                                        <em className={Styles.tit}>평균</em>
                                                        <p className={Styles.dsc}>
                                                            해당 속성의 모든 값을 더한 후 속성의
                                                            개수 만큼 나눈 값
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <em className={Styles.tit}>표준 편차</em>
                                                        <p className={Styles.dsc}>
                                                            데이터가평균을 중심으로 얼마나
                                                            퍼져있는지 알려주는 값.
                                                            <br />
                                                            0에 가까울 수록 값들이 평균 근처에
                                                            집중되어 있다는 것을 의미
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <em className={Styles.tit}>
                                                            최댓값/최솟값
                                                        </em>
                                                        <p className={Styles.dsc}>
                                                            해당 속성의 가장 큰 값과 가장 작은 값
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <em className={Styles.tit}>
                                                            하위 25, 50, 75%
                                                        </em>
                                                        <p className={Styles.dsc}>
                                                            해당 속성의 최솟값을 0%, 최댓값을
                                                            <br />
                                                            100%라고 치환했을 때 각 크기에 해당하는
                                                            값
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <em className={Styles.tit}>중간값</em>
                                                        <p className={Styles.dsc}>
                                                            해당 속성의 모든 값을 크기순으로
                                                            배열했을 때<br />
                                                            전체의 중앙에 위치하는 값
                                                        </p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <span
                                                className={`${Styles.arr} ${Styles.free}`}
                                                style={{ left: '40px' }}
                                            >
                                                <i></i>
                                            </span>
                                        </div>
                                    </div>
                                    <p className={Styles.title_dsc}>인천시내 학교 현황</p>
                                </div>
                                <div className={Styles.table_box} style={{ height: 222 }}>
                                    {/* 데이터가 없을때 DataOffTable 클래스 추가 */}
                                    {/* 추가되는 셀 하나당 220px 입니다. */}
                                    <table className={`${Styles.table} ${Styles.DataOffTable}`}>
                                        <colgroup>
                                             {/* 가로 셀이 추가될때 col 요소도 같이 추가 되어야 합니다. */}
                                             <col style={{ width: 100 }} />
                                            <col style={{ width: 220 }} />
                                            <col style={{ width: 220 }} />
                                            <col style={{ width: 220 }} />
                                            <col style={{ width: 220 }} />
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th scope="col">&nbsp;</th>
                                                <th scope="col">
                                                    <div className={Styles.headtit}>개수</div>
                                                </th>
                                                <th scope="col">
                                                    <div className={Styles.headtit}>학교명</div>
                                                </th>
                                                <th scope="col">
                                                    <div className={Styles.headtit}>학생수</div>
                                                </th>
                                                <th scope="col">
                                                    <div className={Styles.headtit}>주소</div>
                                                </th>
                                            </tr>
                                        </thead>
                                    </table>
                                    <div className={Styles.data_add_box}>
                                        <a href="#">
                                            <span className={Styles.blind}>데이터 추가하기</span>
                                        </a>
                                        <p>
                                            추가된 데이터가 없습니다.<br />
                                            데이터를 입력해주세요.
                                        </p>
                                    </div>
                                </div>
                                <div className={`${Styles.title_box} ${Styles.DataOffTable}`}>
                                    <strong>차트</strong>
                                </div>
                                <div className={Styles.chart_list}>
                                    {/* {li(140px) + margin-left: 12} * n(li 갯수) 를 더한 값을 width값에 부여해주세요. */}
                                    <ul className={Styles.list}>
                                        <li>
                                            {/* 그래프가 없을때 데이터 추가하기 요소가 있어야 합니다. */}
                                            <div className={Styles.data_add_box}>
                                                <a href="#">
                                                    <span className={Styles.blind}>데이터 추가하기</span>
                                                </a>
                                                <p>
                                                    추가된 차트가 없습니다.<br />
                                                    데이터를 입력해주세요.
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            );
        } else {
            return (
                <div className={Styles.data_detail_wrap}>
                    <div className={Styles.detail_top}>
                        <a href="#" role="button" class={Styles.switch_btn}>
                            <span className={Styles.blind}>창 전환</span>
                        </a>
                        <ul className={Styles.tab_box}>
                            <li className={Styles.on}>
                                <a href="#">요약</a>
                            </li>
                            <li>
                                <a href="#">테이블</a>
                            </li>
                            <li>
                                <a href="#">차트</a>
                            </li>
                        </ul>
                        <a href="#" className={Styles.btn_save} role="button">
                            저장하기
                        </a>
                    </div>
                    <section className={Styles.detail_cont}>
                        <div className={Styles.content_box}>
                            <div className={Styles.depth_title_box}>
                                <h2 className={Styles.tit}>요약</h2>
                                <p className={Styles.tit_dsc}>
                                    2019년 한 해동안 월 단위로 나눈 각 시도별 평균 기온입니다.(℃)
                                </p>
                            </div>
                            <div className={Styles.cont_inner}>
                                <div className={Styles.title_box}>
                                    <strong>테이블</strong>
                                    <div className={Styles.q_box}>
                                        <a href="#" className={Styles.ico_q} role="button">
                                            <span className={Styles.blind}>도움말</span>
                                        </a>
                                        {/* 도움말을 클릭하면 display: block 처리 해주세요 */}
                                        <div
                                            className={Styles.tooltip_box}
                                            style={{ display: 'none' }}
                                        >
                                            <div className={Styles.tooltip_inner}>
                                                <strong className={Styles.sjt}>
                                                    숫자가 아닌 값이 포함된 속성은 개수만 확인할 수
                                                    있습니다.
                                                </strong>
                                                <ul className={Styles.tooltip_list}>
                                                    <li>
                                                        <em className={Styles.tit}>평균</em>
                                                        <p className={Styles.dsc}>
                                                            해당 속성의 모든 값을 더한 후 속성의
                                                            개수 만큼 나눈 값
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <em className={Styles.tit}>표준 편차</em>
                                                        <p className={Styles.dsc}>
                                                            데이터가평균을 중심으로 얼마나
                                                            퍼져있는지 알려주는 값.
                                                            <br />
                                                            0에 가까울 수록 값들이 평균 근처에
                                                            집중되어 있다는 것을 의미
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <em className={Styles.tit}>
                                                            최댓값/최솟값
                                                        </em>
                                                        <p className={Styles.dsc}>
                                                            해당 속성의 가장 큰 값과 가장 작은 값
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <em className={Styles.tit}>
                                                            하위 25, 50, 75%
                                                        </em>
                                                        <p className={Styles.dsc}>
                                                            해당 속성의 최솟값을 0%, 최댓값을
                                                            <br />
                                                            100%라고 치환했을 때 각 크기에 해당하는
                                                            값
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <em className={Styles.tit}>중간값</em>
                                                        <p className={Styles.dsc}>
                                                            해당 속성의 모든 값을 크기순으로
                                                            배열했을 때<br />
                                                            전체의 중앙에 위치하는 값
                                                        </p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <span
                                                className={`${Styles.arr} ${Styles.free}`}
                                                style={{ left: '40px' }}
                                            >
                                                <i></i>
                                            </span>
                                        </div>
                                    </div>
                                    <p className={Styles.title_dsc}>인천시내 학교 현황</p>
                                </div>
                                <ul className={Styles.cnt_result}>
                                    <li><em>행</em>1,000개</li>
                                    <li><em>열</em>1,000개</li>
                                    <li><em>칸</em>1,000개</li>
                                </ul>
                                <div className={Styles.table_box}>
                                    {/* 추가되는 셀 하나당 220px 입니다. */}
                                    <table className={Styles.table} style={{ width: 2300 }}>
                                        <colgroup>
                                            {/* 가로 셀이 추가될때 col 요소도 같이 추가 되어야 합니다. */}
                                            <col style={{ width: 100 }} />
                                            <col style={{ width: 220 }} />
                                            <col style={{ width: 220 }} />
                                            <col style={{ width: 220 }} />
                                            <col style={{ width: 220 }} />
                                            <col style={{ width: 220 }} />
                                            <col style={{ width: 220 }} />
                                            <col style={{ width: 220 }} />
                                            <col style={{ width: 220 }} />
                                            <col style={{ width: 220 }} />
                                            <col style={{ width: 220 }} />
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th scope="col">&nbsp;</th>
                                                <th scope="col">
                                                    <div className={Styles.headtit}>개수</div>
                                                </th>
                                                <th scope="col">
                                                    <div className={Styles.headtit}>학교명</div>
                                                </th>
                                                <th scope="col">
                                                    <div className={Styles.headtit}>학생수</div>
                                                </th>
                                                <th scope="col">
                                                    <div className={Styles.headtit}>주소</div>
                                                </th>
                                                <th scope="col">
                                                    <div className={Styles.headtit}>주소2</div>
                                                </th>
                                                <th scope="col">
                                                    <div className={Styles.headtit}>주소3</div>
                                                </th>
                                                <th scope="col">
                                                    <div className={Styles.headtit}>주소4</div>
                                                </th>
                                                <th scope="col">
                                                    <div className={Styles.headtit}>주소5</div>
                                                </th>
                                                <th scope="col">
                                                    <div className={Styles.headtit}>주소6</div>
                                                </th>
                                                <th scope="col">
                                                    <div className={Styles.headtit}>주소7</div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">개수</th>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">평균</th>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">표준편차</th>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">최대값</th>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">75%</th>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">50%</th>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">25%</th>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">0%</th>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                                <td>99</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className={Styles.title_box}>
                                    <strong>차트</strong>
                                </div>
                                <div className={Styles.chart_list} >
                                    {/* {li(140px) + margin-left: 12} * n(li 갯수) 를 더한 값을 width값에 부여해주세요. */}
                                    <ul className={Styles.list}>
                                        {/* 리스트가 선택되면 on 클래스 추가 */}
                                        <li className={Styles.on}>{/* 그래프를 넣어주세요 */}</li>
                                        <li>{/* 그래프를 넣어주세요 */}</li>
                                        <li>{/* 그래프를 넣어주세요 */}</li>
                                        <li>{/* 그래프를 넣어주세요 */}</li>
                                        <li>{/* 그래프를 넣어주세요 */}</li>
                                        <li>{/* 그래프를 넣어주세요 */}</li>
                                        <li>{/* 그래프를 넣어주세요 */}</li>
                                        <li>{/* 그래프를 넣어주세요 */}</li>
                                        <li>{/* 그래프를 넣어주세요 */}</li>
                                        <li>{/* 그래프를 넣어주세요 */}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            );
        }
    }
}
export default DataDetail;

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
                        {/* [D] 메뉴 카테고리 선택에 따라 텍스트 변경  */}
                        <h2 className={Styles.blind}>테이블</h2>
                        <div className={Styles.content_box}>
                            <div className={Styles.input_box}>
                                <div className={Styles.input_inner}>
                                    <input type="text" id="data1" name="data1" />
                                    {/* 인풋에 내용이 들어가면 close_btn을 활성화 해주세요 */}
                                    <a href="#" className={Styles.close_btn} role="button">
                                        <span className={Styles.blind}>입력 취소</span>
                                    </a>
                                </div>
                            </div>

                            <div className={Styles.cont_inner}>
                                <div className={Styles.table_box}>
                                    {/* 여기 테이블은 더미 데이터 입니다. */}
                                    <table className={Styles.table}>
                                        <colgroup>
                                            <col style={{ width: '99px' }} />
                                            <col style={{ width: 'auto' }} />
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th scope="col">&nbsp;</th>
                                                <th scope="col">
                                                    <div className={Styles.headtit}>개수</div>
                                                </th>
                                                <th scope="col">
                                                    <div className={Styles.headtit}>평균</div>
                                                </th>
                                                <th scope="col">
                                                    <div className={Styles.headtit}>표준편차</div>
                                                </th>
                                                <th scope="col">
                                                    <div className={Styles.headtit}>최대값</div>
                                                </th>
                                                <th scope="col">
                                                    <div className={Styles.headtit}>75%</div>
                                                </th>
                                                <th scope="col">
                                                    <div className={Styles.headtit}>50%</div>
                                                </th>
                                                <th scope="col">
                                                    <div className={Styles.headtit}>25%</div>
                                                </th>
                                                <th scope="col">
                                                    <div className={Styles.headtit}>최소값</div>
                                                </th>
                                                <th scope="col">
                                                    <div className={Styles.headtit}>중간값</div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">구분</th>
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
                                                <th scope="row">학교명</th>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">학생수</th>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">주소</th>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">교무실</th>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">행정실</th>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">행정실</th>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">교무실</th>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">행정실</th>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">행정실</th>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">교무실</th>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">행정실</th>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">행정실</th>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">행정실</th>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">행정실</th>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            );
        } else if (DetailState == 'ChartDataOff') {
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
                        {/* [D] 메뉴 카테고리 선택에 따라 텍스트 변경  */}
                        <h2 className={Styles.blind}>차트</h2>
                        <div className={Styles.chart_navi}>
                            {/* 차트가 추가되면 리스트 노출 시켜주세요. */}
                            <ul className={Styles.list} style={{ display: 'none' }}>
                                {/* 선택된 그래프를 제외한 그래프는 disabled 클래스 추가 */}
                                <li className={Styles.bar}>
                                    <a href="#">
                                        <span className={Styles.blind}>막대 그래프</span>
                                    </a>
                                </li>
                                <li className={`${Styles.line} ${Styles.disabled}`}>
                                    <a href="#">
                                        <span className={Styles.blind}>꺽은선 그래프</span>
                                    </a>
                                </li>
                                <li className={`${Styles.pie} ${Styles.disabled}`}>
                                    <a href="#">
                                        <span className={Styles.blind}>원형 그래프</span>
                                    </a>
                                </li>
                                <li className={`${Styles.scatter} ${Styles.disabled}`}>
                                    <a href="#">
                                        <span className={Styles.blind}>분산형 그래프</span>
                                    </a>
                                </li>
                            </ul>
                            <div className={Styles.chart_add_box}>
                                <a href="#" className={Styles.chart_add}>
                                    <span className={Styles.blind}>차트 추가하기</span>
                                </a>
                                {/* 차트 추가하기 링크 누르면 display: block 처리 해주세요. */}
                                <div
                                    className={Styles.tooltip_box}
                                    style={{ width: '240px', left: '-3px', top: '55px', display: 'block' }}
                                >
                                    <div className={Styles.tooltip_inner} style={{ padding: '16px' }}>
                                        <ul className={Styles.list}>                                            
                                            <li className={Styles.bar}>
                                                <a href="#">
                                                    막대<span className={Styles.blind}>그래프</span>
                                                </a>
                                            </li>
                                            <li className={Styles.line}>
                                                <a href="#">
                                                    꺽은선<span className={Styles.blind}>그래프</span>
                                                </a>
                                            </li>
                                            <li className={Styles.pie}>
                                                <a href="#">
                                                    원형<span className={Styles.blind}>그래프</span>
                                                </a>
                                            </li>
                                            <li className={Styles.scatter}>
                                                <a href="#">
                                                    분산형<span className={Styles.blind}>그래프</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <span
                                        className={`${Styles.arr} ${Styles.free}`}
                                        style={{ left: '6px' }}
                                    >
                                    <i />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={Styles.content_box}>
                            
                            <div className={Styles.input_box}>
                                <div className={Styles.input_inner}>
                                    <input type="text" id="data1" name="data1" />
                                    {/* 인풋에 내용이 들어가면 close_btn을 활성화 해주세요 */}
                                    <a href="#" className={Styles.close_btn} role="button">
                                        <span className={Styles.blind}>입력 취소</span>
                                    </a>
                                </div>
                                <div className={Styles.input_inner}>
                                    {/* 인풋 비활성화는 disabled 요소 추가 */}
                                    <input type="text" id="data2" name="data2" value="비활성화 컬러 테스트" disabled />
                                </div>
                                {/* 버튼 비활성화는 disabled 클래스 추가 */}
                                <a href="#" className={`${Styles.chart_del} ${Styles.disabled}`}>차트 삭제</a>
                            </div>
                            <div className={Styles.cont_inner}>
                                <div className={Styles.chart_box}>
                                    <div className={Styles.data_add_box}>
                                        <a href="#">
                                            <span className={Styles.blind}>차트 추가하기</span>
                                        </a>
                                        <p>
                                            차트를 먼저 추가해주세요.
                                        </p>
                                    </div>
                                </div>
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
                        {/* [D] 메뉴 카테고리 선택에 따라 텍스트 변경  */}
                        <h2 className={Styles.blind}>차트</h2>
                        <div className={Styles.chart_navi}>
                            {/* 차트가 추가되면 리스트 노출 시켜주세요. */}
                            <ul className={Styles.list} style={{ display: 'block' }}>
                                {/* 선택된 그래프를 제외한 그래프는 disabled 클래스 추가 */}
                                <li className={Styles.bar}>
                                    <a href="#">
                                        <span className={Styles.blind}>막대 그래프</span>
                                    </a>
                                </li>
                                <li className={`${Styles.line} ${Styles.disabled}`}>
                                    <a href="#">
                                        <span className={Styles.blind}>꺽은선 그래프</span>
                                    </a>
                                </li>
                                <li className={`${Styles.pie} ${Styles.disabled}`}>
                                    <a href="#">
                                        <span className={Styles.blind}>원형 그래프</span>
                                    </a>
                                </li>
                                <li className={`${Styles.scatter} ${Styles.disabled}`}>
                                    <a href="#">
                                        <span className={Styles.blind}>분산형 그래프</span>
                                    </a>
                                </li>
                            </ul>
                            <div className={Styles.chart_add_box}>
                                <a href="#" className={Styles.chart_add}>
                                    <span className={Styles.blind}>차트 추가하기</span>
                                </a>
                                {/* 차트 추가하기 링크 누르면 display: block 처리 해주세요. */}
                                <div
                                    className={Styles.tooltip_box}
                                    style={{ width: '240px', left: '-3px', top: '55px', display: 'none' }}
                                >
                                    <div className={Styles.tooltip_inner} style={{ padding: '16px' }}>
                                        <ul className={Styles.list}>                                            
                                            <li className={Styles.bar}>
                                                <a href="#">
                                                    막대<span className={Styles.blind}>그래프</span>
                                                </a>
                                            </li>
                                            <li className={Styles.line}>
                                                <a href="#">
                                                    꺽은선<span className={Styles.blind}>그래프</span>
                                                </a>
                                            </li>
                                            <li className={Styles.pie}>
                                                <a href="#">
                                                    원형<span className={Styles.blind}>그래프</span>
                                                </a>
                                            </li>
                                            <li className={Styles.scatter}>
                                                <a href="#">
                                                    분산형<span className={Styles.blind}>그래프</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <span
                                        className={`${Styles.arr} ${Styles.free}`}
                                        style={{ left: '6px' }}
                                    >
                                    <i />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={Styles.content_box}>
                            
                            <div className={Styles.input_box}>
                                <div className={Styles.input_inner}>
                                    <input type="text" id="data1" name="data1" />
                                    {/* 인풋에 내용이 들어가면 close_btn을 활성화 해주세요 */}
                                    <a href="#" className={Styles.close_btn} role="button">
                                        <span className={Styles.blind}>입력 취소</span>
                                    </a>
                                </div>
                                <div className={Styles.input_inner}>
                                    <input type="text" id="data2" name="data2" value="비활성화 컬러 테스트" disabled />
                                </div>
                                <a href="#" className={Styles.chart_del}>차트 삭제</a>
                            </div>
                            <div className={Styles.cont_inner}>
                                <div className={Styles.chart_box}>
                                    {/* 범례 비활성화 경우 disabled 클래스 추가 */}
                                    <div className={Styles.legend_box}>
                                        <a href="#" className={Styles.common_legend}>범례</a>
                                        {/* 범례 링크가 눌리면 display: block 처리 해주세요. */}
                                        <div className={Styles.tooltip_box} style={{ display: 'block' }}>
                                            <div className={Styles.tooltip_inner} style= {{ overflowY: 'auto', maxHeight: '235px' }}>
                                                <ul className={Styles.select_list}>
                                                    <li className={Styles.list_item}>
                                                        <div className={Styles.chk_box}>
                                                            <input type="checkbox" id="chk1" name="chk1" />
                                                            <label htmlFor="chk1">범례1</label>
                                                        </div>
                                                    </li>
                                                    <li className={Styles.list_item}>
                                                        <div className={Styles.chk_box}>
                                                            <input type="checkbox" id="chk2" name="chk2" />
                                                            <label htmlFor="chk2">범례2</label>
                                                        </div>
                                                    </li>
                                                    <li className={Styles.list_item}>
                                                        <div className={Styles.chk_box}>
                                                            <input type="checkbox" id="chk3" name="chk3" />
                                                            <label htmlFor="chk3">범례3</label>
                                                        </div>
                                                    </li>
                                                    <li className={Styles.list_item}>
                                                        <div className={Styles.chk_box}>
                                                            <input type="checkbox" id="chk4" name="chk4" />
                                                            <label htmlFor="chk4">범례4</label>
                                                        </div>
                                                    </li>
                                                    <li className={Styles.list_item}>
                                                        <div className={Styles.chk_box}>
                                                            <input type="checkbox" id="chk5" name="chk5" />
                                                            <label htmlFor="chk5">범례5</label>
                                                        </div>
                                                    </li>
                                                    <li className={Styles.list_item}>
                                                        <div className={Styles.chk_box}>
                                                            <input type="checkbox" id="chk6" name="chk6" />
                                                            <label htmlFor="chk6">범례6</label>
                                                        </div>
                                                    </li>
                                                    <li className={Styles.list_item}>
                                                        <div className={Styles.chk_box}>
                                                            <input type="checkbox" id="chk7" name="chk7" />
                                                            <label htmlFor="chk7">범례7</label>
                                                        </div>
                                                    </li>
                                                    <li className={Styles.list_item}>
                                                        <div className={Styles.chk_box}>
                                                            <input type="checkbox" id="chk8" name="chk8" />
                                                            <label htmlFor="chk8">범례5</label>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <span className={Styles.arr}>
                                                <i />
                                            </span>
                                        </div>
                                        <div className={Styles.legend_scroll}>
                                        {/* 범례 체크박스에 선택되면 활성화 시켜주세요 */}
                                            <ul className={Styles.legend_list}>
                                                <li>
                                                    {/* 그래프 색상 값을 넣어주세요. */}
                                                    <span 
                                                        className={Styles.color}
                                                        style={{ backgroundColor: '#4f80ff' }}
                                                    >&nbsp;</span>예시1
                                                </li>
                                                <li>
                                                    {/* 그래프 색상 값을 넣어주세요. */}
                                                    <span 
                                                        className={Styles.color}
                                                        style={{ backgroundColor: '#ffb500' }}
                                                    >&nbsp;</span>예시2
                                                </li>
                                                <li>
                                                    {/* 그래프 색상 값을 넣어주세요. */}
                                                    <span 
                                                        className={Styles.color}
                                                        style={{ backgroundColor: '#ffb500' }}
                                                    >&nbsp;</span>예시3
                                                </li>
                                                <li>
                                                    {/* 그래프 색상 값을 넣어주세요. */}
                                                    <span 
                                                        className={Styles.color}
                                                        style={{ backgroundColor: '#ffb500' }}
                                                    >&nbsp;</span>예시2
                                                </li>
                                                <li>
                                                    {/* 그래프 색상 값을 넣어주세요. */}
                                                    <span 
                                                        className={Styles.color}
                                                        style={{ backgroundColor: '#ffb500' }}
                                                    >&nbsp;</span>예시3
                                                </li>
                                                <li>
                                                    {/* 그래프 색상 값을 넣어주세요. */}
                                                    <span 
                                                        className={Styles.color}
                                                        style={{ backgroundColor: '#ffb500' }}
                                                    >&nbsp;</span>예시2
                                                </li>
                                                <li>
                                                    {/* 그래프 색상 값을 넣어주세요. */}
                                                    <span 
                                                        className={Styles.color}
                                                        style={{ backgroundColor: '#ffb500' }}
                                                    >&nbsp;</span>예시3
                                                </li>
                                                <li>
                                                    {/* 그래프 색상 값을 넣어주세요. */}
                                                    <span 
                                                        className={Styles.color}
                                                        style={{ backgroundColor: '#ffb500' }}
                                                    >&nbsp;</span>예시2
                                                </li>
                                                <li>
                                                    {/* 그래프 색상 값을 넣어주세요. */}
                                                    <span 
                                                        className={Styles.color}
                                                        style={{ backgroundColor: '#ffb500' }}
                                                    >&nbsp;</span>예시3
                                                </li>
                                            </ul> 
                                        </div>  
                                    </div>

                                    {/* y축 범례 비활성화 경우 disabled 클래스 추가 */}
                                    <div className={Styles.y_legend_box}>
                                        {/* 비활성화 경우 disabled 클래스 추가 */}
                                        <a href="#" className={Styles.common_legend}>세로축세로축세로축</a>
                                        {/* 세로축 링크가 눌리면 display: block 처리 해주세요. */}
                                        <div className={Styles.tooltip_box} style={{ display: 'block' }}>
                                            <div className={Styles.tooltip_inner}>
                                                <ul className={Styles.select_list}>
                                                    <li className={Styles.list_item}>
                                                        <div className={Styles.list_link}>
                                                            국어점수
                                                        </div>
                                                    </li>
                                                    <li className={Styles.list_item}>
                                                        <div className={Styles.list_link}>
                                                            수학점수
                                                        </div>
                                                    </li>
                                                    <li className={Styles.list_item}>
                                                        <div className={Styles.list_link}>
                                                            영어점수
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <span className={Styles.arr}>
                                                <i />
                                            </span>
                                        </div>
                                    </div>

                                    {/* x축 범례 비활성화 경우 disabled 클래스 추가 */}
                                    <div className={Styles.x_legend_box}>
                                        <a href="#" className={Styles.common_legend}>가로축</a>
                                        {/* 가로축 링크가 눌리면 display: block 처리 해주세요. */}
                                        <div className={`${Styles.tooltip_box} ${Styles.down}`} style={{ display: 'block' }}>
                                            <div className={Styles.tooltip_inner}>
                                                <ul className={Styles.select_list}>
                                                    <li className={Styles.list_item}>
                                                        <div className={Styles.list_link}>
                                                            이름
                                                        </div>
                                                    </li>
                                                    <li className={Styles.list_item}>
                                                        <div className={Styles.list_link}>
                                                            수학점수
                                                        </div>
                                                    </li>
                                                    <li className={Styles.list_item}>
                                                        <div className={Styles.list_link}>
                                                            영어점수
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <span className={Styles.arr}>
                                                <i />
                                            </span>
                                        </div>
                                    </div>
                                
                                    {/* 그래프 */}
                                    <div className={Styles.graph_cont} style={{ backgroundColor: 'orange' }}>
                                        그래프 영역 개발 해주실때 배경색 지워주세요.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            );
        } else if (DetailState == 'LegendOff') {
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
                        {/* [D] 메뉴 카테고리 선택에 따라 텍스트 변경  */}
                        <h2 className={Styles.blind}>차트</h2>
                        <div className={Styles.chart_navi}>
                            {/* 차트가 추가되면 리스트 노출 시켜주세요. */}
                            <ul className={Styles.list} style={{ display: 'block' }}>
                                {/* 선택된 그래프를 제외한 그래프는 disabled 클래스 추가 */}
                                <li className={Styles.bar}>
                                    <a href="#">
                                        <span className={Styles.blind}>막대 그래프</span>
                                    </a>
                                </li>
                                <li className={`${Styles.line} ${Styles.disabled}`}>
                                    <a href="#">
                                        <span className={Styles.blind}>꺽은선 그래프</span>
                                    </a>
                                </li>
                                <li className={`${Styles.pie} ${Styles.disabled}`}>
                                    <a href="#">
                                        <span className={Styles.blind}>원형 그래프</span>
                                    </a>
                                </li>
                                <li className={`${Styles.scatter} ${Styles.disabled}`}>
                                    <a href="#">
                                        <span className={Styles.blind}>분산형 그래프</span>
                                    </a>
                                </li>
                            </ul>
                            <div className={Styles.chart_add_box}>
                                <a href="#" className={Styles.chart_add}>
                                    <span className={Styles.blind}>차트 추가하기</span>
                                </a>
                                {/* 차트 추가하기 링크 누르면 display: block 처리 해주세요. */}
                                <div
                                    className={Styles.tooltip_box}
                                    style={{ width: '240px', left: '-3px', top: '55px', display: 'none' }}
                                >
                                    <div className={Styles.tooltip_inner} style={{ padding: '16px' }}>
                                        <ul className={Styles.list}>                                            
                                            <li className={Styles.bar}>
                                                <a href="#">
                                                    막대<span className={Styles.blind}>그래프</span>
                                                </a>
                                            </li>
                                            <li className={Styles.line}>
                                                <a href="#">
                                                    꺽은선<span className={Styles.blind}>그래프</span>
                                                </a>
                                            </li>
                                            <li className={Styles.pie}>
                                                <a href="#">
                                                    원형<span className={Styles.blind}>그래프</span>
                                                </a>
                                            </li>
                                            <li className={Styles.scatter}>
                                                <a href="#">
                                                    분산형<span className={Styles.blind}>그래프</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <span
                                        className={`${Styles.arr} ${Styles.free}`}
                                        style={{ left: '6px' }}
                                    >
                                    <i />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={Styles.content_box}>
                            
                            <div className={Styles.input_box}>
                                <div className={Styles.input_inner}>
                                    <input type="text" id="data1" name="data1" />
                                    {/* 인풋에 내용이 들어가면 close_btn을 활성화 해주세요 */}
                                    <a href="#" className={Styles.close_btn} role="button">
                                        <span className={Styles.blind}>입력 취소</span>
                                    </a>
                                </div>
                                <div className={Styles.input_inner}>
                                    <input type="text" id="data2" name="data2" value="비활성화 컬러 테스트" disabled />
                                </div>
                                <a href="#" className={Styles.chart_del}>차트 삭제</a>
                            </div>
                            <div className={Styles.cont_inner}>
                                <div className={Styles.chart_box}>
                                    {/* 범례 비활성화 경우 disabled 클래스 추가 */}
                                    <div className={`${Styles.legend_box} ${Styles.disabled}`}>
                                        <a href="#" className={Styles.common_legend}>범례</a>
                                        {/* 범례 링크가 눌리면 display: block 처리 해주세요. */}
                                        <div className={Styles.tooltip_box} style={{ display: 'none' }}>
                                            <div className={Styles.tooltip_inner}>
                                                <ul className={Styles.select_list}>
                                                    <li className={Styles.list_item}>
                                                        <div className={Styles.chk_box}>
                                                            <input type="checkbox" id="chk1" name="chk1" />
                                                            <label htmlFor="chk1">범례1</label>
                                                        </div>
                                                    </li>
                                                    <li className={Styles.list_item}>
                                                        <div className={Styles.chk_box}>
                                                            <input type="checkbox" id="chk2" name="chk2" />
                                                            <label htmlFor="chk2">범례2</label>
                                                        </div>
                                                    </li>
                                                    <li className={Styles.list_item}>
                                                        <div className={Styles.chk_box}>
                                                            <input type="checkbox" id="chk3" name="chk3" />
                                                            <label htmlFor="chk3">범례3</label>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <span className={Styles.arr}>
                                                <i />
                                            </span>
                                        </div>
                                        
                                        {/* 범례 체크박스에 선택되면 활성화 시켜주세요 */}
                                        <ul className={Styles.legend_list} style={{ display: 'none' }}>
                                            <li>
                                                {/* 그래프 색상 값을 넣어주세요. */}
                                                <span 
                                                    className={Styles.color}
                                                    style={{ backgroundColor: '#4f80ff' }}
                                                >&nbsp;</span>예시1
                                            </li>
                                            <li>
                                                {/* 그래프 색상 값을 넣어주세요. */}
                                                <span 
                                                    className={Styles.color}
                                                    style={{ backgroundColor: '#ffb500' }}
                                                >&nbsp;</span>예시2
                                            </li>
                                        </ul>
                                        
                                    </div>

                                    {/* y축 범례 비활성화 경우 disabled 클래스 추가 */}
                                    <div className={`${Styles.y_legend_box} ${Styles.disabled}`}>
                                        {/* 비활성화 경우 disabled 클래스 추가 */}
                                        <a href="#" className={Styles.common_legend}>세로축세로축세로축</a>
                                        {/* 세로축 링크가 눌리면 display: block 처리 해주세요. */}
                                        <div className={Styles.tooltip_box} style={{ display: 'none' }}>
                                            <div className={Styles.tooltip_inner}>
                                                <ul className={Styles.select_list}>
                                                    <li className={Styles.list_item}>
                                                        <div className={Styles.list_link}>
                                                            국어점수
                                                        </div>
                                                    </li>
                                                    <li className={Styles.list_item}>
                                                        <div className={Styles.list_link}>
                                                            수학점수
                                                        </div>
                                                    </li>
                                                    <li className={Styles.list_item}>
                                                        <div className={Styles.list_link}>
                                                            영어점수
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <span className={Styles.arr}>
                                                <i />
                                            </span>
                                        </div>
                                    </div>

                                    {/* x축 범례 비활성화 경우 disabled 클래스 추가 */}
                                    <div className={`${Styles.x_legend_box} ${Styles.disabled}`}>
                                        <a href="#" className={Styles.common_legend}>가로축</a>
                                        {/* 가로축 링크가 눌리면 display: block 처리 해주세요. */}
                                        <div className={`${Styles.tooltip_box} ${Styles.down}`} style={{ display: 'none' }}>
                                            <div className={Styles.tooltip_inner}>
                                                <ul className={Styles.select_list}>
                                                    <li className={Styles.list_item}>
                                                        <div className={Styles.list_link}>
                                                            이름
                                                        </div>
                                                    </li>
                                                    <li className={Styles.list_item}>
                                                        <div className={Styles.list_link}>
                                                            수학점수
                                                        </div>
                                                    </li>
                                                    <li className={Styles.list_item}>
                                                        <div className={Styles.list_link}>
                                                            영어점수
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <span className={Styles.arr}>
                                                <i />
                                            </span>
                                        </div>
                                    </div>
                                
                                    {/* 그래프 */}
                                    <div className={Styles.graph_cont} style={{ backgroundColor: 'orange' }}>
                                        그래프 영역 개발 해주실때 배경색 지워주세요.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            );
        } else if (DetailState == 'LegendDel') {
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
                        {/* [D] 메뉴 카테고리 선택에 따라 텍스트 변경  */}
                        <h2 className={Styles.blind}>차트</h2>
                        <div className={Styles.chart_navi}>
                            {/* 차트가 추가되면 리스트 노출 시켜주세요. */}
                            <ul className={Styles.list} style={{ display: 'block' }}>
                                {/* 선택된 그래프를 제외한 그래프는 disabled 클래스 추가 */}
                                <li className={Styles.bar}>
                                    <a href="#">
                                        <span className={Styles.blind}>막대 그래프</span>
                                    </a>
                                </li>
                                <li className={`${Styles.line} ${Styles.disabled}`}>
                                    <a href="#">
                                        <span className={Styles.blind}>꺽은선 그래프</span>
                                    </a>
                                </li>
                                <li className={`${Styles.pie} ${Styles.disabled}`}>
                                    <a href="#">
                                        <span className={Styles.blind}>원형 그래프</span>
                                    </a>
                                </li>
                                <li className={`${Styles.scatter} ${Styles.disabled}`}>
                                    <a href="#">
                                        <span className={Styles.blind}>분산형 그래프</span>
                                    </a>
                                </li>
                            </ul>
                            <div className={Styles.chart_add_box}>
                                <a href="#" className={Styles.chart_add}>
                                    <span className={Styles.blind}>차트 추가하기</span>
                                </a>
                                {/* 차트 추가하기 링크 누르면 display: block 처리 해주세요. */}
                                <div
                                    className={Styles.tooltip_box}
                                    style={{ width: '240px', left: '-3px', top: '55px', display: 'none' }}
                                >
                                    <div className={Styles.tooltip_inner} style={{ padding: '16px' }}>
                                        <ul className={Styles.list}>                                            
                                            <li className={Styles.bar}>
                                                <a href="#">
                                                    막대<span className={Styles.blind}>그래프</span>
                                                </a>
                                            </li>
                                            <li className={Styles.line}>
                                                <a href="#">
                                                    꺽은선<span className={Styles.blind}>그래프</span>
                                                </a>
                                            </li>
                                            <li className={Styles.pie}>
                                                <a href="#">
                                                    원형<span className={Styles.blind}>그래프</span>
                                                </a>
                                            </li>
                                            <li className={Styles.scatter}>
                                                <a href="#">
                                                    분산형<span className={Styles.blind}>그래프</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <span
                                        className={`${Styles.arr} ${Styles.free}`}
                                        style={{ left: '6px' }}
                                    >
                                    <i />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={Styles.content_box}>
                            
                            <div className={Styles.input_box}>
                                <div className={Styles.input_inner}>
                                    <input type="text" id="data1" name="data1" />
                                    {/* 인풋에 내용이 들어가면 close_btn을 활성화 해주세요 */}
                                    <a href="#" className={Styles.close_btn} role="button">
                                        <span className={Styles.blind}>입력 취소</span>
                                    </a>
                                </div>
                                <div className={Styles.input_inner}>
                                    <input type="text" id="data2" name="data2" value="비활성화 컬러 테스트" disabled />
                                </div>
                                <a href="#" className={Styles.chart_del}>차트 삭제</a>
                            </div>
                            <div className={Styles.cont_inner}>
                                <div className={Styles.chart_box}>
                                    {/* 범례 비활성화 경우 disabled 클래스 추가 */}
                                    <div className={`${Styles.legend_box} ${Styles.disabled}`}>
                                        <a href="#" className={Styles.common_legend}>범례</a>
                                        {/* 범례 링크가 눌리면 display: block 처리 해주세요. */}
                                        <div className={Styles.tooltip_box} style={{ display: 'none' }}>
                                            <div className={Styles.tooltip_inner}>
                                                <ul className={Styles.select_list}>
                                                    <li className={Styles.list_item}>
                                                        <div className={Styles.chk_box}>
                                                            <input type="checkbox" id="chk1" name="chk1" />
                                                            <label htmlFor="chk1">범례1</label>
                                                        </div>
                                                    </li>
                                                    <li className={Styles.list_item}>
                                                        <div className={Styles.chk_box}>
                                                            <input type="checkbox" id="chk2" name="chk2" />
                                                            <label htmlFor="chk2">범례2</label>
                                                        </div>
                                                    </li>
                                                    <li className={Styles.list_item}>
                                                        <div className={Styles.chk_box}>
                                                            <input type="checkbox" id="chk3" name="chk3" />
                                                            <label htmlFor="chk3">범례3</label>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <span className={Styles.arr}>
                                                <i />
                                            </span>
                                        </div>
                                        
                                        {/* 범례 체크박스에 선택되면 활성화 시켜주세요 */}
                                        <ul className={Styles.legend_list} style={{ display: 'none' }}>
                                            <li>
                                                {/* 그래프 색상 값을 넣어주세요. */}
                                                <span 
                                                    className={Styles.color}
                                                    style={{ backgroundColor: '#4f80ff' }}
                                                >&nbsp;</span>예시1
                                            </li>
                                            <li>
                                                {/* 그래프 색상 값을 넣어주세요. */}
                                                <span 
                                                    className={Styles.color}
                                                    style={{ backgroundColor: '#ffb500' }}
                                                >&nbsp;</span>예시2
                                            </li>
                                        </ul>
                                        
                                    </div>

                                    {/* y축 범례 비활성화 경우 disabled 클래스 추가 */}
                                    <div className={Styles.y_legend_box}>
                                        {/* 삭제 버튼일 경우 common_legend 클래스 대신 del_legend 클래스 추가 */}
                                        <span className={Styles.del_legend}>
                                            국어점수
                                            <a href="#" className={Styles.close_btn}>
                                                <span className={Styles.blind}>삭제</span>
                                            </a>
                                        </span>
                                        {/* 세로축 링크가 눌리면 display: block 처리 해주세요. */}
                                        <div className={Styles.tooltip_box} style={{ display: 'block' }}>
                                            <div className={Styles.tooltip_inner}>
                                                <ul className={Styles.select_list}>
                                                    <li className={Styles.list_item}>
                                                        <div className={Styles.list_link}>
                                                            국어점수
                                                        </div>
                                                    </li>
                                                    <li className={Styles.list_item}>
                                                        <div className={Styles.list_link}>
                                                            수학점수
                                                        </div>
                                                    </li>
                                                    <li className={Styles.list_item}>
                                                        <div className={Styles.list_link}>
                                                            영어점수
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <span className={Styles.arr}>
                                                <i />
                                            </span>
                                        </div>
                                    </div>

                                    {/* x축 범례 비활성화 경우 disabled 클래스 추가 */}
                                    <div className={`${Styles.x_legend_box} ${Styles.disabled}`}>
                                        {/* 삭제 버튼일 경우 common_legend 클래스 대신 del_legend 클래스 추가 */}
                                        <span className={Styles.del_legend}>
                                            국어점수
                                            <a href="#" className={Styles.close_btn}>
                                                <span className={Styles.blind}>삭제</span>
                                            </a>
                                        </span>
                                        {/* 가로축 링크가 눌리면 display: block 처리 해주세요. */}
                                        <div className={`${Styles.tooltip_box} ${Styles.down}`} style={{ display: 'block' }}>
                                            <div className={Styles.tooltip_inner}>
                                                <ul className={Styles.select_list}>
                                                    <li className={Styles.list_item}>
                                                        <div className={Styles.list_link}>
                                                            이름
                                                        </div>
                                                    </li>
                                                    <li className={Styles.list_item}>
                                                        <div className={Styles.list_link}>
                                                            수학점수
                                                        </div>
                                                    </li>
                                                    <li className={Styles.list_item}>
                                                        <div className={Styles.list_link}>
                                                            영어점수
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <span className={Styles.arr}>
                                                <i />
                                            </span>
                                        </div>
                                    </div>
                                
                                    {/* 그래프 */}
                                    <div className={Styles.graph_cont} style={{ backgroundColor: 'orange' }}>
                                        그래프 영역 개발 해주실때 배경색 지워주세요.
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
                        {/* [D] 메뉴 카테고리 선택에 따라 텍스트 변경  */}
                        <h2 className={Styles.blind}>요약</h2>
                        <div className={Styles.content_box}>
                            <div className={Styles.input_box}>
                                <div className={Styles.input_inner}>
                                    <input type="text" id="data1" name="data1" />
                                    {/* 인풋에 내용이 들어가면 close_btn을 활성화 해주세요 */}
                                    <a href="#" className={Styles.close_btn} role="button">
                                        <span className={Styles.blind}>입력 취소</span>
                                    </a>
                                </div>
                                <ul className={Styles.cnt_result}>
                                    <li>속성 1000개</li>
                                    <li>행 10,000행</li>
                                    <li>값 100,000개</li>
                                </ul>
                            </div>

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
                                </div>
                                <div className={Styles.table_box}>
                                    {/* 데이터가 없을때 DataOffTable 클래스 추가 */}
                                    <table className={`${Styles.table} ${Styles.DataOffTable}`} >
                                        <colgroup>
                                            <col style={{ width: '99px' }} />
                                            <col style={{ width: 'auto' }} />
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th scope="col">속성</th>
                                                <th scope="col">
                                                    <div className={Styles.headtit}>개수</div>
                                                </th>
                                                <th scope="col">
                                                    <div className={Styles.headtit}>평균</div>
                                                </th>
                                                <th scope="col">
                                                    <div className={Styles.headtit}>표준편차</div>
                                                </th>
                                                <th scope="col">
                                                    <div className={Styles.headtit}>최대값</div>
                                                </th>
                                                <th scope="col">
                                                    <div className={Styles.headtit}>75%</div>
                                                </th>
                                                <th scope="col">
                                                    <div className={Styles.headtit}>50%</div>
                                                </th>
                                                <th scope="col">
                                                    <div className={Styles.headtit}>25%</div>
                                                </th>
                                                <th scope="col">
                                                    <div className={Styles.headtit}>최소값</div>
                                                </th>
                                                <th scope="col">
                                                    <div className={Styles.headtit}>중간값</div>
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
                                <div className={Styles.title_box}>
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
                                        <li>
                                            {/* 그래프를 넣어주세요. */}
                                        </li>
                                        <li>
                                            {/* 그래프를 넣어주세요. */}
                                        </li>
                                        <li>
                                            {/* 그래프를 넣어주세요. */}
                                        </li>
                                        <li>
                                            {/* 그래프를 넣어주세요. */}
                                        </li>
                                        <li>
                                            {/* 그래프를 넣어주세요. */}
                                        </li>
                                        <li>
                                            {/* 그래프를 넣어주세요. */}
                                        </li>
                                        <li>
                                            {/* 그래프를 넣어주세요. */}
                                        </li>
                                        <li>
                                            {/* 그래프를 넣어주세요. */}
                                        </li>
                                        <li>
                                            {/* 그래프를 넣어주세요. */}
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
                        {/* [D] 메뉴 카테고리 선택에 따라 텍스트 변경  */}
                        <h2 className={Styles.blind}>요약</h2>
                        <div className={Styles.content_box}>
                            <div className={Styles.input_box}>
                                <div className={Styles.input_inner}>
                                    <input type="text" id="data1" name="data1" />
                                    {/* 인풋에 내용이 들어가면 close_btn을 활성화 해주세요 */}
                                    <a href="#" className={Styles.close_btn} role="button">
                                        <span className={Styles.blind}>입력 취소</span>
                                    </a>
                                </div>
                                <ul className={Styles.cnt_result}>
                                    <li>속성 1000개</li>
                                    <li>행 10,000행</li>
                                    <li>값 100,000개</li>
                                </ul>
                            </div>

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
                                            style={{ display: 'block' }}
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
                                </div>
                                <div className={Styles.table_box}>
                                    <table className={Styles.table}>
                                        <colgroup>
                                            <col style={{ width: '99px' }} />
                                            <col style={{ width: 'auto' }} />
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th scope="col">&nbsp;</th>
                                                <th scope="col">
                                                    <div className={Styles.headtit}>개수</div>
                                                </th>
                                                <th scope="col">
                                                    <div className={Styles.headtit}>평균</div>
                                                </th>
                                                <th scope="col">
                                                    <div className={Styles.headtit}>표준편차</div>
                                                </th>
                                                <th scope="col">
                                                    <div className={Styles.headtit}>최대값</div>
                                                </th>
                                                <th scope="col">
                                                    <div className={Styles.headtit}>75%</div>
                                                </th>
                                                <th scope="col">
                                                    <div className={Styles.headtit}>50%</div>
                                                </th>
                                                <th scope="col">
                                                    <div className={Styles.headtit}>25%</div>
                                                </th>
                                                <th scope="col">
                                                    <div className={Styles.headtit}>최소값</div>
                                                </th>
                                                <th scope="col">
                                                    <div className={Styles.headtit}>중간값</div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">구분</th>
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
                                                <th scope="row">학교명</th>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">학생수</th>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">주소</th>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">교무실</th>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">행정실</th>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">행정실</th>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
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

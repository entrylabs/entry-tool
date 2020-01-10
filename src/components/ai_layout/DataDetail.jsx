import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { visibleAction } from '../../actions/index';
import Styles from '../../assets/entry/scss/popup.scss';

class DataDetail extends Component {
    render() {
        const { DetailState } = this.props;
        if ( DetailState == 'Table') {
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
                        <a href="#" className={Styles.btn_save} role="button">저장하기</a>
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
            
            )
        } else if(DetailState == 'Chart') { 
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
                        <a href="#" className={Styles.btn_save} role="button">저장하기</a>
                    </div>
                    <section className={`${Styles.detail_cont} ${Styles.chart_state}`}>
                        {/* [D] 메뉴 카테고리 선택에 따라 텍스트 변경  */}
                        <h2 className={Styles.blind}>차트</h2>
                        <div className={Styles.chart_navi}>
                            <ul className={Styles.list}>
                                {/* 링크가 선택되면 on 클래스 추가 */}
                                <li className={`${Styles.sel1} ${Styles.on}`}>
                                    <a href="#">
                                        <span className={Styles.blind}>막대 그래프</span>
                                    </a>
                                </li>
                                <li className={Styles.sel2}>
                                    <a href="#">
                                        <span className={Styles.blind}>꺽은선 그래프</span>
                                    </a>
                                </li>
                                <li className={Styles.sel3}>
                                    <a href="#">
                                        <span className={Styles.blind}>원형 그래프</span>
                                    </a>
                                </li>
                                <li className={Styles.sel4}>
                                    <a href="#">
                                        <span className={Styles.blind}>점 그래프</span>
                                    </a>
                                </li>
                            </ul>
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
                                    <input type="text" id="data2" name="data2" />
                                    {/* 인풋에 내용이 들어가면 close_btn을 활성화 해주세요 */}
                                    <a href="#" className={Styles.close_btn} role="button">
                                        <span className={Styles.blind}>입력 취소</span>
                                    </a>
                                </div>
                            </div>
                            <div className={Styles.cont_inner}>
                                <div className={Styles.chart_box}>
                                    {/* 그래프를 넣어주세요 */}
                                </div>
                            </div>
                        </div>    
                    </section>
                </div>

            )
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
                        <a href="#" className={Styles.btn_save} role="button">저장하기</a>
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
                                    <li>
                                        속성 1000개
                                    </li>
                                    <li>
                                        행 10,000행
                                    </li>
                                    <li>
                                        값 100,000개
                                    </li>
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
                                    <div className={Styles.tooltip_box} style={{ display: 'block' }}>
                                        <div className={Styles.tooltip_inner}>
                                            <strong className={Styles.sjt}>
                                                숫자가 아닌 값이 포함된 속성은 개수만 확인할 수 있습니다.
                                            </strong>
                                            <ul className={Styles.tooltip_list}>
                                                <li>
                                                    <em className={Styles.tit}>평균</em>
                                                    <p className={Styles.dsc}>
                                                        해당 속성의 모든 값을 더한 후 속성의 개수 만큼 나눈 값
                                                    </p>
                                                </li>
                                                <li>
                                                    <em className={Styles.tit}>표준 편차</em>
                                                    <p className={Styles.dsc}>
                                                        데이터가평균을 중심으로 얼마나 퍼져있는지 알려주는 값.<br />
                                                        0에 가까울 수록 값들이 평균 근처에 집중되어 있다는 것을 의미
                                                    </p>
                                                </li>
                                                <li>
                                                    <em className={Styles.tit}>최댓값/최솟값</em>
                                                    <p className={Styles.dsc}>
                                                        해당 속성의 가장 큰 값과 가장 작은 값
                                                    </p>
                                                </li>
                                                <li>
                                                    <em className={Styles.tit}>하위 25, 50, 75%</em>
                                                    <p className={Styles.dsc}>
                                                        해당 속성의 최솟값을 0%, 최댓값을<br />
                                                        100%라고 치환했을 때 각 크기에 해당하는 값
                                                    </p>
                                                </li>
                                                <li>
                                                    <em className={Styles.tit}>중간값</em>
                                                    <p className={Styles.dsc}>
                                                        해당 속성의 모든 값을 크기순으로 배열했을 때<br />
                                                        전체의 중앙에 위치하는 값
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                        <span className={`${Styles.arr} ${Styles.free}`} style={{ left: '40px' }}><i></i></span>
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
                            <div className={Styles.chart_list}>
                                {/* {li(140px) + margin-left: 12} * n(li 갯수) 를 더한 값을 width값에 부여해주세요. */}
                                <ul className={Styles.list} style={{ width: '1476px' }}>
                                    {/* 리스트가 선택되면 on 클래스 추가 */}
                                    <li className={Styles.on}>
                                        {/* 그래프를 넣어주세요 */}
                                    </li>
                                    <li>
                                        {/* 그래프를 넣어주세요 */}
                                    </li>
                                    <li>
                                        {/* 그래프를 넣어주세요 */}
                                    </li>
                                    <li>
                                        {/* 그래프를 넣어주세요 */}
                                    </li>
                                    <li>
                                        {/* 그래프를 넣어주세요 */}
                                    </li>
                                    <li>
                                        {/* 그래프를 넣어주세요 */}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        </div>
                    </section>
                </div>

            )
        }
    }
}
export default DataDetail;
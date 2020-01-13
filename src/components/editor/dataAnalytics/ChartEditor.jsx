import React from 'react';
import Styles from '@assets/entry/scss/popup.scss';

const ChartEditor = () => (
    <div className={Styles.data_detail_wrap}>
        <div className={Styles.detail_top}>
            <a href="#" role="button" className={Styles.switch_btn}>
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
                    <div className={Styles.chart_box}>{/* 그래프를 넣어주세요 */}</div>
                </div>
            </div>
        </section>
    </div>
);

export default ChartEditor;

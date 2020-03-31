import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { visibleAction } from '../../actions/index';
import Styles from '../../assets/entry/scss/popup.scss';

class DataEmpty extends Component {
    render() {        
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
                            <div>데이터 선택</div>
                        </li>
                        <li>
                            <div>데이터 가져오기</div>
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
                <section className={Styles.pop_content}>
                    {/* [D] 메뉴 카테고리 선택에 따라 텍스트 변경  */}
                    <h2 className={Styles.blind}>분류 선택</h2>
                    <div className={Styles.section_cont}>
                        <div className={Styles.empty_box}>
                            <p className={Styles.empty_dsc}>
                                검색 결과가 없습니다.
                            </p>
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

export default DataEmpty;

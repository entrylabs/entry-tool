import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { visibleAction } from '../../actions';
import '../../assets/scss/popup.scss';
class Sample extends Component {
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
                {/* 오브젝트 선택 팝업 */}
                <div className="popup_wrap">
                    <header className="pop_header">
                        <h1>오브젝트 추가하기</h1>
                        <button onClick={this.close} className="btn_back imbtn_pop_back">
                            <span className="blind">뒤로가기</span>
                        </button>
                    </header>
                    <section className="pop_content">
                        <div className="section_navi">
                            <ul className="list">
                                <li className="on">
                                    <a href="#">오브젝트 선택</a>
                                </li>
                                <li>
                                    <a href="#">파일 올리기</a>
                                </li>
                                <li>
                                    <a href="#">그리기</a>
                                </li>
                                <li>
                                    <a href="#">글상자</a>
                                </li>
                            </ul>
                            <div className="srch_box">
                                <label htmlFor="srch">
                                    <input type="text" id="srch" name="" />
                                </label>
                                <button type="button" className="btn_srch imbtn_pop_srch">
                                    <span className="blind">검색</span>
                                </button>
                            </div>
                        </div>
                        <div className="section_cont">
                            {/* [D] 메뉴 카테고리 선택에 따라 텍스트 변경  */}
                            <h2 className="blind">오브젝트 선택</h2>
                            <ul className="menu_list">
                                {/* [D] 링크가 선택되면 li 요소에 on 클래스 추가  */}
                                <li>
                                    <a href="#">엔트리 봇</a>
                                </li>
                                <li>
                                    <a href="#">사람</a>
                                </li>
                                <li className="on">
                                    <a href="#">동물</a>
                                </li>
                                <li>
                                    <a href="#">식물</a>
                                </li>
                                <li>
                                    <a href="#">탈것</a>
                                </li>
                                <li>
                                    <a href="#">건물</a>
                                </li>
                                <li>
                                    <a href="#">음식</a>
                                </li>
                                <li>
                                    <a href="#">환경</a>
                                </li>
                                <li>
                                    <a href="#">물건</a>
                                </li>
                                <li>
                                    <a href="#">판타지</a>
                                </li>
                                <li>
                                    <a href="#">인터페이스</a>
                                </li>
                                <li>
                                    <a href="#">배경</a>
                                </li>
                            </ul>

                            <div className="cont_box">
                                {/* [D] 메뉴 카테고리 선택에 따라 텍스트 변경  */}
                                <h3 className="blind">동물</h3>
                                <div className="obj_list_box">
                                    <div className="sub_menu">
                                        <div className="menu_inner">
                                            {/* [D] 링크가 클릭되면 li 요소에 on 클래스 추가 */}
                                            <a href="#" className="on">텍스트</a>
                                            <a href="#">텍스트</a>
                                            <a href="#">땅</a>
                                            <a href="#">물</a>
                                            <a href="#">가변형 텍스트 최소값은 72px</a>
                                        </div>
                                    </div>
                                    <div className="scroll_box">
                                        <ul className="obj_list">
                                            {/* [D] 오브젝트 링크가 클릭되면 li에 on  추가 */}
                                            <li className="on">
                                                <a href="#" className="link">
                                                    <div className="thmb">
                                                        <img src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png" alt="" />
                                                    </div>
                                                    <em className="sjt">오브젝트</em>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="link">
                                                    <div className="thmb">
                                                        <img src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png" alt="" />
                                                    </div>
                                                    <em className="sjt">오브젝트</em>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="link">
                                                    <div className="thmb">
                                                        <img src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png" alt="" />
                                                    </div>
                                                    <em className="sjt">오브젝트</em>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="link">
                                                    <div className="thmb">
                                                        <img src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png" alt="" />
                                                    </div>
                                                    <em className="sjt">오브젝트</em>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="link">
                                                    <div className="thmb">
                                                        <img src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png" alt="" />
                                                    </div>
                                                    <em className="sjt">오브젝트</em>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="link">
                                                    <div className="thmb">
                                                        <img src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png" alt="" />
                                                    </div>
                                                    <em className="sjt">오브젝트 말줄임 추가 akdjalkdjakljd</em>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="link">
                                                    <div className="thmb">
                                                        <img src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png" alt="" />
                                                    </div>
                                                    <em className="sjt">오브젝트</em>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="link">
                                                    <div className="thmb">
                                                        <img src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png" alt="" />
                                                    </div>
                                                    <em className="sjt">오브젝트</em>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="link">
                                                    <div className="thmb">
                                                        <img src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png" alt="" />
                                                    </div>
                                                    <em className="sjt">오브젝트</em>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="link">
                                                    <div className="thmb">
                                                        <img src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png" alt="" />
                                                    </div>
                                                    <em className="sjt">오브젝트</em>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="link">
                                                    <div className="thmb">
                                                        <img src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png" alt="" />
                                                    </div>
                                                    <em className="sjt">오브젝트</em>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="link">
                                                    <div className="thmb">
                                                        <img src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png" alt="" />
                                                    </div>
                                                    <em className="sjt">오브젝트</em>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="link">
                                                    <div className="thmb">
                                                        <img src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png" alt="" />
                                                    </div>
                                                    <em className="sjt">오브젝트</em>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="link">
                                                    <div className="thmb">
                                                        <img src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png" alt="" />
                                                    </div>
                                                    <em className="sjt">오브젝트</em>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="cont_sel_box">
                                    <strong className="tit">전체 (99)</strong>
                                    {/* [D] li 갯수만큼 width 값 설정 li = 112px (마진 영역 포함) */}
                                    <ul className="obj_list" style={{ width: 1120 + 'px' }}>
                                        <li>
                                            <div className="thmb">
                                                <img src="https://playentry.org/uploads/03/a9/thumb/03a9a38c74774d5e6657555d1075850c.png" alt="" />
                                            </div>
                                            <em className="sjt">오브젝트</em>
                                            <a href="#" className="btn_del imbtn_pop_chk_del">
                                                <span className="blind">삭제</span>
                                            </a>
                                        </li>
                                        <li>
                                            <div className="thmb">
                                                <img src="https://playentry.org/uploads/03/a9/thumb/03a9a38c74774d5e6657555d1075850c.png" alt="" />
                                            </div>
                                            <em className="sjt">오브젝트</em>
                                            <a href="#" className="btn_del imbtn_pop_chk_del">
                                                <span className="blind">삭제</span>
                                            </a>
                                        </li>
                                        <li>
                                            <div className="thmb">
                                                <img src="https://playentry.org/uploads/a8/26/thumb/a8268fd79a48fd9b92c7b47406b95393.png" alt="" />
                                            </div>
                                            <em className="sjt">오브젝트</em>
                                            <a href="#" className="btn_del imbtn_pop_chk_del">
                                                <span className="blind">삭제</span>
                                            </a>
                                        </li>
                                        <li>
                                            <div className="thmb">
                                                <img src="https://playentry.org/uploads/03/a9/thumb/03a9a38c74774d5e6657555d1075850c.png" alt="" />
                                            </div>
                                            <em className="sjt">오브젝트</em>
                                            <a href="#" className="btn_del imbtn_pop_chk_del">
                                                <span className="blind">삭제</span>
                                            </a>
                                        </li>
                                        <li>
                                            <div className="thmb">
                                                <img src="https://playentry.org/uploads/a8/26/thumb/a8268fd79a48fd9b92c7b47406b95393.png" alt="" />
                                            </div>
                                            <em className="sjt">오브젝트</em>
                                            <a href="#" className="btn_del imbtn_pop_chk_del">
                                                <span className="blind">삭제</span>
                                            </a>
                                        </li>
                                        <li>
                                            <div className="thmb">
                                                <img src="https://playentry.org/uploads/03/a9/thumb/03a9a38c74774d5e6657555d1075850c.png" alt="" />
                                            </div>
                                            <em className="sjt">오브젝트</em>
                                            <a href="#" className="btn_del imbtn_pop_chk_del">
                                                <span className="blind">삭제</span>
                                            </a>
                                        </li>
                                        <li>
                                            <div className="thmb">
                                                <img src="https://playentry.org/uploads/a8/26/thumb/a8268fd79a48fd9b92c7b47406b95393.png" alt="" />
                                            </div>
                                            <em className="sjt">오브젝트</em>
                                            <a href="#" className="btn_del imbtn_pop_chk_del">
                                                <span className="blind">삭제</span>
                                            </a>
                                        </li>
                                        <li>
                                            <div className="thmb">
                                                <img src="https://playentry.org/uploads/03/a9/thumb/03a9a38c74774d5e6657555d1075850c.png" alt="" />
                                            </div>
                                            <em className="sjt">오브젝트</em>
                                            <a href="#" className="btn_del imbtn_pop_chk_del">
                                                <span className="blind">삭제</span>
                                            </a>
                                        </li>
                                        <li>
                                            <div className="thmb">
                                                <img src="https://playentry.org/uploads/03/a9/thumb/03a9a38c74774d5e6657555d1075850c.png" alt="" />
                                            </div>
                                            <em className="sjt">오브젝트</em>
                                            <a href="#" className="btn_del imbtn_pop_chk_del">
                                                <span className="blind">삭제</span>
                                            </a>
                                        </li>
                                        <li>
                                            <div className="thmb">
                                                <img src="https://playentry.org/uploads/a8/26/thumb/a8268fd79a48fd9b92c7b47406b95393.png" alt="" />
                                            </div>
                                            <em className="sjt">오브젝트</em>
                                            <a href="#" className="btn_del imbtn_pop_chk_del">
                                                <span className="blind">삭제</span>
                                            </a>
                                        </li>
                                    </ul>
                                    <a href="#" className="btn_prev imbtn_pop_sel_prev">
                                        <span className="blind">이전</span>
                                    </a>
                                    <a href="#" className="btn_next imbtn_pop_sel_next">
                                        <span className="blind">다음</span>
                                    </a>
                                </div>
                            </div>
                            <div className="pop_btn_box">
                                <a href="#">취소</a>
                                <a href="#" className="active">추가하기</a>
                            </div>
                        </div>
                    </section>
                </div>

                {/* 파일 올리기 팝업 */}
                <div className="popup_wrap">
                    <header className="pop_header">
                        <h1>오브젝트 추가하기</h1>
                        <button onClick={this.close} className="btn_back imbtn_pop_back">
                            <span className="blind">뒤로가기</span>
                        </button>
                    </header>
                    <section className="pop_content">
                        <div className="section_navi">
                            <ul className="list">
                                <li>
                                    <a href="#">오브젝트 선택</a>
                                </li>
                                <li className="on">
                                    <a href="#">파일 올리기</a>
                                </li>
                                <li>
                                    <a href="#">그리기</a>
                                </li>
                                <li>
                                    <a href="#">글상자</a>
                                </li>
                            </ul>
                        </div>
                        <div className="section_cont">
                            {/* [D] 메뉴 카테고리 선택에 따라 텍스트 변경  */}
                            <h2 className="blind">파일 올리기</h2>
                            <div className="cont_box">
                                <div className="file_add_list_box">
                                    <p className="caution imico_pop_caution">
                                        10MB 이하의 jpg, png, bmp 또는 eo 형식의 오브젝트를 추가할 수 있습니다.
                                    </p>
                                    <div className="scroll_box">
                                        <div className="file_add_box">
                                            <label htmlFor="inpt_file" className="upload imbtn_pop_upload">파일 올리기
                                            </label>
                                            <input type="file" name="inpt_file" id="inpt_file" />
                                        </div>
                                        <ul className="obj_list">
                                            {/* [D] 오브젝트 링크가 클릭되면 li에 on  추가 */}
                                            <li>
                                                <a href="#" className="link">
                                                    <div className="thmb">
                                                        <img src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png" alt="" />
                                                    </div>
                                                    <em className="sjt">오브젝트</em>
                                                </a>
                                            </li>
                                            <li className="on">
                                                <a href="#" className="link">
                                                    <div className="thmb">
                                                        <img src="https://media.kappamoto.com/AK-Moto/foto/BMW_F700GS%20(13-16)_lato_K.jpg" alt="" />
                                                    </div>
                                                    <em className="sjt">오브젝트</em>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="link">
                                                    <div className="thmb">
                                                        <img src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png" alt="" />
                                                    </div>
                                                    <em className="sjt">오브젝트</em>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="link">
                                                    <div className="thmb">
                                                        <img src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png" alt="" />
                                                    </div>
                                                    <em className="sjt">오브젝트 말줄임 추가 akdjalkdjakljd</em>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="link">
                                                    <div className="thmb">
                                                        <img src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png" alt="" />
                                                    </div>
                                                    <em className="sjt">오브젝트</em>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="link">
                                                    <div className="thmb">
                                                        <img src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png" alt="" />
                                                    </div>
                                                    <em className="sjt">오브젝트</em>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="link">
                                                    <div className="thmb">
                                                        <img src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png" alt="" />
                                                    </div>
                                                    <em className="sjt">오브젝트</em>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="link">
                                                    <div className="thmb">
                                                        <img src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png" alt="" />
                                                    </div>
                                                    <em className="sjt">오브젝트</em>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="link">
                                                    <div className="thmb">
                                                        <img src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png" alt="" />
                                                    </div>
                                                    <em className="sjt">오브젝트</em>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="link">
                                                    <div className="thmb">
                                                        <img src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png" alt="" />
                                                    </div>
                                                    <em className="sjt">오브젝트</em>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="link">
                                                    <div className="thmb">
                                                        <img src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png" alt="" />
                                                    </div>
                                                    <em className="sjt">오브젝트</em>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="link">
                                                    <div className="thmb">
                                                        <img src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png" alt="" />
                                                    </div>
                                                    <em className="sjt">오브젝트</em>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="link">
                                                    <div className="thmb">
                                                        <img src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png" alt="" />
                                                    </div>
                                                    <em className="sjt">오브젝트</em>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="link">
                                                    <div className="thmb">
                                                        <img src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png" alt="" />
                                                    </div>
                                                    <em className="sjt">오브젝트</em>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="link">
                                                    <div className="thmb">
                                                        <img src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png" alt="" />
                                                    </div>
                                                    <em className="sjt">오브젝트</em>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="link">
                                                    <div className="thmb">
                                                        <img src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png" alt="" />
                                                    </div>
                                                    <em className="sjt">오브젝트</em>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="img_caution_box">
                                        <div className="inner">
                                            <span className="thmb">
                                                <img src="https://media.kappamoto.com/AK-Moto/foto/BMW_F700GS%20(13-16)_lato_K.jpg" alt="" />
                                            </span>
                                            <div className="dsc_box">
                                                <strong>
                                                    아래와 같은 그림은 이용약관 및 관련 법률에 의해 제재를 받으실 수 있습니다.
                                                </strong>
                                                <p className="dsc">
                                                    폭력적이고 잔인한 그림<br />
                                                    선정적인 신체 노출 그림<br />
                                                    불쾌감을 주거나 혐오감을 일으키는 그림
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pop_btn_box">
                                <a href="#">취소</a>
                                <a href="#" className="active">추가하기</a>
                            </div>
                        </div>
                    </section>
                </div>

                {/* 그리기 팝업 */}
                <div className="popup_wrap">
                    <header className="pop_header">
                        <h1>오브젝트 추가하기</h1>
                        <button onClick={this.close} className="btn_back imbtn_pop_back">
                            <span className="blind">뒤로가기</span>
                        </button>
                    </header>
                    <section className="pop_content">
                        <div className="section_navi">
                            <ul className="list">
                                <li>
                                    <a href="#">오브젝트 선택</a>
                                </li>
                                <li>
                                    <a href="#">파일 올리기</a>
                                </li>
                                <li className="on">
                                    <a href="#">그리기</a>
                                </li>
                                <li>
                                    <a href="#">글상자</a>
                                </li>
                            </ul>
                        </div>
                        <div className="section_cont">
                            {/* [D] 메뉴 카테고리 선택에 따라 텍스트 변경  */}
                            <h2 className="blind">그리기</h2>
                            <div className="cont_box">
                                <div className="draw_box">
                                    <div className="thmb">
                                        <img src="https://media.kappamoto.com/AK-Moto/foto/BMW_F700GS%20(13-16)_lato_K.jpg" alt="" />
                                    </div>
                                    <p className="draw_dsc">
                                        그림을 그려 오브젝트로 저장할 수 있습니다.<br />
                                        그리기 화면으로 이동하시겠습니까?
                                    </p>
                                    <div className="pop_btn_box">
                                        <a href="#" className="active">이동하기</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* 짧은 글상자 팝업 */}
                <div className="popup_wrap">
                    <header className="pop_header">
                        <h1>오브젝트 추가하기</h1>
                        <button onClick={this.close} className="btn_back imbtn_pop_back">
                            <span className="blind">뒤로가기</span>
                        </button>
                    </header>
                    <section className="pop_content">
                        <div className="section_navi">
                            <ul className="list">
                                <li>
                                    <a href="#">오브젝트 선택</a>
                                </li>
                                <li>
                                    <a href="#">파일 올리기</a>
                                </li>
                                <li>
                                    <a href="#">그리기</a>
                                </li>
                                <li className="on">
                                    <a href="#">글상자</a>
                                </li>
                            </ul>
                        </div>
                        <div className="section_cont">
                            {/* [D] 메뉴 카테고리 선택에 따라 텍스트 변경  */}
                            <h2 className="blind">글상자</h2>
                            <div className="cont_box">
                                <div className="write_box">
                                    <div className="write_set">
                                        <div className="select_box">
                                            <a href="#" className="select imico_pop_select_arr" title="글꼴">
                                                NanumGothicOTF
                                            </a>
                                            <div className="layer_box">
                                                <ul className="list">
                                                    <li>
                                                        <a href="#" className="list_lnk">
                                                            Gothic
                                                        </a>
                                                        <a href="#" className="list_lnk">
                                                            Gothic
                                                        </a>
                                                        <a href="#" className="list_lnk">
                                                            Gothic
                                                        </a>
                                                        <a href="#" className="list_lnk">
                                                            Gothic
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="font_style_box">
                                            {/* 링크가 클릭되면 on 클래스 토글 */}
                                            <a href="#" className="imbtn_pop_font_bold on" title="굵게">
                                                <span className="blind">글자 굵게</span>
                                            </a>
                                            <a href="#" className="imbtn_pop_font_underline" title="밑줄">
                                                <span className="blind">글자 밑줄</span>
                                            </a>
                                            <a href="#" className="imbtn_pop_font_italic" title="기울임">
                                                <span className="blind">글자 기울기</span>
                                            </a>
                                            <a href="#" className="imbtn_pop_font_through" title="취소선">
                                                <span className="blind">글자 취소선</span>
                                            </a>
                                            <a href="#" className="imbtn_pop_font_color" title="글자색">
                                                <span className="blind">글자 색</span>
                                            </a>
                                            <a href="#" className="imbtn_pop_font_paint" title="배경색">
                                                <span className="blind">글자 배경색</span>
                                            </a>
                                        </div>
                                        <div className="write_type_box">
                                            {/* 링크가 클릭되면 on 클래스 토글 */}
                                            <a href="#" className="on">한줄쓰기</a>
                                            <a href="#">여러 줄 쓰기</a>
                                        </div>
                                    </div>
                                    <div className="input_box">
                                        <div className="input_inner">
                                            {/* input에 포커스가 가거나 글자가 들어가면 label을 display: none 처리 해주세요 */}
                                            <label htmlFor="inpt">
                                                글상자의 내용을 입력하세요.
                                            </label>
                                            <input type="text" id="inpt" name="inpt" />
                                        </div>
                                        <ul className="list">
                                            <li>
                                                내용을 한 줄로만 작성할 수 있습니다.
                                            </li>
                                            <li>
                                                새로운 글자가 추가되면 글상자의 좌우 길이가 길어집니다.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="pop_btn_box">
                                <a href="#">취소</a>
                                <a href="#" className="active">추가하기</a>
                            </div>
                        </div>
                    </section>
                </div>

                {/* 여러줄 글상자 팝업 */}
                <div className="popup_wrap">
                    <header className="pop_header">
                        <h1>오브젝트 추가하기</h1>
                        <button onClick={this.close} className="btn_back imbtn_pop_back">
                            <span className="blind">뒤로가기</span>
                        </button>
                    </header>
                    <section className="pop_content">
                        <div className="section_navi">
                            <ul className="list">
                                <li>
                                    <a href="#">오브젝트 선택</a>
                                </li>
                                <li>
                                    <a href="#">파일 올리기</a>
                                </li>
                                <li>
                                    <a href="#">그리기</a>
                                </li>
                                <li className="on">
                                    <a href="#">글상자</a>
                                </li>
                            </ul>
                        </div>
                        <div className="section_cont">
                            {/* [D] 메뉴 카테고리 선택에 따라 텍스트 변경  */}
                            <h2 className="blind">글상자</h2>
                            <div className="cont_box">
                                <div className="write_box">
                                    <div className="write_set">
                                        <div className="select_box">
                                            <a href="#" className="select imico_pop_select_arr" title="글꼴">
                                                NanumGothicOTF
                                            </a>
                                            <div className="layer_box">
                                                <ul className="list">
                                                    <li>
                                                        <a href="#" className="list_lnk">
                                                            Gothic
                                                        </a>
                                                        <a href="#" className="list_lnk">
                                                            Gothic
                                                        </a>
                                                        <a href="#" className="list_lnk">
                                                            Gothic
                                                        </a>
                                                        <a href="#" className="list_lnk">
                                                            Gothic
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="font_style_box">
                                            {/* 링크가 클릭되면 on 클래스 토글 */}
                                            <a href="#" className="imbtn_pop_font_bold on" title="굵게">
                                                <span className="blind">글자 굵게</span>
                                            </a>
                                            <a href="#" className="imbtn_pop_font_underline" title="밑줄">
                                                <span className="blind">글자 밑줄</span>
                                            </a>
                                            <a href="#" className="imbtn_pop_font_italic" title="기울임">
                                                <span className="blind">글자 기울기</span>
                                            </a>
                                            <a href="#" className="imbtn_pop_font_through" title="취소선">
                                                <span className="blind">글자 취소선</span>
                                            </a>
                                            <a href="#" className="imbtn_pop_font_color" title="글자색">
                                                <span className="blind">글자 색</span>
                                            </a>
                                            <a href="#" className="imbtn_pop_font_paint" title="배경색">
                                                <span className="blind">글자 배경색</span>
                                            </a>
                                        </div>
                                        <div className="write_type_box">
                                            {/* 링크가 클릭되면 on 클래스 토글 */}
                                            <a href="#">한줄쓰기</a>
                                            <a href="#" className="on">여러 줄 쓰기</a>
                                        </div>
                                    </div>
                                    <div className="input_box">
                                        <div className="input_inner" style={{ height: 228 + 'px' }}>
                                            {/* input에 포커스가 가거나 글자가 들어가면 label을 display: none 처리 해주세요 */}
                                            <label htmlFor="textarea">
                                                글상자의 내용을 입력하세요.
                                            </label>
                                            <textarea name="textarea" id="textarea" cols="30" rows="10"></textarea>
                                        </div>
                                        <ul className="list">
                                            <li>
                                                내용 작성 시 엔터키로 줄바꿈을 할 수 있습니다.
                                            </li>
                                            <li>
                                                글상자의 크기가 글자가 쓰일 수 있는 영역을 결정 합니다.
                                            </li>
                                            <li>
                                                새로운 글자 추가 시 문장의 길이가 글상자의 기로 영역을 넘어가면 자동으로 줄이 바뀝니다.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="pop_btn_box">
                                <a href="#">취소</a>
                                <a href="#" className="active">추가하기</a>
                            </div>
                        </div>
                    </section>
                </div>

                {/* 확장 블록 불러오기 */}
                <div className="popup_wrap">
                    <header className="pop_header">
                        <h1>오브젝트 추가하기</h1>
                        <button onClick={this.close} className="btn_back imbtn_pop_back">
                            <span className="blind">뒤로가기</span>
                        </button>
                    </header>
                    <section className="pop_content">
                        <div className="section_cont">
                            {/* [D] 메뉴 카테고리 선택에 따라 텍스트 변경  */}
                            <h2 className="blind">확장 블록 불러오기 리스트</h2>
                            <div className="cont_box">
                                <div className="extend_block">
                                    <div className="scroll_box">
                                        <ul className="list">
                                            {/* [D] 링크가 선택되면 li 요소에 on 클래스 추가  */}
                                            <li className="on">
                                                <a href="#" className="link">
                                                    <div className="thmb" style={{ backgroundImage: "url('https://media.kappamoto.com/AK-Moto/foto/BMW_F700GS%20(13-16)_lato_K.jpg')" }}>&nbsp;</div>
                                                    <div className="inner_box">
                                                        <strong className="sjt">날씨</strong>
                                                        <p className="dsc">
                                                            버스번호, 노선별 경유 정류소,<br />
                                                            첫차/막차 시간 등 시내버스 노선과<br />
                                                            관련된 블록들의 모음
                                                        </p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="link">
                                                    <div className="thmb">&nbsp;</div>
                                                    <div className="inner_box">
                                                        <strong className="sjt">날씨</strong>
                                                        <p className="dsc">
                                                            버스번호, 노선별 경유 정류소,<br />
                                                            첫차/막차 시간 등 시내버스 노선과<br />
                                                            관련된 블록들의 모음 그
                                                        </p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="link">
                                                    <div className="thmb" style={{ backgroundImage: "url('https://media.kappamoto.com/AK-Moto/foto/BMW_F700GS%20(13-16)_lato_K.jpg')" }}>&nbsp;</div>
                                                    <div className="inner_box">
                                                        <strong className="sjt">날씨</strong>
                                                        <p className="dsc">
                                                            버스번호, 노선별 경유 정류소,<br />
                                                            첫차/막차 시간 등 시내버스 노선과<br />
                                                            관련된 블록들의 모음
                                                        </p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="link">
                                                    <div className="thmb" style={{ backgroundImage: "url('https://media.kappamoto.com/AK-Moto/foto/BMW_F700GS%20(13-16)_lato_K.jpg')" }}>&nbsp;</div>
                                                    <div className="inner_box">
                                                        <strong className="sjt">날씨</strong>
                                                        <p className="dsc">
                                                            버스번호, 노선별 경유 정류소,<br />
                                                            첫차/막차 시간 등 시내버스 노선과<br />
                                                            관련된 블록들의 모음
                                                        </p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="link">
                                                    <div className="thmb" style={{ backgroundImage: "url('https://media.kappamoto.com/AK-Moto/foto/BMW_F700GS%20(13-16)_lato_K.jpg')" }}>&nbsp;</div>
                                                    <div className="inner_box">
                                                        <strong className="sjt">날씨</strong>
                                                        <p className="dsc">
                                                            버스번호, 노선별 경유 정류소,<br />
                                                            첫차/막차 시간 등 시내버스 노선과<br />
                                                            관련된 블록들의 모음관련된 블록들의 모음관련된 블록들의 모음관련된 블록들의 모음관련된 블록들의 모음관련된 블록들의 모음
                                                        </p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="link">
                                                    <div className="thmb">&nbsp;</div>
                                                    <div className="inner_box">
                                                        <strong className="sjt">날씨</strong>
                                                        <p className="dsc">
                                                            버스번호, 노선별 경유 정류소,<br />
                                                            첫차/막차 시간 등 시내버스 노선과<br />
                                                            관련된 블록들의 모음 그
                                                        </p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="link">
                                                    <div className="thmb" style={{ backgroundImage: "url('https://media.kappamoto.com/AK-Moto/foto/BMW_F700GS%20(13-16)_lato_K.jpg')" }}>&nbsp;</div>
                                                    <div className="inner_box">
                                                        <strong className="sjt">날씨</strong>
                                                        <p className="dsc">
                                                            버스번호, 노선별 경유 정류소,<br />
                                                            첫차/막차 시간 등 시내버스 노선과<br />
                                                            관련된 블록들의 모음
                                                        </p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="link">
                                                    <div className="thmb">&nbsp;</div>
                                                    <div className="inner_box">
                                                        <strong className="sjt">날씨</strong>
                                                        <p className="dsc">
                                                            버스번호, 노선별 경유 정류소,<br />
                                                            첫차/막차 시간 등 시내버스 노선과<br />
                                                            관련된 블록들의 모음 그
                                                        </p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="link">
                                                    <div className="thmb" style={{ backgroundImage: "url('https://media.kappamoto.com/AK-Moto/foto/BMW_F700GS%20(13-16)_lato_K.jpg')" }}>&nbsp;</div>
                                                    <div className="inner_box">
                                                        <strong className="sjt">날씨</strong>
                                                        <p className="dsc">
                                                            버스번호, 노선별 경유 정류소,<br />
                                                            첫차/막차 시간 등 시내버스 노선과<br />
                                                            관련된 블록들의 모음
                                                        </p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="link">
                                                    <div className="thmb" style={{ backgroundImage: "url('https://media.kappamoto.com/AK-Moto/foto/BMW_F700GS%20(13-16)_lato_K.jpg')" }}>&nbsp;</div>
                                                    <div className="inner_box">
                                                        <strong className="sjt">날씨</strong>
                                                        <p className="dsc">
                                                            버스번호, 노선별 경유 정류소,<br />
                                                            첫차/막차 시간 등 시내버스 노선과<br />
                                                            관련된 블록들의 모음
                                                        </p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="link">
                                                    <div className="thmb" style={{ backgroundImage: "url('https://media.kappamoto.com/AK-Moto/foto/BMW_F700GS%20(13-16)_lato_K.jpg')" }}>&nbsp;</div>
                                                    <div className="inner_box">
                                                        <strong className="sjt">날씨</strong>
                                                        <p className="dsc">
                                                            버스번호, 노선별 경유 정류소,<br />
                                                            첫차/막차 시간 등 시내버스 노선과<br />
                                                            관련된 블록들의 모음관련된 블록들의 모음관련된 블록들의 모음관련된 블록들의 모음관련된 블록들의 모음관련된 블록들의 모음
                                                        </p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="link">
                                                    <div className="thmb">&nbsp;</div>
                                                    <div className="inner_box">
                                                        <strong className="sjt">날씨</strong>
                                                        <p className="dsc">
                                                            버스번호, 노선별 경유 정류소,<br />
                                                            첫차/막차 시간 등 시내버스 노선과<br />
                                                            관련된 블록들의 모음 그
                                                        </p>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="pop_btn_box">
                                <a href="#">취소</a>
                                <a href="#" className="active">추가하기</a>
                            </div>
                        </div>
                    </section>
                </div>

                {/* 소리 선택 팝업 */}
                <div className="popup_wrap">
                    <header className="pop_header">
                        <h1>소리 추가하기</h1>
                        <button onClick={this.close} className="btn_back imbtn_pop_back">
                            <span className="blind">뒤로가기</span>
                        </button>
                    </header>
                    <section className="pop_content">
                        <div className="section_navi">
                            <ul className="list">
                                <li className="on">
                                    <a href="#">소리 선택</a>
                                </li>
                                <li>
                                    <a href="#">파일 올리기</a>
                                </li>
                            </ul>
                            <div className="srch_box">
                                <label htmlFor="srch">
                                    <input type="text" id="srch" name="" />
                                </label>
                                <button type="button" className="btn_srch imbtn_pop_srch">
                                    <span className="blind">검색</span>
                                </button>
                            </div>
                        </div>
                        <div className="section_cont">
                            {/* [D] 메뉴 카테고리 선택에 따라 텍스트 변경  */}
                            <h2 className="blind">소리 선택</h2>
                            <ul className="menu_list">
                                {/* [D] 링크가 선택되면 li 요소에 on 클래스 추가  */}
                                <li>
                                    <a href="#">사람</a>
                                </li>
                                <li>
                                    <a href="#">자연</a>
                                </li>
                                <li className="on">
                                    <a href="#">사물</a>
                                </li>
                                <li>
                                    <a href="#">판타지</a>
                                </li>
                                <li>
                                    <a href="#">악기</a>
                                </li>
                            </ul>
                            <div className="cont_box">
                                {/* [D] 메뉴 카테고리 선택에 따라 텍스트 변경  */}
                                <h3 className="blind">사물</h3>
                                <div className="sound_list_box">
                                    <div className="sub_menu">
                                        <div className="menu_inner">
                                            {/* [D] 링크가 클릭되면 li 요소에 on 클래스 추가 */}
                                            <a href="#" className="on">텍스트</a>
                                            <a href="#">텍스트</a>
                                            <a href="#">땅</a>
                                            <a href="#">물</a>
                                            <a href="#">가변형 텍스트 최소값은 72px</a>
                                        </div>
                                    </div>
                                    <div className="scroll_box">
                                        <ul className="obj_list">
                                            {/* [D] 오브젝트 링크가 클릭되면 li에 on  추가 */}
                                            <li className="on">
                                                <a href="#" className="link">
                                                    <div className="thmb imico_pop_sound_thmb">&nbsp;</div>
                                                    <em className="sjt">소리명</em>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="link">
                                                    <div className="thmb imico_pop_sound_thmb">&nbsp;</div>
                                                    <em className="sjt">소리명</em>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="link">
                                                    <div className="thmb imico_pop_sound_thmb">&nbsp;</div>
                                                    <em className="sjt">소리명</em>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="link">
                                                    <div className="thmb imico_pop_sound_thmb">&nbsp;</div>
                                                    <em className="sjt">소리명</em>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="link">
                                                    <div className="thmb imico_pop_sound_thmb">&nbsp;</div>
                                                    <em className="sjt">소리명</em>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="link">
                                                    <div className="thmb imico_pop_sound_thmb">&nbsp;</div>
                                                    <em className="sjt">소리명</em>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="link">
                                                    <div className="thmb imico_pop_sound_thmb">&nbsp;</div>
                                                    <em className="sjt">소리명</em>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="link">
                                                    <div className="thmb imico_pop_sound_thmb">&nbsp;</div>
                                                    <em className="sjt">소리명</em>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="link">
                                                    <div className="thmb imico_pop_sound_thmb">&nbsp;</div>
                                                    <em className="sjt">소리명</em>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="link">
                                                    <div className="thmb imico_pop_sound_thmb">&nbsp;</div>
                                                    <em className="sjt">소리명</em>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="link">
                                                    <div className="thmb imico_pop_sound_thmb">&nbsp;</div>
                                                    <em className="sjt">소리명</em>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="link">
                                                    <div className="thmb imico_pop_sound_thmb">&nbsp;</div>
                                                    <em className="sjt">소리명</em>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="link">
                                                    <div className="thmb imico_pop_sound_thmb">&nbsp;</div>
                                                    <em className="sjt">소리명</em>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="link">
                                                    <div className="thmb imico_pop_sound_thmb">&nbsp;</div>
                                                    <em className="sjt">소리명</em>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="link">
                                                    <div className="thmb imico_pop_sound_thmb">&nbsp;</div>
                                                    <em className="sjt">소리명</em>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="link">
                                                    <div className="thmb imico_pop_sound_thmb">&nbsp;</div>
                                                    <em className="sjt">소리명</em>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="link">
                                                    <div className="thmb imico_pop_sound_thmb">&nbsp;</div>
                                                    <em className="sjt">소리명</em>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="link">
                                                    <div className="thmb imico_pop_sound_thmb">&nbsp;</div>
                                                    <em className="sjt">소리명</em>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="link">
                                                    <div className="thmb imico_pop_sound_thmb">&nbsp;</div>
                                                    <em className="sjt">소리명</em>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="link">
                                                    <div className="thmb imico_pop_sound_thmb">&nbsp;</div>
                                                    <em className="sjt">소리명</em>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="cont_sel_box sound_type">
                                    <strong className="tit">전체 (99)</strong>
                                    {/* [D] li 갯수만큼 width 값 설정 li = 112px (마진 영역 포함) */}
                                    <ul className="obj_list" style={{ width: 1120 + 'px' }}>
                                        <li>
                                            <div className="thmb imico_pop_sound_thmb">
                                                &nbsp;
                                            </div>
                                            <em className="sjt">소리명</em>
                                            <a href="#" className="btn_del imbtn_pop_chk_del">
                                                <span className="blind">삭제</span>
                                            </a>
                                        </li>
                                        <li>
                                            <div className="thmb imico_pop_sound_thmb">
                                                &nbsp;
                                            </div>
                                            <em className="sjt">소리명</em>
                                            <a href="#" className="btn_del imbtn_pop_chk_del">
                                                <span className="blind">삭제</span>
                                            </a>
                                        </li>
                                        <li>
                                            <div className="thmb imico_pop_sound_thmb">
                                                &nbsp;
                                            </div>
                                            <em className="sjt">소리명</em>
                                            <a href="#" className="btn_del imbtn_pop_chk_del">
                                                <span className="blind">삭제</span>
                                            </a>
                                        </li>
                                        <li>
                                            <div className="thmb imico_pop_sound_thmb">
                                                &nbsp;
                                            </div>
                                            <em className="sjt">소리명</em>
                                            <a href="#" className="btn_del imbtn_pop_chk_del">
                                                <span className="blind">삭제</span>
                                            </a>
                                        </li>
                                        <li>
                                            <div className="thmb imico_pop_sound_thmb">
                                                &nbsp;
                                            </div>
                                            <em className="sjt">소리명</em>
                                            <a href="#" className="btn_del imbtn_pop_chk_del">
                                                <span className="blind">삭제</span>
                                            </a>
                                        </li>
                                        <li>
                                            <div className="thmb imico_pop_sound_thmb">
                                                &nbsp;
                                            </div>
                                            <em className="sjt">소리명</em>
                                            <a href="#" className="btn_del imbtn_pop_chk_del">
                                                <span className="blind">삭제</span>
                                            </a>
                                        </li>
                                        <li>
                                            <div className="thmb imico_pop_sound_thmb">
                                                &nbsp;
                                            </div>
                                            <em className="sjt">소리명</em>
                                            <a href="#" className="btn_del imbtn_pop_chk_del">
                                                <span className="blind">삭제</span>
                                            </a>
                                        </li>
                                        <li>
                                            <div className="thmb imico_pop_sound_thmb">
                                                &nbsp;
                                            </div>
                                            <em className="sjt">소리명</em>
                                            <a href="#" className="btn_del imbtn_pop_chk_del">
                                                <span className="blind">삭제</span>
                                            </a>
                                        </li>
                                        <li>
                                            <div className="thmb imico_pop_sound_thmb">
                                                &nbsp;
                                            </div>
                                            <em className="sjt">소리명</em>
                                            <a href="#" className="btn_del imbtn_pop_chk_del">
                                                <span className="blind">삭제</span>
                                            </a>
                                        </li>
                                        <li>
                                            <div className="thmb imico_pop_sound_thmb">
                                                &nbsp;
                                            </div>
                                            <em className="sjt">소리명</em>
                                            <a href="#" className="btn_del imbtn_pop_chk_del">
                                                <span className="blind">삭제</span>
                                            </a>
                                        </li>
                                    </ul>
                                    <a href="#" className="btn_prev imbtn_pop_sel_prev">
                                        <span className="blind">이전</span>
                                    </a>
                                    <a href="#" className="btn_next imbtn_pop_sel_next">
                                        <span className="blind">다음</span>
                                    </a>
                                </div>
                            </div>
                            <div className="pop_btn_box">
                                <a href="#">취소</a>
                                <a href="#" className="active">추가하기</a>
                            </div>
                        </div>
                    </section>
                </div>

                {/* 소리 올리기 팝업 */}
                <div className="popup_wrap">
                    <header className="pop_header">
                        <h1>오브젝트 추가하기</h1>
                        <button onClick={this.close} className="btn_back imbtn_pop_back">
                            <span className="blind">뒤로가기</span>
                        </button>
                    </header>
                    <section className="pop_content">
                        <div className="section_navi">
                            <ul className="list">
                                <li>
                                    <a href="#">소리 선택</a>
                                </li>
                                <li className="on">
                                    <a href="#">파일 올리기</a>
                                </li>
                            </ul>
                        </div>
                        <div className="section_cont">
                            {/* [D] 메뉴 카테고리 선택에 따라 텍스트 변경  */}
                            <h2 className="blind">파일 올리기</h2>
                            <div className="cont_box">
                                <div className="file_add_list_box sound_type">
                                    <p className="caution imico_pop_caution">
                                        10MB 이하의 mp3 형식의 파일을 추가할 수 있습니다.
                                    </p>
                                    <div className="scroll_box">
                                        <div className="file_add_box">
                                            <label htmlFor="inpt_file" className="upload imbtn_pop_upload">파일 올리기
                                            </label>
                                            <input type="file" name="inpt_file" id="inpt_file" />
                                        </div>
                                        <ul className="obj_list">
                                            {/* [D] 오브젝트 링크가 클릭되면 li에 on  추가 */}
                                            <li>
                                                <a href="#" className="link">
                                                    <div className="thmb imico_pop_sound_thmb">
                                                        &nbsp;
                                                    </div>
                                                    <em className="sjt">소리명</em>
                                                </a>
                                            </li>
                                            <li className="on">
                                                <a href="#" className="link">
                                                    <div className="thmb imico_pop_sound_thmb">
                                                        &nbsp;
                                                   </div>
                                                    <em className="sjt">소리명</em>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="link">
                                                    <div className="thmb imico_pop_sound_thmb">
                                                        &nbsp;
                                                    </div>
                                                    <em className="sjt">소리명</em>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="link">
                                                    <div className="thmb imico_pop_sound_thmb">
                                                        &nbsp;
                                                    </div>
                                                    <em className="sjt">소리명</em>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="link">
                                                    <div className="thmb imico_pop_sound_thmb">
                                                        &nbsp;
                                                    </div>
                                                    <em className="sjt">소리명</em>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="link">
                                                    <div className="thmb imico_pop_sound_thmb">
                                                        &nbsp;
                                                    </div>
                                                    <em className="sjt">소리명</em>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="link">
                                                    <div className="thmb imico_pop_sound_thmb">
                                                        &nbsp;
                                                    </div>
                                                    <em className="sjt">소리명</em>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="link">
                                                    <div className="thmb imico_pop_sound_thmb">
                                                        &nbsp;
                                                    </div>
                                                    <em className="sjt">소리명</em>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="link">
                                                    <div className="thmb imico_pop_sound_thmb">
                                                        &nbsp;
                                                    </div>
                                                    <em className="sjt">소리명</em>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="link">
                                                    <div className="thmb imico_pop_sound_thmb">
                                                        &nbsp;
                                                    </div>
                                                    <em className="sjt">소리명</em>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="link">
                                                    <div className="thmb imico_pop_sound_thmb">
                                                        &nbsp;
                                                    </div>
                                                    <em className="sjt">소리명</em>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="link">
                                                    <div className="thmb imico_pop_sound_thmb">
                                                        &nbsp;
                                                    </div>
                                                    <em className="sjt">소리명</em>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="img_caution_box">
                                        <div className="inner">
                                            <span className="thmb">
                                                <img src="https://media.kappamoto.com/AK-Moto/foto/BMW_F700GS%20(13-16)_lato_K.jpg" alt="" />
                                            </span>
                                            <div className="dsc_box">
                                                <strong>
                                                    아래와 같은 그림은 이용약관 및 관련 법률에 의해 제재를 받으실 수 있습니다.
                                                </strong>
                                                <p className="dsc">
                                                    폭력적이고 잔인한 그림<br />
                                                    선정적인 신체 노출 그림<br />
                                                    불쾌감을 주거나 혐오감을 일으키는 그림
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pop_btn_box">
                                <a href="#">취소</a>
                                <a href="#" className="active">추가하기</a>
                            </div>
                        </div>
                    </section>
                </div>


            </div >
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
)(Sample);

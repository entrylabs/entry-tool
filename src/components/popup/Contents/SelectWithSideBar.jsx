import React, { Component } from 'react';
import SideBar from '../SideBar';

const SelectWithSideBar = ({sidebar}) => {
    return (
        <div className="section_cont">
            <SideBar sidebar={sidebar}/>

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
    );
};

export default SelectWithSideBar;



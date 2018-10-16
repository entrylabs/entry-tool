import React, { Component } from 'react';

const WriteBox = () => {
    return (
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
    );
}
export default WriteBox;
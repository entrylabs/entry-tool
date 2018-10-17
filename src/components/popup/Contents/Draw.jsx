import React, { Component } from 'react';
import { connect } from 'react-redux';

class Draw extends Component {
    render() {
        return (
            <div className="section_cont">
                {/* [D] 메뉴 카테고리 선택에 따라 텍스트 변경  */}
                <h2 className="blind">그리기</h2>
                <div className="cont_box">
                    <div className="draw_box">
                        <div className="thmb">
                            <img src="https://media.kappamoto.com/AK-Moto/foto/BMW_F700GS%20(13-16)_lato_K.jpg" alt=""/>
                        </div>
                        <p className="draw_dsc">
                            그림을 그려 오브젝트로 저장할 수 있습니다.<br/>
                            그리기 화면으로 이동하시겠습니까?
                        </p>
                        <div className="pop_btn_box">
                            <a href="#" className="active">이동하기</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    null,
    null,
)(Draw);
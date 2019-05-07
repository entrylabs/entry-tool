import React, { Component } from 'react';
import { connect } from 'react-redux';
import { triggerEvent } from '@actions';
import { EMIT_TYPES } from '@constants';
import { CommonUtils } from '@utils/Common';
import Theme from '@utils/Theme';

class Draw extends Component {
    constructor(props) {
        super(props);
        this.theme = Theme.getStyle("popup");
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(data) {
        this.props.triggerEvent(data);
    }

    render() {
        return (
            <div className={this.theme.pop_content}>
                <div className={this.theme.section_cont}>
                    {/* [D] 메뉴 카테고리 선택에 따라 텍스트 변경  */}
                    <h2 className={this.theme.blind}>그리기</h2>
                    <div className={this.theme.cont_box}>
                        <div className={this.theme.draw_box}>
                            <div className={`${this.theme.thmb} ${this.theme.imico_pop_draw_thmb}`}>
                                &nbsp;
                            </div>
                            <p className={this.theme.draw_dsc}>
                                {CommonUtils.getLang("Menus.draw_new_ques_1")}
                                <br />
                                {CommonUtils.getLang("Menus.draw_new_ques_2")}
                            </p>
                            <div className={this.theme.pop_btn_box}>
                                <a
                                    href="#NULL"
                                    className={this.theme.active}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        this.handleSubmit();
                                    }}
                                >
                                    {CommonUtils.getLang("Menus.draw_new_go")}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    triggerEvent: (data) => dispatch(triggerEvent(EMIT_TYPES.draw, data)),
});

export default connect(
    null,
    mapDispatchToProps
)(Draw);

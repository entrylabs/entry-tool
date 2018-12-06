import React, { Component } from 'react';
import { connect } from 'react-redux';
import Styles from '@assets/scss/popup.scss';
import { triggerEvent } from '@actions';
import { EMIT_TYPES } from '@constants';
import { CommonUtils } from '@utils/Common';

class Draw extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(data) {
        this.props.triggerEvent(data);
    }

    render() {
        return (
            <div className={Styles.pop_content}>
                <div className={Styles.section_cont}>
                    {/* [D] 메뉴 카테고리 선택에 따라 텍스트 변경  */}
                    <h2 className={Styles.blind}>그리기</h2>
                    <div className={Styles.cont_box}>
                        <div className={Styles.draw_box}>
                            <div className={`${Styles.thmb} ${Styles.imico_pop_draw_thmb}`}>
                                &nbsp;
                            </div>
                            <p className={Styles.draw_dsc}>
                                {CommonUtils.getLang("Menus.draw_new_ques_1")}
                                <br />
                                {CommonUtils.getLang("Menus.draw_new_ques_2")}
                            </p>
                            <div className={Styles.pop_btn_box}>
                                <a
                                    href="#NULL"
                                    className={Styles.active}
                                    onClick={() => this.handleSubmit()}
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

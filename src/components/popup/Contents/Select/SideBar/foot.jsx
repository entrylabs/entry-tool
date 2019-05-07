import React, { Component } from 'react';
import { connect } from 'react-redux';
import { triggerEvent } from '@actions/index';
import { EMIT_TYPES } from '@constants';
import { CommonUtils } from '@utils/Common';
import Theme from '@utils/Theme';
let Styles;

class Foot extends Component {
    constructor(props) {
        super(props);
        Styles = Theme.getStyle("popup");
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e, event, data) {
        e.preventDefault();
        this.props.triggerEvent(event, data);
    }

    render() {
        return (
            <div className={Styles.pop_btn_box}>
                <a href="#NULL" onClick={(e) => this.handleSubmit(e, EMIT_TYPES.close)}>
                    {CommonUtils.getLang("Buttons.cancel")}
                </a>
                <a
                    href="#NULL"
                    className={Styles.active}
                    onClick={(e) =>
                        this.handleSubmit(e, EMIT_TYPES.submit, { selected: this.props.popupReducer.selected })
                    }
                >
                    {CommonUtils.getLang("Buttons.add")}
                </a>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    ...state,
});

const mapDispatchToProps = (dispatch) => ({
    triggerEvent: (event, data) => dispatch(triggerEvent(event, data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Foot);

import React from 'react';
import { connect } from 'react-redux';
import { triggerEvent } from '@actions/index';
import { CommonUtils } from '@utils/Common';
import Theme from '@utils/Theme';
import { EMIT_TYPES as Types } from '@constants';

const Index = ({ selected, triggerEvent }) => {
    const theme = Theme.getStyle('popup');
    const handleSubmit = (event, data) => (e) => {
        e.preventDefault();
        triggerEvent(event, data);
    };
    return (
        <div className={theme.pop_btn_box}>
            <a href={'#NULL'} onClick={handleSubmit(Types.close)}>
                {CommonUtils.getLang('Buttons.cancel')}
            </a>
            <a
                href={'#NULL'}
                className={theme.active}
                onClick={handleSubmit(Types.submit, { selected })}
            >
                {CommonUtils.getLang('Buttons.add')}
            </a>
        </div>
    );
};

const mapStateToProps = (state) => ({
    selected: state.popupReducer.selected,
});

const mapDispatchToProps = (dispatch) => ({
    triggerEvent: (event, data) => dispatch(triggerEvent(event, data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Index);

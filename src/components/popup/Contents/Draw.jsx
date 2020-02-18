import React from 'react';
import { connect } from 'react-redux';
import { triggerEvent } from '@actions';
import { closePopup } from '@actions/popup';
import { EMIT_TYPES } from '@constants';
import Theme from '@utils/Theme';
import DrawContent from './includes/DrawContent';

const Index = ({ type, goDraw }) => {
    const theme = Theme.getStyle('popup');
    return (
        <div className={theme.pop_content}>
            <div className={theme.section_cont}>
                <h2 className={theme.blind}>DRAW</h2>
                <div className={theme.cont_box}>
                    <DrawContent type={type} goDraw={goDraw} theme={theme} />
                </div>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    goDraw: () => {
        dispatch(triggerEvent(EMIT_TYPES.draw, null, false));
        dispatch(closePopup());
    },
});

export default connect(null, mapDispatchToProps)(Index);

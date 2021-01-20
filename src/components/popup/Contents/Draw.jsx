import React from 'react';
import { connect } from 'react-redux';
import classname from 'classnames';
import { triggerEvent } from '@actions';
import { closePopup } from '@actions/popup';
import { EMIT_TYPES } from '@constants';
import Theme from '@utils/Theme';
import DrawContent from './includes/DrawContent';
import { setTimeout } from 'window-or-global';

const Index = ({ type, goDraw }) => {
    const theme = Theme.getStyle('popup');
    return (
        <div
            className={classname(theme.pop_content, {
                [theme.table_file_add]: type === 'table',
            })}
        >
            <div className={theme.section_cont}>
                <h2 className={theme.blind}>DRAW</h2>
                <div className={`${theme.cont_box} ${theme.draw}`}>
                    <DrawContent type={type} goDraw={goDraw} theme={theme} />
                </div>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    goDraw: () => {
        dispatch(closePopup());
        setTimeout(() => {
            dispatch(triggerEvent(EMIT_TYPES.draw, null, false));
        });
    },
});

export default connect(null, mapDispatchToProps)(Index);

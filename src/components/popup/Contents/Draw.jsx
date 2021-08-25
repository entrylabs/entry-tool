import React from 'react';
import { connect } from 'react-redux';
import classname from 'classnames';
import { triggerEvent } from '@actions';
import { closePopup } from '@actions/popup';
import { EMIT_TYPES } from '@constants';
import Theme from '@utils/Theme';
import DrawContent from './includes/DrawContent';
import { setTimeout } from 'window-or-global';

const Index = ({ type, goDraw, HeaderButtonPortal }) => {
    const theme = Theme.getStyle('popup');
    return (
        <div className={classname(theme.section_content, theme.drawing_content)}>
            {/* TODO: type === 'table' 인 경우 처리 */}
            <DrawContent
                type={type}
                goDraw={goDraw}
                theme={theme}
                HeaderButtonPortal={HeaderButtonPortal}
            />
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

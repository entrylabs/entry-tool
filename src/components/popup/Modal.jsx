import React from 'react';
import Theme from '@utils/Theme';
import { closeModal } from '@actions/popup';
import { connect } from 'react-redux';

const Modal = ({ contents, close }) => {
    const theme = Theme.getStyle('popup');
    if (!contents) {
        return null;
    }
    const handleClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        close();
    };
    return (
        <div className={theme.dimmed}>
            <div className={theme.more_popup}>
                {contents}
                <a href="#" className={theme.link_close} onClick={handleClick}>
                    <span className={theme.blind}>닫기</span>
                </a>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    contents: state.popupReducer.modal,
});

const mapDispatchToProps = (dispatch) => ({
    close: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

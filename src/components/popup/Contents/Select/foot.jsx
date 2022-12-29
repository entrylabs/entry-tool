import { connect } from 'react-redux';
import { triggerEvent } from '@actions/index';
import { closePopup } from '@actions/popup';
import { CommonUtils } from '@utils/Common';
import Theme from '@utils/Theme';
import { EMIT_TYPES as Types } from '@constants';

const Foot = ({ selected, closePopup, submit, hasCancelButton }) => {
    const theme = Theme.getStyle('popup');
    return (
        <div className={theme.pop_btn_box}>
            {hasCancelButton ? (
                <a onClick={CommonUtils.handleClick(closePopup)}>
                    {CommonUtils.getLang('Buttons.cancel')}
                </a>
            ) : (
                ''
            )}
            <a
                className={theme.active}
                onClick={CommonUtils.handleClick(() => submit({ selected }))}
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
    submit: (data) => {
        dispatch(triggerEvent(Types.submit, data, false));
        dispatch(closePopup());
    },
    closePopup: () => dispatch(closePopup()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Foot);

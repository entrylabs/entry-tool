import React from 'react';
import { connect } from 'react-redux';
import { applySelected } from '@actions/popup';
import { CommonUtils } from '@utils/Common';
import { EMIT_TYPES as Types } from '@constants';
import { triggerEvent } from '@actions';
import { makeFindSelectedByName } from '@selectors';
import classname from 'classnames';
import Theme from '@utils/Theme';

const Index = ({ index, imageBaseUrl, item, selected, applySelected, select, deselect }) => {
    const theme = Theme.getStyle('popup');
    const { imageName, titleKey, sponserText } = item;
    const desc = CommonUtils.getLang(item.descriptionKey);
    const onItemClicked = (e) => {
        e.preventDefault();
        const isBlockDeselect = typeof item.active !== 'undefined';
        if (index >= 0) {
            if (isBlockDeselect) {
                deselect(item, () => selected.splice(index, 1));
            } else {
                selected.splice(index, 1);
            }
        } else {
            selected.push(item, () => select(item));
        }
        applySelected(selected);
    };

    return (
        <li onClick={onItemClicked} className={classname({ [theme.on]: index >= 0 })}>
            <div className={theme.link}>
                <div
                    className={theme.thmb}
                    style={{
                        backgroundImage: `url("${imageBaseUrl}${imageName}")`,
                        backgroundRepeat: 'no-repeat',
                        position: 'relative',
                    }}
                >
                    {sponserText && (
                        <div className={theme.sponser_text}>
                            <span className={theme.sponser_text_span}>{sponserText}</span>
                        </div>
                    )}
                </div>
                <div className={theme.inner_box}>
                    <strong className={theme.sjt}>{CommonUtils.getLang(titleKey)}</strong>
                    <div className={theme.dsc} dangerouslySetInnerHTML={{ __html: desc }} />
                </div>
            </div>
        </li>
    );
};

const mapStateToProps = (state, props) => {
    const getIndex = makeFindSelectedByName(props.item.name);
    return {
        selected: state.popupReducer.selected,
        index: getIndex(state),
    };
};

const mapDispatchToProps = (dispatch) => ({
    applySelected: (list) => dispatch(applySelected(list)),
    select: (data, callback) => dispatch(triggerEvent(Types.itemon, { data, callback }, false)),
    deselect: (data, callback) => dispatch(triggerEvent(Types.itemoff, { data, callback }, false)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index);

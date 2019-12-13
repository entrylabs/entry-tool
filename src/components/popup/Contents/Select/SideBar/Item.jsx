import React from 'react';
import { connect } from 'react-redux';
import { applySelected } from '@actions/popup';
import { CommonUtils } from '@utils/Common';
import { EMIT_TYPES as Types } from '@constants';
import { triggerEvent } from '@actions';
import { makeFindSelectedById } from '@selectors';
import Theme from '@utils/Theme';
import classname from 'classnames';

const getName = (item) => {
    const lang = CommonUtils.getLangType();
    const defaultName = item.label && item.label.en ? item.label.en : item.name;
    return item.label && item.label[lang] ? item.label[lang] : defaultName;
};
const Index = (props) => {
    const { index, selected, applySelected, select, deselect } = props;
    const { baseUrl, type, item, multiSelect = true } = props;
    const theme = Theme.getStyle('popup');

    const onItemClicked = (e) => {
        e.preventDefault();
        const id = item._id || item.id;
        if (!multiSelect) {
            select(id);
            applySelected([item]);
            return;
        }
        if (index >= 0) {
            selected.splice(index, 1);
            deselect(id);
        } else {
            selected.push(item);
            select(id);
        }
        applySelected(selected);
    };

    const { thumb, filename, imageType } = CommonUtils.getImageSummary(item);
    const src = thumb || CommonUtils.createImageUrl(filename, baseUrl);
    return (
        <li onClick={onItemClicked} className={classname({ [theme.on]: index >= 0 })}>
            <div className={theme.link}>
                {type === 'sound' && (
                    <div className={classname(theme.thmb, theme.imico_pop_sound_thmb)} />
                )}
                {type !== 'sound' && (
                    <div className={classname(theme.thmb, { [theme[imageType]]: !!imageType })}>
                        <img src={src} alt={filename} />
                    </div>
                )}
                <em className={theme.sjt}>{getName(item)}</em>
            </div>
        </li>
    );
};

const mapStateToProps = (state, props) => {
    const getIndex = makeFindSelectedById(props.item._id);
    return {
        selected: state.popupReducer.selected,
        index: getIndex(state),
    };
};

const mapDispatchToProps = (dispatch) => ({
    applySelected: (list) => dispatch(applySelected(list)),
    select: (id) => dispatch(triggerEvent(Types.itemon, { id }, false)),
    deselect: (id) => dispatch(triggerEvent(Types.itemoff, { id }, false)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index);

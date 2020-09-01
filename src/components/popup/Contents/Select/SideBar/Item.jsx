import React from 'react';
import { connect } from 'react-redux';
import { applySelected } from '@actions/popup';
import { EMIT_TYPES as Types } from '@constants';
import { triggerEvent } from '@actions';
import { makeFindSelectedById } from '@selectors';
import Theme from '@utils/Theme';
import classname from 'classnames';
import SelectItem from '../../includes/SelectItem';

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

    return (
        <li onClick={onItemClicked} className={classname({ [theme.on]: index >= 0 })}>
            <div className={theme.link}>
                <SelectItem type={type} theme={theme} item={item} baseUrl={baseUrl} />
            </div>
        </li>
    );
};

const mapStateToProps = (state, props) => {
    const getIndex = makeFindSelectedById(props.item._id || props.item.id);
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

export default connect(mapStateToProps, mapDispatchToProps)(Index);

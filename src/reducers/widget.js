import {
    SELECT_DROPDOWN,
    CHANGED_ANGLE,
    CHANGE_DRAG_TYPE,
    CHANGE_DRAGGING,
    CHANGE_DRAG_DATA,
} from '@actions/widget';
import produce from 'immer';

const initState = {
    dropdown: [],
    angle: 0,
    dragType: 'block',
    isDragging: false,
    data: '',
};
export default (state = initState, action) =>
    produce(state, (draft) => {
        switch (action.type) {
            case SELECT_DROPDOWN:
                draft.dropdown = action.data;
                break;
            case CHANGED_ANGLE:
                draft.angle = action.data;
                break;
            case CHANGE_DRAG_TYPE:
                draft.dragType = action.data;
                break;
            case CHANGE_DRAGGING:
                draft.isDragging = action.data;
                break;
            case CHANGE_DRAG_DATA:
                draft.data = action.data;
                break;
            default:
                break;
        }
    });

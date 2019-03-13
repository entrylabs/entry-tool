import { SELECT_DROPDOWN, CHANGED_ANGLE, CHANGE_DRAG_TYPE } from '@actions/widget';
import produce from 'immer';

const initState = {
    dropdown: [],
    angle: 0,
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
            default:
                break;
        }
    });

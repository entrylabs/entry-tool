import { SELECT_DROPDOWN, CHANGED_ANGLE } from '@actions/widget';

const initState = {
    dropdown: [],
    angle: 0,
};
export default (state = initState, action) => {
    switch (action.type) {
        case SELECT_DROPDOWN:
            return Object.assign({}, { ...state, dropdown: action.data });
        case CHANGED_ANGLE:
            return Object.assign({}, { ...state, angle: action.data });
        default:
            return state;
    }
};

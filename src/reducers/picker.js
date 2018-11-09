import { CHANGE_COLOR_PICKER } from '@actions/picker';

const initState = {
    color: '#ff0000',
};
export default (state = initState, action) => {
    switch (action.type) {
        case CHANGE_COLOR_PICKER:
            return Object.assign({}, { ...state, color: action.data });
        default:
            return state;
    }
};

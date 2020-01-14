import { CHANGE_COLOR_PICKER, CHANGE_LED_PICKER } from '@actions/picker';

const initState = {
    color: '#ff0000',
};
export default (state = initState, action) => {
    switch (action.type) {
        case CHANGE_COLOR_PICKER:
            return Object.assign({}, { ...state, color: action.data });
        case CHANGE_LED_PICKER:
            return Object.assign({}, { ...state, led: action.data });
        default:
            return state;
    }
};

import { VISIBLE, CLICK_BUTTON, TRIGGER_EVENT } from '../actions/index';
import { API_FAIL } from '../actions/popup';

const initState = {
    visible: true,
};
export default (state = initState, action) => {
    switch (action.type) {
        case VISIBLE:
            return Object.assign({}, { ...state, visible: action.data });
        case CLICK_BUTTON: {
            const status = action.data.status;
            return Object.assign({}, state, { status });
        }
        case TRIGGER_EVENT: {
            return state;
        }
        case API_FAIL: {
            return state;
        }
        default:
            return state;
    }
};

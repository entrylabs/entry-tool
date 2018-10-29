import { VISIBLE, CLICK_BUTTON, TRIGGER_EVENT } from '../actions/index';
import { API_FAIL } from '../actions/popup';

const initState = {
    visible: true,
};
export default (state = initState, action) => {
    switch (action.type) {
        case VISIBLE:
            console.log(action.data);
            console.log("action", action.data);
            const test = { ...state, visible: action.data };
            console.log("tset", test);
            const test2 = Object.assign({}, test);
            console.log("test2", test2);
            return test2;
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

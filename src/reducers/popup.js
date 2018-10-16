import { POPUP_COMMON } from '../actions';
import { assign } from 'lodash';
export default function popupReducer(state = {}, action) {
    switch (action.type) {
        case 'CLOSE':
            return {
                result: action.payload,
            };
        case POPUP_COMMON:
            return assign({}, state, action.data);
        default:
            return state;
    }
}

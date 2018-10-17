import { FETCH_ITEM, APPLY_SELECTED_LIST } from '../actions';

const INITIAL_STATE = {
    selected: [],
};
export default function popupReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'CLOSE':
            return {
                result: action.payload,
            };
        case FETCH_ITEM:
            return { ...state, ...action.data };
        case APPLY_SELECTED_LIST:
            return Object.assign({}, { ...state, selected: action.selected });
        default:
            return state;
    }
}

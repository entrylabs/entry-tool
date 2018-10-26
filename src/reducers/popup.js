import { FETCH_ITEM, APPLY_SELECTED_LIST, UPLOAD_ITEM, INIT_STATE } from '../actions/popup';

const INITIAL_STATE = {
    selected: [],
    uploads: [],
};
export default function popupReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'CLOSE':
            return {
                result: action.payload,
            };
        case INIT_STATE:
            return { ...state, selected: [], uploads: [] };
        case FETCH_ITEM:
            return { ...state, ...action.data };
        case UPLOAD_ITEM:
            return { ...state, uploads: [...state.uploads, ...action.data.uploads].flat() };
        case APPLY_SELECTED_LIST:
            return Object.assign({}, { ...state, selected: action.selected });
        default:
            return state;
    }
}

import { UI_SELECT, APPLY_SELECTED_LIST, UPLOAD_ITEM, INIT_STATE } from '../actions/popup';
import flatten from 'lodash/flatten';

const INITIAL_STATE = {
    selected: [],
    uploads: [],
    baseUrl: '',
};

export default function popupReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'CLOSE':
            return {
                result: action.payload,
            };
        case INIT_STATE:
            return { ...state, ...action.data, selected: [], uploads: [], data: [] };
        case UI_SELECT:
            return { ...state, ...action.data };
        case UPLOAD_ITEM:
            return { ...state, uploads: flatten([...state.uploads, ...action.data.data]) };
        case APPLY_SELECTED_LIST:
            return Object.assign({}, { ...state, selected: action.selected });
        default:
            return state;
    }
}

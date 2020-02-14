import {
    APPLY_SELECTED_LIST,
    INIT_STATE,
    CLOSE_POPUP,
    TOGGLE_VECTOR,
    APPLY_UPLOAD_LIST,
    OPEN_MODAL,
    CLOSE_MODAL,
} from '../actions/popup';

const INITIAL_STATE = {
    selected: [],
    uploads: [],
    isVectorOnly: false,
    closed: false,
    modal: null,
};

export default function popupReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case CLOSE_POPUP:
            return { ...state, closed: true };
        case TOGGLE_VECTOR:
            return { ...state, isVectorOnly: !state.isVectorOnly };
        case INIT_STATE:
            return { ...state, selected: [], uploads: [], isVectorOnly: false, closed: false };
        case APPLY_UPLOAD_LIST:
            return { ...state, uploads: action.uploads };
        case APPLY_SELECTED_LIST:
            return { ...state, selected: action.selected };
        case OPEN_MODAL:
            return { ...state, modal: action.data };
        case CLOSE_MODAL:
            return { ...state, modal: null };
        default:
            return state;
    }
}

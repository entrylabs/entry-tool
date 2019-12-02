export const TOGGLE_VECTOR = 'TOGGLE_VECTOR';
export const CLOSE_POPUP = 'CLOSE_POPUP';
export const APPLY_SELECTED_LIST = 'APPLY_SELECTED_LIST';
export const APPLY_UPLOAD_LIST = 'APPLY_UPLOAD_LIST';
export const INIT_STATE = 'INIT_STATE';
export const API_FAIL = 'API_FAIL';

export const closePopup = () => (dispatch) => {
    dispatch({ type: CLOSE_POPUP });
};

export const toggleVector = () => (dispatch) => {
    dispatch({ type: TOGGLE_VECTOR });
};

export const initState = () => (dispatch) => {
    dispatch({
        type: INIT_STATE,
    });
};

export function applyUploaded(list) {
    return (dispatch) => {
        dispatch({
            type: APPLY_UPLOAD_LIST,
            uploads: list,
        });
    };
};

export function applySelected(list) {
    return (dispatch) => {
        dispatch({
            type: APPLY_SELECTED_LIST,
            selected: list,
        });
    };
}

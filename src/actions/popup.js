// import axios from 'axios';
// import { CommonUtils } from '../utils/Common';

export const UI_SELECT = 'UI_SELECT';
export const UPLOAD_ITEM = 'UPLOAD_ITEM';
export const APPLY_SELECTED_LIST = 'APPLY_SELECTED_LIST';
export const INIT_STATE = 'INIT_STATE';
export const API_FAIL = 'API_FAIL';

export const setUIParam = (data) => (dispatch) => {
    dispatch({
        type: UI_SELECT,
        data,
    });
};

export const initState = (data) => (dispatch) => {
    dispatch({
        data,
        type: INIT_STATE,
    });
};

export const updateUploads = (type, data)  => (dispatch) => {
    dispatch({
        data : {
            type,
            data,
        },
        type: UPLOAD_ITEM,
    });
};

export function applySelected(list) {
    return (dispatch) => {
        dispatch({
            type: APPLY_SELECTED_LIST,
            selected: list,
        });
    };
}

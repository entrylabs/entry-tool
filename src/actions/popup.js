import axios from 'axios';
import memoize from 'lodash/memoize';
import { CommonUtils } from '../utils/Common';

export const FETCH_ITEM = 'FETCH_ITEM';
export const UPLOAD_ITEM = 'UPLOAD_ITEM';
export const APPLY_SELECTED_LIST = 'APPLY_SELECTED_LIST';
export const INIT_STATE = 'INIT_STATE';
export const API_FAIL = 'API_FAIL';

const uploadOptions = {
    sprite: {
        method: 'POST',
        url: '/api/picture/upload',
        successCallback(response) {
            return response.data;
        },
    },
    object: {
        method: 'PUT',
        url: '/api/importObject',
        successCallback(response) {
            return response.data.map((item) => {
                return item.objects.map((object) => {
                    if (object.objectType === 'textBox') {
                        object.selectedPicture = {
                            name: object.name,
                            text: object.text,
                            objectType: object.objectType,
                            options: object.entity || {},
                            _id: CommonUtils.generateHash(),
                            fileurl: '/img/assets/text_icon.png',
                        };
                    }

                    object.selectedPicture.sprite = item;
                    return object.selectedPicture;
                });
            });
        },
    },
    sound: {
        method: 'POST',
        url: '/api/sound/upload',
        contentType: false,
        processData: false,
        successCallback(response) {
            return response.data;
        },
    },
};

export const initState = (data) => (dispatch) => {
    dispatch({
        data,
        type: INIT_STATE,
    });
};

export function fetchItems(type, category = null, subMenu = undefined) {
    let thisSubMenu = subMenu;
    if (thisSubMenu === 'all') {
        thisSubMenu = '';
    }
    /* eslint-disable array-element-newline */
    /* eslint-disable array-bracket-newline */
    const url = ['/api', type, 'browse/default', category, thisSubMenu].join('/');
    const promise = memoize((url) => {
        return axios.get(url);
    });
    return (dispatch) => {
        promise(url)
            .then((response) => {
                return dispatch({
                    type: FETCH_ITEM,
                    data: {
                        type,
                        sidebar: category,
                        subMenu: thisSubMenu,
                        data: response.data,
                    },
                });
            })
            .catch((response) =>
                dispatch({
                    type: API_FAIL,
                    error: response.error,
                })
            );
    };
}

export function searchItem(type, query) {
    const url = `/api/${type}/search/${query}`;

    const promise = memoize((url) => {
        return axios.get(url);
    });
    return (dispatch) => {
        promise(url)
            .then((response) =>
                dispatch({
                    type: FETCH_ITEM,
                    data: {
                        data: response.data,
                    },
                })
            )
            .catch((response) =>
                dispatch({
                    type: API_FAIL,
                    error: response.error,
                })
            );
    };
}

export function uploadItem(type, formData, header) {
    const httpOption = { ...uploadOptions[type], data: formData, header };
    return (dispatch) => {
        axios(httpOption)
            .then((response) =>
                dispatch({
                    type: UPLOAD_ITEM,
                    data: {
                        data: httpOption.successCallback(response),
                        objType: type,
                    },
                })
            )
            .catch((response) =>
                dispatch({
                    type: API_FAIL,
                    error: response.error,
                })
            );
    };
}

export function applySelected(list) {
    return (dispatch) => {
        dispatch({
            type: APPLY_SELECTED_LIST,
            selected: list,
        });
    };
}

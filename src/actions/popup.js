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
        successCallback: function(response) {
            return response.data;
        },
    },
    object: {
        method: 'PUT',
        url: '/api/importObject',
        successCallback: function(response) {
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
        successCallback: function(response) {
            return response.data;
        },
    },
};

export const initState = (data) => (dispatch) => {
    dispatch({
        type: INIT_STATE,
        data: data,
    });
};

export function fetchItems(type, category = null, subMenu = undefined) {
    if (subMenu === 'all') {
        subMenu = '';
    }
    const url = ['/api', type, 'browse/default', category, subMenu].join('/');
    let promise = memoize((url) => {
        return axios.get(url);
    });
    return (dispatch) => {
        promise(url)
            .then((response) => {
                return dispatch({
                    type: FETCH_ITEM,
                    data: {
                        type: type,
                        sidebar: category,
                        subMenu: subMenu,
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

    let promise = memoize((url) => {
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
    let httpOption = { ...uploadOptions[type], data: formData, header: header };
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

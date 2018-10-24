import axios from 'axios';
import _ from 'lodash';
import { api } from '../constatns';

export const FETCH_ITEM = 'FETCH_ITEM';
export const UPLOAD_ITEM = 'UPLOAD_ITEM';
export const APPLY_SELECTED_LIST = 'APPLY_SELECTED_LIST';
export const INIT_STATE = 'INIT_STATE';

const uploadOptions = {
    sprite : {
        method: 'POST',
        url: api.base + '/api/picture/upload',
        headers: {
            'Content-Type': undefined, // important
            //'csrf-token': window.Global.csrfToken(),
        },
        successCallback : function(response) {
            return response.data;
        }
    },
    object : {
        method: 'PUT',
        url: api.base + '/api/importObject',
        headers: {
            'Content-Type': undefined, // important
            //'csrf-token': window.Global.csrfToken(),
        },
        successCallback : function(response) {
            return response.data.map(item => {
                return item.objects.map(object => {
                    if (object.objectType === 'textBox') {
                        object.selectedPicture = {
                            name: object.name,
                            text: object.text,
                            objectType: object.objectType,
                            options: object.entity || {},
                            _id: window.Entry.generateHash(),
                            fileurl: '/img/assets/text_icon.png',
                        };
                    }

                    object.selectedPicture.sprite = item;
                    return object.selectedPicture;
                })

            });
        }
    },
    sound : {
        method: 'POST',
        url: api.base + '/api/sound/upload',
        contentType: false,
        processData: false,
        headers: {
            'Content-Type': undefined, // important
            //'csrf-token': window.Global.csrfToken(),
        },
        successCallback: function(response) {
            return response.data.map(item => {
                var path = '/uploads/' + item.filename.substring(0,2)+'/'+ item.filename.substring(2,4)+'/'+item.filename+item.ext;
                window.Entry.soundQueue.loadFile({
                    id: item._id,
                    src: path,
                    type: window.createjs.LoadQueue.SOUND
                });

                return item;
            });
        },
    }
}

export const initState = () => (dispatch) => {
    dispatch({
        type: INIT_STATE
    });
};

export const visibleAction = (visible) => (dispatch) => {
    dispatch({
        type: 'VISIBLE',
        data: visible,
    });
};

export function fetchItems(type, category = null, subMenu = undefined) {
    if (subMenu === 'all') {
        subMenu = '';
    }
    const url = [api.base, 'api', type, 'browse/default', category, subMenu].join('/');

    let promise = _.memoize(url => {
        return axios.get(url);
    });
    return (dispatch) => {
        promise(url)
            .then((response) => {
                if(type == "sound") {
                    response.data.forEach(sound => {
                        const fileName = sound.filename;
                        const path = '/uploads/' + fileName.substring(0, 2) + '/' + fileName.substring(2, 4) + '/' + fileName + sound.ext;
                        window.Entry.soundQueue.loadFile({
                            id: sound._id,
                            src: path,
                            type: window.createjs.LoadQueue.SOUND,
                        });
                    })

                }
                return dispatch({
                    type: FETCH_ITEM,
                    data: {
                        type: type,
                        sidebar: category,
                        subMenu: subMenu,
                        data: response.data,
                    },
                })
            })
            .catch((response) => dispatch({
                type: 'FAILS',
                error: response.error,
            }));
    };
}

export function searchItem(type, query) {
    const url = `${api.base}/api/${type}/search/${query}`;

    let promise = _.memoize(url => {
        return axios.get(url);
    });
    return (dispatch) => {
        promise(url)
            .then((response) => dispatch({
                type: FETCH_ITEM,
                data: {
                    data: response.data
                },
            }))
            .catch((response) => dispatch({
                type: 'FAILS',
                error: response.error,
            }));
    };
}

export function uploadItem(type, formData) {
    let httpOption = { ...uploadOptions[type], data:formData };
    return (dispatch) => {
        axios(httpOption)
            .then((response) => dispatch({
                type: UPLOAD_ITEM,
                data: {
                    uploads: httpOption.successCallback(response)
                },
            }))
            .catch((response) => dispatch({
                type: 'FAILS',
                error: response.error,
            }));
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



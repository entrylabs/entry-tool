import axios from 'axios';
import _ from 'lodash';
import { api } from '../constatns';

export const FETCH_ITEM = 'FETCH_ITEM';
export const APPLY_SELECTED_LIST = 'APPLY_SELECTED_LIST';

export const visibleAction = (visible) => (dispatch) => {
    dispatch({
        type: 'VISIBLE',
        data: visible,
    });
};

export function fetchItems(type, category = null, subMenu = undefined) {
    if (subMenu == 'all') {
        subMenu = '';
    }
    const url = [api.base, 'api', type, 'browse/default', category, subMenu].join('/');

    let promise = _.memoize(url => {
        return axios.get(url);
    });
    return (dispatch) => {
        promise(url)
            .then((response) => dispatch({
                type: FETCH_ITEM,
                data: {
                    type: type,
                    sidebar: category,
                    subMenu: subMenu,
                    data: response.data,
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
import { SELECT_DROPDOWN } from '@actions/widget';

const initState = {
    dropdown: [],
};
export default (state = initState, action) => {
    switch (action.type) {
        case SELECT_DROPDOWN:
            return Object.assign({}, { ...state, dropdown: action.data });
        default:
            return state;
    }
};

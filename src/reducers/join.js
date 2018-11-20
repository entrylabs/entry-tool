import { JOIN_PAGE_MOVE, JOIN_ACTION, REGIST_USER } from '../actions/join';

const initState = {
    page: 0,
    job: 'student',
};
export default (state = initState, action) => {
    switch (action.type) {
        case JOIN_PAGE_MOVE:
            return Object.assign({}, { ...state, page: action.data });
        case JOIN_ACTION:
            return { ...state, ...action };
        case REGIST_USER:
            return Object.assign({}, { ...state, page: action.page });
        default:
            return state;
    }
};

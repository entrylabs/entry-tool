import axios from 'axios';

export const JOIN_PAGE_MOVE = 'JOIN_PAGE_MOVE';
export const JOIN_ACTION = 'JOIN_ACTION';
export const REGIST_USER = 'REGIST_USER';
export const API_FAIL = 'API_FAIL';

export const JoinPageMoveAction = (moveTo) => (dispatch) => {
    dispatch({
        type: JOIN_PAGE_MOVE,
        data: moveTo,
    });
};

export const JoinAction = (data) => (dispatch) => {
    dispatch({
        type: JOIN_ACTION,
        ...data
    });
};
export function SubmitAction(data) {
    console.log("post", data);
    return (dispatch) => {
        axios.post("/usr", data).then((response) => {
            console.log("post", response);
            return dispatch({
                type: REGIST_USER,
                page: 3,
            });
        })
        .catch((response) => dispatch({
            type: API_FAIL,
            error: response.error,
        }));
    };

};
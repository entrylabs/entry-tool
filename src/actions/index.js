export const visibleAction = (visible) => (dispatch) => {
    dispatch({
        type: 'VISIBLE',
        data: visible,
    });
};

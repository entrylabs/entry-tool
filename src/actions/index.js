export const visibilityAction = (visibility) => (dispatch) => {
    dispatch({
        type: 'VISIBILITY',
        data: visibility,
    });
};

export const SELECT_DROPDOWN = 'SELECT_DROPDOWN';

export const onSelectDropdown = (item) => (dispatch) => {
    dispatch({
        type: SELECT_DROPDOWN,
        data: item,
    });
};

export const SELECT_DROPDOWN = 'SELECT_DROPDOWN';
export const CHANGED_ANGLE = 'CHANGED_ANGLE';

export const onSelectDropdown = (item) => (dispatch) => {
    dispatch({
        type: SELECT_DROPDOWN,
        data: item,
    });
};

export const onChangeAngle = (value) => (dispatch) => {
    dispatch({
        type: CHANGED_ANGLE,
        data: value,
    });
};

export const visibleAction = (visible) => (dispatch) => {
    dispatch({
        type: 'VISIBLE',
        data: visible,
    });
};

export const ColorPickAction = (color) => (dispatch) => {
    dispatch({
        type: 'COLOR_PICK',
        data: color,
    });
};

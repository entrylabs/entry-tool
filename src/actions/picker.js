export const CHANGE_COLOR_PICKER = 'CHANGE_COLOR_PICKER';

export const onChangeColorPicker = (color) => (dispatch) => {
    dispatch({
        type: CHANGE_COLOR_PICKER,
        data: color,
    });
};

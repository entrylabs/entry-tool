export const CHANGE_COLOR_PICKER = 'CHANGE_COLOR_PICKER';
export const CHANGE_LED_PICKER = 'CHANGE_LED_PICKER';

export const onChangeColorPicker = (color) => (dispatch) => {
    dispatch({
        type: CHANGE_COLOR_PICKER,
        data: color,
    });
};
export const onChangeLedPicker = (matrix) => (dispatch) => {
    dispatch({
        type: CHANGE_LED_PICKER,
        data: matrix,
    });
};

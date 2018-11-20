export const VISIBLE = 'VISIBLE';
export const CLICK_BUTTON = 'CLICK_BUTTON';
export const TRIGGER_EVENT = 'TRIGGER_EVENT';

export function clickButton(data) {
    return { type: CLICK_BUTTON, data };
}

export function triggerEvent(event, data, hide = true) {
    return { type: TRIGGER_EVENT, event, hide, data };
}

export const visibleAction = (visible) => (dispatch) => {
    dispatch({
        type: VISIBLE,
        data: visible,
    });
};

export const ColorPickAction = (color) => (dispatch) => {
    dispatch({
        type: 'COLOR_PICK',
        data: color,
    });
};

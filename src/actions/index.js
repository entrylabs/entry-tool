export const POPUP_COMMON = "POPUP_COMMON";

export const visibleAction = (visible) => (dispatch) => {
    dispatch({
        type: 'VISIBLE',
        data: visible,
    });
};

export function updateCommonData(type, data) {
    return { type, data };
}
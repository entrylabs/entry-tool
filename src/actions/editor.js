export const SUBMIT_DATA_ANALYTICS = 'SUBMIT_DATA_ANALYTICS';
export const TOAST_DATA_ANALYTICS = 'TOAST_DATA_ANALYTICS';
export const CHANGE_DATA_ANALYTICS = 'CHANGE_DATA_ANALYTICS';
export const ALERT_DATA_ANALYTICS = 'ALERT_DATA_ANALYTICS';
export const CLOSE_BUTTON_CLICK = 'CLOSE_BUTTON_CLICK';
export const ADD_TABLE_CLICK = 'ADD_TABLE_CLICK';
export const REMOVE_TABLE = 'REMOVE_TABLE';

export const onSubmitDataAnalytics = (data) => (dispatch) => {
    dispatch({
        type: SUBMIT_DATA_ANALYTICS,
        data,
    });
};

export const onToastDataAnalytics = (message) => (dispatch) => {
    dispatch({
        type: TOAST_DATA_ANALYTICS,
        data: message,
    });
};

export const onChangeDataAnalytics = (data) => (dispatch) => {
    dispatch({
        type: CHANGE_DATA_ANALYTICS,
        data,
    });
};

export const onAlertDataAnalytics = (data) => (dispatch) => {
    dispatch({
        type: ALERT_DATA_ANALYTICS,
        data,
    });
};

export const onCloseButtonClick = () => (dispatch) => {
    dispatch({ type: CLOSE_BUTTON_CLICK });
};

export const onAddTableButtonClick = () => (dispatch) => {
    dispatch({ type: ADD_TABLE_CLICK });
};

export const onRemoveTable = (data) => (dispatch) => {
    dispatch({ type: REMOVE_TABLE, data });
};

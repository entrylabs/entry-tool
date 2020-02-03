export const SUBMIT_DATA_ANALYTICS = 'SUBMIT_DATA_ANALYTICS';
export const TOAST_DATA_ANALYTICS = 'TOAST_DATA_ANALYTICS';

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

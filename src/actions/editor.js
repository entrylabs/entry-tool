export const SUMMIT_DATA_ANALYTICS = 'SUMMIT_DATA_ANALYTICS';
export const TOAST_DATA_ANALYTICS = 'TOAST_DATA_ANALYTICS';

export const onSummitDataAnalytics = (data) => (dispatch) => {
    dispatch({
        type: SUMMIT_DATA_ANALYTICS,
        data,
    });
};

export const onToastDataAnalytics = (message) => (dispatch) => {
    dispatch({
        type: TOAST_DATA_ANALYTICS,
        data: message,
    });
};

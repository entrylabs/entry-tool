export const SUMMIT_DATA_ANALYTICS = 'SUMMIT_DATA_ANALYTICS';

export const onSummitDataAnalytics = (data) => (dispatch) => {
    dispatch({
        type: SUMMIT_DATA_ANALYTICS,
        data,
    });
};

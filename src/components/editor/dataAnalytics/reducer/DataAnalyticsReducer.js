export const tableReducer = (state, action) => {
    switch (action.type) {
        case 'EDIT_TITLE':
            return {
                ...state,
                title: action.title,
            };
        case 'ADD_CHART':
            return {
                ...state,
                charts: [
                    ...state.charts,
                    {
                        type: action.type,
                    },
                ],
            };
        case 'EDIT_CHART': {
            const charts = [...state.charts];
            charts[action.index] = action.chart;
            return {
                ...state,
                charts,
            };
        }
        case 'REMOVE_CHART':
            return state.filter((matrixs) => matrixs.id !== action.id);
        default:
            return state;
    }
};

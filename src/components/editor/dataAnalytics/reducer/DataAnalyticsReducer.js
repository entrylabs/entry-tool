export const dataAnalyticsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_DATA':
            return {
                ...state,
                title: action.title,
                table: action.table,
                charts: action.charts,
            };
        case 'SET_TAB':
            return {
                ...state,
                tab: action.tab,
                chartIndex: action.index || state.chartIndex,
            };
        case 'SET_CHART_INDEX':
            return {
                ...state,
                chartIndex: action.index,
            };
        case 'EDIT_TITLE':
            return {
                ...state,
                title: action.title,
            };
        case 'EDIT_CHART_TITLE': {
            const charts = [...state.charts];
            charts[state.chartIndex].title = action.title;
            return {
                ...state,
                charts,
            };
        }
        case 'ADD_CHART':
            return {
                ...state,
                chartIndex: state.charts.length,
                charts: [
                    ...state.charts,
                    {
                        type: action.chartType,
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

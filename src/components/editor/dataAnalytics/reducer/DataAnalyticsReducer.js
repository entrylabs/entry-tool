import { CommonUtils, makeTableByGrid } from '@utils/Common';
import { TABLE } from '../Constants';

export const dataAnalyticsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_DATA':
            return {
                ...state,
                ...action.payload,
            };
        case 'SET_TAB': {
            let { table } = state;
            if (state.tab === TABLE && state.tab !== action.tab) {
                const { gridRef = {} } = state;
                table = makeTableByGrid(gridRef);
            }
            return {
                ...state,
                table,
                tab: action.tab,
                chartIndex: action.index === undefined ? state.chartIndex : action.index,
            };
        }
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
                        title: `${state.title}_${CommonUtils.getLang('DataAnalytics.chart_title')}`,
                    },
                ],
            };
        case 'DELETE_CHART': {
            const charts = [...state.charts];
            return {
                ...state,
                charts: charts.filter((chart, index) => index !== action.selected),
                chartIndex: 0,
            };
        }
        case 'SELECT_X_AXIS': {
            const charts = [...state.charts];
            charts[state.chartIndex] = {
                ...charts[state.chartIndex],
                xIndex: action.index,
                yIndex: -1,
                categoryIndexes: [],
            };

            return {
                ...state,
                charts,
            };
        }
        case 'SELECT_Y_AXIS': {
            const charts = [...state.charts];
            charts[state.chartIndex] = {
                ...charts[state.chartIndex],
                yIndex: action.index,
                categoryIndexes: [],
            };

            return {
                ...state,
                charts,
            };
        }
        case 'SELECT_LEGEND_AXIS': {
            const charts = [...state.charts];
            charts[state.chartIndex] = {
                ...charts[state.chartIndex],
                categoryIndexes: action.indexes,
            };

            return {
                ...state,
                charts,
            };
        }
        case 'TOGGLE_FULLSCREEN':
            return {
                ...state,
                isFullScreen: action.isFullScreen,
            };
        default:
            return state;
    }
};

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
                        xIndex: -1,
                        yIndex: -1,
                        categoryIndexes: [],
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
        case 'ADD_COLUMN': {
            const { table, charts = [] } = state;
            const { columnIndex, columnName } = action;

            const resultTable = table.map((row, index) => {
                row.splice(
                    columnIndex,
                    0,
                    index
                        ? 0
                        : CommonUtils.getOrderedName(
                              columnName || CommonUtils.getLang('DataAnalytics.new_attribute'),
                              table[0]
                          )
                );
                return row;
            });

            const resultCharts = charts.map((chart) => {
                if (chart.xIndex >= columnIndex) {
                    chart.xIndex++;
                }
                if (chart.yIndex >= columnIndex) {
                    chart.yIndex++;
                }
                for (let i = 0; i < chart.categoryIndexes.length; i++) {
                    if (chart.categoryIndexes[i] >= columnIndex) {
                        chart.categoryIndexes[i]++;
                    }
                }
                return chart;
            });

            return {
                ...state,
                table: resultTable,
                charts: resultCharts,
            };
        }
        case 'DELETE_COLUMN': {
            const { table, charts = [] } = state;
            const { columnIndex } = action;

            const resultTable = table.map((row) => {
                row.splice(columnIndex, 1);
                return row;
            });

            const resultCharts = charts.map((chart) => {
                if (chart.xIndex == columnIndex) {
                    chart.xIndex = -1;
                    chart.yIndex = -1;
                    chart.categoryIndexes = [];
                } else if (chart.xIndex > columnIndex) {
                    chart.xIndex--;
                }
                if (chart.yIndex == columnIndex) {
                    chart.yIndex = -1;
                    chart.categoryIndexes = [];
                } else if (chart.yIndex > columnIndex) {
                    chart.yIndex--;
                }
                for (let i = 0; i < chart.categoryIndexes.length; i++) {
                    if (chart.categoryIndexes[i] == columnIndex) {
                        chart.categoryIndexes.splice(i, 1);
                    } else if (chart.categoryIndexes[i] > columnIndex) {
                        chart.categoryIndexes[i]--;
                    }
                }
                return chart;
            });

            return {
                ...state,
                table: resultTable,
                charts: resultCharts,
            };
        }
        case 'ADD_ROW': {
            const { table } = state;
            const { rowIndex } = action;

            const resultTable = [...table];
            resultTable.splice(rowIndex, 0, Array(table[0].length).fill(0));

            return {
                ...state,
                table: resultTable,
            };
        }
        case 'DELETE_ROW': {
            const { table } = state;
            const { rowIndex } = action;
            const resultTable = [...table];
            resultTable.splice(rowIndex, 1);

            return {
                ...state,
                table: resultTable,
            };
        }
        case 'TOGGLE_VISIBLE_LEGEND': {
            const charts = [...state.charts];
            charts[state.chartIndex] = {
                ...charts[state.chartIndex],
                visibleLegend: action.visible,
            };

            return {
                ...state,
                charts,
            };
        }
        default:
            return state;
    }
};

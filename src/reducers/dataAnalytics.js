import { CommonUtils } from '@utils/Common';
import _cloneDeep from 'lodash/cloneDeep';
import { TABLE } from '@constants/dataAnalytics';

export const dataAnalyticsReducer = (state, action) => {
    const { tab, onChangeDataAnalytics } = state;
    if (tab === TABLE) {
        const { gridRef, selected } = state;
        const [fields, ...data] = gridRef?.current?.getSheetData().data;
        selected.fields = fields;
        selected.data = data;
    }
    switch (action.type) {
        case 'SET_DATA':
            return {
                ...state,
                ...action.payload,
            };
        case 'REMOVE_TABLE': {
            const { list, selectedIndex = 0 } = state;
            const { index } = action;
            let changedList = [];
            let changedIndex = selectedIndex;
            if (index > 0 && index < list.length) {
                changedList = list.slice(0, index);
            }
            changedList = [...changedList, ...list.slice(index + 1)];
            if (selectedIndex >= index) {
                changedIndex = selectedIndex - 1;
            }
            changedIndex = selectedIndex === index ? 0 : changedIndex;
            onChangeDataAnalytics(changedList);
            return {
                ...state,
                selected: list[changedIndex],
                selectedIndex: changedIndex,
                list: changedList,
                isChanged: true,
            };
        }
        case 'COPY_TALBE': {
            const { list } = state;
            const { index } = action;
            const copiedTable = _cloneDeep(list[index]);
            const changedList = [...list, copiedTable];
            onChangeDataAnalytics(changedList);
            return {
                ...state,
                selected: copiedTable,
                selectedIndex: list.length,
                list: changedList,
                isChanged: true,
            };
        }
        // case 'COLUMN_EDIT': {
        //     const { clipboard = [] } = state;
        //     onChangeDataAnalytics(changedList);
        //     return {
        //         ...state,
        //         clipboard: [...clipboard, action.data],
        //     };
        // }
        case 'FOLD':
            window.dispatchEvent(new Event('resize'));
            return {
                ...state,
                fold: !state.fold,
            };
        case 'CHANGE_TABLE_TITLE': {
            const { list, selectedIndex, selected } = state;
            selected.name = action.value;
            list[selectedIndex] = selected;

            onChangeDataAnalytics(list);
            return {
                ...state,
                selected: {
                    ...selected,
                    name: action.value,
                },
                isChanged: true,
            };
        }
        case 'SELECT_TABLE': {
            const { index } = action;
            const { list } = state;
            return {
                ...state,
                selected: list[index],
                selectedIndex: index,
                isChanged: false,
            };
        }
        case 'SET_TAB': {
            const { selected } = state;
            const { chartIndex } = selected;
            let { fields, origin } = selected;
            if (tab === TABLE && tab !== action.tab) {
                const [header, ...rows] = action.table;
                fields = header;
                origin = rows;
            }
            return {
                ...state,
                tab: action.tab,
                selected: {
                    ...selected,
                    fields,
                    origin,
                    chartIndex: action.index === undefined ? chartIndex : action.index,
                },
            };
        }
        case 'SET_CHART_INDEX':
            return {
                ...state,
                selected: {
                    ...state.selected,
                    chartIndex: action.index,
                },
            };
        case 'EDIT_CHART_TITLE': {
            const { list, selectedIndex, selected } = state;
            const { chart = [], chartIndex } = selected;
            chart[chartIndex].title = action.title;
            list[selectedIndex] = selected;
            onChangeDataAnalytics(list);
            return {
                ...state,
                selected: {
                    ...selected,
                    chart,
                },
                isChanged: true,
            };
        }
        case 'ADD_CHART': {
            const { list, selectedIndex, selected = {} } = state;
            const { chart = [], name } = selected;
            selected.chartIndex = chart.length;
            selected.chart = [
                ...chart,
                {
                    type: action.chartType,
                    title: `${name}_${CommonUtils.getLang('DataAnalytics.chart_title')}`,
                    xIndex: -1,
                    yIndex: -1,
                    categoryIndexes: [],
                },
            ];
            list[selectedIndex] = selected;
            onChangeDataAnalytics(list);
            return {
                ...state,
                selected,
                isChanged: true,
            };
        }
        case 'REMOVE_CHART': {
            const { list, selectedIndex, selected = {} } = state;
            const { chart = [], chartIndex } = selected;
            selected.chart = chart.filter((__, index) => index !== chartIndex);
            selected.chartIndex = 0;
            list[selectedIndex] = selected;
            onChangeDataAnalytics(list);
            return {
                ...state,
                selected,
                isChanged: true,
            };
        }
        case 'SELECT_X_AXIS': {
            const { list, selected, selectedIndex } = state;
            const { chart, chartIndex } = selected;
            selected.chart[chartIndex] = {
                ...chart[chartIndex],
                xIndex: action.index,
                yIndex: -1,
                categoryIndexes: [],
            };
            list[selectedIndex] = selected;

            onChangeDataAnalytics(list);
            return {
                ...state,
                selected,
                isChanged: true,
            };
        }
        case 'SELECT_Y_AXIS': {
            const { list, selected, selectedIndex } = state;
            const { chart, chartIndex } = selected;
            selected.chart[chartIndex] = {
                ...chart[chartIndex],
                yIndex: action.index,
                categoryIndexes: [],
            };
            list[selectedIndex] = selected;
            onChangeDataAnalytics(list);
            return {
                ...state,
                selected,
                isChanged: true,
            };
        }
        case 'SELECT_LEGEND_AXIS': {
            const { list, selected, selectedIndex } = state;
            const { chart, chartIndex } = selected;
            selected.chart[chartIndex] = {
                ...chart[chartIndex],
                categoryIndexes: action.indexes,
            };
            list[selectedIndex] = selected;
            onChangeDataAnalytics(list);
            return {
                ...state,
                selected,
                isChanged: true,
            };
        }
        case 'ADD_COLUMN': {
            const { table, chart = [] } = state;
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

            const resultCharts = chart.map((chart) => {
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
                chart: resultCharts,
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
        case 'SAVE':
            return {
                ...state,
                isChanged: false,
            };
        default:
            return state;
    }
};

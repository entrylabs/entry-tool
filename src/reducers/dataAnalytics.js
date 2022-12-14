import { CommonUtils } from '@utils/Common';
import _cloneDeep from 'lodash/cloneDeep';
import { TABLE } from '@constants/dataAnalytics';
import { getTrimedTable } from '@utils/dataAnalytics';

export const dataAnalyticsReducer = (state, action) => {
    const { tab } = state;
    if (tab === TABLE) {
        const { gridRef, selected } = state;
        selected.table = gridRef?.current?.getSheetData().data;
    }
    switch (action.type) {
        case 'SET_DATA':
            return {
                ...state,
                ...action.payload,
            };
        case 'REMOVE_TABLE': {
            const { list, selected, selectedIndex = 0, onRemoveTable } = state;
            const { index } = action;
            let changedList = [];
            let changedIndex = selectedIndex;
            let changedSelected = selected;
            if (index > 0 && index < list.length) {
                changedList = list.slice(0, index);
            }
            changedList = [...changedList, ...list.slice(index + 1)];
            if (selectedIndex >= index) {
                changedIndex = selectedIndex - 1;
            }
            changedIndex = selectedIndex === index ? 0 : changedIndex;
            if (!changedList.length) {
                changedIndex = -1;
                changedSelected = {};
            } else {
                changedSelected = _cloneDeep(changedList[changedIndex]);
            }
            onRemoveTable(index);

            return {
                ...state,
                selected: changedSelected,
                selectedIndex: changedIndex,
                list: changedList,
                isChanged: false,
            };
        }
        case 'COPY_TABLE': {
            const { list, onSubmitDataAnalytics } = state;
            const { index } = action;
            const { table, chart, name } = _cloneDeep(list[index]);
            const copiedTable = { table, chart, name };
            const changedList = [...list, copiedTable];
            onSubmitDataAnalytics({
                selected: copiedTable,
                index: list.length,
            });
            return {
                ...state,
                selected: copiedTable,
                selectedIndex: list.length,
                list: changedList,
                isChanged: false,
            };
        }
        case 'FOLD':
            window.dispatchEvent(new Event('resize'));
            return {
                ...state,
                fold: !state.fold,
            };
        case 'CHANGE_TABLE_TITLE': {
            const { selected } = state;
            selected.name = action.value;

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
                selected: _cloneDeep(list[index]),
                selectedIndex: index,
                isChanged: false,
            };
        }
        case 'SET_TAB': {
            const { selected } = state;
            const { chartIndex = 0 } = selected;
            if (tab === TABLE && tab !== action.tab) {
                selected.table = action.table;
            }
            selected.chartIndex = action.index === undefined ? chartIndex : action.index;
            return {
                ...state,
                selected,
                tab: action.tab,
            };
        }
        case 'SET_CHART_INDEX': {
            const { selected } = state;
            selected.chartIndex = action.index;
            return {
                ...state,
                selected,
            };
        }
        case 'EDIT_CHART_TITLE': {
            const { selected } = state;
            const { chartIndex = 0 } = selected;
            selected.chart[chartIndex].title = action.title;
            return {
                ...state,
                selected,
                isChanged: true,
            };
        }
        case 'ADD_CHART': {
            const { selected = {} } = state;
            const { chart = [], name } = selected;
            selected.chartIndex = chart.length;
            selected.chart.push({
                type: action.chartType,
                title: `${name}_${CommonUtils.getLang('DataAnalytics.chart_title')}`,
                xIndex: -1,
                yIndex: -1,
                categoryIndexes: [],
            });
            return {
                ...state,
                selected,
                isChanged: true,
            };
        }
        case 'REMOVE_CHART': {
            const { selected = {} } = state;
            const { chart = [], chartIndex = 0 } = selected;
            selected.chart = chart.filter((__, index) => index !== chartIndex);
            selected.chartIndex = 0;
            return {
                ...state,
                selected,
                isChanged: true,
            };
        }
        case 'SELECT_X_AXIS': {
            const { selected } = state;
            const { chart, chartIndex = 0 } = selected;
            selected.chart[chartIndex] = {
                ...chart[chartIndex],
                xIndex: action.index,
                yIndex: -1,
                categoryIndexes: [],
            };
            return {
                ...state,
                selected,
                isChanged: true,
            };
        }
        case 'SELECT_Y_AXIS': {
            const { list, selected, selectedIndex } = state;
            const { chart, chartIndex = 0 } = selected;
            selected.chart[chartIndex] = {
                ...chart[chartIndex],
                yIndex: action.index,
                categoryIndexes: [],
            };
            list[selectedIndex] = selected;
            return {
                ...state,
                selected,
                isChanged: true,
            };
        }
        case 'SELECT_LEGEND_AXIS': {
            const { selected } = state;
            const { chart, chartIndex = 0 } = selected;
            selected.chart[chartIndex] = {
                ...chart[chartIndex],
                categoryIndexes: action.indexes,
            };
            return {
                ...state,
                selected,
                isChanged: true,
            };
        }
        case 'ADD_COLUMN': {
            const { selected } = state;
            const { chart: charts = [] } = selected;
            const { index } = action;

            selected.chart = charts.map((chart) => {
                if (chart.xIndex >= index) {
                    chart.xIndex++;
                }
                if (chart.yIndex >= index) {
                    chart.yIndex++;
                }
                for (let i = 0; i < chart.categoryIndexes.length; i++) {
                    if (chart.categoryIndexes[i] >= index) {
                        chart.categoryIndexes[i]++;
                    }
                }
                return chart;
            });

            return {
                ...state,
                selected,
                isChanged: true,
            };
        }
        case 'DELETE_COLUMN': {
            const { selected } = state;
            const { chart: charts = [] } = selected;
            const { index } = action;

            selected.chart = charts.map((chart) => {
                if (chart.xIndex == index) {
                    chart.xIndex = -1;
                    chart.yIndex = -1;
                    chart.categoryIndexes = [];
                } else if (chart.xIndex > index) {
                    chart.xIndex--;
                }
                if (chart.yIndex == index) {
                    chart.yIndex = -1;
                    chart.categoryIndexes = [];
                } else if (chart.yIndex > index) {
                    chart.yIndex--;
                }
                for (let i = 0; i < chart.categoryIndexes.length; i++) {
                    if (chart.categoryIndexes[i] == index) {
                        chart.categoryIndexes.splice(i, 1);
                        i--;
                    } else if (chart.categoryIndexes[i] > index) {
                        chart.categoryIndexes[i]--;
                    }
                }
                return chart;
            });

            return {
                ...state,
                selected,
                isChanged: true,
            };
        }
        case 'SAVE': {
            const { list, selectedIndex, selected, onSubmitDataAnalytics } = state;
            const { table } = action;
            if (table) {
                selected.table = getTrimedTable(table);
            }
            list[selectedIndex] = selected;
            onSubmitDataAnalytics({
                selected,
                index: selectedIndex,
            });
            return {
                ...state,
                list,
                selected,
                isChanged: false,
            };
        }
        case 'EDIT_ORDER': {
            const { selected } = state;
            const { chart = [], chartIndex = 0 } = selected;
            const { order } = action;

            chart[chartIndex].order = order;

            return {
                ...state,
                selected: {
                    ...selected,
                    chart,
                },
                isChanged: true,
            };
        }
        case 'CHANGE_DEGREE': {
            const { selected } = state;
            const { chart = [], chartIndex = 0 } = selected;
            const { value } = action;
            chart[chartIndex].bin = value;

            return {
                ...state,
                selected: {
                    ...selected,
                    chart,
                },
                isChanged: true,
            };
        }
        case 'EDIT_BOUNDARY': {
            const { selected } = state;
            const { chart = [], chartIndex = 0 } = selected;
            const { direction } = action;
            chart[chartIndex].boundary = direction;

            return {
                ...state,
                selected: {
                    ...selected,
                    chart,
                },
                isChanged: true,
            };
        }
        case 'CHANGE_VIEW_MODE': {
            const { zoomIn } = action;
            return { ...state, zoomIn: !!zoomIn };
        }
        default:
            return state;
    }
};

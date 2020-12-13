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
            return {
                ...state,
                selected: copiedTable,
                selectedIndex: list.length,
                list: changedList,
                isChanged: true,
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
            const { chartIndex } = selected;
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
            const { chartIndex } = selected;
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
            const { chart = [], chartIndex } = selected;
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
            const { chart, chartIndex } = selected;
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
            const { chart, chartIndex } = selected;
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
            const { chart, chartIndex } = selected;
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
                isChanged: false,
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
                    } else if (chart.categoryIndexes[i] > index) {
                        chart.categoryIndexes[i]--;
                    }
                }
                return chart;
            });

            return {
                ...state,
                selected,
                isChanged: false,
            };
        }
        case 'SAVE': {
            const { list, selectedIndex, selected, onSubmitDataAnalytics } = state;
            const { table } = action;
            if (table) {
                selected.table = table;
            }
            list[selectedIndex] = selected;
            onSubmitDataAnalytics({
                selected,
                index: selectedIndex,
            });
            return {
                ...state,
                list,
                isChanged: false,
            };
        }
        default:
            return state;
    }
};

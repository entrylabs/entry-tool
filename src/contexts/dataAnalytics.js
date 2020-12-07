import React, { createContext, useReducer, useEffect, useRef } from 'react';
import { dataAnalyticsReducer } from '@reducers/dataAnalytics';

export const DataAnalyticsContext = createContext();

// let beforeAnalytics = {};

// const isChangeTitle = (before, current) => before.title !== current.title;

// const isChangeTable = (before, current) => {
//     const { table: beforeTable = [[]] } = before;
//     const { table: currentTable = [[]] } = current;
//     if (
//         beforeTable.length !== currentTable.length ||
//         beforeTable[0].length !== currentTable[0].length
//     ) {
//         return true;
//     }

//     for (let i = 0; i < beforeTable.length; i++) {
//         for (let j = 0; j < beforeTable[i].length; j++) {
//             // 편집 이후에 변경이 없어도 number에서 string으로 변환될때 있음
//             if (beforeTable[i][j] != currentTable[i][j]) {
//                 return true;
//             }
//         }
//     }
// };

// const isChangeCharts = (before, current) => {
//     const { charts: beforeCharts = [] } = before;
//     const { charts: currentCharts = [] } = current;
//     if (beforeCharts.length !== currentCharts.length) {
//         return true;
//     }

//     for (let i = 0; i < beforeCharts.length; i++) {
//         if (
//             beforeCharts[i].type !== currentCharts[i].type ||
//             beforeCharts[i].xIndex !== currentCharts[i].xIndex ||
//             beforeCharts[i].yIndex !== currentCharts[i].yIndex
//         ) {
//             return true;
//         }
//         const { categoryIndexes: beforeLegend = [] } = beforeCharts[i];
//         const { categoryIndexes: currentLegend = [] } = currentCharts[i];
//         if (beforeLegend.length !== currentLegend.length) {
//             return true;
//         }
//         for (let j = 0; j < beforeLegend.length; j++) {
//             if (beforeLegend[j] !== currentLegend[j]) {
//                 return true;
//             }
//         }
//     }
// };

// const isChangeDataAnalytics = (before, current) =>
//     isChangeTitle(before, current) ||
//     isChangeTable(before, current) ||
//     isChangeCharts(before, current);

// const getTable = ({ table = [[]] }) => table.map((row) => [...row]);

const DataAnalyticsContextProvider = (props) => {
    const gridRef = useRef();
    const { analytics = {} } = props;
    const [dataAnalytics, dispatch] = useReducer(dataAnalyticsReducer, {
        ...analytics,
        gridRef,
    });

    // if (
    //     beforeAnalytics.id === dataAnalytics.id &&
    //     isChangeDataAnalytics(beforeAnalytics, dataAnalytics)
    // ) {
    //     onChangeDataAnalytics(dataAnalytics);
    // }
    // beforeAnalytics = { ...dataAnalytics, table: getTable(dataAnalytics) };

    // useEffect(() => {
    //     beforeAnalytics = { ...analytics };
    //     const { selected, selcetedIndex, list } = analytics;
    //     dispatch({
    //         type: 'SET_DATA',
    //         payload: {
    //             selected,
    //             selcetedIndex,
    //             list,
    //         },
    //     });
    // }, [analytics, dispatch]);

    return (
        <DataAnalyticsContext.Provider value={{ dataAnalytics, dispatch }}>
            {props.children}
        </DataAnalyticsContext.Provider>
    );
};

export default DataAnalyticsContextProvider;

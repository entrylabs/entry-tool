export const SUMMARY = 'summary';
export const TABLE = 'table';
export const CHART = 'chart';
export const BAR = 'bar';
export const LINE = 'line';
export const PIE = 'pie';
export const SCATTER = 'scatter';
export const NONE = 'none';
export const TAB_NAME = {
    TABLE,
    CHART,
    SUMMARY,
};
export const TAB_ITEMS = [
    { name: 'DataAnalytics.table', value: TABLE },
    { name: 'DataAnalytics.chart', value: CHART },
    { name: 'DataAnalytics.dashboard', value: SUMMARY },
];

// 차트별로 색상이 다른 기획이 있었으나 사라지면서 색상이 통일됨
// 색상 변경건이 있으면 여기서 수정하면 됨
export const GRAPH_COLOR = {
    [BAR]: [
        '#4f80ff',
        '#f16670',
        '#6e5ae6',
        '#00b6b1',
        '#9fbaff',
        '#fcad93',
        '#c5b4ff',
        '#b3c3cd',
        '#2d51ac',
        '#a23941',
        '#423496',
        '#2a7d7f',
    ],
    [LINE]: [
        '#4f80ff',
        '#f16670',
        '#6e5ae6',
        '#00b6b1',
        '#9fbaff',
        '#fcad93',
        '#c5b4ff',
        '#b3c3cd',
        '#2d51ac',
        '#a23941',
        '#423496',
        '#2a7d7f',
    ],
    [PIE]: [
        '#4f80ff',
        '#f16670',
        '#6e5ae6',
        '#00b6b1',
        '#9fbaff',
        '#fcad93',
        '#c5b4ff',
        '#b3c3cd',
        '#2d51ac',
        '#a23941',
        '#423496',
        '#2a7d7f',
    ],
    [SCATTER]: [
        '#4f80ff',
        '#f16670',
        '#6e5ae6',
        '#00b6b1',
        '#9fbaff',
        '#fcad93',
        '#c5b4ff',
        '#b3c3cd',
        '#2d51ac',
        '#a23941',
        '#423496',
        '#2a7d7f',
    ],
};
export const SUMMARY_HEADER = [
    ' ',
    'DataAnalytics.average',
    'DataAnalytics.standard_deviation',
    'DataAnalytics.maximum',
    'DataAnalytics.median',
    'DataAnalytics.minimum',
];

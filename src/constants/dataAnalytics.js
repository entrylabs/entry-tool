export const SUMMARY = 'summary';
export const TABLE = 'table';
export const CHART = 'chart';
export const BAR = 'bar';
export const LINE = 'line';
export const PIE = 'pie';
export const SCATTER = 'scatter';
export const BAR_SUB = 'bar_sub';
export const LINE_SUB = 'line_sub';
export const PIE_SUB = 'pie_sub';
export const SCATTER_SUB = 'scatter_sub';
export const SCATTERGRID = 'scatter_matrix';
export const HISTOGRAM = 'histogram';
export const NONE = 'none';
export const CHART_CATEGORY = [BAR, LINE, PIE, SCATTER, SCATTERGRID, HISTOGRAM];
export const CHART_CATEGORY_SUB = [BAR_SUB, LINE_SUB, PIE_SUB, SCATTER_SUB, '', ''];
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
export const LEGEND_OPTIONS = {
    [BAR]: {
        xAxis: true,
        category: true,
        order: true,
        showSelectAll: true,
        checkBox: true,
    },
    [LINE]: {
        xAxis: true,
        category: true,
        order: true,
        showSelectAll: true,
        checkBox: true,
    },
    [PIE]: {
        xAxis: true,
        category: true,
    },
    [SCATTER]: {
        xAxis: true,
        yAxis: true,
        category: true,
    },
    [SCATTERGRID]: {
        category: true,
        maximumSelectionLength: 6,
        checkBox: true,
        coefficient: true,
    },
    [HISTOGRAM]: {
        category: true,
        degree: true,
        maximumSelectionLength: 3,
        checkBox: true,
    },
};

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
    [HISTOGRAM]: ['#4f80ff', '#f16670', '#ffb500'],
};
export const SUMMARY_HEADER = [
    ' ',
    'DataAnalytics.average',
    'DataAnalytics.standard_deviation',
    'DataAnalytics.maximum',
    'DataAnalytics.median',
    'DataAnalytics.minimum',
];
export const SCATTER_POINT_PATTERN = [
    '<g transform="translate(-336 -457) translate(336 457)"><circle cx="4" cy="4" r="3"/></g>',
    '<path d="M1 1H7V7H1z" transform="translate(-384 -457)' +
        ' translate(384 457)" style="fill: inherit; stroke: inherit;"/>',
    '<path d="M5.937 2.766h-3.6v3.6h3.6v-3.6z" transform="translate(-432 -457) ' +
        'translate(432 456) translate(0 .2) rotate(45 4.137 4.566)"' +
        ' style="fill: inherit; stroke: inherit;"/>',
    '<path d="M4 2.236L1.618 7h4.764L4 2.236z"' +
        ' transform="translate(-480 -457) translate(480 457)"' +
        ' style="fill: inherit; stroke: inherit;"/>',
    '<path d="M7.2.8L.8 7.2M7.2 7.2L.8.8" transform="translate(-528 -457) ' +
        'translate(528 457)" style="fill: inherit; stroke: inherit;"/>',
    '<path d="M0 3.714L8 3.714M4 0L4 8" transform="translate(-576 -457) ' +
        'translate(576 457)" style="fill: inherit; stroke: inherit;"/>',
];

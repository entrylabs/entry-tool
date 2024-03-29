import XLSX from 'xlsx';

import _ceil from 'lodash/ceil';
import _some from 'lodash/some';
import _head from 'lodash/head';
import _uniq from 'lodash/uniq';
import _slice from 'lodash/slice';
import _floor from 'lodash/floor';
import _every from 'lodash/every';
import _chain from 'lodash/chain';
import _reduce from 'lodash/reduce';
import _uniqBy from 'lodash/uniqBy';
import _forEach from 'lodash/forEach';
import _toPairs from 'lodash/toPairs';
import _toString from 'lodash/toString';
import _zipObject from 'lodash/zipObject';
import _differenceBy from 'lodash/differenceBy';

import flow from 'lodash/fp/flow';
import map from 'lodash/fp/map';
import unzip from 'lodash/fp/unzip';

import { CommonUtils } from '@utils/Common';
import { NONE, SCATTER, HISTOGRAM, SCATTERGRID, GRAPH_COLOR } from '@constants/dataAnalytics';

export const isString = (str) => isNaN(str) || str === '';
export const someString = (array) => _some(array, isString);
export const getHeader = (matrix, editable = true) =>
    _chain(matrix)
        .head()
        .map((column) => ({
            editor: editable ? 'text' : '',
            name: column,
            align: 'center',
            width: 130,
            ellipsis: true,
        }))
        .value();
export const getData = (matrix) =>
    _chain(matrix)
        .slice(1)
        .map((content) => _zipObject(_head(matrix), content))
        .value();

export const toFixed = (num, dp = 2) => Math.round(num * Math.pow(10, dp)) / Math.pow(10, dp);
const getAverage = (array) => array.reduce((sum, value) => sum + Number(value), 0) / array.length;
const getStandardDeviation = (arr, average) =>
    Math.sqrt(arr.reduce((acc, curr) => acc + Math.pow(curr - average, 2), 0) / arr.length);
const makeSummary = (row) => {
    let restRow = row.slice(1);
    if (someString(restRow)) {
        return [row[0], '-', '-', '-', '-', '-'];
    }
    restRow = _reduce(restRow, (prev, curr) => (curr == '' ? prev : [...prev, curr]), []);
    const max = restRow.length ? Math.max(...restRow) : '-';
    const min = restRow.length ? Math.min(...restRow) : '-';
    const average = getAverage(restRow) || '-';

    return [
        row[0],
        average,
        getStandardDeviation(restRow, average) || '-',
        max,
        restRow.sort((a, b) => a - b)[Math.floor((restRow.length - 1) / 2)] || '-',
        min,
    ].map((value) => (isString(value) ? value || '-' : toFixed(value)));
};
export const getSummary = flow(unzip, map(makeSummary));

export const categoryKeys = (table, index) =>
    index >= 0 ? _uniq(table.slice(1).map((row) => row[index])) : [];

export const isZipable = (table, xIndex) =>
    _uniqBy(table, (row) => row[xIndex]).length !== table.length;

export const isNumberColumn = (table, index) =>
    _every(table.slice(1), (row) => !isString(row[index]));

export const hasNumberColumn = (table) =>
    _some(table[0], (__, columnIndex) =>
        _every(table.slice(1), (row) => !isString(row[columnIndex]))
    );

export const getNumberColumnIndexes = (table, banIndexes = []) =>
    _reduce(
        table[0],
        (prev, __, index) =>
            !_some(banIndexes, (banIndex) => index === banIndex) &&
            !_some(table.slice(1), (row) => isString(row[index]))
                ? [...prev, index]
                : prev,
        []
    );

export const getNumberColumnIndexesBySelectedColumns = (table, selectedColumns = []) =>
    _reduce(
        selectedColumns,
        (prev, index) =>
            !_some(table.slice(1), (row) => isString(row[index])) ? [...prev, index] : prev,
        []
    );

export const makeTableByGrid = (gridRef) => {
    const { current = {} } = gridRef;
    const instance = (current.getInstance && current.getInstance()) || {};
    const data = (instance.getData && instance.getData()) || {};
    const columns = (instance.getColumns && instance.getColumns()) || {};
    return [
        columns.map((column) => column.name),
        ...data.map((row) => columns.map((column) => row[column.name])),
    ];
};
export const getChartAfterAddColumn = (charts, columnIndex) =>
    charts.map((chart) => {
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

export const getChartAfterRemoveColumn = (charts, columnIndex) =>
    charts.map((chart) => {
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

export const getTrimedTable = (table) => {
    let trimedTable = [...table];
    for (let i = trimedTable.length - 1; i >= 1; i--) {
        if (_some(trimedTable[i])) {
            break;
        }
        trimedTable = _slice(trimedTable, 0, trimedTable.length - 1);
    }

    for (let i = trimedTable[0].length - 1; i >= 1; i--) {
        if (_some(trimedTable, (row) => row[i])) {
            break;
        }
        trimedTable = trimedTable.map((row) => _slice(row, 0, row.length - 1));
    }
    return trimedTable;
};

export const isChangeTable = (originProp, currentProp) => {
    const origin = getTrimedTable(originProp);
    const current = getTrimedTable(currentProp);
    return (
        origin.length !== current.length ||
        _some(origin, (row, index) => _differenceBy(row, current[index], _toString).length)
    );
};

export const downloadXLSX = (table, name) => {
    const worksheet = XLSX.utils.aoa_to_sheet(table);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet);

    XLSX.writeFile(workbook, `${name}.xlsx`);
};

export const getBinWidth = (table, categoryIndexes = [], boundary, bin) => {
    if (!categoryIndexes.length) {
        return '-';
    }
    let min = Number(table[1][categoryIndexes]) || Number.MAX_SAFE_INTEGER;
    let max = Number(table[1][categoryIndexes]) || Number.MIN_SAFE_INTEGER;
    _forEach(categoryIndexes, (index) => {
        _forEach(table.slice(1), (row) => {
            const value = Number(row[index]);
            if (min > value) {
                min = value;
            }
            if (max < value) {
                max = value;
            }
        });
    });
    min = _floor(min);
    max = _ceil(max);
    return { min, max, width: (max - min) / bin };
};

export const getPieChart = (table, xIndex, categoryIndex) => {
    const isAddedOption = categoryIndex === table[0].length;
    return [
        [
            table[0][xIndex],
            isAddedOption ? CommonUtils.getLang('DataAnalytics.quantity') : table[0][categoryIndex],
        ],
        ..._toPairs(
            table.slice(1).reduce((prev, row) => {
                prev[row[xIndex]] = prev[row[xIndex]] || 0;
                prev[row[xIndex]] += Number(isAddedOption ? 1 : row[categoryIndex]);
                return prev;
            }, {})
        ).sort((a, b) => {
            if (a[1] > b[1]) {
                return -1;
            }
            if (a[1] < b[1]) {
                return +1;
            }
            return 0;
        }),
    ];
};

export const isDrawable = ({ type = NONE, xIndex, yIndex, categoryIndexes = [] } = {}) =>
    type !== NONE &&
    (!(type === HISTOGRAM || xIndex === -1) ||
        (type === HISTOGRAM && categoryIndexes.length) ||
        (type === SCATTERGRID && categoryIndexes.length > 1)) &&
    categoryIndexes.length &&
    !(type === SCATTER && yIndex === -1);

export const getNoResultText = ({ type = NONE, xIndex, yIndex, categoryIndexes = [] } = {}) => {
    let content;
    if (type !== HISTOGRAM && type !== SCATTERGRID && xIndex === -1) {
        content = CommonUtils.getLang('DataAnalytics.select_x_axis');
    } else if (yIndex === -1 && type === SCATTER) {
        content = CommonUtils.getLang('DataAnalytics.select_y_axis');
    } else if (type === SCATTERGRID && categoryIndexes.length < 2) {
        content = CommonUtils.getLang('DataAnalytics.select_legend2');
    } else if (!categoryIndexes.length) {
        content = CommonUtils.getLang('DataAnalytics.select_legend');
    }
    return content;
};
/**
 * calculates pearson correlation
 * @param {number[]} d1
 * @param {number[]} d2
 */
export function corr(d1, d2) {
    const { min, pow, sqrt } = Math;
    const add = (a, b) => Number(a) + Number(b);
    const n = min(d1.length, d2.length);
    if (n === 0) {
        return 0;
    }
    [d1, d2] = [d1.slice(0, n), d2.slice(0, n)];
    const [sum1, sum2] = [d1, d2].map((l) => l.reduce(add));
    const [pow1, pow2] = [d1, d2].map((l) => l.reduce((a, b) => a + pow(b, 2), 0));
    const mulSum = d1.map((n, i) => n * d2[i]).reduce(add);
    const dense = sqrt((pow1 - pow(sum1, 2) / n) * (pow2 - pow(sum2, 2) / n));
    if (dense === 0) {
        return 0;
    }
    return ((mulSum - (sum1 * sum2) / n) / dense).toFixed(2);
}

export const deduplicationColumn = (columns) =>
    columns.map((column, index) => {
        const [head, ...ext] = column;
        const prev = _slice(columns, 0, index);
        let count = 0;
        _forEach(prev, ([prevHead]) => {
            if (prevHead == head) {
                count++;
            }
        });
        if (count) {
            return [`${head} (${count})`, ...ext];
        }
        return [head, ...ext];
    });

export const getColor = (type, index) => `${GRAPH_COLOR[type][index % GRAPH_COLOR[type].length]}`;
export const getMouseOverStyle = (type, index) => `
        background-color: ${getColor(type, index)};
        float: left;
        width: 14px;
        height: 14px;
        margin: -1px 7px 0 0;
        vertical-align: middle;
`;

export const getOrderedTable = ({ table, xIndex, isAddedOption, order }) => {
    const orderedTable = [...table.slice(1)];
    if (!isAddedOption) {
        const isNumberColumnXIndex = isNumberColumn(table, xIndex);
        if (order === 'ascending') {
            orderedTable.sort((rowA, rowB) => {
                const a = isNumberColumnXIndex ? Number(rowA[xIndex]) : rowA[xIndex];
                const b = isNumberColumnXIndex ? Number(rowB[xIndex]) : rowB[xIndex];
                if (a > b) {
                    return 1;
                }
                if (a < b) {
                    return -1;
                }
                return 0;
            });
        }
    }
    return [table[0], ...orderedTable];
};

export const isDrawableHorizontalLegend = ({ categoryIndexes, isHorizontalLegend, type, table }) =>
    categoryIndexes.length &&
    isHorizontalLegend &&
    type !== SCATTER &&
    type !== SCATTERGRID &&
    categoryIndexes[0] !== table[0].length;

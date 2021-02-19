import XLSX from 'xlsx';

import _ceil from 'lodash/ceil';
import _some from 'lodash/some';
import _head from 'lodash/head';
import _uniq from 'lodash/uniq';
import _slice from 'lodash/slice';
import _floor from 'lodash/floor';
import _round from 'lodash/round';
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

export const isString = (str) => isNaN(str);
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
    const max = Math.max(...restRow);
    const min = Math.min(...restRow);
    const average = getAverage(restRow);

    return [
        row[0],
        average,
        getStandardDeviation(restRow, average),
        max,
        restRow.sort((a, b) => a - b)[Math.floor((restRow.length - 1) / 2)],
        min,
    ].map((value) => (isString(value) ? value : toFixed(value)));
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

export const getBinWidth = (table, categoryIndexes, boundary, bin) => {
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
    if (boundary === 'left' && _ceil(max) === max) {
        max += 1;
    }
    if (boundary === 'right' && _floor(min) === min) {
        min -= 1;
    }
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

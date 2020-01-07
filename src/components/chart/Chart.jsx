import React from 'react';

import bb from 'billboard.js';
import 'billboard.js/dist/theme/insight.css';

import _reduce from 'lodash/reduce';
import _chain from 'lodash/chain';
import _slice from 'lodash/slice';

import { CommonUtils } from '@utils/Common';
const { generateHash, someString } = CommonUtils;

const getColumnGroup = (row) => (someString(_slice(row, 1)) ? 'stringColumn' : 'numberColumn');

const classifyColumn = (table) =>
    _chain(table)
        .unzip()
        .groupBy(getColumnGroup)
        .value();

const getColumns = (yAxis, yIndexs = [0]) =>
    _reduce(yIndexs, (previous, index) => [...previous, yAxis[index]], []);

const getGenerateOption = (props) => {
    const {
        table = [[]],
        type = 'bar',
        axisXType = 'category',
        size = { width: 960, height: 540 },
        bar = {
            width: {
                ratio: 0.5,
            },
        },
        id = generateHash(),
        xIndex = 0,
        yIndexs = [0],
    } = props;
    let { x, columns } = props;

    if (!x && table.length) {
        const { xAxis, yAxis } = classifyColumn(table);
        x = xAxis[xIndex];
        columns = [x, ...getColumns(xAxis, yAxis, xIndex, yIndexs)];
    }

    const generateOption = {
        id,
        bar,
        size,
        bindto: `#${id}`,
        data: { x, columns, type },
        axis: {
            x: {
                type: axisXType,
            },
        },
    };

    return generateOption;
};

const Chart = (props) => {
    const generateOption = getGenerateOption(props);
    const { id } = generateOption;

    bb.generate(generateOption);

    return <div id={id}></div>;
};

export default Chart;

import React, { useEffect } from 'react';

import bb from 'billboard.js';
import 'billboard.js/dist/theme/insight.css';

import flow from 'lodash/fp/flow';
import unzip from 'lodash/fp/unzip';
import groupBy from 'lodash/fp/groupBy';
import _reduce from 'lodash/reduce';
import _slice from 'lodash/slice';

import { CommonUtils, someString } from '@utils/Common';
const { generateHash } = CommonUtils;

const getColumnGroup = (row) => (someString(_slice(row, 1)) ? 'stringColumn' : 'numberColumn');

const classifyColumn = flow(unzip, groupBy(getColumnGroup));

const getColumns = (yAxis, yIndexs = [0]) =>
    _reduce(yIndexs, (previous, index) => [...previous, yAxis[index]], []);

const getChartId = () =>
    'abcdefghijklmnopqrstuvwxyz'[Math.floor(Math.random() * 26)] + generateHash();

const getGenerateOption = (props) => {
    const {
        table = [],
        type = 'bar',
        axisXType = 'category',
        size,
        bar = {
            width: {
                ratio: 0.5,
            },
        },
        id = getChartId(),
        xIndex = 0,
        yIndexs = [0],
    } = props;
    let { x, columns } = props;

    if (!x && table.length) {
        const { stringColumn: xAxis, numberColumn: yAxis } = classifyColumn(table);
        x = xAxis[xIndex];
        columns = [x, ...getColumns(yAxis, yIndexs)];
        x = x[0];
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

    useEffect(() => {
        bb.generate(generateOption);
    }, []);

    return (
        <>
            <div id={id} />
        </>
    );
};

export default Chart;

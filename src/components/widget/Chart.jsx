import React, { useEffect } from 'react';
import bb from 'billboard.js';
import 'billboard.js/dist/theme/insight.css';

import { CommonUtils, isString, someString } from '@utils/Common';
const { generateHash } = CommonUtils;

const getColumns = (yAxis, yIndexs = [0]) =>
    yIndexs.reduce((previous, index) => [...previous, yAxis[index]], []);

const getChartId = () =>
    'abcdefghijklmnopqrstuvwxyz'[Math.floor(Math.random() * 26)] + generateHash();

const getNumberColumns = (table) => table.filter((row) => !someString(row.slice(1)));

const zipColumns = (data) => {
    const list = _.uniq(data[0].slice(1));
    const indexes = list.map((value) => _.lastIndexOf(data[0], value));
    return data.map((row) => [0, ...indexes].map((index) => row[index]));
};

const generateOption = (props) => {
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
        const xAxis = _.unzip(table);
        const yAxis = getNumberColumns(xAxis);
        x = xAxis[xIndex];
        columns = zipColumns([x, ...getColumns(yAxis, yIndexs)]);
        x = x[0];
    }

    const option = {
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

    return option;
};

const hasNumberColumn = (table) => {
    for (let j = 0; j < table[0].length; j++) {
        let i = 1;
        for (; i < table.length; i++) {
            if (isString(table[i][j])) {
                break;
            }
        }
        if (i === table.length) {
            return true;
        }
    }
    return false;
};

const isDrawable = (table, type) => {
    if (type === 'bar' || type === 'line') {
        return table[0].length > 1 && hasNumberColumn(table);
    }
    return true;
};

const Chart = (props) => {
    const { table, type = 'bar' } = props;
    if (!isDrawable(table, type)) {
        return <div>차트 표현이 불가능합니다.</div>;
    }
    const option = generateOption(props);
    const { id } = option;

    useEffect(() => {
        bb.generate(option);
    }, []);

    return (
        <>
            <div id={id} />
        </>
    );
};

export default Chart;

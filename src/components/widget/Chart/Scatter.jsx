import { useEffect, useRef } from 'react';
import bb from 'billboard.js';
import Theme from '@utils/Theme';
import '@assets/entry/scss/widget/insight.css';
import { GRAPH_COLOR, SCATTER_POINT_PATTERN } from '@constants/dataAnalytics';
import { isDrawable, categoryKeys, getColor } from '@utils/dataAnalytics';
import _map from 'lodash/map';

const Scatter = ({ chart, table, size }) => {
    const theme = Theme.getStyle('popup');
    const chartRef = useRef(null);
    const { id, xIndex = -1, yIndex, categoryIndexes = [], type } = chart;

    useEffect(() => {
        if (!isDrawable(chart)) {
            return;
        }

        const columns = _map(
            table.slice(1).reduce((prev, row) => {
                prev[`${row[categoryIndexes]}_y`] = prev[`${row[categoryIndexes]}_y`] || [];
                prev[`${row[categoryIndexes]}_y`].push(`${row[yIndex]}`);
                prev[`${row[categoryIndexes]}_x`] = prev[`${row[categoryIndexes]}_x`] || [];
                prev[`${row[categoryIndexes]}_x`].push(`${row[xIndex]}`);
                return prev;
            }, {}),
            (value, index) => [index, ...value]
        );

        bb.generate({
            id,
            grid: { x: { show: true }, y: { show: true } },
            size,
            point: {
                // pattern: SCATTER_POINT_PATTERN,
                opacity: 1,
            },
            color: {
                pattern: GRAPH_COLOR[type],
            },
            data: {
                xs: scatterXs(columns),
                columns,
                type: 'scatter',
            },
            axis: {
                x: {
                    tick: {
                        multiline: false,
                        autorotate: true,
                        culling: true,
                        fit: false,
                    },
                },
            },
            pie: {
                label: {
                    show: false,
                },
            },
            tooltip: {
                contents: (data) => {
                    const [{ name, value, x }] = data;
                    const xAxis = table[0][xIndex];
                    const categoryIndex = categoryIndexes[0];
                    const scatterNames = categoryKeys(table, categoryIndex);

                    return `
                        <div class="${theme.chart_tooltip}">
                            <span
                                className="${theme.bg}"
                                style="float: left;
                                    width: 14px;
                                    height: 14px;
                                    margin: -1px 7px 0 0;
                                    vertical-align: middle;"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    style="fill: ${getColor(type, name)};
                                    stroke: ${getColor(type, name)};"
                                    width="16" height="16" viewBox="0 0 10 10">
                                    ${
                                        SCATTER_POINT_PATTERN[
                                            Number(name) % SCATTER_POINT_PATTERN.length
                                        ]
                                    }
                                </svg>
                            </span>
                            ${
                                categoryIndex !== table[0].length
                                    ? `
                                ${scatterNames[Number(name)]}&nbsp;|&nbsp;`
                                    : ''
                            }${xAxis}: ${x.toLocaleString()}
                            &nbsp;${table[0][yIndex]}: ${value.toLocaleString()}
                        </div>`;
                },
                init: {
                    x: 100,
                },
            },
            legend: { show: false },
            bindto: chartRef.current,
        });
    }, [
        categoryIndexes,
        chart,
        id,
        size,
        table,
        theme.bg,
        theme.chart_tooltip,
        type,
        xIndex,
        yIndex,
    ]);

    return (
        <div className={theme.chart_area}>
            <div id={id} style={{ height: '100%' }} ref={chartRef} />
        </div>
    );
};

export default Scatter;

const scatterXs = (columns) => {
    const xs = {};
    for (let index = 0; index < columns.length; index += 2) {
        xs[index / 2] = `${index / 2}_x`;
        columns[index][0] = `${index / 2}`;
        columns[index + 1][0] = `${index / 2}_x`;
    }
    return xs;
};

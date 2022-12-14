import React, { useRef, useEffect, useState } from 'react';
import { SCATTERGRID } from '@constants/dataAnalytics';
import { corr } from '@utils/dataAnalytics';
import bb from 'billboard.js';
import '@assets/entry/scss/widget/insight.css';

const ALL = 'all';
const COEFFICIENT = 'coefficient';
const size = 82;
// const width = `${size}px`;
// const height = `${size}px`;

const getColumns = (table, indexes) => indexes.map((index) => table.map((field) => field[index]));

const BillboardChart = ({
    columns,
    type,
    xs,
    id = 'scatterGrid',
    xLabel,
    yLabel,
    width,
    height,
}) => {
    const chartRef = useRef(null);
    useEffect(() => {
        console.log({ width, height });
        bb.generate({
            data: { columns, type, xs },
            bindto: chartRef.current,
            point: { opacity: 1 },
            axis: {
                x: {
                    tick: {
                        count: 2,
                        text: {
                            show: xLabel,
                        },
                        culling: {
                            lines: false,
                        },
                        format(x) {
                            return Math.floor(x * 10) / 10;
                        },
                    },
                    // show: false,
                },
                y: {
                    // show: false,
                    tick: {
                        // show: false,
                        text: {
                            show: false,
                        },
                        count: 2,
                        culling: {
                            lines: false,
                            // max: 4,
                        },
                        format(x) {
                            return Math.floor(x * 10) / 10;
                        },
                    },
                    clipPath: false,
                    // padding: -1,
                },
            },
            tooltip: { show: false },
            legend: { show: false },
            size: { width: width + 20, height: height + 20 },
        });
    }, []);
    return (
        <div
            id={id}
            ref={chartRef}
            style={{
                position: 'absolute',
                marginLeft: '-20px',
                // marginTop: '10px',
            }}
        />
    );
};

const Chart = ({ table, categoryIndexes, mode, xAxis, yAxis, width, height }) => {
    const [x, y] = categoryIndexes;
    const columns = getColumns(table, categoryIndexes);
    const xLabel = xAxis ? columns[1][0] : '';
    const yLabel = yAxis ? columns[0][0] : '';
    if (mode === COEFFICIENT) {
        if (x === y) {
            return columns[0][0];
        } else if (x > y) {
            return corr(columns[0].slice(1), columns[1].slice(1));
        }
    }
    if (x == y) {
        columns[1][0] += 'x';
    }
    return (
        <BillboardChart
            id={SCATTERGRID + categoryIndexes[0] + categoryIndexes[1]}
            columns={columns}
            type={'scatter'}
            xs={{ [columns[0][0]]: columns[1][0] }}
            xLabel={xLabel}
            yLabel={yLabel}
            width={width}
            height={height}
        />
    );
};
const ScatterGrid = ({ table, chart }) => {
    const [mode, setMode] = useState(ALL);
    const { type, categoryIndexes } = chart;
    // const mode = ALL;
    const handleClick = () => {
        setMode((m) => (m === 'all' ? COEFFICIENT : ALL));
    };
    if (type !== SCATTERGRID) {
        return null;
    }
    return (
        <div>
            <button onClick={handleClick}> hihi </button>
            <table
                style={{
                    // width: '100%',
                    // height: '100%',
                    border: '1px solid white',
                    borderCollapse: 'collapse',
                }}
            >
                {categoryIndexes.map((x, xIndex) => (
                    <tr
                        style={{
                            // height,
                            border: '1px solid white',
                            borderCollapse: 'collapse',
                        }}
                    >
                        {categoryIndexes.map((y, yIndex) => {
                            const xAxis = xIndex === categoryIndexes.length - 1;
                            const yAxis = yIndex === 0;
                            const width = size;
                            const height = size;

                            return (
                                <td
                                    style={{
                                        width: `${width + 20}px`,
                                        height: `${height + 20}px`,
                                        border: '1px solid white',
                                        borderCollapse: 'collapse',
                                    }}
                                >
                                    <Chart
                                        table={table}
                                        categoryIndexes={[x, y]}
                                        mode={mode}
                                        xAxis={xAxis}
                                        yAxis={yAxis}
                                        width={width}
                                        height={height}
                                    />
                                </td>
                            );
                        })}
                    </tr>
                ))}
            </table>
        </div>
    );
};

export default ScatterGrid;

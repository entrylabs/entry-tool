import React, { useRef, useEffect, useState } from 'react';
import { SCATTERGRID } from '@constants/dataAnalytics';
import { corr } from '@utils/dataAnalytics';
import bb from 'billboard.js';
import '@assets/entry/scss/widget/insight.css';

const ALL = 'all';
const COEFFICIENT = 'coefficient';

const getColumns = (table, indexes) => indexes.map((index) => table.map((field) => field[index]));

const BillboardChart = ({ columns, type, xs, id = 'scatterGrid', xLabel, yLabel }) => {
    const chartRef = useRef(null);
    useEffect(() => {
        bb.generate({
            data: { columns, type, xs },
            bindto: chartRef.current,
            point: { opacity: 1 },
            axis: {
                x: {
                    label: xLabel,
                },
                y: {
                    label: yLabel,
                },
            },
            tooltip: { show: false },
            legend: { show: false },
        });
    }, []);
    return <div id={id} ref={chartRef} />;
};

const Chart = ({ table, categoryIndexes, mode, xAxis, yAxis }) => {
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
                    width: '100%',
                    height: '100%',
                    border: '1px solid black',
                    borderCollapse: 'collapse',
                }}
            >
                {categoryIndexes.map((x, xIndex) => (
                    <tr
                        style={{
                            height: '30%',
                            border: '1px solid black',
                            borderCollapse: 'collapse',
                        }}
                    >
                        {categoryIndexes.map((y, yIndex) => (
                            <td
                                style={{
                                    width: '30%',
                                    border: '1px solid black',
                                    borderCollapse: 'collapse',
                                }}
                            >
                                <Chart
                                    table={table}
                                    categoryIndexes={[x, y]}
                                    mode={mode}
                                    xAxis={xIndex === categoryIndexes.length - 1}
                                    yAxis={yIndex === 0}
                                />
                            </td>
                        ))}
                    </tr>
                ))}
            </table>
        </div>
    );
};

export default ScatterGrid;

import React, { useRef, useEffect, useState } from 'react';
import { SCATTERGRID } from '@constants/dataAnalytics';
import { corr, pcorr, pearsonCorrelation } from '@utils/dataAnalytics';
import bb from 'billboard.js';
import '@assets/entry/scss/widget/insight.css';

const ALL = 'all';
const COEFFICIENT = 'coefficient';

const getColumns = (table, indexes) => indexes.map((index) => table.map((field) => field[index]));

const BillboardChart = ({ columns, type, xs, id = 'scatterGrid' }) => {
    const chartRef = useRef(null);
    useEffect(() => {
        bb.generate({ data: { columns, type, xs }, bindto: chartRef.current });
    }, []);
    return <div id={id} ref={chartRef} />;
};

const Chart = ({ table, categoryIndexes, mode }) => {
    const [x, y] = categoryIndexes;

    const columns = getColumns(table, categoryIndexes);
    columns[1][0] += 'x';
    if (mode !== ALL) {
        if (x === y) {
            return columns[0][0];
        } else if (x > y) {
            console.log(
                corr(columns[0].slice(1), columns[1].slice(1)),
                pearsonCorrelation([columns[0].slice(1), columns[1].slice(1)])
            );
            return pcorr(columns[0].slice(1), columns[1].slice(1));
        }
    }
    console.log({ columns, type: 'scatter', categoryIndexes });
    return (
        <BillboardChart
            id={SCATTERGRID + categoryIndexes[0] + categoryIndexes[1]}
            columns={columns}
            type={'scatter'}
            xs={{ [columns[0][0]]: columns[1][0] }}
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
                {categoryIndexes.map((x) => (
                    <tr
                        style={{
                            height: '30%',
                            border: '1px solid black',
                            borderCollapse: 'collapse',
                        }}
                    >
                        {categoryIndexes.map((y) => (
                            <td
                                style={{
                                    width: '30%',
                                    border: '1px solid black',
                                    borderCollapse: 'collapse',
                                }}
                            >
                                <Chart table={table} categoryIndexes={[y, x]} mode={mode} />
                            </td>
                        ))}
                    </tr>
                ))}
            </table>
        </div>
    );
};

export default ScatterGrid;

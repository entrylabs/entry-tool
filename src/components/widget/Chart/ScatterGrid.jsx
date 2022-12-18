import { useRef, useEffect } from 'react';
import { corr } from '@utils/dataAnalytics';
import bb, { scatter } from 'billboard.js';
import '@assets/entry/scss/widget/insight.css';
import Theme from '@utils/Theme';

const ScatterChart = ({ columns, id = 'scatter_matrix', size }) => {
    const chartRef = useRef(null);
    console.log({ size });
    useEffect(() => {
        if (columns[0][0] == columns[1][0]) {
            columns[1][0] += 'x';
        }
        bb.generate({
            data: { columns, type: scatter(), xs: { [columns[0][0]]: columns[1][0] } },
            bindto: chartRef.current,
            axis: {
                x: { tick: { text: { show: false }, count: 4 } },
                y: { tick: { text: { show: false }, count: 4 } },
            },
            point: { opacity: 1 },
            tooltip: { show: false },
            legend: { show: false },
            size: { width: size, height: size },
        });
    }, []);

    return (
        <div
            id={id}
            ref={chartRef}
            style={{
                marginTop: 10,
                marginLeft: -10,
                // marginRight: 20
            }}
        />
    );
};

const ScatterGrid = ({ table, chart, size: { width } }) => {
    const theme = Theme.getStyle('popup');
    const { categoryIndexes = [], id, coefficient } = chart;
    const count = categoryIndexes.length;

    if (count < 2) {
        return null;
    }

    return (
        <>
            {categoryIndexes.map((yAxis, xIndex) =>
                categoryIndexes.map((xAxis, yIndex) => (
                    <div className={theme.graph} key={`${id}-${xIndex}-${yIndex}`}>
                        {/* <ScatterChart size={size / count} /> */}
                        {/* eslint-disable-next-line no-nested-ternary */}
                        {coefficient && xIndex <= yIndex ? (
                            <strong className={theme.graph_title}>
                                <span className={theme.blind}>속성 이름</span>
                                {xIndex === yIndex
                                    ? table[0][yAxis]
                                    : corr(
                                          ...getColumns(table, [yAxis, xAxis]).map((colunm) =>
                                              colunm.slice(1)
                                          )
                                      )}
                            </strong>
                        ) : (
                            <ScatterChart
                                columns={getColumns(table, [yAxis, xAxis])}
                                size={width / count}
                            />
                        )}
                        {xIndex === count - 1 ? (
                            <>
                                <span className={theme.axis_x}>
                                    <span className={theme.blind}>x축 속성 이름</span>
                                    {table[0][xAxis]}
                                </span>
                                <dl className={theme.axis_list_x}>
                                    <dt className={theme.blind}>x축</dt>
                                    <dd>12.3K</dd>
                                    <dd>9999</dd>
                                    <dd>12</dd>
                                    <dd>0</dd>
                                </dl>
                            </>
                        ) : null}
                        {yIndex === 0 ? (
                            <>
                                <span className={theme.axis_y}>
                                    <span className={theme.blind}>y축 속성 이름</span>
                                    {table[0][yAxis]}
                                </span>
                                <dl className={theme.axis_list_y}>
                                    <dt className={theme.blind}>y축</dt>
                                    <dd>8000</dd>
                                    <dd>8000</dd>
                                    <dd>12</dd>
                                    <dd>0</dd>
                                </dl>
                            </>
                        ) : null}
                    </div>
                ))
            )}
        </>
    );
};

export default ScatterGrid;

const getColumns = (table, indexes) => indexes.map((index) => table.map((field) => field[index]));

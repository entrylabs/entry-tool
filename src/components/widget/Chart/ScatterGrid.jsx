import { useRef, useEffect } from 'react';
import { corr } from '@utils/dataAnalytics';
import bb, { scatter } from 'billboard.js';
import '@assets/entry/scss/widget/insight.css';
import Theme from '@utils/Theme';
import _unzip from 'lodash/unzip';
import cx from 'classnames';

const getColumns = (table, indexes, wrapper = (x) => x) =>
    indexes.map((index) => table.map((field) => wrapper(field[index])));

const ScatterChart = ({ columns, id = 'scatter_matrix', size, zoomIn, opacity }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        if (columns[0][0] == columns[1][0]) {
            columns[1][0] += 'x';
        }
        bb.generate({
            data: { columns, type: scatter(), xs: { [columns[0][0]]: columns[1][0] } },
            bindto: chartRef.current,
            axis: {
                x: { tick: { text: { show: false }, count: 4, padding: 0 } },
                y: { tick: { text: { show: false }, count: 4, padding: 0 } },
            },
            point: { opacity: opacity ? undefined : 0 },
            tooltip: { show: false },
            legend: { show: false },
            size: { width: size, height: size },
        });
    }, [columns, opacity, size, zoomIn]);

    return <div id={id} ref={chartRef} />;
};

const ScatterGrid = ({ table, chart, size: { width } = {}, zoomIn }) => {
    const theme = Theme.getStyle('popup');
    const { categoryIndexes = [], id, coefficient } = chart;
    const count = categoryIndexes.length;
    const mins = table[0].map((__, index) =>
        Math.min(...getColumns(table.slice(1), [index], Number)[0])
    );
    const maxs = table[0].map((__, index) =>
        Math.max(...getColumns(table.slice(1), [index], Number)[0])
    );
    const fixedLengths = _unzip(table.slice(1)).map((column) =>
        column.reduce((prev, curr) => Math.max(prev, String(curr).split('.')[1]?.length || 0), 0)
    );

    if (count < 2) {
        return null;
    }

    return (
        <div
            className={cx(
                theme.graph_box,
                {
                    [theme[`type_${categoryIndexes.length}`]]:
                        categoryIndexes.length >= 2 && categoryIndexes.length <= 6,
                },
                theme.scatter_matrix
            )}
            style={{ width, margin: '0 auto', overflow: 'initial', padding: '30px 0' }}
        >
            {categoryIndexes.map((yAxis, xIndex) =>
                categoryIndexes.map((xAxis, yIndex) => (
                    <div className={theme.graph} key={`${id}-${xIndex}-${yIndex}`}>
                        {/* eslint-disable-next-line no-nested-ternary */}
                        {coefficient && xIndex <= yIndex ? (
                            <strong className={theme.graph_title}>
                                <span className={theme.blind}>속성 이름</span>
                                {xIndex === yIndex
                                    ? table[0][yAxis]
                                    : corr(
                                          ...getColumns(table, [yAxis, xAxis]).map((column) =>
                                              column.slice(1)
                                          )
                                      )}
                            </strong>
                        ) : null}
                        <ScatterChart
                            id={`${id}-${xIndex}-${yIndex}`}
                            columns={getColumns(table, [yAxis, xAxis])}
                            size={width / count}
                            zoomIn={zoomIn}
                            opacity={!coefficient || xIndex > yIndex}
                        />
                        {xIndex === count - 1 ? (
                            <>
                                <span className={theme.axis_x}>
                                    <span className={theme.blind}>x축 속성 이름</span>
                                    {table[0][xAxis]}
                                </span>
                                <dl className={theme.axis_list_x}>
                                    <dt className={theme.blind}>x축</dt>
                                    <dd>{mins[xAxis]}</dd>
                                    {categoryIndexes.length < 5 ? (
                                        <>
                                            <dd>
                                                {(
                                                    mins[xAxis] +
                                                    (maxs[xAxis] - mins[xAxis]) * (1 / 3)
                                                ).toFixed(fixedLengths[xAxis] + 1)}
                                            </dd>
                                            <dd>
                                                {(
                                                    mins[xAxis] +
                                                    (maxs[xAxis] - mins[xAxis]) * (2 / 3)
                                                ).toFixed(fixedLengths[xAxis] + 1)}
                                            </dd>
                                        </>
                                    ) : null}
                                    <dd>{maxs[xAxis]}</dd>
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
                                    <dd>{maxs[yAxis]}</dd>
                                    {categoryIndexes.length < 5 ? (
                                        <>
                                            <dd>
                                                {(
                                                    mins[yAxis] +
                                                    (maxs[yAxis] - mins[yAxis]) * (1 / 3)
                                                ).toFixed(fixedLengths[yAxis] + 1)}
                                            </dd>
                                            <dd>
                                                {(
                                                    mins[yAxis] +
                                                    (maxs[yAxis] - mins[yAxis]) * (2 / 3)
                                                ).toFixed(fixedLengths[yAxis] + 1)}
                                            </dd>
                                        </>
                                    ) : null}
                                    <dd>{mins[yAxis]}</dd>
                                </dl>
                            </>
                        ) : null}
                    </div>
                ))
            )}
        </div>
    );
};

export default ScatterGrid;

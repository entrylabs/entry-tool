import { useEffect, useRef } from 'react';
import bb, { areaStep } from 'billboard.js';
import Theme from '@utils/Theme';
import '@assets/entry/scss/widget/insight.css';
import { GRAPH_COLOR } from '@constants/dataAnalytics';
import { isDrawable, getColor, getBinWidth } from '@utils/dataAnalytics';
import _map from 'lodash/map';
import _floor from 'lodash/floor';
import _round from 'lodash/round';
import _reduce from 'lodash/reduce';
import _forEach from 'lodash/forEach';

const Histogram = ({ chart, table, size }) => {
    const theme = Theme.getStyle('popup');
    const chartRef = useRef(null);
    const { id, categoryIndexes = [], type, boundary, bin: chartBin = 5 } = chart;
    const bin = Number(chartBin);

    useEffect(() => {
        if (!isDrawable(chart)) {
            return;
        }

        bb.generate({
            id,
            size,
            color: {
                pattern: GRAPH_COLOR[type],
            },
            data: {
                x: 'histogram_chart_x',
                columns: getHistogramChart(table, categoryIndexes, bin, boundary),
                type: areaStep(),
            },
            axis: {
                x: {
                    type: undefined,
                    tick: {
                        fit: true,
                        multiline: false,
                        culling: false,
                        count: bin + 1,
                        format: (x) => _round(x, 2),
                        fit: undefined,
                        autorotate: undefined,
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
                    const values = _reduce(
                        data,
                        (prev, curr) => {
                            if (curr.value) {
                                prev.push(curr);
                            }
                            return prev;
                        },
                        []
                    );
                    if (!values.length) {
                        return '';
                    }
                    const { width } = getBinWidth(table, categoryIndexes, boundary, bin);
                    const text = `
                    <div class="${theme.histogram_legend}">
                        <ul class="${theme.legend_list}">
                            ${data
                                .map(({ value, name, x, index }, idx) =>
                                    value
                                        ? `   
                            <li style="height:14px;">
                                <span class="${theme.bull}" 
                                    style="background-color: ${getColor(type, idx)};">
                                    &nbsp;
                                </span>
                                <span class="${theme.text}">${name}</span>
                                <span class="${theme.text}">${`${value} (${_round(
                                              (value / (table.length - 1)) * 100,
                                              2
                                          )}%): ${_round(x, 2)} ${
                                              boundary === 'left' || index === 0 ? '≤' : '〈'
                                          } X ${
                                              boundary === 'right' || index === bin - 1 ? '≤' : '〈'
                                          } ${_round(x + width, 2)}`}</span> 
                            </li>`
                                        : ''
                                )
                                .join(' ')}
                        </ul>
                    </div>`;
                    return text;
                },
            },
            legend: { show: false },
            line: { step: { type: 'step-after' } },
            bindto: chartRef.current,
            point: {
                r: 0,
            },
        });
    }, [
        bin,
        boundary,
        categoryIndexes,
        chart,
        id,
        size,
        table,
        theme.bull,
        theme.histogram_legend,
        theme.legend_list,
        theme.text,
        type,
    ]);

    return (
        <div className={theme.chart_area}>
            <div id={id} style={{ height: '100%' }} ref={chartRef} />
        </div>
    );
};

export default Histogram;

const getHistogramChart = (table, categoryIndexes, bin, boundary) => {
    const { width, min, max } = getBinWidth(table, categoryIndexes, boundary, bin);
    const x = new Array(bin + 1).fill(0);

    const xRow = ['histogram_chart_x', ..._map(x, (__, index) => index * width + min)];
    const extRow = _map(categoryIndexes, (index) => {
        const result = new Array(bin + 1).fill(0);
        result[0] = table[0][index];
        _forEach(table.slice(1), (row) => {
            const binIndex = _floor((Number(row[index]) - min) / width);
            if (Number(row[index]) - max === 0) {
                result[bin]++;
            } else if (Number(row[index]) - min === 0) {
                result[1]++;
            } else if (
                boundary === 'right' &&
                _round(min + width * binIndex, 4) == _round(Number(row[index]), 4)
            ) {
                result[binIndex]++;
            } else if (
                boundary === 'left' &&
                _round(min + width * (binIndex + 1), 4) == _round(Number(row[index]), 4)
            ) {
                result[binIndex + 2]++;
            } else {
                result[binIndex + 1]++;
            }
        });
        result.push(0);

        return result;
    });

    return [xRow, ...extRow];
};

import { useEffect, useRef } from 'react';
import bb, { line } from 'billboard.js';
import Theme from '@utils/Theme';
import '@assets/entry/scss/widget/insight.css';
import { GRAPH_COLOR } from '@constants/dataAnalytics';
import {
    isDrawable,
    getOrderedTable,
    deduplicationColumn,
    getMouseOverStyle,
} from '@utils/dataAnalytics';
import _map from 'lodash/map';
import _unzip from 'lodash/unzip';
import _findIndex from 'lodash/findIndex';

const setChartXCount = (chartObj, categories, chartRef) => () => {
    const categoryWordLength = categories?.[0].toString().length * 5;
    const padding = 100;
    const windowWidth = chartRef?.current?.offsetWidth || 0;
    let count = Math.min(categories.length, 16);
    if (windowWidth < categoryWordLength * 10 + padding) {
        count = Math.min(count, 8);
    }
    if (windowWidth < categoryWordLength * 8 + padding) {
        count = Math.min(count, 5);
    }
    if (windowWidth < categoryWordLength * 5 + padding) {
        count = Math.min(count, 3);
    }
    if (!chartObj.tickCount || chartObj.tickCount !== count) {
        chartObj.config('axis_x_tick_count', count, true);
    }
    chartObj.tickCount = count;
};

const Line = ({ chart, table, size }) => {
    const theme = Theme.getStyle('popup');
    const chartRef = useRef(null);
    const { id, xIndex = -1, order, categoryIndexes = [], type } = chart;
    useEffect(() => {
        if (!isDrawable(chart)) {
            return;
        }
        const isAddedOption = xIndex === table[0].length;
        const orderedTable = getOrderedTable({ table, xIndex, isAddedOption, order });
        const categories = orderedTable
            .slice(1)
            .map((row, index) => (isAddedOption ? index + 1 : row[xIndex]));
        const columns = deduplicationColumn(
            [...categoryIndexes].map((index) => _unzip(orderedTable)[index])
        );

        const chartObj = bb.generate({
            id,
            size,
            color: {
                pattern: GRAPH_COLOR[type],
            },
            data: {
                columns,
                type: line(),
            },
            axis: {
                x: {
                    type: 'category',
                    clipPath: false,
                    categories,
                    tick: {
                        fit: true,
                        multiline: false,
                        autorotate: categories.length <= 16,
                        rotate: categories.length <= 16 ? 15 : null,
                        culling: false,
                    },
                },
            },
            tooltip: {
                contents: (data) => {
                    const [{ name, value }] = data;
                    const fields = _map(categoryIndexes, (index) => orderedTable[0][index]);
                    const index = _findIndex(fields, (col) => col == name);
                    return `
                            <div class="${theme.chart_tooltip}">
                                <span
                                    className="${theme.bg}"
                                    style="${getMouseOverStyle(type, index)}"
                                >
                                    &nbsp;
                                </span>
                                ${name}: ${value.toLocaleString()}
                            </div>`;
                },
                grouped: false,
                init: {
                    x: 100,
                },
            },
            legend: { show: false },
            bindto: chartRef.current,
        });
        const handleResize = setChartXCount(chartObj, categories, chartRef);
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, [
        categoryIndexes,
        chart,
        id,
        order,
        size,
        table,
        theme.bg,
        theme.chart_tooltip,
        type,
        xIndex,
    ]);

    return (
        <div className={theme.chart_area}>
            <div id={id} style={{ height: '100%' }} ref={chartRef} />
        </div>
    );
};

export default Line;

import { useEffect, useRef } from 'react';
import bb, { bar } from 'billboard.js';
import Theme from '@utils/Theme';
import '@assets/entry/scss/widget/insight.css';
import { GRAPH_COLOR } from '@constants/dataAnalytics';
import {
    getOrderedTable,
    isDrawable,
    deduplicationColumn,
    getMouseOverStyle,
} from '@utils/dataAnalytics';
import _map from 'lodash/map';
import _unzip from 'lodash/unzip';
import _findIndex from 'lodash/findIndex';

const Bar = ({ chart, table, size }) => {
    const theme = Theme.getStyle('popup');
    const chartRef = useRef(null);
    const { id, xIndex = -1, order, categoryIndexes = [], type } = chart;

    useEffect(() => {
        if (!isDrawable(chart)) {
            return;
        }

        const isAddedOption = xIndex === table[0].length;
        const orderedTable = getOrderedTable({ table, xIndex, isAddedOption, order });
        const columns = deduplicationColumn(
            [...categoryIndexes].map((index) => _unzip(orderedTable)[index])
        );

        bb.generate({
            id,
            size,
            color: {
                pattern: GRAPH_COLOR[type],
            },
            data: {
                columns,
                type: bar(),
            },
            axis: {
                x: {
                    type: 'category',
                    clipPath: false,
                    categories: orderedTable
                        .slice(1)
                        .map((row, index) => (isAddedOption ? index + 1 : row[xIndex])),
                    tick: {
                        fit: true,
                        multiline: false,
                        autorotate: orderedTable.length <= 16,
                        rotate: orderedTable.length <= 16 ? 15 : null,
                        culling: orderedTable.length > 16,
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
    }, []);

    return (
        <div className={theme.chart_area}>
            <div id={id} style={{ height: '100%' }} ref={chartRef} />
        </div>
    );
};

export default Bar;

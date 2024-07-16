import { useEffect, useRef } from 'react';
import bb from 'billboard.js';
import Theme from '@utils/Theme';
import '@assets/entry/scss/widget/insight.css';
import { GRAPH_COLOR } from '@constants/dataAnalytics';
import { getPieChart, isDrawable, getMouseOverStyle } from '@utils/dataAnalytics';
import { CommonUtils } from '@utils/Common';
import _floor from 'lodash/floor';

const Pie = ({ table, chart, size }) => {
    const theme = Theme.getStyle('popup');
    const chartRef = useRef(null);
    const { id, xIndex = -1, categoryIndexes = [], type } = chart;

    useEffect(() => {
        if (!isDrawable(chart)) {
            return;
        }

        const isAddedOption = categoryIndexes[0] === table[0].length;
        const pieChart = getPieChart(table, xIndex, categoryIndexes[0]);

        bb.generate({
            id,
            size,
            color: {
                pattern: GRAPH_COLOR[type],
            },
            data: {
                x: table[0][xIndex],
                columns: [
                    pieChart[0],
                    ...pieChart.slice(1).map((value, index) => [index, value[1]]),
                ],
                type: 'pie',
            },
            axis: {
                x: {
                    type: 'category',
                    tick: {
                        fit: true,
                        multiline: false,
                        autorotate: true,
                        culling: true,
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
                    const [{ name, ratio, value }] = data;

                    return `
                            <div class="${theme.chart_tooltip}">
                                <span
                                    className="${theme.bg}"
                                    style="${getMouseOverStyle(type, name)}"
                                >
                                    &nbsp;
                                </span>
                                ${pieChart[Number(name) + 1][0]} | ${_floor(ratio * 100)}% (${
                        isAddedOption
                            ? CommonUtils.getLang('DataAnalytics.quantity')
                            : table[0][categoryIndexes[0]]
                    }: ${value.toLocaleString()})
                            </div>`;
                },
                init: {
                    x: 100,
                },
            },
            legend: { show: false },
            bindto: chartRef.current,
        });
    }, [categoryIndexes, chart, id, size, table, theme.bg, theme.chart_tooltip, type, xIndex]);

    return (
        <div className={theme.chart_area}>
            <div id={id} style={{ height: '100%' }} ref={chartRef} />
        </div>
    );
};

export default Pie;

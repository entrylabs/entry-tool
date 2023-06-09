import { useState } from 'react';
import Plotly from 'react-plotly.js';
import Theme from '@utils/Theme';
import { corr } from '@utils/dataAnalytics';

const getColumn = (table, index, wrapper = (x) => x) => table.map((field) => wrapper(field[index]));
const getColumns = (table, indexes, wrapper = (x) => x) =>
    indexes.map((index) => table.map((field) => wrapper(field[index])));

const PlotlyChart = ({ table, chart, size: { width = 600, height = 328 } = {} }) => {
    const [overLaps, setOverlaps] = useState([]);
    const theme = Theme.getStyle('popup');
    const { categoryIndexes, coefficient } = chart;
    const dimensions = categoryIndexes.map((cIndex) => ({
        label: table[0][cIndex],
        values: getColumn(table.slice(1), cIndex),
        axis: {
            matches: true,
        },
    }));

    const axis = {
        color: '#2c313d',
        showline: true,
        zeroline: false,
        mirror: 'allticks',
        ticks: 'outside',
        tickcolor: '#2c313d',
        title: {
            font: {
                family: '나눔고딕, NanumGothic',
            },
        },
        tickfont: {
            family: '나눔고딕, NanumGothic',
        },
    };

    return (
        <div className={theme.chart_area} style={{ width, margin: '0 auto' }}>
            <Plotly
                data={[
                    {
                        type: 'splom',
                        dimensions,
                        marker: { size: 5, color: '#4f80ff' },
                        autosize: false,
                        mode: 'markers',
                    },
                ]}
                onInitialized={(figure, graphDiv) => {
                    const indexLength = categoryIndexes.length;
                    const gridLayer = graphDiv.getElementsByClassName('nsewdrag');
                    const layers = Array.prototype.map
                        .call(gridLayer, (layer, i) => {
                            const y = i % indexLength;
                            const x = Math.floor(i / indexLength);
                            const left = `${layer.attributes.x.textContent}px`;
                            const top = `${layer.attributes.y.textContent}px`;
                            const width = layer.width.baseVal.value;
                            const height = layer.height.baseVal.value;
                            if (x === y) {
                                return (
                                    <div
                                        style={{
                                            top,
                                            width,
                                            height,
                                            left,
                                            position: 'absolute',
                                            backgroundColor: 'white',
                                        }}
                                    >
                                        <div
                                            style={{
                                                position: 'absolute',
                                                top: '50%',
                                                width: '100%',
                                                textAlign: 'center',
                                                transform: 'translateY(-50%)',
                                            }}
                                        >
                                            {dimensions[x].label}
                                        </div>
                                    </div>
                                );
                            } else if (x > y) {
                                const colX = categoryIndexes[x];
                                const colY = categoryIndexes[y];
                                const corrValue = corr(
                                    ...getColumns(table, [colY, colX]).map((column) =>
                                        column.slice(1)
                                    )
                                );
                                return (
                                    <div
                                        style={{
                                            top,
                                            width,
                                            height,
                                            left,
                                            position: 'absolute',
                                            backgroundColor: 'white',
                                        }}
                                    >
                                        <div
                                            style={{
                                                position: 'absolute',
                                                top: '50%',
                                                width: '100%',
                                                textAlign: 'center',
                                                transform: 'translateY(-50%)',
                                            }}
                                        >
                                            {corrValue}
                                        </div>
                                    </div>
                                );
                            }
                        })
                        .filter((x) => x);
                    setOverlaps(layers);
                }}
                layout={{
                    width,
                    height,
                    margin: {
                        l: 70,
                        r: 10,
                        b: 70,
                        t: 10,
                        pad: 2,
                    },
                    hovermode: false,
                    plot_bgcolor: 'rgba(240,240,240, 0.25)',
                    xaxis: axis,
                    yaxis: axis,
                    xaxis2: axis,
                    xaxis3: axis,
                    xaxis4: axis,
                    xaxis5: axis,
                    xaxis6: axis,
                    xaxis7: axis,
                    xaxis8: axis,
                    yaxis2: axis,
                    yaxis3: axis,
                    yaxis4: axis,
                    yaxis5: axis,
                    yaxis6: axis,
                    yaxis7: axis,
                    yaxis8: axis,
                }}
                config={{ displayModeBar: false }}
            />
            {coefficient && <div style={{ position: 'relative', float: 'left' }}>{overLaps}</div>}
        </div>
    );
};

export default PlotlyChart;

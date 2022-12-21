import Plotly from 'react-plotly.js';
import Theme from '@utils/Theme';
import { useCallback } from 'react';

const getColumn = (table, index, wrapper = (x) => x) => table.map((field) => wrapper(field[index]));

const PlotlyChart = ({ table, chart, size: { width = 600, height = 600 } = {} }) => {
    const theme = Theme.getStyle('popup');
    const { categoryIndexes } = chart;

    const dimensions = categoryIndexes.map((cIndex) => ({
        label: table[0][cIndex],
        values: getColumn(table.slice(1), cIndex),
        axis: {
            matches: true,
        },
    }));

    const axis = useCallback(() => {
        return {
            color: '#2c313d',
            zerolinecolor: '#2c313d',
        };
    }, []);

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
                layout={{
                    width,
                    height,
                    margin: {
                        l: 70,
                        r: 0,
                        b: 70,
                        t: 0,
                        pad: 2,
                    },
                    hovermode: false,
                    plot_bgcolor: 'rgba(240,240,240, 0.25)',
                    xaxis: axis(),
                    yaxis: axis(),
                    xaxis2: axis(),
                    xaxis3: axis(),
                    xaxis4: axis(),
                    xaxis5: axis(),
                    xaxis6: axis(),
                    xaxis7: axis(),
                    xaxis8: axis(),
                    yaxis2: axis(),
                    yaxis3: axis(),
                    yaxis4: axis(),
                    yaxis5: axis(),
                    yaxis6: axis(),
                    yaxis7: axis(),
                    yaxis8: axis(),
                }}
                config={{ displayModeBar: false }}
            />
        </div>
    );
};

export default PlotlyChart;

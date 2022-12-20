import Plotly from 'react-plotly.js';
import Theme from '@utils/Theme';

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
    return (
        <div className={theme.chart_area} style={{ width, margin: '0 auto' }}>
            <Plotly
                data={[
                    {
                        type: 'splom',
                        dimensions,
                        marker: { size: 5 },
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
                    plot_bgcolor: 'rgba(240,240,240, 0.25)',
                }}
                config={{ displayModeBar: false }}
            />
        </div>
    );
};

export default PlotlyChart;

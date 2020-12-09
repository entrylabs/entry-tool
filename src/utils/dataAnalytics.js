export const getChartAfterAddColumn = (charts, columnIndex) =>
    charts.map((chart) => {
        if (chart.xIndex >= columnIndex) {
            chart.xIndex++;
        }
        if (chart.yIndex >= columnIndex) {
            chart.yIndex++;
        }
        for (let i = 0; i < chart.categoryIndexes.length; i++) {
            if (chart.categoryIndexes[i] >= columnIndex) {
                chart.categoryIndexes[i]++;
            }
        }
        return chart;
    });

export const getChartAfterRemoveColumn = (charts, columnIndex) =>
    charts.map((chart) => {
        if (chart.xIndex == columnIndex) {
            chart.xIndex = -1;
            chart.yIndex = -1;
            chart.categoryIndexes = [];
        } else if (chart.xIndex > columnIndex) {
            chart.xIndex--;
        }
        if (chart.yIndex == columnIndex) {
            chart.yIndex = -1;
            chart.categoryIndexes = [];
        } else if (chart.yIndex > columnIndex) {
            chart.yIndex--;
        }
        for (let i = 0; i < chart.categoryIndexes.length; i++) {
            if (chart.categoryIndexes[i] == columnIndex) {
                chart.categoryIndexes.splice(i, 1);
            } else if (chart.categoryIndexes[i] > columnIndex) {
                chart.categoryIndexes[i]--;
            }
        }
        return chart;
    });

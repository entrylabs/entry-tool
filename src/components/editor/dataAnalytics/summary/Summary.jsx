import React from 'react';
import Table from './Table';
import ChartList from './ChartList';
import Theme from '@utils/Theme';

const Summary = () => {
    const theme = Theme.getStyle('popup');
    return (
        <div className={theme.chart_box}>
            <h2 className={theme.blind}>정보</h2>
            <div className={theme.inner}>
                <Table />
                <ChartList />
            </div>
        </div>
    );
};

export default Summary;

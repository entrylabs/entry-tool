import React from 'react';
import 'tui-grid/dist/tui-grid.css';
import Grid from '@toast-ui/react-grid';
import { getHeader, getData } from '@utils/Common';

const Table = (props) => {
    const {
        table = [],
        width = 500,
        bodyHeight = 200,
        columnOptions = {},
        rowHeight = 25,
        editor = 'text',
    } = props;
    const data = getData(table);
    const columns = getHeader(table, editor);

    return (
        <div>
            <Grid
                data={data}
                columns={columns}
                width={width}
                rowHeight={rowHeight}
                bodyHeight={bodyHeight}
                columnOptions={columnOptions}
                virtualScrolling={true}
                usageStatistics={false}
            />
        </div>
    );
};

export default Table;

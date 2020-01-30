import React from 'react';
import TableToolTip from '@components/tooltip/TableToolTip';
import { CommonUtils } from '@utils/Common';
import Styles from '@assets/entry/scss/popup.scss';

const Table = (props) => {
    const { summary } = props;
    const header = [
        ' ',
        'DataAnalytics.count',
        'DataAnalytics.average',
        'DataAnalytics.standard_deviation',
        'DataAnalytics.maximum',
        'DataAnalytics.median',
        'DataAnalytics.minimum',
    ];

    const tableBody = (table) =>
        table.map((row, index) => (
            <tr key={`row_${index}`}>
                {row.map((data, dIndex) =>
                    // eslint-disable-next-line prettier/prettier
                    (dIndex ? (
                        <td key={`row_${index}_data_${dIndex}`}>{data}</td>
                    ) : (
                        <th scope="row" key={`row_${index}_data_${dIndex}`}>
                            {data}
                        </th>
                        // eslint-disable-next-line prettier/prettier
                    ))
                )}
            </tr>
        ));

    const tableHeader = (tableHeader) =>
        tableHeader.map((name, index) => (
            <th scope="col" key={`summary_th_${index}`}>
                {index ? (
                    <div className={Styles.headtit} key={`summary_th_${index}_div`}>
                        {CommonUtils.getLang(name)}
                    </div>
                ) : (
                    CommonUtils.getLang(name)
                )}
            </th>
        ));

    return (
        <>
            <div className={Styles.title_box}>
                <strong>{CommonUtils.getLang('DataAnalytics.table')}</strong>
                <TableToolTip />
            </div>
            <div className={Styles.table_box}>
                <table className={Styles.table}>
                    <colgroup>
                        <col style={{ width: '99px' }} />
                        <col style={{ width: 'auto' }} />
                    </colgroup>
                    <thead>
                        <tr>{tableHeader(header)}</tr>
                    </thead>
                    <tbody>{tableBody(summary)}</tbody>
                </table>
            </div>
        </>
    );
};

export default Table;

import React from 'react';
import TableToolTip from '@components/tooltip/TableToolTip';
import { CommonUtils } from '@utils/Common';
import Styles from '@assets/entry/scss/popup.scss';

const Table = (props) => {
    const { summary, title, table } = props;
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
                <p className={Styles.title_dsc}>{title}</p>
            </div>

            <ul className={Styles.cnt_result}>
                <li>{`${CommonUtils.getLang('DataAnalytics.row')} ${table.length -
                    1}${CommonUtils.getLang('DataAnalytics.row_count')}`}</li>
                <li>{`${CommonUtils.getLang('DataAnalytics.attribute')} ${
                    summary.length
                }${CommonUtils.getLang('DataAnalytics.attribute_count')}`}</li>
                <li>{`${CommonUtils.getLang('DataAnalytics.cell')} ${summary.length *
                    (table.length - 1)}${CommonUtils.getLang('DataAnalytics.cell_count')}`}</li>
            </ul>
            <div className={Styles.table_box}>
                <table className={Styles.table}>
                    <colgroup>
                        <col style={{ width: '175px' }} />
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

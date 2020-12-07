import React, { useContext } from 'react';
import { DataAnalyticsContext } from '@contexts/dataAnalytics';
import TableToolTip from '@components/tooltip/TableToolTip';
import { CommonUtils, getSummary } from '@utils/Common';
import { SUMMARY_HEADER } from '@constants/dataAnalytics';
import _map from 'lodash/map';
import Theme from '@utils/Theme';

const Table = () => {
    const theme = Theme.getStyle('popup');
    const { dataAnalytics } = useContext(DataAnalyticsContext);
    const { selected = {} } = dataAnalytics;
    const { fields = [], origin = [] } = selected;
    const table = [[...fields], ...origin];
    const summary = getSummary(table) || [];

    return (
        <div className={theme.category_box}>
            <div className={theme.table_sjt}>
                <strong>{CommonUtils.getLang('DataAnalytics.table')}</strong>
                <TableToolTip />
                <p className={theme.title_dsc}>
                    새로운 테이블에서 열을 기준으로 한 기초 통계량입니다.
                </p>
            </div>
            <ul className={theme.table_info}>
                <li>{`${CommonUtils.getLang('DataAnalytics.row')} ${table.length -
                    1}${CommonUtils.getLang('DataAnalytics.row_count')}`}</li>
                <li>{`${CommonUtils.getLang('DataAnalytics.attribute')} ${
                    summary.length
                }${CommonUtils.getLang('DataAnalytics.attribute_count')}`}</li>
                <li>{`${CommonUtils.getLang('DataAnalytics.cell')} ${summary.length *
                    (table.length - 1)}${CommonUtils.getLang('DataAnalytics.cell_count')}`}</li>
            </ul>
            <div className={theme.table_box}>
                <table className={theme.table}>
                    <colgroup>
                        <col style={{ width: 140 }} />
                        <col style={{ width: 150 }} />
                        <col style={{ width: 150 }} />
                        <col style={{ width: 150 }} />
                        <col style={{ width: 150 }} />
                        <col style={{ width: 150 }} />
                    </colgroup>

                    <thead>
                        <tr>
                            {_map(SUMMARY_HEADER, (name, index) => (
                                <th scope="col" key={`summary_th_${index}`}>
                                    {index ? (
                                        <div
                                            className={theme.headtit}
                                            key={`summary_th_${index}_div`}
                                        >
                                            {CommonUtils.getLang(name)}
                                        </div>
                                    ) : (
                                        CommonUtils.getLang(name)
                                    )}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {_map(summary, (row, index) => (
                            <tr key={`row_${index}`}>
                                {_map(row, (data, dIndex) =>
                                    dIndex ? (
                                        <td key={`row_${index}_data_${dIndex}`}>{data}</td>
                                    ) : (
                                        <th scope="row" key={`row_${index}_data_${dIndex}`}>
                                            {data}
                                        </th>
                                    )
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;

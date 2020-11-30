import React, { useContext } from 'react';
import { DataAnalyticsContext } from '@contexts/dataAnalytics';
import TableToolTip from '@components/tooltip/TableToolTip';
import { CommonUtils } from '@utils/Common';
import Styles from '@assets/entry/scss/popup.scss';

const Table = () => {
    const { dataAnalytics } = useContext(DataAnalyticsContext);
    const { selected } = dataAnalytics;
    const { table, title, charts, summary: info } = selected;
    return (
        <div className={Styles.category_box}>
            <div className={Styles.table_sjt}>
                <strong>테이블</strong>
                <div className={Styles.q_box}>
                    <a className={Styles.ico_q}>
                        <span className={Styles.blind}>도움말</span>
                    </a>
                    {/* 도움말을 클릭하면 display: block 처리 해주세요 */}
                    <div className={Styles.tooltip_box} style={{ display: 'none' }}>
                        <div className={Styles.tooltip_inner}>
                            <strong className={Styles.sjt}>
                                숫자가 아닌 값이 포함된 속성은 개수만 확인할 수 있습니다.
                            </strong>
                            <ul className={Styles.tooltip_list}>
                                <li>
                                    <em className={Styles.tit}>평균</em>
                                    <p className={Styles.dsc}>
                                        해당 속성의 모든 값을 더한 후 속성의 개수 만큼 나눈 값
                                    </p>
                                </li>
                                <li>
                                    <em className={Styles.tit}>표준 편차</em>
                                    <p className={Styles.dsc}>
                                        데이터가평균을 중심으로 얼마나 퍼져있는지 알려주는 값.
                                        <br />
                                        0에 가까울 수록 값들이 평균 근처에 집중되어 있다는 것을 의미
                                    </p>
                                </li>
                                <li>
                                    <em className={Styles.tit}>최댓값/최솟값</em>
                                    <p className={Styles.dsc}>
                                        해당 속성의 가장 큰 값과 가장 작은 값
                                    </p>
                                </li>
                                <li>
                                    <em className={Styles.tit}>하위 25, 50, 75%</em>
                                    <p className={Styles.dsc}>
                                        해당 속성의 최솟값을 0%, 최댓값을
                                        <br />
                                        100%라고 치환했을 때 각 크기에 해당하는 값
                                    </p>
                                </li>
                                <li>
                                    <em className={Styles.tit}>중간값</em>
                                    <p className={Styles.dsc}>
                                        해당 속성의 모든 값을 크기순으로 배열했을 때<br />
                                        전체의 중앙에 위치하는 값
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <span className={`${Styles.arr} ${Styles.free}`} style={{ left: '40px' }}>
                            <i></i>
                        </span>
                    </div>
                </div>
                <p className={Styles.title_dsc}>
                    새로운 테이블에서 열을 기준으로 한 기초 통계량입니다.
                </p>
            </div>
            <ul className={Styles.table_info}>
                <li>행 0개</li>
                <li>열 0개</li>
                <li>칸 0개</li>
            </ul>
            <div className={Styles.table_box}>
                {/* 셀의 갯수가 많을 경우 table의 총 너비를 계산해주세요. */}
                <table className={Styles.table}>
                    <colgroup>
                        <col style={{ width: 140 }} />
                        {/* 셀의 갯수만큼 col의 갯수를 늘려주세요. */}
                        <col style={{ width: 150 }} />
                        <col style={{ width: 150 }} />
                        <col style={{ width: 150 }} />
                        <col style={{ width: 150 }} />
                        <col style={{ width: 150 }} />
                    </colgroup>
                    <thead>
                        <tr>
                            <th scope="col">
                                <div className={Styles.thead_tit}>&nbsp;</div>
                            </th>
                            <th scope="col">
                                <div className={Styles.thead_tit}>평균</div>
                            </th>
                            <th scope="col">
                                <div className={Styles.thead_tit}>표준편차</div>
                            </th>
                            <th scope="col">
                                <div className={Styles.thead_tit}>최대값</div>
                            </th>
                            <th scope="col">
                                <div className={Styles.thead_tit}>중간값</div>
                            </th>
                            <th scope="col">
                                <div className={Styles.thead_tit}>최솟값</div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">
                                <div className={Styles.thead_tit}>-</div>
                            </th>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};
const Table2 = (props) => {
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
                    dIndex ? (
                        <td key={`row_${index}_data_${dIndex}`}>{data}</td>
                    ) : (
                        <th scope="row" key={`row_${index}_data_${dIndex}`}>
                            {data}
                        </th>
                        // eslint-disable-next-line prettier/prettier
                    )
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

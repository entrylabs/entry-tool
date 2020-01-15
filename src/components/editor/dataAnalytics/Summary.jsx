import React from 'react';
import flow from 'lodash/fp/flow';
import map from 'lodash/fp/map';
import unzip from 'lodash/fp/unzip';
import TitleInput from '@components/editor/dataAnalytics/TitleInput';
import TableToolTip from '@components/tooltip/TableToolTip';
import { someString } from '@utils/Common';

import Styles from '@assets/entry/scss/popup.scss';
import Chart from '@components/widget/Chart';

const getAverage = (array) => array.reduce((sum, value) => sum + Number(value), 0) / array.length;
const getStandardDeviation = (arr, average) =>
    Math.sqrt(arr.reduce((acc, curr) => acc + Math.pow(curr - average, 2), 0) / arr.length);
const makeSummary = (row) => {
    const restRow = row.slice(1);
    const count = restRow.length;
    if (someString(restRow)) {
        return [row[0], count, '-', '-', '-', '-', '-', '-', '-', '-'];
    }
    const max = Math.max(...restRow);
    const min = Math.min(...restRow);
    const average = getAverage(restRow);

    return [
        row[0],
        count,
        average,
        getStandardDeviation(restRow, average),
        max,
        min + ((max - min) / 4) * 3,
        min + (max - min) / 2,
        min + (max - min) / 4,
        min,
        restRow.sort((a, b) => a - b)[Math.floor((restRow.length - 1) / 2)],
    ];
};
const getSummary = flow(unzip, map(makeSummary));

const Summary = (props) => {
    const {
        table = [[]],
        title,
        charts = [{ type: 'bar' }, { type: 'line' }, { type: 'pie' }, { type: 'scatter' }],
    } = props;
    const summary = getSummary(table);
    const tableHeader = [
        ' ',
        '개수',
        '평균',
        '표준편차',
        '최대값',
        '75%',
        '50%',
        '25%',
        '최소값',
        '중간값',
    ];

    const handleMouseEnter = (event) => {
        event.currentTarget.className = Styles.on;
    };

    const handleMouseLeave = (event) => {
        event.currentTarget.className = '';
    };

    const makeTableBody = (table) =>
        table.map((row, index) => (
            <tr key={`row_${index}`}>
                {row.map((data, dIndex) =>
                    dIndex ? (
                        <td key={`row_${index}_data_${dIndex}`}>{data}</td>
                    ) : (
                        <th scope="row" key={`row_${index}_data_${dIndex}`}>
                            {data}
                        </th>
                    )
                )}
            </tr>
        ));

    const makeChartList = (charts) =>
        charts.map((chart, index) => (
            <li
                key={`chart_${index}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <Chart
                    type={chart.type}
                    table={table}
                    size={{
                        width: 236,
                        height: 140,
                    }}
                />
            </li>
        ));

    const makeTableHeader = (tableHeader) =>
        tableHeader.map((name, index) => (
            <th scope="col" key={`summary_th_${index}`}>
                {index ? (
                    <div className={Styles.headtit} key={`summary_th_${index}_div`}>
                        {name}
                    </div>
                ) : (
                    name
                )}
            </th>
        ));

    return (
        <>
            <h2 className={Styles.blind}>요약</h2>
            <div className={Styles.content_box}>
                <div className={Styles.input_box}>
                    <TitleInput title={title} />
                    <ul className={Styles.cnt_result}>
                        <li>속성 {summary.length}개</li>
                        <li>행 {table.length - 1}행</li>
                        <li>값 {summary.length * (table.length - 1)}개</li>
                    </ul>
                </div>

                <div className={Styles.cont_inner}>
                    <div className={Styles.title_box}>
                        <strong>테이블</strong>
                        <TableToolTip />
                    </div>
                    <div className={Styles.table_box}>
                        <table className={Styles.table}>
                            <colgroup>
                                <col style={{ width: '99px' }} />
                                <col style={{ width: 'auto' }} />
                            </colgroup>
                            <thead>
                                <tr>{makeTableHeader(tableHeader)}</tr>
                            </thead>
                            <tbody>{makeTableBody(summary)}</tbody>
                        </table>
                    </div>
                    <div className={Styles.title_box}>
                        <strong>차트</strong>
                    </div>
                    <div className={Styles.chart_list}>
                        {/* {li(140px) + margin-left: 12} * n(li 갯수) 를 더한 값을 width값에 부여해주세요. */}
                        <ul className={Styles.list} style={{ width: '1476px' }}>
                            {/* 리스트가 선택되면 on 클래스 추가 */}
                            {/* <li className={Styles.on}>그래프를 넣어주세요</li> */}
                            {makeChartList(charts)}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Summary;

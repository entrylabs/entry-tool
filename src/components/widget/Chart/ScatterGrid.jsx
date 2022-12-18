import React from 'react';
import Theme from '@utils/Theme';

const ScatterGrid = ({ table, chart, size }) => {
    const theme = Theme.getStyle('popup');
    const { categoryIndexes, id } = chart;
    return (
        <>
            {categoryIndexes.map((yAxis, xIndex) => {
                categoryIndexes.map((xAxis, yIndex) => (
                    <div className={theme.graph} key={`${id}-${xIndex}-${yIndex}`}>
                        <strong className={theme.graph_title}>
                            <span className={theme.blind}>속성 이름</span>부리 길이
                        </strong>
                        {yIndex === 0 ? (
                            <>
                                <span className={theme.axis_x}>
                                    <span className={theme.blind}>x축 속성 이름</span>
                                    {table[0][yAxis]}
                                </span>
                                <dl className={theme.axis_list_x}>
                                    <dt className={theme.blind}>x축</dt>
                                    <dd>12.3K</dd>
                                    <dd>9999</dd>
                                    <dd>12</dd>
                                    <dd>0</dd>
                                </dl>
                            </>
                        ) : null}
                        {xIndex === categoryIndexes.length - 1 ? (
                            <>
                                <span className={theme.axis_y}>
                                    <span className={theme.blind}>y축 속성 이름</span>
                                    {table[0][xAxis]}
                                </span>
                                <dl className={theme.axis_list_y}>
                                    <dt className={theme.blind}>y축</dt>
                                    <dd>8000</dd>
                                    <dd>12</dd>
                                    <dd>0</dd>
                                </dl>
                            </>
                        ) : null}
                    </div>
                ));
            })}
        </>
    );
};

export default ScatterGrid;

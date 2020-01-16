import React, { useState } from 'react';
import Chart from '@components/widget/Chart';
import Styles from '@assets/entry/scss/popup.scss';
import ChartNavigation from './ChartNavigation';

const ChartEditor = (props) => {
    const { table, charts, selected: selectedProp = 0 } = props;
    const [selected, setSelected] = useState(selectedProp);

    const handleClick = (index) => (event) => {
        event.preventDefault();
        setSelected(index);
    };

    const selectedChart = charts[selected];

    return (
        <section className={`${Styles.detail_cont} ${Styles.chart_state}`}>
            {/* [D] 메뉴 카테고리 선택에 따라 텍스트 변경  */}
            <h2 className={Styles.blind}>차트</h2>
            <ChartNavigation charts={charts} onClickItem={handleClick} />
            <div className={Styles.content_box}>
                <div className={Styles.input_box}>
                    <div className={Styles.input_inner}>
                        <input type="text" id="data1" name="data1" />
                        {/* 인풋에 내용이 들어가면 close_btn을 활성화 해주세요 */}
                        <a href="#" className={Styles.close_btn} role="button">
                            <span className={Styles.blind}>입력 취소</span>
                        </a>
                    </div>
                    <div className={Styles.input_inner}>
                        <input type="text" id="data2" name="data2" />
                        {/* 인풋에 내용이 들어가면 close_btn을 활성화 해주세요 */}
                        <a href="#" className={Styles.close_btn} role="button">
                            <span className={Styles.blind}>입력 취소</span>
                        </a>
                    </div>
                </div>
                <div className={Styles.cont_inner}>
                    <div className={Styles.chart_box}>
                        {/* <div id="hihi" /> */}
                        <Chart
                            type={selectedChart.type}
                            table={table}
                            xIndex={selectedChart.xAxis}
                            yIndexs={selectedChart.yIndexs}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChartEditor;

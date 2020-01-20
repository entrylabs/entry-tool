import React, { useState } from 'react';
import Chart from '@components/widget/Chart';
import Styles from '@assets/entry/scss/popup.scss';
import Navigation from './Navigation';
import TitleInput from '../TitleInput';
import { CommonUtils } from '@utils/Common';
const { generateHash } = CommonUtils;

const ChartEditor = (props) => {
    const {
        table = [[]],
        charts = [],
        selected: propsSelected = 0,
        title = '',
        onChangeTitle = () => {},
    } = props;
    const [selected, setSelected] = useState(propsSelected);

    const handleClickItem = (index) => (event) => {
        event.preventDefault();
        setSelected(index);
    };

    return (
        <section className={`${Styles.detail_cont} ${Styles.chart_state}`}>
            <h2 className={Styles.blind}>차트</h2>
            <Navigation selected={selected} charts={charts} onClickItem={handleClickItem} />
            {charts.length ? (
                <div className={Styles.content_box}>
                    <div className={Styles.input_box}>
                        <TitleInput title={title} onChangeTitle={onChangeTitle} />
                        <TitleInput key={`c${generateHash()}`} title={charts[selected].title} />
                    </div>
                    <div className={Styles.cont_inner}>
                        <div className={Styles.chart_box}>
                            <Chart
                                key={`c${generateHash()}`}
                                type={charts[selected].type}
                                table={table}
                                xIndex={charts[selected].xAxis}
                                yIndexs={charts[selected].yIndexs}
                            />
                        </div>
                    </div>
                </div>
            ) : (
                <div>차트를 추가해주세요</div>
            )}
        </section>
    );
};

export default ChartEditor;

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
        if (index !== -1) {
            setSelected(index);
        }
    };

    const chartTitle = (charts[selected] && charts[selected].title) || `${title}_차트 제목`;

    return (
        <section className={`${Styles.detail_cont} ${Styles.chart_state}`}>
            <h2 className={Styles.blind}>차트</h2>
            <Navigation selected={selected} charts={charts} onClickItem={handleClickItem} />
            {charts.length ? (
                <div className={Styles.content_box}>
                    <div className={Styles.input_box}>
                        <TitleInput title={title} onChangeTitle={onChangeTitle} />
                        <TitleInput key={`c${generateHash()}`} title={chartTitle} />
                    </div>
                    <div className={Styles.cont_inner}>
                        <div className={Styles.chart_box}>
                            <Chart
                                key={`c${generateHash()}`}
                                table={table}
                                chart={charts[selected] || {}}
                                size={{ height: 552 }}
                                legend={{ show: false }}
                            />
                            <div className={Styles.x_legend}>
                                <a href="#">학교명</a>
                                {/* 학교명이 클릭되면 style="display:block" 추가 */}
                                <div
                                    className={`${Styles.tooltip_box} ${Styles.down}`}
                                    style={{ display: 'block' }}
                                >
                                    <div className={Styles.tooltip_inner}>
                                        <ul className={Styles.select_list}>
                                            <li className={Styles.list_item}>
                                                <div className={Styles.list_link}>구분</div>
                                            </li>
                                            <li className={Styles.list_item}>
                                                <div className={Styles.list_link}>학교명</div>
                                            </li>
                                            <li className={Styles.list_item}>
                                                <div className={Styles.list_link}>주소</div>
                                            </li>
                                            <li className={Styles.list_item}>
                                                <div className={Styles.list_link}>교무실</div>
                                            </li>
                                        </ul>
                                    </div>
                                    <span className={Styles.arr}>
                                        <i />
                                    </span>
                                </div>
                            </div>
                            <div className={Styles.legend_box}>
                                <a href="#" className={Styles.legend_link}>
                                    범례
                                </a>
                                {/* 학교명이 클릭되면 style="display:block" 추가 */}
                                <div className={Styles.tooltip_box} style={{ display: 'block' }}>
                                    <div className={Styles.tooltip_inner}>
                                        <ul className={Styles.select_list}>
                                            <li className={Styles.list_item}>
                                                <div className={Styles.chk_box}>
                                                    <input type="checkbox" id="chk1" name="chk1" />
                                                    <label htmlFor="chk1">범례1</label>
                                                </div>
                                            </li>
                                            <li className={Styles.list_item}>
                                                <div className={Styles.chk_box}>
                                                    <input type="checkbox" id="chk2" name="chk2" />
                                                    <label htmlFor="chk2">범례2</label>
                                                </div>
                                            </li>
                                            <li className={Styles.list_item}>
                                                <div className={Styles.chk_box}>
                                                    <input type="checkbox" id="chk3" name="chk3" />
                                                    <label htmlFor="chk3">범례3</label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <span className={Styles.arr}>
                                        <i />
                                    </span>
                                </div>
                                <ul className={Styles.legend_list}>
                                    <li>
                                        {/* 그래프 색상 값을 넣어주세요. */}
                                        <span
                                            className={Styles.color}
                                            style={{ backgroundColor: '#4f80ff' }}
                                        >
                                            &nbsp;
                                        </span>
                                        예시1
                                    </li>
                                    <li>
                                        {/* 그래프 색상 값을 넣어주세요. */}
                                        <span
                                            className={Styles.color}
                                            style={{ backgroundColor: '#ffb500' }}
                                        >
                                            &nbsp;
                                        </span>
                                        예시2
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>차트를 먼저 추가해주세요</div>
            )}
        </section>
    );
};

export default ChartEditor;

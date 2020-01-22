import React from 'react';
import Styles from '@assets/entry/scss/popup.scss';

const Legend = (props) => {
    const { list } = props;

    return (
        <div className={Styles.legend_box}>
            <a href="#" className={Styles.legend_link}>
                범례
            </a>
            {/* 학교명이 클릭되면 style="display:block" 추가 */}
            {/* <div className={Styles.tooltip_box} style={{ display: 'block' }}> */}
            {/* <div className={Styles.tooltip_inner}>
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
                </div> */}
            {/* <span className={Styles.arr}>
                    <i />
                </span> */}
            {/* </div> */}
            <ul className={Styles.legend_list}>
                <li>
                    {/* 그래프 색상 값을 넣어주세요. */}
                    <span className={Styles.color} style={{ backgroundColor: '#4f80ff' }}>
                        &nbsp;
                    </span>
                    예시1
                </li>
                <li>
                    {/* 그래프 색상 값을 넣어주세요. */}
                    <span className={Styles.color} style={{ backgroundColor: '#ffb500' }}>
                        &nbsp;
                    </span>
                    예시2
                </li>
                <li>
                    {/* 그래프 색상 값을 넣어주세요. */}
                    <span className={Styles.color} style={{ backgroundColor: '#ffb500' }}>
                        &nbsp;
                    </span>
                    예시2
                </li>
                <li>
                    {/* 그래프 색상 값을 넣어주세요. */}
                    <span className={Styles.color} style={{ backgroundColor: '#ffb500' }}>
                        &nbsp;
                    </span>
                    예시2
                </li>
                <li>
                    {/* 그래프 색상 값을 넣어주세요. */}
                    <span className={Styles.color} style={{ backgroundColor: '#ffb500' }}>
                        &nbsp;
                    </span>
                    예시2
                </li>
                <li>
                    {/* 그래프 색상 값을 넣어주세요. */}
                    <span className={Styles.color} style={{ backgroundColor: '#ffb500' }}>
                        &nbsp;
                    </span>
                    예시2
                </li>
            </ul>
        </div>
    );
};

export default Legend;

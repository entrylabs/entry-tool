import React from 'react';

import Styles from '@assets/entry/scss/popup.scss';

const Axis = (props) => {
    const { list } = props;
    return (
        <div className={Styles.x_legend}>
            <a href="#">학교명</a>
            {/* 학교명이 클릭되면 style="display:block" 추가 */}
            <div className={`${Styles.tooltip_box} ${Styles.down}`} style={{ display: 'block' }}>
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
    );
};

export default Axis;

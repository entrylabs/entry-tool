import React, { useState } from 'react';

import Styles from '@assets/entry/scss/popup.scss';

const TableToolTip = () => {
    const [showHelp, setShowHelp] = useState('none');

    const handleClickHelp = (event) => {
        event.preventDefault();
        setShowHelp(showHelp === 'none' ? 'block' : 'none');
    };

    return (
        <div className={Styles.q_box}>
            <a href="#" className={Styles.ico_q} onClick={handleClickHelp}>
                <span className={Styles.blind}>도움말</span>
            </a>
            <div className={Styles.tooltip_box} style={{ display: showHelp }}>
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
                            <p className={Styles.dsc}>해당 속성의 가장 큰 값과 가장 작은 값</p>
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
    );
};

export default TableToolTip;

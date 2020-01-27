import React, { useContext } from 'react';
import { DataAnalyticsContext } from '../context/DataAnalyticsContext';
import { GRAPH_COLOR } from '@components/editor/dataAnalytics/Constants';
import { CommonUtils } from '@utils/Common';

import Styles from '@assets/entry/scss/popup.scss';

const { generateHash } = CommonUtils;

const CategoryLi = (props) => {
    const { category } = props;

    return category.map((item, index) => (
        <li key={`cate_${generateHash()}`}>
            {/* 그래프 색상 값을 넣어주세요. */}
            <span
                className={Styles.color}
                style={{ backgroundColor: GRAPH_COLOR[index % GRAPH_COLOR.length] }}
            >
                &nbsp;
            </span>
            {item}
        </li>
    ));
};

const Legend = (props) => {
    const { checkBox, disable, categoryIndexes = [], category = [] } = props;
    const { dataAnalytics } = useContext(DataAnalyticsContext);
    const { table } = dataAnalytics;
    const labels = checkBox ? category.map((index) => table[0][index]) : category;
    const className = disable
        ? `${Styles.common_legend} ${Styles.disabled}`
        : `${Styles.common_legend}`;

    return (
        <div className={Styles.legend_box}>
            <a href="#" className={className}>
                {checkBox ? '범례' : table[0][categoryIndexes[0]]}
            </a>
            {/* 범례 체크박스에 선택되면 활성화 시켜주세요 */}
            <ul className={Styles.legend_list}>
                <CategoryLi category={labels} />
            </ul>
        </div>
    );
};

export default Legend;

import React, { useContext } from 'react';
import { DataAnalyticsContext } from '@contexts/dataAnalytics';
import _ceil from 'lodash/ceil';
import _floor from 'lodash/floor';
import _round from 'lodash/round';
import _forEach from 'lodash/forEach';
import { getBinWidth } from '@utils/dataAnalytics';
import Theme from '@utils/Theme';

const Range = () => {
    const theme = Theme.getStyle('popup');
    const { dataAnalytics } = useContext(DataAnalyticsContext);
    const { selected = {} } = dataAnalytics;
    const { table, chart = [], chartIndex = 0 } = selected;
    const { categoryIndexes = [], bin = 5, boundary = 'left' } = chart[chartIndex];
    const { width } = getBinWidth(table, categoryIndexes, boundary, bin);

    return (
        <div className={theme.select_group} style={{ marginLeft: 30 }}>
            <label htmlFor="CntWidth" className={theme.tit_label}>
                계급 폭
            </label>
            {/* 계급 폭이 비활성일 때 disabled 클래스 추가 */}
            <div className={`${theme.cnt_width} ${theme.disabled}`}>
                {/* 위 disabled 클래스가 추가되면 input 요소에 readOnly 추가 */}
                <input
                    type="text"
                    className={theme.input}
                    id="Cnt"
                    name="Cnt"
                    defaultValue={width}
                    readOnly
                />
            </div>
        </div>
    );
};

export default Range;

import React, { useContext } from 'react';
import { DataAnalyticsContext } from '@contexts/dataAnalytics';
import _ceil from 'lodash/ceil';
import _floor from 'lodash/floor';
import _round from 'lodash/round';
import _forEach from 'lodash/forEach';
import { getBinWidth } from '@utils/dataAnalytics';
import { CommonUtils } from '@utils/Common';
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
                {CommonUtils.getLang('DataAnalytics.bin_width')}
            </label>
            <div className={`${theme.cnt_width} ${theme.disabled}`}>
                <input
                    type="text"
                    className={theme.input}
                    id="Cnt"
                    name="Cnt"
                    defaultValue={_round(width, 1)}
                    readOnly
                />
            </div>
        </div>
    );
};

export default Range;

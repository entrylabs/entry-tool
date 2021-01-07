import React, { useContext, useCallback } from 'react';
import { DataAnalyticsContext } from '@contexts/dataAnalytics';
import Theme from '@utils/Theme';

const Title = ({ title }) => {
    const theme = Theme.getStyle('popup');
    const { dataAnalytics, dispatch } = useContext(DataAnalyticsContext);
    const { list } = dataAnalytics;

    const handleBlur = (event) => {
        event.preventDefault();
        dispatch({ type: 'CHANGE_TABLE_TITLE', value: event.target.value });
    };

    return (
        <input
            type="text"
            name="sheet_sjt"
            className={theme.input}
            disabled={!list.length}
            onBlur={handleBlur}
            defaultValue={title}
        />
    );
};

export default Title;

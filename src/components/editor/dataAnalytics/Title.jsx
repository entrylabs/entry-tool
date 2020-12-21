import React, { useContext, useCallback } from 'react';
import { DataAnalyticsContext } from '@contexts/dataAnalytics';
import Theme from '@utils/Theme';

const Title = () => {
    const theme = Theme.getStyle('popup');
    const { dataAnalytics, dispatch } = useContext(DataAnalyticsContext);
    const { selected = {}, list } = dataAnalytics;
    const { name = '' } = selected;

    const handleChange = useCallback((event) => {
        event.preventDefault();
        dispatch({
            type: 'CHANGE_TABLE_TITLE',
            value: event.target.value,
        });
    }, []);

    return (
        <input
            type="text"
            name="sheet_sjt"
            className={theme.input}
            disabled={!list.length}
            onChange={handleChange}
            value={name}
        />
    );
};

export default Title;

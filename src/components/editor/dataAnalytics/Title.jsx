import React, { useState, useContext, useCallback } from 'react';
import { DataAnalyticsContext } from '@contexts/dataAnalytics';
import Theme from '@utils/Theme';

const Title = () => {
    const theme = Theme.getStyle('popup');
    const { dataAnalytics, dispatch } = useContext(DataAnalyticsContext);
    const { selected = {} } = dataAnalytics;
    const { name = '' } = selected;
    const [title, setTitle] = useState(name);

    const handleChange = useCallback((event) => {
        event.preventDefault();
        setTitle(event.target.value);
    }, []);

    const handleBlur = useCallback(
        (event) => {
            event.preventDefault();
            dispatch({
                type: 'CHANGE_TABLE_TITLE',
                value: title,
            });
        },
        [title]
    );

    return (
        <input
            type="text"
            name="sheet_sjt"
            className={theme.input}
            defaultValue={title}
            disabled={!selected.id}
            onChange={handleChange}
            onBlur={handleBlur}
        />
    );
};

export default Title;

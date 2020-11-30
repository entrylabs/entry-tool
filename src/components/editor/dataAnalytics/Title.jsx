import React, { useState, useContext, useCallback } from 'react';
import { DataAnalyticsContext } from '@contexts/dataAnalytics';
import Styles from '@assets/entry/scss/popup.scss';

const Title = () => {
    const { dataAnalytics, dispatch } = useContext(DataAnalyticsContext);
    const { selected } = dataAnalytics;
    const { name } = selected;
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
            className={Styles.input}
            defaultValue={title}
            disabled={!selected.id}
            onChange={handleChange}
            onBlur={handleBlur}
        />
    );
};

export default Title;

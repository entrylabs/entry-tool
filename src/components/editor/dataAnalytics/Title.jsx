import React, { useContext } from 'react';
import { DataAnalyticsContext } from '@contexts/dataAnalytics';
import Styles from '@assets/entry/scss/popup.scss';

const Title = () => {
    const { dataAnalytics, dispatch } = useContext(DataAnalyticsContext);
    const { selected } = dataAnalytics;
    const { name } = selected;
    const handleChange = (event) => {
        event.preventDefault();
        dispatch({
            type: 'CHANGE_TABLE_TITLE',
            value: event.target.value,
        });
    };

    return (
        <input
            type="text"
            name="sheet_sjt"
            className={Styles.input}
            defaultValue={name}
            disabled={!selected.id}
            onChange={handleChange}
        />
    );
};

export default Title;

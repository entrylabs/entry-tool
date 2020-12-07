import React, { useContext } from 'react';
import { DataAnalyticsContext } from '@contexts/dataAnalytics';
import Theme from '@utils/Theme';

const TitleInput = (props) => {
    const theme = Theme.getStyle('popup');
    const { dataAnalytics, dispatch } = useContext(DataAnalyticsContext);
    const { selected = {} } = dataAnalytics;
    const { chart = [], chartIndex } = selected;
    const { title = '' } = chart[chartIndex] || {};

    const onChangeTitle = (value) => {
        dispatch({
            type: 'EDIT_CHART_TITLE',
            title: value,
        });
    };

    const handleClick = (event) => {
        event.preventDefault();
        onChangeTitle('');
    };

    const handleBlur = (event) => {
        const { target = {} } = event;
        const { value = '' } = target;
        onChangeTitle(value);
    };

    return (
        <div className={theme.input_inner}>
            <input type="text" defaultValue={title} onBlur={handleBlur} disabled={!chart.length} />
            <a className={title ? theme.close_btn : ''} role="button" onClick={handleClick}>
                <span className={theme.blind}>입력 취소</span>
            </a>
        </div>
    );
};

export default TitleInput;

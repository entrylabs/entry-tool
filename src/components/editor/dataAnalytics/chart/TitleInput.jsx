import React, { useContext } from 'react';
import { DataAnalyticsContext } from '@contexts/dataAnalytics';
import Theme from '@utils/Theme';

const TitleInput = (props) => {
    const theme = Theme.getStyle('popup');
    const { dataAnalytics, dispatch } = useContext(DataAnalyticsContext);
    const { selected = {}, selectedIndex } = dataAnalytics;
    const { chart = [], chartIndex = 0 } = selected;
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

    const handleChange = (event) => {
        const { target = {} } = event;
        const { value = '' } = target;
        onChangeTitle(value);
    };

    return (
        <div className={theme.input_inner}>
            <input
                key={`chart_title_${selectedIndex}_${chartIndex}`}
                onChange={handleChange}
                type="text"
                defaultValue={title}
                disabled={!chart.length}
            />
            <a className={title ? theme.close_btn : ''} role="button" onClick={handleClick}>
                <span className={theme.blind}>입력 취소</span>
            </a>
        </div>
    );
};

export default TitleInput;

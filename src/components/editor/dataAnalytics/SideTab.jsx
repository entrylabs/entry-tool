import React, { useContext, useCallback } from 'react';
import { DataAnalyticsContext } from '@contexts/dataAnalytics';
import Theme from '@utils/Theme';

const SideTab = () => {
    const theme = Theme.getStyle('popup');
    const { dataAnalytics, dispatch } = useContext(DataAnalyticsContext);
    const { selectedIndex, list, fold, onAddTableButtonClick } = dataAnalytics;

    const handleClick = useCallback(
        (index) => (event) => {
            event.preventDefault();
            dispatch({ type: 'SELECT_TABLE', index });
        },
        []
    );

    const handleRemoveClick = useCallback(
        (index) => (event) => {
            event.preventDefault();
            dispatch({
                type: 'REMOVE_TABLE',
                value: index,
            });
        },
        []
    );

    const handleFoldButtonClick = useCallback((event) => {
        event.preventDefault();
        dispatch({ type: 'FOLD' });
    }, []);

    const handleAddTableClick = useCallback((event) => {
        event.preventDefault();
        onAddTableButtonClick();
    }, []);

    return (
        <section className={`${theme.aside} ${fold ? theme.fold : ''}`}>
            <h2 className={theme.blind}>테이블 추가하기</h2>
            <div className={theme.add_btn_box}>
                <a onClick={handleAddTableClick} role="button">
                    테이블 추가하기
                </a>
            </div>
            <ul className={theme.list}>
                {list.map(({ name, id }, index) => (
                    <li
                        key={`side_tab_${id}`}
                        className={index === selectedIndex ? theme.active : ''}
                        onClick={handleClick(index)}
                    >
                        <span className={theme.text}>{name}</span>
                        <a onClick={handleRemoveClick} className={theme.btn_close}>
                            <span className={theme.blind}>삭제</span>
                        </a>
                    </li>
                ))}
            </ul>
            <a role="button" className={theme.split_bar} onClick={handleFoldButtonClick}>
                <span className={theme.blind}>창 조절하기</span>
            </a>
        </section>
    );
};

export default SideTab;
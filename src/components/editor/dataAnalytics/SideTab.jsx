import React, { useContext, useCallback } from 'react';
import { DataAnalyticsContext } from '@contexts/dataAnalytics';
import Styles from '@assets/entry/scss/popup.scss';

const SideTab = () => {
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
        <section className={`${Styles.aside} ${fold ? Styles.fold : ''}`}>
            <h2 className={Styles.blind}>테이블 추가하기</h2>
            <div className={Styles.add_btn_box}>
                <a onClick={handleAddTableClick} role="button">
                    테이블 추가하기
                </a>
            </div>
            <ul className={Styles.list}>
                {list.map(({ name, id }, index) => (
                    <li
                        key={`side_tab_${id}`}
                        className={index === selectedIndex ? Styles.active : ''}
                        onClick={handleClick(index)}
                    >
                        {name}
                        <a onClick={handleRemoveClick} className={Styles.btn_close}>
                            <span className={Styles.blind}>삭제</span>
                        </a>
                    </li>
                ))}
            </ul>
            <a role="button" className={Styles.split_bar} onClick={handleFoldButtonClick}>
                <span className={Styles.blind}>창 조절하기</span>
            </a>
        </section>
    );
};

export default SideTab;

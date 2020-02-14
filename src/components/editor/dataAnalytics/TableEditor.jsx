import React, { useContext } from 'react';
import Table from '@components/widget/Table';
import { DataAnalyticsContext } from './context/DataAnalyticsContext';
import TitleInput from './TitleInput';
import { CommonUtils } from '@utils/Common';
import Styles from '@assets/entry/scss/popup.scss';

const TableEditor = () => {
    const { dataAnalytics, dispatch } = useContext(DataAnalyticsContext);
    const { table, title, onToastDataAnalytics, isFullScreen } = dataAnalytics;

    const handleChangeTitle = (value) => (event) => {
        dispatch({
            type: 'EDIT_TITLE',
            title: value,
        });
    };

    return (
        <section className={`${Styles.detail_cont} ${Styles.table_state}`}>
            <h2 className={Styles.blind}>{CommonUtils.getLang('DataAnalytics.table')}</h2>
            <div className={Styles.content_box}>
                <div className={Styles.input_box}>
                    <TitleInput title={title} onChangeTitle={handleChangeTitle} />
                </div>

                <div className={Styles.cont_inner}>
                    <div className={Styles.table_cont}>
                        <Table
                            table={table}
                            onToastDataAnalytics={onToastDataAnalytics}
                            isFullScreen={isFullScreen}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TableEditor;

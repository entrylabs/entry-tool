import React from 'react';
import Styles from '@assets/entry/scss/popup.scss';
import Table from '@components/widget/Table';
import TitleInput from './TitleInput';

const TableEditor = (props) => {
    const { table = [[]], title, onChangeTitle } = props;
    return (
        <section className={`${Styles.detail_cont} ${Styles.table_state}`}>
            <h2 className={Styles.blind}>테이블</h2>
            <div className={Styles.content_box}>
                <div className={Styles.input_box}>
                    <TitleInput title={title} onChangeTitle={onChangeTitle} />
                </div>

                <div className={Styles.cont_inner}>
                    <div className={Styles.table_box}>
                        <Table table={table} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TableEditor;

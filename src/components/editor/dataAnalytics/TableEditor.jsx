import React from 'react';
import Styles from '@assets/entry/scss/popup.scss';
import Table from '@components/widget/Table';

const TableEditor = (props) => {
    const { table = [[]] } = props;
    return (
        <>
            <h2 className={Styles.blind}>테이블</h2>
            <div className={Styles.content_box}>
                <div className={Styles.input_box}>
                    <div className={Styles.input_inner}>
                        <input type="text" id="data1" name="data1" />
                        {/* 인풋에 내용이 들어가면 close_btn을 활성화 해주세요 */}
                        <a href="#" className={Styles.close_btn} role="button">
                            <span className={Styles.blind}>입력 취소</span>
                        </a>
                    </div>
                </div>

                <div className={Styles.cont_inner}>
                    <div className={Styles.table_box}>
                        {/* 여기 테이블은 더미 데이터 입니다. */}
                        <Table table={table} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default TableEditor;

import React, { useContext, useState } from 'react';
import { DataAnalyticsContext } from '@contexts/dataAnalytics';
import { TABLE } from '@constants/dataAnalytics';
import { Confirm as ConfirmModal } from '@entrylabs/modal';
import '@entrylabs/modal/dist/entry/entry-modal.css';

const Confirm = ({ onClick }) => {
    const { dataAnalytics, dispatch } = useContext(DataAnalyticsContext);
    const { tab, gridRef } = dataAnalytics;

    return (
        <ConfirmModal
            content="변경된 테이블과 차트를 저장할까요?"
            title="확인"
            onEvent={(data) => {
                if (data) {
                    let table;
                    if (tab === TABLE) {
                        table = gridRef?.current?.getSheetData().data;
                    }
                    dispatch({ type: 'SAVE', table });
                }
                onClick?.();
            }}
            options={{
                negativeButtonText: '취소',
                positiveButtonText: '확인',
            }}
        />
    );
};

export default Confirm;

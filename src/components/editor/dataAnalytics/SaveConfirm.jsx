import React, { useContext, useState } from 'react';
import { DataAnalyticsContext } from '@contexts/dataAnalytics';
import { TABLE } from '@constants/dataAnalytics';
import { Confirm as ConfirmModal } from '@entrylabs/modal';
import '@entrylabs/modal/dist/entry/entry-modal.css';

const Confirm = ({ onClick }) => {
    const { dataAnalytics, dispatch } = useContext(DataAnalyticsContext);
    const { tab, selected, gridRef, onSubmitDataAnalytics, selectedIndex } = dataAnalytics;

    return (
        <ConfirmModal
            content="변경된 테이블과 차트를 저장할까요?"
            title="확인"
            onEvent={(data) => {
                if (data) {
                    const selectedDataAnalytics = selected;
                    if (tab === TABLE) {
                        const [fields, ...data] = gridRef?.current?.getSheetData().data;
                        selectedDataAnalytics.data = data;
                        selectedDataAnalytics.fields = fields;
                    }
                    onSubmitDataAnalytics({
                        selected: selectedDataAnalytics,
                        index: selectedIndex,
                    });
                    dispatch({ type: 'SAVE' });
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

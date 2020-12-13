import React, { useContext, useState } from 'react';
import { DataAnalyticsContext } from '@contexts/dataAnalytics';
import { TABLE } from '@constants/dataAnalytics';
import { Confirm as ConfirmModal } from '@entrylabs/modal';
import { CommonUtils } from '@utils/Common';
import '@entrylabs/modal/dist/entry/entry-modal.css';

const Confirm = ({ onClick }) => {
    const { dataAnalytics, dispatch } = useContext(DataAnalyticsContext);
    const { tab, gridRef } = dataAnalytics;

    return (
        <ConfirmModal
            content={CommonUtils.getLang('DataAnalytics.confirm_content')}
            title={CommonUtils.getLang('DataAnalytics.confirm')}
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
                negativeButtonText: CommonUtils.getLang('DataAnalytics.cancel'),
                positiveButtonText: CommonUtils.getLang('DataAnalytics.confirm'),
            }}
        />
    );
};

export default Confirm;

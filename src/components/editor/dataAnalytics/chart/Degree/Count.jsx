import React, { useContext, useRef, useState } from 'react';
import Number from '@components/widget/number';
import { DataAnalyticsContext } from '@contexts/dataAnalytics';
import { isMobile } from 'react-device-detect';
import Theme from '@utils/Theme';
import _clamp from 'lodash/clamp';
import _isNaN from 'lodash/isNaN';

const Count = () => {
    const theme = Theme.getStyle('popup');
    const [showNumberPicker, setShowNumberPicker] = useState(false);
    const { dataAnalytics, dispatch } = useContext(DataAnalyticsContext);
    const { selected = {} } = dataAnalytics;
    const { chart = [], chartIndex = 0 } = selected;
    const { bin = 5 } = chart[chartIndex];
    const inputRef = useRef();
    let isRemoved = false;
    let numberTarget = window;

    const handleBlur = (event) => {
        if (_isNaN(event.target.value)) {
            event.target.value = bin;
        }
        const value = _.clamp(event.target.value || bin, 1, 50);
        inputRef.current && (inputRef.current.value = `${value}`);
        dispatch({ type: 'CHANGE_DEGREE', value });
    };

    const handleBtnClick = (event) => {
        const value = bin;

        if (value === '') {
            return;
        }

        const currNum = parseInt(value, 10);
        const addNum = event.target.name === 'increase' ? 1 : -1;
        const num = currNum + addNum;

        const nValue = _clamp(num, 1, 50);

        if (nValue != value) {
            dispatch({ type: 'CHANGE_DEGREE', value: nValue });
        }
        inputRef.current.value = nValue;
    };

    const handleClick = (e) => {
        numberTarget = e.currentTarget;
        setShowNumberPicker(true);
    };

    const getNumberPicker = () => {
        if (!isMobile || !showNumberPicker) {
            return '';
        }
        return (
            <span style={{ position: 'absolute' }}>
                <div
                    style={{
                        position: 'fixed',
                        width: '100%',
                        height: '100%',
                        top: '43px',
                        left: '0px',
                        zIndex: 11,
                    }}
                />
                <Number
                    className="entryToolNumberPicker"
                    onButtonPressed={(value) => {
                        const prevValue = isRemoved ? '' : bin;
                        const result = _isNaN(_clamp(prevValue + value, 1, 50)) ? bin : result;
                        isRemoved = false;
                        dispatch({ type: 'CHANGE_DEGREE', value: result });
                        inputRef.current.value = result;
                    }}
                    onBackButtonPressed={() => {
                        const prevValue = bin;
                        const result = Math.floor(prevValue / 10);
                        if (result < 1) {
                            isRemoved = true;
                        }
                        dispatch({ type: 'CHANGE_DEGREE', value: Math.max(1, result) });
                        inputRef.current.value = result;
                    }}
                    onOutsideClick={() => {
                        setShowNumberPicker(false);
                    }}
                    positionDom={numberTarget}
                />
            </span>
        );
    };

    return (
        <div className={theme.select_group} style={{ marginLeft: 30 }}>
            <label htmlFor="Cnt" className={theme.tit_label}>
                계급 수
            </label>
            <div className={theme.cnt_box}>
                <a role="button" className={theme.btn} onClick={handleBtnClick} name="decrease">
                    <span className={theme.blind}>감소</span>
                </a>
                <a role="button" className={theme.btn} onClick={handleBtnClick} name="increase">
                    <span className={theme.blind}>증가</span>
                </a>
                <input
                    ref={inputRef}
                    type="text"
                    className={theme.input}
                    onKeyDown={(event) => {
                        event.stopPropagation();
                    }}
                    defaultValue={`${bin}`}
                    name="Cnt"
                    onBlur={handleBlur}
                    onClick={handleClick}
                />
                {getNumberPicker()}
            </div>
        </div>
    );
};

export default Count;

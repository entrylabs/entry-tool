import React, { useState } from 'react';
import { pure } from 'recompose';
import Theme from '@utils/Theme';
import Option from '../popup/Contents/Navigation/SearchOption';
import Chart from '@components/widget/Chart';
import { CommonUtils } from '@utils/Common';
const { generateHash } = CommonUtils;

const ModalChart = (props) => {
    const theme = Theme.getStyle('popup');
    const { tables = [], source = {}, setTable, onClose } = props;
    const { chart = [], name, fields = [], origin = [] } = source;
    const [dropdown, setDropdown] = useState('');
    const [selected, select] = useState(0);
    const toggleDropDown = (dropdown) => setDropdown(dropdown);
    const chartList = chart.map(({ title }, index) => [title, index]);
    const selectChart = (option) => {
        const [name, index] = option;
        select(index);
    };

    // workspace가 아닌경우만 차트 실행시 스크롤 숨김처리
    const el = document.getElementsByTagName('body');
    const wsPath = window.location.pathname.indexOf('/ws');
    if (wsPath === -1) {
        el[0].style.overflow = 'hidden';
    }

    const data = [fields, ...origin];
    const selectedChart = chart && chart[selected];
    return (
        <div className={theme.dimmed}>
            <div className={theme.center}>
                <div className={theme.modal}>
                    <div className={theme.head}>
                        <div className={theme.text}>
                            {CommonUtils.getLang('DataAnalytics.show_chart')}
                        </div>
                        <div
                            className={theme.close}
                            id="chart_btn"
                            onClick={() => {
                                if (
                                    wsPath === -1 &&
                                    el[0] &&
                                    el[0].style &&
                                    el[0].style.overflow === 'hidden'
                                ) {
                                    el[0].removeAttribute('style');
                                }

                                onClose();
                            }}
                        />
                    </div>
                    <div className={theme.body}>
                        <div className={theme.content}>
                            <Option
                                onSelect={setTable}
                                options={tables}
                                setDropdown={toggleDropDown}
                                isOpenDefault={!!dropdown}
                                staticName={name}
                            />
                            <Option
                                onSelect={selectChart}
                                options={chartList}
                                setDropdown={toggleDropDown}
                                isOpenDefault={!!dropdown}
                            />
                            <div className={theme.chart_area}>
                                {selectedChart && (
                                    <Chart
                                        key={`c${generateHash()}`}
                                        table={data}
                                        chart={selectedChart}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {dropdown}
        </div>
    );
};

export default pure(ModalChart);

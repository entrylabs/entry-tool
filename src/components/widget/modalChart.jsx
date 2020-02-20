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
    const data = [fields, ...origin];
    const selectedChart = chart[selected];
    return (
        <div className={theme.dimmed}>
            <div className={theme.center}>
                <div className={theme.modal}>
                    <div className={theme.head}>
                        <div className={theme.text}>차트 보기</div>
                        <div className={theme.close} onClick={onClose} />
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

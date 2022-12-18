import { useState, useCallback } from 'react';
import Theme from '@utils/Theme';
import EntrySheet from 'entry_sheet';
import Option from '../popup/Contents/Navigation/SearchOption';
import { CommonUtils } from '@utils/Common';
import _find from 'lodash/find';
import _findIndex from 'lodash/findIndex';
import cn from 'classnames';

const ModalTable = (props) => {
    const theme = Theme.getStyle('popup');

    const { table, onClose, togglePause, stop, isIframe, tables } = props;
    const [isPaused, setPause] = useState(false);
    const [dropdown, setDropdown] = useState('');
    const [selected, select] = useState(_findIndex(tables, { id: table.id }) || 0);
    const toggleDropDown = (dropdown) => setDropdown(dropdown);
    const tableList = tables.map(({ name }, index) => [name, index]);
    const selectTable = (option) => {
        const [, index] = option;
        select(index);
    };
    const getTable = (targetId) => _find(tables, ({ id }) => id === targetId);

    // workspace가 아닌 경우만 모달 실행시 스크롤 숨김처리
    const el = document.getElementsByTagName('body');
    const wsPath = window.location.pathname.indexOf('/ws');
    if (wsPath === -1) {
        el[0].style.overflow = 'hidden';
    }

    const closeAction = useCallback(() => {
        if (wsPath === -1 && el[0] && el[0].style && el[0].style.overflow === 'hidden') {
            el[0].removeAttribute('style');
        }

        onClose();
    }, []);

    return (
        <div className={theme.dimmed}>
            <div className={isIframe ? theme.center_chart : theme.center}>
                <div className={theme.modal}>
                    <div className={theme.head}>
                        <div className={theme.text}>
                            {CommonUtils.getLang('DataAnalytics.show_table')}
                        </div>
                        <div
                            className={theme.close}
                            id="chart_btn"
                            onClick={() => {
                                closeAction();
                            }}
                        />
                    </div>
                    <div className={theme.body}>
                        <div
                            className={theme.content}
                            style={{
                                minHeight: '440px',
                                position: 'relative',
                                marginBottom: '0px',
                            }}
                        >
                            <Option
                                onSelect={selectTable}
                                options={tableList}
                                setDropdown={toggleDropDown}
                                isOpenDefault={!!dropdown}
                                defaultIndex={selected}
                            />
                            <div className={`${theme.chart_area}`}>
                                {table && (
                                    <div
                                        className={theme.sheet_box}
                                        onKeyDown={(e) => {
                                            e.stopPropagation();
                                            e.preventDefault();
                                        }}
                                        style={{
                                            width: '710px',
                                            height: '480px',
                                            marginRight: '-24px',
                                        }}
                                    >
                                        <EntrySheet
                                            sheetData={{
                                                fields: {
                                                    cols: [],
                                                    rows: [],
                                                },
                                                data: tables[selected].table,
                                            }}
                                            option={{
                                                type: 'VIEWER',
                                                config: {
                                                    maxCell: 30000,
                                                },
                                            }}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className={theme.footer}>
                        <div className={theme.content}>
                            <div
                                className={cn(theme.chart_button, theme.stop)}
                                onClick={() => {
                                    stop();
                                    closeAction();
                                }}
                            >
                                {CommonUtils.getLang('DataAnalytics.stop')}
                            </div>
                            <div
                                className={cn(
                                    theme.chart_button,
                                    { [theme.pause]: !isPaused },
                                    { [theme.start]: isPaused }
                                )}
                                onClick={() => {
                                    setPause(!isPaused);
                                    togglePause();
                                }}
                            >
                                {CommonUtils.getLang(
                                    isPaused ? 'DataAnalytics.restart' : 'DataAnalytics.pause'
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

export default ModalTable;

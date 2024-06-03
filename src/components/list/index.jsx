import { connect } from 'react-redux';
import { visibleAction } from '@actions/index';
import Theme from '@utils/Theme';
import { useState, useEffect, useCallback, useRef } from 'react';
import { CommonUtils } from '@utils/Common';
import ClipboardJS from 'clipboard';
import _trimEnd from 'lodash/trimEnd';

const formatContent = (data) => {
    if (!data || data.length <= 0) {
        return ' ';
    } else {
        return data.map((element) => `${element.data}`).reduce((prev, next) => `${prev}\n${next}`);
    }
};

const Export = (props) => {
    const { theme, visibleAction, data, emitter } = props;
    const [textData, setData] = useState(formatContent(data));
    const clipRef = useRef();

    useEffect(() => {
        let clipboard;
        if (clipRef.current) {
            clipboard = new ClipboardJS(clipRef.current, {
                text() {
                    if (textData instanceof Object) {
                        return JSON.stringify(textData);
                    }
                    return textData;
                },
            });

            clipboard.on('success', (e) => {
                handleCopy(true);
                e.clearSelection();
            });

            clipboard.on('error', (e) => {
                handleCopy(false);
            });
        }

        () => {
            clipboard.destory();
        };
    }, [clipRef.current, textData]);

    useEffect(() => {
        setData(formatContent(data));
    }, [data]);
    const close = useCallback(() => {
        visibleAction(false);
    }, [visibleAction]);

    const handleExcelDownload = useCallback(() => {
        emitter.emit('download', textData.split('\n'));
    }, [textData]);

    const handleConvertTable = useCallback(() => {
        emitter.emit('convertTable', _trimEnd(textData).split('\n'));
    }, [textData]);

    const handleCopy = useCallback(() => {
        emitter.emit('copy');
    }, []);

    return (
        <div className={theme.export_wrap}>
            <div className={theme.header}>
                <span>{CommonUtils.getLang('Menus.list_export_title')}</span>
                <a role="button" className={theme.btn_close} onClick={close} />
            </div>
            <div className={theme.body}>
                <span>{CommonUtils.getLang('Menus.list_export_notice1')}</span>
                <span>{CommonUtils.getLang('Menus.list_export_notice2')}</span>
                <textarea className={theme.export_content} disabled value={textData} />
                <div className={theme.btn_wrap}>
                    <a ref={clipRef} role="button">
                        {CommonUtils.getLang('Buttons.duplication')}
                    </a>
                    <a role="button" onClick={handleExcelDownload}>
                        {CommonUtils.getLang('Buttons.export_to_excel')}
                    </a>
                    <a role="button" onClick={handleConvertTable}>
                        {CommonUtils.getLang('Buttons.convert_table')}
                    </a>
                </div>
            </div>
        </div>
    );
};

const Import = (props) => {
    const { theme, visibleAction, data, emitter } = props;
    const [textData, setData] = useState('');
    const clipRef = useRef();

    const close = useCallback(() => {
        visibleAction(false);
    }, [visibleAction]);

    const handleExcelDownload = useCallback(() => {
        emitter.emit('save', _trimEnd(textData).split(/\n/));
        visibleAction(false);
    }, [textData, visibleAction]);

    const handleChangeText = useCallback(
        (e) => {
            setData(e?.target?.value);
        },
        [textData]
    );

    return (
        <div className={theme.import_wrap}>
            <div className={theme.header}>
                <span>{CommonUtils.getLang('Menus.list_import_title')}</span>
                <a role="button" className={theme.btn_close} onClick={close} />
            </div>
            <div className={theme.body}>
                <div className={theme.content}>
                    <div className={theme.text_wrap}>
                        <span>{CommonUtils.getLang('Menus.list_import_notice_1')}</span>
                        <span>{CommonUtils.getLang('Menus.list_import_notice_2')}</span>
                    </div>
                    <div className={theme.content_wrap}>
                        <div className={theme.left_content}>
                            <textarea
                                className={theme.export_content}
                                onChange={handleChangeText}
                                value={textData}
                                placeholder={CommonUtils.getLang('Menus.list_import_placeholder')}
                            />
                        </div>
                        <div className={theme.right_content} />
                    </div>
                </div>
                <div className={theme.btn_wrap}>
                    <a role="button" onClick={handleExcelDownload}>
                        {CommonUtils.getLang('Buttons.list_save')}
                    </a>
                </div>
            </div>
        </div>
    );
};

const List = (props) => {
    const { type, data, visibleAction, eventEmitter } = props;
    const [theme, setTheme] = useState(Theme.getStyle('list'));

    return (
        <div className={theme.list_wrap}>
            {type === 'export' && (
                <Export
                    theme={theme}
                    data={data}
                    visibleAction={visibleAction}
                    emitter={eventEmitter}
                />
            )}
            {type === 'import' && (
                <Import
                    theme={theme}
                    data={data}
                    visibleAction={visibleAction}
                    emitter={eventEmitter}
                />
            )}
        </div>
    );
};

const mapStateToProps = (state) => ({
    isClosed: state.popupReducer.closed,
});

const mapDispatchToProps = (dispatch) => ({
    visibleAction: (visible) => dispatch(visibleAction(visible)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);

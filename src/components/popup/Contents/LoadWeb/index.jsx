import { useState } from 'react';
import { connect } from 'react-redux';
import classname from 'classnames';
import { triggerEvent } from '@actions';
import { closePopup } from '@actions/popup';
import { EMIT_TYPES } from '@constants';
import Theme from '@utils/Theme';
import { setTimeout } from 'window-or-global';
import { CommonUtils } from '@utils/Common';

const copyRightLink =
    'https://copyright.or.kr/education/educlass/learning/infringement-case/index.do';

const SheetIdValidMsg = [
    'Menus.file_load_web_error_sheet_id_1',
    'Menus.file_load_web_error_sheet_id_2',
];

const Index = ({ type, loadWeb, HeaderButtonPortal }) => {
    const theme = Theme.getStyle('popup');
    const [sheetId, setSheetId] = useState('');
    const [sheetName, setSheetName] = useState('');
    const [sheetIdValid, setSheetIdValid] = useState(null);

    const onChangeSheetId = (e) => {
        setSheetIdValid(null);
        setSheetId(e.target.value);
    };

    const onChangeSheetName = (e) => {
        setSheetName(e.target.value);
    };

    const getLoadGoogleSheet = async () => {
        if (!sheetId) {
            setSheetIdValid(SheetIdValidMsg[0]);
            return;
        }

        setSheetIdValid(null);

        const response = await fetch(
            // eslint-disable-next-line max-len
            `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${sheetName}`
        );
        if (response.status !== 200) {
            setSheetIdValid(SheetIdValidMsg[1]);
            return;
        }
        const csv = await response.text();
        loadWeb(csv);
    };

    return (
        <div
            className={classname(
                theme.section_content,
                CommonUtils.toggleClass(
                    type === 'table',
                    theme.table_file_add_content,
                    theme.drawing_content
                )
            )}
        >
            <>
                <div className={theme.load_web}>
                    <p className={theme.dsc}>
                        <strong>{CommonUtils.getLang('Menus.file_load_web_table_title')}</strong>
                        <span>{CommonUtils.getLang('Menus.file_load_web_table_sub_title')}</span>
                    </p>
                    <div className={theme.add_label} onClick={getLoadGoogleSheet}>
                        {CommonUtils.getLang('Workspace.load_web')}
                    </div>
                    <div className={theme.sheet_group}>
                        <div className={theme.sheet_doc_wrapper}>
                            <label htmlFor="sheetId" className={theme.label}>
                                {CommonUtils.getLang('Menus.file_input_sheet_id')}{' '}
                                <em>
                                    ({CommonUtils.getLang('Menus.file_input_sheet_id_require')})
                                </em>
                            </label>
                            <div className={`${theme.input_wrapper}`}>
                                <input
                                    type="text"
                                    className={`${theme.input}${
                                        sheetIdValid && ` ${theme.error_input}`
                                    }`}
                                    id="sheetId"
                                    name="sheetId"
                                    value={sheetId}
                                    onChange={onChangeSheetId}
                                    placeholder={CommonUtils.getLang(
                                        'Menus.file_input_sheet_id_placeholder'
                                    )}
                                />
                            </div>
                            {sheetIdValid && (
                                <div className={theme.sheet_valid_error_msg}>
                                    {CommonUtils.getLang(sheetIdValid)}
                                </div>
                            )}
                        </div>
                        <div className={theme.sheet_name_wrapper}>
                            <label htmlFor="sheetName" className={theme.label}>
                                {CommonUtils.getLang('Menus.file_input_sheet_name')}
                            </label>
                            <div className={`${theme.input_wrapper}`}>
                                <input
                                    type="text"
                                    className={theme.input}
                                    id="sheetName"
                                    name="sheetName"
                                    value={sheetName}
                                    onChange={onChangeSheetName}
                                    placeholder={CommonUtils.getLang(
                                        'Menus.file_input_sheet_name_placeholder'
                                    )}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={theme.caution_box}>
                    <p className={theme.caution}>
                        {CommonUtils.getLang('Menus.file_load_web_warn_title_1')}
                    </p>
                    <p className={theme.caution}>
                        <strong>{CommonUtils.getLang('Menus.file_load_web_warn_title_2')}</strong>
                        <br />
                        <span className={theme.sub_dsc}>
                            {CommonUtils.getLang('Menus.file_load_web_warn_desc_2_1')}{' '}
                        </span>
                        <a target="_blank" href={copyRightLink} rel="noreferrer">
                            [{CommonUtils.getLang('Menus.file_upload_warn_link')}]
                        </a>
                    </p>
                </div>
                <HeaderButtonPortal>
                    <a className={theme.btn} role="button" onClick={getLoadGoogleSheet}>
                        {CommonUtils.getLang('Buttons.add2')}
                    </a>
                </HeaderButtonPortal>
            </>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    loadWeb: (csv) => {
        dispatch(closePopup());
        setTimeout(() => {
            dispatch(triggerEvent(EMIT_TYPES.loadWeb, csv, false));
        });
    },
});

export default connect(null, mapDispatchToProps)(Index);

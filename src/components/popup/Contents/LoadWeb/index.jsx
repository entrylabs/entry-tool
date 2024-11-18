import { connect } from 'react-redux';
import classname from 'classnames';
import { triggerEvent } from '@actions';
import { closePopup } from '@actions/popup';
import { EMIT_TYPES } from '@constants';
import Theme from '@utils/Theme';
import DrawContent from '../includes/DrawContent';
import { setTimeout } from 'window-or-global';
import { CommonUtils } from '@utils/Common';
import Styles from '@assets/entry/scss/popup.scss';

const copyRightLink =
    'https://copyright.or.kr/education/educlass/learning/infringement-case/index.do';

const Index = ({ type, goDraw, HeaderButtonPortal }) => {
    const theme = Theme.getStyle('popup');
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
                    <label htmlFor="table_add" className={theme.add_label}>
                        {CommonUtils.getLang('Workspace.load_web')}
                        <input
                            type="file"
                            id="table_add"
                            name="table_add"
                            className={theme.blind}
                            onClick={CommonUtils.handleClick(goDraw)}
                        />
                    </label>
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
                                    className={theme.input}
                                    id="sheetId"
                                    name="sheetId"
                                    placeholder={CommonUtils.getLang(
                                        'Menus.file_input_sheet_id_placeholder'
                                    )}
                                />
                            </div>
                        </div>
                        <div className={theme.sheet_name_wrapper}>
                            <label htmlFor="sheetName" className={theme.label}>
                                시트 이름
                            </label>
                            <div className={`${theme.input_wrapper}`}>
                                <input
                                    type="text"
                                    className={theme.input}
                                    id="sheetName"
                                    name="sheetName"
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
                        <a target="_blank" href={copyRightLink}>
                            [{CommonUtils.getLang('Menus.file_upload_warn_link')}]
                        </a>
                    </p>
                </div>
                <HeaderButtonPortal>
                    <a
                        className={theme.btn}
                        role="button"
                        onClick={CommonUtils.handleClick(goDraw)}
                    >
                        {CommonUtils.getLang('Buttons.add2')}
                    </a>
                </HeaderButtonPortal>
            </>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    goDraw: () => {
        dispatch(closePopup());
        setTimeout(() => {
            dispatch(triggerEvent(EMIT_TYPES.draw, null, false));
        });
    },
});

export default connect(null, mapDispatchToProps)(Index);

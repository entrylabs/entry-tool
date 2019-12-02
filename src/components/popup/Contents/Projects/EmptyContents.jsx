import React from 'react';
import { connect } from 'react-redux';
import classname from 'classnames';
import Theme from '@utils/Theme';
import { CommonUtils } from '@utils/Common';
import { EMIT_TYPES as Types } from '@constants';
import { triggerEvent } from '@actions/index';
import { closePopup } from '@actions/popup';

const Index = ({ makeProject }) => {
    const theme = Theme.getStyle('popup');
    return (
        <section className={classname(theme.pop_content, theme.art_content)}>
            <div className={theme.section_cont}>
                {/* [D] 메뉴 카테고리 선택에 따라 텍스트 변경  */}
                <h2 className={theme.blind}>{CommonUtils.getLang('Menus.my_project')}</h2>
                <div className={theme.result_box}>
                    <div className={classname(theme.thmb, theme.imico_pop_mywrite_thmb)} />
                    <p className={theme.result_dsc}>
                        {CommonUtils.getLang('Menus.no_project_1')}
                        <br />
                        {CommonUtils.getLang('Menus.no_project_2')}
                    </p>
                    <div className={theme.pop_btn_box}>
                        <div
                            className={theme.active}
                            onClick={CommonUtils.handleClick(makeProject)}
                        >
                            {CommonUtils.getLang('Menus.make_project')}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const mapDispatchToProps = (dispatch) => ({
    makeProject: () => {
        dispatch(triggerEvent(Types.makeProject, null, false));
        dispatch(closePopup());
    },
});

export default connect(
    null,
    mapDispatchToProps
)(Index);

import React from 'react';
import { connect } from 'react-redux';
import classname from 'classnames';
import Theme from '@utils/Theme';
import { CommonUtils } from '@utils/Common';
import { EMIT_TYPES as Types } from '@constants';
import { triggerEvent } from '@actions/index';
import { closePopup } from '@actions/popup';

const getResultMent = (type) => {
    switch (type) {
        case 'projects':
            return (
                <>
                    {CommonUtils.getLang('Menus.no_project_1')}
                    <br />
                    {CommonUtils.getLang('Menus.no_project_2')}
                </>
            );
        case 'favorites':
            return (
                <>
                    {CommonUtils.getLang('Menus.no_marked_project1')}
                    <br />
                    {CommonUtils.getLang('Menus.no_marked_project2')}
                </>
            );
        default:
            return <>not supported type</>;
    }
};

const Index = ({ makeProject, type }) => {
    const theme = Theme.getStyle('popup');
    return (
        <div className={classname(theme.section_content, theme.art_content)}>
            <div className={theme.result_box}>
                <div className={theme.result_box}>
                    <p className={theme.result_dsc}>{getResultMent(type)}</p>
                </div>
                {type !== 'favorites' && (
                    <div className={theme.pop_btn_box}>
                        <div
                            className={theme.active}
                            onClick={CommonUtils.handleClick(makeProject)}
                        >
                            {CommonUtils.getLang('Menus.make_project')}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    makeProject: () => {
        dispatch(triggerEvent(Types.makeProject, null, false));
        dispatch(closePopup());
    },
});

export default connect(null, mapDispatchToProps)(Index);

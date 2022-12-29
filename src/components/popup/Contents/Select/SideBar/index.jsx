import { useEffect, useState } from 'react';
import Item from './Item';
import SideBar from './SideBar';
import SubMenu from './SubMenu';
import Selected from './Selected';
import { CommonUtils } from '@utils/Common';
import Theme from '@utils/Theme';
import { EMIT_TYPES as Types } from '@constants';
import { triggerEvent } from '@actions/index';
import { connect } from 'react-redux';
import PopupList from '../../includes/PopupList/index';
import _isEmpty from 'lodash/isEmpty';
import { closePopup, toggleVector } from '@actions/popup';
import classname from 'classnames';

const Index = (props) => {
    const {
        data,
        type,
        sidebar,
        multiSelect = true,
        showSelected = true,
        isVectorOnly = false,
        fetch,
        baseUrl,
        isDrawVector,
        toggleVector,
        HeaderButtonPortal,
        selected,
        submit,
    } = props;
    const [selectedSidebar, selectSidebar] = useState(Object.keys(sidebar)[0]);
    const [selectedSubMenu, selectSubMenu] = useState(null);
    const dropdownState = useState('');
    const theme = Theme.getStyle('popup');
    const isEmpty = _isEmpty(sidebar);
    const subMenu = (sidebar[selectedSidebar] && sidebar[selectedSidebar].sub) || {};
    const drawItems = () =>
        data
            .filter((item) => !isVectorOnly || CommonUtils.isVectorItem(item))
            .map((item) => (
                <Item
                    key={item._id || item.id}
                    item={item}
                    multiSelect={multiSelect}
                    type={type}
                    baseUrl={baseUrl}
                    playable={type === 'sound'}
                    dropdownState={dropdownState}
                />
            ));

    useEffect(() => {
        if (isEmpty || subMenu[selectedSubMenu]) {
            fetch(type, selectedSidebar, selectedSubMenu);
        }
    }, [selectedSidebar, selectedSubMenu]);

    return (
        <>
            <div
                className={classname(
                    theme.section_content,
                    CommonUtils.toggleClass(type === 'table', theme.data_select_content)
                )}
            >
                {!isEmpty && (
                    <SideBar
                        type={type}
                        sidebar={sidebar}
                        onClick={(item) => selectSidebar(item)}
                    />
                )}
                <div className={theme.content_box}>
                    <SubMenu
                        menus={subMenu}
                        onClick={(item) => selectSubMenu(item)}
                        isDrawVector={isDrawVector}
                        isVectorOnly={isVectorOnly}
                        toggleVector={toggleVector}
                    />
                    <PopupList type={type} theme={theme} dropdown={dropdownState[0]}>
                        {drawItems()}
                    </PopupList>
                </div>
                {showSelected && <Selected type={type} baseUrl={baseUrl} />}
            </div>
            <HeaderButtonPortal>
                <a
                    className={theme.btn}
                    role="button"
                    onClick={CommonUtils.handleClick(() => submit({ selected }))}
                >
                    {CommonUtils.getLang('Buttons.add2')}
                </a>
            </HeaderButtonPortal>
        </>
    );
};

const mapStateToProps = (state) => ({
    isVectorOnly: state.popupReducer.isVectorOnly,
    selected: state.popupReducer.selected,
});

const mapDispatchToProps = (dispatch) => ({
    fetch: (type, sidebar, subMenu) =>
        dispatch(triggerEvent(Types.fetch, { type, sidebar, subMenu }, false)),
    toggleVector: () => dispatch(toggleVector()),
    submit: (data) => {
        dispatch(triggerEvent(Types.submit, data, false));
        dispatch(closePopup());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);

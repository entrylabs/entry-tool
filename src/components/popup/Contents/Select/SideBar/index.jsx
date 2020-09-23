import React, { useState, useEffect } from 'react';
import Item from './Item';
import SideBar from './SideBar';
import SubMenu from './SubMenu';
import Selected from './Selected';
import Foot from '../foot';
import { CommonUtils } from '@utils/Common';
import Theme from '@utils/Theme';
import { EMIT_TYPES as Types } from '@constants';
import { triggerEvent } from '@actions/index';
import { connect } from 'react-redux';
import PopupList from '../../includes/PopupList';
import _isEmpty from 'lodash/isEmpty';

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
    } = props;
    const [selectedSidebar, selectSidebar] = useState(Object.keys(sidebar)[0]);
    const [selectedSubMenu, selectSubMenu] = useState(null);
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
                />
            ));

    useEffect(() => {
        if (isEmpty || subMenu[selectedSubMenu]) {
            fetch(type, selectedSidebar, selectedSubMenu);
        }
    }, [selectedSidebar, selectedSubMenu]);

    return (
        <>
            <div className={theme.pop_content}>
                <h2 className={theme.blind}>Popup</h2>
                {!isEmpty && (
                    <SideBar
                        type={type}
                        sidebar={sidebar}
                        onClick={(item) => selectSidebar(item)}
                    />
                )}
                <div className={theme.section_cont}>
                    <SubMenu menus={subMenu} onClick={(item) => selectSubMenu(item)} />
                    <PopupList type={type} theme={theme}>
                        {drawItems()}
                    </PopupList>
                    {showSelected && <Selected type={type} baseUrl={baseUrl} />}
                </div>
            </div>
            <Foot />
        </>
    );
};

const mapStateToProps = (state) => ({
    isVectorOnly: state.popupReducer.isVectorOnly,
});

const mapDispatchToProps = (dispatch) => ({
    fetch: (type, sidebar, subMenu) =>
        dispatch(triggerEvent(Types.fetch, { type, sidebar, subMenu }, false)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);

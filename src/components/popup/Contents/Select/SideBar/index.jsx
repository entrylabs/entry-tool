import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from './Item';
import SideBar from './SideBar';
import SubMenu from './SubMenu';
import Selected from './Selected';
import Foot from './foot';
import { triggerEvent } from '@actions';
import { setUIParam } from '@actions/popup';
import { EMIT_TYPES } from '@constants';
import Theme from '@utils/Theme';

class Index extends Component {
    constructor(props) {
        super(props);
        this.theme = Theme.getStyle("popup");
        this.props.setUIParam(this.options);
        this.props.triggerEvent(EMIT_TYPES.fetch, this.options, false);
        this.drawItems = this.drawItems.bind(this);
        this.getMenus = this.getMenus.bind(this);
    }

    get options() {
        return {
            type: this.props.mainType,
            sidebar: Object.keys(this.props.sidebar)[0],
            subMenu: 'all',
        };
    }

    componentDidUpdate(prevProps) {
        const before = prevProps.popupReducer;
        const next = this.props.popupReducer;
        const isMenuChanged = before.sidebar && (before.sidebar !== next.sidebar || before.subMenu !== next.subMenu);
        if (isMenuChanged) {
            const elmnt = document.getElementById('popupList');
            if (elmnt) {
                elmnt.scrollTop = 0;
            }
            this.props.triggerEvent(
                EMIT_TYPES.fetch,
                { type: next.type, sidebar: next.sidebar, subMenu: next.subMenu },
                false,
            );
        }
    }

    componentWillUnmount() {
        this.props.setUIParam({
            type: undefined,
            sidebar: undefined,
            subMenu: undefined,
        });
    }

    drawItems() {
        return this.props.data.data.map((item, index) => (
            <Item key={index} item={item} multiSelect={this.props.multiSelect} type={this.props.popupReducer.type}/>
        ));
    }

    getMenus() {
        if (!this.props.sidebar) {
            return null;
        }
        const subTitle = this.props.popupReducer.sidebar;
        if (subTitle && this.props.sidebar[subTitle]) {
            return this.props.sidebar[subTitle].sub;
        }
        return this.props.sidebar[Object.keys(this.props.sidebar)[0]].sub;
    }

    drawListBox() {
        if (this.props.popupReducer.type === 'sound') {
            return (
                <div id="popupList" className={this.theme.sound_list_box}>
                    <div className={this.theme.list_area}>
                        <ul className={this.theme.obj_list}>{this.drawItems()}</ul>
                    </div>
                </div>
            );
        }

        return (
            <div id="popupList" className={this.theme.list_area}>
                <ul className={this.theme.obj_list}>{this.drawItems()}</ul>
            </div>
        );
    }

    render() {
        return (
            <React.Fragment>
                <div className={this.theme.pop_content}>
                    <h2 className={this.theme.blind}>오브젝트 선택</h2>
                    <SideBar type={this.props.mainType} sidebar={this.props.sidebar}/>
                    <div className={this.theme.section_cont}>
                        <SubMenu type={this.props.mainType} menus={this.getMenus()}/>
                        {this.drawListBox()}
                        {this.props.multiSelect && <Selected type={this.props.mainType}/>}
                    </div>
                </div>
                <Foot/>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    ...state,
});

const mapDispatchToProps = (dispatch) => ({
    triggerEvent: (event, data, hidden) => dispatch(triggerEvent(event, data, hidden)),
    setUIParam: (data) => dispatch(setUIParam(data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Index);

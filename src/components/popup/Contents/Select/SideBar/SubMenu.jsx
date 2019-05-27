import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUIParam } from '@actions/popup';
import { CommonUtils } from '@utils/Common';
import Theme from '@utils/Theme';

class SubMenu extends Component {
    constructor(props) {
        super(props);
        this.theme = Theme.getStyle("popup");
        this.drawSubMenu = this.drawSubMenu.bind(this);
        this.onSubMenuSelected = this.onSubMenuSelected.bind(this);
    }

    drawSubMenu() {
        if (!this.props.menus) {
            return '';
        }
        return Object.keys(this.props.menus).map((key, index) => {
            const item = this.props.menus[key];
            const subMenu = this.props.popupReducer.subMenu;
            return (
                <a
                    href={"#NULL"}
                    className={CommonUtils.toggleClass(
                        subMenu === key || (!subMenu && index === 0),
                        this.theme.on
                    )}
                    key={item.name}
                    data-key={key}
                >
                    {CommonUtils.getLang(item.name)}
                </a>
            );
        });
    }

    onSubMenuSelected(e) {
        e.preventDefault();
        const key = e.target.getAttribute('data-key');
        this.props.setUIParam({
            type: this.props.type,
            sidebar: this.props.popupReducer.sidebar,
            subMenu: key,
        });
    }

    render() {
        return (
            <div className={this.theme.sub_menu}>
                <div className={this.theme.menu_inner} onClick={this.onSubMenuSelected}>
                    {this.drawSubMenu()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    ...state,
});

const mapDispatchToProps = (dispatch) => ({
    setUIParam: (type, category, subMenu) => dispatch(setUIParam(type, category, subMenu)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SubMenu);

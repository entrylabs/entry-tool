import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CommonUtils } from '@utils/Common';
import { setUIParam } from '@actions/popup';
import Theme from '@utils/Theme';

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.theme = Theme.getStyle("popup");
        this.drawSideBar = this.drawSideBar.bind(this);
        this.onSidebarCliecked = this.onSidebarCliecked.bind(this);
    }

    onSidebarCliecked(e) {
        e.preventDefault();
        this.props.setUIParam({
            type: this.props.type,
            sidebar: e.currentTarget.getAttribute('data-key'),
            subMenu: 'all',
        });
    }

    drawSideBar() {
        const list = this.props.sidebar;
        const sidebar = this.props.popupReducer.sidebar;
        if (!list) {
            return '';
        }
        return Object.keys(list).map((item, index) => {
            return (
                <li
                    key={item}
                    data-key={item}
                    onClick={this.onSidebarCliecked}
                    className={CommonUtils.toggleClass(
                        sidebar === item || (!sidebar && index === 0),
                        this.theme.on
                    )}
                >
                    <a href="#NULL">{CommonUtils.getLang(list[item].name)}</a>
                </li>
            );
        });
    }

    render() {
        return <ul className={this.theme.menu_list}>{this.drawSideBar()}</ul>;
    }
}

const mapStateToProps = (state) => ({
    ...state,
});

const mapDispatchToProps = (dispatch) => ({
    setUIParam: (data) => dispatch(setUIParam(data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SideBar);

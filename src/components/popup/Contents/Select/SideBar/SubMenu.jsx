import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems } from '../../../../../actions';
import { CommonUtils } from '../../../../../utils/Common';

class SubMenu extends Component {
    constructor(props) {
        super(props);

        this.drawSubMenu = this.drawSubMenu.bind(this);
        this.onSubMenuSelected = this.onSubMenuSelected.bind(this);
    }

    drawSubMenu() {
        return Object.keys(this.props.menus).map((key, index) => {
            const item = this.props.menus[key];
            const subMenu = this.props.popupReducer.subMenu;
            return <a href="#" className={CommonUtils.toggleClass(subMenu == key || !subMenu && index == 0, 'on')} key={item.name} data-key={key}>{item.name}</a>;
        });
    }

    onSubMenuSelected(e) {
        e.preventDefault();
        const key = e.target.getAttribute('data-key');
        this.props.fetchItems(this.props.popupReducer.type, this.props.popupReducer.sidebar, key);
    }

    render() {
        return (
            <div className="sub_menu">
                <div className="menu_inner" onClick={this.onSubMenuSelected}>
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
    fetchItems: (type, category, subMenu) => dispatch(fetchItems(type, category, subMenu)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SubMenu);
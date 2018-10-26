import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems } from '../../../../../actions/popup';
import { CommonUtils } from '../../../../../utils/Common';
import Styles from '../../../../../assets/scss/popup.scss'

class SideBar extends Component {
    constructor(props) {
        super(props);

        this.drawSideBar = this.drawSideBar.bind(this);
        this.onSidebarCliecked = this.onSidebarCliecked.bind(this);
    }

    onSidebarCliecked(e) {
        e.preventDefault();
        this.props.fetchItems(this.props.popupReducer.type, e.currentTarget.getAttribute('data-key'));
    }

    drawSideBar() {
        const list = this.props.sidebar;
        const sidebar = this.props.popupReducer.sidebar;
        if(!list) {
            return "";
        }
        return Object.keys(list).map((item, index) => {
            return (
                <li key={item} data-key={item} onClick={this.onSidebarCliecked}
                    className={CommonUtils.toggleClass(sidebar === item || (!sidebar && index === 0), Styles.on)}>
                    <a href="#NULL">{list[item].name}</a>
                </li>
            );
        });
    }

    render() {
        return (
            <div>
                <h2 className={Styles.blind}>오브젝트 선택</h2>
                <ul className={Styles.menu_list}>
                    {this.drawSideBar()}
                </ul>
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
)(SideBar);


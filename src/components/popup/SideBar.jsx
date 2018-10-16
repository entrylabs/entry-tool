import React, { Component } from 'react';
import { connect } from 'react-redux';
import { POPUP_COMMON, updateCommonData } from '../../actions';

class SideBar extends Component {
    constructor(props) {
        super(props);

        this.getList = this.getList.bind(this);
        this.onSidebarCliecked = this.onSidebarCliecked.bind(this);
    }

    onSidebarCliecked(e) {
        e.preventDefault();
        this.props.updateSideBar(e.currentTarget.getAttribute("data-key"));
    }

    getList() {
        const list = this.props.sidebar;
        const sidebar = this.props.popupReducer.sidebar;
        if (!list) {
            return null;
        }
        return Object.keys(list).map((item, index) => {
            if(sidebar == item ||!sidebar && index == 0){
                return <li key={item} data-key={item} onClick={this.onSidebarCliecked} className="on"><a href="#">{list[item].name}</a></li>;
            }
            return <li key={item} data-key={item} onClick={this.onSidebarCliecked}><a href="#">{list[item].name}</a></li>;
        });
    }

    render() {
        return (
            <div>
                {/* [D] 메뉴 카테고리 선택에 따라 텍스트 변경  */}
                <h2 className="blind">오브젝트 선택</h2>
                <ul className="menu_list">
                    {this.getList()}
                </ul>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    ...state,
});

const mapDispatchToProps = (dispatch) => ({
    updateSideBar: (sidebar) => dispatch(updateCommonData(POPUP_COMMON, {sidebar})),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SideBar);


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { visibleAction } from '../../actions';


class SideBar extends Component {
    constructor(props) {
        super(props);

        this.getList = this.getList.bind(this);
    }

    getList() {
        const list = this.props.sidebar;
        if (!list) {
            return null;
        }
        return Object.keys(list).map(item => {
            return <li key={item}><a href="#">{list[item].name}</a></li>;
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
    visibleAction: (visible) => dispatch(visibleAction(visible)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SideBar);


import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from './Item';
import SideBar from './SideBar';
import SubMenu from './SubMenu';
import Selected from './Selected';

class Index extends Component {
    constructor(props) {
        super(props);

        this.stats = {
            listBoxName: {
                'sound': 'sound_list_box',
                'sprite': 'obj_list_box',
            },
        };

        this.drawItems = this.drawItems.bind(this);
        this.getMenus = this.getMenus.bind(this);
    }

    drawItems() {
        return this.props.data.map(item => <Item key={item._id} item={item}/>);
    }

    getMenus() {
        const subTitle = this.props.popupReducer.sidebar;
        if (this.props.sidebar[subTitle]) {
            return this.props.sidebar[subTitle].sub;
        }
        return this.props.sidebar[Object.keys(this.props.sidebar)[0]].sub;
    }

    render() {
        return (
            <div className="section_cont">
                <SideBar sidebar={this.props.sidebar}/>

                <div className="cont_box">
                    {/* [D] 메뉴 카테고리 선택에 따라 텍스트 변경  */}
                    <h3 className="blind">동물</h3>
                    <div className={this.stats.listBoxName[this.props.popupReducer.type]}>
                        <SubMenu menus={this.getMenus()}/>
                        <div className="scroll_box">
                            <ul className="obj_list">
                                {this.drawItems()}
                            </ul>
                        </div>
                    </div>
                    <Selected/>
                </div>
                <div className="pop_btn_box">
                    <a href="#">취소</a>
                    <a href="#" className="active">추가하기</a>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    ...state,
});

export default connect(
    mapStateToProps,
    null,
)(Index);


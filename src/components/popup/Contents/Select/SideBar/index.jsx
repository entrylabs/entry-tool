import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from './Item';
import SideBar from './SideBar';
import SubMenu from './SubMenu';
import Selected from './Selected';
import Styles from '../../../../../assets/scss/popup.scss'
import { applySelected, fetchItems, visibleAction } from '../../../../../actions';

class Index extends Component {
    constructor(props) {
        super(props);

        this.stats = {
            listBoxName: {
                'sound': Styles.sound_list_box,
                'sprite': Styles.obj_list_box,
            },
        };

        this.drawItems = this.drawItems.bind(this);
        this.getMenus = this.getMenus.bind(this);
        this.onAddItemClicked = this.onAddItemClicked.bind(this);
        this.onCancelBtnClicked = this.onCancelBtnClicked.bind(this);
    }

    drawItems() {
        return this.props.data.map(item => <Item key={item._id} item={item}/>);
    }

    getMenus() {
        if(!this.props.sidebar) {
            return null;
        }
        const subTitle = this.props.popupReducer.sidebar;
        if (subTitle && this.props.sidebar[subTitle]) {
            return this.props.sidebar[subTitle].sub;
        }
        return this.props.sidebar[Object.keys(this.props.sidebar)[0]].sub;
    }

    onAddItemClicked(e) {
        e.preventDefault();
        const selected = this.props.popupReducer.selected;
        switch(this.props.popupReducer.type) {
            case "sprite":
                selected.forEach(function(item) {
                    var object = {
                        id: window.Entry.generateHash(),
                        objectType: 'sprite',
                        sprite: item // 스프라이트 정보
                    };
                    object = window.Entry.container.addObject(object, 0);
                });
                break;
            case "sound":
                selected.forEach(function(item) {
                    item.id = window.Entry.generateHash();
                    window.Entry.playground.addSound(item, true);
                });
                break;
            default:
                break;
        }
        window.createjs.Sound.stop();
        this.props.visibleAction(false);
    }

    onCancelBtnClicked(e) {
        e.preventDefault();
        this.props.visibleAction(false);
    }

    render() {
        return (
            <div className={Styles.section_cont}>
                <SideBar sidebar={this.props.sidebar}/>

                <div className={Styles.cont_box}>
                    {/* [D] 메뉴 카테고리 선택에 따라 텍스트 변경  */}
                    <h3 className={Styles.blind}>동물</h3>
                    <div className={this.stats.listBoxName[this.props.popupReducer.type]}>
                        <SubMenu menus={this.getMenus()}/>
                        <div className={Styles.scroll_box}>
                            <ul className={Styles.obj_list}>
                                {this.drawItems()}
                            </ul>
                        </div>
                    </div>
                    <Selected/>
                </div>
                <div className={Styles.pop_btn_box}>
                    <a href="#NULL" onClick={this.onCancelBtnClicked}>취소</a>
                    <a href="#NULL" className={Styles.active} onClick={this.onAddItemClicked}>추가하기</a>
                </div>
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
)(Index);


import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from './Item';
import SideBar from './SideBar';
import SubMenu from './SubMenu';
import Selected from './Selected';
import Styles from '../../../../../assets/scss/popup.scss'
import { triggerEvent } from '../../../../../actions';

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
        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleSubmit(event, data) {
        this.props.triggerEvent( event, data );
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
                    <a href="#NULL" onClick={e => this.handleSubmit('close')}>취소</a>
                    <a href="#NULL" className={Styles.active} onClick={e => this.handleSubmit('submit', { selected: this.props.popupReducer.selected })}>추가하기</a>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    ...state,
});

const mapDispatchToProps = (dispatch) => ({
    triggerEvent: (event, data) => dispatch(triggerEvent(event, data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Index);


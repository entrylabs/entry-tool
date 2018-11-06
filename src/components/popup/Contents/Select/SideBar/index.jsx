import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from './Item';
import SideBar from './SideBar';
import SubMenu from './SubMenu';
import Selected from './Selected';
import Styles from '../../../../../assets/scss/popup.scss';
import Foot from './foot';
import { triggerEvent } from '../../../../../actions';

class Index extends Component {
    constructor(props) {
        super(props);

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

    drawListBox() {
        const listBox = (
            <React.Fragment>
                <div className={Styles.list_area}>
                    <ul className={Styles.obj_list}>
                        {this.drawItems()}
                    </ul>
                </div>
            </React.Fragment>
        )
        if(this.props.popupReducer.type == "sound") {
            return (
                <div className={Styles.sound_list_box}>
                    {listBox}
                </div>
            )
        }

        return listBox;
    }

    render() {
        return (
            <React.Fragment>
                <div className={Styles.pop_content}>
                    <h2 className={Styles.blind}>오브젝트 선택</h2>
                    <SideBar sidebar={this.props.sidebar}/>
                    <div className={Styles.section_cont}>
                        <SubMenu menus={this.getMenus()}/>
                        {this.drawListBox()}
                        <Selected/>
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
    triggerEvent: (event, data) => dispatch(triggerEvent(event, data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Index);


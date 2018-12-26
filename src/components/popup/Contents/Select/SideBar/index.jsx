import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from './Item';
import SideBar from './SideBar';
import SubMenu from './SubMenu';
import Selected from './Selected';
import Styles from '@assets/scss/popup.scss';
import Foot from './foot';
import { triggerEvent } from '@actions';
import { setUIParam } from '@actions/popup';
import { EMIT_TYPES } from '@constants';

class Index extends Component {
    constructor(props) {
        super(props);

        this.drawItems = this.drawItems.bind(this);
        this.getMenus = this.getMenus.bind(this);

        const initOpt = {
            type: this.props.popupReducer.type,
            sidebar: Object.keys(this.props.sidebar)[0],
            subMenu: 'all',
        };
        this.props.triggerEvent(EMIT_TYPES.fetch, initOpt, false);
        this.props.setUIParam(initOpt);
    }

    componentWillReceiveProps(nextProps) {
        const before = this.props.popupReducer;
        const next = nextProps.popupReducer;
        if (
            before.type !== next.type ||
            before.sidebar !== next.sidebar ||
            before.subMenu !== next.subMenu
        ) {
            const elmnt = document.getElementById('popupList');
            if (elmnt) {
                elmnt.scrollTop = 0;
            }
            this.props.triggerEvent(
                EMIT_TYPES.fetch,
                { type: next.type, sidebar: next.sidebar, subMenu: next.subMenu },
                false
            );
        }
    }

    drawItems() {
        return this.props.data.data.map((item) => (
            <Item key={item._id} item={item} multiSelect={this.props.multiSelect} />
        ));
    }

    getMenus() {
        if (!this.props.sidebar) {
            return null;
        }
        const subTitle = this.props.popupReducer.sidebar;
        if (subTitle && this.props.sidebar[subTitle]) {
            return this.props.sidebar[subTitle].sub;
        }
        return this.props.sidebar[Object.keys(this.props.sidebar)[0]].sub;
    }

    drawListBox() {
        const listBox = (
            <React.Fragment>
                <div id="popupList" className={Styles.list_area}>
                    <ul className={Styles.obj_list}>{this.drawItems()}</ul>
                </div>
            </React.Fragment>
        );
        if (this.props.type === 'sound') {
            return <div className={Styles.sound_list_box}>{listBox}</div>;
        }

        return listBox;
    }

    render() {
        return (
            <React.Fragment>
                <div className={Styles.pop_content}>
                    <h2 className={Styles.blind}>오브젝트 선택</h2>
                    <SideBar type={this.props.type} sidebar={this.props.sidebar} />
                    <div className={Styles.section_cont}>
                        <SubMenu menus={this.getMenus()} />
                        {this.drawListBox()}
                        {this.props.multiSelect && <Selected />}
                    </div>
                </div>
                <Foot />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    ...state,
});

const mapDispatchToProps = (dispatch) => ({
    triggerEvent: (event, data, hidden) => dispatch(triggerEvent(event, data, hidden)),
    setUIParam: (data) => dispatch(setUIParam(data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index);

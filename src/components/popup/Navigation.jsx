import React, { Component } from 'react';
import { connect } from 'react-redux';
import { POPUP_COMMON, updateCommonData } from '../../actions';

class Navigation extends Component {
    constructor(props) {
        super(props);

        this.getList = this.getList.bind(this);
        this.drawSearchBox = this.drawSearchBox.bind(this);
        this.onNavigationCliecked = this.onNavigationCliecked.bind(this);
    }

    onNavigationCliecked(e) {
        e.preventDefault();
        this.props.updateNavigation(e.currentTarget.getAttribute("data-key"));
    }

    getList() {
        const list = this.props.list;
        const navigation = this.props.popupReducer.navigation;
        if (!list) {
            return null;
        }
        return Object.keys(list).map((item, index) => {
            if(navigation == item ||!navigation && index == 0){
                return <li key={item} className="on" onClick={this.onNavigationCliecked} data-key={item}><a href="#">{list[item].name}</a></li>;
            }
            return <li key={item} onClick={this.onNavigationCliecked} data-key={item}><a href="#">{list[item].name}</a></li>;
        });
    }

    drawSearchBox() {
        if (this.props.search) {
            return (
                <div className="srch_box">
                    <label htmlFor="srch">
                        <input type="text" id="srch" name=""/>
                    </label>
                    <button type="button" className="btn_srch imbtn_pop_srch">
                        <span className="blind">검색</span>
                    </button>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="section_navi">
                <ul className="list">
                    {this.getList()}
                </ul>
                {this.drawSearchBox()}
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    ...state,
});

const mapDispatchToProps = (dispatch) => ({
    updateNavigation: (navigation) => dispatch(updateCommonData(POPUP_COMMON, {navigation})),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Navigation);
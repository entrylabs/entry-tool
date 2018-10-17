import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CommonUtils } from '../../utils/Common';

class Navigation extends Component {
    constructor(props) {
        super(props);

        this.drawNavigation = this.drawNavigation.bind(this);
        this.drawSearchBox = this.drawSearchBox.bind(this);
    }

    drawNavigation() {
        const list = this.props.list;
        const navigation = this.props.selected;
        return Object.keys(list).map((item, index) => {
            return (
                <li key={item}
                    className={CommonUtils.toggleClass(navigation == item || !navigation && index == 0, 'on')}
                    onClick={this.props.onClicked} data-key={item}>
                    <a href="#">{list[item].name}</a>
                </li>
            );
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
                    {this.drawNavigation()}
                </ul>
                {this.drawSearchBox()}
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
)(Navigation);
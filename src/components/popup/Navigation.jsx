import React, { Component } from 'react';
import { connect } from 'react-redux';
import { visibleAction } from '../../actions';


class Navigation extends Component {
    constructor(props) {
        super(props);

        this.getList = this.getList.bind(this);
        this.drawSearchBox = this.drawSearchBox.bind(this);
        this.selectNav = this.selectNav.bind(this);
    }

    selectNav(e) {
        e.preventDefault();
        console.log(e);

        console.log('hello', this);
    }

    getList() {
        const list = this.props.list;
        if (!list) {
            return null;
        }
        return Object.keys(list).map(item => {
            return <li key={item} onClick={this.selectNav}><a href="#">{list[item].name}</a></li>;
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
    visibleAction: (visible) => dispatch(visibleAction(visible)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Navigation);
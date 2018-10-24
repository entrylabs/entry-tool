import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CommonUtils } from '../../utils/Common';
import Styles from '../../assets/scss/popup.scss';
import { searchItem } from '../../actions';

class Navigation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchQuery : ""
        }

        this.onSearchBtnClicked = this.onSearchBtnClicked.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    drawNavigation() {
        const list = this.props.list;
        const navigation = this.props.selected;
        if(!list) {
            return "";
        }
        return Object.keys(list).map((item, index) => {
            return (
                <li key={item} className={CommonUtils.toggleClass(navigation === item || (!navigation && index === 0), Styles.on)} onClick={this.props.onClicked} data-key={item}>
                    <a href="#NULL">{list[item].name}</a>
                </li>
            );
        });
    }

    drawSearchBox() {
        if (this.props.search) {
            return (
                <div className={Styles.srch_box}>
                    <form onSubmit={this.onSearchBtnClicked}>
                        <label htmlFor="srch">
                            <input type="text" id="srch" name="searchQuery" value={this.state.searchQuery} onChange={this.handleChange}/>
                        </label>
                        <button type="button" className={`${Styles.btn_srch} ${Styles.imbtn_pop_srch}`} onClick={this.onSearchBtnClicked}>
                            <span className={Styles.blind}>검색</span>
                        </button>
                    </form>
                </div>
            );
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSearchBtnClicked(e) {
        e.preventDefault();
        this.props.searchItem(this.props.popupReducer.type, this.state.searchQuery);
    }

    render() {
        return (
            <div className={Styles.section_navi}>
                <ul className={Styles.list}>
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

const mapDispatchToProps = (dispatch) => ({
    searchItem: (type, query) => dispatch(searchItem(type,query))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Navigation);
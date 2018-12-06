import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CommonUtils } from '@utils/Common';
import Styles from '@assets/scss/popup.scss';
import { triggerEvent } from '@actions';
import Dropdown from '@components/widget/dropdown';
import { EMIT_TYPES } from '@constants';

const category_options = [
    ['모든 작품', null],
    ['게임', '게임'],
    ['애니메이션', '애니메이션'],
    ['미디어 아트', '미디어아트'],
    ['피지컬', '피지컬'],
    ['기타', '기타'],
];

const sort_options = [
    ['최신순', 'updated'],
    ['조회순', 'visit'],
    ['좋아요순', 'likeCnt'],
    ['댓글순', 'comment'],
];

const period_options = [
    ['전체 기간', null],
    ['오늘', '1'],
    ['최근 1주일', '7'],
    ['최근 1개월', '30'],
    ['최근 3개월', '90'],
];

class Navigation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchQuery: '',
            category: category_options[0],
            sort: sort_options[0],
            period: period_options[0],
        };

        this.onSearchBtnClicked = this.onSearchBtnClicked.bind(this);
        this.onDropDownClicked = this.onDropDownClicked.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    drawNavigation() {
        const list = this.props.list;
        const navigation = this.props.selected;
        if (!list) {
            return '';
        }
        return Object.keys(list).map((item, index) => {
            return (
                <li
                    key={item}
                    className={CommonUtils.toggleClass(
                        navigation === item || (!navigation && index === 0),
                        Styles.on,
                    )}
                    onClick={this.props.onClicked}
                    data-key={item}
                >
                    <a href="#NULL">{list[item].name}</a>
                </li>
            );
        });
    }

    onDropDownClicked(e, type, options) {
        e.preventDefault();
        const dropDown = (
            <Dropdown
                items={options}
                positionDom={e.target}
                onSelectDropdown={(value) => {
                    this.setState({
                        [type]: value,
                        dropDown: null,
                    });
                }}
                onOutsideClick={() => {
                    this.setState({ dropDown: null });
                }}
            />
        );
        this.setState({ dropDown });
    }

    drawSearchBox() {
        if (this.props.searchOption) {
            return (
                <form onSubmit={this.onSearchBtnClicked}>
                    {this.props.searchOption.category && <div className={`${Styles.pop_selectbox} ${Styles.on}`}>
                        <a href="#" className={`${Styles.select_link} ${Styles.imico_pop_select_arr_down}`}
                           onClick={e => {
                               this.onDropDownClicked(e, 'category', category_options);
                           }} title="모든 작품">{this.state.category[0]}</a>
                    </div>}
                    {this.props.searchOption.order && <div className={Styles.pop_selectbox}>
                        <a href="#" className={`${Styles.select_link} ${Styles.imico_pop_select_arr_down}`}
                           onClick={e => {
                               this.onDropDownClicked(e, 'sort', sort_options);
                           }} title="최신순">{this.state.sort[0]}</a>
                    </div>}
                    {this.props.searchOption.date && <div className={Styles.pop_selectbox}>
                        <a href="#" className={`${Styles.select_link} ${Styles.imico_pop_select_arr_down}`}
                           onClick={e => {
                               this.onDropDownClicked(e, 'period', period_options);
                           }} title="전체기간">{this.state.period[0]}</a>
                    </div>}
                    {this.props.searchOption.query && <div className={Styles.srch_box}>
                        <label htmlFor="srch">
                            <input
                                type="text"
                                id="srch"
                                name="searchQuery"
                                value={this.state.searchQuery}
                                onChange={this.handleChange}
                            />
                        </label>
                        <button
                            type="button"
                            className={`${Styles.btn_srch} ${Styles.imbtn_pop_srch}`}
                            onClick={this.onSearchBtnClicked}
                        >
                            <span className={Styles.blind}>검색</span>
                        </button>
                    </div>}
                </form>
            );
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    onSearchBtnClicked(e) {
        e.preventDefault();
        const query = {
            ...this.props.hidden,
            ...this.state,
        };
        this.props.triggerEvent(EMIT_TYPES.search, query, false);
    }

    render() {
        return (
            <div className={Styles.section_navi}>
                <ul className={Styles.list}>{this.drawNavigation()}</ul>
                {this.props.searchOption && <div className={Styles.art_sel_area}>
                    {this.drawSearchBox()}
                </div>}
                {this.state.dropDown}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    ...state,
});

const mapDispatchToProps = (dispatch) => ({
    triggerEvent: (event, data, hidden) => dispatch(triggerEvent(event, data, hidden)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Navigation);

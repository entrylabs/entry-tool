import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CommonUtils } from '@utils/Common';
import { triggerEvent } from '@actions';
import Dropdown from '@components/widget/dropdown';
import { EMIT_TYPES } from '@constants';
import Theme from '@utils/Theme';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.theme = Theme.getStyle("popup");
        this.category_options = [
            [CommonUtils.getLang('EntryStatic.art_category_all'), null],
            [CommonUtils.getLang('EntryStatic.art_category_game'), '게임'],
            [CommonUtils.getLang('EntryStatic.art_category_animation'), '애니메이션'],
            [CommonUtils.getLang('EntryStatic.art_category_media'), '미디어아트'],
            [CommonUtils.getLang('EntryStatic.art_category_physical'), '피지컬'],
            [CommonUtils.getLang('EntryStatic.art_category_etc'), '기타'],
        ];

        this.sort_options = [
            [CommonUtils.getLang('EntryStatic.art_sort_updated'), 'updated'],
            [CommonUtils.getLang('EntryStatic.art_sort_visit'), 'visit'],
            [CommonUtils.getLang('EntryStatic.art_sort_likeCnt'), 'likeCnt'],
            [CommonUtils.getLang('EntryStatic.art_sort_comment'), 'comment'],
        ];

        this.period_options = [
            [CommonUtils.getLang('EntryStatic.art_period_all'), null],
            [CommonUtils.getLang('EntryStatic.art_period_day'), '1'],
            [CommonUtils.getLang('EntryStatic.art_period_week'), '7'],
            [CommonUtils.getLang('EntryStatic.art_period_month'), '30'],
            [CommonUtils.getLang('EntryStatic.art_period_three_month'), '90'],
        ];

        this.state = {
            searchQuery: '',
            category: this.category_options[0],
            sort: this.sort_options[0],
            period: this.period_options[0],
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
                        this.theme.on,
                    )}
                    onClick={this.props.onClicked}
                    data-key={item}
                >
                    <a href="#NULL">{CommonUtils.getLang(list[item].name)}</a>
                </li>
            );
        });
    }

    onDropDownClicked(e, type, options) {
        e.preventDefault();
        if (this.state.dropDown) {
            return this.setState({ dropDown: null });
        }
        const dropDown = (
            <Dropdown
                items={options}
                positionDom={e.target}
                outsideExcludeDom={[e.target]}
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
                    {this.props.searchOption.category && (
                        <div className={`${this.theme.pop_selectbox} ${this.theme.on}`}>
                            <div
                                className={`${this.theme.select_link} ${
                                    this.theme.imico_pop_select_arr_down
                                }`}
                                onClick={(e) => {
                                    this.onDropDownClicked(e, 'category', this.category_options);
                                }}
                                title="모든 작품"
                            >
                                {this.state.category[0]}
                            </div>
                        </div>
                    )}
                    {this.props.searchOption.order && (
                        <div className={this.theme.pop_selectbox}>
                            <div
                                className={`${this.theme.select_link} ${
                                    this.theme.imico_pop_select_arr_down
                                }`}
                                onClick={(e) => {
                                    this.onDropDownClicked(e, 'sort', this.sort_options);
                                }}
                                title="최신순"
                            >
                                {this.state.sort[0]}
                            </div>
                        </div>
                    )}
                    {this.props.searchOption.date && (
                        <div className={this.theme.pop_selectbox}>
                            <div
                                className={`${this.theme.select_link} ${
                                    this.theme.imico_pop_select_arr_down
                                }`}
                                onClick={(e) => {
                                    this.onDropDownClicked(e, 'period', this.period_options);
                                }}
                                title="전체기간"
                            >
                                {this.state.period[0]}
                            </div>
                        </div>
                    )}
                    {this.props.searchOption.query && (
                        <div className={this.theme.srch_box}>
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
                                className={`${this.theme.btn_srch} ${this.theme.imbtn_pop_srch}`}
                                onClick={this.onSearchBtnClicked}
                            >
                                <span className={this.theme.blind}>검색</span>
                            </button>
                        </div>
                    )}
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
            <div className={this.theme.section_navi}>
                <ul className={this.theme.list}>{this.drawNavigation()}</ul>
                {this.props.searchOption && (
                    <div className={this.theme.art_sel_area}>{this.drawSearchBox()}</div>
                )}
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

import React, { useState } from 'react';
import { CommonUtils } from '@utils/Common';
import Theme from '@utils/Theme';
import classname from 'classnames';
import { EMIT_TYPES as Types } from '@constants';
import { connect } from 'react-redux';
import { triggerEvent } from '@actions/index';
import SearchOption from './SearchOption';

const Index = ({ projectNavOptions, searchOption = {}, triggerSearch }) => {
    const DropdownOption = createDropDownOption(projectNavOptions);
    const theme = Theme.getStyle('popup');
    const [query, setQuery] = useState('');
    const [dropdown, setDropdown] = useState('');
    const [selected, select] = useState({
        category: DropdownOption.category[0],
        sort: DropdownOption.sort[0],
        period: DropdownOption.period[0],
    });

    const search = (e) => {
        e.preventDefault();
        triggerSearch({
            ...selected,
            searchQuery: query,
        });
    };

    const toggleDropDown = (dropdown) => setDropdown(dropdown);
    const selectOption = (type) => (option) => select({ ...selected, [type]: option });
    return (
        <div className={theme.art_sel_area}>
            <form onSubmit={search}>
                {Object.keys(SearchOptionMap)
                    .filter((key) => searchOption[key])
                    .map((key) => {
                        const type = SearchOptionMap[key];
                        return (
                            <SearchOption
                                key={key}
                                onSelect={selectOption(type)}
                                options={DropdownOption[type]}
                                setDropdown={toggleDropDown}
                                isOpenDefault={!!dropdown}
                            />
                        );
                    })}
                {searchOption.query && (
                    <div className={theme.srch_box}>
                        <label htmlFor="srch">
                            <input
                                type="text"
                                id="srch"
                                name="searchQuery"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                        </label>
                        <button
                            type="button"
                            className={classname(theme.btn_srch, theme.imbtn_pop_srch)}
                            onClick={search}
                        >
                            <span className={theme.blind}>
                                {CommonUtils.getLang('Menus.search_lang')}
                            </span>
                        </button>
                    </div>
                )}
            </form>
            {dropdown}
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    triggerSearch: (query) => dispatch(triggerEvent(Types.search, query, false)),
});

export default connect(
    null,
    mapDispatchToProps
)(Index);

const defaultOptions = {
    category: [
        [CommonUtils.getLang('EntryStatic.art_category_all'), 'art_category_all'],
        [CommonUtils.getLang('EntryStatic.art_category_game'), 'art_category_game'],
        [CommonUtils.getLang('EntryStatic.art_category_animation'), 'art_category_animation'],
        [CommonUtils.getLang('EntryStatic.art_category_media'), 'art_category_media'],
        [CommonUtils.getLang('EntryStatic.art_category_physical'), 'art_category_physical'],
        [CommonUtils.getLang('EntryStatic.art_category_etc'), 'art_category_etc'],
    ],
    sort: [
        [CommonUtils.getLang('EntryStatic.art_sort_updated'), 'updated'],
        [CommonUtils.getLang('EntryStatic.art_sort_visit'), 'visit'],
        [CommonUtils.getLang('EntryStatic.art_sort_likeCnt'), 'likeCnt'],
        [CommonUtils.getLang('EntryStatic.art_sort_comment'), 'comment'],
    ],
    period: [
        [CommonUtils.getLang('EntryStatic.art_period_all'), null],
        [CommonUtils.getLang('EntryStatic.art_period_day'), '1'],
        [CommonUtils.getLang('EntryStatic.art_period_week'), '7'],
        [CommonUtils.getLang('EntryStatic.art_period_month'), '30'],
        [CommonUtils.getLang('EntryStatic.art_period_three_month'), '90'],
    ],
};

const createDropDownOption = (projectNavOptions = {}) => {
    const { categoryOptions, sortOptions, periodOptions } = projectNavOptions;
    const result = defaultOptions;
    if (categoryOptions) {
        result.category = categoryOptions.map((item) => {
            return [CommonUtils.getLang(`EntryStatic.${item}`), item];
        });
    }
    if (sortOptions) {
        result.sort = sortOptions.map((item) => {
            return [CommonUtils.getLang(`EntryStatic.art_sort_${item}`), item];
        });
    }
    if (periodOptions) {
        result.period = periodOptions.map((item) => {
            return [CommonUtils.getLang(`EntryStatic.${item}`), item];
        });
    }
    return result;
};

const SearchOptionMap = {
    category: 'category',
    order: 'sort',
    date: 'period',
};

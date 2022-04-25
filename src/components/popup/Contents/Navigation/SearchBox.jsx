import React, { useState } from 'react';
import { CommonUtils } from '@utils/Common';
import Theme from '@utils/Theme';
import classname from 'classnames';
import { EMIT_TYPES as Types } from '@constants';
import { connect } from 'react-redux';
import { triggerEvent } from '@actions/index';
import SearchOption from './SearchOption';

const Index = ({ projectNavOptions, searchOption = {}, triggerSearch, type }) => {
    const DropdownOption = createDropDownOption(projectNavOptions);
    const theme = Theme.getStyle('popup');
    const [query, setQuery] = useState('');
    const [dropdown, setDropdown] = useState('');
    const [selected, select] = useState({
        category: DropdownOption.category[0],
        sort: DropdownOption.sort[0],
        period: DropdownOption.period[0],
    });
    const [isActive, setActive] = useState(false);

    const search = (e) => {
        e.preventDefault();
        triggerSearch({
            ...selected,
            searchQuery: query,
            type,
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
                    <div className={classname([theme.srch_box, { [theme.active]: isActive }])}>
                        <input
                            type="text"
                            id="srch"
                            name="searchQuery"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onFocus={() => setActive(true)}
                            onBlur={() => setActive(false)}
                        />
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

export default connect(null, mapDispatchToProps)(Index);
//TODO: Theme.type == 'entryline' 이면 @web/config.category 사용.
const defaultOptions = {
    category: [
        [CommonUtils.getLang('EntryStatic.art_category_all'), 'all'],
        [CommonUtils.getLang('EntryStatic.art_category_game'), 'game'],
        [CommonUtils.getLang('EntryStatic.art_category_living'), 'living'],
        [CommonUtils.getLang('EntryStatic.art_category_storytelling'), 'storytelling'],
        [CommonUtils.getLang('EntryStatic.art_category_arts'), 'arts'],
        [CommonUtils.getLang('EntryStatic.art_category_knowledge'), 'knowledge'],
        [CommonUtils.getLang('EntryStatic.art_category_etc'), 'etc'],
    ],
    sort: [
        [CommonUtils.getLang('EntryStatic.art_sort_updated'), 'updated'],
        [CommonUtils.getLang('EntryStatic.art_sort_visit'), 'visit'],
        [CommonUtils.getLang('EntryStatic.art_sort_likeCnt'), 'likeCnt'],
        [CommonUtils.getLang('EntryStatic.art_sort_comment'), 'comment'],
    ],
    period: [
        [CommonUtils.getLang('EntryStatic.art_period_all'), null],
        [CommonUtils.getLang('EntryStatic.art_period_today'), 'today'],
        [CommonUtils.getLang('EntryStatic.art_period_week'), 'week'],
        [CommonUtils.getLang('EntryStatic.art_period_month'), 'month'],
        [CommonUtils.getLang('EntryStatic.art_period_quarter'), 'quarter'],
    ],
};

const createDropDownOption = (projectNavOptions = {}) => {
    const { categoryOptions, sortOptions, periodOptions } = projectNavOptions;
    const result = defaultOptions;
    if (categoryOptions) {
        result.category = categoryOptions.map((item) => [
            CommonUtils.getLang(`EntryStatic.art_category_${item}`),
            item,
        ]);
    }
    if (sortOptions) {
        result.sort = sortOptions.map((item) => [
            CommonUtils.getLang(`EntryStatic.art_sort_${item}`),
            item,
        ]);
    }
    if (periodOptions) {
        result.period = periodOptions.map((item) => [
            CommonUtils.getLang(`EntryStatic.art_period_${item}`),
            item,
        ]);
    }
    return result;
};

const SearchOptionMap = {
    category: 'category',
    order: 'sort',
    date: 'period',
};

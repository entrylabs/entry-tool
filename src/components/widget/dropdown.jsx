import React, { Component } from 'react';
import { pure } from 'recompose';
import { CommonUtils } from '@utils/Common';
import debounce from 'lodash/debounce';
import Scrollbars from '@components/common/scrollbars';
import OutsideClick from '@components/common/outsideClick';
import CheckBox from '@components/common/CheckBox';
import root from 'window-or-global';
import Theme from '@utils/Theme';

const SELECT_ALL = 'SELECT_ALL';

class Dropdown extends Component {
    get DROPDOWN_WIDTH_MARGIN() {
        return 25;
    }
    get ARROW_HEIGHT() {
        return 9;
    }
    get ARROW_WIDTH() {
        return 15;
    }
    get DROPDOWN_WIDTH() {
        return 184;
    }
    get DROPDOWN_HEIGHT() {
        return 260;
    }
    constructor(props) {
        super(props);
        if (props.theme) {
            Theme.type = props.theme;
        }
        this.theme = Theme.getStyle('popup');
        const { checkedIndex = [] } = props;
        this.state = {
            ...CommonUtils.getDefaultComponentPosition(props, this.getPositionOptions()),
            checkedIndex,
        };
    }

    handleWindowResize = debounce(() => {
        this.alignPosition();
    }, 300);

    componentDidMount() {
        root.addEventListener('resize', this.handleWindowResize);
        this.alignPosition();
    }

    componentWillUnmount() {
        root.removeEventListener('resize', this.handleWindowResize);
    }

    alignPosition(updateState) {
        this.setState(() =>
            Object.assign(
                CommonUtils.getAlignPosition(this.props, this.dropdown, this.getPositionOptions()),
                updateState
            )
        );
    }

    getPositionOptions() {
        const { items = [], autoWidth, animation = true } = this.props;
        let { length = 1 } = items;
        length = Math.min(length, 5);
        let width = this.DROPDOWN_WIDTH;
        if (autoWidth && this.dropdown) {
            const rect = this.dropdown.getBoundingClientRect();
            width = rect.width;
        }
        return {
            animation,
            width,
            height: length * 52,
            widthMargin: this.DROPDOWN_WIDTH_MARGIN,
            maxArrowPosition: width,
            arrowWidht: this.ARROW_WIDTH,
            arrowHeight: this.ARROW_HEIGHT,
        };
    }

    handleItemClick = (item) => {
        const { onSelectDropdown } = this.props;
        if (onSelectDropdown) {
            onSelectDropdown(item);
        }
    };

    handleChange = (item, index, isChecked) => {
        const { onChange } = this.props;
        onChange && onChange(item, index, isChecked);
    };

    handleItemCheckChange = (item, index, value) => {
        this.setState((prev) => {
            const { items, maximumSelectionLength } = this.props;
            const { checkedIndex = [] } = prev;
            if (value === SELECT_ALL) {
                const isChecked = checkedIndex.length === items.length;
                this.handleChange(item, SELECT_ALL, isChecked);
                return isChecked
                    ? { ...prev, checkedIndex: [] }
                    : { ...prev, checkedIndex: items.map((_item, index) => index) };
            }
            const target = checkedIndex.indexOf(index);
            let isChecked = false;
            if (
                maximumSelectionLength &&
                maximumSelectionLength <= checkedIndex.length &&
                target < 0
            ) {
                return prev;
            }
            if (target > -1) {
                checkedIndex.splice(target, 1);
            } else {
                checkedIndex.push(index);
                isChecked = true;
            }
            this.handleChange(item, index, isChecked);
            return { ...prev, checkedIndex };
        });
    };

    makeDropdownItem() {
        const { items = [], multiple, showSelectAll, maximumSelectionLength } = this.props;
        const { checkedIndex = [] } = this.state;
        const handleEvent =
            multiple || maximumSelectionLength ? this.handleItemCheckChange : this.handleItemClick;
        const selectAll = [CommonUtils.getLang('Workspace.select_all'), SELECT_ALL];
        return (showSelectAll ? [selectAll, ...items] : items).map((item, index) => {
            const [text, value, style] = item;
            const indexWithoutSelectAll = showSelectAll ? index - 1 : index;
            const disabled =
                checkedIndex.indexOf(index) == -1 &&
                maximumSelectionLength &&
                maximumSelectionLength <= checkedIndex.length;
            return (
                <div
                    key={`entry_tool_dropdown_${value}`}
                    value={value}
                    index={indexWithoutSelectAll}
                    style={style}
                    className={`${this.theme.item} ${disabled ? this.theme.disabled : ''}`}
                    onClick={() => {
                        handleEvent(item, indexWithoutSelectAll, value);
                    }}
                >
                    {(multiple || maximumSelectionLength) && (
                        <CheckBox
                            className={this.theme.checkbox}
                            checked={
                                value === SELECT_ALL
                                    ? checkedIndex.length === items.length
                                    : checkedIndex.includes(indexWithoutSelectAll)
                            }
                            disabled={disabled}
                        />
                    )}
                    {text}
                </div>
            );
        });
    }

    getCheckData() {
        const { checkedIndex = [] } = this.state;
        const { items = [] } = this.props;
        checkedIndex.sort();
        return {
            checkedIndex,
            items: items.filter((item, index) => checkedIndex.includes(index)),
        };
    }

    render() {
        const {
            onOutsideClick,
            items,
            eventTypes = ['mouseup', 'touchend', 'wheel'],
            outsideExcludeDom,
            autoWidth,
            animation = true,
            multiple,
            maximumSelectionLength,
        } = this.props;
        const { isUpStyle, arrowLeft, componentPosition } = this.state;
        let animationStyle = {};
        if (!animation) {
            animationStyle = {
                transition: 'none',
            };
        }
        return (
            <OutsideClick
                outsideExcludeDom={outsideExcludeDom}
                onOutsideClick={() => {
                    let result;
                    if (multiple || maximumSelectionLength) {
                        result = this.getCheckData();
                    }
                    if (onOutsideClick) {
                        onOutsideClick(result);
                    }
                }}
                eventTypes={eventTypes}
            >
                <div
                    ref={(dom) => (this.dropdown = dom)}
                    style={{ ...componentPosition, ...animationStyle }}
                    className={`${this.theme.tooltip_box} ${this.theme.dropdown} ${
                        isUpStyle ? this.theme.up : ''
                    } ${autoWidth ? this.theme.auto_width : ''}`}
                >
                    <div className={this.theme.tooltip_inner}>
                        {items.length <= 5 && this.makeDropdownItem()}
                        {items.length > 5 && (
                            <Scrollbars
                                heightRelativeToParent="260px"
                                className={this.theme.scrollbar}
                            >
                                {this.makeDropdownItem()}
                            </Scrollbars>
                        )}
                    </div>

                    <span style={{ left: `${arrowLeft}px` }} className={this.theme.arr}>
                        <i />
                    </span>
                </div>
            </OutsideClick>
        );
    }
}

export default pure(Dropdown);

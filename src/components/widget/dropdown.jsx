import React, { Component } from 'react';
import { pure } from 'recompose';
import { CommonUtils } from '@utils/Common';
import debounce from 'lodash/debounce';
import Scrollbars from '@components/common/scrollbars';
import OutsideClick from '@components/common/outsideClick';
import CheckBox from '@components/common/CheckBox';
import root from 'window-or-global';
import Theme from '@utils/Theme';

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

    handleItemCheckChange = (item, index) => {
        this.setState((prev) => {
            const { checkedIndex = [] } = prev;
            const target = checkedIndex.indexOf(index);
            let isChecked = false;
            if (target > -1) {
                checkedIndex.splice(target, 1);
            } else {
                checkedIndex.push(index);
                isChecked = true;
            }
            const { onChange } = this.props;
            if (onChange) {
                onChange(item, index, isChecked);
            }
            return { ...prev, checkedIndex };
        });
    };

    makeDropdownItem() {
        const { items, multiple } = this.props;
        const { checkedIndex = [] } = this.state;
        const handleEvent = multiple ? this.handleItemCheckChange : this.handleItemClick;
        return items.map((item, index) => {
            const [text, value, style] = item;
            const checked = checkedIndex.includes(index);
            return (
                <div
                    key={value}
                    value={value}
                    index={index}
                    style={style}
                    className={this.theme.item}
                    onClick={() => {
                        handleEvent(item, index);
                    }}
                >
                    {multiple && <CheckBox className={this.theme.checkbox} checked={checked} />}
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
                    if (multiple) {
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

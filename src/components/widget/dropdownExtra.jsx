import { Component } from 'react';
import { pure } from 'recompose';
import { CommonUtils } from '@utils/Common';
import debounce from 'lodash/debounce';
import Scrollbars from '@components/common/scrollbars';
import OutsideClick from '@components/common/outsideClick';
import root from 'window-or-global';
import Theme from '@utils/Theme';

const SELECT_ALL = 'SELECT_ALL';

class DropdownExtra extends Component {
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
        return 360;
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

    handleChange = (item, index, isChecked) => {
        const { onChange } = this.props;
        onChange && onChange(item, index, isChecked);
    };

    handleItemCheckChange = (item, index, value) => {
        this.setState((prev) => {
            const { items } = this.props;
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
        const { items = [], multiple, showSelectAll } = this.props;
        const handleEvent = multiple ? this.handleItemCheckChange : this.handleItemClick;
        const selectAll = [CommonUtils.getLang('Workspace.select_all'), SELECT_ALL];

        return (
            <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap' }}>
                {(showSelectAll ? [selectAll, ...items] : items).map((item, index) => {
                    const [text, value, style] = item;
                    const indexWithoutSelectAll = showSelectAll ? index - 1 : index;
                    return (
                        <div
                            key={value}
                            value={value}
                            index={indexWithoutSelectAll}
                            style={style}
                            className={this.theme.item}
                            onClick={() => {
                                handleEvent(item, indexWithoutSelectAll, value);
                            }}
                        >
                            {text}
                        </div>
                    );
                })}
            </div>
        );
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
            eventTypes = ['mouseup', 'touchend', 'wheel'],
            outsideExcludeDom,
            animation = false,
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
                    className={`${this.theme.tooltip_box} ${this.theme['dropdown-extra']} ${
                        isUpStyle ? this.theme.up : ''
                    }`}
                    style={{ ...componentPosition, ...animationStyle }}
                >
                    <div className={this.theme.tooltip_inner}>
                        <Scrollbars
                            heightRelativeToParent="273px"
                            className={this.theme.scrollbar}
                            style={{ width: '100%' }}
                        >
                            {this.makeDropdownItem()}
                        </Scrollbars>
                    </div>

                    <span style={{ left: `${arrowLeft}px` }} className={this.theme.arr}>
                        <i />
                    </span>
                </div>
            </OutsideClick>
        );
    }
}

export default pure(DropdownExtra);

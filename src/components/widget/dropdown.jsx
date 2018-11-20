import React, { Component } from 'react';
import { pure } from 'recompose';
import Styles from '@assets/scss/popup.scss';
import { CommonUtils } from '@utils/Common';
import debounce from 'lodash/debounce';
import Scrollbars from '@components/common/scrollbars';
import OutsideClick from '@components/common/outsideClick';
import root from 'window-or-global';

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
        this.state = CommonUtils.getDefaultComponentPosition(props, this.getPositionOptions());
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
        this.setState(() => {
            return Object.assign(
                CommonUtils.getAlignPosition(this.props, this.dropdown, this.getPositionOptions()),
                updateState
            );
        });
    }

    getPositionOptions() {
        const { items, autoWidth, animation = true } = this.props;
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
    makeDropdownItem() {
        const { items } = this.props;
        return items.map((item, index) => {
            const [text, value] = item;
            return (
                <div
                    key={value}
                    value={value}
                    index={index}
                    className={Styles.item}
                    onClick={() => {
                        this.handleItemClick(item);
                    }}
                >
                    {text}
                </div>
            );
        });
    }

    render() {
        const {
            onOutsideClick,
            items,
            eventTypes = ['mouseup', 'touchend', 'wheel'],
            outsideExcludeDom,
            autoWidth,
            animation = true,
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
                    if (onOutsideClick) {
                        onOutsideClick();
                    }
                }}
                eventTypes={eventTypes}
            >
                <div
                    ref={(dom) => (this.dropdown = dom)}
                    style={{ ...componentPosition, ...animationStyle }}
                    className={`${Styles.tooltip_box} ${Styles.dropdown} ${
                        isUpStyle ? Styles.up : ''
                    } ${autoWidth ? Styles.auto_width : ''}`}
                >
                    <div className={Styles.tooltip_inner}>
                        {items.length <= 5 && this.makeDropdownItem()}
                        {items.length > 5 && (
                            <Scrollbars heightRelativeToParent="260px" className={Styles.scrollbar}>
                                {this.makeDropdownItem()}
                            </Scrollbars>
                        )}
                    </div>

                    <span style={{ left: `${arrowLeft}px` }} className={Styles.arr}>
                        <i />
                    </span>
                </div>
            </OutsideClick>
        );
    }
}

export default pure(Dropdown);

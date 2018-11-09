import React, { Component } from 'react';
import { pure } from 'recompose';
import Styles from '@assets/scss/popup.scss';
import { CommonUtils } from '@utils/Common';
import { debounce } from 'lodash';
import Scrollbars from '@components/common/scrollbars';
import OutsideClick from '@components/common/outsideClick';

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
    get MAX_ARROW_POSITION() {
        return 184;
    }
    constructor(props) {
        super(props);
        this.state = CommonUtils.getDefaultComponentPosition(props, this.getPositionOptions());
    }

    handleWindowResize = debounce(() => {
        this.alignPosition();
    }, 300);

    componentDidMount() {
        window.addEventListener('resize', this.handleWindowResize);
        this.alignPosition();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowResize);
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
        const { items } = this.props;
        let { length = 1 } = items;
        length = Math.min(length, 5);
        return {
            height: length * 52,
            widthMargin: this.DROPDOWN_WIDTH_MARGIN,
            maxArrowPosition: this.MAX_ARROW_POSITION,
            arrowWidht: this.ARROW_WIDTH,
            arrowHeight: this.ARROW_HEIGHT,
            width: this.DROPDOWN_WIDTH,
        };
    }

    handleItemClick = (item) => {
        const { onSelectDropdown } = this.props;
        onSelectDropdown(item);
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
        const { onOutsideClick, items } = this.props;
        const { isUpStyle, arrowLeft, componentPosition } = this.state;
        return (
            <OutsideClick
                onOutsideClick={() => {
                    if (onOutsideClick) {
                        onOutsideClick();
                    }
                }}
                eventTypes={['mouseup', 'touchend', 'wheel']}
            >
                <div
                    ref={(dom) => (this.dropdown = dom)}
                    style={componentPosition}
                    className={`${Styles.tooltip_box} ${Styles.dropdown} ${
                        isUpStyle ? Styles.up : ''
                    }`}
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

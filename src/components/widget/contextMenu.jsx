import React, { Component } from 'react';
import OutsideClick from '../common/outsideClick';
import Scrollbars from '../common/scrollbars';
import root from 'window-or-global';
import { pure } from 'recompose';
import Theme from '@utils/Theme';

class ContextMenu extends Component {
    get SCROLL_ITEM_THRESHOLD() {
        return 5;
    }

    constructor(props) {
        super(props);
        this.state = {
            left: 0,
            top: 0,
        };
        this.theme = Theme.getStyle("popup");
        this.handleWindowResize = this.handleWindowResize.bind(this);
    }

    alignedPosition() {
        const { items, coordinate } = this.props;

        let { x, y } = coordinate;
        const { x: windowX, y: windowY } = this.getWindowSize();
        const { width, height } = this.contextDom.getBoundingClientRect();

        if ((x + width) - windowX > 0) {
            x -= width;

            if (items.length > this.SCROLL_ITEM_THRESHOLD) {
                x += 17;
            }
        }

        if ((y + height) - windowY > 0) {
            y -= height;
        }

        this.setState({
            left: x,
            top: y,
        });
    }

    getWindowSize() {
        return {
            x: root.innerWidth,
            y: root.innerHeight,
        };
    }

    handleWindowResize() {
        const { onOutsideClick } = this.props;
        if (onOutsideClick) {
            onOutsideClick();
        }
    }

    componentDidMount() {
        root.addEventListener('resize', this.handleWindowResize);
        this.alignedPosition();
    }

    componentWillUnmount() {
        root.removeEventListener('resize', this.handleWindowResize);
    }

    render() {
        const {
            onOutsideClick,
            items,
            eventTypes = ['mousedown', 'touchstart', 'wheel'],
        } = this.props;
        const { left, top } = this.state;

        return (
            <OutsideClick
                onOutsideClick={() => {
                    if (onOutsideClick) {
                        onOutsideClick();
                    }
                }}
                eventTypes={eventTypes}
            >
                <div
                    ref={(dom) => (this.contextDom = dom)}
                    style={{ left, top, transition: 'none' }}
                    className={`${this.theme.tooltip_box} ${this.theme.dropdown} ${this.theme.auto_width}`}
                >
                    <div className={this.theme.tooltip_inner}>
                        {items.length <= this.SCROLL_ITEM_THRESHOLD && this.makeDropdownItem()}
                        {items.length > this.SCROLL_ITEM_THRESHOLD && (
                            <Scrollbars heightRelativeToParent='260px' className={this.theme.scrollbar}>
                                {this.makeDropdownItem()}
                            </Scrollbars>
                        )}
                    </div>
                </div>
            </OutsideClick>
        );
    }

    makeDropdownItem() {
        const { items, onOutsideClick } = this.props;

        return items
            .map((value, index) => {
                const { text, enable = true, callback } = value;
                return (
                    <div
                        key={index}
                        className={`${this.theme.item} ${enable ? '' : this.theme.disabled}`}
                        onClick={() => {
                            if (enable && callback) {
                                callback();
                            }
                            if (onOutsideClick) {
                                onOutsideClick();
                            }
                        }}
                    >
                        {text}
                    </div>
                );
            });
    }
}

export default pure(ContextMenu);

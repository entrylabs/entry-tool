import React, { Component } from 'react';

class OutsideClick extends Component {
    componentDidMount = () => {
        const { eventTypes = ['click'] } = this.props;
        eventTypes.forEach((e) => {
            document.addEventListener(e, this.handleClickOutside, true);
        });
    };

    componentWillUnmount = () => {
        const { eventTypes = ['click'] } = this.props;
        eventTypes.forEach((e) => {
            document.removeEventListener(e, this.handleClickOutside, true);
        });
    };
    handleClickOutside = (event) => {
        const domNode = this.outsideWrapper;

        if (!domNode || !domNode.contains(event.target)) {
            const { onOutsideClick } = this.props;
            if (onOutsideClick) {
                onOutsideClick();
            }
        }
    };
    render() {
        const { children } = this.props;
        return <div ref={(dom) => (this.outsideWrapper = dom)}>{children}</div>;
    }
}
export default OutsideClick;

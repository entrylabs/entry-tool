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
        const { outsideExcludeDom } = this.props;
        let isExcludeCheck = false;
        if (outsideExcludeDom) {
            outsideExcludeDom.forEach((dom) => {
                if (dom && dom.contains(event.target)) {
                    isExcludeCheck = true;
                }
            });
        }

        if ((!domNode || !domNode.contains(event.target)) && !isExcludeCheck) {
            const { onOutsideClick } = this.props;
            if (onOutsideClick) {
                onOutsideClick();
            }
        }
    };
    render() {
        const { children, className, style } = this.props;
        return (
            <div ref={(dom) => (this.outsideWrapper = dom)} className={className} style={style}>
                {children}
            </div>
        );
    }
}
export default OutsideClick;

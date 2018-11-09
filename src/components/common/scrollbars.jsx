import React, { PureComponent } from 'react';
import CustomScroll from 'react-custom-scroll';
import 'react-custom-scroll/dist/customScroll.css';
class Scrollbars extends PureComponent {
    render() {
        return (
            <CustomScroll allowOuterScroll={true} heightRelativeToParent="100%" {...this.props}>
                {this.props.children}
            </CustomScroll>
        );
    }
}

export default Scrollbars;

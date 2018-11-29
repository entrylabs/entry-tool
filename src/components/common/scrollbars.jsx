import React, { Component } from 'react';
import 'react-custom-scroll/dist/customScroll.css';
let CustomScroll = null;
if (typeof window !== 'undefined') {
    CustomScroll = require('react-custom-scroll');
}
class Scrollbars extends Component {
    render() {
        return (
            <>
                {CustomScroll && (
                    <CustomScroll
                        allowOuterScroll={true}
                        heightRelativeToParent="100%"
                        {...this.props}
                    >
                        {this.props.children}
                    </CustomScroll>
                )}
            </>
        );
    }
}

export default Scrollbars;

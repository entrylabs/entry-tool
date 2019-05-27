import React, { Component } from 'react';
import '../../assets/entry/scss/scroll.scss';
// let CustomScroll = null;
// if (typeof window !== 'undefined') {
//     CustomScroll = require('react-custom-scroll');
// }
import CustomScroll from 'react-custom-scroll';
class Scrollbars extends Component {
    render() {
        return (
            <>
                {CustomScroll && <CustomScroll {...this.props}>{this.props.children}</CustomScroll>}
            </>
        );
    }
}

export default Scrollbars;

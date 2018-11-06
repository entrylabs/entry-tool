import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ColorPickAction } from '../../actions';
import ColorPicker from './color';

class ColorPickerWrapper extends Component {
    render() {
        return <ColorPicker {...this.props} />;
    }
}

// const mapStateToProps = (state) => ({
//     // ...state,
// });

const mapDispatchToProps = (dispatch) => ({
    ColorPickAction: (visible) => dispatch(ColorPickAction(visible)),
});

export default connect(
    undefined,
    mapDispatchToProps
)(ColorPickerWrapper);
// mapStateToProps,
// mapDispatchToProps

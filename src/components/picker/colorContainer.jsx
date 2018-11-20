import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onChangeColorPicker } from '../../actions/picker';
import ColorPicker from './color';

class ColorPickerContainer extends Component {
    render() {
        return <ColorPicker {...this.props} />;
    }
}

// const mapStateToProps = (state) => ({
//     // ...state,
// });

const mapDispatchToProps = (dispatch) => ({
    onChangeColorPicker: (visible) => dispatch(onChangeColorPicker(visible)),
});

export default connect(
    undefined,
    mapDispatchToProps
)(ColorPickerContainer);
// mapStateToProps,
// mapDispatchToProps

import React, { Component } from 'react';
import withWrapper from '@hoc/withWrapper';
import { connect } from 'react-redux';
import Dropdown from './dropdown';
import { onSelectDropdown } from '@actions/widget';

class ColorPickerContainer extends Component {
    render() {
        return <Dropdown {...this.props} />;
    }
}
const mapDispatchToProps = (dispatch) => ({
    onSelectDropdown: (visible) => dispatch(onSelectDropdown(visible)),
});

export default withWrapper({
    type: 'widget',
})(
    connect(
        undefined,
        mapDispatchToProps
    )(ColorPickerContainer)
);

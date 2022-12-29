import { Component } from 'react';
import withWrapper from '@hoc/withWrapper';
import { connect } from 'react-redux';
import DropdownExtra from './dropdownExtra';
import { onSelectDropdown } from '@actions/widget';

class DropdownExtraContainer extends Component {
    render() {
        return <DropdownExtra {...this.props} />;
    }
}
const mapDispatchToProps = (dispatch) => ({
    onSelectDropdown: (visible) => dispatch(onSelectDropdown(visible)),
});

export default withWrapper({
    type: 'widget',
})(connect(undefined, mapDispatchToProps)(DropdownExtraContainer));

import { Component } from 'react';
import withWrapper from '@hoc/withWrapper';
import { connect } from 'react-redux';
import { onChangeLedPicker } from '../../actions/picker';
import LedPicker from './ledPicker';

class LedPickerContainer extends Component {
    render() {
        return <LedPicker {...this.props} />;
    }
}

// const mapStateToProps = (state) => ({
//     // ...state,
// });

const mapDispatchToProps = (dispatch) => ({
    onChangeLedPicker: (visible) => dispatch(onChangeLedPicker(visible)),
});

export default withWrapper({
    type: 'microBitLedPicker',
})(connect(undefined, mapDispatchToProps)(LedPickerContainer));
// mapStateToProps,
// mapDispatchToProps

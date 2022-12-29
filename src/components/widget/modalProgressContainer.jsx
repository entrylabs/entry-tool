import { Component } from 'react';
import withWrapper from '@hoc/withWrapper';
import { connect } from 'react-redux';
import { visibleAction } from '../../actions/index';
import ModalProgress from './modalProgress';

class ModalProgressContainer extends Component {
    render() {
        return <ModalProgress {...this.props} onClose={() => this.props.setVisible(false)} />;
    }
}

const mapDispatchToProps = (dispatch) => ({
    setVisible: (isShow) => dispatch(visibleAction(isShow)),
});

export default withWrapper({
    type: 'widget',
})(connect(undefined, mapDispatchToProps)(ModalProgressContainer));

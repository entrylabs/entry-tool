import React, { Component } from 'react';
import { connect } from 'react-redux';
import DataAnalytics from './DataAnalytics';
import { onSummitDataAnalytics } from '@actions/editor';
import withWrapper from '@hoc/withWrapper';

class DataAnalyticsContainer extends Component {
    render() {
        return <DataAnalytics {...this.props} />;
    }
}

const mapDispatchToProps = (dispatch) => ({
    onSummitDataAnalytics: (data) => dispatch(onSummitDataAnalytics(data)),
});

export default withWrapper({ type: 'editor' })(
    connect(undefined, mapDispatchToProps)(DataAnalyticsContainer)
);

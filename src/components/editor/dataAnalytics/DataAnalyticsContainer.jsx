import React, { Component } from 'react';
import { connect } from 'react-redux';
import DataAnalytics from './DataAnalytics';
import {
    onSubmitDataAnalytics,
    onToastDataAnalytics,
    onChangeDataAnalytics,
    onAlertDataAnalytics,
} from '@actions/editor';
import withWrapper from '@hoc/withWrapper';

class DataAnalyticsContainer extends Component {
    render() {
        return <DataAnalytics {...this.props} />;
    }
}

const mapDispatchToProps = (dispatch) => ({
    onSubmitDataAnalytics: (data) => dispatch(onSubmitDataAnalytics(data)),
    onToastDataAnalytics: (data) => dispatch(onToastDataAnalytics(data)),
    onChangeDataAnalytics: (data) => dispatch(onChangeDataAnalytics(data)),
    onAlertDataAnalytics: (data) => dispatch(onAlertDataAnalytics(data)),
});

export default withWrapper({ type: 'editor' })(
    connect(undefined, mapDispatchToProps)(DataAnalyticsContainer)
);

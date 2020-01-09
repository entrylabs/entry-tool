import React, { Component } from 'react';
import DataAnalytics from './DataAnalytics';
import withWrapper from '@hoc/withWrapper';

class DataAnalyticsContainer extends Component {
    render() {
        return <DataAnalytics {...this.props} />;
    }
}

export default withWrapper({ type: 'editor' })(DataAnalyticsContainer);

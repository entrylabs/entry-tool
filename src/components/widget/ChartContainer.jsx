import React, { Component } from 'react';
import Chart from './Chart';
import withWrapper from '@hoc/withWrapper';

class ChartContainer extends Component {
    render() {
        return <Chart {...this.props} />;
    }
}

export default withWrapper({ type: 'editor' })(ChartContainer);

import React from 'react';
import SideBar from './SideBar';
import BigICON from './BigICON';

export default (props) => {
    let data = props.data;
    if (props.data && props.data.data) {
        data = props.data.data;
    }
    if (props.sidebar) {
        return <SideBar {...props} data={data} />;
    }
    return <BigICON {...props} data={data} />;
};

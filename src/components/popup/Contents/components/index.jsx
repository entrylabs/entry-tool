import React, { useEffect, useState } from 'react';
import _memoize from 'lodash/memoize';

const memoizeImport = _memoize((url) => import(url));
const Types = ['sound', 'table'];

const createAsyncComonent = (name) => (props) => {
    const [component, setComponent] = useState();
    let { type } = props;
    if (!Types.includes(type)) {
        type = 'default';
    }

    useEffect(() => {
        const url = `./${type}/${name}`;
        memoizeImport(url).then((component) => {
            setComponent(component);
        });
    }, []);

    if (component) {
        return <component.default {...props} />;
    }
    return null;
};

export const PopupList = createAsyncComonent('PopupList');
export const SelectItem = createAsyncComonent('SelectItem');

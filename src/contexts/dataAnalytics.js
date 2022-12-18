import { createContext, useReducer, useRef } from 'react';
import { dataAnalyticsReducer } from '@reducers/dataAnalytics';

export const DataAnalyticsContext = createContext();

const DataAnalyticsContextProvider = (props) => {
    const gridRef = useRef();
    const { analytics = {} } = props;
    const [dataAnalytics, dispatch] = useReducer(dataAnalyticsReducer, {
        ...analytics,
        gridRef,
    });

    return (
        <DataAnalyticsContext.Provider value={{ dataAnalytics, dispatch }}>
            {props.children}
        </DataAnalyticsContext.Provider>
    );
};

export default DataAnalyticsContextProvider;

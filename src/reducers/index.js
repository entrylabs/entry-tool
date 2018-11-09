import { combineReducers } from 'redux';
import commonReducer from './common';
import popupReducer from './popup';
import pickerReducer from './picker';
import widgetReducer from './widget';

export default combineReducers({
    commonReducer,
    popupReducer,
    pickerReducer,
    widgetReducer,
});

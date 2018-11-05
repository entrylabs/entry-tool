import { combineReducers } from 'redux';
import commonReducer from './common';
import popupReducer from './popup';
import pickerReducer from './picker';

export default combineReducers({
    commonReducer,
    popupReducer,
    pickerReducer,
});

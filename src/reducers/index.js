import { combineReducers } from 'redux';
import commonReducer from './common';
import popupReducer from './popup';

export default combineReducers({
    commonReducer,
    popupReducer,
});

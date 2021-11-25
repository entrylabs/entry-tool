import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import commonReducer from './common';
import popupReducer from './popup';
import pickerReducer from './picker';
import widgetReducer from './widget';
import soundReducer from './sound';

export default combineReducers({
    commonReducer,
    popupReducer,
    pickerReducer,
    widgetReducer,
    form: formReducer,
    soundReducer,
});

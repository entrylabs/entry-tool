import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import EmitMiddleware from './middleware/emit';

/* eslint-disable no-unused-vars */
export default function configureStore(initialState = {}, emitter) {
    if (!emitter) {
        return createStore(rootReducer, applyMiddleware(thunk));
    }

    const emit = new EmitMiddleware(emitter);
    const middlewares = [emit.popupEvent, thunk];
    return createStore(rootReducer, applyMiddleware(...middlewares));
}

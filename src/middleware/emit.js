import { VISIBLE, CLICK_BUTTON, TRIGGER_EVENT, } from '../actions/index';
import { API_FAIL } from '../actions/popup';

export default class EmitMiddleware {
    constructor(emitter) {
        this.emitter = emitter;
    }

    get popupEvent() {
        return store => next => (action) => {
            const result = next(action);
            switch (action.type) {
                case VISIBLE: {
                    if (action.data) {
                        this.emitter.emit('show');
                    } else {
                        this.emitter.emit('hide');
                    }
                    break;
                }
                case CLICK_BUTTON: {
                    const { event = '', data } = action.data;
                    this.emitter.emit('click', event, data);
                    this.emitter.emit('hide');
                    break;
                }
                case TRIGGER_EVENT: {
                    this.emitter.emit(action.event, action.data);
                    if(action.hide) {
                        console.log("hide", action);
                        this.emitter.emit('hide');
                    }
                    break;
                }
                case API_FAIL: {
                    this.emitter.emit('error', action.error);
                    break;
                }
                default: {
                    break;
                }
            }

            return result;
        };
    }
}

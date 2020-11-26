import { VISIBLE, CLICK_BUTTON, TRIGGER_EVENT } from '@actions/index';
import { API_FAIL } from '@actions/popup';
import { CHANGE_COLOR_PICKER, CHANGE_LED_PICKER } from '@actions/picker';
import {
    SUBMIT_DATA_ANALYTICS,
    TOAST_DATA_ANALYTICS,
    CHANGE_DATA_ANALYTICS,
    ALERT_DATA_ANALYTICS,
    CLOSE_BUTTON_CLICK,
} from '@actions/editor';
import {
    SELECT_DROPDOWN,
    CHANGED_ANGLE,
    CHANGE_SORTABLE_LIST,
    CHANGE_DRAGGING,
    PICK_COLOR,
} from '@actions/widget';
import root from 'window-or-global';

export default class EmitMiddleware {
    constructor(emitter) {
        this.emitter = emitter;
    }

    get popupEvent() {
        return () => (next) => (action) => {
            const result = next(action);
            switch (action.type) {
                case VISIBLE:
                    if (action.data) {
                        this.emitter.emit('show');
                    } else {
                        this.emitter.emit('hide');
                    }
                    break;
                case CLICK_BUTTON: {
                    const { event = '', data } = action.data;
                    this.emitter.emit('click', event, data);
                    this.emitter.emit('hide');
                    break;
                }
                case TRIGGER_EVENT:
                    this.emitter.emit(action.event, action.data);
                    if (action.hide) {
                        this.emitter.emit('hide');
                    }
                    break;
                case API_FAIL:
                    this.emitter.emit('fail', action.error);
                    break;
                case PICK_COLOR:
                    this.emitter.emit('pick', action.data);
                    break;
                case CHANGED_ANGLE:
                case CHANGE_SORTABLE_LIST:
                case CHANGE_LED_PICKER:
                case CHANGE_COLOR_PICKER:
                    this.emitter.emit('change', action.data);
                    break;
                case SELECT_DROPDOWN:
                    this.emitter.emit('select', action.data);
                    break;
                case CHANGE_DRAGGING:
                    this.emitter.emit('onChangeDragging', action.data);
                    break;
                case SUBMIT_DATA_ANALYTICS:
                    this.emitter.emit('submit', action.data);
                    break;
                case TOAST_DATA_ANALYTICS:
                    this.emitter.emit('toast', action.data);
                    break;
                case CHANGE_DATA_ANALYTICS:
                    this.emitter.emit('change', action.data);
                    break;
                case ALERT_DATA_ANALYTICS:
                    this.emitter.emit('alert', action.data);
                case CLOSE_BUTTON_CLICK:
                    this.emitter.emit('close');
                default: {
                    break;
                }
            }

            return result;
        };
    }
}

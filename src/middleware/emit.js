import { VISIBLE, CLICK_BUTTON, TRIGGER_EVENT } from '@actions/index';
import { API_FAIL, UPLOAD_ITEM } from '@actions/popup';
import { CHANGE_COLOR_PICKER } from '@actions/picker';
import {
    SELECT_DROPDOWN,
    CHANGED_ANGLE,
    CHANGE_SORTABLE_LIST,
    CHANGE_DRAGGING,
} from '@actions/widget';

export default class EmitMiddleware {
    constructor(emitter) {
        this.emitter = emitter;
    }

    get popupEvent() {
        return () => (next) => (action) => {
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
                case UPLOAD_ITEM:
                    action.data.objType = action.objType;
                    this.emitter.emit('loaded', action.data.data);
                    break;
                case TRIGGER_EVENT: {
                    this.emitter.emit(action.event, action.data);
                    if (action.hide) {
                        this.emitter.hide();
                    }
                    break;
                }
                case API_FAIL: {
                    this.emitter.emit('fail', action.error);
                    break;
                }
                case CHANGED_ANGLE:
                case CHANGE_SORTABLE_LIST:
                case CHANGE_COLOR_PICKER: {
                    this.emitter.emit('change', action.data);
                    break;
                }
                case SELECT_DROPDOWN: {
                    this.emitter.emit('select', action.data);
                    break;
                }
                case CHANGE_DRAGGING: {
                    this.emitter.emit('onChangeDragging', action.data);
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

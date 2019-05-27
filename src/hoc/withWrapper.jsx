import EventEmitter from 'events';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from '../App';
import configureStore from '../store';
import { visibleAction } from '../actions/index';
import Theme from '@utils/Theme';
// import httpService from '../config/axios';

const withWrapper = (option) => (WrappedComponent) => {
    return class extends EventEmitter {
        constructor(...args) {
            super();
            this.initialize(...args);
            this.render();
        }

        initialize({ container, target, isShow = true, type, data, props, url, theme } = {}) {
            let thisTarget = target;
            let thisContainer = container;
            if (!thisTarget) {
                thisTarget = document.body;
            }
            if (!thisContainer) {
                thisContainer = document.createElement('div');
            }
            Theme.type = theme;
            this._container = thisContainer;
            this._target = thisTarget;
            this._data = data;
            this._props = props;
            this._type = type;
            this.store = configureStore({}, this);
            // httpService.setupInterceptors(url);

            if (isShow) {
                this.show();
            } else {
                this.hide();
            }
        }

        set data(data) {
            Object.assign(this._data, data);
            this.render();
        }

        get data() {
            return this._data;
        }

        set container(container) {
            this._container = container;
            this.render();
        }

        get container() {
            return this._container;
        }

        set props(props) {
            this._props = props;
            this.render();
        }

        get props() {
            return this._props;
        }

        get type() {
            return this._type;
        }

        getData(key) {
            const state = this.store.getState();
            const reducer = state[`${option.type}Reducer`];
            return reducer[key] === undefined ? reducer : reducer[key];
        }

        get isShow() {
            const { commonReducer = {} } = this.store.getState();
            const { visible } = commonReducer;
            return visible;
        }

        show(props, data) {
            if (props) {
                this.props = props;
            }
            if (data) {
                this.data = data;
            }
            this.store.dispatch(visibleAction(true));
            return this;
        }

        hide(props, data) {
            if (props) {
                this.props = props;
            }
            if (data) {
                this.data = data;
            }
            this.store.dispatch(visibleAction(false));
            return this;
        }

        setData(data) {
            if (data) {
                this.data = data;
            }
            this.render();
            return this;
        }

        remove() {
            if (document.body.contains(this.container)) {
                document.body.removeChild(this.container);
            }
            this._data = undefined;
            this._props = undefined;
            this.container = undefined;
        }

        async render() {
            if (this._container) {
                ReactDOM.render(
                    <Provider store={this.store}>
                        <App className={option.type} container={this._container}>
                            <WrappedComponent
                                {...Object.assign({}, this._props, this._data)}
                                eventEmitter={this}
                            />
                        </App>
                    </Provider>,
                    this._container
                );
            }
        }
    };
};
export default withWrapper;

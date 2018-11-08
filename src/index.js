import EventEmitter from 'events';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './store';
import { visibleAction } from './actions/index';
import numberPadContainer from './components/keyboard/numberPadContainer';

var instance = null;
export default class EntryTool extends EventEmitter {
    constructor(...args) {
        super();
        this.initialize(...args);
        this.render();
    }

    static getInstance(option) {
        if (!instance) {
            instance = new EntryTool(option);
        }

        return instance;
    }

    initialize({ container, target, isShow = true, type, data, props } = {}) {
        if (!target) {
            target = document.body;
        }
        if (!container) {
            container = document.createElement('div');
        }
        this._container = container;
        // target.appendChild(container);
        this._data = data;
        this._props = props;
        this._type = type;
        this.module = this.getModule(type);
        this.store = configureStore({}, this);

        if (isShow) {
            this.show();
        } else {
            this.hide();
        }
    }

    set data(data) {
        this._data = data;
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
        const reducer = state[`${this.reducerType}Reducer`];
        return reducer[key] || reducer;
    }

    getModule(type) {
        switch (type) {
            case 'colorPicker':
                this.reducerType = 'picker';
                return import('./components/picker/colorContainer');
            case 'numberPad':
                this.reducerType = 'common';
                return import('./components/keyboard/numberPadContainer');
            case 'popup':
            default:
                this.reducerType = 'popup';
                return import('./components/popup');
        }
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

    remove() {
        document.body.removeChild(this.container);
        this._data = undefined;
        this._props = undefined;
        this.container = undefined;
    }

    async render() {
        const { default: Module } = await this.module;
        if (this._container) {
            ReactDOM.render(
                <Provider store={this.store} type={this.type}>
                    <App className={this.type}>
                        <Module
                            {...Object.assign({}, this._props, this._data)}
                            eventEmitter={this}
                        />
                    </App>
                </Provider>,
                this._container
            );
        }
    }
}

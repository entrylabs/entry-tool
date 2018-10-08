import EventEmitter from 'events';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './store';
import { visibleAction } from './actions';

var instance = null;
export default class EntryTool extends EventEmitter {
    constructor(...args) {
        super();
        const { parent = document.body } = args[0] || {};
        this.container = document.createElement('div');
        parent.appendChild(this.container);
        this.initialize(...args);
        this.render();
    }

    static getInstance(option) {
        if (!instance) {
            instance = new EntryTool(option);
        }

        return instance;
    }

    initialize({ isShow, type, data, props } = {}) {
        this._data = data;
        this._props = props;
        this._type = type;
        this.module = this.getModule(type);
        this.store = configureStore();
        if (isShow) {
            this.show();
        }
    }

    set data(data) {
        this._data = data;
        this.render();
    }

    get data() {
        return this._data;
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

    getModule(type) {
        switch (type) {
            case 'colorPicker':
                return import('./components/picker/color');
            case 'popup':
            default:
                return import('./components/popup');
        }
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
        ReactDOM.render(
            <App type={this.type}>
                <Provider store={this.store}>
                    <Module {...this._props} a={this.type} />
                </Provider>
            </App>,
            this.container
        );
    }
}

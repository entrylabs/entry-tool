import EventEmitter from 'events';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './store';
import { visibleAction } from './actions';

class EntryTool extends EventEmitter {
    constructor(...args) {
        super();
        this.container = document.createElement('div');
        document.body.appendChild(this.container);
        this.initialize(...args);
        this.render();
    }

    initialize({ isShow, type, data, props }) {
        console.log(props);
        this._data = data;
        this._props = props;
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
        return this.data;
    }

    set props(props) {
        this._props = props;
        this.render();
    }

    get props() {
        return this.props;
    }

    getModule(type) {
        switch (type) {
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
    }

    hide(props, data) {
        if (props) {
            this.props = props;
        }
        if (data) {
            this.data = data;
        }
        this.store.dispatch(visibleAction(false));
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
            <Provider store={this.store}>
                <App>
                    <Module {...this._props} />
                </App>
            </Provider>,
            this.container
        );
    }
}

module.export = EntryTool;
if (window) {
    window.EntryTool = EntryTool;
}

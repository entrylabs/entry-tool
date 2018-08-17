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
        this.module = this.getModule(type);
        this.data = data;
        this.props = props;
        this.store = configureStore();
        if (isShow) {
            this.show();
        }
    }

    getModule(type) {
        switch (type) {
            case 'popup':
            default:
                return import('./components/popup');
        }
    }

    show(props) {
        this.store.dispatch(visibleAction(true));
    }

    hide(props) {
        this.store.dispatch(visibleAction(false));
    }

    async render({ props = {}, data = {} } = {}) {
        const { default: Module } = await this.module;
        ReactDOM.render(
            <Provider store={this.store}>
                <App>
                    <Module {...this.props} {...props} />
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

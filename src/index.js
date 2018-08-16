import EventEmitter from 'events';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './store';
import { visibilityAction } from './actions';

class EntryTool extends EventEmitter {
    constructor(...args) {
        super();
        this.initialize(...args);
        this.container = document.createElement('div');
        document.body.appendChild(this.container);
    }

    initialize({ option = {}, props = {} } = {}) {
        const { isShow, type } = option;
        this.module = this.getModule(type);
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
        this.store.dispatch(visibilityAction(true));
        this.render(props);
    }

    async render({ props = {} } = {}) {
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

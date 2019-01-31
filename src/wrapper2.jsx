import EventEmitter from 'events';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './store';
import { visibleAction } from './actions/index';
import httpService from './config/axios';

let instance = null;
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

    initialize({ container, target, isShow = true, type, data, props, url } = {}) {
        let thisTarget = target;
        let thisContainer = container;
        if (!thisTarget) {
            thisTarget = document.body;
        }
        if (!thisContainer) {
            thisContainer = document.createElement('div');
        }

        this._container = thisContainer;
        this._target = thisTarget;
        this._data = data;
        this._props = props;
        this._type = type;
        this.module = this.getModule(type);
        this.store = configureStore({}, this);
        httpService.setupInterceptors(url);

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
        const reducer = state[`${this.reducerType}Reducer`];
        return reducer[key] || reducer;
    }

    getModule(type) {
        switch (type) {
            case 'colorPicker':
                this.reducerType = 'picker';
                return import('./components/picker/colorContainer');
            case 'numberWidget':
                this.reducerType = 'common';
                return import('./components/widget/numberContainer');
            case 'dropdownWidget':
                this.reducerType = 'widget';
                return import('./components/widget/dropdownContainer');
            case 'angleWidget':
                this.reducerType = 'widget';
                return import('./components/widget/angleContainer');
            case 'contextMenu':
                this.reducerType = 'widget';
                return import('./components/widget/contextMenuContainer');
            case 'sortableWidget':
                this.reducerType = 'widget';
                return import('./components/widget/sortableContainer');
            case 'popup':
            default:
                this._target.appendChild(this._container);
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
        const { default: Module } = await this.module;
        if (this._container) {
            ReactDOM.render(
                <Provider store={this.store} type={this.type}>
                    <App className={this.type} container={this._container}>
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

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initState } from '@actions/popup';
import { visibleAction } from '@actions/index';
import classname from 'classnames';
import Navigation from './Contents/Navigation';
import Select from './Contents/Select';
import FileUpload from './Contents/FileUpload/index';
import WriteBox from './Contents/WriteBox';
import Draw from './Contents/Draw';
import Projects from './Contents/Projects/index';
import { DEFAULT_OPTIONS } from '../../constants';
import { CommonUtils } from '@utils/Common';
import Theme from '@utils/Theme';
import root from 'window-or-global';

class Sprite extends Component {
    constructor(props) {
        super(props);
        this.theme = Theme.getStyle('popup');
        const { navigations = {}, type, initState } = this.property;
        this.state = {
            navigation: Object.keys(navigations)[0] || type,
        };
        initState();
    }

    get property() {
        return {
            ...DEFAULT_OPTIONS.POPUP_TYPE[this.props.type],
            writeBoxOption: DEFAULT_OPTIONS.WRITE_BOX,
            ...this.props,
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.popup.closed) {
            this.close();
        }
    }

    componentDidMount() {
        window.onpopstate = this.onpopstate;
        console.log('add history');
        window.history.pushState({}, 'popup');
    }

    componentWillUnmount() {
        window.removeEventListener('onpopstate', this.onpopstate, false);
    }

    onpopstate = () => {
        const { visibleAction } = this.props;
        visibleAction(false);
    };
    
    close() {
        console.log('remove history');
        root.history.back();
    }

    setContent = function() {
        const { opt = {}, writeBoxOption, data: dataObj, imageBaseUrl } = this.property;
        const { isDrawVector, multiSelect, search: searchOption } = opt;
        const { navigation: selected } = this.state;
        const navSettings = {
            ...this.property,
            searchOption,
            selected,
            onClicked: (item) => this.setState({ navigation: item }),
        };
        // 이전버전 호환을 위해 삽입.
        const isOld = dataObj && dataObj.data;
        const uploads = isOld ? dataObj.uploads : dataObj;
        const data = isOld ? dataObj.data : dataObj;

        let navigation = <Navigation {...navSettings} isDrawVector={isDrawVector} />;
        let view = <div>empty</div>;
        switch (selected) {
            case 'select':
                view = <Select {...this.property} multiSelect={multiSelect} data={data} />;
                navigation = <Navigation {...navSettings} isDrawVector={isDrawVector} />;
                break;
            case 'upload':
                view = <FileUpload {...this.property} uploads={uploads} />;
                navigation = <Navigation {...navSettings} searchOption={false} />;
                break;
            case 'draw':
                view = <Draw />;
                navigation = <Navigation {...navSettings} searchOption={false} />;
                break;
            case 'write':
                view = <WriteBox fontOption={writeBoxOption} />;
                navigation = <Navigation {...navSettings} searchOption={false} />;
                break;
            case 'expansion':
                const url = imageBaseUrl || '/lib/entry-js/images/hardware/';
                navigation = null;
                view = <Select type={'bigicon'} imageBaseUrl={url} data={data} />;
                break;
            case 'projects':
            case 'favorites':
                view = <Projects type={selected} data={data} />;
                break;
            default:
                break;
        }

        return (
            <>
                {navigation && navigation}
                {view}
            </>
        );
    };

    render() {
        return (
            <div className={this.theme.popup_wrap}>
                <header className={this.theme.pop_header}>
                    <h1>{CommonUtils.getLang(this.property.title)}</h1>
                    <button
                        onClick={this.close}
                        className={classname(this.theme.btn_back, this.theme.imbtn_pop_back)}
                    >
                        <span className={this.theme.blind}>
                            {CommonUtils.getLang('Menus.history_back')}
                        </span>
                    </button>
                </header>
                {this.setContent()}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    popup: state.popupReducer,
});

const mapDispatchToProps = (dispatch) => ({
    visibleAction: (visible) => dispatch(visibleAction(visible)),
    initState: () => dispatch(initState()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sprite);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initState } from '@actions/popup';
import { visibleAction } from '@actions/index';
import classname from 'classnames';
import Navigation from './Contents/Navigation';
import Select from './Contents/Select';
import FileUpload from './Contents/FileUpload/index';
import FileDragUpload from './Contents/FileDragUpload/index';
import WriteBox from './Contents/WriteBox';
import Draw from './Contents/Draw';
import Projects from './Contents/Projects/index';
import { DEFAULT_OPTIONS } from '../../constants';
import { CommonUtils } from '@utils/Common';
import Theme from '@utils/Theme';
import root from 'window-or-global';
import Modal from './Modal';
import * as ReactDOM from 'react-dom';

class Popup extends Component {
    constructor(props) {
        super(props);
        this.theme = Theme.getStyle('popup');
        this.headerButtonRef = React.createRef();

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
        if (this.props.isClosed) {
            this.close();
        }
    }

    componentDidMount() {
        window.onpopstate = this.onpopstate;
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
        root.history.back();
    }

    setContent() {
        const { opt = {}, writeBoxOption, data: dataObj, uploads: uploaded, type } = this.property;
        const { imageBaseUrl: expsnsionIconBaseUrl } = this.property;
        const { isDrawVector, multiSelect, showSelected, search: searchOption } = opt;
        const { navigation: selected } = this.state;
        const navSettings = {
            ...this.property,
            searchOption,
            selected,
            onClicked: (item) => this.setState({ navigation: item }),
        };
        // 이전버전 호환을 위해 삽입.
        const isOld = dataObj && dataObj.data;
        const uploads = isOld ? dataObj.uploads : uploaded;
        const data = isOld ? dataObj.data : dataObj;
        const HeaderButtonPortal = ({ children }) => {
            if (this.headerButtonRef.current) {
                return ReactDOM.createPortal(children, this.headerButtonRef.current);
            }
            return <div />;
        };

        let navigation = <Navigation {...navSettings} />;
        let view = <div>empty</div>;
        switch (selected) {
            case 'select':
                view = (
                    <Select
                        {...this.property}
                        isDrawVector={isDrawVector}
                        multiSelect={multiSelect}
                        showSelected={showSelected}
                        data={data}
                        HeaderButtonPortal={HeaderButtonPortal}
                    />
                );
                navigation = <Navigation {...navSettings} isDrawVector={isDrawVector} />;
                break;
            case 'upload':
                view = (
                    <FileUpload
                        {...this.property}
                        uploads={uploads}
                        HeaderButtonPortal={HeaderButtonPortal}
                    />
                );
                navigation = <Navigation {...navSettings} searchOption={false} />;
                break;
            case 'dragUpload':
                view = (
                    <FileDragUpload
                        {...this.property}
                        uploads={uploads}
                        HeaderButtonPortal={HeaderButtonPortal}
                    />
                );
                navigation = <Navigation {...navSettings} searchOption={false} />;
                break;
            case 'draw':
                view = <Draw type={type} HeaderButtonPortal={HeaderButtonPortal} />;
                navigation = <Navigation {...navSettings} searchOption={false} />;
                break;
            case 'write':
                view = (
                    <WriteBox fontOption={writeBoxOption} HeaderButtonPortal={HeaderButtonPortal} />
                );
                navigation = <Navigation {...navSettings} searchOption={false} />;
                break;
            case 'expansion': {
                const url = expsnsionIconBaseUrl || '/lib/entry-js/images/hardware/';
                navigation = null;
                view = (
                    <Select
                        type={'bigicon'}
                        imageBaseUrl={url}
                        data={data}
                        HeaderButtonPortal={HeaderButtonPortal}
                    />
                );
                break;
            }
            case 'aiUtilize': {
                const aiImageurl = expsnsionIconBaseUrl || '/lib/entry-js/images/aiUtilize/';
                navigation = null;
                view = (
                    <Select
                        type={'bigicon'}
                        imageBaseUrl={aiImageurl}
                        data={data}
                        HeaderButtonPortal={HeaderButtonPortal}
                    />
                );
                break;
            }
            case 'projects':
            case 'favorites':
                view = (
                    <Projects
                        type={selected}
                        data={data}
                        raw={dataObj}
                        HeaderButtonPortal={HeaderButtonPortal}
                    />
                );
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
    }

    render() {
        const { navigation } = this.state;
        return (
            <div className={this.theme.popup_wrap}>
                <header className={this.theme.pop_header}>
                    <h1>{CommonUtils.getLang(this.property.title)}</h1>
                    <button
                        onClick={this.close}
                        className={classname(this.theme.btn_back, this.theme.imbtn_pop_close)}
                    >
                        <span className={this.theme.blind}>
                            {CommonUtils.getLang('Menus.history_back')}
                        </span>
                    </button>
                    <div ref={this.headerButtonRef} />
                </header>
                <div className={this.theme.section_container}>
                    <div className={`${this.theme.container_inner} ${navigation}`}>
                        {this.setContent()}
                    </div>
                </div>
                <Modal />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isClosed: state.popupReducer.closed,
});

const mapDispatchToProps = (dispatch) => ({
    visibleAction: (visible) => dispatch(visibleAction(visible)),
    initState: () => dispatch(initState()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Popup);

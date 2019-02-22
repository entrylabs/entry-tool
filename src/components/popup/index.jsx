import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initState } from '@actions/popup';
import { visibleAction } from '@actions/index';
import Styles from '@assets/scss/popup.scss';

import Navigation from './Navigation';
import Select from './Contents/Select';
import FileUpload from './Contents/FileUpload';
import WriteBox from './Contents/WriteBox';
import Draw from './Contents/Draw';
import Projects from './Contents/Projects';
import { DEFAULT_OPTIONS } from '../../constants';
import { CommonUtils } from '@utils/Common';

class Sprite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navigation: Object.keys(this.options.navigations)[0] || props.type,
        };
        this.onNavigationClicked = this.onNavigationClicked.bind(this);
    }

    get options() {
        const options = {
            ...DEFAULT_OPTIONS.POPUP_TYPE[this.props.type],
            writeBoxOption: DEFAULT_OPTIONS.WRITE_BOX,
            ...this.props,
        };
        if (!options.navigations) {
            options.navigations = [];
        }
        return options;
    }

    componentDidUpdate(prevProps) {
        if (prevProps.type !== this.props.type) {
            this.setState({ navigation: Object.keys(this.options.navigations)[0] || this.props.type });
            this.props.initState({ selected: [], uploads: [], baseUrl: this.props.baseUrl });
        }
    }

    componentDidMount() {
        window.onpopstate = this.close;
        window.history.pushState({}, 'popup');
    }

    componentWillUnmount() {
        window.removeEventListener('onpopstate', this.close, false);
    }

    close = () => {
        const { visibleAction } = this.props;
        visibleAction(false);
    };

    onNavigationClicked(e) {
        e.preventDefault();
        this.setState({ navigation: e.currentTarget.getAttribute('data-key') });
    }

    setContent = function() {
        const navSettings = {
            list: this.options.navigations,
            selected: this.state.navigation,
            onClicked: this.onNavigationClicked,
        };
        const imageBaseUrl = this.props.imageBaseUrl || '/lib/entry-js/images/hardware/';
        const isOffline = this.props.isOffline;
        const defaultNavigation = <Navigation {...navSettings} />;
        const contents = {
            select: {
                view: (
                    <Select
                        type={this.props.type}
                        mainType={this.options.mainType}
                        subType={'sidebar'}
                        sidebar={this.options.sidebar}
                        data={this.props.data || []}
                        multiSelect={this.options.opt && this.options.opt.multiSelect}
                    />
                ),
                nav: (
                    <Navigation
                        {...navSettings}
                        searchOption={this.options.opt && this.options.opt.search}
                        hidden={{ type: this.props.type }}
                    />
                ),
            },
            upload: {
                view: <FileUpload
                    type={this.options.mainType}
                    options={this.options.opt}
                    uploads={this.props.data.uploads}
                    isOffline={isOffline}
                />,
            },
            draw: {
                view: <Draw/>,
            },
            write: {
                view: <WriteBox fontOption={this.options.writeBoxOption}/>,
            },
            expansion: {
                view: <Select type={'bigicon'} data={this.props.data || []} imageBaseUrl={imageBaseUrl}/>,
                nav: true,
            },
            projects: {
                view: (
                    <Projects type={navSettings.selected} data={this.props.data || { data: [] }}/>
                ),
                nav: (
                    <Navigation
                        {...navSettings}
                        searchOption={{ category: true, date: true, order: true, query: true }}
                        hidden={{ type: navSettings.selected }}
                    />
                ),
            },
            favorites: {
                view: <Projects type={navSettings.selected} data={this.props.data || []}/>,
                nav: (
                    <Navigation
                        {...navSettings}
                        searchOption={{ category: true, date: true, order: true, query: true }}
                        hidden={{ type: navSettings.selected }}
                    />
                ),
            },
        };

        return (
            <React.Fragment>
                {contents[navSettings.selected].nav || defaultNavigation}
                {contents[navSettings.selected].view}
            </React.Fragment>
        );
    };

    render() {
        return (
            <div>
                <div className={Styles.popup_wrap}>
                    <header className={Styles.pop_header}>
                        <h1>{CommonUtils.getLang(this.options.title)}</h1>
                        <button
                            onClick={this.close}
                            className={`${Styles.btn_back} ${Styles.imbtn_pop_back}`}
                        >
                            <span className={Styles.blind}>뒤로가기</span>
                        </button>
                    </header>
                    {this.setContent()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    ...state,
});

const mapDispatchToProps = (dispatch) => ({
    visibleAction: (visible) => dispatch(visibleAction(visible)),
    initState: (data) => dispatch(initState(data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Sprite);

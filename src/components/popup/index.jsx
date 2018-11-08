import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initState } from '../../actions/popup';
import { visibleAction } from '../../actions/index';
import Styles from '../../assets/scss/popup.scss';

import Navigation from './Navigation';
import Select from './Contents/Select';
import FileUpload from './Contents/FileUpload';
import WriteBox from './Contents/WriteBox';
import Draw from './Contents/Draw';
import Join from './Contents/Join';
import Login from './Contents/Login';
import { DEFAULT_OPTIONS } from '../../constatns';

class Sprite extends Component {
    constructor(props) {
        super(props);
        this.options = {
            ...DEFAULT_OPTIONS.POPUP_TYPE[this.props.type],
            writeBoxOption: DEFAULT_OPTIONS.WRITE_BOX,
            ...this.props,
        };

        if (this.props.write) {
            this.options.navigations.write = { name: '글 상자' };
        }

        this.state = {
            navigation: Object.keys(this.options.navigations || [])[0],
        };
        this.onNavigationClicked = this.onNavigationClicked.bind(this);
    }

    componentDidMount() {
        window.onpopstate = this.close;
        window.history.pushState({}, 'popup');
    }

    componentWillMount() {
        this.props.initState();
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
            selected: this.state.navigation || this.props.type,
            onClicked: this.onNavigationClicked,
            search: false,
        };
        const data = this.options.data || this.props.popupReducer.data || [];
        const defaultNavigation = <Navigation {...navSettings} />;
        const contents = {
            select: {
                view: <Select type={this.props.type} subType={'sidebar'} sidebar={this.options.sidebar} data={data} />,
                nav: <Navigation {...navSettings} search={true} />,
            },
            upload: {
                view: <FileUpload />,
            },
            draw: {
                view: <Draw />,
            },
            write: {
                view: <WriteBox fontOption={this.options.writeBoxOption} />,
            },
            expansion: {
                view: <Select type={'bigicon'} data={data} />,
                nav: true,
            },
            join: {
                view: <Join />,
                nav: true,
            },
            login: {
                view: <Login />,
                nav: true,
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
                        <h1>{this.options.title}</h1>
                        <button onClick={this.close} className={Styles.btn_back + ' ' + Styles.imbtn_pop_back}>
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
    mapDispatchToProps
)(Sprite);

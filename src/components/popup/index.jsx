import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems, initState } from '../../actions/popup';
import { visibleAction } from '../../actions/index';
import Styles from '../../assets/scss/popup.scss';

import Navigation from './Navigation';
import Select from './Contents/Select';
import FileUpload from './Contents/FileUpload';
import WriteBox from './Contents/WriteBox';
import Draw from './Contents/Draw';
import { DEFAULT_OPTIONS } from '../../constatns';

class Sprite extends Component {
    constructor(props) {
        super(props);
        this.options = {
            ...DEFAULT_OPTIONS.POPUP_TYPE[this.props.type],
            writeBoxOption : DEFAULT_OPTIONS.WRITE_BOX,
            ...this.props
        };

        if(this.props.write) {
            this.options.navigations.write = { name: '글 상자' }
        }else {
            delete this.options.navigations.write
        }

        this.state = {
            navigation: Object.keys(this.options.navigations || [])[0],
        };

        //this.props.visibleAction(false)
        this.onNavigationClicked = this.onNavigationClicked.bind(this);
    }

    componentWillMount() {
        const url = this.props.url || "http://local.playentry.org";
        if (!this.options.data) {
            this.props.fetchItems(url, this.props.type, Object.keys(this.options.sidebar || [])[0]);
        }
        this.props.initState({ baseUrl : url });
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
            search: false,
        };
        const data = this.options.data || this.props.popupReducer.data || [];
        const defaultNavigation = <Navigation {...navSettings}/>;
        const contents = {
            select: {
                view: <Select type={'sidebar'} sidebar={this.options.sidebar} data={data}/>,
                nav: <Navigation {...navSettings} search={true}/>,
            },
            upload: {
                view: <FileUpload/>,
            },
            draw: {
                view: <Draw/>,
            },
            write: {
                view: <WriteBox fontOption={ this.options.writeBoxOption }/>,
            },
            expansion: {
                view: <Select type={'bigicon'} data={data}/>,
                nav: true,
            },
        };

        return (
            <div>
                {contents[navSettings.selected].nav || defaultNavigation}
                {contents[navSettings.selected].view}
            </div>
        );
    };

    render() {
        return (
            <div>
                <div className={Styles.popup_wrap}>
                    <header className={Styles.pop_header}>
                        <h1>오브젝트 추가하기</h1>
                        <button onClick={this.close} className={Styles.btn_back + ' ' + Styles.imbtn_pop_back}>
                            <span className={Styles.blind}>뒤로가기</span>
                        </button>
                    </header>
                    <section className={Styles.pop_content}>
                        {this.setContent()}
                    </section>
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
    fetchItems: (baseUrl, type, category, subMenu) => dispatch(fetchItems(baseUrl, type, category, subMenu)),
    initState: (data) => dispatch(initState(data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Sprite);

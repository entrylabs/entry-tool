import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems, applySelected, visibleAction } from '../../actions';
import '../../assets/scss/popup.scss';

import Navigation from './Navigation';
import Select from './Contents/Select';
import FileUpload from './Contents/FileUpload';
import WriteBox from './Contents/WriteBox';
import Draw from './Contents/Draw';
import { POPUP_TYPE } from '../../constatns';

class Sprite extends Component {
    constructor(props) {
        super(props);
        this.options = POPUP_TYPE[this.props.type];
        this.state = {
            navigation: Object.keys(this.options.navigations || [])[0],
        };

        this.onNavigationClicked = this.onNavigationClicked.bind(this);
    }

    componentWillMount() {
        if (!this.options.data) {
            this.props.fetchItems(this.props.type, Object.keys(this.options.sidebar || [])[0]);
        }
        this.props.applySelected([]);
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
                view: <WriteBox/>,
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
                <div className="popup_wrap">
                    <header className="pop_header">
                        <h1>오브젝트 추가하기</h1>
                        <button onClick={this.close} className="btn_back imbtn_pop_back">
                            <span className="blind">뒤로가기</span>
                        </button>
                    </header>
                    <section className="pop_content">
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
    fetchItems: (type, category, subMenu) => dispatch(fetchItems(type, category, subMenu)),
    applySelected: (list) => dispatch(applySelected(list)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Sprite);

import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { visibleAction } from '../../actions';
import '../../assets/scss/popup.scss';

import Navigation from './Navigation';
import SelectWithSideBar from './Contents/SelectWithSideBar';
import FileUpload from './Contents/FileUpload';
import WriteBox from './Contents/WriteBox';
import Draw from './Contents/Draw';
import SelectBig from './Contents/SelectBig';

class Sprite extends Component {
    constructor(props) {
        super(props);
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

    setContent = function() {
        const list = this.props.options.navigations;
        const defaultNav = <Navigation list={list} search={false}/>;
        let selected = this.props.popupReducer.navigation || Object.keys(list)[0];
        const contents = {
            select: {
                view: <SelectWithSideBar sidebar={this.props.options.sidebar}/>,
                nav: <Navigation list={list} search={true}/>,
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
                view: <SelectBig/>,
                nav: true,
            },
        };
        return (
            <div>
                {contents[selected].nav || defaultNav}
                {contents[selected].view}
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
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Sprite);

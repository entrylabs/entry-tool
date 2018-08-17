import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { visibleAction } from '../../actions';

const BackButton = styled.button`
    background: white;
    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;
class Popup extends Component {
    componentDidMount() {
        window.onpopstate = this.close;
        window.history.pushState({}, 'popup');
    }
    componentWillUnmount() {
        window.removeEventListener('onpopstate', this.close, false);
    }

    close = () => {
        const { visibleAction } = this.props;
        console.log(visibleAction);
        visibleAction(false);
    };

    render() {
        return (
            <div>
                <BackButton onClick={this.close}>{`<-`}</BackButton>
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
    mapDispatchToProps
)(Popup);

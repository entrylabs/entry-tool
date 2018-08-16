import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { visibilityAction } from '../../actions';

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
        const { visibilityAction } = this.props;
        console.log(visibilityAction);
        visibilityAction(false);
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
    visibilityAction: (visibility) => dispatch(visibilityAction(visibility)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Popup);

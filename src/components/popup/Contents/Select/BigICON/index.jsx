import React, { Component } from 'react';
import Item from './Item';
import { connect } from 'react-redux';
import Styles from '../../../../../assets/scss/popup.scss';
import { triggerEvent } from '../../../../../actions/index';

class Index extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    drawItems() {
        return this.props.data.map(item => <Item key={item.name} item={item}/>);
    }

    handleSubmit(event, data) {
        this.props.triggerEvent( event, data );
    }

    render() {
        return (
            <div className={Styles.section_cont}>
                <h2 className={Styles.blind}>확장 블록 불러오기 리스트</h2>
                <div className={Styles.cont_box}>
                    <div className={Styles.extend_block}>
                        <div className={Styles.scroll_box}>
                            <ul className={Styles.list}>
                                {this.drawItems()}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={Styles.pop_btn_box}>
                    <a href="#NULL" onClick={e => this.handleSubmit('close')}>취소</a>
                    <a href="#NULL" className={Styles.active} onClick={e => this.handleSubmit('submit', { selected: this.props.popupReducer.selected })}>추가하기</a>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    ...state,
});

const mapDispatchToProps = (dispatch) => ({
    triggerEvent: (event, data) => dispatch(triggerEvent(event, data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Index);
import React, { Component } from 'react';
import Item from './Item';
import { connect } from 'react-redux';
import Styles from '../../../../../assets/scss/popup.scss'
import { visibleAction } from '../../../../../actions';

class Index extends Component {
    constructor(props) {
        super(props);

        this.onSubmitBtnClicked = this.onSubmitBtnClicked.bind(this);
        this.onCancelBtnClicekd = this.onCancelBtnClicekd.bind(this);
    }
    drawItems() {
        return this.props.data.map(item => <Item key={item.name} item={item}/>);
    }

    onSubmitBtnClicked(e) {
        e.preventDefault();
        const selected = this.props.popupReducer.selected;
        selected.forEach(function(item) {
            item.id = window.Entry.generateHash();
            window.Entry.playground.addExpansionBlock(item, true, true);
        });
        this.props.visibleAction(false);
    }

    onCancelBtnClicekd(e) {
        e.preventDefault();
        this.props.visibleAction(false);
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
                    <a href="#NULL" onClick={this.onCancelBtnClicekd}>취소</a>
                    <a href="#NULL" className={Styles.active} onClick={this.onSubmitBtnClicked}>추가하기</a>
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
)(Index);
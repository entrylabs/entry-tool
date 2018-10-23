import React, { Component } from 'react';
import Item from './Item';
import { connect } from 'react-redux';
import Styles from '../../../../../assets/scss/popup.scss'

class Index extends Component {
    drawItems() {
        return this.props.data.map(item => <Item key={item.name} item={item}/>);
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
                    <a href="#NULL">취소</a>
                    <a href="#NULL" className={Styles.active}>추가하기</a>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    ...state,
});

export default connect(
    mapStateToProps,
    null,
)(Index);
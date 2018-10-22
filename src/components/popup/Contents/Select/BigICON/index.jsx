import React, { Component } from 'react';
import Item from './Item';
import { connect } from 'react-redux';

class Index extends Component {
    drawItems() {
        return this.props.data.map(item => <Item key={item.name} item={item}/>);
    }

    render() {
        return (
            <div className="section_cont">
                <h2 className="blind">확장 블록 불러오기 리스트</h2>
                <div className="cont_box">
                    <div className="extend_block">
                        <div className="scroll_box">
                            <ul className="list">
                                {this.drawItems()}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="pop_btn_box">
                    <a href="#NULL">취소</a>
                    <a href="#NULL" className="active">추가하기</a>
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
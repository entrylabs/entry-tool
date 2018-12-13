import React, { Component } from 'react';
import Item from './Item';
import { connect } from 'react-redux';
import Styles from '@assets/scss/popup.scss';
import Foot from './foot';

class Index extends Component {
    drawItems() {
        return this.props.data.data.map((item) => (
            <Item key={item.name} item={item} imageBaseUrl={this.props.imageBaseUrl} />
        ));
    }

    render() {
        return (
            <React.Fragment>
                <section className={`${Styles.extend_content} ${Styles.pop_content}`}>
                    <div className={Styles.section_cont}>
                        <h2 className={Styles.blind}>확장 블록 불러오기 리스트</h2>
                        <div className={Styles.cont_box}>
                            <div className={Styles.extend_block}>
                                <ul className={Styles.list}>{this.drawItems()}</ul>
                            </div>
                        </div>
                    </div>
                </section>
                <Foot />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    ...state,
});

export default connect(
    mapStateToProps,
    null
)(Index);

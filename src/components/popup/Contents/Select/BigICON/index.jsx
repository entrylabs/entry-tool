import React, { Component } from 'react';
import Item from './Item';
import { connect } from 'react-redux';
import Foot from './foot';
import { CommonUtils } from '../../../../../utils/Common';
import Theme from '@utils/Theme';

class Index extends Component {
    constructor(props) {
        super(props);
        this.theme = Theme.getStyle("popup");
    }

    drawItems() {
        return this.props.data.data.map((item) => (
            <Item key={item.name} item={item} imageBaseUrl={this.props.imageBaseUrl} />
        ));
    }

    render() {
        return (
            <React.Fragment>
                <section className={`${this.theme.extend_content} ${this.theme.pop_content}`}>
                    <div className={this.theme.section_cont}>
                        <h2 className={this.theme.blind}>확장 블록 불러오기 리스트</h2>
                        <div className={this.theme.cont_box}>
                            <div className={this.theme.desc}>
                                <div className={this.theme.imico_exclamation_mark}></div>
                                <div className={this.theme.content}>{CommonUtils.getLang('template.expansion_block_descriptions')}</div>
                            </div>
                            <div className={this.theme.extend_block}>
                                <ul className={this.theme.list}>{this.drawItems()}</ul>
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

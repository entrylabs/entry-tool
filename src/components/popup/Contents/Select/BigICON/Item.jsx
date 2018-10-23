import React, { Component } from 'react';
import { connect } from 'react-redux';
import { applySelected } from '../../../../../actions';
import { CommonUtils } from '../../../../../utils/Common';
import Styles from '../../../../../assets/scss/popup.scss'

class Item extends Component {
    constructor(props) {
        super(props);

        this.onItemClicked = this.onItemClicked.bind(this);
    }

    onItemClicked(e) {
        e.preventDefault();
        const selected = this.props.popupReducer.selected;
        const index = this.getSelectedIndex();
        if (index >= 0) {
            selected.splice(index, 1);
        } else {
            selected.push(this.props.item);
        }
        this.props.applySelected(selected);
    }

    getSelectedIndex() {
        return this.props.popupReducer.selected.findIndex(element => element.name === this.props.item.name);
    }

    render() {
        const { item } = this.props;
        return (
            <li onClick={this.onItemClicked} className={CommonUtils.toggleClass(this.getSelectedIndex() >= 0, Styles.on)}>
                <a href="#NULL" className={Styles.link}>
                    <div className={Styles.thmb}
                         style={{ backgroundImage: 'url(\'https://media.kappamoto.com/AK-Moto/foto/BMW_F700GS%20(13-16)_lato_K.jpg\')' }}>&nbsp;</div>
                    <div className={Styles.inner_box}>
                        <strong className={Styles.sjt}>{item.title.ko}</strong>
                        <p className={Styles.dsc}>
                            버스번호, 노선별 경유 정류소,<br/>
                            첫차/막차 시간 등 시내버스 노선과<br/>
                            관련된 블록들의 모음
                        </p>
                    </div>
                </a>
            </li>
        );
    }
}

const mapStateToProps = (state) => ({
    ...state,
});

const mapDispatchToProps = (dispatch) => ({
    applySelected: (list) => dispatch(applySelected(list)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Item);
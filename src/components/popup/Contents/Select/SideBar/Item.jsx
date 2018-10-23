import React, { Component } from 'react';
import { connect } from 'react-redux';
import { applySelected } from '../../../../../actions';
import { CommonUtils } from '../../../../../utils/Common';
import Styles from '../../../../../assets/scss/popup.scss'

class Item extends Component {
    constructor(props) {
        super(props);

        this.drawImage = this.drawImage.bind(this);
        this.itemClicked = this.itemClicked.bind(this);
    }

    drawImage() {
        if (this.props.popupReducer.type && this.props.popupReducer.type === 'sound') {
            return <div className={`${Styles.thmb} ${Styles.imico_pop_sound_thmb}`}>&nbsp;</div>;
        }
        return (
            <div className={Styles.thmb}>
                <img src={CommonUtils.createImageUrl(this.props.item.pictures[0].filename)} alt=""/>
            </div>
        );
    }

    getSelectedIndex() {
        return this.props.popupReducer.selected.findIndex(element => element._id === this.props.item._id);
    }

    itemClicked(e) {
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

    render() {
        return (
            <li onClick={this.itemClicked} className={CommonUtils.toggleClass(this.getSelectedIndex() >= 0, Styles.on)}>
                <a href="#NULL" className={Styles.link}>
                    {this.drawImage()}
                    <em className={Styles.sjt}>{this.props.item.name}</em>
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
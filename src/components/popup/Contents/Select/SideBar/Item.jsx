import React, { Component } from 'react';
import { connect } from 'react-redux';
import { applySelected } from '../../../../../actions/popup';
import { CommonUtils } from '../../../../../utils/Common';
import Styles from '../../../../../assets/scss/popup.scss';
import { triggerEvent, visibleAction } from '../../../../../actions';

class Item extends Component {
    constructor(props) {
        super(props);

        this.drawImage = this.drawImage.bind(this);
        this.onItemClicked = this.onItemClicked.bind(this);
    }

    drawImage() {
        if (this.props.popupReducer.type && this.props.popupReducer.type === 'sound') {
            return <div className={`${Styles.thmb} ${Styles.imico_pop_sound_thmb}`}>&nbsp;</div>;
        }
        return (
            <div className={Styles.thmb}>
                <img src={CommonUtils.createImageUrl(this.props.popupReducer.baseUrl, this.props.item.pictures[0].filename)} alt=""/>
            </div>
        );
    }

    getSelectedIndex() {
        return this.props.popupReducer.selected.findIndex(element => element._id === this.props.item._id);
    }

    onItemClicked(e) {
        e.preventDefault();
        const selected = this.props.popupReducer.selected;
        const index = this.getSelectedIndex();
        if (index >= 0) {
            selected.splice(index, 1);
            this.props.triggerEvent('itemoff', null, false);
        } else {
            selected.push(this.props.item);
            this.props.triggerEvent('itemon', { id: this.props.item._id }, false);
        }

        this.props.applySelected(selected);
    }

    handleDbClick(event, data) {
        this.props.applySelected([]);
        this.props.triggerEvent(event, data, true);
        this.props.visibleAction(false);
    }

    render() {
        return (
            <li onClick={this.onItemClicked} onDoubleClick={e => this.handleDbClick('select', { item: this.props.item })} className={CommonUtils.toggleClass(this.getSelectedIndex() >= 0, Styles.on)}>
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
    visibleAction: (visible) => dispatch(visibleAction(visible)),
    applySelected: (list) => dispatch(applySelected(list)),
    triggerEvent: (event, data, hide) => dispatch(triggerEvent(event, data, hide)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Item);
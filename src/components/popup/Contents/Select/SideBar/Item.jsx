import React, { Component } from 'react';
import { connect } from 'react-redux';
import { applySelected, visibleAction } from '../../../../../actions';
import { CommonUtils } from '../../../../../utils/Common';
import Styles from '../../../../../assets/scss/popup.scss';

class Item extends Component {
    constructor(props) {
        super(props);

        this.drawImage = this.drawImage.bind(this);
        this.onItemClicked = this.onItemClicked.bind(this);
        this.onItemDBClicked = this.onItemDBClicked.bind(this);
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

    onItemClicked(e) {
        e.preventDefault();
        const selected = this.props.popupReducer.selected;
        const index = this.getSelectedIndex();
        if (index >= 0) {
            selected.splice(index, 1);
            if (this.props.popupReducer.type == 'sound') {
                window.createjs.Sound.stop();
            }
        } else {
            selected.push(this.props.item);
            if (this.props.popupReducer.type == 'sound') {
                window.createjs.Sound.play(this.props.item._id);
            }
        }

        this.props.applySelected(selected);
    }

    onItemDBClicked(e) {
        e.preventDefault();
        switch (this.props.popupReducer.type) {
            case 'sprite':
                let object = {
                    id: window.Entry.generateHash(),
                    objectType: 'sprite',
                    sprite: this.props.item, // 스프라이트 정보
                };
                window.Entry.container.addObject(object, 0);
                break;
            case 'sound':
                let item = {
                    id: window.Entry.generateHash(),
                    ...this.props.item,
                };
                window.Entry.playground.addSound(item, true);
                break;
            default:
                break;
        }
        window.createjs.Sound.stop();
        this.props.visibleAction(false);
    }

    render() {
        return (
            <li onClick={this.onItemClicked} onDoubleClick={this.onItemDBClicked} className={CommonUtils.toggleClass(this.getSelectedIndex() >= 0, Styles.on)}>
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
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Item);
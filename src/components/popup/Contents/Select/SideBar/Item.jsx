import React, { Component } from 'react';
import { connect } from 'react-redux';
import { applySelected } from '@actions/popup';
import { CommonUtils } from '@utils/Common';
import Styles from '@assets/scss/popup.scss';
import { triggerEvent } from '@actions';
import { makeFindSelectedById } from '@selectors';

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
                <img
                    src={CommonUtils.createImageUrl(this.props.item.pictures[0].filename)}
                    alt=""
                />
            </div>
        );
    }

    onItemClicked(e) {
        e.preventDefault();
        const selected = this.props.popupReducer.selected;
        const index = this.props.index;
        if (this.props.multiSelect) {
            if (index >= 0) {
                selected.splice(index, 1);
                this.props.triggerEvent('itemoff', null, false);
            } else {
                selected.push(this.props.item);
                this.props.triggerEvent('itemon', { id: this.props.item._id }, false);
            }
            this.props.applySelected(selected);
        } else {
            this.props.applySelected([this.props.item]);
            this.props.triggerEvent('itemon', { id: this.props.item._id }, false);
        }
    }

    render() {
        const item = this.props.item;
        const lang = CommonUtils.getLangType();
        return (
            <li
                onClick={this.onItemClicked}
                className={CommonUtils.toggleClass(this.props.index >= 0, Styles.on)}
            >
                <div className={Styles.link}>
                    {this.drawImage()}
                    <em className={Styles.sjt}>
                        {item && item[lang] ? item[lang] : item.name}
                    </em>
                </div>
            </li>
        );
    }
}

const mapStateToProps = (state, props) => {
    const getIndex = makeFindSelectedById(props.item._id);
    return {
        ...state,
        index: getIndex(state),
    };
};

const mapDispatchToProps = (dispatch) => ({
    applySelected: (list) => dispatch(applySelected(list)),
    triggerEvent: (event, data, hide) => dispatch(triggerEvent(event, data, hide)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Item);

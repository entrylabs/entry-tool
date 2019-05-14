import React, { Component } from 'react';
import { connect } from 'react-redux';
import { applySelected } from '@actions/popup';
import { CommonUtils } from '@utils/Common';
import { triggerEvent } from '@actions';
import { makeFindSelectedById } from '@selectors';
import Theme from '@utils/Theme';

class Item extends Component {
    constructor(props) {
        super(props);
        this.theme = Theme.getStyle('popup');
        this.drawImage = this.drawImage.bind(this);
        this.onItemClicked = this.onItemClicked.bind(this);
    }

    drawImage() {
        if (this.props.type === 'sound') {
            return <div className={`${this.theme.thmb} ${this.theme.imico_pop_sound_thmb}`}>&nbsp;</div>;
        }
        let { filename, fileurl, pictures = [] } = this.props.item;
        let thumb;
        if (pictures.length > 0) {
            filename = pictures[0].filename;
            fileurl = pictures[0].fileurl;
        }

        if (fileurl) {
            thumb = fileurl.thumb || fileurl.resized || fileurl.origin || fileurl;
        }

        const baseUrl = this.props.popupReducer.baseUrl;
        return (
            <div className={this.theme.thmb}>
                <img
                    src={thumb || CommonUtils.createImageUrl(filename, baseUrl)}
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
        const defaultName = item.label && item.label.en ? item.label.en : item.name;
        const name = item.label && item.label[lang] ? item.label[lang] : defaultName;
        return (
            <li
                onClick={this.onItemClicked}
                className={CommonUtils.toggleClass(this.props.index >= 0, this.theme.on)}
            >
                <div className={this.theme.link}>
                    {this.drawImage()}
                    <em className={this.theme.sjt}>
                        {name}
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
    mapDispatchToProps,
)(Item);

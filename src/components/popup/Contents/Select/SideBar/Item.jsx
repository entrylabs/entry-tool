import React, { Component } from 'react';
import { connect } from 'react-redux';
import { applySelected } from '../../../../../actions';
import { CommonUtils } from '../../../../../utils/Common';

class Item extends Component {
    constructor(props) {
        super(props);

        this.drawImage = this.drawImage.bind(this);
        this.itemClicked = this.itemClicked.bind(this);
    }

    drawImage() {
        if (this.props.popupReducer.type && this.props.popupReducer.type == 'sound') {
            return <div className="thmb imico_pop_sound_thmb">&nbsp;</div>;
        }
        return (
            <div className="thmb">
                <img src={CommonUtils.createImageUrl(this.props.item.pictures[0].filename)} alt=""/>
            </div>
        );
    }

    getSelectedIndex() {
        return this.props.popupReducer.selected.findIndex(element => element._id == this.props.item._id);
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
            <li onClick={this.itemClicked} className={CommonUtils.toggleClass(this.getSelectedIndex() >= 0, 'on')}>
                <a href="#" className="link">
                    {this.drawImage()}
                    <em className="sjt">{this.props.item.name}</em>
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
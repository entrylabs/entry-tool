import React, { Component } from 'react';
import { connect } from 'react-redux';
import { applySelected } from '@actions/popup';
import { CommonUtils } from '@utils/Common';
import Styles from '@assets/scss/popup.scss'
import { visibleAction, triggerEvent } from '@actions';

class Item extends Component {
    constructor(props) {
        super(props);

        this.onItemClicked = this.onItemClicked.bind(this);
        this.handleClick = this.handleClick.bind(this);
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

    handleClick(data) {
        this.props.triggerEvent(data);
        this.props.visibleAction(false);
    }

    getSelectedIndex() {
        return this.props.popupReducer.selected.findIndex(element => element.name === this.props.item.name);
    }

    render() {
        const { item } = this.props;
        return (
            <li onClick={this.onItemClicked} onDoubleClick={e=> this.handleClick({item : this.props.item})} className={CommonUtils.toggleClass(this.getSelectedIndex() >= 0, Styles.on)}>
                <a href="#NULL" className={Styles.link}>
                    <div className={Styles.thmb} style={{ backgroundImage: `url("http://playentry.org/lib/entryjs/images/hardware/${item.imageName}")`, backgroundSize:"65%", backgroundRepeat:"no-repeat"}}>&nbsp;</div>
                    <div className={Styles.inner_box}>
                        <strong className={Styles.sjt}>{item.title.ko}</strong>
                        <p className={Styles.dsc}>
                            {item.description}
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
    visibleAction: (visible) => dispatch(visibleAction(visible)),
    applySelected: (list) => dispatch(applySelected(list)),
    triggerEvent: (data) => dispatch(triggerEvent("select", data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Item);
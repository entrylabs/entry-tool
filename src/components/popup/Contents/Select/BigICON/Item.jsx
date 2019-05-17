import React, { Component } from 'react';
import { connect } from 'react-redux';
import { applySelected } from '@actions/popup';
import { CommonUtils } from '@utils/Common';
import { makeFindSelectedByName } from '@selectors';
// import { EMIT_TYPES } from '@constants';
import Theme from '@utils/Theme';

class Item extends Component {
    constructor(props) {
        super(props);
        this.theme = Theme.getStyle("popup");
        this.onItemClicked = this.onItemClicked.bind(this);
    }

    onItemClicked(e) {
        e.preventDefault();
        const selected = this.props.popupReducer.selected;
        const index = this.props.index;
        if (index >= 0) {
            selected.splice(index, 1);
        } else {
            selected.push(this.props.item);
        }
        this.props.applySelected(selected);
    }

    render() {
        const { item } = this.props;
        return (
            <li
                onClick={this.onItemClicked}
                className={CommonUtils.toggleClass(this.props.index >= 0, this.theme.on)}
            >
                <div className={this.theme.link}>
                    <div
                        className={this.theme.thmb}
                        style={{
                            backgroundImage: `url("${this.props.imageBaseUrl}${item.imageName}")`,
                            backgroundRepeat: 'no-repeat',
                        }}
                    >
                        &nbsp;
                    </div>
                    <div className={this.theme.inner_box}>
                        <strong className={this.theme.sjt}>
                            {CommonUtils.getLang(item.titleKey)}
                        </strong>
                        <p className={this.theme.dsc}>{CommonUtils.getLang(item.descriptionKey)}</p>
                    </div>
                </div>
            </li>
        );
    }
}

const mapStateToProps = (state, props) => {
    const getIndex = makeFindSelectedByName(props.item.name);
    return {
        ...state,
        index: getIndex(state),
    };
};

const mapDispatchToProps = (dispatch) => ({
    applySelected: (list) => dispatch(applySelected(list)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Item);

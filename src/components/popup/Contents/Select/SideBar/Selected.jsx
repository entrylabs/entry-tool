import React, { Component } from 'react';
import { connect } from 'react-redux';
import { applySelected } from '../../../../../actions';
import { CommonUtils } from '../../../../../utils/Common';
import Slider from "react-slick";

const TYPE_MAP = {
    sound: {
        wrapClass: 'cont_sel_box sound_type',
        imageClass: 'thmb imico_pop_sound_thmb',
        imageContent: () => '&nbsp;',
    },
    sprite: {
        wrapClass: 'cont_sel_box',
        imageClass: 'thmb',
        imageContent: (item) => <img src={CommonUtils.createImageUrl(item.pictures[0].filename)} alt=""/>,
    },
};

class CustomSlide extends Component {
    render() {
        const { item, type, ...props } = this.props;
        return (
            <div className="select_item" {...props} >
                <div className={TYPE_MAP[type].imageClass}>
                    {TYPE_MAP[type].imageContent(item)}
                </div>
                <em className="sjt">{item.name}</em>
                <a href="#NULL" className="btn_del imbtn_pop_chk_del" data-key={item._id}>
                    <span className="blind">삭제</span>
                </a>
            </div>);
    }
}

function Arrow(props) {
    const { type, className, style, onClick } = props;
    let customClass = null;
    let text = '';
    if (type === 'prev') {
        customClass = 'btn_prev imbtn_pop_sel_prev ';
        text = '이전';
    } else {
        customClass = 'btn_next imbtn_pop_sel_next ';
        text = '다음';
    }
    return (
        <div className={customClass + className} style={{ ...style }} onClick={onClick}>
            <span className="blind">{text}</span>
        </div>
    );
}

class Selected extends Component {
    constructor(props) {
        super(props);

        this.itemClicked = this.itemClicked.bind(this);
    }

    itemClicked(e) {
        e.preventDefault();
        const key = e.target.getAttribute('data-key');
        if (key) {
            const selected = CommonUtils.remove(this.props.popupReducer.selected, (element) => element._id === key);
            this.props.applySelected(selected);
        }
    }

    render() {
        const type = this.props.popupReducer.type || 'sound';
        const selected = this.props.popupReducer.selected || [];
        const settings = {
            dots: false,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            className:"select_list",
            variableWidth: true,
            nextArrow: <Arrow type="next" />,
            prevArrow: <Arrow type="prev" />
        };

        return (
            <div className={TYPE_MAP[type].wrapClass} onClick={this.itemClicked}>
                <strong className="tit">전체 ({selected.length})</strong>
                <Slider {...settings}>
                    {selected.map((item, index) => <CustomSlide key={index} item={item} type={type} style={{width:100}}/>)}
                </Slider>
            </div>
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
)(Selected);
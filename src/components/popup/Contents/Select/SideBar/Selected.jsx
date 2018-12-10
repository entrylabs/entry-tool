import React, { Component } from 'react';
import { connect } from 'react-redux';
import { applySelected } from '../../../../../actions/popup';
import { CommonUtils } from '../../../../../utils/Common';
import Slider from 'react-slick';
import Styles from '../../../../../assets/scss/popup.scss';

const TYPE_MAP = {
    sound: {
        wrapClass: `${Styles.cont_sel_box} ${Styles.sound_type}`,
        imageClass: `${Styles.thmb} ${Styles.imico_pop_sound_thmb}`,
        imageContent: () => '&nbsp;',
    },
    sprite: {
        wrapClass: Styles.cont_sel_box,
        imageClass: Styles.thmb,
        imageContent: (item) => (
            <img src={CommonUtils.createImageUrl(item.pictures[0].filename)} alt="" />
        ),
    },
};

class CustomSlide extends Component {
    render() {
        const { item, type, ...props } = this.props;
        return (
            <div className={Styles.select_item} {...props}>
                <div className={TYPE_MAP[type].imageClass}>{TYPE_MAP[type].imageContent(item)}</div>
                <em className={Styles.sjt}>
                    {this.props.item.label[CommonUtils.getLangType()] || this.props.item.label.en}
                </em>
                <a
                    href="#NULL"
                    className={`${Styles.btn_del} ${Styles.imbtn_pop_chk_del}`}
                    data-key={item._id}
                >
                    <span className={Styles.blind}>삭제</span>
                </a>
            </div>
        );
    }
}

function Arrow(props) {
    const { type, className, style, onClick } = props;
    let customClass = null;
    let text = '';
    if (type === 'prev') {
        customClass = `${Styles.btn_prev} ${Styles.imbtn_pop_sel_prev} ${className}`;
        text = 'prev';
    } else {
        customClass = `${Styles.btn_next} ${Styles.imbtn_pop_sel_next} ${className}`;
        text = 'next';
    }
    return (
        <div className={customClass} style={{ ...style }} onClick={onClick}>
            <span className={Styles.blind}>{text}</span>
        </div>
    );
}

class Selected extends Component {
    constructor(props) {
        super(props);

        this.container = React.createElement(
            'style',
            {},
            '.slick-slide { display: inline-block; margin-left: 12px;} .slick-slide:first-child {  margin-left: 0;}'
        );
        this.itemClicked = this.itemClicked.bind(this);
    }

    itemClicked(e) {
        e.preventDefault();
        const key = e.target.getAttribute('data-key');
        if (key) {
            const selected = CommonUtils.remove(
                this.props.popupReducer.selected,
                (element) => element._id === key
            );
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
            className: Styles.select_list,
            variableWidth: true,
            swipeToSlide: true,
            nextArrow: <Arrow type="next" />,
            prevArrow: <Arrow type="prev" />,
        };

        return (
            <div className={TYPE_MAP[type].wrapClass} onClick={this.itemClicked}>
                {this.container}
                <strong className={Styles.tit}>
                    {CommonUtils.getLang('Menus.all')} ({selected.length})
                </strong>
                <Slider {...settings}>
                    {selected.map((item, index) => (
                        <CustomSlide
                            key={index}
                            item={item}
                            type={type}
                            style={{ width: 100 }}
                            url={this.props.popupReducer.baseUrl}
                        />
                    ))}
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
    mapDispatchToProps
)(Selected);

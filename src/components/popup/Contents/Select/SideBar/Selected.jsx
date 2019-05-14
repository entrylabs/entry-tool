import React, { Component } from 'react';
import { connect } from 'react-redux';
import { applySelected } from '@actions/popup';
import { CommonUtils } from '@utils/Common';
import Slider from 'react-slick';
import Theme from '@utils/Theme';
let TYPE_MAP;

class CustomSlide extends Component {
    constructor(props) {
        super(props);
        this.theme = Theme.getStyle("popup");
    }
    render() {
        const { item, type, url, ...props } = this.props;
        const lang = CommonUtils.getLangType();
        const defaultName = item.label.en ? item.label.en : item.name;
        const name = item.label && item.label[lang] ? item.label[lang] : defaultName;
        return (
            <div className={this.theme.select_item} {...props}>
                <div className={TYPE_MAP[type].imageClass}>{TYPE_MAP[type].imageContent(item, url)}</div>
                <em className={this.theme.sjt}>
                    {name}
                </em>
                <a
                    href="#NULL"
                    className={`${this.theme.btn_del} ${this.theme.imbtn_pop_chk_del}`}
                    data-key={item._id}
                >
                    <span className={this.theme.blind}>삭제</span>
                </a>
            </div>
        );
    }
}

function Arrow(props) {
    const { type, className, style, onClick } = props;
    const theme = Theme.getStyle("popup");
    let customClass = null;
    let text = '';
    if (type === 'prev') {
        customClass = `${theme.btn_prev} ${theme.imbtn_pop_sel_prev} ${className}`;
        text = 'prev';
    } else {
        customClass = `${theme.btn_next} ${theme.imbtn_pop_sel_next} ${className}`;
        text = 'next';
    }
    return (
        <div className={customClass} style={{ ...style }} onClick={onClick}>
            <span className={theme.blind}>{text}</span>
        </div>
    );
}

class Selected extends Component {
    constructor(props) {
        super(props);
        this.theme = Theme.getStyle("popup");
        this.container = React.createElement(
            'style',
            {},
            '.slick-list { position:relative; left:82px; } ' +
            '.slick-slide { display: inline-block; margin-left: 12px;} ' +
            '.slick-slide:first-child { margin-left: 0; } '
        );
        this.itemClicked = this.itemClicked.bind(this);
        TYPE_MAP = {
            sound: {
                wrapClass: `${this.theme.cont_sel_box} ${this.theme.sound_type}`,
                imageClass: `${this.theme.thmb} ${this.theme.imico_pop_sound_thmb}`,
                imageContent: () => '&nbsp;',
            },
            sprite: {
                wrapClass: this.theme.cont_sel_box,
                imageClass: this.theme.thmb,
                imageContent: (item, baseUrl) => {
                    let { filename, fileurl, pictures = [] } = item;
                    let thumb;
                    if (pictures.length > 0) {
                        filename = pictures[0].filename;
                        fileurl = pictures[0].fileurl;
                    }
                    if (fileurl) {
                        thumb = fileurl.thumb || fileurl.resized || fileurl.origin || fileurl;
                    }
                    return (
                        <img src={thumb || CommonUtils.createImageUrl(filename, baseUrl)} alt=""/>
                    );
                },
            },
        };
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
        const type = this.props.type || 'sound';
        const selected = this.props.popupReducer.selected || [];
        const settings = {
            dots: false,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            className: this.theme.select_list,
            variableWidth: true,
            swipeToSlide: true,
            nextArrow: <Arrow type="next" />,
            prevArrow: <Arrow type="prev" />,
        };

        return (
            <div className={TYPE_MAP[type].wrapClass} onClick={this.itemClicked}>
                {this.container}
                <strong className={this.theme.tit}>
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

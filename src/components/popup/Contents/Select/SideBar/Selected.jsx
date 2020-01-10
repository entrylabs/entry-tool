import React from 'react';
import { connect } from 'react-redux';
import { applySelected } from '@actions/popup';
import { CommonUtils } from '@utils/Common';
import Slider from 'react-slick';
import Theme from '@utils/Theme';
import classname from 'classnames';
import SelectItem from '../../includes/SelectItem';

const Index = (props) => {
    const { type, baseUrl, popup, applySelected } = props;
    const { selected } = popup;
    const theme = Theme.getStyle('popup');
    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: theme.select_list,
        variableWidth: true,
        swipeToSlide: true,
        nextArrow: <Arrow type="next" theme={theme} />,
        prevArrow: <Arrow type="prev" theme={theme} />,
    };

    const itemClicked = ({ _id: id }) => {
        if (id) {
            applySelected(CommonUtils.remove(selected, (element) => element._id === id));
        }
    };

    return (
        <div className={classname(theme.cont_sel_box, { [theme.sound_type]: type === 'sound' })}>
            {container}
            <strong className={theme.tit}>
                {CommonUtils.getLang('Menus.all')} ({selected.length})
            </strong>
            <Slider {...settings}>
                {selected.map((item, index) => (
                    <CustomSlide
                        key={index}
                        item={item}
                        theme={theme}
                        baseUrl={baseUrl}
                        type={type}
                        style={{ width: 100 }}
                        onClick={itemClicked}
                    />
                ))}
            </Slider>
        </div>
    );
};

const mapStateToProps = (state) => ({
    popup: state.popupReducer,
});

const mapDispatchToProps = (dispatch) => ({
    applySelected: (list) => dispatch(applySelected(list)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index);

const CustomSlide = ({ item, onClick, theme, type, baseUrl }) => {
    const deleteClass = classname(theme.btn_del, theme.imbtn_pop_chk_del);
    const handleClick = (e) => {
        e.preventDefault();
        onClick && onClick(item);
    };
    return (
        <div className={theme.select_item}>
            <SelectItem type={type} theme={theme} item={item} baseUrl={baseUrl} />
            <a href={'#NULL'} className={deleteClass} onClick={handleClick}>
                <span className={theme.blind}>delete</span>
            </a>
        </div>
    );
};

const Arrow = ({ type = '', className, style, onClick, theme }) => {
    const clazz = classname(theme[`btn_${type}`], theme[`imbtn_pop_sel_${type}`], className);
    return (
        <div className={clazz} style={{ ...style }} onClick={onClick}>
            <span className={theme.blind}>{type}</span>
        </div>
    );
};

const container = React.createElement(
    'style',
    {},
    '.slick-list { position:relative; left:82px; } ' +
        '.slick-slide { display: inline-block; margin-left: 12px;} ' +
        '.slick-slide:first-child { margin-left: 0; } '
);

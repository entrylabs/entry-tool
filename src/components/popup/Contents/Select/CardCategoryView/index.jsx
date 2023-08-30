import { useEffect, useMemo } from 'react';
import classname from 'classnames';
import Theme from '@utils/Theme';
import { CommonUtils } from '@utils/Common';
import Item from './Item';
import { applySelected, closePopup } from '@actions/popup';
import { triggerEvent } from '@actions/index';
import { EMIT_TYPES as Types } from '@constants';
import { connect } from 'react-redux';

const categoryTypes = ['general', 'video', 'audio'];

const CategoryTitle = (props) => {
    const theme = Theme.getStyle('popup');
    const { category } = props;
    const msgKey = useMemo(() => `template.${category}_title_text`, [category]);
    return (
        <div className={theme.categoryWrapper}>
            <div className={theme.line}></div>
            <span className={classname(theme[category], theme.icon)}></span>
            <span className={theme.text}>{CommonUtils.getLang(msgKey)}</span>
        </div>
    );
};
const CategoryListWrapper = (props) => {
    const theme = Theme.getStyle('popup');
    const { children, category } = props;
    return (
        <div className={theme.categoryListWrapper}>
            {category !== 'general' && <CategoryTitle category={category} />}
            <div className={theme.cardWrapper}>{children}</div>
        </div>
    );
};

const CardCategoryView = (props) => {
    const theme = Theme.getStyle('popup');
    const {
        data = [],
        imageBaseUrl,
        applySelected,
        submit,
        selected,
        popupType,
        HeaderButtonPortal,
    } = props;

    useEffect(() => {
        if (applySelected) {
            applySelected(data.filter((item) => item.active));
        }
    }, [applySelected, data]);

    const useLangKey = useMemo(() => {
        if (data[0]?.descriptionKey && data[0]?.titleKey) {
            return true;
        }
        return false;
    }, [data]);

    const alertMsgKey = useMemo(() => {
        if (popupType.includes('aiUtilize')) {
            return 'template.aiUtilize_block_descriptions';
        } else if (popupType.includes('hw_lite')) {
            return 'template.hardware_lite_descriptions';
        } else if (popupType.includes('entry-js')) {
            return 'template.expansion_block_descriptions';
        } else {
            console.error('Error, incorrect popupType : ', popupType);
        }
    }, [popupType]);

    const datas = useMemo(
        () =>
            categoryTypes.reduce((acc, category) => {
                acc[category] = data.filter((item) => item.category === category);
                return acc;
            }, {}),
        [data]
    );

    return (
        <div className={classname(theme.card_content, theme.extend_content)}>
            <h2 className={theme.blind}>CARD CATEGORY LIST</h2>
            <p className={theme.caution_dsc}>{CommonUtils.getLang(alertMsgKey)}</p>
            <div className={theme.extend_block}>
                <div className={theme.categoryList}>
                    {categoryTypes.map((category) => {
                        const data = datas[category] || [];
                        return (
                            <CategoryListWrapper key={category} category={category}>
                                {data.map((item) => (
                                    <Item
                                        key={item.name}
                                        item={item}
                                        imageBaseUrl={imageBaseUrl}
                                        useLangKey={useLangKey}
                                    />
                                ))}
                            </CategoryListWrapper>
                        );
                    })}
                </div>
            </div>
            <HeaderButtonPortal>
                <a
                    className={theme.btn}
                    role="button"
                    onClick={CommonUtils.handleClick(() => submit({ selected }))}
                >
                    {CommonUtils.getLang('Buttons.load')}
                </a>
            </HeaderButtonPortal>
        </div>
    );
};

const mapStateToProps = (state) => ({
    selected: state.popupReducer.selected,
});

const mapDispatchToProps = (dispatch) => ({
    applySelected: (list) => dispatch(applySelected(list)),
    submit: (data) => {
        dispatch(triggerEvent(Types.submit, data, false));
        dispatch(closePopup());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(CardCategoryView);

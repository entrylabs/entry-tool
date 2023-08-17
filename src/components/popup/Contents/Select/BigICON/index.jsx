import { useEffect, useMemo } from 'react';
import Item from './Item';
import { CommonUtils } from '@utils/Common';
import Theme from '@utils/Theme';
import classname from 'classnames';
import { applySelected, closePopup } from '@actions/popup';
import { connect } from 'react-redux';
import { triggerEvent } from '@actions/index';
import { EMIT_TYPES as Types } from '@constants';

const Index = (props) => {
    const theme = Theme.getStyle('popup');
    const { data = [], imageBaseUrl, applySelected, submit, selected, HeaderButtonPortal } = props;

    useEffect(() => {
        applySelected(data.filter((item) => item.active));
    }, []);

    const useLangKey = useMemo(() => {
        if (data[0]?.descriptionKey && data[0]?.titleKey) {
            return true;
        }
        return false;
    });

    const alertMsgKey = useMemo(() => {
        if (imageBaseUrl.includes('aiUtilize')) {
            return 'template.aiUtilize_block_descriptions';
        } else if (imageBaseUrl.includes('hw_lite')) {
            return 'template.hardware_lite_descriptions';
        } else if (imageBaseUrl.includes('entry-js')) {
            return 'template.expansion_block_descriptions';
        } else {
            console.error('Error, incorrect imageBaseUrl : ', imageBaseUrl);
        }
    }, [imageBaseUrl]);

    return (
        <div className={classname(theme.section_content, theme.extend_content)}>
            <h2 className={theme.blind}>BIG ICON LIST</h2>
            <p className={theme.caution_dsc}>{CommonUtils.getLang(alertMsgKey)}</p>
            <div className={theme.extend_block}>
                <ul className={theme.list}>
                    {data.map((item) => (
                        <Item
                            key={item.name}
                            item={item}
                            imageBaseUrl={imageBaseUrl}
                            useLangKey={useLangKey}
                        />
                    ))}
                </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(Index);

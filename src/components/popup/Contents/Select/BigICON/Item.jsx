import { connect } from 'react-redux';
import { applySelected } from '@actions/popup';
import { CommonUtils } from '@utils/Common';
import { EMIT_TYPES as Types } from '@constants';
import { triggerEvent } from '@actions';
import { makeFindSelectedByName } from '@selectors';
import classname from 'classnames';
import Theme from '@utils/Theme';

const Index = ({
    index,
    imageBaseUrl,
    item,
    selected,
    applySelected,
    select,
    deselect,
    useLangKey = true,
    allowDuplicate = true,
}) => {
    const theme = Theme.getStyle('popup');
    const { imageName, sponserText, linkBox } = item;
    const desc = useLangKey ? CommonUtils.getLang(item.descriptionKey) : item.description;
    const title = useLangKey ? CommonUtils.getLang(item.titleKey) : item.title?.ko;
    const onItemClicked = (e) => {
        e.preventDefault();
        const isBlockDeselect = typeof item.active !== 'undefined';
        if (index >= 0) {
            if (isBlockDeselect) {
                deselect(item, () => selected.splice(index, 1));
            } else {
                selected.splice(index, 1);
            }
        } else {
            if (!allowDuplicate && selected.length >= 0) {
                selected = [];
            }
            selected.push(item, () => select(item));
        }
        applySelected(selected);
    };

    return (
        <li onClick={onItemClicked} className={classname({ [theme.on]: index >= 0 })}>
            <div className={theme.link}>
                <div
                    className={theme.thmb}
                    style={{
                        backgroundImage: `url("${imageBaseUrl}${imageName}")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'contain',
                        position: 'relative',
                    }}
                >
                    {sponserText && (
                        <div className={theme.sponser_text}>
                            <span className={theme.sponser_text_span}>{sponserText}</span>
                        </div>
                    )}
                </div>
                <div className={theme.inner_box}>
                    <strong className={theme.sjt}>{title}</strong>
                    <div className={theme.dsc} dangerouslySetInnerHTML={{ __html: desc }} />
                    {linkBox && (
                        <div className={theme.link_box}>
                            <a
                                href={linkBox.url}
                                target="_blank"
                                onClick={(e) => {
                                    e.stopPropagation();
                                }}
                            >
                                {linkBox.desc}
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </li>
    );
};

const mapStateToProps = (state, props) => {
    const getIndex = makeFindSelectedByName(props.item.name);
    return {
        selected: state.popupReducer.selected,
        index: getIndex(state),
    };
};

const mapDispatchToProps = (dispatch) => ({
    applySelected: (list) => dispatch(applySelected(list)),
    select: (data, callback) => dispatch(triggerEvent(Types.itemon, { data, callback }, false)),
    deselect: (data, callback) => dispatch(triggerEvent(Types.itemoff, { data, callback }, false)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);

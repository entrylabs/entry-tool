import { connect } from 'react-redux';
import { applySelected } from '@actions/popup';
import { CommonUtils } from '@utils/Common';
import Theme from '@utils/Theme';
import classname from 'classnames';
import SelectedListItem from '../../includes/SelectedListItem';

const Index = (props) => {
    const { type, baseUrl, popup, applySelected } = props;
    const { selected } = popup;
    const theme = Theme.getStyle('popup');

    const itemClicked = ({ _id, id }) => {
        const selectedId = _id || id;
        if (selectedId) {
            applySelected(
                CommonUtils.remove(selected, (element) => {
                    const itemId = element._id || element.id;
                    return itemId === selectedId;
                })
            );
        }
    };

    return (
        <div className={classname(theme.obj_select_cont, theme[`${type}_type`])}>
            <strong className={theme.sjt}>
                {CommonUtils.getLang('Menus.all')}({selected.length})
            </strong>
            <div className={theme.select_list}>
                <ul className={theme.list}>
                    {selected.length > 0 ? (
                        selected.map((item, index) => (
                            <ListItem
                                key={index}
                                item={item}
                                theme={theme}
                                baseUrl={baseUrl}
                                type={type}
                                style={{ width: 100 }}
                                onClick={itemClicked}
                            />
                        ))
                    ) : (
                        <li className={theme.empty}>&nbsp;</li>
                    )}
                </ul>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    popup: state.popupReducer,
});

const mapDispatchToProps = (dispatch) => ({
    applySelected: (list) => dispatch(applySelected(list)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);

const ListItem = ({ item, onClick, theme, type, baseUrl }) => {
    const handleClick = (e) => {
        e.preventDefault();
        onClick && onClick(item);
    };
    return (
        <SelectedListItem
            type={type}
            theme={theme}
            item={item}
            baseUrl={baseUrl}
            onDelete={handleClick}
        />
    );
};

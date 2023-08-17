import SideBar from './SideBar/index';
import BigICON from './BigICON';
import CardCategoryView from './CardCategoryView';

const Select = (props) => {
    const { sidebar, popupType } = props;
    if (sidebar) {
        return <SideBar {...props} />;
    }
    if (popupType === 'aiUtilize') {
        return <CardCategoryView {...props} />;
    }
    return <BigICON {...props} />;
};

export default Select;

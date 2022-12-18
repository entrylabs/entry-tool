import DefaultPopupList from './PopupList';
import TablePopupList from './TablePopupList';
import SoundPopupList from './SoundPopupList';

const PopupList = {
    sound: SoundPopupList,
    table: TablePopupList,
};

export default (props) => {
    const { type = 'default' } = props;
    const Component = PopupList[type] || DefaultPopupList;
    return <Component {...props} />;
};

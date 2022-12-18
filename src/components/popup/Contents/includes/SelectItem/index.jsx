import DefaultSelectItem from './SelectItem';
import TableSelectItem from './TableSelectItem';
import SoundSelectItem from './SoundSelectItem';

const SelectItem = {
    sound: SoundSelectItem,
    table: TableSelectItem,
};

export default (props) => {
    const { type = 'default' } = props;
    const Component = SelectItem[type] || DefaultSelectItem;
    return <Component {...props} />;
};

import Theme from '@utils/Theme';

const CheckBox = (props) => {
    const { checked, disabled = false } = props;
    const theme = Theme.getStyle('popup');
    return (
        <input
            type="checkbox"
            className={`${theme.checkbox} ${disabled ? theme.disabled : ''}`}
            checked={checked}
            readOnly
        />
    );
};

export default CheckBox;

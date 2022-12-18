import Theme from '@utils/Theme';
import { CommonUtils } from '@utils/Common';
import classname from 'classnames';

export default ({ excluded, item = {}, onClick }) => {
    const theme = Theme.getStyle('popup');
    const { name } = CommonUtils.getImageSummary(item);
    return (
        <li
            className={classname({ [theme.on]: excluded })}
            onClick={CommonUtils.handleClick(() => onClick(item))}
        >
            <div className={theme.link}>
                <div className={theme.thmb}>&nbsp;</div>
                <em className={theme.sjt}>{name}</em>
            </div>
            <label className={classname(theme.check, { [theme.active]: excluded })} />
        </li>
    );
};

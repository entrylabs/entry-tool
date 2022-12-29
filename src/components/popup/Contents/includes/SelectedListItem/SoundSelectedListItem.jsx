import { CommonUtils } from '@utils/Common';

export default ({ theme, item, onDelete }) => (
    <li>
        <div className={theme.thmb}>
            <span className={theme.text_box}>{item.name}</span>
        </div>
        <a className={theme.btn_del} onClick={onDelete}>
            <span className={theme.blind}>{CommonUtils.getLang('Buttons.delete')}</span>
        </a>
    </li>
);

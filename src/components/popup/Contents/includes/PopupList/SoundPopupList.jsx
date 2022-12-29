import classnames from 'classnames';

export default ({ theme, children }) => (
    <div id="popupList" className={theme.sound_list_box}>
        <div className={classnames(theme.list_area, theme.sound_list_area)}>
            <ul className={theme.obj_list}>{children}</ul>
        </div>
    </div>
);

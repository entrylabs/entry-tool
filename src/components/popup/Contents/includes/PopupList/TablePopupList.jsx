export default ({ theme, children, dropdown }) => (
    <div id="popupList" className={theme.data_selbox}>
        {dropdown}
        <ul className={theme.list}>{children}</ul>
    </div>
);

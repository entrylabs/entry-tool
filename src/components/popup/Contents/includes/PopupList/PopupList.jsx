export default ({ theme, children }) => {
    return (
        <div id="popupList" className={theme.list_area}>
            <ul className={theme.obj_list}>{children}</ul>
        </div>
    );
};

import React from 'react';

export default ({ theme, children }) => {
    return (
        <div id="popupList" className={theme.sound_list_box}>
            <div className={theme.list_area}>
                <ul className={theme.obj_list}>{children}</ul>
            </div>
        </div>
    );
};

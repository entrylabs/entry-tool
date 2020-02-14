import React from 'react';

export default ({ theme, children }) => {
    return (
        <div id="popupList" className={theme.data_selbox}>
            <ul className={theme.list}>{children}</ul>
        </div>
    );
};

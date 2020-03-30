import React from 'react';
import { CommonUtils } from '@utils/Common';
import classname from 'classnames';
import Theme from '@utils/Theme';

export default ({ item, isSelected, onClick, avatarImgUrl }) => {
    const { thumb, name, likeCnt = 0, comment = 0, visit = 0, user = {} } = item;
    const { _id, username, avatarImage } = user;
    if (!avatarImgUrl) {
        if (Theme.type == 'entryline') {
            if (avatarImage) {
                const id = String(_id);
                avatarImgUrl = `/uploads/${id.substr(0, 2)}/${id.substr(2, 2)}/profile/${id}.png`;
            } else {
                avatarImgUrl = '/static/img/pf/profile/img-profile-default-medium@2x.png';
            }
        } else {
            if (avatarImage) {
                const id = String(_id);
                avatarImgUrl = `/uploads/profile/${id.substr(0, 2)}/${id.substr(
                    2,
                    2
                )}/avatar_${id}.png`;
            } else {
                avatarImgUrl = '/img/assets/avatar_img.png';
            }
        }
    }
    const theme = Theme.getStyle('popup');
    const itemCss = { backgroundImage: `url('${CommonUtils.fixUrl(thumb)}')` };
    const userCss = { backgroundImage: `url('${avatarImgUrl}')` };
    return (
        <li onClick={onClick} className={classname({ [theme.on]: isSelected })}>
            <div className={theme.link}>
                <div className={theme.thmb} style={itemCss}>
                    <div className={theme.info_bar}>
                        <span className={classname(theme.view, theme.imico_pop_info_view)}>
                            {visit}
                        </span>
                        <span className={classname(theme.like, theme.imico_pop_info_like)}>
                            {likeCnt}
                        </span>
                        <span className={classname(theme.cmt, theme.imico_pop_info_cmt)}>
                            {comment}
                        </span>
                    </div>
                </div>
                <div className={theme.info_box}>
                    <div className={theme.user_thmb} style={userCss} />
                    <em className={theme.tit}>{name}</em>
                    <span className={theme.from}>
                        from<em>{username}</em>
                    </span>
                </div>
            </div>
        </li>
    );
};

import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { triggerEvent } from '@actions';
import { closePopup } from '@actions/popup';
import { CommonUtils } from '@utils/Common';
import { EMIT_TYPES as Types } from '@constants';
import Theme from '@utils/Theme';
import classname from 'classnames';
import EmptyContents from './EmptyContents';
import Item from './Item';
import { MasonryInfiniteGrid } from '@egjs/react-infinitegrid';

const Index = ({
    type,
    data = [],
    avatarImage,
    raw,
    submit,
    fetch,
    fetchMore,
    HeaderButtonPortal,
}) => {
    const totalCount = raw.total || data.length;
    const theme = Theme.getStyle('popup');
    const [selected, select] = useState(null);

    useEffect(() => {
        fetch(type);
    }, [type]);

    if (totalCount === 0) {
        return <EmptyContents type={type} />;
    }

    const onRequestAppend = useCallback(() => {
        if (!raw.searchAfter || !raw.searchAfter[0] || raw.total === data.length) {
            return;
        }
        fetchMore({ type, data, searchAfter: raw.searchAfter, searchParam: raw.searchParam });
    }, [raw, data, fetchMore]);

    return (
        <>
            <div className={classname(theme.section_content, theme.art_content)}>
                <h2 className={theme.blind}>{CommonUtils.getLang('Menus.my_project')}</h2>
                <strong className={theme.list_sjt}>
                    {CommonUtils.getLang('Menus.all')} ({totalCount})
                </strong>
                <MasonryInfiniteGrid
                    tag="div"
                    containerTag="ul"
                    container={true}
                    isConstantSize={true}
                    isEqualSize={true}
                    className={theme.list}
                    gap={15}
                    onRequestAppend={onRequestAppend}
                >
                    {data
                        .filter(({ user }) => user)
                        .map((item, index) => (
                            <Item
                                key={index}
                                item={item}
                                avatarImgUrl={avatarImage}
                                isSelected={selected === index}
                                onClick={() => {
                                    select(selected !== index ? index : null);
                                }}
                            />
                        ))}
                </MasonryInfiniteGrid>
            </div>
            <HeaderButtonPortal>
                <a
                    className={theme.btn}
                    role="button"
                    onClick={CommonUtils.handleClick(() => submit(data[selected]))}
                >
                    {CommonUtils.getLang('Buttons.load')}
                </a>
            </HeaderButtonPortal>
        </>
    );
};

const mapDispatchToProps = (dispatch) => ({
    fetchMore: (param) => dispatch(triggerEvent(Types.fetchMore, param, false)),
    fetch: (type) => dispatch(triggerEvent(Types.fetch, { type }, false)),
    submit: (data) => {
        dispatch(triggerEvent(Types.submit, data, false));
        dispatch(closePopup());
    },
    closePopup: () => dispatch(closePopup()),
});

export default connect(null, mapDispatchToProps)(Index);

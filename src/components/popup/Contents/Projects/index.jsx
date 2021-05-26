import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { triggerEvent } from '@actions';
import { closePopup } from '@actions/popup';
import { CommonUtils } from '@utils/Common';
import { EMIT_TYPES as Types } from '@constants';
import Theme from '@utils/Theme';
import classname from 'classnames';
import EmptyContents from './EmptyContents';
import Item from './Item';
import { GridLayout } from '@egjs/react-infinitegrid';

const Index = ({ type, data = [], avatarImage, raw, closePopup, submit, fetch, fetchMore }) => {
    const totalCount = raw.total || data.length;
    const theme = Theme.getStyle('popup');
    const [selected, select] = useState(null);

    useEffect(() => {
        fetch(type);
    }, [type]);

    if (totalCount === 0) {
        return <EmptyContents type={type} />;
    }

    const onAppend = (p) => {
        const { startLoading, currentTarget } = p;
        if (currentTarget.isLoading()) {
            return;
        }
        startLoading();
        fetchMore({ type, data, searchAfter: raw.searchAfter, searchParam: raw.searchParam });
        // const list = this.state.list;
        // const items = this.loadItems(parseFloat(groupKey) + 1, 5);

        // this.setState({ list: list.concat(items) });
    };
    const onLayoutComplete = ({ isLayout, endLoading, target, orgScrollPos }) => {
        !isLayout && endLoading();
    };

    return (
        <>
            <section className={classname(theme.pop_content, theme.art_content)}>
                <div className={theme.section_cont}>
                    <h2 className={theme.blind}>{CommonUtils.getLang('Menus.my_project')}</h2>
                    <strong className={theme.list_sjt}>
                        {CommonUtils.getLang('Menus.all')} ({totalCount})
                    </strong>
                    <div className={theme.scroll_box}>
                        <GridLayout
                            tag="ul"
                            className={theme.list}
                            useFirstRender={false}
                            options={{
                                isConstantSize: true,
                                transitionDuration: 0.2,
                                isOverflowScroll: true,
                            }}
                            layoutOptions={{
                                margin: 18,
                                align: 'center',
                            }}
                            onAppend={onAppend}
                            onLayoutComplete={onLayoutComplete}
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
                        </GridLayout>
                        asd
                    </div>
                </div>
            </section>
            <div className={theme.pop_btn_box}>
                <div onClick={CommonUtils.handleClick(closePopup)}>
                    {CommonUtils.getLang('Buttons.cancel')}
                </div>

                <div
                    className={theme.active}
                    onClick={CommonUtils.handleClick(() => submit(data[selected]))}
                >
                    {CommonUtils.getLang('Menus.Load')}
                </div>
            </div>
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

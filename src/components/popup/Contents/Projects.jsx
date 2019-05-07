import React, { Component } from 'react';
import { connect } from 'react-redux';
import { triggerEvent } from '@actions';
import { CommonUtils } from '@utils/Common';
import { EMIT_TYPES } from '@constants';
import Theme from '@utils/Theme';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.theme = Theme.getStyle("popup");
        this.state = {
            count: this.props.data.count || 0,
            selected: null,
        };
        this.triggerEvent = this.triggerEvent.bind(this);
        this.selectItem = this.selectItem.bind(this);
        this.props.triggerEvent(EMIT_TYPES.fetch, { type: this.props.selected }, false);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.selected !== nextProps.selected) {
            this.props.triggerEvent(EMIT_TYPES.fetch, { type: nextProps.selected }, false);
        }
    }

    selectItem(e, item) {
        e.preventDefault();
        if (this.state.selected && this.state.selected._id === item._id) {
            this.setState({ selected: null });
        } else {
            this.setState({ selected: item });
        }
    }

    drawIems() {
        const data = this.props.data.data;
        return data.filter((item) => item.user).map((item) => {
            let selected = false;
            if (this.state.selected && this.state.selected._id === item._id) {
                selected = true;
            }
            let avatarImgUrl = '/img/assets/avatar_img.png';
            if (item.user.avatarImage) {
                const userId = item.user._id;
                avatarImgUrl =
                    `/uploads/profile/${userId.substring(0, 2)}/${userId.substring(2, 4)}/` +
                    `avatar_${userId}.png?${new Date().getTime()}`;
            }
            return (
                <li
                    key={item._id}
                    onClick={(e) => this.selectItem(e, item)}
                    className={CommonUtils.toggleClass(selected, this.theme.on)}
                >
                    <div className={this.theme.link}>
                        <div
                            className={this.theme.thmb}
                            style={{ backgroundImage: `url('${CommonUtils.fixUrl(item.thumb)}')` }}
                        >
                            <div className={this.theme.info_bar}>
                                {`${this.theme.view} ${this.theme.imico_pop_info_view}`}
                                <span className={`${this.theme.view} ${this.theme.imico_pop_info_view}`}>
                                    {item.visit}
                                </span>
                                <span className={`${this.theme.like} ${this.theme.imico_pop_info_like}`}>
                                    {item.likeCnt}
                                </span>
                                <span className={`${this.theme.cmt} ${this.theme.imico_pop_info_cmt}`}>
                                    {item.comment}
                                </span>
                            </div>
                        </div>
                        <div className={this.theme.info_box}>
                            <div
                                className={this.theme.user_thmb}
                                style={{ backgroundImage: `url('${avatarImgUrl}')` }}
                            />
                            <em className={this.theme.tit}>{item.name}</em>
                            <span className={this.theme.from}>
                                from
                                <em>{item.user.username}</em>
                            </span>
                        </div>
                    </div>
                </li>
            );
        });
    }

    triggerEvent(e, event, data = null) {
        e.preventDefault();
        this.props.triggerEvent(event, data, true);
    }

    emptyPage() {
        return (
            <section className={`${this.theme.pop_content} ${this.theme.art_content}`}>
                <div className={this.theme.section_cont}>
                    {/* [D] 메뉴 카테고리 선택에 따라 텍스트 변경  */}
                    <h2 className={this.theme.blind}>{CommonUtils.getLang('Menus.my_project')}</h2>
                    <div className={this.theme.result_box}>
                        <div className={`${this.theme.thmb} ${this.theme.imico_pop_mywrite_thmb}`}>
                            &nbsp;
                        </div>
                        <p className={this.theme.result_dsc}>
                            {CommonUtils.getLang('Menus.no_project_1')}
                            <br/>
                            {CommonUtils.getLang('Menus.no_project_2')}
                        </p>
                        <div className={this.theme.pop_btn_box}>
                            <div
                                className={this.theme.active}
                                onClick={(e) => {
                                    this.triggerEvent(e, EMIT_TYPES.makeProject);
                                }}
                            >
                                {CommonUtils.getLang('Menus.make_project')}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    render() {
        const data = this.props.data.data;
        if (!data || data.length === 0) {
            return this.emptyPage();
        }
        return (
            <React.Fragment>
                <section className={`${this.theme.pop_content} ${this.theme.art_content}`}>
                    <div className={this.theme.section_cont}>
                        {/* [D] 메뉴 카테고리 선택에 따라 텍스트 변경  */}
                        <h2 className={this.theme.blind}>{CommonUtils.getLang('Menus.my_project')}</h2>
                        <strong className={this.theme.list_sjt}>
                            {CommonUtils.getLang('Menus.all')} ({this.props.data.data.length})
                        </strong>
                        <div className={this.theme.scroll_box}>
                            <ul className={this.theme.list}>{this.drawIems()}</ul>
                        </div>
                    </div>
                </section>
                <div className={this.theme.pop_btn_box}>
                    <div onClick={(e) => this.triggerEvent(e, EMIT_TYPES.close, null)}>
                        {CommonUtils.getLang('Buttons.cancel')}
                    </div>
                    <div className={this.theme.active} onClick={
                        (e) => this.triggerEvent(e, EMIT_TYPES.submit, this.state.selected)
                    }>
                        {CommonUtils.getLang('Menus.Load')}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    triggerEvent: (event, data, hidden) => dispatch(triggerEvent(event, data, hidden)),
});

export default connect(
    null,
    mapDispatchToProps,
)(Projects);

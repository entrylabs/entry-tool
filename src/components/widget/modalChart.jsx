import React, { Component } from 'react';
import { pure } from 'recompose';
import Theme from '@utils/Theme';
import classname from 'classnames';

class ModalChart extends Component {
    constructor(props) {
        super(props);
        Theme.type = props.theme;
        this.theme = Theme.getStyle('popup');
    }

    render() {
        const isOpen = true;
        const dropdownClass = classname(
            this.theme.select_link,
            { [this.theme.imico_pop_select_arr_down]: !isOpen },
            { [this.theme.imico_pop_select_arr_up]: isOpen },
        );

        return (
            <div className={this.theme.dimmed}>
                <div className={this.theme.center}>
                    <div className={this.theme.modal}>
                        <div className={this.theme.head}>
                            <div className={this.theme.text}>차트 보기</div>
                            <div className={this.theme.close} />
                        </div>
                        <div className={this.theme.body}>
                            <div className={this.theme.content}>
                                <div className={this.theme.pop_selectbox}>
                                    <div className={dropdownClass}>테이블 명</div>
                                </div>
                                <div className={this.theme.pop_selectbox}>
                                    <div className={dropdownClass}>차트 명</div>
                                </div>
                                <div className={this.theme.chart_area}>chart area</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default pure(ModalChart);

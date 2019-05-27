import React, { Component } from 'react';
import { pure } from 'recompose';
import Theme from '@utils/Theme';

class ModalProgress extends Component {
    constructor(props) {
        super(props);
        Theme.type = props.theme;
        this.theme = Theme.getStyle("progress");
    }
    makeProgress() {
        const { title } = this.props;
        return (
            <div className={this.theme.progress}>
                <div className={this.theme.title}>{title}</div>
                <div className={this.theme.background_1} />
                <div className={this.theme.background_2} />
                <div className={this.theme.background_3} />
                <div className={this.theme.character} />
            </div>
        );
    }
    makeError() {
        const { title, description, onClose } = this.props;
        return (
            <div className={this.theme.error}>
                <div className={this.theme.title} dangerouslySetInnerHTML={{ __html: title }} />
                <div
                    className={this.theme.description}
                    dangerouslySetInnerHTML={{ __html: description }}
                />
                <div className={this.theme.close} onClick={onClose} />
            </div>
        );
    }
    makeView() {
        const { type } = this.props;
        if (type === 'progress') {
            return this.makeProgress();
        } else if (type === 'error') {
            return this.makeError();
        } else {
            return null;
        }
    }
    render() {
        return <div className={this.theme.modal_progress}>{this.makeView()}</div>;
    }
}

export default pure(ModalProgress);

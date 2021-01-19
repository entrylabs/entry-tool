import React, { Component } from 'react';
import { pure } from 'recompose';
import Theme from '@utils/Theme';
import { CommonUtils } from '@utils/Common';

class ModalProgress extends Component {
    constructor(props) {
        super(props);
        Theme.type = props.theme;
        this.theme = Theme.getStyle('progress');
    }
    makeProgress() {
        const { title } = this.props;
        return (
            <div className={this.theme.progress}>
                <div className={this.theme.title}>{title}</div>
                <div className={this.theme.progressEntryBot}></div>
            </div>
        );
    }
    makeLoading() {
        const { title } = this.props;
        return (
            <div className={this.theme.loading}>
                <div className={this.theme.character} />
                <div
                    className={this.theme.description}
                    dangerouslySetInnerHTML={{ __html: title }}
                ></div>
            </div>
        );
    }
    makeError() {
        const { title, description, onClose } = this.props;
        return (
            <div className={this.theme.error}>
                <div className={this.theme.title}>
                    {title && <div dangerouslySetInnerHTML={{ __html: title }}></div>}
                    {description && (
                        <div
                            className={this.theme.description}
                            dangerouslySetInnerHTML={{ __html: description }}
                        />
                    )}
                </div>

                <div className={this.theme.errorEntryBot}></div>
                {/* <div className={this.theme.title}>{title}</div> */}

                <div className={this.theme.close} onClick={onClose} />
            </div>
        );
    }

    makeView() {
        const { type, mode } = this.props;
        if (type === 'progress') {
            return this.makeProgress();
        } else if (type === 'loading') {
            return this.makeLoading();
        } else if (type === 'error') {
            return this.makeError();
        } else {
            return null;
        }
    }

    render() {
        const { type = '' } = this.props;
        const modalType =
            this.props.mode === 'minimize'
                ? this.theme.modal_progress_minimize
                : this.theme.modal_progress;

        return <div className={`${modalType} ${this.theme[type]}`}>{this.makeView()}</div>;
    }
}

export default pure(ModalProgress);

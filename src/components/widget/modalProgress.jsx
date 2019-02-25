import React, { Component } from 'react';
import { pure } from 'recompose';
import Styles from '@assets/scss/progress.scss';

class ModalProgress extends Component {
    makeProgress() {
        const { title } = this.props;

        return (
            <div className={Styles.progress}>
                <div className={Styles.title}>{title}</div>
                <div className={Styles.background_1} />
                <div className={Styles.background_2} />
                <div className={Styles.background_3} />
                <div className={Styles.character} />
            </div>
        );
    }
    makeError() {
        const { title, description, onClose } = this.props;
        return (
            <div className={Styles.error}>
                <div className={Styles.title} dangerouslySetInnerHTML={{ __html: title }} />
                <div
                    className={Styles.description}
                    dangerouslySetInnerHTML={{ __html: description }}
                />
                <div className={Styles.close} onClick={onClose} />
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
        return <div className={Styles.modal_progress}>{this.makeView()}</div>;
    }
}

export default pure(ModalProgress);

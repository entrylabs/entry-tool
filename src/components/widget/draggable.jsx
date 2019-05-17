import React, { Component } from 'react';
import _intersection from 'lodash/intersection';
import { pure } from 'recompose';
import DraggableList from './draggableList';
import Styles from '@assets/entry/scss/draggable.scss';

class Draggable extends Component {
    onSortEnd = ({ oldIndex, newIndex }) => {
        const { onChangeList } = this.props;
        if (onChangeList) {
            onChangeList(newIndex, oldIndex);
        }
    };

    shouldCancelStart = (e) => {
        const { target } = e;
        const { className = '' } = target;
        const { draggableTarget } = this.props;
        const list = className.split(' ');
        if (!_intersection(draggableTarget, list).length) {
            return true;
        }
    };

    getShouldCancelStart() {
        const { draggableTarget } = this.props;
        if (Array.isArray(draggableTarget) && draggableTarget.length) {
            return this.shouldCancelStart;
        }
    }

    render() {
        const { lockAxis, distance, className = '' } = this.props;
        const shouldCancelStart = this.getShouldCancelStart();
        const cName = `${Styles.draggableList} ${className}`;
        return (
            <>
                <DraggableList
                    className={cName}
                    lockAxis={lockAxis}
                    onSortEnd={this.onSortEnd}
                    distance={distance}
                    shouldCancelStart={shouldCancelStart}
                    {...this.props}
                />
            </>
        );
    }
}

export default pure(Draggable);

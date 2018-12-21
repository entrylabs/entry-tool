import React, { Component } from 'react';
import _intersection from 'lodash/intersection';
import _isPlainObject from 'lodash/isPlainObject';
import { pure } from 'recompose';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import Scrollbars from '@components/common/scrollbars';
import Styles from '@assets/scss/popup.scss';

/* eslint-disable new-cap */
const SortableItem = SortableElement(({ value }) => {
    const { item } = value;
    if (typeof item === 'string') {
        return <div className={Styles.sortableItem} dangerouslySetInnerHTML={{ __html: item }} />;
    } else if (item instanceof HTMLElement) {
        return (
            <div
                className={`${Styles.sortableItem} sortableItem`}
                ref={(dom) => {
                    if (dom) {
                        dom.appendChild(item);
                    }
                }}
            />
        );
    } else if (React.isValidElement(item)) {
        return <div className={Styles.sortableItem}>{item}</div>;
    } else {
        return <div className={Styles.sortableItem} />;
    }
});

const SortableList = SortableContainer(({ items, disabled }) => {
    return (
        <div>
            {items.map((value, index) => {
                let key = `item-${index}`;
                let item = value;
                if (!React.isValidElement(value) && _isPlainObject(value)) {
                    key = value.key || key;
                    item = value.item;
                }
                return (
                    <SortableItem
                        key={key}
                        index={index}
                        value={{
                            index,
                            item,
                        }}
                        disabled={disabled}
                    />
                );
            })}
        </div>
    );
});

class Sortable extends Component {
    onSortEnd = ({ oldIndex, newIndex }) => {
        const { onChangeList } = this.props;
        if (onChangeList) {
            onChangeList(oldIndex, newIndex);
        }
    };

    shouldCancelStart = (e) => {
        const { target } = e;
        const { className = '' } = target;
        const { sortableTarget } = this.props;
        const list = className.split(' ');
        if (!_intersection(sortableTarget, list).length) {
            return true;
        }
    };

    getShouldCancelStart() {
        const { sortableTarget } = this.props;
        if (Array.isArray(sortableTarget) && sortableTarget.length) {
            return this.shouldCancelStart;
        }
    }

    render() {
        const { axis = 'y', lockAxis, height, items: items2, disabled = false } = this.props;
        const shouldCancelStart = this.getShouldCancelStart();
        let className = Styles.sortableList;
        if (axis === 'x') {
            className = Styles.sortableInlineList;
        }
        return (
            <Scrollbars heightRelativeToParent={height}>
                <div className={`${Styles.sortable} ${className}`}>
                    <SortableList
                        axis={axis}
                        lockAxis={lockAxis}
                        items={items2}
                        onSortEnd={this.onSortEnd}
                        disabled={disabled}
                        distance={1}
                        shouldCancelStart={shouldCancelStart}
                    />
                </div>
            </Scrollbars>
        );
    }
}

export default pure(Sortable);

import React, { Component } from 'react';
import _intersection from 'lodash/intersection';
import { pure } from 'recompose';
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';
import Scrollbars from '@components/common/scrollbars';
import Styles from '@assets/scss/popup.scss';

const SortableItem = SortableElement(({ value }) => {
    console.log(value, typeof value);
    let __html = '';
    if (typeof value === 'string') {
        __html = value;
    } else if (value instanceof HTMLElement) {
        __html = value.outerHTML;
    }
    return <div dangerouslySetInnerHTML={{ __html }} />;
});

const SortableList = SortableContainer(({ items }) => {
    return (
        <div>
            {items.map((value, index) => (
                <SortableItem key={`item-${index}`} index={index} value={value} />
            ))}
        </div>
    );
});

class Sortable extends Component {
    state = {
        items: this.props.items || [],
    };

    onSortEnd = ({ oldIndex, newIndex }) => {
        this.setState({
            items: arrayMove(this.state.items, oldIndex, newIndex),
        });
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
        const { axis = 'y', lockAxis, height } = this.props;
        const { items = [] } = this.state;
        const shouldCancelStart = this.getShouldCancelStart();
        return (
            <Scrollbars
                heightRelativeToParent={height}
                className={`${Styles.sortable} ${Styles.scrollbar}`}
            >
                <SortableList
                    axis={axis}
                    lockAxis={lockAxis}
                    items={items}
                    onSortEnd={this.onSortEnd}
                    shouldCancelStart={shouldCancelStart}
                />
            </Scrollbars>
        );
    }
}

export default pure(Sortable);

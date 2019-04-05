import React, { Component, useState, useEffect, useRef } from 'react';
import _intersection from 'lodash/intersection';
import _isPlainObject from 'lodash/isPlainObject';
import EntryEvent from '@entrylabs/event';
import { pure } from 'recompose';
import Styles from '@assets/scss/sortable.scss';

/* eslint-disable new-cap */
const SortableItem = (props) => {
    const itemRef = useRef(null);
    const { value } = props;
    const { item } = value;
    const attr = {
        className: Styles.sortableItem,
        ref: itemRef,
    };
    if (typeof item === 'string') {
        attr.dangerouslySetInnerHTML = { __html: item };
    } else if (item instanceof HTMLElement) {
        attr.ref = (dom) => {
            itemRef.current = dom;
            if (dom) {
                dom.appendChild(item);
            }
        };
    }
    const { handleItemEventStart } = props;
    return (
        <div
            {...attr}
            onMouseDown={(e) => {
                handleItemEventStart(e, itemRef.current);
            }}
        >
            {React.isValidElement(item) && item}
        </div>
    );
};

function makeDragView({ image, x, y }) {
    return (
        <img
            className={Styles.dragView}
            src={image}
            style={{ top: y - 50, left: x - 50, position: 'fixed' }}
            alt={image}
        />
    );
}
// function useItemPosition() {
//     const [position, setPosition] = useState({ x: 0, y: 0 });
//     useEffect(() => () => {

//         }, []);
//     return posi;;
// }
function SortableList(props) {
    const [isDraggable, setDraggable] = useState(false);
    const [dragTarget, setDragTarget] = useState({ target: null });
    const [dragInfo, setDragInfo] = useState({ x: 0, y: 0, image: undefined });
    const { items, disabled, distance = 5 } = props;

    console.log('???');
    useEffect(() => {
        console.log('useEffect');
        const targetEvent = new EntryEvent(document);
        const { target } = dragTarget;
        if (target) {
            targetEvent.on('mousemove.sortable', itemEventMove, false);
            targetEvent.on('mouseup.sortable', itemEventEnd, false);
        }

        function itemEventMove(e) {
            const { target } = dragTarget;
            const { x, y, image } = dragInfo;
            if (target) {
                if (Math.max(Math.abs(e.pageX - x), Math.abs(e.pageY - y)) > distance) {
                    setDraggable(true);
                    setDragInfo({
                        image,
                        x: e.pageX,
                        y: e.pageY,
                    });
                    target.style.visibility = 'hidden';
                }
            }
            // target.style.transform = `translate3d(${e.pageX - x}px, ${e.pageY - y}px, 100px)`;
            // target.style.position = 'fixed';
            // target.style.zIndex = '9999';
        }

        function itemEventEnd(e) {
            setDraggable(false);
            const { target } = dragTarget;
            if (target) {
                target.style.visibility = '';
            }
            if (targetEvent) {
                targetEvent.off('sortable');
            }
        }
        return () => {
            if (targetEvent) {
                targetEvent.off('sortable');
            }
        };
    }, [dragTarget]);

    return (
        <>
            {items.map((value, index) => {
                let key = `item-${index}`;
                let item = value;
                let image = value;
                if (!React.isValidElement(value) && _isPlainObject(value)) {
                    key = value.key || key;
                    item = value.item;
                    image = value.image;
                }
                return (
                    <div key={key} style={{ backgroundColor: 'black' }}>
                        <SortableItem
                            handleItemEventStart={(e, target) => {
                                setDragTarget({
                                    target,
                                });
                                setDragInfo({
                                    x: e.pageX,
                                    y: e.pageY,
                                    image,
                                });
                            }}
                            index={index}
                            value={{
                                index,
                                item,
                            }}
                            disabled={disabled}
                        />
                    </div>
                );
            })}
            {isDraggable && (
                <div className={`${Styles.globalDragArea}`}>{makeDragView(dragInfo)}</div>
            )}
        </>
    );
}

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
        const { axis = 'y', lockAxis, height, items, disabled = false, distance } = this.props;
        const shouldCancelStart = this.getShouldCancelStart();
        let className = Styles.sortableList;
        if (axis === 'x') {
            className = Styles.sortableInlineList;
        }
        console.log('render');
        return (
            <div className={`${Styles.sortable} ${className}`}>
                <SortableList
                    axis={axis}
                    lockAxis={lockAxis}
                    items={items}
                    onSortEnd={this.onSortEnd}
                    disabled={disabled}
                    distance={distance}
                    shouldCancelStart={shouldCancelStart}
                />
            </div>
        );
    }
}

export default pure(Sortable);

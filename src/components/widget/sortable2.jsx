import React, { Component, useState, useEffect, useRef, useReducer } from 'react';
import _intersection from 'lodash/intersection';
import _isPlainObject from 'lodash/isPlainObject';
import EntryEvent from '@entrylabs/event';
import { pure } from 'recompose';
import produce from 'immer';
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
    const { handleItemEventStart, handleItemEventEnter } = props;
    return (
        <div
            {...attr}
            onMouseDown={(e) => {
                handleItemEventStart(e, itemRef.current);
            }}
            onMouseMove={(e) => {
                handleItemEventEnter(e, itemRef.current);
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

function itemInfoReducer(state = {}, data) {
    // console.log('itemInfoReducer', data);
    return produce(state, (draft) => {
        Object.keys(data).forEach((key) => {
            draft[key] = data[key];
        });
    });
}

function SortableList(props) {
    const { items, disabled, distance = 5 } = props;
    const [itemList, setItemList] = useState(items);
    const [isDraggable, setDraggable] = useState(false);
    const [dragTarget, setDragTarget] = useState({ target: null });
    // const [dragInfo, setDragInfo] = useState({ x: 0, y: 0, image: undefined });
    const [dragInfo, dispatch] = useReducer(itemInfoReducer, {
        x: 0,
        y: 0,
        image: undefined,
        index: -1,
    });
    // console.log('dragInfo', dragInfo);
    useEffect(() => {
        setItemList(items);
    }, [items]);
    useEffect(() => {
        const targetEvent = new EntryEvent(document);
        const { target } = dragTarget;
        if (target) {
            targetEvent.on('mousemove.sortable', itemEventMove, false);
            targetEvent.on('mouseup.sortable', itemEventEnd, false);
        }

        function itemEventMove(e) {
            const { target } = dragTarget;
            const { x, y } = dragInfo;
            if (target) {
                if (Math.max(Math.abs(e.pageX - x), Math.abs(e.pageY - y)) > distance) {
                    setDraggable(true);
                    dispatch({
                        x: e.pageX,
                        y: e.pageY,
                    });
                    target.style.visibility = 'hidden';
                }
            }
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
            {itemList.map((value, index) => {
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
                                dispatch({
                                    index,
                                    image,
                                    x: e.pageX,
                                    y: e.pageY,
                                });
                            }}
                            handleItemEventEnter={(e, target) => {
                                if (isDraggable) {
                                    const { top, height } = target.getBoundingClientRect();
                                    const { index: itemIndex } = dragInfo;
                                    let targetIndex = index;
                                    if (itemIndex < index) {
                                        if (top + height / 2 > e.pageY) {
                                            targetIndex = index - 1;
                                        }
                                    } else {
                                        if (top + height / 2 < e.pageY) {
                                            targetIndex = index + 1;
                                        }
                                    }
                                    console.log(
                                        itemIndex,
                                        targetIndex,
                                        index,
                                        top + height / 2 < e.pageY,
                                        top + height / 2,
                                        e.pageY
                                    );
                                    if (itemIndex !== targetIndex) {
                                        itemList.splice(
                                            targetIndex,
                                            0,
                                            ...itemList.splice(itemIndex, 1)
                                        );
                                        setItemList(itemList);
                                        dispatch({
                                            index: targetIndex,
                                        });
                                    }
                                }
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

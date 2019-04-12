import React, {
    Component,
    useState,
    useEffect,
    useRef,
    useReducer,
    useMemo,
    useImperativeHandle,
    forwardRef,
} from 'react';
import _intersection from 'lodash/intersection';
import _isPlainObject from 'lodash/isPlainObject';
import _memoize from 'lodash/memoize';
import EntryEvent from '@entrylabs/event';
import { pure } from 'recompose';
import produce from 'immer';
import Styles from '@assets/scss/draggable.scss';
import CustomScroll from '../common/customScroll';

/* eslint-disable new-cap */
const DraggableItem = forwardRef((props, ref) => {
    const itemRef = useRef(null);
    const {
        value,
        itemWrapperClassName,
        itemWrapperStyle,
        itemShadowClassName,
        itemShadowStyle,
        handleItemEventStart,
        handleItemEventEnter,
    } = props;
    const { item } = value;
    const attr = {
        className: `${Styles.draggableItem} entryDeaggableItem`,
        ref: itemRef,
        onTouchStart: (e) => {
            handleItemEventStart(e, itemRef.current);
        },
        onTouchMove: (e) => {
            console.log(
                'onTouchMove',
                e.target,
                e.targetTouches[0],
                e.changedTouches[0],
                e.changedTouches.item
            );
            // handleItemEventEnter(e, itemRef.current, true);
        },
        onMouseDown: (e) => {
            handleItemEventStart(e, itemRef.current);
        },
        onMouseMove: (e) => {
            handleItemEventEnter(e, itemRef.current);
        },
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
    useImperativeHandle(ref, () => itemRef.current);
    return (
        <div className={itemWrapperClassName} style={itemWrapperStyle}>
            {(itemShadowClassName || itemShadowStyle) && (
                <div className={itemShadowClassName} style={itemShadowStyle} />
            )}
            {React.isValidElement(item) && <div {...attr}>{item}</div>}
            {!React.isValidElement(item) && <div {...attr} />}
        </div>
    );
});

function makeDragView({ image, x, y }) {
    let imagePath = image;
    if (React.isValidElement(image)) {
        imagePath = image.props['data-image'];
    }
    return (
        <img
            className={Styles.dragView}
            src={imagePath}
            style={{ top: y - 50, left: x - 50, position: 'fixed' }}
            alt={image}
        />
    );
}

function itemInfoReducer(state = {}, data) {
    return produce(state, (draft) => {
        Object.keys(data).forEach((key) => {
            draft[key] = data[key];
        });
    });
}

function getPosition(event) {
    const position = {
        x: 0,
        y: 0,
    };
    if (event instanceof MouseEvent) {
        position.x = event.pageX;
        position.y = event.pageY;
    } else if (event.touches && event.touches[0]) {
        const touch = event.touches[0];
        position.x = touch.pageX;
        position.y = touch.pageY;
    }
    return position;
}

function resetTransform(doms = []) {
    doms.forEach((dom = {}) => {
        const { style = {} } = dom;
        style.transform = '';
    });
}

const getBoundingClientRectMemo = _memoize((target) => target.getBoundingClientRect());
function getBoundingClientRectMemoReset() {
    getBoundingClientRectMemo.cache = new _memoize.Cache();
}

const DRAG_DIRECTION_UP = 1;
const DRAG_DIRECTION_DOWN = 2;

function DraggableList(props) {
    const {
        items,
        disabled,
        distance = 5,
        lockAxis,
        onSortEnd,
        className,
        canSortable,
        itemWrapperClassName,
        itemWrapperStyle,
        itemShadowClassName,
        itemShadowStyle,
    } = props;
    const [isDragging, setDragging] = useState(false);
    const [dragTarget, setDragTarget] = useState({ target: null, index: -1 });
    const [eventBoundary, setEventBoundary] = useState(null);
    const [oldIndex, setOldIndex] = useState(-1);
    const [indexUpdate, setIndexUpdate] = useState(false);
    const [isLeave, setIsLeave] = useState(false);
    const [dragInfo, dispatch] = useReducer(itemInfoReducer, {
        x: 0,
        y: 0,
        image: undefined,
        index: -1,
    });

    useEffect(() => {
        const { onDragActionChange } = props;
        if (onDragActionChange) {
            let key = undefined;
            if (isDragging) {
                const item = items[oldIndex] || {};
                key = item.key;
            }
            onDragActionChange(isDragging, key);
        }
    }, [isDragging]);

    useEffect(() => {
        if (canSortable && oldIndex > -1 && indexUpdate) {
            const { index } = dragInfo;
            onSortEnd({
                oldIndex,
                newIndex: index,
            });
            setIndexUpdate(false);
        }
    }, [oldIndex, indexUpdate]);

    useEffect(() => {
        if (eventBoundary) {
            const { x, y, width, height } = eventBoundary;
            if (
                dragInfo.x < x ||
                dragInfo.x > x + width ||
                dragInfo.y < y ||
                dragInfo.y > y + height
            ) {
                setIsLeave(true);
            } else {
                setIsLeave(false);
            }
        }
    }, [eventBoundary, dragInfo.x, dragInfo.y]);

    useEffect(() => {
        const { onTouchEnd } = props;
        const targetEvent = new EntryEvent(document);
        const { target } = dragTarget;
        let isInnerDragging = false;
        if (target) {
            const { index } = dragInfo;
            setOldIndex(index);
            getBoundingClientRectMemoReset();
            targetEvent.on('touchmove.draggable', itemEventMove, { passive: false });
            targetEvent.on('touchend.draggable', itemEventEnd, true);
            targetEvent.on('mousemove.draggable', itemEventMove, false);
            targetEvent.on('mouseup.draggable', itemEventEnd, true);
        }

        function itemEventMove(e) {
            if (isInnerDragging) {
                e.preventDefault();
            }
            const { target } = dragTarget;
            const { x, y } = dragInfo;
            if (target) {
                const position = getPosition(e);
                if (!isInnerDragging) {
                    let nowDistance = 0;
                    if (lockAxis === 'x') {
                        nowDistance = Math.abs(position.y - y);
                    } else if (lockAxis === 'y') {
                        nowDistance = Math.abs(position.x - x);
                    } else {
                        nowDistance = Math.max(Math.abs(position.x - x), Math.abs(position.y - y));
                    }
                    if (nowDistance > distance) {
                        isInnerDragging = true;
                        setDragging(true);
                    }
                } else {
                    dispatch({
                        x: position.x,
                        y: position.y,
                    });
                    target.style.visibility = 'hidden';
                }
            }
        }

        function itemEventEnd(e) {
            if (onTouchEnd) {
                onTouchEnd(e);
            }
            isInnerDragging = false;
            setDragging(false);
            const { target } = dragTarget;
            if (target) {
                if (target.style.visibility) {
                    setIndexUpdate(true);
                }
                target.style.visibility = '';
            }
            if (targetEvent) {
                targetEvent.off('draggable');
            }
        }

        return () => {
            if (targetEvent) {
                targetEvent.off('draggable');
            }
        };
    }, [dragTarget]);

    const memoizedValue = useMemo(() => {
        const refs = [];
        let parent = null;
        if (isLeave) {
            if (isDragging) {
                resetTransform(refs);
                dispatch({
                    index: oldIndex,
                });
            }
        }
        return (
            <div
                ref={(dom) => {
                    if (dom) {
                        parent = dom;
                        setEventBoundary(getBoundingClientRectMemo(dom));
                    }
                }}
                className={`${Styles.draggable} ${className}`}
            >
                <CustomScroll>
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
                            <div key={key}>
                                <DraggableItem
                                    ref={(dom) => {
                                        if (dom) {
                                            dom.style.transform = '';
                                            refs[index] = dom;
                                        }
                                    }}
                                    handleItemEventStart={(e, target) => {
                                        const { x, y } = getPosition(e.nativeEvent);
                                        dispatch({
                                            index,
                                            image,
                                            x,
                                            y,
                                        });
                                        setDragTarget({
                                            target,
                                            index,
                                        });
                                    }}
                                    handleItemEventEnter={(e, current, isTouch) => {
                                        console.log('event enter', isTouch);
                                        let target = current;
                                        if (isTouch && !isLeave) {
                                            const { x, y } = getPosition(e.nativeEvent);
                                            const element = document.elementFromPoint(x, y);
                                            if (element) {
                                                target = element.closest('.entryDeaggableItem');
                                                index = refs.findIndex((dom) => dom === target);
                                            }
                                        }
                                        if (
                                            canSortable &&
                                            isDragging &&
                                            target &&
                                            dragTarget.target !== target
                                        ) {
                                            const { y } = getPosition(e.nativeEvent);
                                            const { top, height } = getBoundingClientRectMemo(
                                                target
                                            );
                                            const { index: itemIndex } = dragTarget;
                                            let targetIndex = index;

                                            if (itemIndex < index) {
                                                if (top + height / 2 > y) {
                                                    targetIndex = index - 1;
                                                }
                                            } else {
                                                if (top + height / 2 < y) {
                                                    targetIndex = index + 1;
                                                }
                                            }
                                            const direction =
                                                itemIndex < targetIndex
                                                    ? DRAG_DIRECTION_DOWN
                                                    : DRAG_DIRECTION_UP;
                                            const { target: dragItem } = dragTarget;
                                            const {
                                                height: dragItemHeight,
                                            } = getBoundingClientRectMemo(dragItem);
                                            const min = Math.min(itemIndex, targetIndex);
                                            const max = Math.max(itemIndex, targetIndex);

                                            refs.forEach((dom, index) => {
                                                if (index >= min && index <= max) {
                                                    dom.style.transform = `translate3d(0, ${
                                                        direction === DRAG_DIRECTION_UP ? '' : '-'
                                                    }${dragItemHeight}px, 0)`;
                                                } else {
                                                    dom.style.transform = `translate3d(0, 0, 0)`;
                                                }
                                            });
                                            dispatch({
                                                index: targetIndex,
                                            });
                                        }
                                    }}
                                    index={index}
                                    value={{
                                        index,
                                        item,
                                    }}
                                    disabled={disabled}
                                    itemWrapperClassName={itemWrapperClassName}
                                    itemWrapperStyle={itemWrapperStyle}
                                    itemShadowClassName={itemShadowClassName}
                                    itemShadowStyle={itemShadowStyle}
                                />
                            </div>
                        );
                    })}
                </CustomScroll>
            </div>
        );
    }, [items, isDragging, dragTarget, isLeave]);
    return (
        <>
            {memoizedValue}
            {isDragging && (
                <div className={`${Styles.globalDragArea}`}>{makeDragView(dragInfo)}</div>
            )}
        </>
    );
}

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
        const { lockAxis, disabled = false, distance, className = '' } = this.props;
        const shouldCancelStart = this.getShouldCancelStart();
        const cName = `${Styles.draggableList} ${className}`;
        return (
            <>
                <DraggableList
                    className={cName}
                    lockAxis={lockAxis}
                    onSortEnd={this.onSortEnd}
                    disabled={disabled}
                    distance={distance}
                    shouldCancelStart={shouldCancelStart}
                    {...this.props}
                />
            </>
        );
    }
}

export default pure(Draggable);

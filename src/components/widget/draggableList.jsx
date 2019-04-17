import React, { Component } from 'react';
import EntryEvent from '@entrylabs/event';
import produce from 'immer';
import CustomScroll from '../common/customScroll';
import DraggableItem from './draggableItem';
import Styles from '@assets/scss/draggable.scss';

function getPosition(event) {
    const position = {
        x: 0,
        y: 0,
    };
    if (event.touches && event.touches[0]) {
        const touch = event.touches[0];
        position.x = touch.pageX;
        position.y = touch.pageY;
    } else {
        position.x = event.pageX;
        position.y = event.pageY;
    }
    return position;
}

class DraggableList extends Component {
    constructor(props) {
        super(props);
        this.draggableListRef = React.createRef();
        const { items } = props;
        this.setState({ items, defaultItems: items });
    }

    state = {
        isDragging: false,
    };
    targetEvent = new EntryEvent(document);
    targetEvent2 = new EntryEvent(document.body);

    setItemEvent() {
        this.targetEvent.on('touchmove.draggable', this.itemEventMove, { passive: false });
        this.targetEvent.on('touchend.draggable', this.itemEventEnd, true);
        this.targetEvent.on('mousemove.draggable', this.itemEventMove, true);
        this.targetEvent.on('mouseup.draggable', this.itemEventEnd, true);
    }

    unsetItemEvent() {
        this.targetEvent.off('draggable');
    }

    componentWillUnmount() {
        this.unsetItemEvent();
    }

    getListRect = _.memoize(() => {
        /** @type {HTMLElement} */
        const target = this.scrollElement;
        if (target) {
            this.listRect = target.getBoundingClientRect();
        }
        return this.listRect;
    });

    getCheckRect = _.memoize(() => {
        /** @type {{current: HTMLElement}} */
        const { current = {} } = this.draggableListRef;
        /** @type {{children: HTMLCollection | Array}} */
        const { children = [] } = current;
        const checkRectList = [];
        const { index } = this.dragItemInfo;
        for (let i = 0; i < children.length; i++) {
            const itemRect = children[i].getBoundingClientRect();
            if (i === index) {
                children[i].style.transition = 'none';
                children[i].style.zIndex = '';
            } else {
                children[i].style.transition = '';
                children[i].style.zIndex = '1';
            }
            checkRectList.push({
                y: itemRect.y,
                height: itemRect.height,
                index: i,
                element: children[i],
                translateY: 0,
            });
        }
        return checkRectList;
    });

    getSortableInfo(e) {
        const { y } = getPosition(e);
        let index = -1;
        let minValue = Infinity;
        const { index: itemIndex } = this.dragItemInfo;
        [...this.checkRectList, this.checkRectList[this.checkRectList.length - 1]].forEach(
            ({ y: rectY, height, translateY }, i) => {
                let value = rectY - y + translateY;
                if (this.checkRectList.length !== i) {
                    value = rectY - y + translateY;
                } else {
                    value = rectY - y + height;
                }
                value = Math.abs(value);
                if (minValue > value) {
                    minValue = value;
                    if (i < itemIndex) {
                        index = i;
                    } else if (i > itemIndex) {
                        index = i - 1;
                    } else {
                        index = this.lastNewIndex;
                    }
                }
            }
        );
        return this.checkRectList[index];
    }

    isLeavePoint(e) {
        const { x, y } = getPosition(e);
        return !(
            x > this.listRect.x &&
            x < this.listRect.x + this.listRect.width &&
            y > this.listRect.y &&
            y < this.listRect.y + this.listRect.height
        );
    }

    isSortableItem(oldIndex, newIndex) {
        if (oldIndex !== newIndex) {
            if (oldIndex < newIndex) {
                return newIndex - 1 !== oldIndex;
            } else if (oldIndex > newIndex) {
                return true;
            }
        }
    }

    getSortItems = _.memoize((newIndex, oldIndex) => {
        const { defaultItems = [] } = this.state;
        const cloneItems = _.cloneDeep(defaultItems);
        cloneItems.splice(newIndex, 0, ...cloneItems.splice(oldIndex, 1));

        return cloneItems;
    });

    setSortableTransform(oldIndex, newIndex) {
        if (this.lastNewIndex !== newIndex) {
            this.lastNewIndex = newIndex;
            const checkItem = this.checkRectList[oldIndex];
            const { height } = checkItem;
            let start = Math.min(oldIndex, newIndex);
            const end = Math.max(oldIndex, newIndex);
            let isDown = false;
            if (oldIndex < newIndex) {
                isDown = true;
                start += 1;
            }
            this.checkRectList.forEach((checkRect, index) => {
                const { element } = checkRect;
                let rectTranslate = 0;
                if (index === oldIndex) {
                    const { y, height } = this.checkRectList[newIndex];
                    let margin = 0;
                    if (oldIndex <= newIndex) {
                        margin = height - checkRect.height;
                    }
                    rectTranslate = y - checkRect.y + margin;
                    element.style.transform = `translate3d(0,${rectTranslate}px,-1px)`;
                } else if (index >= start && index <= end) {
                    if (isDown) {
                        rectTranslate = -height;
                    } else {
                        rectTranslate = height;
                    }
                    element.style.transform = `translate3d(0,${rectTranslate}px,1px)`;
                } else {
                    element.style.transform = '';
                }
                checkRect.translateY = rectTranslate;
            });
        }
    }

    resetSortableTransform() {
        const { current = {} } = this.draggableListRef;
        const { children = [] } = current;

        for (let index = 0; index < children.length; index++) {
            const element = children[index];
            if (element.style) {
                element.style.transform = '';
            }
        }
    }

    updateRafList = {};
    updateRaf(key, callback) {
        if (!this.updateRafList[key]) {
            this.updateRafList[key] = true;
            requestAnimationFrame(() => {
                delete this.updateRafList[key];
                callback();
            });
        }
    }

    itemEventMove = (e) => {
        if (!this.dragItemInfo || !this.dragItemInfo.target) {
            return;
        }

        const { canSortable } = this.props;
        const { isDragging } = this.state;
        if (isDragging) {
            e.preventDefault();
            const { x, y } = getPosition(e);
            if (this.dragImage) {
                this.dragImage.style.transform = `translate3d(${x - 50}px, ${y - 50}px, 0)`;
            }
            if (!canSortable) {
                return;
            }
            if (!this.isLeavePoint(e)) {
                this.checkRectList = this.checkRectList
                    ? this.checkRectList
                    : _.cloneDeep(this.getCheckRect());
                const checkItem = this.getSortableInfo(e) || {};
                const { index } = this.dragItemInfo;
                const { index: infoIndex = index } = checkItem;
                this.setSortableTransform(index, infoIndex);
            } else {
                this.lastNewIndex = -1;
                this.resetSortableTransform();
            }
        } else {
            this.getListRect();
            const { lockAxis, distance = 5, onDragActionChange } = this.props;
            const { x, y } = this.dragItemInfo;
            const position = getPosition(e);

            let nowDistance = 0;
            if (lockAxis === 'x') {
                nowDistance = Math.abs(position.y - y);
            } else if (lockAxis === 'y') {
                nowDistance = Math.abs(position.x - x);
            } else {
                nowDistance = Math.max(Math.abs(position.x - x), Math.abs(position.y - y));
            }
            if (nowDistance > distance) {
                const { target, item } = this.dragItemInfo;
                const { key } = item;
                target.style.visibility = 'hidden';
                this.setState(
                    produce((draft) => {
                        draft.isDragging = true;
                    })
                );
                onDragActionChange(true, key);
            }
        }
    };

    itemEventEnd = (e) => {
        const { isDragging } = this.state;
        if (isDragging) {
            const { onTouchEnd } = this.props;
            if (onTouchEnd) {
                onTouchEnd(e);
            }
            this.setState(
                produce((draft) => {
                    draft.isDragging = false;
                })
            );
            this.checkRect = null;
            this.resetSortableTransform();
            const { onDragActionChange } = this.props;
            onDragActionChange(false);
            if (this.dragItemInfo && this.dragItemInfo.target) {
                const { onChangeList } = this.props;
                const { target = {}, index } = this.dragItemInfo;
                target.style.visibility = '';
                this.dragItemInfo = {};
                if (onChangeList) {
                    onChangeList(this.lastNewIndex, index);
                }
            }
        }

        this.getListRect.cache = new _.memoize.Cache();
        this.getCheckRect.cache = new _.memoize.Cache();
        this.getSortItems.cache = new _.memoize.Cache();
        this.checkRectList = undefined;
        this.lastNewIndex = -1;
        this.dragItemInfo = undefined;
        this.unsetItemEvent();
    };

    makeDraggableList() {
        const {
            items = [],
            disabled,
            itemWrapperClassName,
            itemWrapperStyle,
            itemShadowClassName,
            itemShadowStyle,
        } = this.props;

        return (
            <div ref={this.draggableListRef} className={Styles.draggableList}>
                {items.map((value, index) => {
                    let key = `item-${index}`;
                    let item = value;
                    let image = value;
                    if (!React.isValidElement(value) && _.isPlainObject(value)) {
                        key = value.key || key;
                        item = value.item;
                        image = value.image;
                    }
                    return (
                        <div key={key}>
                            <DraggableItem
                                handleItemEventStart={(e, target) => {
                                    this.dragItemInfo = getPosition(e.nativeEvent);
                                    this.dragItemInfo.target = target;
                                    this.dragItemInfo.item = value;
                                    this.dragItemInfo.index = index;
                                    this.dragItemInfo.image = image;
                                    this.setItemEvent();
                                    // this.setState(
                                    //     produce((draft) => {
                                    //         draft.image = image;
                                    //     })
                                    // );
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
                                style={{
                                    transition: 'transform',
                                }}
                            />
                        </div>
                    );
                })}
            </div>
        );
    }

    makeDragView() {
        const { image } = this.dragItemInfo || {};
        let imagePath = image;
        if (React.isValidElement(image)) {
            imagePath = image.props['data-image'];
        }
        return (
            <img
                className={Styles.dragView}
                src={imagePath}
                ref={(dom) => {
                    this.dragImage = dom;
                }}
                alt={image}
            />
        );
    }

    render() {
        const { isDragging } = this.state;
        const { className } = this.props;
        return (
            <div className={`${Styles.draggable} ${className}`}>
                <CustomScroll
                    ref={(dom) => {
                        if (this.scrollElement !== dom) {
                            this.scrollElement = dom;
                        }
                    }}
                >
                    {this.makeDraggableList()}
                </CustomScroll>
                {isDragging && (
                    <div className={`${Styles.globalDragArea}`}>{this.makeDragView()}</div>
                )}
            </div>
        );
    }
}
export default DraggableList;

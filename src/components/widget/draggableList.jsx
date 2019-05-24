import React, { Component } from 'react';
import EntryEvent from '@entrylabs/event';
import produce from 'immer';
import CustomScroll from '../common/customScroll';
import DraggableItem from './draggableItem';
import Styles from '@assets/entry/scss/draggable.scss';
import AutoScroll from '@utils/AutoScroll';
import { CommonUtils } from '@utils/Common';
const { getPosition } = CommonUtils;

class DraggableList extends Component {
    constructor(props) {
        super(props);
        this.draggableListRef = React.createRef();
    }

    state = {
        isDragging: false,
        items: this.props.items,
        defaultItems: this.props.items,
    };
    targetEvent = new EntryEvent(document);
    targetEvent2 = new EntryEvent(document.body);
    prevAutoScrollPos = { x: 0, y: 0 };

    setItemEvent() {
        this.targetEvent.on('touchmove.draggable', this.itemEventMove, { passive: false });
        this.targetEvent.on('touchend.draggable', this.itemEventEnd, true);
        this.targetEvent.on('mousemove.draggable', this.itemEventMove, true);
        this.targetEvent.on('mouseup.draggable', this.itemEventEnd, true);
    }

    unsetItemEvent() {
        this.targetEvent.off('draggable');
    }

    componentDidMount() {
        this.autoScroll = new AutoScroll(this.scrollElement);
    }

    componentWillUnmount() {
        this.unsetItemEvent();
        this.dragItemInfo = undefined;
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
                top: itemRect.top,
                bottom: itemRect.bottom,
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
        const { scrollTop = 0 } = this.scrollElement || {};
        const scrollOffset = scrollTop - this.scrollTop;
        [...this.checkRectList, this.checkRectList[this.checkRectList.length - 1]].forEach(
            ({ top, bottom, translateY }, i) => {
                let value = top - y + translateY;
                if (this.checkRectList.length !== i) {
                    value = top - (y + scrollOffset) + translateY;
                } else {
                    value = bottom - (y + scrollOffset);
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
            x > this.listRect.left &&
            x < this.listRect.right &&
            y > this.listRect.top &&
            y < this.listRect.bottom
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
                    const { top, height } = this.checkRectList[newIndex];
                    let margin = 0;
                    if (oldIndex <= newIndex) {
                        margin = height - checkRect.height;
                    }
                    rectTranslate = top - checkRect.top + margin;
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
        const { children = [] } = current || {};

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
        const { isDragging } = this.state;
        if (isDragging && e.cancelable) {
            e.preventDefault();
        }
        if (!this.dragItemInfo || !this.dragItemInfo.target) {
            return;
        }
        if (
            this.isScrolling &&
            !this.autoScroll.isAutoScrolling &&
            Entry.isMobile() &&
            !e.cancelable
        ) {
            const { onDragActionChange } = this.props;
            const { target } = this.dragItemInfo;
            target.style.visibility = '';
            this.setState(
                produce((draft) => {
                    draft.isDragging = false;
                })
            );
            if (onDragActionChange) {
                onDragActionChange(false);
            }
            return;
        }

        const { canSortable } = this.props;
        if (isDragging) {
            const { x, y } = getPosition(e);
            if (this.dragImage) {
                this.dragImage.style.opacity = '1';
                this.dragImage.style.transform = `translate3d(${x - 50}px, ${y - 50}px, 0)`;
            }
            if (!canSortable) {
                return;
            }
            const { index } = this.dragItemInfo;
            if (!this.isLeavePoint(e)) {
                this.checkRectList = this.checkRectList
                    ? this.checkRectList
                    : _.cloneDeep(this.getCheckRect());

                this.autoScroll.update({ x, y });
                const checkItem = this.getSortableInfo(e) || {};
                const { index: infoIndex = index } = checkItem;
                this.setSortableTransform(index, infoIndex);
            } else {
                this.lastNewIndex = index;
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
                this.autoScroll.reset();
                const { scrollTop = 0 } = this.scrollElement || {};
                this.scrollTop = scrollTop;
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
        this.autoScroll.reset();
        if (this.dragItemInfo && this.dragItemInfo.target) {
            const { target = {} } = this.dragItemInfo;
            target.style.visibility = '';
        }
        const { isDragging } = this.state;
        if (isDragging) {
            const { onDropItem } = this.props;
            if (onDropItem) {
                onDropItem(e);
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
                const { index } = this.dragItemInfo;
                const { onChangeList } = this.props;
                if (onChangeList) {
                    onChangeList(this.lastNewIndex, index);
                }
                this.dragItemInfo = {};
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

    addClassName(element, name) {
        const arr = element.className.split(' ');
        if (arr.indexOf(name) == -1) {
            element.className += ` ${name}`;
        }
    }

    makeDragView() {
        const { isDragging } = this.state;
        if (isDragging) {
            if (!this.dragViewElement) {
                const { image } = this.dragItemInfo || {};
                let imagePath = image;
                if (React.isValidElement(image)) {
                    imagePath = image.props['data-image'];
                }
                this.dragViewElement = document.createElement('div');
                this.dragImage = document.createElement('div');
                this.addClassName(this.dragViewElement, Styles.globalDragArea);
                this.addClassName(this.dragImage, Styles.dragView);
                const imageElement = document.createElement('img');
                imageElement.src = imagePath;
                imageElement.alt = image;
                this.dragImage.appendChild(imageElement);
                this.dragViewElement.appendChild(this.dragImage);
                document.body.appendChild(this.dragViewElement);
            }
            const { x, y } = this.dragItemInfo;
            this.dragImage.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        } else if (this.dragViewElement) {
            document.body.removeChild(this.dragViewElement);
            this.dragImage = undefined;
            this.dragViewElement = undefined;
        }
    }

    render() {
        const { className, scrollStyle } = this.props;
        this.makeDragView();
        return (
            <div
                className={`${Styles.draggable} ${className}`}
                ref={(dom) => {
                    if (dom) {
                        dom.addEventListener(
                            'mousedown',
                            (e) => {
                                if (e.target.tagName === 'INPUT') {
                                    e.stopPropagation();
                                    e.stopImmediatePropagation();
                                }
                            },
                            true
                        );
                    }
                }}
            >
                <CustomScroll
                    ref={(dom) => {
                        if (this.scrollElement !== dom) {
                            this.scrollElement = dom;
                        }
                    }}
                    onScrollState={(isScrolling) => {
                        this.isScrolling = isScrolling;
                    }}
                    style={scrollStyle}
                >
                    {this.makeDraggableList()}
                </CustomScroll>
                {/* {isDragging && (
                    <div className={`${Styles.globalDragArea}`}>{this.makeDragView()}</div>
                )} */}
            </div>
        );
    }
}
export default DraggableList;

import React, { Component } from 'react';
import { pure } from 'recompose';
import Draggable from './draggable';
import LimitedInput from '../common/LimitedInput';
import OutsideClick from '../common/outsideClick';
import produce from 'immer';
import EntryEvent from '@entrylabs/event';
import { CommonUtils } from '@utils/Common';
import Theme from '@utils/Theme';

class Backpack extends Component {
    state = {
        selectedId: '-1',
    };

    constructor(props) {
        super(props);
        this.backpack = React.createRef();
        this.eventTarget = new EntryEvent(document);
        this.eventWindow = new EntryEvent(window);
        this.input = React.createRef();
        this.refsList = [];
        this.theme = Theme.getStyle("backpack");
    }

    get itemShadowStyle() {
        if (Theme.type === 'entryline') {
            return {
                position: 'absolute',
                backgroundColor: '#888888',
                border: 'solid 1px #888888',
            };
        }
        return {
            position: 'absolute',
            backgroundColor: '#8aa3b2',
            border: 'solid 1px #728997',
        };
    }

    setPointEvent() {
        const { canPointEvent } = this.props;
        if (canPointEvent) {
            this.eventTarget.on('touchmove.bpInTool', this.handlePointMove);
            this.eventTarget.on('touchend.bpInTool', this.handlePointEnd);
            this.eventTarget.on('mousemove.bpInTool', this.handlePointMove);
            this.eventTarget.on('mouseup.bpInTool', this.handlePointEnd);
            this.eventWindow.on(
                'resize.bpInTool',
                _.throttle(() => {
                    this.getBackpackRect.cache = new _.memoize.Cache();
                }, 500)
            );
        }
    }

    componentWillUnmount() {
        this.eventTarget.off('bpInTool');
    }

    getBackpackRect = _.memoize(() => {
        const { current } = this.backpack;
        if (current) {
            return current.getBoundingClientRect();
        } else {
            return undefined;
        }
    });

    handlePointMove = (e) => {
        const backpackRect = this.getBackpackRect();
        if (backpackRect) {
            const { top, bottom, left, right } = backpackRect;
            const pos = CommonUtils.getPosition(e);
            const { isDragEnter } = this.state;
            const isEnter = _.inRange(pos.x, left, right) && _.inRange(pos.y, top, bottom);
            if (isEnter && !isDragEnter) {
                this.handleCustomEnter(e);
            } else if (!isEnter && isDragEnter) {
                this.handleDragState(false);
            }
        }
    };

    handlePointEnd = (e) => {
        const { isDragEnter } = this.state;
        if (isDragEnter) {
            this.handleItemDrop(e);
        }
        this.getBackpackRect.cache = new _.memoize.Cache();
        this.eventTarget.off('bpInTool');
    };

    handleUpdateTitle = (id, target, defaultValue) => {
        const { value } = target;
        const { onChangeTitle } = this.props;
        if (onChangeTitle && value && value !== defaultValue) {
            onChangeTitle(id, value);
        } else if (!value) {
            target.value = defaultValue;
        }
        this.setState(
            produce((draft) => {
                draft.selectedId = '-1';
            })
        );
    };

    handleItemSelect = (id) => {
        this.setState(
            produce((draft) => {
                draft.selectedId = id;
            })
        );
    };

    handleRemoveItem = (id) => {
        const { onRemoveItem } = this.props;
        if (onRemoveItem) {
            onRemoveItem(id);
        }
    };

    handleDragInfo = (isDragging, data) => {
        const { onDragActionChange, onDragData } = this.props;
        if (onDragActionChange) {
            onDragActionChange(isDragging);
        }
        if (onDragData && data) {
            onDragData(data);
        }
    };

    handleDragStart(e, { type }) {
        const { onChangeDragType } = this.props;
        if (onChangeDragType) {
            onChangeDragType(type);
        }
    }

    handlePreventDefault(e) {
        e.preventDefault();
        return false;
    }

    handleDropItem = (item) => {
        const { onDropItem } = this.props;
        if (onDropItem) {
            onDropItem(item);
        }
    };

    handleDragState = (state) => {
        this.setState(
            produce((draft) => {
                draft.isDragEnter = state;
            })
        );
    };

    handleKeyup(e) {
        if (e.keyCode === 13) {
            e.target.blur();
        }
    }

    preventDefault(e) {
        e.preventDefault();
    }

    handleOutsideClick = (key) => {
        const current = this.refsList[key];
        if (current === document.activeElement) {
            current.blur();
        }
    };

    makeItemList() {
        const { items = [] } = this.props;
        const { selectedId = '-1' } = this.state;
        return items.map((item) => {
            const { _id, imgPath, title = '' } = item;
            const isSelected = _id === selectedId;
            return (
                <div
                    key={_id}
                    className={`${this.theme.item} ${isSelected ? this.theme.active : ''}`}
                    onClick={() => {
                        this.handleItemSelect(_id);
                    }}
                    onMouseDown={(e) => {
                        this.handleDragStart(e, item);
                    }}
                    onTouchStart={(e) => {
                        this.handleDragStart(e, item);
                    }}
                    data-image={imgPath}
                >
                    <div className={this.theme.imageWrapper}>
                        <img src={imgPath} className={this.theme.image} alt={title} />
                    </div>
                    <div className={this.theme.imageOverlay} />
                    <div
                        className={this.theme.closeButton}
                        onClick={() => {
                            this.handleRemoveItem(_id);
                        }}
                    />
                    <div>
                        <OutsideClick
                            onOutsideClick={() => {
                                this.handleOutsideClick(_id);
                            }}
                            eventTypes={['mousedown', 'touchstart']}
                        >
                            <LimitedInput
                                type={'text'}
                                inputRef={(dom) => {
                                    this.refsList[_id] = dom;
                                }}
                                className={this.theme.input}
                                value={title}
                                onKeyUp={this.handleKeyup}
                                onFocus={() => {
                                    this.handleItemSelect(_id);
                                }}
                                maxLength={45}
                                onBlur={({ target }) => {
                                    const { value } = target;
                                    if (value !== title) {
                                        this.handleUpdateTitle(_id, target, title);
                                        this.handleDragInfo(false);
                                    }
                                }}
                            />
                        </OutsideClick>
                    </div>
                </div>
            );
        });
    }

    handleCustomEnter(e) {
        const { onCustomDragEnter } = this.props;
        if (onCustomDragEnter) {
            onCustomDragEnter({
                value: e,
                type: 'block',
                onDragEnter: (value) => {
                    this.lastDropItem = value;
                    this.handleDragState(true);
                },
            });
        }
    }

    handleItemDrop = () => {
        this.handleDragState(false);
        this.handleDropItem(this.lastDropItem);
    };

    makeLoadingView() {
        return (
            <div className={this.theme.loading}>
                <div className={this.theme.image} />
                {CommonUtils.getLang('Menus.file_upload_loading')}
            </div>
        );
    }

    getDropMsg() {
        const { type = '' } = this.lastDropItem || {};
        if (type === 'block') {
            return CommonUtils.getLang('Workspace.my_storage_block_drop');
        } else {
            return CommonUtils.getLang('Workspace.my_storage_object_drop');
        }
    }

    render() {
        const { onClose = () => {}, isLoading = true, draggableOption } = this.props;
        const { isDragEnter = false } = this.state;
        this.setPointEvent();

        return (
            <div ref={this.backpack} className={this.theme.Backpack}>
                <div className={this.theme.titleArea} onClick={onClose}>
                    <div className={this.theme.icon} />
                    <div className={this.theme.title}>
                        {CommonUtils.getLang('Workspace.my_storage')}
                    </div>
                </div>
                {isLoading && this.makeLoadingView()}
                {!isLoading && (
                    <div className={this.theme.itemArea}>
                        <Draggable
                            {...draggableOption}
                            items={this.makeItemList()}
                            onDragActionChange={(isDragging, data) => {
                                this.handleDragInfo(isDragging, data);
                            }}
                            className={'csacsacas'}
                            scrollStyle={{
                                paddingTop: '16px',
                                height: 'calc(100% - 16px)',
                            }}
                            itemShadowClassName={this.theme.item}
                            itemShadowStyle={this.itemShadowStyle}
                        />
                    </div>
                )}
                {isDragEnter && (
                    <div className={this.theme.dragArea}>
                        <div className={this.theme.icon} />
                        <div className={this.theme.desc}>{this.getDropMsg()}</div>
                    </div>
                )}
            </div>
        );
    }
}

export default pure(Backpack);

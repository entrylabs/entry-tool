import React, { Component } from 'react';
import { pure } from 'recompose';
import Draggable from './draggable';
import produce from 'immer';
import Styles from '../../assets/scss/widget/Backpack.scss';
import EntryEvent from '@entrylabs/event';
import { CommonUtils } from '@utils/Common';

class Backpack extends Component {
    state = {
        selectedId: '-1',
    };

    constructor(props) {
        super(props);
        this.backpack = React.createRef();
    }

    componentDidMount() {
        this.eventTarget = new EntryEvent(document);
        this.eventTarget.on('touchmove.bpInTool', this.handlePointMove);
        this.eventTarget.on('touchend.bpInTool', this.handlePointEnd);
        this.eventTarget.on('mousemove.bpInTool', this.handlePointMove);
        this.eventTarget.on('mouseup.bpInTool', this.handlePointEnd);
    }

    componentWillUnmount() {
        this.eventTarget.off('.bpInTool');
    }

    getBackpackRect;

    handlePointMove = (e) => {
        console.log('move');
        const pos = CommonUtils.getPosition(e);
        const element = document.elementFromPoint(pos.x, pos.y);
        const { current } = this.backpack;
        const { isDragEnter } = this.state;
        const isEnter = current ? current.contains(element) : false;
        if (isEnter && !isDragEnter) {
            this.handleCustomEnter(e);
        } else if (!isEnter && isDragEnter) {
            this.handleDragState(false);
        }
    };

    handlePointEnd = (e) => {
        const { isDragEnter } = this.state;
        if (isDragEnter) {
            this.handleItemDrop(e);
        }
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

    makeItemList() {
        const { items = [] } = this.props;
        const { selectedId = '-1' } = this.state;
        return items.map((item) => {
            const { _id, imgPath, title = '' } = item;
            const isSelected = _id === selectedId;
            return (
                <div
                    key={_id}
                    className={`${Styles.item} ${isSelected ? Styles.active : ''}`}
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
                    <div className={Styles.imageWrapper}>
                        <img src={imgPath} className={Styles.image} alt={title} />
                    </div>
                    <div className={Styles.imageOverlay} />
                    <button
                        className={Styles.closeButton}
                        onClick={() => {
                            this.handleRemoveItem(_id);
                        }}
                    />
                    <div>
                        <input
                            className={Styles.input}
                            defaultValue={title}
                            onKeyUp={this.handleKeyup}
                            onBlur={({ target }) => {
                                const { value } = target;
                                if (value !== title) {
                                    this.handleUpdateTitle(_id, target, title);
                                    this.handleDragInfo(false);
                                }
                            }}
                        />
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
            <div className={Styles.loading}>
                <div className={Styles.image} />
                {CommonUtils.getLang('Menus.file_upload_loading')}
            </div>
        );
    }

    render() {
        const { onClose = () => {}, isLoading = true, draggableOption } = this.props;
        const { isDragEnter = false } = this.state;
        return (
            <div ref={this.backpack} className={Styles.Backpack}>
                <div className={Styles.titleArea} onClick={onClose}>
                    <div className={Styles.icon} />
                    <div className={Styles.title}>
                        {CommonUtils.getLang('Workspace.my_storage')}
                    </div>
                </div>
                {isLoading && this.makeLoadingView()}
                {!isLoading && (
                    <div
                        className={Styles.itemArea}
                        onMouseEnter={(e) => {
                            // this.handleCustomEnter(e);
                        }}
                    >
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
                            itemShadowClassName={Styles.item}
                            itemShadowStyle={{
                                position: 'absolute',
                                backgroundColor: '#8aa3b2',
                                border: 'solid 1px #728997',
                            }}
                        />
                    </div>
                )}
                {isDragEnter && (
                    <div
                        className={Styles.dragArea}
                        onMouseUp={this.handleItemDrop}
                        onMouseLeave={() => {
                            this.handleDragState(false);
                        }}
                    >
                        <div className={Styles.icon} />
                        <div className={Styles.desc}>
                            {CommonUtils.getLang('Workspace.my_storage_backpack_drop')}
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default pure(Backpack);

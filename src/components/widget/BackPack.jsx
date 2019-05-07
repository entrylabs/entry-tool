import React, { Component } from 'react';
import { pure } from 'recompose';
import Scrollbars from '../common/scrollbars';
import produce from 'immer';
import EntryEvent from '@entrylabs/event';
import { CommonUtils } from '@utils/Common';
import Theme from '@utils/Theme';

class BackPack extends Component {
    state = {
        selectedId: '-1',
        isDragging: false,
    };

    constructor(props) {
        super(props);
        this.theme = Theme.getStyle("popup");
        this.backPack = React.createRef();
    }
    
    componentDidMount() {
        this.eventTarget = new EntryEvent(document);   
        this.eventTarget.on('touchmove.bpInTool', (e) => {
            const touch = e.touches[0];
            const element = document.elementFromPoint(touch.clientX, touch.clientY);
            const { current } = this.backPack;
            const { isDragEnter } = this.state;
            const isEnter = current.contains(element);
            if (isEnter && !isDragEnter) {
                this.handleCustomEnter(e);
            } else if (!isEnter && isDragEnter) {
                this.handleDragState(false);
            }
        });
        this.eventTarget.on('touchend.bpInTool', (e) => {
            const { isDragEnter, isDragging } = this.state;            
            if (isDragEnter && !isDragging) {
                this.handleBlockDrop(e);
            }
        });
    }

    componentWillUnmount() {
        this.eventTarget.off('.bpInTool');
    }

    handleUpdateTitle = (id, target, defaultValue) => {
        const { value } = target;
        const { onChangeTitle } = this.props;
        if (onChangeTitle && value) {
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

    handleDragStart(e, { _id, type }) {
        e.dataTransfer.setData('text', _id);
        const { onChangeDragType } = this.props;
        if (onChangeDragType) {
            onChangeDragType(type);
        }
        this.setState(produce((draft) => {
            draft.isDragging = true;
        }));
    }
    
    handleDragEnd() {
        const { onChangeDragType } = this.props;
        if (onChangeDragType) {
            onChangeDragType('none');
        }
        this.setState(produce((draft) => {
            draft.isDragging = false;
            draft.isDragEnter = false;
        }));
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

    makeEmbed(imgPath) {
        if (imgPath.indexOf('.svg') > -1) {
            return (
                <embed src={imgPath} className={this.theme.image}/>
            );
        } else {
            return (
                <img src={imgPath} className={this.theme.image} alt="" />
            );
        }
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
                    className={`${this.theme.item} ${isSelected ? this.theme.active : ''}`}
                    onClick={() => {
                        this.handleItemSelect(_id);
                    }}
                    draggable={true}
                    onDragStart={(e) => {
                        this.handleDragStart(e, item);
                    }}
                    onDragEnd={(e) => {
                        this.handleDragEnd(e);
                    }}
                >
                    <div className={this.theme.imageWrapper}>
                        {this.makeEmbed(imgPath)}
                    </div>
                    <div className={this.theme.imageOverlay} />
                    <button
                        className={this.theme.closeButton}
                        onClick={() => {
                            this.handleRemoveItem(_id);
                        }}
                    />
                    <div>
                        <input
                            className={this.theme.input}
                            defaultValue={title}
                            onDrop={this.handlePreventDefault}
                            onKeyUp={this.handleKeyup}
                            onBlur={({ target }) => {
                                this.handleUpdateTitle(_id, target, title);
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
                onDragEnter: ({ type, value }) => {
                    if (type === 'block') {
                        this.lastBlockView = value;
                    }
                    this.handleDragState(true);
                },
            });
        }
    }

    handleBlockDrop = () => {
        this.handleDragState(false);
        this.handleDropItem({
            type: 'block',
            value: this.lastBlockView,
        });
    }

    makeLoadingView() {
        return (
            <div className={this.theme.loading}>
                <div className={this.theme.image} />
                {CommonUtils.getLang('Menus.file_upload_loading')}
            </div>
        );
    }

    render() {
        const { onClose = () => {}, isLoading = true } = this.props;
        const { isDragEnter = false, isDragging = false } = this.state;
        return (
            // <OutsideClick
            //     outsideExcludeDom={outsideExcludeDom}
            //     onOutsideClick={() => {
            //         onOutsideClick(angle);
            //     }}
            //     eventTypes={eventTypes}
            //     style={{ height: '100%' }}
            // >
            <div ref={this.backPack} className={this.theme.BackPack}>
                <div className={this.theme.titleArea} onClick={onClose}>
                    <div className={this.theme.icon} />
                    <div className={this.theme.title}>{CommonUtils.getLang('Workspace.my_storage')}</div>
                </div>
                {isLoading && this.makeLoadingView()}
                {!isLoading && (
                    <div
                        className={this.theme.itemArea}
                        onDragEnter={() => {
                            this.handleDragState(true);
                        }}
                        onMouseEnter={(e) => {
                            this.handleCustomEnter(e);
                        }}
                    >
                        <Scrollbars heightRelativeToParent="100%" className={this.theme.scrollbar}>{this.makeItemList()}</Scrollbars>
                    </div>
                )}
                {isDragEnter && !isDragging && (
                    <div
                        className={this.theme.dragArea}
                        onDrop={(e) => {
                            this.handleDragState(false);
                            const value = e.dataTransfer.getData('text');
                            this.handleDropItem({
                                value,
                                type: 'object',
                            });
                        }}
                        onDragOver={this.handlePreventDefault}
                        onDragLeave={() => {
                            this.handleDragState(false);
                        }}
                        onMouseUp={this.handleBlockDrop}
                        onMouseLeave={() => {
                            this.handleDragState(false);
                        }}
                    >
                        <div className={this.theme.icon}/>
                        <div className={this.theme.desc}>{CommonUtils.getLang('Workspace.my_storage_backpack_drop')}</div>
                    </div>
                )}
            </div>
            // </OutsideClick>
        );
    }
}

export default pure(BackPack);

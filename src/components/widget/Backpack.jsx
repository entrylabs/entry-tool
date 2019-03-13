import React, { Component } from 'react';
import { pure } from 'recompose';
import Scrollbars from '../common/scrollbars';
import produce from 'immer';
import Styles from '../../assets/scss/widget/BackPack.scss';
import { CommonUtils } from '@utils/Common';

class BackPack extends Component {
    state = {
        selectedId: '-1',
        isDragging: false,
    };

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
                <embed src={imgPath} className={Styles.image}/>
            );
        } else {
            return (
                <img src={imgPath} className={Styles.image} alt="" />
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
                    className={`${Styles.item} ${isSelected ? Styles.active : ''}`}
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
                    <div className={Styles.imageWrapper}>
                        {this.makeEmbed(imgPath)}
                    </div>
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

    makeLoadingView() {
        return (
            <div className={Styles.loading}>
                <div className={Styles.image} />
                로딩중
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
            <div className={Styles.BackPack}>
                <div className={Styles.titleArea} onClick={onClose}>
                    <div className={Styles.icon} />
                    <div className={Styles.title}>{CommonUtils.getLang('Workspace.my_storage')}</div>
                </div>
                {isLoading && this.makeLoadingView()}
                {!isLoading && (
                    <div
                        className={Styles.itemArea}
                        onDragEnter={() => {
                            this.handleDragState(true);
                        }}
                        onMouseEnter={(e) => {
                            // const {nativeEvent} = e;
                            // const entryBoard = document.querySelector('.entryBoard');
                            // nativeEvent.
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
                        }}
                    >
                        <Scrollbars flex="1" className={Styles.scrollbar}>{this.makeItemList()}</Scrollbars>
                    </div>
                )}
                {isDragEnter && !isDragging && (
                    <div
                        className={Styles.dragArea}
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
                        onMouseUp={() => {
                            this.handleDragState(false);
                            this.handleDropItem({
                                type: 'block',
                                value: this.lastBlockView,
                            });
                        }}
                        onMouseLeave={() => {
                            this.handleDragState(false);
                        }}
                    >
                        <div className={Styles.icon}/>
                        <div className={Styles.desc}>{CommonUtils.getLang('Workspace.my_storage_backpack_drop')}</div>
                    </div>
                )}
            </div>
            // </OutsideClick>
        );
    }
}

export default pure(BackPack);

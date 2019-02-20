import React, { Component } from 'react';
import { pure } from 'recompose';
import Scrollbars from '../common/scrollbars';
import produce from 'immer';
import Styles from '../../assets/scss/widget/BackPack.scss';

class BackPack extends Component {
    get a() {
        return 'haha';
    }
    get lms2() {
        return 'haha';
    }

    state = {
        selectedId: '-1',
    };
    // constructor(props) {
    //     super(props);
    // }

    handleUpdateTitle = (id, target, defaultValue) => {
        const { value } = target;
        const { onChangeTitle } = this.props;
        if (onChangeTitle && value) {
            onChangeTitle(id, value);
        } else if (!value) {
            target.value = defaultValue;
        }
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
        // console.log(e, item);
        // e.dataTransfer.setData('type', type);
        e.dataTransfer.setData('text', _id);
        const { onChangeDragType } = this.props;
        if (onChangeDragType) {
            onChangeDragType(type);
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
                >
                    <div className={Styles.imageWrapper}>
                        <div
                            className={Styles.image}
                            style={{
                                backgroundImage: `url(${imgPath})`,
                            }}
                        />
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
                    <div className={Styles.title}>나의 보관함</div>
                </div>
                {isLoading && this.makeLoadingView()}
                {!isLoading && (
                    <div className={Styles.itemArea}>
                        <Scrollbars flex="1">{this.makeItemList()}</Scrollbars>
                    </div>
                )}
            </div>
            // </OutsideClick>
        );
    }
}

export default pure(BackPack);

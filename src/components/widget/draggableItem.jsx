import React from 'react';
import Styles from '@assets/entry/scss/draggable.scss';

/* eslint-disable new-cap */
const DraggableItem = (props, ref) => {
    const itemRef = React.createRef();
    const {
        value,
        itemWrapperClassName,
        itemWrapperStyle,
        itemShadowClassName,
        itemShadowStyle,
        handleItemEventStart,
    } = props;
    const { item } = value;
    const attr = {
        className: `${Styles.draggableItem} entryDeaggableItem`,
        ref: itemRef,
        onTouchStart: (e) => {
            handleItemEventStart(e, itemRef.current);
        },
        onMouseDown: (e) => {
            handleItemEventStart(e, itemRef.current);
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
    return (
        <div className={itemWrapperClassName} style={itemWrapperStyle}>
            {(itemShadowClassName || itemShadowStyle) && (
                <div className={itemShadowClassName} style={itemShadowStyle} />
            )}
            {React.isValidElement(item) && <div {...attr}>{item}</div>}
            {!React.isValidElement(item) && <div {...attr} />}
        </div>
    );
};

export default DraggableItem;

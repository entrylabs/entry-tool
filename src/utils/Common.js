export const CommonUtils = {
    toggleClass: (isActive, className, falseClassName = "") => {
        if (isActive) {
            return className;
        }
        return falseClassName;
    },
    createImageUrl: (id) => {
        return `/uploads/${id.substring(0, 2)}/${id.substring(2, 4)}/thumb/${id}.png`;
    },
    remove: (array, callback) => {
        const arr = [...array];
        const index = arr.findIndex(callback);
        if (index >= 0) {
            arr.splice(index, 1);
        }
        return arr;
    },
    generateHash: () => {
<<<<<<< HEAD
        return ('0000' + ((Math.random() * Math.pow(36, 4)) << 0).toString(36)).substr(-4);
    },

    getDefaultComponentPosition(props, options) {
        const { left, top, isUpStyle } = CommonUtils.getComponentPosition(props, options);
        const { maxArrowPosition, arrowWidht = 0 } = options;
        const arrowLeft = Math.max(
            Math.min(maxArrowPosition / 2, maxArrowPosition - arrowWidht),
            arrowWidht
        );

        return {
            isUpStyle,
            arrowLeft,
            componentPosition: {
                left,
                top,
                transform: `translate3d(0px, 0px, 0)`,
            },
        };
    },

    // 정해진 Dom위치에 Picker 배치
    getComponentPosition: (props, options) => {
        const { positionDom, marginRect = {}, positionRect, boundrayDom } = props;
        const { width: componentWidth, height: componentHeight, arrowHeight } = options;
        let boundaryHeight = 0;
        if (boundrayDom) {
            const { top = 0 } = boundrayDom.getBoundingClientRect();
            boundaryHeight = boundrayDom.clientHeight + top;
        } else {
            boundaryHeight = window.innerHeight || 0;
        }

        let rect = {};
        if (positionRect) {
            rect = positionRect;
        } else if (positionDom) {
            rect = positionDom.getBoundingClientRect();
        }
        const { x: marginX = 0, y: marginY = 0 } = marginRect;
        let { top = 0, width = 0, height = 0, left = 0 } = rect;
        left -= componentWidth / 2 - width / 2 - marginX;
        const isUpStyle = boundaryHeight - top - height / 2 < boundaryHeight / 2;
        if (isUpStyle) {
            top -= componentHeight + (arrowHeight + 2) + marginY;
        } else {
            top += arrowHeight + height + 2 + marginY;
        }
        return {
            isUpStyle,
            left,
            top,
        };
    },

    getAlignPosition: (props, component, options) => {
        const { boundrayDom } = props;
        const { top, left, isUpStyle } = CommonUtils.getComponentPosition(props, options);
        const { widthMargin = 0, maxArrowPosition, arrowWidht = 0 } = options;
        let boundrayRect = {};
        if (boundrayDom) {
            boundrayRect = boundrayDom.getBoundingClientRect();
        } else {
            boundrayRect = {
                top: 0,
                left: 0,
                right: window.innerWidth || 0,
                bottom: window.innerHeight || 0,
            };
        }

        const colorPickerRect = component.getBoundingClientRect();
        let { width, height } = colorPickerRect;
        let bottom = top + height;
        let right = left + width;
        let x = 0;
        let y = 0;

        // 상하좌우 범위 계산
        if (left < boundrayRect.left) {
            x = boundrayRect.left + widthMargin - left;
        } else if (right > boundrayRect.right) {
            x = boundrayRect.right - right - widthMargin;
        }
        if (top < boundrayRect.top) {
            y = top - boundrayRect.top + widthMargin;
        } else if (bottom > boundrayRect.bottom) {
            y = boundrayRect.bottom - bottom - widthMargin;
        }
        const arrowLeft = Math.max(
            Math.min(maxArrowPosition / 2 - x, maxArrowPosition - arrowWidht),
            arrowWidht
        );

        return {
            arrowLeft,
            isUpStyle: isUpStyle,
            componentPosition: {
                left: left,
                top: top,
                transform: `translate3d(${x}px, ${y}px, 0)`,
            },
        };
    },
};
=======
        return ('0000' + (Math.random() * Math.pow(36, 4) << 0).toString(36)).substr(-4);
    }
};

export function FormAsyncException(obj) {
    Object.keys(obj).forEach(key => {
       this[key] =obj[key];
    });
}
>>>>>>> origin/issue/9401

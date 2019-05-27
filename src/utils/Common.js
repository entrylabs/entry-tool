import root from 'window-or-global';
import { DEFAULT_OPTIONS } from '../constants/index';
import get from 'lodash/get';

export const CommonUtils = {
    getScaleNumber(num, inMin, inMax, outMin, outMax) {
        return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
    },
    getPosition(event) {
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
    },
    getLangType: () => {
        const lang = root.Lang || {};
        return lang.type;
    },
    getLang: (key = '') => {
        const lang = root.Lang || {};
        return get(lang, key) || key;
    },
    getFonts: () => {
        if (root.EntryStatic && root.EntryStatic.fonts) {
            return root.EntryStatic.fonts.filter((font) => font.visible);
        }
        return DEFAULT_OPTIONS.WRITE_BOX.FONTS;
    },
    toggleClass: (isActive, className, falseClassName = '') => {
        if (isActive) {
            return className;
        }
        return falseClassName;
    },
    fixUrl(url) {
        /* eslint-disable no-useless-escape */
        const expUrl = /^[((http(s?))\:\/\/?)|/]/i;
        return expUrl.test(url) ? url : `/${url}`;
    },
    createImageUrl: (id, baseUrl = '') => {
        if (!id) {
            return '';
        }
        return `${baseUrl}/uploads/${id.substring(0, 2)}/${id.substring(2, 4)}/thumb/${id}.png`;
    },
    remove: (array, callback) => {
        const arr = [...array];
        const index = arr.findIndex(callback);
        if (index >= 0) {
            arr.splice(index, 1);
        }
        return arr;
    },
    generateHash: () => `0000${((Math.random() * Math.pow(36, 4)) << 0).toString(36)}`.substr(-4),

    getDefaultComponentPosition(props, options) {
        const { left, top, isUpStyle } = CommonUtils.getComponentPosition(props, options);
        const { maxArrowPosition, arrowWidth = 0 } = options;
        const arrowLeft = Math.max(
            Math.min(maxArrowPosition / 2, maxArrowPosition - arrowWidth),
            arrowWidth
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
        const { positionDom, marginRect = {}, positionRect, boundaryDom } = props;
        const { width: componentWidth, height: componentHeight, arrowHeight } = options;
        let boundaryHeight = 0;
        if (boundaryDom) {
            const { top = 0 } = boundaryDom.getBoundingClientRect();
            boundaryHeight = boundaryDom.clientHeight + top;
        } else {
            boundaryHeight = root.innerHeight || 0;
        }

        let rect = {};
        if (positionRect) {
            rect = positionRect;
        } else if (positionDom) {
            rect = positionDom.getBoundingClientRect();
        }
        const { x: marginX = 0, y: marginY = 0 } = marginRect;
        let { top = 0, left = 0 } = rect;
        const { width = 0, height = 0 } = rect;
        left -= componentWidth / 2 - width / 2 - marginX;
        const isUpStyle = top + height * 3 + componentHeight + marginY > boundaryHeight;
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
        const { boundaryDom } = props;
        const { top, left, isUpStyle } = CommonUtils.getComponentPosition(props, options);
        const { widthMargin = 0, maxArrowPosition, arrowWidth = 0 } = options;
        let boundaryRect = {};
        if (boundaryDom) {
            boundaryRect = boundaryDom.getBoundingClientRect();
        } else {
            boundaryRect = {
                top: 0,
                left: 0,
                right: root.innerWidth || 0,
                bottom: root.innerHeight || 0,
            };
        }

        const colorPickerRect = component.getBoundingClientRect();
        const { width, height } = colorPickerRect;
        const bottom = top + height;
        const right = left + width;
        let x = 0;
        let y = 0;

        // 상하좌우 범위 계산
        if (left < boundaryRect.left) {
            x = boundaryRect.left + widthMargin - left;
        } else if (right > boundaryRect.right) {
            x = boundaryRect.right - right - widthMargin;
        }
        if (top < boundaryRect.top) {
            y = top - boundaryRect.top + widthMargin;
        } else if (bottom > boundaryRect.bottom) {
            y = boundaryRect.bottom - bottom - widthMargin;
        }
        const arrowLeft = Math.max(
            Math.min(maxArrowPosition / 2 - x, maxArrowPosition - arrowWidth),
            arrowWidth
        );

        return {
            arrowLeft,
            isUpStyle,
            componentPosition: {
                left,
                top,
                transform: `translate3d(${x}px, ${y}px, 0)`,
            },
        };
    },

    getByteLength(s, b, i, c) {
        // eslint-disable-next-line no-multi-assign, no-param-reassign, no-nested-ternary
        for (b = i = 0; (c = s.charCodeAt(i++)); b += c >> 11 ? 3 : c >> 7 ? 2 : 1) {}
        return b;
    },
};

export function FormAsyncException(obj) {
    Object.keys(obj).forEach((key) => {
        this[key] = obj[key];
    });
}

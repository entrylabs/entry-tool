import root from 'window-or-global';
import _ from 'lodash';
import { DEFAULT_OPTIONS } from '../constants/index';
import get from 'lodash/get';
import _some from 'lodash/some';

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
    getMouseEvent(event) {
        let mouseEvent;
        if (event.originalEvent && event.originalEvent.touches) {
            mouseEvent = event.originalEvent.touches[0];
        } else if (event.touches) {
            mouseEvent = event.touches[0];
        } else {
            mouseEvent = event;
        }
        return mouseEvent;
    },
    getLangType() {
        const lang = root.Lang || {};
        return lang.type;
    },
    getLang(key = '') {
        const lang = root.Lang || {};
        return get(lang, key) || key;
    },
    getFonts() {
        if (root.EntryStatic && root.EntryStatic.fonts) {
            return root.EntryStatic.fonts.filter((font) => font.visible);
        }
        return DEFAULT_OPTIONS.WRITE_BOX.FONTS;
    },
    toggleClass(isActive, className, falseClassName = '') {
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
    createImageUrl(id, baseUrl = '') {
        if (!id) {
            return '';
        }
        return `${baseUrl}/uploads/${id.substring(0, 2)}/${id.substring(2, 4)}/thumb/${id}.png`;
    },
    remove(array, callback) {
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
    getComponentPosition(props, options) {
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

    getAlignPosition(props, component, options) {
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

    isVectorItem(item) {
        const { pictures = [], hasSvg, imageType } = item;
        if (hasSvg) {
            return true;
        }
        if (imageType == 'svg') {
            return true;
        }

        if (pictures.length > 0 && pictures[0].imageType === 'svg') {
            return true;
        }
        return false;
    },

    getImageSummary(item) {
        let { imageType, filename, fileurl, thumbUrl } = item;
        const { label = {}, name: itemName, pictures = [], hasSvg } = item;
        let thumb;
        const lang = this.getLangType();
        if (pictures.length > 0) {
            filename = pictures[0].filename;
            fileurl = pictures[0].fileurl;
            thumbUrl = pictures[0].thumbUrl;
        }
        if (pictures.length > 0) {
            imageType = pictures[0].imageType;
        }
        if (hasSvg) {
            imageType = 'svg';
        }
        if (thumbUrl || fileurl) {
            thumb = thumbUrl || fileurl.thumb || fileurl.resized || fileurl.origin || fileurl;
        }
        const defaultName = label && label.en ? label.en : itemName;
        const name = label && label[lang] ? label[lang] : defaultName;
        return {
            name,
            imageType,
            thumb,
            filename,
        };
    },
    handleClick(func) {
        return (e) => {
            e.preventDefault();
            func();
        };
    },
    distinct(item, index, self) {
        return self.indexOf(item) === index;
    },
    getOrderedName(name, array = []) {
        const maxNumber = _.max(
            _.map(array, (item) => {
                if (item.slice(0, name.length) !== name) {
                    return -1;
                }
                return Number(item.slice(name.length));
            })
        );
        return name + (maxNumber + 1 ? maxNumber + 1 : '');
    },
};

export function FormAsyncException(obj) {
    Object.keys(obj).forEach((key) => {
        this[key] = obj[key];
    });
}

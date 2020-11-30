import root from 'window-or-global';
import _ from 'lodash';
import { DEFAULT_OPTIONS } from '../constants/index';
import get from 'lodash/get';
import _some from 'lodash/some';
import flow from 'lodash/fp/flow';
import map from 'lodash/fp/map';
import unzip from 'lodash/fp/unzip';

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
        let { imageType, filename, fileurl } = item;
        const { label = {}, name: itemName, pictures = [], hasSvg } = item;
        let thumb;
        const lang = this.getLangType();
        if (pictures.length > 0) {
            filename = pictures[0].filename;
            fileurl = pictures[0].fileurl;
        }
        if (pictures.length > 0) {
            imageType = pictures[0].imageType;
        }
        if (hasSvg) {
            imageType = 'svg';
        }
        if (fileurl) {
            thumb = fileurl.thumb || fileurl.resized || fileurl.origin || fileurl;
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

export const isString = (str) => isNaN(str) || Number(str).toString() != str;
export const someString = (array) => _some(array, isString);
export const getHeader = (matrix, editable = true) =>
    _.chain(matrix)
        .head()
        .map((column) => ({
            editor: editable ? 'text' : '',
            name: column,
            align: 'center',
            width: 130,
            ellipsis: true,
        }))
        .value();
export const getData = (matrix) =>
    _.chain(matrix)
        .slice(1)
        .map((content) => _.zipObject(_.head(matrix), content))
        .value();

export const toFixed = (num, dp = 2) => Math.round(num * Math.pow(10, dp)) / Math.pow(10, dp);
const getAverage = (array) => array.reduce((sum, value) => sum + Number(value), 0) / array.length;
const getStandardDeviation = (arr, average) =>
    Math.sqrt(arr.reduce((acc, curr) => acc + Math.pow(curr - average, 2), 0) / arr.length);
const makeSummary = (row) => {
    const restRow = row.slice(1);
    const count = restRow.length;
    if (someString(restRow)) {
        return [row[0], count, '-', '-', '-', '-', '-'];
    }
    const max = Math.max(...restRow);
    const min = Math.min(...restRow);
    const average = getAverage(restRow);

    return [
        row[0],
        average,
        getStandardDeviation(restRow, average),
        max,
        restRow.sort((a, b) => a - b)[Math.floor((restRow.length - 1) / 2)],
        min,
    ].map((value) => (isString(value) ? value : toFixed(value)));
};
export const getSummary = flow(unzip, map(makeSummary));

export const categoryKeys = (table, index) =>
    // eslint-disable-next-line prettier/prettier
    index >= 0 ? _.uniq(table.slice(1).map((row) => row[index])) : [];

export const isZipable = (table, xIndex) =>
    _.uniqBy(table, (row) => row[xIndex]).length !== table.length;

export const hasNumberColumn = (table) =>
    _.some(table[0], (columnHeader, columnIndex) =>
        _.every(table.slice(1), (row) => !isString(row[columnIndex]))
    );

export const getNumberColumnIndexes = (table, banIndexes = []) =>
    _.reduce(
        table[0],
        // eslint-disable-next-line no-confusing-arrow
        (prev, curr, index) =>
            !_.some(banIndexes, (banIndex) => index === banIndex) &&
            !_.some(table.slice(1), (row) => isString(row[index]))
                ? [...prev, index]
                : prev,
        []
    );

export const getNumberColumnIndexesBySelectedColumns = (table, selectedColumns = []) =>
    _.reduce(
        selectedColumns,
        // eslint-disable-next-line no-confusing-arrow
        (prev, index) =>
            !_.some(table.slice(1), (row) => isString(row[index])) ? [...prev, index] : prev,
        []
    );

export const makeTableByGrid = (gridRef) => {
    const { current = {} } = gridRef;
    const instance = (current.getInstance && current.getInstance()) || {};
    const data = (instance.getData && instance.getData()) || {};
    const columns = (instance.getColumns && instance.getColumns()) || {};
    return [
        columns.map((column) => column.name),
        ...data.map((row) => columns.map((column) => row[column.name])),
    ];
};

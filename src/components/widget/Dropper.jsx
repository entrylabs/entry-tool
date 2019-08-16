import React, { Component } from 'react';
import { pure } from 'recompose';
import produce from 'immer';
import EntryEvent from '@entrylabs/event';
import { CommonUtils } from '@utils/Common';
import Magnify from '@components/common/Magnify';
import Theme from '@utils/Theme';

class Droppper extends Component {
    constructor(props) {
        super(props);
        this.theme = Theme.getStyle('dropper');
        this.setMainCanvas();
    }

    get TRANSFORM_OFFSET_Y() {
        return Entry.isMobile() ? 107 : 57;
    }

    get INNER_TRANSFORM_OFFSET_Y() {
        return Entry.isMobile() ? 156 : 0;
    }

    get CLIENT_OFFSET_Y() {
        return Entry.isMobile() ? 52 : 0;
    }

    state = {
        isShow: false,
        color: [],
        wrapperTransform: '',
        innerTransform: '',
    };

    targetEvent = new EntryEvent(document);

    setMainCanvas() {
        const { target, targetWrapper } = this.props;
        this.mainCanvas = target;
        this.mainCanvas.addClass(this.theme.isPickerMode);
        this.canvasPosition = this.mainCanvas.getBoundingClientRect();
        this.canvasWrapperPosition = targetWrapper
            ? targetWrapper.getBoundingClientRect()
            : this.canvasPosition;

        this.mainCanvasCtx = this.mainCanvas.getContext('2d');
        this.imageData = target
            .getContext('2d')
            .getImageData(0, 0, this.mainCanvas.width, this.mainCanvas.height).data;
    }

    _getColorFromImageData(x, y) {
        if (!this.imageData) {
            return;
        }

        const index = (y * this.mainCanvas.width + x) * 4;

        return [
            this.imageData[index],
            this.imageData[index + 1],
            this.imageData[index + 2],
            this.imageData[index + 3],
        ];
    }

    _getSceneFromImageData(x, y, size = 56) {
        if (!this.imageData) {
            return;
        }

        const result = [];
        let index = 0;
        const half = Math.floor(size / 2);

        for (let i = y - half; i < y + half; i++) {
            for (let j = x - half; j < x + half; j++) {
                const idx = (i * this.mainCanvas.width + j) * 4;
                if (_.inRange(idx, 0, this.imageData.length)) {
                    result[index++] = this.imageData[idx];
                    result[index++] = this.imageData[idx + 1];
                    result[index++] = this.imageData[idx + 2];
                    result[index++] = this.imageData[idx + 3];
                } else {
                    result[index++] = 0;
                    result[index++] = 0;
                    result[index++] = 0;
                    result[index++] = 0;
                }
            }
        }
        return result;
    }

    cursorMoveEvent = _.throttle((event) => {
        const { width, height } = this.canvasPosition;
        const { width: wWidth, height: wHeight } = this.canvasWrapperPosition;
        const { left = 0, top = 0 } = this.canvasPosition;
        const { left: wLeft = 0, top: wTop = 0 } = this.canvasWrapperPosition;

        const mouseEvent = CommonUtils.getMouseEvent(event);
        if (
            mouseEvent !== null &&
            mouseEvent.clientX > wLeft &&
            mouseEvent.clientX < wWidth + wLeft &&
            mouseEvent.clientY > wTop + this.CLIENT_OFFSET_Y &&
            mouseEvent.clientY < wHeight + wTop + this.CLIENT_OFFSET_Y
        ) {
            const innerX = mouseEvent.clientX - left;
            const innerY = mouseEvent.clientY - top;
            const x = Math.floor((innerX * this.mainCanvas.width) / width); // + 29;
            const y = Math.floor(
                ((innerY - this.CLIENT_OFFSET_Y) * this.mainCanvas.height) / height
            ); // + 28;
            this.setState(
                produce((draft) => {
                    draft.isShow = true;
                    draft.wrapperTransform = `translate3d(${mouseEvent.pageX -
                        57}px, ${mouseEvent.pageY - this.TRANSFORM_OFFSET_Y}px, 0)`;
                    draft.innerTransform = `scale3d(3,3,1) translate3d(-10px, ${-9 +
                        this.INNER_TRANSFORM_OFFSET_Y}px, 0)`;
                    draft.color = this._getColorFromImageData(x, y);
                    draft.magnifyScene = this._getSceneFromImageData(x, y);
                })
            );
        } else {
            this.setState(
                produce((draft) => {
                    draft.isShow = false;
                    draft.color = [];
                })
            );
        }
    });

    componentDidMount() {
        const { onPickColor, setVisible } = this.props;
        this.targetEvent.on('mousedown.dropper', (e) => {
            e.stopImmediatePropagation();
        });
        this.targetEvent.on(
            'touchstart.dropper touchmove.dropper mousemove.dropper',
            this.cursorMoveEvent
        );
        this.targetEvent.on('click.dropper touchend.dropper', (e) => {
            const { color = [] } = this.state;
            const [red = 0, green = 0, blue = 0] = color;
            const hexColor = `#${_.padStart(red.toString(16), 2, '0')}${_.padStart(
                green.toString(16),
                2,
                '0'
            )}${_.padStart(blue.toString(16), 2, '0')}`;
            onPickColor(hexColor);
            setVisible(false);
        });
    }

    componentWillUnmount() {
        this.targetEvent.off('dropper');
        this.mainCanvas.removeClass(this.theme.isPickerMode);
        delete this.mainCanvas;
        delete this.canvasPosition;
        delete this.canvasWrapperPosition;
        delete this.imageData;
    }

    render() {
        return (
            <div className={this.theme.Droppper}>
                <Magnify
                    {..._.pick(this.state, [
                        'isShow',
                        'wrapperTransform',
                        'innerTransform',
                        'color',
                        'magnifyScene',
                    ])}
                />
                <div className={this.theme.entryMagnifyCurtain} />
            </div>
        );
    }
}

export default pure(Droppper);

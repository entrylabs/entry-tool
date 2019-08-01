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
        const { target } = this.props;
        this.mainCanvas = target;
        this.mainCanvas.addClass(this.theme.isPickerMode);
        this.mainCanvasCtx = target.getContext('2d');
        this.canvasPosition = this.mainCanvas.getBoundingClientRect();
    }

    cursorMoveEvnet = _.throttle((event) => {
        const { left = 0, top = 0, width, height } = this.canvasPosition;
        const mouseEvent = CommonUtils.getMouseEvent(event);
        if (
            mouseEvent !== null &&
            mouseEvent.clientX > left &&
            mouseEvent.clientX < width + left &&
            mouseEvent.clientY > top + this.CLIENT_OFFSET_Y &&
            mouseEvent.clientY < height + top + this.CLIENT_OFFSET_Y
        ) {
            const innerX = mouseEvent.clientX - left;
            const innerY = mouseEvent.clientY - top;
            const x = Math.floor((innerX * 640) / width); // + 29;
            const y = Math.floor(((innerY - this.CLIENT_OFFSET_Y) * 360) / height); // + 28;
            this.setState(
                produce((draft) => {
                    draft.isShow = true;
                    draft.wrapperTransform = `translate3d(${mouseEvent.pageX -
                        57}px, ${mouseEvent.pageY - this.TRANSFORM_OFFSET_Y}px, 0)`;
                    draft.innerTransform = `translate3d(${-innerX * 3}px, ${-innerY * 3 +
                        this.INNER_TRANSFORM_OFFSET_Y}px, 0)`;

                    const imageData = this.mainCanvasCtx.getImageData(x, y, 1, 1);
                    draft.color = imageData.data;
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
        this.targetEvent.on('mousedown.magify', (e) => {
            e.stopImmediatePropagation();
        });
        this.targetEvent.on(
            'touchstart.magnify touchmove.magnify mousemove.magnify',
            this.cursorMoveEvnet
        );
        this.targetEvent.on('click.magnify touchend.magnify', (e) => {
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
        this.targetEvent.off('magnify');
        this.mainCanvas.removeClass('isPickerMode');
    }

    render() {
        return (
            <div
            className={this.theme.Droppper}>
                <Magnify
                    mainCanvas={this.mainCanvas}
                    position={this.canvasPosition}
                    {..._.pick(this.state, [
                        'isShow',
                        'wrapperTransform',
                        'innerTransform',
                        'color',
                    ])}
                />
                <div className={this.theme.entryMagnifyCurtain} />
            </div>
        );
    }
}

export default pure(Droppper);

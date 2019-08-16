import React, { Component } from 'react';
import { pure } from 'recompose';
import Theme from '@utils/Theme';
import EntryEvent from '@entrylabs/event';

class Magnify extends Component {
    constructor(props) {
        super(props);
        this.theme = Theme.getStyle('dropper');
    }

    static MAGNIFY_CANVAS_SIZE = 56;
    targetEvent = new EntryEvent(document);

    componentWillUnmount() {
        this.targetEvent.off('magnify');
    }

    setCanvas = (canvas) => {
        if (!canvas) {
            return;
        }

        canvas.setAttribute('width', this.MAGNIFY_CANVAS_SIZE);
        canvas.setAttribute('height', this.MAGNIFY_CANVAS_SIZE);
        const { width, height } = canvas;
        this.colorSpoidCtx = canvas.getContext('2d');
        this.imageData = this.colorSpoidCtx.getImageData(0, 0, width, height);
        this.targetEvent.off('magnify').on('mousemove.magnify', this.handleMouseMove);
    };

    handleMouseMove = () => {
        const { magnifyScene } = this.props;
        if (!magnifyScene) {
            return;
        }
        this.imageData.data.set(magnifyScene);
        this.colorSpoidCtx.putImageData(this.imageData, 0, 0);
    };

    getMagnifyStyle() {
        const { isShow, wrapperTransform } = this.props;
        return {
            opacity: isShow ? 1 : 0,
            transform: wrapperTransform,
        };
    }

    getCanvasStyle() {
        const { innerTransform } = this.props;
        return {
            transform: innerTransform,
        };
    }

    getColorStyle() {
        const { color = [] } = this.props;
        const [red = 0, green = 0, blue = 0] = color;
        return {
            backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        };
    }

    render() {
        const colorStyle = this.getColorStyle();
        return (
            <div className={this.theme.entryMagnify} style={this.getMagnifyStyle()}>
                <div className={this.theme.canvasWrapper}>
                    <div className={this.theme.innerCanvasWrapper}>
                        <canvas
                            className={this.theme.magnify}
                            ref={this.setCanvas}
                            style={this.getCanvasStyle()}
                        />
                    </div>
                </div>
                <div className={this.theme.canvasCircle} />
                <div className={this.theme.colorPreview} style={colorStyle}>
                    <div className={this.theme.colorCircle} />
                </div>
                <div className={this.theme.magnifyRect} style={colorStyle} />
            </div>
        );
    }
}

export default pure(Magnify);

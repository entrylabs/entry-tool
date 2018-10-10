import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import chroma from 'chroma-js';
import { Object } from 'core-js';
import { ColorPickAction } from '../../actions';
import slider_handle from '../../styles/slider_handle.svg';

const Slider = styled.div`
    background: white;
    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    position: relative;
`;
const Hue = styled(Slider)``;
const Saturation = styled(Slider)``;
const Value = styled(Slider)``;
const SliderBackground = styled.div`
    width: 206px;
    height: 28px;
    border-radius: 16px;
`;
const InputNumber = styled.input`
    width: 48px;
    height: 28px;
    border-radius: 16px;
    border: solid 1px #e2e2e2;
`;
const SliderHandle = styled.span`
    width: 28px;
    height: 28px;
    display: inline-block;
    background-image: url(${slider_handle});
    position: absolute;
    left: 15px;
    top: 32px;
    cursor: pointer;
    transform: ${(props) => `translate(${props.x}px, 0px);`};
`;
const Result = styled.div`
    width: 50px;
    height: 50px;
`;

function getColorByHsv({ red, green, blue }) {
    const color = chroma(red, green, blue);
    let [hue, saturation, brightness] = color.hsv();
    if (isNaN(hue)) {
        hue = 0;
    }
    return {
        red,
        green,
        blue,
        hue: Math.round(hue / 3.6),
        saturation: Math.round(saturation * 100),
        brightness: Math.round(brightness * 100),
        color: color.hex(),
    };
}

function getColorByRGB({ hue, saturation, brightness }) {
    const color = chroma.hsv(hue * 3.6, saturation / 100, brightness / 100);
    const [red, green, blue] = color.rgb();
    return {
        red,
        green,
        blue,
        hue,
        saturation,
        brightness,
        color: color.hex(),
    };
}

function getColorByHex(hex) {
    const color = chroma(hex);
    const [red, green, blue] = color.rgb();
    const [hue, saturation, brightness] = color.hsv();
    return {
        red,
        green,
        blue,
        hue: Math.round(hue / 3.6),
        saturation: Math.round(saturation * 100),
        brightness: Math.round(brightness * 100),
        color: hex,
    };
}

function scaleRatioX(value) {
    return Math.round(value * 1.8);
}

class ColorPicker extends Component {
    state = {
        hue: 0,
        saturation: 100,
        brightness: 100,
        red: 255,
        green: 0,
        blue: 0,
        color: '#ff0000',
    };
    constructor(props) {
        super(props);
        const { color, ColorPickAction } = props;
        if (color) {
            this.state = getColorByHex(color);
            ColorPickAction(this.state.color);
        }
    }
    hueGradient() {
        return {
            background: `linear-gradient(
                to right,
                hsl(0, 100%, 50%) 0%,
                hsl(36, 100%, 50%) 10%,
                hsl(72, 100%, 50%) 20%,
                hsl(108, 100%, 50%) 30%,
                hsl(144, 100%, 50%) 40%,
                hsl(180, 100%, 50%) 50%,
                hsl(216, 100%, 50%) 60%,
                hsl(252, 100%, 50%) 70%,
                hsl(288, 100%, 50%) 80%,
                hsl(324, 100%, 50%) 90%,
                hsl(360, 100%, 50%) 100%
            )`,
        };
    }
    saturationGradient() {
        const { hue } = this.state;
        const hueValue = hue * 3.6;
        const start = chroma.hsv(hueValue, 0, 1);
        const end = chroma.hsv(hueValue, 1, 1);
        return {
            background: `linear-gradient(
                to right,
                ${start.css()} 0%,
                ${end.css()} 100%
            )`,
        };
    }
    brightnessGradient() {
        const { hue } = this.state;
        const hueValue = hue * 3.6;
        const start = chroma.hsv(hueValue, 1, 0);
        const end = chroma.hsv(hueValue, 1, 1);
        return {
            background: `linear-gradient(
                to right,
                ${start.css()} 0%,
                ${end.css()} 100%
            )`,
        };
    }
    resultBackground() {
        const { hue, saturation, brightness } = this.state;
        const hueValue = hue * 3.6;
        return {
            background: chroma.hsv(hueValue, saturation / 100, brightness / 100).css(),
        };
    }
    makeRGBInput() {
        const { red, green, blue } = this.state;
        return (
            <Fragment>
                <InputNumber
                    value={red}
                    type="number"
                    min="0"
                    max="255"
                    onChange={({ target }) => {
                        this.handleChangeRGB('red', target);
                    }}
                />
                <InputNumber
                    value={green}
                    type="number"
                    min="0"
                    max="255"
                    onChange={({ target }) => {
                        this.handleChangeRGB('green', target);
                    }}
                />
                <InputNumber
                    value={blue}
                    type="number"
                    min="0"
                    max="255"
                    onChange={({ target }) => {
                        this.handleChangeRGB('blue', target);
                    }}
                />
            </Fragment>
        );
    }

    handleChangeHsv(type, target) {
        const { ColorPickAction } = this.props;
        let { value = 0 } = target;
        value = parseInt(value, 10);
        this.setState((state) => {
            const hsv = Object.assign({}, state, { [type]: value });
            const nextState = getColorByRGB(hsv);
            ColorPickAction(nextState.color);
            return nextState;
        });
    }

    handleChangeRGB(type, target) {
        const { ColorPickAction } = this.props;
        let { value = 0 } = target;
        value = parseInt(value, 10);
        this.setState((state) => {
            const rgb = Object.assign({}, state, { [type]: value });
            const nextState = getColorByHsv(rgb);
            ColorPickAction(nextState.color);
            return nextState;
        });
    }

    componentDidMount() {
        document.addEventListener('mousemove', ({ target }) => {
            if (target.canMove) {
            }
        });
        document.addEventListener('mouseup', ({ target }) => {
            if (this.refs.indexOf(target) > -1) {
                delete target.canMove;
            }
        });
    }

    componentWillUnmount() {
        document.removeEventListener();
    }

    render() {
        const { hue, saturation, brightness } = this.state;
        return (
            <div>
                <Hue>
                    <InputNumber
                        value={hue}
                        type="number"
                        min="0"
                        max="100"
                        onChange={({ target }) => {
                            this.handleChangeHsv('hue', target);
                        }}
                    />
                    <SliderHandle
                        innerRef={(node) => (this.hueSlider = node)}
                        x={scaleRatioX(hue)}
                        onMouseDown={(e) => {
                            e.target.canMove = true;
                            e.target.startPageX = e.pageX - hue * 1.8;
                        }}
                        onMouseMove={({ pageX, target }) => {
                            if (target.canMove) {
                                target.value = (pageX - target.startPageX) / 1.8;
                                console.log(
                                    pageX,
                                    target.startPageX,
                                    target.value,
                                    pageX - target.startPageX
                                );
                                this.handleChangeHsv('hue', target);
                            }
                        }}
                        onMouseUp={({ target }) => {
                            target.canMove = false;
                            console.log('onMouseUp', target.canMove);
                        }}
                    />
                    <SliderBackground style={this.hueGradient()} />
                </Hue>
                <Saturation>
                    <InputNumber
                        value={saturation}
                        type="number"
                        min="0"
                        max="100"
                        onChange={({ target }) => {
                            this.handleChangeHsv('saturation', target);
                        }}
                    />
                    <SliderHandle x={scaleRatioX(saturation)} />
                    <SliderBackground style={this.saturationGradient()} />
                </Saturation>
                <Value>
                    <InputNumber
                        value={brightness}
                        type="number"
                        min="0"
                        max="100"
                        onChange={({ target }) => {
                            this.handleChangeHsv('brightness', target);
                        }}
                    />
                    <SliderHandle x={scaleRatioX(brightness)} />
                    <SliderBackground style={this.brightnessGradient()} />
                </Value>
                <Result style={this.resultBackground()} />
                {this.makeRGBInput()}
            </div>
        );
    }
}

// const mapStateToProps = (state) => ({
//     // ...state,
// });

const mapDispatchToProps = (dispatch) => ({
    ColorPickAction: (visible) => dispatch(ColorPickAction(visible)),
});

export default connect(
    undefined,
    mapDispatchToProps
)(ColorPicker);
// mapStateToProps,
// mapDispatchToProps

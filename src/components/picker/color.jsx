import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import chroma from 'chroma-js';
import { Object } from 'core-js';

const Hue = styled.div`
    background: white;
    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;
const Saturation = styled.div`
    background: white;
    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;
const Value = styled.div`
    background: white;
    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;
const HueBackground = styled.div`
    width: 200px;
    height: 30px;
`;
const InputNumber = styled.input`
    width: 200px;
    height: 30px;
`;
const Result = styled.div`
    width: 50px;
    height: 50px;
`;

function setHsv({ red, green, blue }) {
    let [hue, saturation, brightness] = chroma(red, green, blue).hsv();
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
    };
}

function setRGB({ hue, saturation, brightness }) {
    const [red, green, blue] = chroma.hsv(hue * 3.6, saturation / 100, brightness / 100).rgb();
    return {
        red,
        green,
        blue,
        hue,
        saturation,
        brightness,
    };
}

class ColorPicker extends Component {
    state = {
        hue: 0,
        saturation: 100,
        brightness: 100,
        red: 255,
        green: 0,
        blue: 0,
    };
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
        let { value = 0 } = target;
        value = parseInt(value, 10);
        this.setState((state) => {
            const hsv = Object.assign({}, state, { [type]: value });
            return setRGB(hsv);
        });
    }

    handleChangeRGB(type, target) {
        let { value = 0 } = target;
        value = parseInt(value, 10);
        this.setState((state) => {
            const rgb = Object.assign({}, state, { [type]: value });
            return setHsv(rgb);
        });
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
                    <HueBackground style={this.hueGradient()} />
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
                    <HueBackground style={this.saturationGradient()} />
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
                    <HueBackground style={this.brightnessGradient()} />
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

// const mapDispatchToProps = (dispatch) => ({
//     // visibleAction: (visible) => dispatch(visibleAction(visible)),
// });

export default connect()(ColorPicker);
// mapStateToProps,
// mapDispatchToProps

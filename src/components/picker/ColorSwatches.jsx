import React, { Component } from 'react';
import { pure } from 'recompose';
import { COLOR_PICKER_MODE } from '../../constants';
import Theme from '@utils/Theme';
import { CommonUtils } from '@utils/Common';
const { getLang } = CommonUtils;

const recommendedColor = [
    '#e83a30',
    '#e88c30',
    '#e8e230',
    '#30e849',
    '#2fc9e8',
    '#4030e8',
    '#8930e8',
    '#e8308c',
];

/* eslint-disable array-element-newline */
/* eslint-disable array-bracket-newline */
const paletteColor = [
    ['#ffffff', '#e4e4e4', '#b4b4b4', '#848484', '#545454', '#242424', '#000000'],
    ['#fad3d1', '#f4a09c', '#ee6d66', '#e83a30', '#c71f16', '#911710', '#5c0e0a'],
    ['#fae6d1', '#f4c89c', '#eeaa66', '#e88c30', '#c76f16', '#915110', '#5c330a'],
    ['#faf9d1', '#f4f19c', '#eee966', '#e8e230', '#c7c116', '#918d10', '#5c590a'],
    ['#ebfad1', '#d4f49c', '#bcee66', '#a5e830', '#86c716', '#629110', '#3e5c0a'],
    ['#d1fad7', '#9cf4a7', '#66ee78', '#30e849', '#16c72e', '#109121', '#0a5c15'],
    ['#d1f3fa', '#9ce5f4', '#66d7ee', '#2fc9e8', '#16a9c7', '#117c91', '#0a4e5c'],
    ['#d4d1fa', '#a39cf4', '#7166ee', '#4030e8', '#2516c7', '#1b1091', '#110a5c'],
    ['#e5d1fa', '#c69cf4', '#a866ee', '#8930e8', '#6c16c7', '#4f1091', '#320a5c'],
    ['#fad1e6', '#f49cc8', '#ee66aa', '#e8308c', '#c7166f', '#911051', '#5c0a33'],
];

class ColorPicker extends Component {
    constructor(props) {
        super(props);
        this.theme = Theme.getStyle('popup');
    }
    makeRecommendedColor() {
        const { onChangeColor } = this.props;
        return (
            <div className={this.theme.recommendedColor}>
                {recommendedColor.map((color) => {
                    return (
                        <div
                            key={color}
                            className={this.theme.item}
                            style={{ backgroundColor: color }}
                            onClick={() => {
                                onChangeColor(color);
                            }}
                        />
                    );
                })}
            </div>
        );
    }
    makePaletteColor() {
        const { onChangeColor } = this.props;
        return (
            <div className={this.theme.paletteColor}>
                {paletteColor.map((group, idx) => {
                    return (
                        <div key={`group_${idx}`} className={this.theme.paletteGroup}>
                            {group.map((color) => {
                                return (
                                    <div
                                        key={color}
                                        className={this.theme.item}
                                        style={{ backgroundColor: color }}
                                        onClick={() => {
                                            onChangeColor(color);
                                        }}
                                    />
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        );
    }
    render() {
        const { onChangePickerMode } = this.props;
        return (
            <div className={this.theme.colorSwatches}>
                <div
                    className={this.theme.colorSliderButton}
                    title={getLang('Workspace.slider_mode')}
                    onClick={() => {
                        onChangePickerMode(COLOR_PICKER_MODE.SLIDER);
                    }}
                />
                {this.makeRecommendedColor()}
                {this.makePaletteColor()}
            </div>
        );
    }
}

export default pure(ColorPicker);

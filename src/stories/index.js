import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { storiesOf } from '@storybook/react';
import Login from '../components/popup/Contents/Login';
import Tooltips from '../components/popup/Contents/Tooltips';
import Join from '../components/popup/Contents/Join/Join';
import Sample from '../components/popup/Sample';
import Popup from '../components/popup';
import ColorPicker from '../components/picker/color';
import Number from '../components/widget/number';
import Dropdown from '../components/widget/dropdown';
import Angle from '../components/widget/angle';

import { action } from '@storybook/addon-actions';

import configureStore from '../store';

const store = configureStore();

export default function Provider({ story }) {
    return <ReduxProvider store={store}>{story}</ReduxProvider>;
}

storiesOf('Popup', module)
    .addDecorator((story) => <Provider story={story()} />)
    .add('전체', () => <Sample />)
    .add('툴팁', () => <Tooltips />)
    .add('확장블록', () => <Popup type="expansion" />)
    .add('소리', () => <Popup type="sound" />)
    .add('스프라이트', () => <Popup type="sprite" />)
    .add('로그인', () => <Login />)
    .add('회원가입', () => <Join />);

storiesOf('Widget', module)
    .addDecorator((story) => <Provider story={story()} />)
    .add('숫자', () => <Number
        onButtonPressed={action('onButtonPressed')}
        onBackButtonPressed={action('onBackButtonPressed')}
        onOutsideClick={action('onOutsideClick')}
    />)
    .add('컬러피커', () => <ColorPicker color="#FF0000" onChangeColorPicker={action} />)
    .add('드롭다운', () => (
        <Dropdown
            items={[[1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7], [8, 8], [9, 9]]}
        />
    ))
    .add('각도', () => <Angle
        onButtonPressed={action('onButtonPressed')}
        onBackButtonPressed={action('onBackButtonPressed')}
        onOutsideClick={action('onOutsideClick')}
        onAngleChanged={action('onAngleChanged')}
    />);

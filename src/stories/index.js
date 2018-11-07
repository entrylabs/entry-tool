import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { storiesOf } from '@storybook/react';
import Login from '../components/popup/Contents/Login';
import Tooltips from '../components/popup/Contents/Tooltips';
import Join from '../components/popup/Contents/Join/Join';
import Sample from '../components/popup/Sample';
import Popup from '../components/popup';


import configureStore from '../store';
const store = configureStore();

export default function Provider({ story }) {
    return <ReduxProvider store={store}>{story}</ReduxProvider>;
}

storiesOf('Popup', module)
    .addDecorator((story) => <Provider story={story()} />)
    .add('전체', () => <Sample />)
    .add('툴팁', () => <Tooltips/>)
    .add('확장블록', () => <Popup type="expansion"/>)
    .add('소리', () => <Popup type="sound"/>)
    .add('스프라이트', () => <Popup type="sprite"/>)
    .add('로그인', () => <Login/>)
    .add('회원가입', () => <Join/>);





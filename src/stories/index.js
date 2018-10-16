import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { storiesOf } from '@storybook/react';
import Sample from '../components/popup/Sample';
import Popup from '../components/popup';
import configureStore from '../store';
import {POPUP_TYPE} from '../constatns'
const store = configureStore();

export default function Provider({ story }) {
    return <ReduxProvider store={store}>{story}</ReduxProvider>;
}

storiesOf('Popup', module)
    .addDecorator((story) => <Provider story={story()} />)
    .add('전체', () => <Sample />)
    .add('확장블록', () => <Popup options={POPUP_TYPE.EXPANSION}/>)
    .add('소리', () => <Popup options={POPUP_TYPE.SOUND}/>)
    .add('스프라이트', () => <Popup options={POPUP_TYPE.SPRITE}/>);





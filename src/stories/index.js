import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { storiesOf } from '@storybook/react';
import Tooltips from '../components/tooltip';
import Sample from '../components/popup/Sample';
import CommonGnb from '../components/popup/Gnb';
import Popup from '../components/popup';
import ColorPicker from '../components/picker/color';
import Number from '../components/widget/number';
import Dropdown from '../components/widget/dropdown';
import ModalProgress from '../components/widget/modalProgress';
import Angle from '../components/widget/angle';
import Backpack from '../components/widget/Backpack';
import Sortable from '../components/widget/sortable';
import ContextMenu from '../components/widget/contextMenu';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import Theme from '@utils/Theme';
import { action } from '@storybook/addon-actions';
import httpService from '../config/axios';
import {
    PROJECTS_SAMPLE,
    SPRITE_SAMPLE,
    EXPANSION_SAMPLE,
    SOUND_SAMPLE,
} from '../constants/sample';

import configureStore from '../store';
const store = configureStore();
httpService.setupInterceptors('http://localhost:4000');
export default function Provider({ story }) {
    return <ReduxProvider store={store}>{story}</ReduxProvider>;
}
Theme.type="entryline";
storiesOf('Popup', module)
    .addDecorator((story) => <Provider story={story()} />)
    .add('전체', () => <Sample />)
    .add('툴팁', () => <Tooltips />)
    .add('확장블록', () => <Popup type="expansion" data={EXPANSION_SAMPLE} />)
    .add('소리', () => <Popup type="sound" data={SOUND_SAMPLE} />)
    .add('오브젝트추가하기', () => <Popup type="sprite" data={SPRITE_SAMPLE} />)
    .add('모양추가', () => <Popup type="picture" data={SPRITE_SAMPLE} />)
    .add('모양 가져오기', () => <Popup type="paint" data={SPRITE_SAMPLE} />)
    .add('나의 작품', () => <Popup type="projects" data={PROJECTS_SAMPLE} />)
    .add('gnb', () => <CommonGnb />);

const progressType = {
    progress: 'Progress',
    error: 'Error',
    null: null,
};
const wigetStories = storiesOf('Widget', module);
wigetStories.addDecorator(withKnobs);
wigetStories.addDecorator((story) => <Provider story={story()} />);

/* eslint-disable array-element-newline */
/* eslint-disable array-bracket-newline */
wigetStories
    .add('백팩', () => (
        <div style={{ height: '100vh' }}>
            <Backpack
                onButtonPressed={action('onButtonPressed')}
                onBackButtonPressed={action('onBackButtonPressed')}
                onOutsideClick={action('onOutsideClick')}
            />
        </div>
    ))
    .add('숫자', () => (
        <Number
            onButtonPressed={action('onButtonPressed')}
            onBackButtonPressed={action('onBackButtonPressed')}
            onOutsideClick={action('onOutsideClick')}
        />
    ))
    .add('각도', () => (
        <Angle
            onButtonPressed={action('onButtonPressed')}
            onBackButtonPressed={action('onBackButtonPressed')}
            onOutsideClick={action('onOutsideClick')}
            onChangeAngle={action('onChangeAngle')}
        />
    ))
    .add('컬러피커', () => <ColorPicker color="#FF0000" onChangeColorPicker={action} />)
    .add('드롭다운', () => (
        <Dropdown
            items={[[1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7], [8, 8], [9, 9]]}
        />
    ))
    .add('로딩바', () => (
        <div>
            <ColorPicker color="#FF0000" onChangeColorPicker={action} />
            <ModalProgress
                title={text('Title', '업로드 중입니다.')}
                description={text(
                    'description',
                    '문제가 계속된다면<br>entry@connect.or.kr 로 문의해주세요.'
                )}
                type={select('type', progressType, 'progress')}
                onClose={() => {
                    alert('닫힘');
                }}
            />
        </div>
    ))
    .add('컨텍스트메뉴', () => (
        <ContextMenu
            coordinate={{
                x: 100,
                y: 100,
            }}
            items={[
                {
                    text: 'text1',
                    enable: true,
                    callback() {
                        console.log('text1 called');
                    },
                },
                {
                    text: 'text2',
                    enable: true,
                    callback() {
                        console.log('text2 called');
                    },
                },
                {
                    text: 'invisible text',
                    enable: true,
                    callback() {
                        console.log('invisible text');
                    },
                },
                {
                    text: 'disabled text',
                    enable: false,
                    callback() {
                        console.log('disabled');
                    },
                },
            ]}
        />
    ))
    .add('정렬가능 리스트', () => {
        const sampleDom = document.createElement('div');
        const input = document.createElement('input');
        input.type = 'text';
        input.value = 'dsadasdsa';
        sampleDom.appendChild(input);
        return (
            <Sortable
                sortableTarget={['sortableTarget']}
                items={[
                    <div>Hello ReactDOM</div>,
                    sampleDom,
                    '<div style="border: 1px solid black; width: 150px; height: 40px;background:white"><div class="sortableTarget" style="border: 1px solid black; width: 30px; height: 30px;margin:5px;display:inline-block;vertical-align:middle"></div>1<input type="text"/></div>',
                    '<div style="border: 1px solid black; width: 150px; height: 40px;background:white"><div class="sortableTarget" style="border: 1px solid black; width: 30px; height: 30px;margin:5px;display:inline-block;vertical-align:middle"></div>2</div>',
                    '<div style="border: 1px solid black; width: 150px; height: 40px;background:white"><div class="sortableTarget" style="border: 1px solid black; width: 30px; height: 30px;margin:5px;display:inline-block;vertical-align:middle"></div>3</div>',
                    '<div style="border: 1px solid black; width: 150px; height: 40px;background:white"><div class="sortableTarget" style="border: 1px solid black; width: 30px; height: 30px;margin:5px;display:inline-block;vertical-align:middle"></div>4</div>',
                    '<div style="border: 1px solid black; width: 150px; height: 40px;background:white"><div class="sortableTarget" style="border: 1px solid black; width: 30px; height: 30px;margin:5px;display:inline-block;vertical-align:middle"></div>5</div>',
                    '<div style="border: 1px solid black; width: 150px; height: 40px;background:white"><div class="sortableTarget" style="border: 1px solid black; width: 30px; height: 30px;margin:5px;display:inline-block;vertical-align:middle"></div>6</div>',
                    '<div style="border: 1px solid black; width: 150px; height: 40px;background:white"><div class="sortableTarget" style="border: 1px solid black; width: 30px; height: 30px;margin:5px;display:inline-block;vertical-align:middle"></div>6</div>',
                    '<div style="border: 1px solid black; width: 150px; height: 40px;background:white"><div class="sortableTarget" style="border: 1px solid black; width: 30px; height: 30px;margin:5px;display:inline-block;vertical-align:middle"></div>6</div>',
                    '<div style="border: 1px solid black; width: 150px; height: 40px;background:white"><div class="sortableTarget" style="border: 1px solid black; width: 30px; height: 30px;margin:5px;display:inline-block;vertical-align:middle"></div>6</div>',
                    '<div style="border: 1px solid black; width: 150px; height: 40px;background:white"><div class="sortableTarget" style="border: 1px solid black; width: 30px; height: 30px;margin:5px;display:inline-block;vertical-align:middle"></div>6</div>',
                    '<div style="border: 1px solid black; width: 150px; height: 40px;background:white"><div class="sortableTarget" style="border: 1px solid black; width: 30px; height: 30px;margin:5px;display:inline-block;vertical-align:middle"></div>6</div>',
                    '<div style="border: 1px solid black; width: 150px; height: 40px;background:white"><div class="sortableTarget" style="border: 1px solid black; width: 30px; height: 30px;margin:5px;display:inline-block;vertical-align:middle"></div>6</div>',
                    '<div style="border: 1px solid black; width: 150px; height: 40px;background:white"><div class="sortableTarget" style="border: 1px solid black; width: 30px; height: 30px;margin:5px;display:inline-block;vertical-align:middle"></div>6</div>',
                    '<div style="border: 1px solid black; width: 150px; height: 40px;background:white"><div class="sortableTarget" style="border: 1px solid black; width: 30px; height: 30px;margin:5px;display:inline-block;vertical-align:middle"></div>6</div>',
                    '<div style="border: 1px solid black; width: 150px; height: 40px;background:white"><div class="sortableTarget" style="border: 1px solid black; width: 30px; height: 30px;margin:5px;display:inline-block;vertical-align:middle"></div>6</div>',
                    '<div style="border: 1px solid black; width: 150px; height: 40px;background:white"><div class="sortableTarget" style="border: 1px solid black; width: 30px; height: 30px;margin:5px;display:inline-block;vertical-align:middle"></div>6</div>',
                    '<div style="border: 1px solid black; width: 150px; height: 40px;background:white"><div class="sortableTarget" style="border: 1px solid black; width: 30px; height: 30px;margin:5px;display:inline-block;vertical-align:middle"></div>6</div>',
                    '<div style="border: 1px solid black; width: 150px; height: 40px;background:white"><div class="sortableTarget" style="border: 1px solid black; width: 30px; height: 30px;margin:5px;display:inline-block;vertical-align:middle"></div>6</div>',
                    '<div style="border: 1px solid black; width: 150px; height: 40px;background:white"><div class="sortableTarget" style="border: 1px solid black; width: 30px; height: 30px;margin:5px;display:inline-block;vertical-align:middle"></div>6</div>',
                    '<div style="border: 1px solid black; width: 150px; height: 40px;background:white"><div class="sortableTarget" style="border: 1px solid black; width: 30px; height: 30px;margin:5px;display:inline-block;vertical-align:middle"></div>6</div>',
                    '<div style="border: 1px solid black; width: 150px; height: 40px;background:white"><div class="sortableTarget" style="border: 1px solid black; width: 30px; height: 30px;margin:5px;display:inline-block;vertical-align:middle"></div>6</div>',
                    '<div style="border: 1px solid black; width: 150px; height: 40px;background:white"><div class="sortableTarget" style="border: 1px solid black; width: 30px; height: 30px;margin:5px;display:inline-block;vertical-align:middle"></div>6</div>',
                    '<div style="border: 1px solid black; width: 150px; height: 40px;background:white"><div class="sortableTarget" style="border: 1px solid black; width: 30px; height: 30px;margin:5px;display:inline-block;vertical-align:middle"></div>6</div>',
                    '<div style="border: 1px solid black; width: 150px; height: 40px;background:white"><div class="sortableTarget" style="border: 1px solid black; width: 30px; height: 30px;margin:5px;display:inline-block;vertical-align:middle"></div>6</div>',
                    '<div style="border: 1px solid black; width: 150px; height: 40px;background:white"><div class="sortableTarget" style="border: 1px solid black; width: 30px; height: 30px;margin:5px;display:inline-block;vertical-align:middle"></div>6</div>',
                    '<div style="border: 1px solid black; width: 150px; height: 40px;background:white"><div class="sortableTarget" style="border: 1px solid black; width: 30px; height: 30px;margin:5px;display:inline-block;vertical-align:middle"></div>6</div>',
                    '<div style="border: 1px solid black; width: 150px; height: 40px;background:white"><div class="sortableTarget" style="border: 1px solid black; width: 30px; height: 30px;margin:5px;display:inline-block;vertical-align:middle"></div>6</div>',
                    '<div style="border: 1px solid black; width: 150px; height: 40px;background:white"><div class="sortableTarget" style="border: 1px solid black; width: 30px; height: 30px;margin:5px;display:inline-block;vertical-align:middle"></div>6</div>',
                    '<div style="border: 1px solid black; width: 150px; height: 40px;background:white"><div class="sortableTarget" style="border: 1px solid black; width: 30px; height: 30px;margin:5px;display:inline-block;vertical-align:middle"></div>6</div>',
                    '<div style="border: 1px solid black; width: 150px; height: 40px;background:white"><div class="sortableTarget" style="border: 1px solid black; width: 30px; height: 30px;margin:5px;display:inline-block;vertical-align:middle"></div>6</div>',
                    '<div style="border: 1px solid black; width: 150px; height: 40px;background:white"><div class="sortableTarget" style="border: 1px solid black; width: 30px; height: 30px;margin:5px;display:inline-block;vertical-align:middle"></div>6</div>',
                    '<div style="border: 1px solid black; width: 150px; height: 40px;background:white"><div class="sortableTarget" style="border: 1px solid black; width: 30px; height: 30px;margin:5px;display:inline-block;vertical-align:middle"></div>6</div>',
                    '<div style="border: 1px solid black; width: 150px; height: 40px;background:white"><div class="sortableTarget" style="border: 1px solid black; width: 30px; height: 30px;margin:5px;display:inline-block;vertical-align:middle"></div>6</div>',
                    '<div style="border: 1px solid black; width: 150px; height: 40px;background:white"><div class="sortableTarget" style="border: 1px solid black; width: 30px; height: 30px;margin:5px;display:inline-block;vertical-align:middle"></div>6</div>',
                    '<div style="border: 1px solid black; width: 150px; height: 40px;background:white"><div class="sortableTarget" style="border: 1px solid black; width: 30px; height: 30px;margin:5px;display:inline-block;vertical-align:middle"></div>6</div>',
                    '<div style="border: 1px solid black; width: 150px; height: 40px;background:white"><div class="sortableTarget" style="border: 1px solid black; width: 30px; height: 30px;margin:5px;display:inline-block;vertical-align:middle"></div>6</div>',
                    '<div style="border: 1px solid black; width: 150px; height: 40px;background:white"><div class="sortableTarget" style="border: 1px solid black; width: 30px; height: 30px;margin:5px;display:inline-block;vertical-align:middle"></div>6</div>',
                    '<div style="border: 1px solid black; width: 150px; height: 40px;background:white"><div class="sortableTarget" style="border: 1px solid black; width: 30px; height: 30px;margin:5px;display:inline-block;vertical-align:middle"></div>6</div>',
                ]}
            />
        );
    });

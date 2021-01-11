import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { storiesOf } from '@storybook/react';
import Tooltips from '../components/tooltip';
import Sample from '../components/popup/Sample';
import CommonGnb from '../components/popup/Gnb';
import Popup from '../components/popup';
import ColorPicker from '../components/picker/color';
import LedPicker from '../components/ledPicker/ledPicker';
import Number from '../components/widget/number';
import Dropdown from '../components/widget/dropdown';
import DropdownExtra from '../components/widget/dropdownExtra';
import ModalProgress from '../components/widget/modalProgress';
import Angle from '../components/widget/angle';
import Backpack from '../components/widget/Backpack';
import Sortable from '../components/widget/sortable';
import ContextMenu from '../components/widget/contextMenu';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import httpService from '../config/axios';
import 'tui-grid/dist/tui-grid.css';
import {
    PROJECTS_SAMPLE,
    SPRITE_SAMPLE,
    EXPANSION_SAMPLE,
    SOUND_SAMPLE,
    TABLE_INFO_SAMPLE,
    TABLE_SAMPLE2,
    TABLE_SAMPLE3,
} from '../constants/sample';

import configureStore from '../store';
import Chart from '../components/widget/Chart';
import Table from '../components/widget/Table';
import ModalChart from '../components/widget/modalChart';
import BillBoard from '../components/widget/BillBoard';

import DataSelect from '../components/ai_layout/DataSelect';
import DataUpload from '../components/ai_layout/DataUpload';
import DataAnalytics from '../components/editor/dataAnalytics/DataAnalytics';
import TableChart from '../components/ai_layout/TableChart';
import TableSummary from '../components/ai_layout/TableSummary';
import Theme from '@utils/Theme';

const store = configureStore();
httpService.setupInterceptors('http://localhost:4000');
export default function Provider({ story }) {
    return <ReduxProvider store={store}>{story}</ReduxProvider>;
}
Theme.type = 'entry';
storiesOf('Popup', module)
    .addDecorator((story) => <Provider story={story()} />)
    .add('전체', () => <Sample />)
    .add('툴팁', () => <Tooltips />)
    .add('확장블록', () => <Popup type="expansion" data={EXPANSION_SAMPLE} />)
    .add('소리', () => <Popup type="sound" data={SOUND_SAMPLE} uploads={SOUND_SAMPLE} />)
    .add('데이터 테이블', () => (
        <Popup type="table" data={TABLE_INFO_SAMPLE} uploads={[TABLE_SAMPLE2]} />
    ))
    .add('오브젝트추가하기', () => <Popup type="sprite" data={SPRITE_SAMPLE} />)
    .add('모양추가', () => <Popup type="picture" data={SPRITE_SAMPLE} />)
    .add('모양 가져오기', () => <Popup type="paint" data={SPRITE_SAMPLE} />)
    .add('나의 작품', () => <Popup type="projects" data={PROJECTS_SAMPLE} />)
    .add('gnb', () => <CommonGnb />);

const progressType = {
    progress: 'Progress',
    error: 'Error',
    loading: 'Loading',
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
    .add('백팩 - item', () => (
        <div style={{ height: '100vh' }}>
            <Backpack
                onButtonPressed={action('onButtonPressed')}
                onBackButtonPressed={action('onBackButtonPressed')}
                onOutsideClick={action('onOutsideClick')}
                isLoading={false}
                items={[
                    {
                        _id: 'test',
                        imgPath:
                            'https://playentry.org/uploads/60/c4/image/60c429a8a742a5d573af8abd37b22f2b.png',
                        title: 'title',
                    },
                ]}
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
    .add('LED피커', () => <LedPicker />)
    .add('드롭다운', () => (
        <Dropdown
            items={[
                [1, 1],
                [2, 2],
                [3, 3],
                [4, 4],
                [5, 5],
                [6, 6],
                [7, 7],
                [8, 8],
                [9, 9],
            ]}
        />
    ))
    .add('드롭다운 Extra', () => (
        <DropdownExtra
            items={[
                ['11111111111111111111111111111111111111111111', 1],
                [2, 2],
                [3, 3],
                [4, 4],
                [5, 5],
                [6, 6],
                [7, 7],
                [8, 8],
                [9, 9],
                ['11111111111111111111111111111111111111111111', 1],
                [2, 2],
                [3, 3],
                [4, 4],
                [5, 5],
                [6, 6],
                [7, 7],
                [8, 8],
                [9, 9],
                ['11111111111111111111111111111111111111111111', 1],
                [2, 2],
                [3, 3],
                [4, 4],
                [5, 5],
                [6, 6],
                [7, 7],
                [8, 8],
                [9, 9],
                ['11111111111111111111111111111111111111111111', 1],
                [2, 2],
                [3, 3],
                [4, 4],
                [5, 5],
                [6, 6],
                [7, 7],
                [8, 8],
                [9, 9],
            ]}
        />
    ))
    .add('드롭다운(체크박스)', () => (
        <Dropdown
            multiple
            checkedIndex={[1, 3, 5]}
            items={[
                [10, 100],
                [20, 200],
                [30, 300],
                [40, 400],
                [50, 500],
                [60, 600],
                [70, 700],
                [80, 800],
                [90, 900],
            ]}
            onChange={(a, b, c) => {
                console.log(a, b, c);
                action('onChange');
            }}
            onOutsideClick={(a, b, c) => {
                console.log(a, b, c);
                action('onOutsideClick');
            }}
        />
    ))
    .add('드롭다운(체크박스 & 모두선택)', () => (
        <Dropdown
            multiple
            showSelectAll={true}
            checkedIndex={[1, 3, 5]}
            items={[
                [10, 100],
                [20, 200],
                [30, 300],
                [40, 400],
                [50, 500],
                [60, 600],
                [70, 700],
                [80, 800],
                [90, 900],
            ]}
            onChange={(a, b, c) => {
                console.log(a, b, c);
                action('onChange');
            }}
            onOutsideClick={(a, b, c) => {
                console.log(a, b, c);
                action('onOutsideClick');
            }}
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
    .add('에러 팝업', () => (
        <div>
            <ColorPicker color="#FF0000" onChangeColorPicker={action} />
            <ModalProgress
                title={text('Title', '업로드에 실패했습니다.')}
                description={text(
                    'description',
                    '문제가 계속된다면<br>entry@connect.or.kr 로 문의해주세요.'
                )}
                type={select('type', progressType, 'error')}
                onClose={() => {
                    alert('닫힘');
                }}
            />
        </div>
    ))
    .add('로딩 팝업', () => (
        <div>
            <ColorPicker color="#FF0000" onChangeColorPicker={action} />
            <ModalProgress
                title={text('Title', '업로드에 실패했습니다.')}
                description={text('description', '로딩중입니다. 잠시만 기다려주세요')}
                type={select('type', progressType, 'loading')}
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

storiesOf('AiLayout', module)
    .addDecorator((story) => <Provider story={story()} />)
    .add('테이블 추가하기 - 데이터 선택', () => <DataSelect />)
    .add('테이블 추가하기 - 데이터 선택 딤드', () => <DataSelect Dimmed />)
    .add('파일 올리기 - 업로드 기본', () => <DataUpload UploadState="Default" />)
    .add('파일 올리기 - 업로드 리스트', () => <DataUpload UploadState="List" />)
    .add('파일 올리기 - 새로 만들기', () => <DataUpload />)
    .add('데이터 차트 - 차트 추가 기본', () => <TableChart ChartState="Default" />)
    .add('데이터 차트 - Aside 접기', () => <TableChart />)
    .add('데이터 차트 - 2차 가로', () => <TableChart ChartState="Depth2" NoResultText="가로축을 먼저 선택해 주세요." />)
    .add('데이터 차트 - 2차 계열', () => <TableChart ChartState="Depth2" NoResultText="계열을 선택해 주세요." />)
    .add('데이터 차트 - 2차 그래프', () => <TableChart ChartState="Depth2Graph" />)
    .add('데이터 차트 - 3차 계열', () => <TableChart ChartState="Depth3" NoResultText="계열을 선택해 주세요." />)
    .add('데이터 차트 - 3차 그래프', () => <TableChart ChartState="Depth3Graph" />)
    .add('데이터 차트 - 요약', () => <TableSummary />)
    .add('데이터 차트 - 요약 모두', () => <TableSummary SummaryState="Total" />)
    .add('차트', () => (
        <Chart table={[TABLE_SAMPLE2.fields, ...TABLE_SAMPLE2.origin]} type="line" />
    ))
    .add('차트팝업', () => (
        <ModalChart
            onClose={action('close')}
            source={{
                tables: [
                    {
                        table: [TABLE_SAMPLE3.fields, ...TABLE_SAMPLE3.origin],
                        chart: {
                            title: 'Sample1',
                            type: 'bar',
                            xIndex: 0,
                            categoryIndexes: [1, 2],
                        },
                    },
                ],
            }}
        />
    ))
    .add('billboard', () => (
        <BillBoard
            onClose={action('close')}
            source={{
                data: {
                    type: 'line',
                    columns: [
                        ['data1', 1,2,3,4],
                        ['data2', 4,3,2,1]
                    ]
                }
            }}
            title={'billboard chart'}
            description={'description'}
        />
    ))
    .add('바차트', () => (
        <Chart
            table={[TABLE_SAMPLE3.fields, ...TABLE_SAMPLE3.origin]}
            chart={{
                type: 'bar',
                xIndex: 0,
                categoryIndexes: [1, 2],
            }}
        />
    ))
    .add('라인차트', () => (
        <Chart
            table={[TABLE_SAMPLE3.fields, ...TABLE_SAMPLE3.origin]}
            chart={{
                type: 'line',
                xIndex: 0,
                categoryIndexes: [1, 2],
            }}
        />
    ))
    .add('파이차트', () => (
        <Chart
            table={[TABLE_SAMPLE3.fields, ...TABLE_SAMPLE3.origin]}
            chart={{
                type: 'pie',
                xIndex: 0,
                categoryIndexes: [1],
            }}
        />
    ))
    .add('분산차트', () => (
        <Chart
            table={[TABLE_SAMPLE3.fields, ...TABLE_SAMPLE3.origin]}
            chart={{
                type: 'scatter',
                xIndex: 1,
                yIndex: 2,
                categoryIndexes: [0],
            }}
        />
    ))
    .add('테이블', () => (
        <Table table={[TABLE_SAMPLE3.fields, ...TABLE_SAMPLE3.origin]} editor={'text'} />
    ))
    .add('DataAnalytics', () => <DataAnalytics table={[[]]} />);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { triggerEvent } from '../../actions/index';
import Theme from '@utils/Theme';

class Index extends Component {
    constructor(props) {
        super(props);
        this.theme = Theme.getStyle("popup");
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event, data) {
        this.props.triggerEvent(event, data);
    }

    render() {
        return (
            <div className={this.theme.popup_wrap}>
                <header className={this.theme.pop_header}>
                    <h1>공통 툴팁</h1>
                    <button onClick={this.close} className={`${this.theme.btn_back} ${this.theme.imbtn_pop_back}`}>
                        <span className={this.theme.blind}>뒤로가기</span>
                    </button>
                </header>
                <section className={`${this.theme.pop_content} ${this.theme.login_area}`}>
                    <section className={this.theme.login_header}>
                        <h2 className={`${this.theme.tit} ${this.theme.imico_entrylogo}`}>
                            <span className={this.theme.blind}>entry</span>
                        </h2>
                        <p className={this.theme.dsc}>
                            소프트웨어의 첫걸음,<br />
                            엔트리에 오신 것을 환영 합니다.
                        </p>
                    </section>
                    {/* 마크업 확인용 더미 스타일 입니다. */}
                    <section style={{ position: 'relative', height: '3000px' }}>
                        {/* 툴팁의 가로값은 tooltip_box에서 style로 적용하면 됩니다. */}
                        <div className={this.theme.tooltip_box} style={{ width: '360px' }}>
                            {/* padding은 마크업 확인용 더미 스타일 입니다. */}
                            <div className={this.theme.tooltip_inner} style={{ padding: '10px' }}>
                                기본 툴팁은 화살표가 가운데에 존재.<br /><br />
                                툴팁의 넓이값은 tooltip_box에서 style: width <br />
                                위치는 left, top 값으로 위치 조정. <br />
                                tooltip_inner는 각각 ui 스타일에 맞게 css 분기용 임.
                            </div>
                            <span className={this.theme.arr}><i></i></span>
                        </div>

                        <div className={this.theme.tooltip_box} style={{ width: '400px', left: '400px' }}>
                            {/* 마크업 확인용 더미 스타일 입니다. */}
                            <div className={this.theme.tooltip_inner} style={{ padding: '10px' }}>
                                화살표 위치 변경은 <br />
                                arr 클래스에 free 클래스 추가, <br />
                                style= "left: 값" 으로 조정
                            </div>
                            <span className={`${this.theme.arr} ${this.theme.free}`} style={{ left: '20px' }}><i></i></span>
                        </div>

                        <div className={`${this.theme.tooltip_box} ${this.theme.down}`} style={{ width: '400px', left: '0', top: '200px' }}>
                            {/* padding은 마크업 확인용 더미 스타일 입니다. */}
                            <div className={this.theme.tooltip_inner} style={{ padding: '10px' }}>
                                아래쪽 화살표는 tooltip_box에 down 클래스 추가<br />
                                나머지 위치 조정은 동일함.
                            </div>
                            <span className={this.theme.arr}><i></i></span>
                        </div>

                        <div className={`${this.theme.tooltip_box} ${this.theme.down}`} style={{ width: '400px', left: '420px', top: '200px' }}>
                            {/* padding은 마크업 확인용 더미 스타일 입니다. */}
                            <div className={this.theme.tooltip_inner} style={{ padding: '10px', backgroundColor: 'orange' }}>
                                배경색은 backgroundColor 값으로 조정 <br />
                                배경색 변경은 arr 안에 있는 i 요소에도 동일하게 적용해야함.
                            </div>
                            <span className={this.theme.arr}><i style={{ backgroundColor: 'orange' }}></i></span>
                        </div>
                        {/* 컬러피커 툴팁 */}
                        <div className={`${this.theme.tooltip_box} ${this.theme.color_picker}`} style={{ left: '0', top: '300px' }}>
                            <div className={this.theme.tooltip_inner}>
                                <div className={this.theme.color_box}>
                                    {/* 하단 RGB 색상값을 style로 넣어주세요 */}
                                    {/* RGB면  backgroundColor:rgb(0, 0, 0) */}
                                    {/* 색상, 채도, 명도 값이면 backgroundColor:hsl(0, 0%, 0%) */}
                                    {/*
                                            색상 선택이 완료되면  imico_pop_circle_check_on 클래스 추가
                                            색상이 선택이 되지 않거나 투명일 경우 imico_pop_color_uncheck imico_pop_circle_check 추가
                                        */}
                                    <span className={`${this.theme.color} ${this.theme.imico_pop_circle_check_on}`} style={{ backgroundColor: 'hsl(290, 100%, 50%)' }}>&nbsp;</span>
                                    <ul className={this.theme.color_list}>
                                        <li className={this.theme.item}>
                                            <label htmlFor="red">빨강(R)</label>
                                            <input type="text" id="red" name="red" />
                                            <div className={this.theme.graph}>
                                            </div>
                                        </li>
                                        <li className={this.theme.item}>
                                            <label htmlFor="green">녹색(G)</label>
                                            <input type="text" id="green" name="green" />
                                        </li>
                                        <li className={this.theme.item}>
                                            <label htmlFor="blue">파랑(B)</label>
                                            <input type="text" id="blue" name="blue" />
                                        </li>
                                    </ul>
                                    <a href="#" className={`${this.theme.btn_picker} ${this.theme.imbtn_picker}`}>컬러피커 열기</a>
                                </div>
                                <div className={this.theme.color_graph}>
                                    <ul className={this.theme.graph_list}>
                                        <li className={this.theme.item}>
                                            <label htmlFor="hue">색상</label>
                                            <input type="text" id="hue" name="hue" />
                                            <div className={this.theme.graph_box}>
                                                {/* 그래프 slider가 선택되면 on 클래스 추가 */}
                                                {/* slider 이동할 수 있도록  left값 조절 해주세요 */}
                                                <span className={`${this.theme.slider} ${this.theme.btn_pop_color_slide}`} style={{ left: 10 + 'px' }}>&nbsp;</span>
                                                <div className={this.theme.bar}>
                                                    {/* 더미용 이미지 입니다. 나중에 여기에 이미지 or svg 넣어주세요 */}
                                                    <img src="https://cdn.tutsplus.com/active/uploads/legacy/tuts/008_colorPicker/Tutorial/8.jpg" width="100%" style={{ maxHeight: 100 + '%' }} />
                                                </div>
                                            </div>

                                        </li>
                                        <li className={this.theme.item}>
                                            <label htmlFor="saturation">채도</label>
                                            <input type="text" id="saturation" name="saturation" />
                                            <div className={this.theme.graph_box}>
                                                {/* 그래프 slider가 선택되면 on 클래스 추가 */}
                                                {/* slider 이동할 수 있도록  left값 조절 해주세요 */}
                                                <span className={`${this.theme.slider} ${this.theme.btn_pop_color_slide} ${this.theme.on}`} style={{ left: 100 + 'px' }}>&nbsp;</span>
                                                <div className={this.theme.bar}>
                                                    {/* 더미용 이미지 입니다. 나중에 여기에 이미지 or svg 넣어주세요 */}
                                                    <img src="https://cdn.tutsplus.com/active/uploads/legacy/tuts/008_colorPicker/Tutorial/8.jpg" width="100%" style={{ maxHeight: 100 + '%' }} />
                                                </div>
                                            </div>
                                        </li>
                                        <li className={this.theme.item}>
                                            <label htmlFor="saturation">명도</label>
                                            <input type="text" id="lightness" name="lightness" />
                                            <div className={this.theme.graph_box}>
                                                {/* 그래프 slider가 선택되면 on 클래스 추가 */}
                                                {/* slider 이동할 수 있도록  left값 조절 해주세요 */}
                                                <span className={`${this.theme.slider} ${this.theme.btn_pop_color_slide}`} style={{ left: 0 + 'px' }}>&nbsp;</span>
                                                <div className={this.theme.bar}>
                                                    {/* 더미용 이미지 입니다. 나중에 여기에 이미지 or svg 넣어주세요 */}
                                                    <img src="https://cdn.tutsplus.com/active/uploads/legacy/tuts/008_colorPicker/Tutorial/8.jpg" width="100%" style={{ maxHeight: 100 + '%' }} />
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* left 값 조절로 화살표 위치 잡을 수 있습니다. */}
                            <span className={`${this.theme.arr} ${this.theme.free}`} style={{ left: 101 + 'px' }}><i></i></span>
                        </div>

                        {/* 컬러피커 툴팁2 */}
                        <div className={`${this.theme.tooltip_box} ${this.theme.color_picker}`} style={{ left: '450px', top: '300px' }}>
                            <div className={this.theme.tooltip_inner}>
                                <div className={this.theme.color_box}>
                                    {/* 하단 RGB 색상값을 style로 넣어주세요 */}
                                    {/* RGB면  backgroundColor:rgb(0, 0, 0) */}
                                    {/* 색상, 채도, 명도 값이면 backgroundColor:hsl(0, 0%, 0%) */}
                                    {/*
                                            색상 선택이 완료되면  imico_pop_circle_check_on 클래스 추가
                                            색상이 선택이 되지 않거나 투명일 경우 imico_pop_color_uncheck imico_pop_circle_check 추가
                                        */}
                                    <span className={`${this.theme.color} ${this.theme.imico_pop_color_uncheck} ${this.theme.imico_pop_circle_check}`}>&nbsp;</span>
                                    <ul className={this.theme.color_list}>
                                        {/* 컬러가 선택되지 않았을 경우 disabled 추가  */}
                                        <li className={`${this.theme.item} ${this.theme.disabled}`}>
                                            <label htmlFor="red">빨강(R)</label>
                                            {/* 컬러가 선택되지 않았을 경우 disabled 추가  */}
                                            <input type="text" id="red" name="red" disabled />
                                            <div className={this.theme.graph}>
                                            </div>
                                        </li>
                                        {/* 컬러가 선택되지 않았을 경우 disabled 추가  */}
                                        <li className={`${this.theme.item} ${this.theme.disabled}`}>
                                            <label htmlFor="green">녹색(G)</label>
                                            {/* 컬러가 선택되지 않았을 경우 disabled 추가  */}
                                            <input type="text" id="green" name="green" disabled />
                                        </li>
                                        {/* 컬러가 선택되지 않았을 경우 disabled 추가  */}
                                        <li className={`${this.theme.item} ${this.theme.disabled}`}>
                                            <label htmlFor="blue">파랑(B)</label>
                                            {/* 컬러가 선택되지 않았을 경우 disabled 추가  */}
                                            <input type="text" id="blue" name="blue" disabled />
                                        </li>
                                    </ul>
                                    <a href="#" className={`${this.theme.btn_picker} ${this.theme.imbtn_picker}`}>컬러피커 열기</a>
                                </div>
                                <div className={this.theme.color_graph}>
                                    <ul className={this.theme.graph_list}>
                                        {/* 컬러가 선택되지 않았을 경우 disabled 추가  */}
                                        <li className={`${this.theme.item} ${this.theme.disabled}`}>
                                            <label htmlFor="hue">색상</label>
                                            {/* 컬러가 선택되지 않았을 경우 disabled 추가  */}
                                            <input type="text" id="hue" name="hue" disabled />
                                            <div className={this.theme.graph_box}>
                                                {/* 그래프 slider가 선택되면 on 클래스 추가 */}
                                                {/* slider 이동할 수 있도록  left값 조절 해주세요 */}
                                                <span className={`${this.theme.slider} ${this.theme.btn_pop_color_slide}`} style={{ left: 10 + 'px' }}>&nbsp;</span>
                                                <div className={this.theme.bar}>
                                                    {/* 더미용 이미지 입니다. 나중에 여기에 이미지 or svg 넣어주세요 */}
                                                    <img src="https://cdn.tutsplus.com/active/uploads/legacy/tuts/008_colorPicker/Tutorial/8.jpg" width="100%" style={{ maxHeight: 100 + '%' }} />
                                                </div>
                                            </div>

                                        </li>
                                        {/* 컬러가 선택되지 않았을 경우 disabled 추가  */}
                                        <li className={`${this.theme.item} ${this.theme.disabled}`}>
                                            <label htmlFor="saturation">채도</label>
                                            {/* 컬러가 선택되지 않았을 경우 disabled 추가  */}
                                            <input type="text" id="saturation" name="saturation" disabled />
                                            <div className={this.theme.graph_box}>
                                                {/* 그래프 slider가 선택되면 on 클래스 추가 */}
                                                {/* slider 이동할 수 있도록  left값 조절 해주세요 */}
                                                <span className={`${this.theme.slider} ${this.theme.btn_pop_color_slide}`} style={{ left: 100 + 'px' }}>&nbsp;</span>
                                                <div className={this.theme.bar}>
                                                    {/* 더미용 이미지 입니다. 나중에 여기에 이미지 or svg 넣어주세요 */}
                                                    <img src="https://cdn.tutsplus.com/active/uploads/legacy/tuts/008_colorPicker/Tutorial/8.jpg" width="100%" style={{ maxHeight: 100 + '%' }} />
                                                </div>
                                            </div>
                                        </li>
                                        {/* 컬러가 선택되지 않았을 경우 disabled 추가  */}
                                        <li className={`${this.theme.item} ${this.theme.disabled}`}>
                                            <label htmlFor="saturation">명도</label>
                                            {/* 컬러가 선택되지 않았을 경우 disabled 추가  */}
                                            <input type="text" id="lightness" name="lightness" disabled />
                                            <div className={this.theme.graph_box}>
                                                {/* 그래프 slider가 선택되면 on 클래스 추가 */}
                                                {/* slider 이동할 수 있도록  left값 조절 해주세요 */}
                                                <span className={`${this.theme.slider} ${this.theme.btn_pop_color_slide}`} style={{ left: 0 + 'px' }}>&nbsp;</span>
                                                <div className={this.theme.bar}>
                                                    {/* 더미용 이미지 입니다. 나중에 여기에 이미지 or svg 넣어주세요 */}
                                                    <img src="https://cdn.tutsplus.com/active/uploads/legacy/tuts/008_colorPicker/Tutorial/8.jpg" width="100%" style={{ maxHeight: 100 + '%' }} />
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* left 값 조절로 화살표 위치 잡을 수 있습니다. */}
                            <span className={`${this.theme.arr} ${this.theme.free}`} style={{ left: 101 + 'px' }}><i></i></span>
                        </div>

                        {/* 타임 툴팁 */}
                        <div className={`${this.theme.tooltip_box} ${this.theme.clock_box}`} style={{ left: '860px', top: '0' }}>
                            <div className={this.theme.tooltip_inner}>
                                <div className={this.theme.clock_board}>
                                    <div className={this.theme.clock} style={{ background: 'orange' }} >
                                        이곳에 시계를 놔주세요.<br />
                                        개발 해주실때 style 제거 해주세요.
                                    </div>
                                </div>
                                <div className={this.theme.time_board}>
                                    <a href="#" className={this.theme.btn_cnt}>7</a>
                                    <a href="#" className={this.theme.btn_cnt}>8</a>
                                    <a href="#" className={this.theme.btn_cnt}>9</a>
                                    <a href="#" className={this.theme.btn_cnt}>4</a>
                                    <a href="#" className={this.theme.btn_cnt}>5</a>
                                    <a href="#" className={this.theme.btn_cnt}>6</a>
                                    <a href="#" className={this.theme.btn_cnt}>1</a>
                                    <a href="#" className={this.theme.btn_cnt}>2</a>
                                    <a href="#" className={this.theme.btn_cnt}>3</a>
                                    <a href="#" className={this.theme.btn_cnt}>-</a>
                                    <a href="#" className={this.theme.btn_cnt}>0</a>
                                    <a href="#" className={this.theme.btn_cnt}>.</a>
                                    <a href="#" className={`${this.theme.btn_cnt} ${this.theme.btn_del} ${this.theme.imico_pop_key_del}`}>
                                        <span className={this.theme.blind}> 지우기</span>
                                    </a>
                                </div>
                            </div>
                            {/* left 값 조절로 화살표 위치 잡을 수 있습니다. */}
                            <span className={this.theme.arr}><i></i></span>
                        </div>

                        {/* 타임 툴팁 - 시계만 있는 경우 */}
                        <div className={`${this.theme.tooltip_box} ${this.theme.clock_only}`} style={{ left: '860px', top: '330px' }}>
                            <div className={this.theme.tooltip_inner}>
                                <div className={this.theme.clock_board}>
                                    <div className={this.theme.clock} style={{ background: 'orange' }} >
                                        이곳에 시계를 놔주세요.<br />
                                        개발 해주실때 style 제거 해주세요.
                                    </div>
                                </div>
                            </div>
                            {/* left 값 조절로 화살표 위치 잡을 수 있습니다. */}
                            <span className={this.theme.arr}><i></i></span>
                        </div>

                        {/* 타임 툴팁 - 패드만 있는 경우 */}
                        <div className={`${this.theme.tooltip_box} ${this.theme.pad_only}`} style={{ left: '1080px', top: '330px' }}>
                            <div className={this.theme.tooltip_inner}>
                                <div className={this.theme.time_board}>
                                    <a href="#" className={this.theme.btn_cnt}>7</a>
                                    <a href="#" className={this.theme.btn_cnt}>8</a>
                                    <a href="#" className={this.theme.btn_cnt}>9</a>
                                    <a href="#" className={this.theme.btn_cnt}>4</a>
                                    <a href="#" className={this.theme.btn_cnt}>5</a>
                                    <a href="#" className={this.theme.btn_cnt}>6</a>
                                    <a href="#" className={this.theme.btn_cnt}>1</a>
                                    <a href="#" className={this.theme.btn_cnt}>2</a>
                                    <a href="#" className={this.theme.btn_cnt}>3</a>
                                    <a href="#" className={this.theme.btn_cnt}>-</a>
                                    <a href="#" className={this.theme.btn_cnt}>0</a>
                                    <a href="#" className={this.theme.btn_cnt}>.</a>
                                    <a href="#" className={`${this.theme.btn_cnt} ${this.theme.btn_del} ${this.theme.imico_pop_key_del}`}>
                                        <span className={this.theme.blind}> 지우기</span>
                                    </a>
                                </div>
                            </div>
                            {/* left 값 조절로 화살표 위치 잡을 수 있습니다. */}
                            <span className={this.theme.arr}><i></i></span>
                        </div>

                    </section>
                </section>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    ...state,
});

const mapDispatchToProps = (dispatch) => ({
    triggerEvent: (event, data) => dispatch(triggerEvent(event, data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Index);


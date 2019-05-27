import React, { Component } from 'react';
import { connect } from 'react-redux';
import { visibleAction } from '../../actions/index';
import Styles from '../../assets/entry/scss/popup.scss';

class Sample extends Component {
    componentDidMount() {
        window.onpopstate = this.close;
        window.history.pushState({}, 'popup');
    }
    componentWillUnmount() {
        window.removeEventListener('onpopstate', this.close, false);
    }

    close = () => {
        const { visibleAction } = this.props;
        visibleAction(false);
    };

    render() {
        return (
            <div>
                {/* 오브젝트 선택 팝업 */}
                <div className={Styles.popup_wrap}>
                    <header className={Styles.pop_header}>
                        <h1>오브젝트 추가하기</h1>
                        <button
                            onClick={this.close}
                            className={`${Styles.btn_back} ${Styles.imbtn_pop_back}`}
                        >
                            <span className={Styles.blind}>뒤로가기</span>
                        </button>
                    </header>

                    <div className={Styles.section_navi}>
                        <ul className={Styles.list}>
                            <li className={Styles.on}>
                                <div>오브젝트 선택</div>
                            </li>
                            <li>
                                <div>파일 올리기</div>
                            </li>
                            <li>
                                <div>그리기</div>
                            </li>
                            <li>
                                <div>글상자</div>
                            </li>
                        </ul>
                        <div className={Styles.srch_box}>
                            <label htmlFor="srch">
                                <input type="text" id="srch" name="" />
                            </label>
                            <button
                                type="button"
                                className={`${Styles.btn_srch} ${Styles.imbtn_pop_srch}`}
                            >
                                <span className={Styles.blind}>검색</span>
                            </button>
                        </div>
                    </div>

                    <div className={Styles.pop_content}>
                        {/* [D] 메뉴 카테고리 선택에 따라 텍스트 변경  */}
                        <h2 className={Styles.blind}>오브젝트 선택</h2>
                        <ul className={Styles.menu_list}>
                            {/* [D] 링크가 선택되면 li 요소에 on 클래스 추가  */}
                            <li>
                                <div>엔트리 봇</div>
                            </li>
                            <li>
                                <div>사람</div>
                            </li>
                            <li className={Styles.on}>
                                <div>동물</div>
                            </li>
                            <li>
                                <div>식물</div>
                            </li>
                            <li>
                                <div>탈것</div>
                            </li>
                            <li>
                                <div>건물</div>
                            </li>
                            <li>
                                <div>음식</div>
                            </li>
                            <li>
                                <div>환경</div>
                            </li>
                            <li>
                                <div>물건</div>
                            </li>
                            <li>
                                <div>판타지</div>
                            </li>
                            <li>
                                <div>인터페이스</div>
                            </li>
                            <li>
                                <div>배경</div>
                            </li>
                        </ul>

                        <div className={Styles.section_cont}>
                            <div className={Styles.sub_menu}>
                                <div className={Styles.menu_inner}>
                                    {/* [D] 링크가 클릭되면 li 요소에 on 클래스 추가 */}
                                    <div className={Styles.on}>텍스트</div>
                                    <div>텍스트</div>
                                    <div>땅</div>
                                    <div>물</div>
                                    <div>가변형 텍스트 최소값은 72px</div>
                                </div>
                            </div>
                            <div className={Styles.list_area}>
                                <ul className={Styles.obj_list}>
                                    {/* [D] 오브젝트 링크가 클릭되면 li에 on  추가 */}
                                    <li className={Styles.on}>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>오브젝트</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>오브젝트</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>오브젝트</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>오브젝트</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>오브젝트</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>
                                                오브젝트 말줄임 추가 akdjalkdjakljd
                                            </em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>오브젝트</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>오브젝트</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>오브젝트</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>오브젝트</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>오브젝트</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>오브젝트</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>오브젝트</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>오브젝트</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>오브젝트</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>오브젝트</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>오브젝트</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>오브젝트</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>오브젝트</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>오브젝트</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>오브젝트</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>오브젝트</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>오브젝트</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>오브젝트</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>오브젝트</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>오브젝트</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>오브젝트</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>오브젝트</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>오브젝트</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>오브젝트</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>오브젝트</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>오브젝트</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>오브젝트</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>오브젝트</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>오브젝트</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>오브젝트</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>오브젝트</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>오브젝트</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>오브젝트</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>오브젝트</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>오브젝트</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>오브젝트</em>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className={Styles.cont_sel_box}>
                                <strong className={Styles.tit}>전체 (99)</strong>
                                {/* [D] select_item 갯수만큼 width 값 설정. 1개당 = 112px (마진 영역 포함) */}
                                <div className={Styles.select_list} style={{ width: 1120 + 'px' }}>
                                    <div className={Styles.select_item}>
                                        <div className={Styles.thmb}>
                                            <img
                                                src="https://playentry.org/uploads/03/a9/thumb/03a9a38c74774d5e6657555d1075850c.png"
                                                alt=""
                                            />
                                        </div>
                                        <em className={Styles.sjt}>오브젝트</em>
                                        <a
                                            href="#"
                                            className={`${Styles.btn_del} ${
                                                Styles.imbtn_pop_chk_del
                                                }`}
                                        >
                                            <span className={Styles.blind}>삭제</span>
                                        </a>
                                    </div>
                                    <div className={Styles.select_item}>
                                        <div className={Styles.thmb}>
                                            <img
                                                src="https://playentry.org/uploads/03/a9/thumb/03a9a38c74774d5e6657555d1075850c.png"
                                                alt=""
                                            />
                                        </div>
                                        <em className={Styles.sjt}>오브젝트</em>
                                        <a
                                            href="#"
                                            className={`${Styles.btn_del} ${
                                                Styles.imbtn_pop_chk_del
                                                }`}
                                        >
                                            <span className={Styles.blind}>삭제</span>
                                        </a>
                                    </div>
                                    <div className={Styles.select_item}>
                                        <div className={Styles.thmb}>
                                            <img
                                                src="https://playentry.org/uploads/03/a9/thumb/03a9a38c74774d5e6657555d1075850c.png"
                                                alt=""
                                            />
                                        </div>
                                        <em className={Styles.sjt}>오브젝트</em>
                                        <a
                                            href="#"
                                            className={`${Styles.btn_del} ${
                                                Styles.imbtn_pop_chk_del
                                                }`}
                                        >
                                            <span className={Styles.blind}>삭제</span>
                                        </a>
                                    </div>
                                    <div className={Styles.select_item}>
                                        <div className={Styles.thmb}>
                                            <img
                                                src="https://playentry.org/uploads/03/a9/thumb/03a9a38c74774d5e6657555d1075850c.png"
                                                alt=""
                                            />
                                        </div>
                                        <em className={Styles.sjt}>오브젝트</em>
                                        <a
                                            href="#"
                                            className={`${Styles.btn_del} ${
                                                Styles.imbtn_pop_chk_del
                                                }`}
                                        >
                                            <span className={Styles.blind}>삭제</span>
                                        </a>
                                    </div>
                                    <div className={Styles.select_item}>
                                        <div className={Styles.thmb}>
                                            <img
                                                src="https://playentry.org/uploads/03/a9/thumb/03a9a38c74774d5e6657555d1075850c.png"
                                                alt=""
                                            />
                                        </div>
                                        <em className={Styles.sjt}>오브젝트</em>
                                        <a
                                            href="#"
                                            className={`${Styles.btn_del} ${
                                                Styles.imbtn_pop_chk_del
                                                }`}
                                        >
                                            <span className={Styles.blind}>삭제</span>
                                        </a>
                                    </div>
                                    <div className={Styles.select_item}>
                                        <div className={Styles.thmb}>
                                            <img
                                                src="https://playentry.org/uploads/03/a9/thumb/03a9a38c74774d5e6657555d1075850c.png"
                                                alt=""
                                            />
                                        </div>
                                        <em className={Styles.sjt}>오브젝트</em>
                                        <a
                                            href="#"
                                            className={`${Styles.btn_del} ${
                                                Styles.imbtn_pop_chk_del
                                                }`}
                                        >
                                            <span className={Styles.blind}>삭제</span>
                                        </a>
                                    </div>
                                    <div className={Styles.select_item}>
                                        <div className={Styles.thmb}>
                                            <img
                                                src="https://playentry.org/uploads/03/a9/thumb/03a9a38c74774d5e6657555d1075850c.png"
                                                alt=""
                                            />
                                        </div>
                                        <em className={Styles.sjt}>오브젝트</em>
                                        <a
                                            href="#"
                                            className={`${Styles.btn_del} ${
                                                Styles.imbtn_pop_chk_del
                                                }`}
                                        >
                                            <span className={Styles.blind}>삭제</span>
                                        </a>
                                    </div>
                                    <div className={Styles.select_item}>
                                        <div className={Styles.thmb}>
                                            <img
                                                src="https://playentry.org/uploads/03/a9/thumb/03a9a38c74774d5e6657555d1075850c.png"
                                                alt=""
                                            />
                                        </div>
                                        <em className={Styles.sjt}>오브젝트</em>
                                        <a
                                            href="#"
                                            className={`${Styles.btn_del} ${
                                                Styles.imbtn_pop_chk_del
                                                }`}
                                        >
                                            <span className={Styles.blind}>삭제</span>
                                        </a>
                                    </div>
                                    <div className={Styles.select_item}>
                                        <div className={Styles.thmb}>
                                            <img
                                                src="https://playentry.org/uploads/03/a9/thumb/03a9a38c74774d5e6657555d1075850c.png"
                                                alt=""
                                            />
                                        </div>
                                        <em className={Styles.sjt}>오브젝트</em>
                                        <a
                                            href="#"
                                            className={`${Styles.btn_del} ${
                                                Styles.imbtn_pop_chk_del
                                                }`}
                                        >
                                            <span className={Styles.blind}>삭제</span>
                                        </a>
                                    </div>
                                    <div className={Styles.select_item}>
                                        <div className={Styles.thmb}>
                                            <img
                                                src="https://playentry.org/uploads/03/a9/thumb/03a9a38c74774d5e6657555d1075850c.png"
                                                alt=""
                                            />
                                        </div>
                                        <em className={Styles.sjt}>오브젝트</em>
                                        <a
                                            href="#"
                                            className={`${Styles.btn_del} ${
                                                Styles.imbtn_pop_chk_del
                                                }`}
                                        >
                                            <span className={Styles.blind}>삭제</span>
                                        </a>
                                    </div>
                                </div>
                                <div
                                    className={`${Styles.btn_prev} ${Styles.imbtn_pop_sel_prev}`}
                                >
                                    <span className={Styles.blind}>이전</span>
                                </div>
                                <div
                                    className={`${Styles.btn_next} ${Styles.imbtn_pop_sel_next}`}
                                >
                                    <span className={Styles.blind}>다음</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={Styles.pop_btn_box}>
                        <div>취소</div>
                        <div className={Styles.active}>추가하기</div>
                    </div>
                </div>

                {/* 파일 올리기 팝업 */}
                <div className={Styles.popup_wrap}>
                    <header className={Styles.pop_header}>
                        <h1>오브젝트 추가하기</h1>
                        <button
                            onClick={this.close}
                            className={`${Styles.btn_back} ${Styles.imbtn_pop_back}`}
                        >
                            <span className={Styles.blind}>뒤로가기</span>
                        </button>
                    </header>
                    <div className={Styles.section_navi}>
                        <ul className={Styles.list}>
                            <li>
                                <div>오브젝트 선택</div>
                            </li>
                            <li className={Styles.on}>
                                <div>파일 올리기</div>
                            </li>
                            <li>
                                <div>그리기</div>
                            </li>
                            <li>
                                <div>글상자</div>
                            </li>
                        </ul>
                    </div>
                    <section className={`${Styles.pop_content} ${Styles.file_add_list_content}`}>
                        {/* [D] 메뉴 카테고리 선택에 따라 텍스트 변경  */}
                        <h2 className={Styles.blind}>파일 올리기</h2>
                        <div className={Styles.section_cont}>
                            <p className={`${Styles.caution} ${Styles.imico_pop_caution}`}>
                                10MB 이하의 jpg, png, bmp 또는 eo 형식의 오브젝트를 추가할 수
                                있습니다.
                            </p>
                            <div className={Styles.list_area}>
                                <div className={Styles.file_add_box}>
                                    <label
                                        htmlFor="inpt_file"
                                        className={`${Styles.upload} ${Styles.imbtn_pop_upload}`}
                                    >
                                        파일 올리기
                                    </label>
                                    <input type="file" name="inpt_file" id="inpt_file" />
                                </div>
                                <ul className={Styles.obj_list}>
                                    {/* [D] 오브젝트 링크가 클릭되면 li에 on  추가 */}
                                    <li className={Styles.on}>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>오브젝트</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>오브젝트</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>오브젝트</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>오브젝트</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>오브젝트</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>오브젝트</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>오브젝트</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>오브젝트</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>오브젝트</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>오브젝트</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>오브젝트</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>오브젝트</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>오브젝트</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>오브젝트</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>오브젝트</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>오브젝트</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>오브젝트</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>오브젝트</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>오브젝트</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>오브젝트</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>오브젝트</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>오브젝트</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>오브젝트</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>오브젝트</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>오브젝트</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>
                                                오브젝트 말줄임 추가 akdjalkdjakljd
                                            </em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>오브젝트</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>오브젝트</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb}>
                                                <img
                                                    src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                    alt=""
                                                />
                                            </div>
                                            <em className={Styles.sjt}>
                                                오브젝트 말줄임 추가 akdjalkdjakljd
                                            </em>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className={Styles.img_caution_box}>
                                <div className={Styles.inner}>
                                    <span className={`${Styles.thmb} ${Styles.imico_warning}`}>
                                        &nbsp;
                                    </span>
                                    <div className={Styles.dsc_box}>
                                        <strong>
                                            아래와 같은 그림은 이용약관 및 관련 법률에 의해 제재를
                                            받으실 수 있습니다.
                                        </strong>
                                        <p className={Styles.dsc}>
                                            폭력적이고 잔인한 그림
                                            <br />
                                            선정적인 신체 노출 그림
                                            <br />
                                            불쾌감을 주거나 혐오감을 일으키는 그림
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className={Styles.pop_btn_box}>
                        <div>취소</div>
                        <div className={Styles.active}>추가하기</div>
                    </div>
                </div>

                {/* 그리기 팝업 */}
                <div className={Styles.popup_wrap}>
                    <header className={Styles.pop_header}>
                        <h1>오브젝트 추가하기</h1>
                        <button
                            onClick={this.close}
                            className={`${Styles.btn_back} ${Styles.imbtn_pop_back}`}
                        >
                            <span className={Styles.blind}>뒤로가기</span>
                        </button>
                    </header>
                    <div className={Styles.section_navi}>
                        <ul className={Styles.list}>
                            <li>
                                <div>오브젝트 선택</div>
                            </li>
                            <li>
                                <div>파일 올리기</div>
                            </li>
                            <li className={Styles.on}>
                                <div>그리기</div>
                            </li>
                            <li>
                                <div>글상자</div>
                            </li>
                        </ul>
                    </div>
                    <div className={Styles.pop_content}>
                        <div className={Styles.section_cont}>
                            {/* [D] 메뉴 카테고리 선택에 따라 텍스트 변경  */}
                            <h2 className={Styles.blind}>그리기</h2>
                            <div className={Styles.cont_box}>
                                <div className={Styles.draw_box}>
                                    <div className={`${Styles.thmb} ${Styles.imico_pop_draw_thmb}`}>
                                        &nbsp;
                                    </div>
                                    <p className={Styles.draw_dsc}>
                                        그림을 그려 오브젝트로 저장할 수 있습니다.
                                        <br />
                                        그리기 화면으로 이동하시겠습니까?
                                    </p>
                                    <div className={Styles.pop_btn_box}>
                                        <div className={Styles.active}>이동하기</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 짧은 글상자 팝업 */}
                <div className={Styles.popup_wrap}>
                    <header className={Styles.pop_header}>
                        <h1>오브젝트 추가하기</h1>
                        <button
                            onClick={this.close}
                            className={`${Styles.btn_back} ${Styles.imbtn_pop_back}`}
                        >
                            <span className={Styles.blind}>뒤로가기</span>
                        </button>
                    </header>
                    <div className={Styles.section_navi}>
                        <ul className={Styles.list}>
                            <li>
                                <div>오브젝트 선택</div>
                            </li>
                            <li>
                                <div>파일 올리기</div>
                            </li>
                            <li>
                                <div>그리기</div>
                            </li>
                            <li className={Styles.on}>
                                <div>글상자</div>
                            </li>
                        </ul>
                    </div>
                    <section className={Styles.pop_content}>
                        <div className={Styles.section_cont}>
                            {/* [D] 메뉴 카테고리 선택에 따라 텍스트 변경  */}
                            <h2 className={Styles.blind}>글상자</h2>
                            <div className={Styles.cont_box}>
                                <div className={Styles.write_box}>
                                    <div className={Styles.write_set}>
                                        {/* [D] 링크가 클릭되면 pop_selectbox클래스에 on 클래스 추가  */}
                                        <div className={`${Styles.pop_selectbox} ${Styles.on}`}>
                                            <div
                                                className={`${Styles.select_link} ${
                                                    Styles.imico_pop_select_arr_down
                                                    }`}
                                                title="글꼴"
                                            >
                                                NanumGothicOTF
                                            </div>
                                            {/* 공통 툴팁의 화살표 기본 위치는 가운데 입니다. */}
                                            {/* 툴팁 화살표 위치를 변경하려면 arr 요소에서 margin-left:0;left: 원하는 값 으로 style이 정의 되어야 합니다. */}
                                            <div className={Styles.tooltip_box}>
                                                <div className={Styles.tooltip_inner}>
                                                    <ul className={Styles.select_list}>
                                                        <li className={Styles.list_item}>
                                                            <div
                                                                className={Styles.list_link}
                                                            >
                                                                바탕체
                                                            </div>
                                                        </li>
                                                        <li className={Styles.list_item}>
                                                            <div
                                                                className={Styles.list_link}
                                                            >
                                                                명조체
                                                            </div>
                                                        </li>
                                                        <li className={Styles.list_item}>
                                                            <div
                                                                className={Styles.list_link}
                                                            >
                                                                고딕체
                                                            </div>
                                                        </li>
                                                        <li className={Styles.list_item}>
                                                            <div
                                                                className={Styles.list_link}
                                                            >
                                                                필기체
                                                            </div>
                                                        </li>
                                                        <li className={Styles.list_item}>
                                                            <div
                                                                className={Styles.list_link}
                                                            >
                                                                한라산체
                                                            </div>
                                                        </li>
                                                        <li className={Styles.list_item}>
                                                            <div
                                                                className={Styles.list_link}
                                                            >
                                                                코딩고딕체
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <span className={Styles.arr}>
                                                    <i />
                                                </span>
                                            </div>
                                        </div>

                                        <div className={Styles.font_style_box}>
                                            {/* 링크가 클릭되면 on 클래스 토글 */}
                                            <div
                                                className={`${Styles.style_link} ${
                                                    Styles.imbtn_pop_font_bold
                                                    } ${Styles.on}`}
                                                title="굵게"
                                            >
                                                <span className={Styles.blind}>글자 굵게</span>
                                            </div>
                                            <div
                                                className={`${Styles.style_link} ${
                                                    Styles.imbtn_pop_font_underline
                                                    }`}
                                                title="밑줄"
                                            >
                                                <span className={Styles.blind}>글자 밑줄</span>
                                            </div>
                                            <div
                                                className={`${Styles.style_link} ${
                                                    Styles.imbtn_pop_font_italic
                                                    }`}
                                                title="기울임"
                                            >
                                                <span className={Styles.blind}>글자 기울기</span>
                                            </div>
                                            <div
                                                className={`${Styles.style_link} ${
                                                    Styles.imbtn_pop_font_through
                                                    }`}
                                                title="취소선"
                                            >
                                                <span className={Styles.blind}>글자 취소선</span>
                                            </div>
                                            <div
                                                className={`${Styles.style_link} ${
                                                    Styles.imbtn_pop_font_color
                                                    }`}
                                                title="글자색"
                                            >
                                                <span className={Styles.blind}>글자 색</span>
                                            </div>
                                            <div
                                                className={`${Styles.style_link} ${
                                                    Styles.imbtn_pop_font_paint
                                                    }`}
                                                title="배경색"
                                            >
                                                <span className={Styles.blind}>글자 배경색</span>
                                            </div>
                                        </div>
                                        <div className={Styles.write_type_box}>
                                            {/* 링크가 클릭되면 on 클래스 토글 */}
                                            <div className={Styles.on}>
                                                한 줄 쓰기
                                            </div>
                                            <div>여러 줄 쓰기</div>
                                        </div>
                                    </div>
                                    <div className={Styles.input_box}>
                                        <div className={Styles.input_inner}>
                                            {/* input에 포커스가 가거나 글자가 들어가면 label을 display: none 처리 해주세요 */}
                                            <label htmlFor="inpt">
                                                글상자의 내용을 입력하세요.
                                            </label>
                                            <input type="text" id="inpt" name="inpt" />
                                        </div>
                                        <ul className={Styles.list}>
                                            <li>내용을 한 줄로만 작성할 수 있습니다.</li>
                                            <li>
                                                새로운 글자가 추가되면 글상자의 좌우 길이가
                                                길어집니다.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className={Styles.pop_btn_box}>
                        <div>취소</div>
                        <div className={Styles.active}>추가하기</div>
                    </div>
                </div>

                {/* 여러줄 글상자 팝업 */}
                <div className={Styles.popup_wrap}>
                    <header className={Styles.pop_header}>
                        <h1>오브젝트 추가하기</h1>
                        <button
                            onClick={this.close}
                            className={`${Styles.btn_back} ${Styles.imbtn_pop_back}`}
                        >
                            <span className={Styles.blind}>뒤로가기</span>
                        </button>
                    </header>
                    <div className={Styles.section_navi}>
                        <ul className={Styles.list}>
                            <li>
                                <div>오브젝트 선택</div>
                            </li>
                            <li>
                                <div>파일 올리기</div>
                            </li>
                            <li>
                                <div>그리기</div>
                            </li>
                            <li className={Styles.on}>
                                <div>글상자</div>
                            </li>
                        </ul>
                    </div>
                    <section className={Styles.pop_content}>
                        <div className={Styles.section_cont}>
                            {/* [D] 메뉴 카테고리 선택에 따라 텍스트 변경  */}
                            <h2 className={Styles.blind}>글상자</h2>
                            <div className={Styles.cont_box}>
                                <div className={Styles.write_box}>
                                    <div className={Styles.write_set}>
                                        {/* [D] 링크가 클릭되면 pop_selectbox클래스에 on 클래스 추가  */}
                                        <div className={`${Styles.pop_selectbox} ${Styles.on}`}>
                                            <div
                                                className={`${Styles.select_link} ${
                                                    Styles.imico_pop_select_arr_down
                                                    }`}
                                                title="글꼴"
                                            >
                                                NanumGothicOTF
                                            </div>
                                            {/* 공통 툴팁의 화살표 기본 위치는 가운데 입니다. */}
                                            {/* 툴팁 화살표 위치를 변경하려면 arr 요소에서 margin-left:0;left: 원하는 값 으로 style이 정의 되어야 합니다. */}
                                            <div className={Styles.tooltip_box}>
                                                <div className={Styles.tooltip_inner}>
                                                    <ul className={Styles.select_list}>
                                                        <li className={Styles.list_item}>
                                                            <div
                                                                className={Styles.list_link}
                                                            >
                                                                바탕체
                                                            </div>
                                                        </li>
                                                        <li className={Styles.list_item}>
                                                            <div
                                                                className={Styles.list_link}
                                                            >
                                                                명조체
                                                            </div>
                                                        </li>
                                                        <li className={Styles.list_item}>
                                                            <div
                                                                className={Styles.list_link}
                                                            >
                                                                고딕체
                                                            </div>
                                                        </li>
                                                        <li className={Styles.list_item}>
                                                            <div
                                                                className={Styles.list_link}
                                                            >
                                                                필기체
                                                            </div>
                                                        </li>
                                                        <li className={Styles.list_item}>
                                                            <div
                                                                className={Styles.list_link}
                                                            >
                                                                한라산체
                                                            </div>
                                                        </li>
                                                        <li className={Styles.list_item}>
                                                            <div
                                                                className={Styles.list_link}
                                                            >
                                                                코딩고딕체
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <span className={Styles.arr}>
                                                    <i />
                                                </span>
                                            </div>
                                        </div>

                                        <div className={Styles.font_style_box}>
                                            {/* 링크가 클릭되면 on 클래스 토글 */}
                                            <div
                                                className={`${Styles.style_link} ${
                                                    Styles.imbtn_pop_font_bold
                                                    } ${Styles.on}`}
                                                title="굵게"
                                            >
                                                <span className={Styles.blind}>글자 굵게</span>
                                            </div>
                                            <div
                                                className={`${Styles.style_link} ${
                                                    Styles.imbtn_pop_font_underline
                                                    }`}
                                                title="밑줄"
                                            >
                                                <span className={Styles.blind}>글자 밑줄</span>
                                            </div>
                                            <div
                                                className={`${Styles.style_link} ${
                                                    Styles.imbtn_pop_font_italic
                                                    }`}
                                                title="기울임"
                                            >
                                                <span className={Styles.blind}>글자 기울기</span>
                                            </div>
                                            <div
                                                className={`${Styles.style_link} ${
                                                    Styles.imbtn_pop_font_through
                                                    }`}
                                                title="취소선"
                                            >
                                                <span className={Styles.blind}>글자 취소선</span>
                                            </div>
                                            {/* 노멀상태 */}
                                            <div
                                                className={Styles.imbtn_pop_font_color}
                                                title="글자색">
                                                <span className={Styles.blind}>글자 색</span>
                                                {/* 팔레트에 선택되는 색상으로 넣어주세요. */}
                                                <em style={{ backgroundColor: '#f9f9f9'}}></em> 
                                            </div>
                                            {/* 활성화시 색상이 선택되면 on 클래스 추가 */}
                                            <div
                                                className={`${Styles.imbtn_pop_font_color} ${Styles.on}`}
                                                title="글자색">
                                                <span className={Styles.blind}>글자 색</span>
                                                {/* 팔레트에 선택되는 색상으로 넣어주세요. */}
                                                <em style={{ backgroundColor: '#f00'}}></em> 
                                            </div>

                                            {/* 노멀 */}
                                            <div
                                                className={Styles.imbtn_pop_font_paint}
                                                title="배경색"
                                            >
                                                {/* 팔레트에 선택되는 색상으로 넣어주세요. */}
                                                <em style={{ backgroundColor: '#f00'}}></em> 
                                                <span className={Styles.blind}>글자 배경색</span>
                                            </div>
                                            {/* 노멀 상태에 배경색이 흰색 또는 투명일 경우 clear 클래스 추가 */}
                                            <div
                                                className={`${Styles.imbtn_pop_font_paint} ${Styles.clear}`}
                                                title="배경색"
                                            >
                                                {/* 팔레트에 선택되는 색상으로 넣어주세요. */}
                                                <em style={{ backgroundColor: '#fff'}}></em> 
                                                <span className={Styles.blind}>글자 배경색</span>
                                            </div>
                                            {/* 활성화 상태에 배경색이 흰색 또는 투명일 경우 clear_on 클래스 추가 */}
                                            <div
                                                className={`${Styles.imbtn_pop_font_paint} ${Styles.clear_on}`}
                                                title="배경색"
                                            >
                                                {/* 팔레트에 선택되는 색상으로 넣어주세요. */}
                                                <em style={{ backgroundColor: '#fff'}}></em> 
                                                <span className={Styles.blind}>글자 배경색</span>
                                            </div>
                                            {/* 가본 활성화시 색상이 선택되면 on 클래스 추가 */}
                                            <div
                                                className={`${Styles.imbtn_pop_font_paint} ${Styles.on}`}
                                                title="배경색"
                                            >
                                                {/* 팔레트에 선택되는 색상으로 넣어주세요. */}
                                                <em style={{ backgroundColor: '#f00'}}></em> 
                                                <span className={Styles.blind}>글자 배경색</span>
                                            </div>
                                        </div>


                                        <div className={Styles.write_type_box}>
                                            {/* 링크가 클릭되면 on 클래스 토글 */}
                                            <div className={Styles.on}>
                                                한 줄 쓰기
                                            </div>
                                            <div>여러 줄 쓰기</div>
                                        </div>
                                    </div>

                                    <div className={Styles.input_box}>
                                        <div
                                            className={Styles.input_inner}
                                            style={{ height: 228 + 'px' }}
                                        >
                                            {/* input에 포커스가 가거나 글자가 들어가면 label을 display: none 처리 해주세요 */}
                                            <label htmlFor="textarea">
                                                글상자의 내용을 입력하세요.
                                            </label>
                                            <textarea
                                                name="textarea"
                                                id="textarea"
                                                cols="30"
                                                rows="10"
                                            />
                                        </div>
                                        <ul className={Styles.list}>
                                            <li>내용 작성 시 엔터키로 줄바꿈을 할 수 있습니다.</li>
                                            <li>
                                                글상자의 크기가 글자가 쓰일 수 있는 영역을 결정
                                                합니다.
                                            </li>
                                            <li>
                                                새로운 글자 추가 시 문장의 길이가 글상자의 기로
                                                영역을 넘어가면 자동으로 줄이 바뀝니다.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* 확장 블록 불러오기 */}
                <div className={Styles.popup_wrap}>
                    <header className={Styles.pop_header}>
                        <h1>확장블록 불러오기</h1>
                        <button
                            onClick={this.close}
                            className={`${Styles.btn_back} ${Styles.imbtn_pop_back}`}
                        >
                            <span className={Styles.blind}>뒤로가기</span>
                        </button>
                    </header>
                    <section className={`${Styles.extend_content} ${Styles.pop_content}`}>
                        <div className={Styles.section_cont}>
                            {/* [D] 메뉴 카테고리 선택에 따라 텍스트 변경  */}
                            <h2 className={Styles.blind}>확장 블록 불러오기 리스트</h2>
                            <div className={Styles.cont_box}>
                                <div className={Styles.extend_block}>
                                    <ul className={Styles.list}>
                                        {/* [D] 링크가 선택되면 li 요소에 on 클래스 추가  */}
                                        <li className={Styles.on}>
                                            <div className={Styles.link}>
                                                <div
                                                    className={Styles.thmb}
                                                    style={{
                                                        backgroundImage:
                                                            "url('https://media.kappamoto.com/AK-Moto/foto/BMW_F700GS%20(13-16)_lato_K.jpg')",
                                                    }}
                                                >
                                                    &nbsp;
                                                </div>
                                                <div className={Styles.inner_box}>
                                                    <strong className={Styles.sjt}>날씨</strong>
                                                    <p className={Styles.dsc}>
                                                        버스번호, 노선별 경유 정류소,
                                                        <br />
                                                        첫차/막차 시간 등 시내버스 노선과
                                                        <br />
                                                        관련된 블록들의 모음
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className={Styles.link}>
                                                <div className={Styles.thmb}>&nbsp;</div>
                                                <div className={Styles.inner_box}>
                                                    <strong className={Styles.sjt}>날씨</strong>
                                                    <p className={Styles.dsc}>
                                                        버스번호, 노선별 경유 정류소,
                                                        <br />
                                                        첫차/막차 시간 등 시내버스 노선과
                                                        <br />
                                                        관련된 블록들의 모음 그
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className={Styles.link}>
                                                <div
                                                    className={Styles.thmb}
                                                    style={{
                                                        backgroundImage:
                                                            "url('https://media.kappamoto.com/AK-Moto/foto/BMW_F700GS%20(13-16)_lato_K.jpg')",
                                                    }}
                                                >
                                                    &nbsp;
                                                </div>
                                                <div className={Styles.inner_box}>
                                                    <strong className={Styles.sjt}>날씨</strong>
                                                    <p className={Styles.dsc}>
                                                        버스번호, 노선별 경유 정류소,
                                                        <br />
                                                        첫차/막차 시간 등 시내버스 노선과
                                                        <br />
                                                        관련된 블록들의 모음
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className={Styles.link}>
                                                <div
                                                    className={Styles.thmb}
                                                    style={{
                                                        backgroundImage:
                                                            "url('https://media.kappamoto.com/AK-Moto/foto/BMW_F700GS%20(13-16)_lato_K.jpg')",
                                                    }}
                                                >
                                                    &nbsp;
                                                </div>
                                                <div className={Styles.inner_box}>
                                                    <strong className={Styles.sjt}>날씨</strong>
                                                    <p className={Styles.dsc}>
                                                        버스번호, 노선별 경유 정류소,
                                                        <br />
                                                        첫차/막차 시간 등 시내버스 노선과
                                                        <br />
                                                        관련된 블록들의 모음
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className={Styles.link}>
                                                <div
                                                    className={Styles.thmb}
                                                    style={{
                                                        backgroundImage:
                                                            "url('https://media.kappamoto.com/AK-Moto/foto/BMW_F700GS%20(13-16)_lato_K.jpg')",
                                                    }}
                                                >
                                                    &nbsp;
                                                </div>
                                                <div className={Styles.inner_box}>
                                                    <strong className={Styles.sjt}>날씨</strong>
                                                    <p className={Styles.dsc}>
                                                        버스번호, 노선별 경유 정류소,
                                                        <br />
                                                        첫차/막차 시간 등 시내버스 노선과
                                                        <br />
                                                        관련된 블록들의 모음관련된 블록들의
                                                        모음관련된 블록들의 모음관련된 블록들의
                                                        모음관련된 블록들의 모음관련된 블록들의 모음
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className={Styles.link}>
                                                <div className={Styles.thmb}>&nbsp;</div>
                                                <div className={Styles.inner_box}>
                                                    <strong className={Styles.sjt}>날씨</strong>
                                                    <p className={Styles.dsc}>
                                                        버스번호, 노선별 경유 정류소,
                                                        <br />
                                                        첫차/막차 시간 등 시내버스 노선과
                                                        <br />
                                                        관련된 블록들의 모음 그
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className={Styles.link}>
                                                <div
                                                    className={Styles.thmb}
                                                    style={{
                                                        backgroundImage:
                                                            "url('https://media.kappamoto.com/AK-Moto/foto/BMW_F700GS%20(13-16)_lato_K.jpg')",
                                                    }}
                                                >
                                                    &nbsp;
                                                </div>
                                                <div className={Styles.inner_box}>
                                                    <strong className={Styles.sjt}>날씨</strong>
                                                    <p className={Styles.dsc}>
                                                        버스번호, 노선별 경유 정류소,
                                                        <br />
                                                        첫차/막차 시간 등 시내버스 노선과
                                                        <br />
                                                        관련된 블록들의 모음
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className={Styles.link}>
                                                <div className={Styles.thmb}>&nbsp;</div>
                                                <div className={Styles.inner_box}>
                                                    <strong className={Styles.sjt}>날씨</strong>
                                                    <p className={Styles.dsc}>
                                                        버스번호, 노선별 경유 정류소,
                                                        <br />
                                                        첫차/막차 시간 등 시내버스 노선과
                                                        <br />
                                                        관련된 블록들의 모음 그
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className={Styles.link}>
                                                <div
                                                    className={Styles.thmb}
                                                    style={{
                                                        backgroundImage:
                                                            "url('https://media.kappamoto.com/AK-Moto/foto/BMW_F700GS%20(13-16)_lato_K.jpg')",
                                                    }}
                                                >
                                                    &nbsp;
                                                </div>
                                                <div className={Styles.inner_box}>
                                                    <strong className={Styles.sjt}>날씨</strong>
                                                    <p className={Styles.dsc}>
                                                        버스번호, 노선별 경유 정류소,
                                                        <br />
                                                        첫차/막차 시간 등 시내버스 노선과
                                                        <br />
                                                        관련된 블록들의 모음
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className={Styles.link}>
                                                <div
                                                    className={Styles.thmb}
                                                    style={{
                                                        backgroundImage:
                                                            "url('https://media.kappamoto.com/AK-Moto/foto/BMW_F700GS%20(13-16)_lato_K.jpg')",
                                                    }}
                                                >
                                                    &nbsp;
                                                </div>
                                                <div className={Styles.inner_box}>
                                                    <strong className={Styles.sjt}>날씨</strong>
                                                    <p className={Styles.dsc}>
                                                        버스번호, 노선별 경유 정류소,
                                                        <br />
                                                        첫차/막차 시간 등 시내버스 노선과
                                                        <br />
                                                        관련된 블록들의 모음
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className={Styles.link}>
                                                <div
                                                    className={Styles.thmb}
                                                    style={{
                                                        backgroundImage:
                                                            "url('https://media.kappamoto.com/AK-Moto/foto/BMW_F700GS%20(13-16)_lato_K.jpg')",
                                                    }}
                                                >
                                                    &nbsp;
                                                </div>
                                                <div className={Styles.inner_box}>
                                                    <strong className={Styles.sjt}>날씨</strong>
                                                    <p className={Styles.dsc}>
                                                        버스번호, 노선별 경유 정류소,
                                                        <br />
                                                        첫차/막차 시간 등 시내버스 노선과
                                                        <br />
                                                        관련된 블록들의 모음관련된 블록들의
                                                        모음관련된 블록들의 모음관련된 블록들의
                                                        모음관련된 블록들의 모음관련된 블록들의 모음
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className={Styles.link}>
                                                <div className={Styles.thmb}>&nbsp;</div>
                                                <div className={Styles.inner_box}>
                                                    <strong className={Styles.sjt}>날씨</strong>
                                                    <p className={Styles.dsc}>
                                                        버스번호, 노선별 경유 정류소,
                                                        <br />
                                                        첫차/막차 시간 등 시내버스 노선과
                                                        <br />
                                                        관련된 블록들의 모음 그
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className={Styles.pop_btn_box}>
                        <div>취소</div>
                        <div className={Styles.active}>추가하기</div>
                    </div>
                </div>

                {/* 소리 선택 팝업 */}
                <div className={Styles.popup_wrap}>
                    <header className={Styles.pop_header}>
                        <h1>소리 추가하기</h1>
                        <button
                            onClick={this.close}
                            className={`${Styles.btn_back} ${Styles.imbtn_pop_back}`}
                        >
                            <span className={Styles.blind}>뒤로가기</span>
                        </button>
                    </header>
                    <div className={Styles.section_navi}>
                        <ul className={Styles.list}>
                            <li className={Styles.on}>
                                <div>소리 선택</div>
                            </li>
                            <li>
                                <div>파일 올리기</div>
                            </li>
                        </ul>
                        <div className={Styles.srch_box}>
                            <label htmlFor="srch">
                                <input type="text" id="srch" name="" />
                            </label>
                            <button
                                type="button"
                                className={`${Styles.btn_srch} ${Styles.imbtn_pop_srch}`}
                            >
                                <span className={Styles.blind}>검색</span>
                            </button>
                        </div>
                    </div>
                    <section className={Styles.pop_content}>
                        {/* [D] 메뉴 카테고리 선택에 따라 텍스트 변경  */}
                        <h2 className={Styles.blind}>소리 선택</h2>
                        <ul className={Styles.menu_list}>
                            {/* [D] 링크가 선택되면 li 요소에 on 클래스 추가  */}
                            <li>
                                <div>사람</div>
                            </li>
                            <li>
                                <div>자연</div>
                            </li>
                            <li className={Styles.on}>
                                <div>사물</div>
                            </li>
                            <li>
                                <div>판타지</div>
                            </li>
                            <li>
                                <div>악기</div>
                            </li>
                        </ul>
                        <div className={Styles.section_cont}>
                            <div className={Styles.sub_menu}>
                                <div className={Styles.menu_inner}>
                                    {/* [D] 링크가 클릭되면 li 요소에 on 클래스 추가 */}
                                    <div className={Styles.on}>텍스트</div>
                                    <div>텍스트</div>
                                    <div>땅</div>
                                    <div>물</div>
                                    <div>가변형 텍스트 최소값은 72px</div>
                                </div>
                            </div>
                            <div className={Styles.sound_list_box}>
                                <div className={Styles.list_area}>
                                    <ul className={Styles.obj_list}>
                                        {/* [D] 오브젝트 링크가 클릭되면 li에 on  추가 */}
                                        <li className={Styles.on}>
                                            <div className={Styles.link}>
                                                <div
                                                    className={`${Styles.thmb} ${
                                                        Styles.imico_pop_sound_thmb
                                                        }`}
                                                >
                                                    &nbsp;
                                                </div>
                                                <em className={Styles.sjt}>명</em>
                                            </div>
                                        </li>
                                        <li>
                                            <div className={Styles.link}>
                                                <div
                                                    className={`${Styles.thmb} ${
                                                        Styles.imico_pop_sound_thmb
                                                        }`}
                                                >
                                                    &nbsp;
                                                </div>
                                                <em className={Styles.sjt}>소리명</em>
                                            </div>
                                        </li>
                                        <li>
                                            <div className={Styles.link}>
                                                <div
                                                    className={`${Styles.thmb} ${
                                                        Styles.imico_pop_sound_thmb
                                                        }`}
                                                >
                                                    &nbsp;
                                                </div>
                                                <em className={Styles.sjt}>소리명</em>
                                            </div>
                                        </li>
                                        <li>
                                            <div className={Styles.link}>
                                                <div
                                                    className={`${Styles.thmb} ${
                                                        Styles.imico_pop_sound_thmb
                                                        }`}
                                                >
                                                    &nbsp;
                                                </div>
                                                <em className={Styles.sjt}>소리명</em>
                                            </div>
                                        </li>
                                        <li>
                                            <div className={Styles.link}>
                                                <div
                                                    className={`${Styles.thmb} ${
                                                        Styles.imico_pop_sound_thmb
                                                        }`}
                                                >
                                                    &nbsp;
                                                </div>
                                                <em className={Styles.sjt}>소리명</em>
                                            </div>
                                        </li>
                                        <li>
                                            <div className={Styles.link}>
                                                <div
                                                    className={`${Styles.thmb} ${
                                                        Styles.imico_pop_sound_thmb
                                                        }`}
                                                >
                                                    &nbsp;
                                                </div>
                                                <em className={Styles.sjt}>소리명</em>
                                            </div>
                                        </li>
                                        <li>
                                            <div className={Styles.link}>
                                                <div
                                                    className={`${Styles.thmb} ${
                                                        Styles.imico_pop_sound_thmb
                                                        }`}
                                                >
                                                    &nbsp;
                                                </div>
                                                <em className={Styles.sjt}>소리명</em>
                                            </div>
                                        </li>
                                        <li>
                                            <div className={Styles.link}>
                                                <div
                                                    className={`${Styles.thmb} ${
                                                        Styles.imico_pop_sound_thmb
                                                        }`}
                                                >
                                                    &nbsp;
                                                </div>
                                                <em className={Styles.sjt}>소리명</em>
                                            </div>
                                        </li>
                                        <li>
                                            <div className={Styles.link}>
                                                <div
                                                    className={`${Styles.thmb} ${
                                                        Styles.imico_pop_sound_thmb
                                                        }`}
                                                >
                                                    &nbsp;
                                                </div>
                                                <em className={Styles.sjt}>소리명</em>
                                            </div>
                                        </li>
                                        <li>
                                            <div className={Styles.link}>
                                                <div
                                                    className={`${Styles.thmb} ${
                                                        Styles.imico_pop_sound_thmb
                                                        }`}
                                                >
                                                    &nbsp;
                                                </div>
                                                <em className={Styles.sjt}>소리명</em>
                                            </div>
                                        </li>
                                        <li>
                                            <div className={Styles.link}>
                                                <div
                                                    className={`${Styles.thmb} ${
                                                        Styles.imico_pop_sound_thmb
                                                        }`}
                                                >
                                                    &nbsp;
                                                </div>
                                                <em className={Styles.sjt}>소리명</em>
                                            </div>
                                        </li>
                                        <li>
                                            <div className={Styles.link}>
                                                <div
                                                    className={`${Styles.thmb} ${
                                                        Styles.imico_pop_sound_thmb
                                                        }`}
                                                >
                                                    &nbsp;
                                                </div>
                                                <em className={Styles.sjt}>소리명</em>
                                            </div>
                                        </li>
                                        <li>
                                            <div className={Styles.link}>
                                                <div
                                                    className={`${Styles.thmb} ${
                                                        Styles.imico_pop_sound_thmb
                                                        }`}
                                                >
                                                    &nbsp;
                                                </div>
                                                <em className={Styles.sjt}>소리명</em>
                                            </div>
                                        </li>
                                        <li>
                                            <div className={Styles.link}>
                                                <div
                                                    className={`${Styles.thmb} ${
                                                        Styles.imico_pop_sound_thmb
                                                        }`}
                                                >
                                                    &nbsp;
                                                </div>
                                                <em className={Styles.sjt}>소리명</em>
                                            </div>
                                        </li>
                                        <li>
                                            <div className={Styles.link}>
                                                <div
                                                    className={`${Styles.thmb} ${
                                                        Styles.imico_pop_sound_thmb
                                                        }`}
                                                >
                                                    &nbsp;
                                                </div>
                                                <em className={Styles.sjt}>소리명</em>
                                            </div>
                                        </li>
                                        <li>
                                            <div className={Styles.link}>
                                                <div
                                                    className={`${Styles.thmb} ${
                                                        Styles.imico_pop_sound_thmb
                                                        }`}
                                                >
                                                    &nbsp;
                                                </div>
                                                <em className={Styles.sjt}>소리명</em>
                                            </div>
                                        </li>
                                        <li>
                                            <div className={Styles.link}>
                                                <div
                                                    className={`${Styles.thmb} ${
                                                        Styles.imico_pop_sound_thmb
                                                        }`}
                                                >
                                                    &nbsp;
                                                </div>
                                                <em className={Styles.sjt}>소리명</em>
                                            </div>
                                        </li>
                                        <li>
                                            <div className={Styles.link}>
                                                <div
                                                    className={`${Styles.thmb} ${
                                                        Styles.imico_pop_sound_thmb
                                                        }`}
                                                >
                                                    &nbsp;
                                                </div>
                                                <em className={Styles.sjt}>소리명</em>
                                            </div>
                                        </li>
                                        <li>
                                            <div className={Styles.link}>
                                                <div
                                                    className={`${Styles.thmb} ${
                                                        Styles.imico_pop_sound_thmb
                                                        }`}
                                                >
                                                    &nbsp;
                                                </div>
                                                <em className={Styles.sjt}>소리명</em>
                                            </div>
                                        </li>
                                        <li>
                                            <div className={Styles.link}>
                                                <div
                                                    className={`${Styles.thmb} ${
                                                        Styles.imico_pop_sound_thmb
                                                        }`}
                                                >
                                                    &nbsp;
                                                </div>
                                                <em className={Styles.sjt}>소리명</em>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className={`${Styles.cont_sel_box} ${Styles.sound_type}`}>
                                <strong className={Styles.tit}>전체 (99)</strong>
                                {/* [D] li 갯수만큼 width 값 설정 li = 112px (마진 영역 포함) */}
                                <div className={Styles.select_list} style={{ width: 1120 + 'px' }}>
                                    <div className={Styles.select_item}>
                                        <div
                                            className={`${Styles.thmb} ${
                                                Styles.imico_pop_sound_thmb
                                                }`}
                                        >
                                            &nbsp;
                                        </div>
                                        <em className={Styles.sjt}>소리명</em>
                                        <a
                                            href="#"
                                            className={`${Styles.btn_del} ${
                                                Styles.imbtn_pop_chk_del
                                                }`}
                                        >
                                            <span className={Styles.blind}>삭제</span>
                                        </a>
                                    </div>
                                    <div className={Styles.select_item}>
                                        <div
                                            className={`${Styles.thmb} ${
                                                Styles.imico_pop_sound_thmb
                                                }`}
                                        >
                                            &nbsp;
                                        </div>
                                        <em className={Styles.sjt}>소리명</em>
                                        <a
                                            href="#"
                                            className={`${Styles.btn_del} ${
                                                Styles.imbtn_pop_chk_del
                                                }`}
                                        >
                                            <span className={Styles.blind}>삭제</span>
                                        </a>
                                    </div>
                                    <div className={Styles.select_item}>
                                        <div
                                            className={`${Styles.thmb} ${
                                                Styles.imico_pop_sound_thmb
                                                }`}
                                        >
                                            &nbsp;
                                        </div>
                                        <em className={Styles.sjt}>소리명</em>
                                        <a
                                            href="#"
                                            className={`${Styles.btn_del} ${
                                                Styles.imbtn_pop_chk_del
                                                }`}
                                        >
                                            <span className={Styles.blind}>삭제</span>
                                        </a>
                                    </div>
                                    <div className={Styles.select_item}>
                                        <div
                                            className={`${Styles.thmb} ${
                                                Styles.imico_pop_sound_thmb
                                                }`}
                                        >
                                            &nbsp;
                                        </div>
                                        <em className={Styles.sjt}>소리명</em>
                                        <a
                                            href="#"
                                            className={`${Styles.btn_del} ${
                                                Styles.imbtn_pop_chk_del
                                                }`}
                                        >
                                            <span className={Styles.blind}>삭제</span>
                                        </a>
                                    </div>
                                    <div className={Styles.select_item}>
                                        <div
                                            className={`${Styles.thmb} ${
                                                Styles.imico_pop_sound_thmb
                                                }`}
                                        >
                                            &nbsp;
                                        </div>
                                        <em className={Styles.sjt}>소리명</em>
                                        <a
                                            href="#"
                                            className={`${Styles.btn_del} ${
                                                Styles.imbtn_pop_chk_del
                                                }`}
                                        >
                                            <span className={Styles.blind}>삭제</span>
                                        </a>
                                    </div>
                                    <div className={Styles.select_item}>
                                        <div
                                            className={`${Styles.thmb} ${
                                                Styles.imico_pop_sound_thmb
                                                }`}
                                        >
                                            &nbsp;
                                        </div>
                                        <em className={Styles.sjt}>소리명</em>
                                        <a
                                            href="#"
                                            className={`${Styles.btn_del} ${
                                                Styles.imbtn_pop_chk_del
                                                }`}
                                        >
                                            <span className={Styles.blind}>삭제</span>
                                        </a>
                                    </div>
                                    <div className={Styles.select_item}>
                                        <div
                                            className={`${Styles.thmb} ${
                                                Styles.imico_pop_sound_thmb
                                                }`}
                                        >
                                            &nbsp;
                                        </div>
                                        <em className={Styles.sjt}>소리명</em>
                                        <a
                                            href="#"
                                            className={`${Styles.btn_del} ${
                                                Styles.imbtn_pop_chk_del
                                                }`}
                                        >
                                            <span className={Styles.blind}>삭제</span>
                                        </a>
                                    </div>
                                    <div className={Styles.select_item}>
                                        <div
                                            className={`${Styles.thmb} ${
                                                Styles.imico_pop_sound_thmb
                                                }`}
                                        >
                                            &nbsp;
                                        </div>
                                        <em className={Styles.sjt}>소리명</em>
                                        <a
                                            href="#"
                                            className={`${Styles.btn_del} ${
                                                Styles.imbtn_pop_chk_del
                                                }`}
                                        >
                                            <span className={Styles.blind}>삭제</span>
                                        </a>
                                    </div>
                                    <div className={Styles.select_item}>
                                        <div
                                            className={`${Styles.thmb} ${
                                                Styles.imico_pop_sound_thmb
                                                }`}
                                        >
                                            &nbsp;
                                        </div>
                                        <em className={Styles.sjt}>소리명</em>
                                        <a
                                            href="#"
                                            className={`${Styles.btn_del} ${
                                                Styles.imbtn_pop_chk_del
                                                }`}
                                        >
                                            <span className={Styles.blind}>삭제</span>
                                        </a>
                                    </div>
                                    <div className={Styles.select_item}>
                                        <div
                                            className={`${Styles.thmb} ${
                                                Styles.imico_pop_sound_thmb
                                                }`}
                                        >
                                            &nbsp;
                                        </div>
                                        <em className={Styles.sjt}>소리명</em>
                                        <a
                                            href="#"
                                            className={`${Styles.btn_del} ${
                                                Styles.imbtn_pop_chk_del
                                                }`}
                                        >
                                            <span className={Styles.blind}>삭제</span>
                                        </a>
                                    </div>
                                </div>

                                <div
                                    className={`${Styles.btn_prev} ${Styles.imbtn_pop_sel_prev}`}
                                >
                                    <span className={Styles.blind}>이전</span>
                                </div>
                                <div
                                    className={`${Styles.btn_next} ${Styles.imbtn_pop_sel_next}`}
                                >
                                    <span className={Styles.blind}>다음</span>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className={Styles.pop_btn_box}>
                        <div>취소</div>
                        <div className={Styles.active}>추가하기</div>
                    </div>
                </div>

                {/* 소리 올리기 팝업 */}
                <div className={Styles.popup_wrap}>
                    <header className={Styles.pop_header}>
                        <h1>소리 추가하기</h1>
                        <button
                            onClick={this.close}
                            className={`${Styles.btn_back} ${Styles.imbtn_pop_back}`}
                        >
                            <span className={Styles.blind}>뒤로가기</span>
                        </button>
                    </header>
                    <div className={Styles.section_navi}>
                        <ul className={Styles.list}>
                            <li>
                                <div>소리 선택</div>
                            </li>
                            <li className={Styles.on}>
                                <div>파일 올리기</div>
                            </li>
                        </ul>
                    </div>

                    <section className={`${Styles.pop_content} ${Styles.file_add_list_content}`}>
                        <h2 className={Styles.blind}>파일 올리기</h2>
                        <div className={Styles.section_cont}>
                            <p className={`${Styles.caution} ${Styles.imico_pop_caution}`}>
                                10MB 이하의 mp3 형식의 파일을 추가할 수 있습니다.
                            </p>
                            <div className={`${Styles.list_area} ${Styles.sound_type}`}>
                                <div className={Styles.file_add_box}>
                                    <label
                                        htmlFor="inpt_file"
                                        className={`${Styles.upload} ${Styles.imbtn_pop_upload}`}
                                    >
                                        파일 올리기
                                    </label>
                                    <input type="file" name="inpt_file" id="inpt_file" />
                                </div>
                                <ul className={Styles.obj_list}>
                                    {/* [D] 오브젝트 링크가 클릭되면 li에 on  추가 */}
                                    <li className={Styles.on}>
                                        <div className={Styles.link}>
                                            <div
                                                className={`${Styles.thmb} ${
                                                    Styles.imico_pop_sound_thmb
                                                    }`}
                                            >
                                                &nbsp;
                                            </div>
                                            <em className={Styles.sjt}>소리명</em>
                                        </div>
                                    </li>
                                    <li className={Styles.on}>
                                        <div className={Styles.link}>
                                            <div
                                                className={`${Styles.thmb} ${
                                                    Styles.imico_pop_sound_thmb
                                                    }`}
                                            >
                                                &nbsp;
                                            </div>
                                            <em className={Styles.sjt}>소리명</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div
                                                className={`${Styles.thmb} ${
                                                    Styles.imico_pop_sound_thmb
                                                    }`}
                                            >
                                                &nbsp;
                                            </div>
                                            <em className={Styles.sjt}>소리명</em>
                                        </div>
                                    </li>
                                    <li className={Styles.on}>
                                        <div className={Styles.link}>
                                            <div
                                                className={`${Styles.thmb} ${
                                                    Styles.imico_pop_sound_thmb
                                                    }`}
                                            >
                                                &nbsp;
                                            </div>
                                            <em className={Styles.sjt}>소리명</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div
                                                className={`${Styles.thmb} ${
                                                    Styles.imico_pop_sound_thmb
                                                    }`}
                                            >
                                                &nbsp;
                                            </div>
                                            <em className={Styles.sjt}>소리명</em>
                                        </div>
                                    </li>
                                    <li className={Styles.on}>
                                        <div className={Styles.link}>
                                            <div
                                                className={`${Styles.thmb} ${
                                                    Styles.imico_pop_sound_thmb
                                                    }`}
                                            >
                                                &nbsp;
                                            </div>
                                            <em className={Styles.sjt}>소리명</em>
                                        </div>
                                    </li>
                                    <li className={Styles.on}>
                                        <div className={Styles.link}>
                                            <div
                                                className={`${Styles.thmb} ${
                                                    Styles.imico_pop_sound_thmb
                                                    }`}
                                            >
                                                &nbsp;
                                            </div>
                                            <em className={Styles.sjt}>소리명</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div
                                                className={`${Styles.thmb} ${
                                                    Styles.imico_pop_sound_thmb
                                                    }`}
                                            >
                                                &nbsp;
                                            </div>
                                            <em className={Styles.sjt}>소리명</em>
                                        </div>
                                    </li>
                                    <li className={Styles.on}>
                                        <div className={Styles.link}>
                                            <div
                                                className={`${Styles.thmb} ${
                                                    Styles.imico_pop_sound_thmb
                                                    }`}
                                            >
                                                &nbsp;
                                            </div>
                                            <em className={Styles.sjt}>소리명</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div
                                                className={`${Styles.thmb} ${
                                                    Styles.imico_pop_sound_thmb
                                                    }`}
                                            >
                                                &nbsp;
                                            </div>
                                            <em className={Styles.sjt}>소리명</em>
                                        </div>
                                    </li>
                                    <li className={Styles.on}>
                                        <div className={Styles.link}>
                                            <div
                                                className={`${Styles.thmb} ${
                                                    Styles.imico_pop_sound_thmb
                                                    }`}
                                            >
                                                &nbsp;
                                            </div>
                                            <em className={Styles.sjt}>소리명</em>
                                        </div>
                                    </li>
                                    <li className={Styles.on}>
                                        <div className={Styles.link}>
                                            <div
                                                className={`${Styles.thmb} ${
                                                    Styles.imico_pop_sound_thmb
                                                    }`}
                                            >
                                                &nbsp;
                                            </div>
                                            <em className={Styles.sjt}>소리명</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div
                                                className={`${Styles.thmb} ${
                                                    Styles.imico_pop_sound_thmb
                                                    }`}
                                            >
                                                &nbsp;
                                            </div>
                                            <em className={Styles.sjt}>소리명</em>
                                        </div>
                                    </li>
                                    <li className={Styles.on}>
                                        <div className={Styles.link}>
                                            <div
                                                className={`${Styles.thmb} ${
                                                    Styles.imico_pop_sound_thmb
                                                    }`}
                                            >
                                                &nbsp;
                                            </div>
                                            <em className={Styles.sjt}>소리명</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div
                                                className={`${Styles.thmb} ${
                                                    Styles.imico_pop_sound_thmb
                                                    }`}
                                            >
                                                &nbsp;
                                            </div>
                                            <em className={Styles.sjt}>소리명</em>
                                        </div>
                                    </li>
                                    <li className={Styles.on}>
                                        <div className={Styles.link}>
                                            <div
                                                className={`${Styles.thmb} ${
                                                    Styles.imico_pop_sound_thmb
                                                    }`}
                                            >
                                                &nbsp;
                                            </div>
                                            <em className={Styles.sjt}>소리명</em>
                                        </div>
                                    </li>
                                    <li className={Styles.on}>
                                        <div className={Styles.link}>
                                            <div
                                                className={`${Styles.thmb} ${
                                                    Styles.imico_pop_sound_thmb
                                                    }`}
                                            >
                                                &nbsp;
                                            </div>
                                            <em className={Styles.sjt}>소리명</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div
                                                className={`${Styles.thmb} ${
                                                    Styles.imico_pop_sound_thmb
                                                    }`}
                                            >
                                                &nbsp;
                                            </div>
                                            <em className={Styles.sjt}>소리명</em>
                                        </div>
                                    </li>
                                    <li className={Styles.on}>
                                        <div className={Styles.link}>
                                            <div
                                                className={`${Styles.thmb} ${
                                                    Styles.imico_pop_sound_thmb
                                                    }`}
                                            >
                                                &nbsp;
                                            </div>
                                            <em className={Styles.sjt}>소리명</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div
                                                className={`${Styles.thmb} ${
                                                    Styles.imico_pop_sound_thmb
                                                    }`}
                                            >
                                                &nbsp;
                                            </div>
                                            <em className={Styles.sjt}>소리명</em>
                                        </div>
                                    </li>
                                    <li className={Styles.on}>
                                        <div className={Styles.link}>
                                            <div
                                                className={`${Styles.thmb} ${
                                                    Styles.imico_pop_sound_thmb
                                                    }`}
                                            >
                                                &nbsp;
                                            </div>
                                            <em className={Styles.sjt}>소리명</em>
                                        </div>
                                    </li>
                                    <li className={Styles.on}>
                                        <div className={Styles.link}>
                                            <div
                                                className={`${Styles.thmb} ${
                                                    Styles.imico_pop_sound_thmb
                                                    }`}
                                            >
                                                &nbsp;
                                            </div>
                                            <em className={Styles.sjt}>소리명</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div
                                                className={`${Styles.thmb} ${
                                                    Styles.imico_pop_sound_thmb
                                                    }`}
                                            >
                                                &nbsp;
                                            </div>
                                            <em className={Styles.sjt}>소리명</em>
                                        </div>
                                    </li>
                                    <li className={Styles.on}>
                                        <div className={Styles.link}>
                                            <div
                                                className={`${Styles.thmb} ${
                                                    Styles.imico_pop_sound_thmb
                                                    }`}
                                            >
                                                &nbsp;
                                            </div>
                                            <em className={Styles.sjt}>소리명</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div
                                                className={`${Styles.thmb} ${
                                                    Styles.imico_pop_sound_thmb
                                                    }`}
                                            >
                                                &nbsp;
                                            </div>
                                            <em className={Styles.sjt}>소리명</em>
                                        </div>
                                    </li>
                                    <li className={Styles.on}>
                                        <div className={Styles.link}>
                                            <div
                                                className={`${Styles.thmb} ${
                                                    Styles.imico_pop_sound_thmb
                                                    }`}
                                            >
                                                &nbsp;
                                            </div>
                                            <em className={Styles.sjt}>소리명</em>
                                        </div>
                                    </li>
                                    <li className={Styles.on}>
                                        <div className={Styles.link}>
                                            <div
                                                className={`${Styles.thmb} ${
                                                    Styles.imico_pop_sound_thmb
                                                    }`}
                                            >
                                                &nbsp;
                                            </div>
                                            <em className={Styles.sjt}>소리명</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div
                                                className={`${Styles.thmb} ${
                                                    Styles.imico_pop_sound_thmb
                                                    }`}
                                            >
                                                &nbsp;
                                            </div>
                                            <em className={Styles.sjt}>소리명</em>
                                        </div>
                                    </li>
                                    <li className={Styles.on}>
                                        <div className={Styles.link}>
                                            <div
                                                className={`${Styles.thmb} ${
                                                    Styles.imico_pop_sound_thmb
                                                    }`}
                                            >
                                                &nbsp;
                                            </div>
                                            <em className={Styles.sjt}>소리명</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div
                                                className={`${Styles.thmb} ${
                                                    Styles.imico_pop_sound_thmb
                                                    }`}
                                            >
                                                &nbsp;
                                            </div>
                                            <em className={Styles.sjt}>소리명</em>
                                        </div>
                                    </li>
                                    <li className={Styles.on}>
                                        <div className={Styles.link}>
                                            <div
                                                className={`${Styles.thmb} ${
                                                    Styles.imico_pop_sound_thmb
                                                    }`}
                                            >
                                                &nbsp;
                                            </div>
                                            <em className={Styles.sjt}>소리명</em>
                                        </div>
                                    </li>
                                    <li className={Styles.on}>
                                        <div className={Styles.link}>
                                            <div
                                                className={`${Styles.thmb} ${
                                                    Styles.imico_pop_sound_thmb
                                                    }`}
                                            >
                                                &nbsp;
                                            </div>
                                            <em className={Styles.sjt}>소리명</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div
                                                className={`${Styles.thmb} ${
                                                    Styles.imico_pop_sound_thmb
                                                    }`}
                                            >
                                                &nbsp;
                                            </div>
                                            <em className={Styles.sjt}>소리명</em>
                                        </div>
                                    </li>
                                    <li className={Styles.on}>
                                        <div className={Styles.link}>
                                            <div
                                                className={`${Styles.thmb} ${
                                                    Styles.imico_pop_sound_thmb
                                                    }`}
                                            >
                                                &nbsp;
                                            </div>
                                            <em className={Styles.sjt}>소리명</em>
                                        </div>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </section>
                    <div className={Styles.pop_btn_box}>
                        <div>취소</div>
                        <div className={Styles.active}>추가하기</div>
                    </div>
                </div>

                {/* 회원가입 팝업1 */}
                <div className={Styles.popup_wrap}>
                    <header className={Styles.pop_header}>
                        <h1>회원가입</h1>
                        <button
                            onClick={this.close}
                            className={`${Styles.btn_back} ${Styles.imbtn_pop_back}`}
                        >
                            <span className={Styles.blind}>뒤로가기</span>
                        </button>
                    </header>
                    <section className={`${Styles.pop_content} ${Styles.login_area}`}>
                        <section className={Styles.login_header}>
                            <h2 className={`${Styles.tit} ${Styles.imico_entrylogo}`}>
                                <span className={Styles.blind}>entry</span>
                            </h2>
                            <p className={Styles.dsc}>
                                소프트웨어의 첫걸음,
                                <br />
                                엔트리에 오신 것을 환영 합니다.
                            </p>
                            <div className={Styles.pop_btn_box}>
                                <div>학생</div>
                                <div className={Styles.active}>선생님</div>
                            </div>
                        </section>
                        <section className={Styles.login_cont}>
                            <div className={Styles.depth_list}>
                                <span className={Styles.on}>
                                    1<em className={Styles.blind}>단계</em>
                                </span>
                                <span>2</span>
                                <span>3</span>
                            </div>
                            <h3 className={Styles.cont_tit}>약관 동의</h3>
                            <div className={Styles.agree_box}>
                                <span className={Styles.pop_checkbox}>
                                    <input
                                        type="checkbox"
                                        id="agree_chk"
                                        name="agree_chk"
                                        className={Styles.blind}
                                    />
                                    <label htmlFor="agree_chk" className={Styles.imbtn_pop_checked}>
                                        <span className={Styles.text}>
                                            이용약관 동의{' '}
                                            <em className={Styles.chk_point}>(필수)</em>
                                        </span>
                                    </label>
                                </span>
                                <div className={Styles.round_box}>
                                    <h4>제 1조. 목적</h4>
                                    <p>
                                        이 약관은 재단법인 커넥트가 제공하는 엔트리 및 엔트리와 관련
                                        제반 서비스의 이용과 관련하여 회사와 회원과의 권리, 의무 및
                                        책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
                                    </p>
                                    <h4>제 2조. 정의</h4>
                                    <p>
                                        이 약관에서 사용하는 용어의 정의는 다음과 같습니다.
                                        <br />① "서비스"라 함은 구현되는 단말기(pc, tv, 휴대형단말기
                                        등의 각종 유무선 장치를 포함)와 상관없이 "회원"이 이용할 수
                                        있는 엔트리 및 엔트리와 관련 제반 서비스를 의미합니다.
                                        <br />② "회원"이라 함은 회사의 "서비스"에 접속하여 이 약관에
                                        따라 "회사"와 이용계약을 체결하고 "회사"가 제공하는
                                        "서비스"를 이용하는 고객을 말합니다.
                                        <br />③ "아이디(id)"이라 함은 "회원"의 식별과 "서비스"
                                        이용을 위하여 "회원"이 정하고 "회사"가 승인하는 문자와
                                        숫자의 조합을 의미합니다.
                                        <br />④ "비밀번호"라 함은 "회원"이 부여 받은 "아이디와
                                        일치되는 "회원"임을 확인하고 비밀보호를 위해 "회원" 자신이
                                        정한 문자 또는 숫자의 조합을 의미합니다.
                                        <br />⑤ "게시물"이라 함은 "회원"이 "서비스"를 이용함에 있어
                                        "서비스상"에 게시한 부호ㆍ문자ㆍ음성ㆍ음향ㆍ화상ㆍ동영상
                                        등의 정보 형태의 글, 사진, 동영상 및 각종 파일과 링크 등을
                                        의미합니다.
                                    </p>
                                    <h4>제 3조. 약관의 게시와 개정</h4>
                                    <p>
                                        ① "회사"는 이 약관의 내용을 "회원"이 쉽게 알 수 있도록
                                        서비스 초기 화면에 게시합니다.
                                        <br />② "회사"는 "약관의규제에관한법률",
                                        "정보통신망이용촉진및정보보호등에관한법률(이하
                                        "정보통신망법")" 등 관련법을 위배하지 않는 범위에서 이
                                        약관을 개정할 수 있습니다.
                                        <br />③ "회사"가 약관을 개정할 경우에는 적용일자 및
                                        개정사유를 명시하여 현행약관과 함께 제1항의 방식에 따라 그
                                        개정약관의 적용일자 30일 전부터 적용일자 전일까지
                                        공지합니다. 다만, 회원에게 불리한 약관의 개정의 경우에는
                                        공지 외에 로그인시 동의창 등의 전자적 수단을 통해 따로
                                        명확히 통지하도록 합니다.
                                        <br />④ 회사가 전항에 따라 개정약관을 공지 또는 통지하면서
                                        회원에게 30일 기간 내에 의사표시를 하지 않으면 의사표시가
                                        표명된 것으로 본다는 뜻을 명확하게 공지 또는 통지하였음에도
                                        회원이 명시적으로 거부의 의사표시를 하지 아니한 경우 회원이
                                        개정약관에 동의한 것으로 봅니다.
                                        <br />⑤ 회원이 개정약관의 적용에 동의하지 않는 경우 회사는
                                        개정 약관의 내용을 적용할 수 없으며, 이 경우 회원은
                                        이용계약을 해지할 수 있습니다. 다만, 기존 약관을 적용할 수
                                        없는 특별한 사정이 있는 경우에는 회사는 이용계약을 해지할 수
                                        있습니다.
                                    </p>
                                    <h4>제 4조. 약관의 해석</h4>
                                    <p>
                                        "회사"는 "서비스"의 원활한 제공을 위하여 별도의 이용정책을
                                        둘 수 있으며, 이 약관에서 정하지 아니한 사항이나 해석에
                                        대해서는 이용정책, 관계법령 또는 상관례에 따릅니다.
                                    </p>
                                    <h4>제 5조. 이용계약 체결</h4>
                                    <p>
                                        ① 이용계약은 "회원"이 되고자 하는 자(이하 "가입신청자")가
                                        약관의 내용에 대하여 동의를 한 다음 회원가입신청을 하고
                                        "회사"가 이러한 신청에 대하여 승낙함으로써 체결됩니다.
                                        <br />② "회사"는 "가입신청자"의 신청에 대하여 "서비스"
                                        이용을 승낙함을 원칙으로 합니다. 다만, "회사"는 다음 각 호에
                                        해당하는 신청에 대하여는 승낙을 하지 않거나 사후에
                                        이용계약을 해지할 수 있습니다.
                                        <br />
                                        1. 가입신청자가 이 약관에 의하여 이전에 회원자격을 상실한
                                        적이 있는 경우, 단 "회사"의 회원 재가입 승낙을 얻은 경우에는
                                        예외로 함.
                                        <br />
                                        2. 허위의 정보를 기재하거나, "회사"가 제시하는 내용을
                                        기재하지 않은 경우 3. ”가입신청자”의 귀책사유로 인하여
                                        승인이 불가능하거나 기타 규정한 제반 사항을 위반하며
                                        신청하는 경우
                                        <br />③ 제1항에 따른 신청에 있어 "회사"는 "회원"의 종류에
                                        따라 전문기관을 통한 실명확인 및 본인인증을 요청할 수
                                        있습니다.
                                        <br />④ "회사"는 서비스관련설비의 여유가 없거나, 기술상 또는
                                        업무상 문제가 있는 경우에는 승낙을 유보할 수 있습니다.
                                        <br />⑤ 제2항과 제4항에 따라 회원가입신청의 승낙을 하지
                                        아니하거나 유보한 경우, "회사"는 원칙적으로 이를
                                        가입신청자에게 알리도록 합니다.
                                        <br />⑥ 이용계약의 성립 시기는 "회사"가 가입완료를 신청절차
                                        상에서 표시한 시점으로 합니다.
                                        <br />⑦ "회사"는 "회원"에 대해 회사정책에 따라 등급별로
                                        구분하여 이용시간, 이용횟수, 서비스 메뉴 등을 세분하여
                                        이용에 차등을 둘 수 있습니다.
                                        <br />⑧ "회사"는 "회원"에 대하여
                                        "영화및비디오물의진흥에관한법률" 및 "청소년보호법"등에 따른
                                        등급 및 연령 준수를 위해 이용제한이나 등급별 제한을 할 수
                                        있습니다.
                                    </p>
                                    <h4>제 6조. 회원정보의 변경</h4>
                                    <p>
                                        ① "회원"은 개인정보관리화면을 통하여 언제든지 본인의
                                        개인정보를 열람하고 수정할 수 있습니다. 다만, 서비스 관리를
                                        위해 필요한 “아이디” 등은 수정이 불가능합니다.
                                        <br />② "회원"은 회원가입신청 시 기재한 사항이 변경되었을
                                        경우 온라인으로 수정을 하거나 전자우편 기타 방법으로
                                        "회사"에 대하여 그 변경사항을 알려야 합니다.
                                        <br />③ "회원"은 개인정보관리화면을 통하여 언제든지 본인의
                                        개인정보를 열람하고 수정할 수 있습니다. 다만, 서비스 관리를
                                        위해 필요한 “아이디” 등은 수정이 불가능합니다.
                                        <br />④ 제2항의 변경사항을 "회사"에 알리지 않아 발생한
                                        불이익에 대하여 "회사"는 책임지지 않습니다.
                                    </p>
                                    <h4>제 7조. 개인정보보호의 의무</h4>
                                    <p>
                                        "회사"는 "정보통신망법" 등 관계 법령이 정하는 바에 따라
                                        "회원"의 개인정보를 보호하기 위해 노력합니다. 개인정보의
                                        보호 및 사용에 대해서는 관련법 및 "회사"의
                                        개인정보처리방침이 적용됩니다. 다만, "회사"의 공식 사이트
                                        이외의 링크된 사이트에서는 "회사"의 개인정보처리방침이
                                        적용되지 않습니다.
                                    </p>
                                    <h4>
                                        제 8조. "회원"의 "아이디" 및 "비밀번호"의 관리에 대한 의무
                                    </h4>
                                    <p>
                                        ① "회원"의 "아이디"와 "비밀번호"에 관한 관리책임은
                                        "회원"에게 있으며, 이를 제 3자가 이용하도록 하여서는 안
                                        됩니다.
                                        <br />② "회사"는 "회원"의 "아이디"가 개인정보 유출 우려가
                                        있거나, 반사회적 또는 미풍양속에 어긋나거나 "회사" 및
                                        "회사"의 운영자로 오인할 우려가 있는 경우, 해당 "아이디"의
                                        이용을 제한할 수 있습니다.
                                        <br />③ "회원"은 "아이디" 및 "비밀번호"가 도용되거나 제3자가
                                        사용하고 있음을 인지한 경우에는 이를 즉시 "회사"에 통지하고
                                        "회사"의 안내에 따라야 합니다.
                                        <br />④ 제3항의 경우에 해당 "회원"이 "회사"에 그 사실을
                                        통지하지 않거나, 통지한 경우에도 "회사"의 안내에 따르지 않아
                                        발생한 불이익에 대하여 "회사"는 책임지지 않습니다.
                                        <br />
                                    </p>
                                    <h4>제 9조. "회원"에 대한 통지</h4>
                                    <p>
                                        ①"회사"가 "회원"에 대한 통지를 하는 경우 이 약관에 별도
                                        규정이 없는 한 서비스 내 전자우편주소, 전자쪽지 등으로 할 수
                                        있습니다.
                                        <br />
                                        ②"회사"는 "회원" 전체에 대한 통지의 경우 7일 이상 "회사"의
                                        게시판에 게시함으로써 제1항의 통지에 갈음할 수 있습니다.
                                    </p>
                                    <h4>제 10조. "회사"의 의무</h4>
                                    <p>
                                        ① "회사"는 관련법과 이 약관이 금지하거나 미풍양속에 반하는
                                        행위를 하지 않으며, 계속적이고 안정적으로 "서비스"를
                                        제공하기 위하여 최선을 다하여 노력합니다.
                                        <br />② "회사"는 "회원"이 안전하게 "서비스"를 이용할 수
                                        있도록 개인정보(신용정보 포함)보호를 위해 보안시스템을
                                        갖추어야 하며 개인정보처리방침을 공시하고 준수합니다.
                                        <br />③ "회사"는 서비스이용과 관련하여 발생하는 ”회원”의
                                        불만 또는 피해구제요청을 적절하게 처리할 수 있도록 필요한
                                        인력 및 시스템을 구비합니다.
                                        <br />④ "회사"는 서비스이용과 관련하여 "회원"으로부터 제기된
                                        의견이나 불만이 정당하다고 인정할 경우에는 이를 처리하여야
                                        합니다. "회원"이 제기한 의견이나 불만사항에 대해서는
                                        게시판을 활용하거나 전자우편 등을 통하여 "회원"에게 처리과정
                                        및 결과를 전달합니다.
                                    </p>
                                    <h4>제 11조. "회원"의 의무</h4>
                                    <p>
                                        ① "회원"은 다음 행위를 하여서는 안 됩니다.
                                        <br />
                                        1. 신청 또는 변경 시 허위내용의 등록
                                        <br />
                                        2. 타인의 정보도용
                                        <br />
                                        3. "회사"가 게시한 정보의 변경
                                        <br />
                                        4."회사"가 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의
                                        송신 또는 게시
                                        <br />
                                        5. "회사"와 기타 제3자의 저작권 등 지적재산권에 대한 침해
                                        <br />
                                        6. "회사" 및 기타 제3자의 명예를 손상시키거나 업무를
                                        방해하는 행위
                                        <br />
                                        7. 외설 또는 폭력적인 메시지, 화상, 음성, 기타 공서양속에
                                        반하는 정보를 "서비스"에 공개 또는 게시하는 행위
                                        <br />
                                        8. 회사의 동의 없이 영리를 목적으로 "서비스"를 사용하는 행위
                                        <br />
                                        9. 기타 불법적이거나 부당한 행위
                                        <br />② "회원"은 관계법, 이 약관의 규정, 이용정책, 이용안내
                                        및 "서비스"와 관련하여 공지한 주의사항, "회사"가 통지하는
                                        사항 등을 준수하여야 하며, 기타 "회사"의 업무에 방해되는
                                        행위를 하여서는 안 됩니다.
                                    </p>
                                    <h4>제 12조. "서비스"의 제공 등</h4>
                                    <p>
                                        ① 회사는 회원에게 아래와 같은 서비스를 제공합니다.
                                        <br />
                                        1. 프로그래밍 교육 서비스
                                        <br />
                                        2. 프로그래밍 저작 플랫폼
                                        <br />
                                        3. 프로그래밍 저작물 공유 플랫폼
                                        <br />
                                        4. 프로그래밍 교육 관련 커뮤니티
                                        <br />
                                        5. 기타 "회사"가 추가 개발하거나 다른 회사와의 제휴계약 등을
                                        통해 "회원"에게 제공하는 일체의 서비스
                                        <br />② 회사는 "서비스"를 일정범위로 분할하여 각 범위 별로
                                        이용가능시간을 별도로 지정할 수 있습니다. 다만, 이러한
                                        경우에는 그 내용을 사전에 공지합니다.
                                        <br />③ "서비스"는 연중무휴, 1일 24시간 제공함을 원칙으로
                                        합니다.
                                        <br />④ "회사"는 컴퓨터 등 정보통신설비의 보수점검, 교체 및
                                        고장, 통신두절 또는 운영상 상당한 이유가 있는 경우
                                        "서비스"의 제공을 일시적으로 중단할 수 있습니다. 이 경우
                                        "회사"는 제9조["회원"에 대한 통지]에 정한 방법으로
                                        "회원"에게 통지합니다. 다만, "회사"가 사전에 통지할 수 없는
                                        부득이한 사유가 있는 경우 사후에 통지할 수 있습니다.
                                        <br />⑤ "회사"는 서비스의 제공에 필요한 경우 정기점검을
                                        실시할 수 있으며, 정기점검시간은 서비스제공화면에 공지한
                                        바에 따릅니다.
                                    </p>
                                    <h4>제 13조. "서비스"의 변경</h4>
                                    <p>
                                        ① "회사"는 상당한 이유가 있는 경우에 운영상, 기술상의 필요에
                                        따라 제공하고 있는 전부 또는 일부 "서비스"를 변경할 수
                                        있습니다.
                                        <br />② "서비스"의 내용, 이용방법, 이용시간에 대하여 변경이
                                        있는 경우에는 변경사유, 변경될 서비스의 내용 및 제공일자
                                        등은 그 변경 전에 해당 서비스 초기화면에 게시하여야 합니다.
                                        <br />③ "회사"는 무료로 제공되는 서비스의 일부 또는 전부를
                                        회사의 정책 및 운영의 필요상 수정, 중단, 변경할 수 있으며,
                                        이에 대하여 관련법에 특별한 규정이 없는 한 "회원"에게 별도의
                                        보상을 하지 않습니다.
                                    </p>
                                    <h4>제 14조. 정보의 제공 및 광고의 게재</h4>
                                    <p>
                                        ① "회사"는 "회원"이 "서비스" 이용 중 필요하다고 인정되는
                                        다양한 정보를 공지사항이나 전자우편 등의 방법으로 "회원"에게
                                        제공할 수 있습니다. 다만, "회원"은 관련법에 따른 거래관련
                                        정보 및 고객문의 등에 대한 답변 등을 제외하고는 언제든지
                                        전자우편에 대해서 수신 거절을 할 수 있습니다.
                                        <br />② 제1항의 정보를 전화 및 모사전송기기에 의하여
                                        전송하려고 하는 경우에는 "회원"의 사전 동의를 받아서
                                        전송합니다. 다만, "회원"의 거래관련 정보 및 고객문의 등에
                                        대한 회신에 있어서는 제외됩니다.
                                        <br />③ "회사"는 "서비스"의 운영과 관련하여 서비스 화면,
                                        홈페이지, 전자우편 등에 광고를 게재할 수 있습니다. 광고가
                                        게재된 전자우편을 수신한 "회원"은 수신거절을 "회사"에게 할
                                        수 있습니다.
                                        <br />④ "이용자(회원, 비회원 포함)"는 회사가 제공하는
                                        서비스와 관련하여 게시물 또는 기타 정보를 변경, 수정,
                                        제한하는 등의 조치를 취하지 않습니다.
                                    </p>
                                    <h4>제 15조. "게시물"의 저작권</h4>
                                    <p>
                                        ① "회원"이 "서비스" 내에 게시한 "게시물"의 저작권은 해당
                                        게시물의 저작자에게 귀속됩니다.
                                        <br />② "회원"은 본인이 작성한 게시물(작품)을 서비스내에
                                        공개할 경우 다음 각 호의 사항을 허락하며, 구체적인 내용은
                                        엔트리 저작권 이용정책에 따릅니다.
                                        <br />
                                        1. 내가 만든 게시물(작품) 공개 시, 내가 만든 게시물(작품)과
                                        그 소스코드의 공개를 동의합니다.
                                        <br />
                                        2. 내가 만든 게시물(작품) 공개 시, 다른 사람이 나의
                                        게시물(작품)을 이용하는 것을 허락합니다.(복제, 배포,
                                        공중송신 포함)
                                        <br />
                                        3. 내가 만든 게시물(작품) 공개 시, 다른 사람이 나의
                                        게시물(작품)을 수정하는 것을 허락합니다.(리믹스, 변형, 2차
                                        저작물 제작 포함)
                                        <br />③ "회원"이 "서비스" 내에 게시하는 "게시물"은 검색결과
                                        내지 "서비스" 및 관련 프로모션 등에 노출될 수 있으며, 해당
                                        노출을 위해 필요한 범위 내에서는 일부 수정, 복제, 편집되어
                                        게시될 수 있습니다. 이 경우, 회사는 저작권법 규정을
                                        준수하며, "회원"은 언제든지 고객센터 또는 "서비스" 내
                                        관리기능을 통해 해당 게시물에 대해 삭제, 비공개 등의 조치를
                                        취할 수 있습니다.
                                        <br />④ "회사"는 제2항 이외의 방법으로 "회원"의 "게시물"을
                                        이용하고자 하는 경우에는 전화, 팩스, 전자우편 등을 통해
                                        사전에 "회원"의 동의를 얻어야 합니다.
                                    </p>
                                    <h4>제 16조. "게시물"의 관리</h4>
                                    <p>
                                        ① "회원"의 "게시물"이 "정보통신망법" 및 "저작권법"등
                                        관련법에 위반되는 내용을 포함하는 경우, 권리자는 관련법이
                                        정한 절차에 따라 해당 "게시물"의 게시중단 및 삭제 등을
                                        요청할 수 있으며, "회사"는 관련법에 따라 조치를 취하여야
                                        합니다.
                                        <br />② "회사"는 전항에 따른 권리자의 요청이 없는 경우라도
                                        권리침해가 인정될 만한 사유가 있거나 기타 회사 정책 및
                                        관련법에 위반되는 경우에는 관련법에 따라 해당 "게시물"에
                                        대해 임시조치 등을 취할 수 있습니다.
                                    </p>
                                    <h4>제 17조. 권리의 귀속</h4>
                                    <p>
                                        ① "서비스"에 대한 저작권 및 지적재산권은 "회사"에
                                        귀속됩니다. 단, "회원"의 "게시물" 및 제휴계약에 따라 제공된
                                        저작물 등은 제외합니다.
                                        <br />② "회사"는 서비스와 관련하여 "회원"에게 "회사"가 정한
                                        이용조건에 따라 계정, 콘텐츠, 등을 이용할 수 있는 이용권만을
                                        부여하며, "회원"은 이를 양도, 판매, 담보제공 등의 처분행위를
                                        할 수 없습니다.
                                    </p>
                                    <h4>제 18조. 포인트</h4>
                                    <p>
                                        "회사"는 서비스의 효율적 이용 및 운영을 위해 사전 공지 후
                                        "포인트"의 일부 또는 전부를 조정할 수 있으며, "포인트"는
                                        회사가 정한 기간에 따라 주기적으로 소멸할 수 있습니다.
                                    </p>
                                    <h4>제 19조. 계약해제, 해지 등</h4>
                                    <p>
                                        ① "회원"은 언제든지 서비스초기화면의 고객센터 또는 내 정보
                                        관리 메뉴 등을 통하여 이용계약 해지 신청을 할 수 있으며,
                                        "회사"는 관련법 등이 정하는 바에 따라 이를 즉시 처리하여야
                                        합니다.
                                        <br />② "회원"이 계약을 해지할 경우, 관련법 및
                                        개인정보취급방침에 따라 "회사"가 회원정보를 보유하는 경우를
                                        제외하고는 해지 즉시 "회원"의 모든 데이터는 소멸됩니다.
                                        <br />③ "회원"이 계약을 해지하는 경우, "회원"이 작성한
                                        "게시물" 중 프로젝트 등과 같이 본인 계정에 등록된 게시물
                                        일체는 삭제됩니다. 다만, 공용게시판에 등록된 “게시물”, 공유
                                        등이 되어 재게시된 “게시물”은 삭제되지 않으니, 직접 삭제
                                        또는 “회사”에 삭제 요청을 통하여 사전에 삭제 후 탈퇴하시기
                                        바랍니다.
                                        <br />④ 전항과 관련하여 “회원”이 저작자가 아니거나 타인이
                                        공동으로 권리를 보유한 “게시물”의 경우 삭제되지 않을 수
                                        있습니다.
                                        <br />
                                    </p>
                                    <h4>제 20조. 이용제한 등</h4>
                                    <p>
                                        ① "회사"는 "회원"이 이 약관의 의무를 위반하거나 "서비스"의
                                        정상적인 운영을 방해한 경우, 경고, 일시정지, 영구이용정지
                                        등으로 "서비스" 이용을 단계적으로 제한할 수 있습니다.
                                        <br />② "회사"는 전항에도 불구하고, 결제도용, "저작권법" 및
                                        "컴퓨터프로그램보호법"을 위반한 불법프로그램의 제공 및
                                        운영방해, "정보통신망법"을 위반한 불법통신 및 해킹,
                                        악성프로그램의 배포, 접속권한 초과행위 등과 같이 관련법을
                                        위반한 경우에는 즉시 영구이용정지를 할 수 있습니다. 본 항에
                                        따른 영구이용정지 시 "서비스" 이용을 통해 획득한 "포인트" 및
                                        기타 혜택 등도 모두 소멸되며, "회사"는 이에 대해 별도로
                                        보상하지 않습니다.
                                        <br />③ "회사"는 "회원"이 계속해서 3개월 이상 로그인하지
                                        않는 경우, 회원정보의 보호 및 운영의 효율성을 위해 이용을
                                        제한할 수 있습니다.
                                        <br />④ "회사"는 본 조의 이용제한 범위 내에서 제한의 조건 및
                                        세부내용은 이용정책에서 정하는 바에 의합니다.
                                        <br />⑤ 본 조에 따라 "서비스" 이용을 제한하거나 계약을
                                        해지하는 경우에는 "회사"는 제9조["회원"에 대한 통지]에 따라
                                        통지합니다.
                                        <br />⑥ "회원"은 본 조에 따른 이용제한 등에 대해 "회사"가
                                        정한 절차에 따라 이의신청을 할 수 있습니다. 이 때 이의가
                                        정당하다고 "회사"가 인정하는 경우 "회사"는 즉시 "서비스"의
                                        이용을 재개합니다.
                                    </p>
                                    <h4>제 21조. 책임제한</h4>
                                    <p>
                                        ① "회사"는 천재지변 또는 이에 준하는 불가항력으로 인하여
                                        "서비스"를 제공할 수 없는 경우에는 "서비스" 제공에 관한
                                        책임이 면제됩니다.
                                        <br />② "회사"는 "회원"의 귀책사유로 인한 "서비스" 이용의
                                        장애에 대하여는 책임을 지지 않습니다.
                                        <br />③ "회사"는 "회원"이 "서비스"와 관련하여 게재한 정보,
                                        자료, 사실의 신뢰도, 정확성 등의 내용에 관하여는 책임을 지지
                                        않습니다.
                                        <br />④ "회사"는 "회원" 간 또는 "회원"과 제3자 상호간에
                                        "서비스"를 매개로 하여 거래 등을 한 경우에는 책임이
                                        면제됩니다.
                                        <br />⑤ "회사"는 무료로 제공되는 서비스 이용과 관련하여
                                        관련법에 특별한 규정이 없는 한 책임을 지지 않습니다.
                                        <br />
                                    </p>
                                    <h4>제 22조. 준거법 및 재판관할</h4>
                                    <p>
                                        ① "회사"와 "회원" 간 제기된 소송은 대한민국법을 준거법으로
                                        합니다.
                                        <br />② "회사"와 "회원"간 발생한 분쟁에 관한 소송은 제소
                                        당시의 "회원"의 주소에 의하고, 주소가 없는 경우 거소를
                                        관할하는 지방법원의 전속관할로 합니다. 단, 제소 당시
                                        "회원"의 주소 또는 거소가 명확하지 아니한 경우의 관할법원은
                                        민사소송법에 따라 정합니다.
                                    </p>
                                    <h4>부칙</h4>
                                    <p>
                                        1. 이약관은 2017년 10월 29일부터 적용됩니다. 2. 2016년 3월
                                        18일부터 시행되던 종전의 약관은 본 약관으로 대체합니다.
                                        <br />
                                        <br />
                                        <a href="#">
                                            이전 이용약관 보기 (2016년 3월 18일 - 2017년 10월 28일
                                            적용)
                                        </a>
                                        <br />
                                        <a href="#">
                                            이전 이용약관 보기 (2015년 11월 20일 - 2016년 03월 17일
                                            적용)
                                        </a>
                                        <br />
                                        <a href="#">
                                            이전 이용약관 보기 (2014년 4월 15일 - 2015년 11월 19일
                                            적용)
                                        </a>
                                    </p>
                                </div>
                                {/* 이용약관에 동의하지 않았을때 문구 */}
                                <p className={Styles.error_dsc}>* 이용약관에 동의해주세요.</p>
                            </div>
                            <div className={Styles.agree_box}>
                                <span className={Styles.pop_checkbox}>
                                    <input
                                        type="checkbox"
                                        id="agree_chk2"
                                        name="agree_chk2"
                                        className={Styles.blind}
                                    />
                                    <label
                                        htmlFor="agree_chk2"
                                        className={Styles.imbtn_pop_checked}
                                    >
                                        <span className={Styles.text}>
                                            개인정보 수집 및 이용동의{' '}
                                            <em className={Styles.chk_point}>(필수)</em>
                                        </span>
                                    </label>
                                </span>
                                <div className={Styles.round_box}>
                                    <h4>개인정보 수집 및 이용에 대한 안내</h4>
                                    <p>
                                        재단법인커넥트(이하 "커넥트")는 개인정보보호법, 정보통신망
                                        이용촉진 및 정보보호 등에 관한 법률, 통신비밀보호법,
                                        전기통신사업법 등 개인정보처리자가 준수하여야 할 관련
                                        법령상의 개인정보보호 규정을 준수하며, 관련 법령에 의거한
                                        개인정보처리방침을 정하여 정보주체의 권익 보호에 최선을
                                        다하고 있습니다. 본 개인정보처리방침은 "커넥트"를 통하여
                                        정보주체가 제공하는 개인정보가 어떠한 용도와 방식으로
                                        이용되고 있으며, 개인정보 보호를 위해 어떠한 조치가 취해지고
                                        있는지 알려드립니다.
                                        <br />
                                        "커넥트"는 개인정보처리방침을 개정하는 경우 웹사이트
                                        공지사항(또는 개별공지)을 통하여 공지할 것입니다.
                                    </p>
                                    <h4>1. 수집하는 개인정보의 항목 및 수집방법</h4>
                                    <p>
                                        가. 수집하는 개인정보 항목
                                        <br />
                                        1) "커넥트"는 회원가입 등을 위해 다음과 같은 개인정보를
                                        수집하고 있습니다. 선택항목의 경우, 입력을 하지 않아도
                                        회원가입이 가능합니다.
                                        <br />- 필수항목 : 아이디, 비밀번호, 성별 - 선택항목 :
                                        이메일 주소
                                        <br />
                                        2) 서비스 이용과정이나 사업처리 과정에서 다음과 같은
                                        정보들이 자동으로 생성되어 수집될 수 있습니다.
                                        <br />- IP Address, 쿠키, 방문 일시, 서비스 이용 기록, 불량
                                        이용 기록
                                        <br />
                                        나. 개인정보 수집방법"커넥트"는 회원 가입이나
                                        이용(‘회원정보’ 페이지 내 기입, 경품 행사 응모, 문의 접수
                                        등) 도중 정보주체의 자발적 제공을 통하여 개인정보를
                                        수집합니다.
                                    </p>
                                    <h4>2. 개인정보의 이용 목적</h4>
                                    <p>
                                        "커넥트"는 정보주체의 동의가 있거나 법령의 규정에 의한
                                        경우를 제외하고는 본 조에서 고지한 범위를 넘어 정보주체의
                                        개인정보를 활용하지 않습니다. 수집한 개인정보 활용의 목적은
                                        아래와 같습니다.
                                        <br />
                                        가. 회원 관리회원제 서비스 이용에 따른 개인 식별, 원활한
                                        의사소통 경로의 확보, 고객 문의에 대한 응답, 새로운 정보의
                                        소개 및 고지사항 전달, 불량회원의 부정 이용 방지, 가입 의사
                                        확인, 불만처리 등 민원처리
                                        <br />
                                        나. 마케팅 및 광고에 활용신규 서비스(제품) 개발 및 특화,
                                        이벤트 등 광고성 정보 전달, 접속 빈도 파악 또는 회원의
                                        서비스 이용에 대한 통계
                                        <br />
                                        다. 학술적 연구 자료로 활용
                                        <br />
                                        라. 법령 등의 이행 및 준수법령 등에 규정된 의무의 이행,
                                        법령이나 이용약관에 반하여 정보주체에게 피해를 줄 수 있는
                                        잘못된 이용행위의 방지 등<br />
                                        마. 사고발생시 원인 규명 및 처리를 위한 수집 및 이용
                                    </p>
                                    <h4>3. 개인정보의 보유 및 이용기간</h4>
                                    <p>
                                        가. "커넥트"는 회원이 회원자격을 유지하고 있는 동안 수집된
                                        회원의 개인정보를 보유ㆍ이용할 수 있습니다.나. 회원이
                                        탈퇴하거나 자격을 상실할 경우에는 회원의 별도 요청이
                                        없더라도 수집된 회원정보를 삭제 및 파기합니다. 단, 회원의
                                        탈퇴 또는 자격상실에도 불구하고 관련 법령에 따라 별도의 정보
                                        보관의무가 정해진 경우에는 해당 법령의 규정에 따라 일정기간
                                        개인정보를 보관합니다.
                                    </p>
                                    <h4>4. 개인정보의 파기절차 및 방법</h4>
                                    <p>
                                        "커넥트"는 원칙적으로 개인정보 수집 및 이용목적이 달성된
                                        후에는 해당 정보를 지체 없이 파기합니다. "커넥트"의 개인정보
                                        파기절차 및 방법은 다음과 같습니다. 가. 파기절차
                                        <br />
                                        1) 회원이 회원가입 등을 위해 입력하신 정보는 목적이 달성된
                                        후 내부 방침 및 기타 관련 법령에 의한 정보 보관의무(보유 및
                                        이용기간 참조)에 따라 일정 기간 저장된 후 파기됩니다.
                                        <br />
                                        2) 관련 법령에 의해 보관 중인 개인정보는 법률에 의한 경우가
                                        아니고서는 보유 목적 이외의 다른 목적으로 이용되지 않습니다.
                                        <br />
                                        나. 파기방법
                                        <br />
                                        1) 전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는
                                        기술적 방법을 사용하여 삭제합니다.
                                        <br />
                                        2) 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을
                                        통하여 파기합니다.
                                    </p>
                                    <h4>5. 개인정보 제3자 제공에 관한 사항</h4>
                                    <p>
                                        "커넥트"는 정보주체의 동의가 있거나 관련 법령의 규정에 의한
                                        경우를 제외하고는 어떠한 경우에도 "2. 개인정보의
                                        처리목적"에서 고지한 범위를 넘어 정보주체의 개인정보를
                                        이용하거나 제3자에게 제공하지 않습니다. 다만, 다음의
                                        경우에는 예외로 합니다.
                                        <br />
                                        가. 이용자가 사전에 동의한 경우
                                        <br />
                                        나. 관련 법령의 규정에 의하거나, 수사 목적으로 법령에 정해진
                                        절차와 방법에 따라 수사기관의 요구가 있는 경우
                                        <br />
                                        다. 서비스 제공에 따른 요금정산을 위해 필요한 경우
                                        <br />
                                        라. 계약 이행을 위해 필요한 경우
                                        <br />
                                        마. 타인에게 정신적, 물질적 피해를 줌으로써 그에 대한 법적
                                        조치를 취하기 위해 이용자의 정보를 공개해야 한다고 판단되는
                                        충분한 근거가 있는 경우
                                        <br />
                                        바. 통계작성, 학술연구, 마케팅분석 또는 시장조사를 위해
                                        필요한 경우로 특정 개인을 식별할 수 없는 형태로 가공하여
                                        외부 기관 또는 단체 등에 제공하는 경우
                                        <br />
                                        사. 서비스의 제공에 관한 계약의 이행을 위하여 필요한
                                        개인정보로서 경제적/기술적인 사유로 통상의 동의를 받는 것이
                                        현저히 곤란한 경우
                                    </p>
                                    <h4>6. 개인정보의 위탁에 관한 사항</h4>
                                    <p>
                                        "커넥트"는 원활한 개인정보 업무처리를 위하여 다음과 같이
                                        개인정보 처리업무를 위탁하고 있습니다.
                                        <br />
                                        6-1 수탁업체
                                        <br />
                                        네이버㈜, 네이버 비즈니스플랫폼㈜, NHN Technology
                                        Services(주)
                                        <br />
                                        6-2 위탁업무 내용
                                        <br />
                                        서버 등 인프라 관리업무, 서비스 개발 및 운영
                                        <br />
                                        6-3 위탁 기간
                                        <br />
                                        회원 탈퇴시 혹은 위탁계약 종료시까지
                                    </p>
                                    <h4>7. 정보주체의 권리•의무 및 그 행사방법에 관한 사항</h4>
                                    <p>
                                        가. 정보주체는 언제든지 등록되어 있는 자신의 개인정보를
                                        열람하거나 수정할 수 있으며, "커넥트"의 개인정보의 처리에
                                        동의하지 않는 경우 동의를 거부하거나 가입해지(회원탈퇴)를
                                        요청할 수 있습니다.
                                        <br />
                                        나. 정보주체가 개인정보의 오류에 대한 정정을 요청하신
                                        경우에는, "커넥트"는 당해 정정을 완료하기 전까지 당해
                                        개인정보를 이용 또는 제공하지 않습니다. 또한 잘못된
                                        개인정보를 제3자에게 이미 제공한 경우에는 정정 처리결과를
                                        제3자에게 지체 없이 통지하여 정정이 이루어지도록 하겠습니다.
                                        <br />
                                        다. "커넥트"는 정보주체의 요청에 의해 해지 또는 삭제된
                                        개인정보는 "3. 개인정보의 보유 및 이용기간"에 명시된 바에
                                        따라 처리하고 그 외의 용도로 열람 또는 이용할 수 없도록
                                        처리하고 있습니다.
                                    </p>
                                    <h4>8. 개인정보의 안전성 확보조치</h4>
                                    <p>
                                        "커넥트"는 개인정보의 안전성 확보를 위해 다음과 같은 조치를
                                        취하고 있습니다.
                                        <br />
                                        가. 관리적 조치 : 내부관리계획 수립•시행, 개인정보보호 담당
                                        부서 지정, 개인정보 취급 자의 최소 유지, 정기적 직원 교육 등
                                        <br />
                                        나. 기술적 조치 : 개인정보처리시스템 등의 접근권한 관리,
                                        접근통제시스템 설치, 개인정보 파기 시 복구 불가능한 방식으로
                                        진행, 보안프로그램 설치 등
                                    </p>
                                    <h4>9. 개인정보 보호책임자에 관한 사항</h4>
                                    <p>
                                        "커넥트"는 정보주체의 개인정보를 보호하고 개인정보와 관련한
                                        불만 등을 처리하기 위하여 아래와 같이 개인정보보호
                                        보호책임자를 지정하고 있습니다. 정보주체는 "커넥트"의
                                        서비스를 이용하시며 발생하는 모든 개인정보보호 관련 민원을
                                        개인정보관리책임자에게 문의 및 신고하실 수 있습니다.
                                        "커넥트"는 정보주체의 문의 및 신고사항에 대해 신속하게
                                        충분한 답변을 드릴 것입니다.
                                        <br />
                                        개인정보보호 보호책임자 : 김지현
                                        <br />
                                        전화번호 : 02-6202-9783
                                        <br />
                                        이메일 :{' '}
                                        <a href="mailto:entry@connect.or.kr">entry@connect.or.kr</a>
                                        <br />
                                        <br />
                                        기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는
                                        아래 기관에 문의하시기 바랍니다.
                                        <br />
                                        개인정보침해신고센터 (
                                        <a href="http://privacy.kisa.or.kr" target="_blank">
                                            http://privacy.kisa.or.kr
                                        </a>{' '}
                                        / 국번없이 118)
                                        <br />
                                        대검찰청 사이버수사과 (
                                        <a href="http://spo.go.kr" target="_blank">
                                            http://spo.go.kr
                                        </a>{' '}
                                        / 국번없이 1301)
                                        <br />
                                        경찰청 사이버안전국 (
                                        <a href="http://www.ctrc.go.kr" target="_blank">
                                            http://www.ctrc.go.kr
                                        </a>{' '}
                                        / 국번없이 182)
                                    </p>
                                    <h4>10. 개인정보 처리방침의 변경에 관한 사항</h4>
                                    <p>
                                        현 개인정보처리방침의 내용 추가, 삭제 및 수정이 있을 시에는
                                        개정 최소 7일전부터 홈페이지의 첫 화면의 '공지사항'을 통해
                                        고지할 것입니다. 다만, 개인정보의 수집 및 활용, 제3자 제공
                                        등과 같이 정보주체의 권리에 중요한 변경이 있을 경우에는 최소
                                        30일 전에 고지합니다.
                                        <br />
                                        <br />- 공고일자: 2017년 9월 29일
                                        <br />- 시행일자: 2017년 10월 29일
                                    </p>
                                </div>
                                {/* 이용약관에 동의하지 않았을때 문구 */}
                                <p className={Styles.error_dsc}>
                                    * 개인정보 수집 및 이용에 대한 안내에 동의해주세요.
                                </p>
                            </div>
                            <div className={Styles.pop_btn_box}>
                                <div className={Styles.active}>다음</div>
                            </div>
                        </section>
                    </section>
                </div>

                {/* 회원가입 팝업2 */}
                <div className={Styles.popup_wrap}>
                    <header className={Styles.pop_header}>
                        <h1>회원가입</h1>
                        <button
                            onClick={this.close}
                            className={`${Styles.btn_back} ${Styles.imbtn_pop_back}`}
                        >
                            <span className={Styles.blind}>뒤로가기</span>
                        </button>
                    </header>
                    <section className={`${Styles.pop_content} ${Styles.login_area}`}>
                        <section className={Styles.login_header}>
                            <h2 className={`${Styles.tit} ${Styles.imico_entrylogo}`}>
                                <span className={Styles.blind}>entry</span>
                            </h2>
                            <p className={Styles.dsc}>
                                소프트웨어의 첫걸음,
                                <br />
                                엔트리에 오신 것을 환영 합니다.
                            </p>
                        </section>
                        <section className={Styles.login_cont}>
                            <div className={Styles.depth_list}>
                                <span className={Styles.on}>1</span>
                                {/* [D] 최종 단계에 있을 곳에 <em className={Styles.blind}>단계</em> 찍어주세요  */}
                                <span className={Styles.on}>
                                    2<em className={Styles.blind}>단계</em>
                                </span>
                                <span>3</span>
                            </div>
                            <h3 className={Styles.cont_tit}>아이디, 비밀번호 입력</h3>
                            <div className={Styles.input_box}>
                                <div className={Styles.pop_inpt_text}>
                                    <label htmlFor="inpt_id" className={Styles.inpt_label}>
                                        아이디 입력 <em className={Styles.chk_point}>(필수)</em>
                                    </label>
                                    <input
                                        type="text"
                                        id="inpt_id"
                                        name="inpt_id"
                                        placeholder="4~20자의 영문 대 소문자, 숫자를 사용하세요."
                                    />
                                </div>
                                <div className={Styles.pop_inpt_text}>
                                    <label htmlFor="inpt_pw1" className={Styles.inpt_label}>
                                        비밀번호 입력 <em className={Styles.chk_point}>(필수)</em>
                                    </label>
                                    <input
                                        type="password"
                                        id="inpt_pw1"
                                        name="inpt_pw1"
                                        placeholder="5~20자의 영문 대 소문자, 숫자를 사용하세요."
                                    />
                                </div>
                                <div className={Styles.pop_inpt_text}>
                                    <label htmlFor="inpt_pw2" className={Styles.inpt_label}>
                                        비밀번호 확인 <em className={Styles.chk_point}>(필수)</em>
                                    </label>
                                    <input
                                        type="password"
                                        id="inpt_pw2"
                                        name="inpt_pw2"
                                        placeholder="비밀번호를 한번 더 입력하세요."
                                    />
                                </div>

                                {/* error 문구 */}
                                {/* error 문구 일때 error 클래스 추가 */}
                                <div className={`${Styles.pop_inpt_text} ${Styles.error}`}>
                                    <label htmlFor="inpt_id" className={Styles.inpt_label}>
                                        아이디 입력 <em className={Styles.chk_point}>(필수)</em>
                                    </label>
                                    <input type="text" id="inpt_id" name="inpt_id" />
                                    <p className={Styles.error_dsc}>
                                        * 4~20자의 영문/숫자를 조합하여 아이디를 입력하세요.
                                    </p>
                                </div>
                                <div className={`${Styles.pop_inpt_text} ${Styles.error}`}>
                                    <label htmlFor="inpt_pw1" className={Styles.inpt_label}>
                                        비밀번호 입력 <em className={Styles.chk_point}>(필수)</em>
                                    </label>
                                    <input type="password" id="inpt_pw1" name="inpt_pw1" />
                                    <p className={Styles.error_dsc}>
                                        * 5~10자의 영문/숫자를 조합하여 비밀번호를 입력하세요.
                                    </p>
                                </div>
                                <div className={`${Styles.pop_inpt_text} ${Styles.error}`}>
                                    <label htmlFor="inpt_pw2" className={Styles.inpt_label}>
                                        비밀번호 확인 <em className={Styles.chk_point}>(필수)</em>
                                    </label>
                                    <input type="password" id="inpt_pw2" name="inpt_pw2" />
                                    <p className={Styles.error_dsc}>
                                        * 같은 비밀번호를 입력해 주세요.
                                    </p>
                                </div>
                            </div>
                            <div className={Styles.pop_btn_box}>
                                <div>이전</div>
                                <div className={Styles.active}>다음</div>
                            </div>
                        </section>
                    </section>
                </div>

                {/* 회원가입 팝업3 */}
                <div className={Styles.popup_wrap}>
                    <header className={Styles.pop_header}>
                        <h1>회원가입</h1>
                        <button
                            onClick={this.close}
                            className={`${Styles.btn_back} ${Styles.imbtn_pop_back}`}
                        >
                            <span className={Styles.blind}>뒤로가기</span>
                        </button>
                    </header>
                    <section className={`${Styles.pop_content} ${Styles.login_area}`}>
                        <section className={Styles.login_header}>
                            <h2 className={`${Styles.tit} ${Styles.imico_entrylogo}`}>
                                <span className={Styles.blind}>entry</span>
                            </h2>
                            <p className={Styles.dsc}>
                                소프트웨어의 첫걸음,
                                <br />
                                엔트리에 오신 것을 환영 합니다.
                            </p>
                        </section>
                        <section className={Styles.login_cont}>
                            <div className={Styles.depth_list}>
                                <span className={Styles.on}>1</span>
                                <span className={Styles.on}>2</span>
                                {/* [D] 최종 단계에 있을 곳에 <em className={Styles.blind}>단계</em> 찍어주세요  */}
                                <span className={Styles.on}>
                                    3<em className={Styles.blind}>단계</em>
                                </span>
                            </div>
                            <h3 className={Styles.cont_tit}>개인정보 입력</h3>
                            <div className={Styles.input_box}>
                                {/* [D] 링크가 클릭되면 pop_selectbox클래스에 on 클래스 추가  */}
                                <div className={Styles.pop_selectbox}>
                                    <em className={Styles.inpt_label}>
                                        학년 <em className={Styles.chk_point}>(필수)</em>
                                    </em>
                                    <div
                                        className={`${Styles.select_link} ${
                                            Styles.imico_pop_select_arr_down
                                            }`}
                                    >
                                        학년을 선택하세요.
                                    </div>
                                    {/* 공통 툴팁의 화살표 기본 위치는 가운데 입니다. */}
                                    {/* 툴팁 화살표 위치를 변경하려면 arr 요소에서 margin-left:0;left: 원하는 값 으로 style이 정의 되어야 합니다. */}
                                    <div className={Styles.tooltip_box}>
                                        <div className={Styles.tooltip_inner}>
                                            <ul className={Styles.select_list}>
                                                <li className={Styles.list_item}>
                                                    <div className={Styles.list_link}>
                                                        초등 1학년
                                                    </div>
                                                </li>
                                                <li className={Styles.list_item}>
                                                    <div className={Styles.list_link}>
                                                        초등 2학년
                                                    </div>
                                                </li>
                                                <li className={Styles.list_item}>
                                                    <div className={Styles.list_link}>
                                                        초등 3학년
                                                    </div>
                                                </li>
                                                <li className={Styles.list_item}>
                                                    <div className={Styles.list_link}>
                                                        초등 4학년
                                                    </div>
                                                </li>
                                                <li className={Styles.list_item}>
                                                    <div className={Styles.list_link}>
                                                        초등 5학년
                                                    </div>
                                                </li>
                                                <li className={Styles.list_item}>
                                                    <div className={Styles.list_link}>
                                                        초등 6학년
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <span className={Styles.arr}>
                                            <i />
                                        </span>
                                    </div>
                                </div>
                                {/* [D] 링크가 클릭되면 on 클래스 추가 해주세요 */}
                                <div className={`${Styles.pop_selectbox} ${Styles.on}`}>
                                    <em className={Styles.inpt_label}>
                                        성별 <em className={Styles.chk_point}>(필수)</em>
                                    </em>
                                    {/* [D] on 클래스가 들어오면  imico_pop_select_arr_up 으로 바꿔주세요 */}
                                    <div
                                        className={`${Styles.select_link} ${
                                            Styles.imico_pop_select_arr_up
                                            }`}
                                    >
                                        성별을 선택하세요.
                                    </div>
                                    {/* 공통 툴팁의 화살표 기본 위치는 가운데 입니다. */}
                                    <div className={Styles.tooltip_box}>
                                        <div className={Styles.tooltip_inner}>
                                            <ul className={Styles.select_list}>
                                                <li className={Styles.list_item}>
                                                    <div className={Styles.list_link}>
                                                        남자
                                                    </div>
                                                </li>
                                                <li className={Styles.list_item}>
                                                    <div className={Styles.list_link}>
                                                        여자
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <span className={Styles.arr}>
                                            <i />
                                        </span>
                                    </div>
                                </div>

                                <div className={Styles.pop_inpt_text}>
                                    <label htmlFor="inpt_email" className={Styles.inpt_label}>
                                        이메일 <em className={Styles.chk_point}>(선택)</em>
                                    </label>
                                    <input
                                        type="text"
                                        id="inpt_email"
                                        name="inpt_email"
                                        placeholder="이메일 주소를 입력하세요."
                                    />
                                    <p className={Styles.email_dsc}>
                                        * 비밀번호를 잊은 경우 이메일로 비밀번호를 찾을 수 있습니다.
                                    </p>
                                </div>

                                {/* error 문구 */}
                                {/* error 문구가 뜨면 error 클래스 추가 */}
                                <div className={`${Styles.pop_selectbox} ${Styles.error}`}>
                                    <em className={Styles.inpt_label}>
                                        학년 <em className={Styles.chk_point}>(필수)</em>
                                    </em>
                                    <div
                                        className={`${Styles.select_link} ${
                                            Styles.imico_pop_select_arr_down
                                            }`}
                                    >
                                        학년을 선택하세요.
                                    </div>
                                    {/* 공통 툴팁의 화살표 기본 위치는 가운데 입니다. */}
                                    {/* 툴팁 화살표 위치를 변경하려면 arr 요소에서 margin-left:0;left: 원하는 값 으로 style이 정의 되어야 합니다. */}
                                    <p className={Styles.error_dsc}>* 학년을 선택해주세요.</p>
                                </div>
                                {/* [D] 링크가 클릭되면 on 클래스 추가 해주세요 */}
                                {/* error 문구가 뜨면 error 클래스 추가 */}
                                <div className={`${Styles.pop_selectbox} ${Styles.error}`}>
                                    <em className={Styles.inpt_label}>
                                        성별 <em className={Styles.chk_point}>(필수)</em>
                                    </em>
                                    {/* [D] on 클래스가 들어오면  imico_pop_select_arr_up 으로 바꿔주세요 */}
                                    <a
                                        href="#"
                                        className={`${Styles.select_link} ${
                                            Styles.imico_pop_select_arr_up
                                            }`}
                                    >
                                        성별을 선택하세요.
                                    </a>
                                    <p className={Styles.error_dsc}>* 성별을 선택해주세요.</p>
                                </div>
                                <div className={Styles.pop_inpt_text}>
                                    <label htmlFor="inpt_email" className={Styles.inpt_label}>
                                        이메일 <em className={Styles.chk_point}>(선택)</em>
                                    </label>
                                    <input
                                        type="text"
                                        id="inpt_email"
                                        name="inpt_email"
                                        placeholder="이메일 주소를 입력하세요."
                                    />
                                    <p className={Styles.email_dsc}>
                                        * 비밀번호를 잊은 경우 이메일로 비밀번호를 찾을 수 있습니다.
                                    </p>
                                </div>
                            </div>
                            <div className={Styles.pop_btn_box}>
                                <div>이전</div>
                                <div className={Styles.active}>다음</div>
                            </div>
                        </section>
                    </section>
                </div>

                {/* 회원가입 팝업4 - 이메일이 있는 경우 */}
                <div className={Styles.popup_wrap}>
                    <header className={Styles.pop_header}>
                        <h1>회원가입</h1>
                        <button
                            onClick={this.close}
                            className={`${Styles.btn_back} ${Styles.imbtn_pop_back}`}
                        >
                            <span className={Styles.blind}>뒤로가기</span>
                        </button>
                    </header>
                    <section className={`${Styles.pop_content} ${Styles.login_area}`}>
                        <section className={Styles.login_header}>
                            <h2 className={`${Styles.tit} ${Styles.imico_entrylogo}`}>
                                <span className={Styles.blind}>entry</span>
                            </h2>
                            <p className={Styles.dsc}>
                                소프트웨어의 첫걸음,
                                <br />
                                엔트리에 오신 것을 환영 합니다.
                            </p>
                        </section>
                        <section className={`${Styles.result_cont} ${Styles.imico_signup}`}>
                            <strong className={Styles.result_tit}>
                                회원가입이 완료되었습니다.
                            </strong>
                            <p className={Styles.result_dsc}>
                                입력된 이메일 주소로 인증 메일이 발송되었습니다. <br />
                                이메일 주소를 인증해주세요.
                            </p>
                            <div className={Styles.pop_btn_box}>
                                <div className={Styles.active}>확인</div>
                            </div>
                        </section>
                    </section>
                </div>

                {/* 회원가입 팝업5 - 이메일이 없는 경우 */}
                <div className={Styles.popup_wrap}>
                    <header className={Styles.pop_header}>
                        <h1>회원가입</h1>
                        <button
                            onClick={this.close}
                            className={`${Styles.btn_back} ${Styles.imbtn_pop_back}`}
                        >
                            <span className={Styles.blind}>뒤로가기</span>
                        </button>
                    </header>
                    <section className={`${Styles.pop_content} ${Styles.login_area}`}>
                        <section className={Styles.login_header}>
                            <h2 className={`${Styles.tit} ${Styles.imico_entrylogo}`}>
                                <span className={Styles.blind}>entry</span>
                            </h2>
                            <p className={Styles.dsc}>
                                소프트웨어의 첫걸음,
                                <br />
                                엔트리에 오신 것을 환영 합니다.
                            </p>
                        </section>
                        <section className={`${Styles.result_cont} ${Styles.imico_signup}`}>
                            <strong className={Styles.result_tit}>
                                회원가입이 완료되었습니다.
                            </strong>
                            <div className={Styles.pop_btn_box}>
                                <div className={Styles.active}>확인</div>
                            </div>
                        </section>
                    </section>
                </div>

                {/* 로그인 */}
                <div className={Styles.popup_wrap}>
                    <header className={Styles.pop_header}>
                        <h1>회원가입</h1>
                        <button
                            onClick={this.close}
                            className={`${Styles.btn_back} ${Styles.imbtn_pop_back}`}
                        >
                            <span className={Styles.blind}>뒤로가기</span>
                        </button>
                    </header>
                    <section className={`${Styles.pop_content} ${Styles.login_area}`}>
                        <section className={Styles.login_header}>
                            <h2 className={`${Styles.tit} ${Styles.imico_entrylogo}`}>
                                <span className={Styles.blind}>entry</span>
                            </h2>
                        </section>
                        <section className={Styles.login_cont}>
                            <div className={Styles.input_box}>
                                {/* 로그인 default */}
                                <div className={Styles.pop_inpt_text}>
                                    <label htmlFor="inpt_id" className={Styles.inpt_label}>
                                        아이디 입력 <em className={Styles.chk_point}>(필수)</em>
                                    </label>
                                    <input
                                        type="text"
                                        id="inpt_id"
                                        name="inpt_id"
                                        placeholder="4~20자의 영문 대 소문자, 숫자를 사용하세요."
                                    />
                                </div>
                                <div className={Styles.pop_inpt_text}>
                                    <label htmlFor="inpt_pw1" className={Styles.inpt_label}>
                                        비밀번호 입력 <em className={Styles.chk_point}>(필수)</em>
                                    </label>
                                    <input
                                        type="password"
                                        id="inpt_pw1"
                                        name="inpt_pw1"
                                        placeholder="5~20자의 영문 대 소문자, 숫자를 사용하세요."
                                    />
                                    <div className={Styles.login_chk_box}>
                                        <span className={Styles.pop_checkbox}>
                                            <input
                                                type="checkbox"
                                                id="login_id"
                                                name="login_id"
                                                className={Styles.blind}
                                            />
                                            <label
                                                htmlFor="login_id"
                                                className={Styles.imbtn_pop_checked}
                                            >
                                                <span className={Styles.text}>아이디 저장</span>
                                            </label>
                                        </span>
                                        <span className={Styles.pop_checkbox}>
                                            <input
                                                type="checkbox"
                                                id="login_auto"
                                                name="login_auto"
                                                className={Styles.blind}
                                            />
                                            <label
                                                htmlFor="login_auto"
                                                className={Styles.imbtn_pop_checked}
                                            >
                                                <span className={Styles.text}>자동 로그인</span>
                                            </label>
                                        </span>
                                    </div>
                                </div>

                                {/* 로그인 문자 실패 */}
                                {/* 에러일 경우 error 클래스 추가 */}
                                <div className={`${Styles.pop_inpt_text} ${Styles.error}`}>
                                    <label htmlFor="inpt_id" className={Styles.inpt_label}>
                                        아이디 입력 <em className={Styles.chk_point}>(필수)</em>
                                    </label>
                                    <input type="text" id="inpt_id" name="inpt_id" />
                                </div>
                                {/* 에러일 경우 error 클래스 추가 */}
                                <div className={`${Styles.pop_inpt_text} ${Styles.error}`}>
                                    <label htmlFor="inpt_pw1" className={Styles.inpt_label}>
                                        비밀번호 입력 <em className={Styles.chk_point}>(필수)</em>
                                    </label>
                                    <input type="password" id="inpt_pw1" name="inpt_pw1" />
                                    <div className={Styles.login_chk_box}>
                                        <span className={Styles.pop_checkbox}>
                                            <input
                                                type="checkbox"
                                                id="login_id"
                                                name="login_id"
                                                className={Styles.blind}
                                            />
                                            <label
                                                htmlFor="login_id"
                                                className={Styles.imbtn_pop_checked}
                                            >
                                                <span className={Styles.text}>아이디 저장</span>
                                            </label>
                                        </span>
                                        <span className={Styles.pop_checkbox}>
                                            <input
                                                type="checkbox"
                                                id="login_auto"
                                                name="login_auto"
                                                className={Styles.blind}
                                            />
                                            <label
                                                htmlFor="login_auto"
                                                className={Styles.imbtn_pop_checked}
                                            >
                                                <span className={Styles.text}>자동 로그인</span>
                                            </label>
                                        </span>
                                        <p className={Styles.error_dsc}>
                                            * 아이디 또는 비밀번호를 잘못 입력하셨습니다.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={Styles.pop_btn_box}>
                                <div className={Styles.active}>로그인</div>
                            </div>
                        </section>
                        <div className={Styles.find_log}>
                            <div>아이디, 비밀번호 찾기</div>
                            <div>회원가입하기</div>
                        </div>
                    </section>
                </div>

                {/* 툴팁 */}
                <div className={Styles.popup_wrap}>
                    <header className={Styles.pop_header}>
                        <h1>공통 툴팁</h1>
                        <button
                            onClick={this.close}
                            className={`${Styles.btn_back} ${Styles.imbtn_pop_back}`}
                        >
                            <span className={Styles.blind}>뒤로가기</span>
                        </button>
                    </header>
                    <section className={`${Styles.pop_content} ${Styles.login_area}`}>
                        <section className={Styles.login_header}>
                            <h2 className={`${Styles.tit} ${Styles.imico_entrylogo}`}>
                                <span className={Styles.blind}>entry</span>
                            </h2>
                            <p className={Styles.dsc}>
                                소프트웨어의 첫걸음,
                                <br />
                                엔트리에 오신 것을 환영 합니다.
                            </p>
                        </section>
                        {/* 마크업 확인용 더미 스타일 입니다. */}
                        <section style={{ position: 'relative', height: '3000px' }}>
                            {/* 툴팁의 가로값은 tooltip_box에서 style로 적용하면 됩니다. */}
                            <div className={Styles.tooltip_box} style={{ width: '360px' }}>
                                {/* padding은 마크업 확인용 더미 스타일 입니다. */}
                                <div className={Styles.tooltip_inner} style={{ padding: '10px' }}>
                                    기본 툴팁은 화살표가 가운데에 존재.
                                    <br />
                                    <br />
                                    툴팁의 넓이값은 tooltip_box에서 style: width <br />
                                    위치는 left, top 값으로 위치 조정. <br />
                                    tooltip_inner는 각각 ui 스타일에 맞게 css 분기용 임.
                                </div>
                                <span className={Styles.arr}>
                                    <i />
                                </span>
                            </div>

                            <div
                                className={Styles.tooltip_box}
                                style={{ width: '400px', left: '400px' }}
                            >
                                {/* 마크업 확인용 더미 스타일 입니다. */}
                                <div className={Styles.tooltip_inner} style={{ padding: '10px' }}>
                                    화살표 위치 변경은 <br />
                                    arr 클래스에 free 클래스 추가, <br />
                                    style= "left: 값" 으로 조정
                                </div>
                                <span
                                    className={`${Styles.arr} ${Styles.free}`}
                                    style={{ left: '20px' }}
                                >
                                    <i />
                                </span>
                            </div>

                            <div className={`${Styles.tooltip_box} ${Styles.down}`} style={{ width: '400px', left: '0', top: '200px' }}>
                                {/* padding은 마크업 확인용 더미 스타일 입니다. */}
                                <div className={Styles.tooltip_inner} style={{ padding: '10px' }}>
                                    아래쪽 화살표는 tooltip_box에 down 클래스 추가<br />
                                    나머지 위치 조정은 동일함.
                                </div>
                                <span className={Styles.arr}>
                                    <i />
                                </span>
                            </div>

                            <div className={`${Styles.tooltip_box} ${Styles.down}`} style={{ width: '400px', left: '420px', top: '200px' }}>
                                {/* padding은 마크업 확인용 더미 스타일 입니다. */}
                                <div
                                    className={Styles.tooltip_inner}
                                    style={{ padding: '10px', backgroundColor: 'orange' }}
                                >
                                    배경색은 backgroundColor 값으로 조정 <br />
                                    배경색 변경은 arr 안에 있는 i 요소에도 동일하게 적용해야함.
                                </div>
                                <span className={Styles.arr}>
                                    <i style={{ backgroundColor: 'orange' }} />
                                </span>
                            </div>
                            {/* 컬러피커 툴팁 */}
                            <div
                                className={`${Styles.tooltip_box} ${Styles.color_picker}`}
                                style={{ left: '0', top: '300px' }}
                            >
                                <div className={Styles.tooltip_inner}>
                                    <div className={Styles.color_box}>
                                        {/* 하단 RGB 색상값을 style로 넣어주세요 */}
                                        {/* RGB면  backgroundColor:rgb(0, 0, 0) */}
                                        {/* 색상, 채도, 명도 값이면 backgroundColor:hsl(0, 0%, 0%) */}
                                        {/*
                                            색상 선택이 완료되면  imico_pop_circle_check_on 클래스 추가
                                            색상이 선택이 되지 않거나 투명일 경우 imico_pop_color_uncheck imico_pop_circle_check 추가
                                        */}
                                        <span className={`${Styles.color} ${Styles.imico_pop_circle_check_on}`} style={{ backgroundColor: 'hsl(290, 100%, 50%)' }}>&nbsp;</span>
                                        <ul className={Styles.color_list}>
                                            <li className={Styles.item}>
                                                <label htmlFor="red">빨강(R)</label>
                                                <input type="text" id="red" name="red" />
                                                <div className={Styles.graph} />
                                            </li>
                                            <li className={Styles.item}>
                                                <label htmlFor="green">녹색(G)</label>
                                                <input type="text" id="green" name="green" />
                                            </li>
                                            <li className={Styles.item}>
                                                <label htmlFor="blue">파랑(B)</label>
                                                <input type="text" id="blue" name="blue" />
                                            </li>
                                        </ul>
                                        <div className={`${Styles.btn_picker} ${Styles.imbtn_picker_off}`}>컬러피커 열기</div>
                                    </div>
                                    <div className={Styles.color_graph}>
                                        <ul className={Styles.graph_list}>
                                            <li className={Styles.item}>
                                                <label htmlFor="hue">색상</label>
                                                <input type="text" id="hue" name="hue" />
                                                <div className={Styles.graph_box}>
                                                    {/* 그래프 slider가 선택되면 on 클래스 추가 */}
                                                    {/* slider 이동할 수 있도록  left값 조절 해주세요 */}
                                                    <span className={`${Styles.slider} ${Styles.btn_pop_color_slide}`} style={{ left: 10 + 'px' }}>&nbsp;</span>
                                                    <div className={Styles.bar}>
                                                        {/* 더미용 이미지 입니다. 나중에 여기에 이미지 or svg 넣어주세요 */}
                                                        <img
                                                            src="https://cdn.tutsplus.com/active/uploads/legacy/tuts/008_colorPicker/Tutorial/8.jpg"
                                                            width="100%"
                                                            style={{ maxHeight: 100 + '%' }}
                                                        />
                                                    </div>
                                                </div>
                                            </li>
                                            <li className={Styles.item}>
                                                <label htmlFor="saturation">채도</label>
                                                <input
                                                    type="text"
                                                    id="saturation"
                                                    name="saturation"
                                                />
                                                <div className={Styles.graph_box}>
                                                    {/* 그래프 slider가 선택되면 on 클래스 추가 */}
                                                    {/* slider 이동할 수 있도록  left값 조절 해주세요 */}
                                                    <span
                                                        className={`${Styles.slider} ${
                                                            Styles.btn_pop_color_slide
                                                            } ${Styles.on}`}
                                                        style={{ left: 100 + 'px' }}
                                                    >
                                                        &nbsp;
                                                    </span>
                                                    <div className={Styles.bar}>
                                                        {/* 더미용 이미지 입니다. 나중에 여기에 이미지 or svg 넣어주세요 */}
                                                        <img
                                                            src="https://cdn.tutsplus.com/active/uploads/legacy/tuts/008_colorPicker/Tutorial/8.jpg"
                                                            width="100%"
                                                            style={{ maxHeight: 100 + '%' }}
                                                        />
                                                    </div>
                                                </div>
                                            </li>
                                            <li className={Styles.item}>
                                                <label htmlFor="saturation">명도</label>
                                                <input
                                                    type="text"
                                                    id="lightness"
                                                    name="lightness"
                                                />
                                                <div className={Styles.graph_box}>
                                                    {/* 그래프 slider가 선택되면 on 클래스 추가 */}
                                                    {/* slider 이동할 수 있도록  left값 조절 해주세요 */}
                                                    <span
                                                        className={`${Styles.slider} ${
                                                            Styles.btn_pop_color_slide
                                                            }`}
                                                        style={{ left: 0 + 'px' }}
                                                    >
                                                        &nbsp;
                                                    </span>
                                                    <div className={Styles.bar}>
                                                        {/* 더미용 이미지 입니다. 나중에 여기에 이미지 or svg 넣어주세요 */}
                                                        <img
                                                            src="https://cdn.tutsplus.com/active/uploads/legacy/tuts/008_colorPicker/Tutorial/8.jpg"
                                                            width="100%"
                                                            style={{ maxHeight: 100 + '%' }}
                                                        />
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* left 값 조절로 화살표 위치 잡을 수 있습니다. */}
                                <span
                                    className={`${Styles.arr} ${Styles.free}`}
                                    style={{ left: 101 + 'px' }}
                                >
                                    <i />
                                </span>
                            </div>

                            {/* 컬러피커 툴팁2 */}
                            <div
                                className={`${Styles.tooltip_box} ${Styles.color_picker}`}
                                style={{ left: '450px', top: '300px' }}
                            >
                                <div className={Styles.tooltip_inner}>
                                    <div className={Styles.color_box}>
                                        {/* 하단 RGB 색상값을 style로 넣어주세요 */}
                                        {/* RGB면  backgroundColor:rgb(0, 0, 0) */}
                                        {/* 색상, 채도, 명도 값이면 backgroundColor:hsl(0, 0%, 0%) */}
                                        {/* 
                                            색상 선택이 완료되면  imico_pop_circle_check_on 클래스 추가 
                                            색상이 선택이 되지 않거나 투명일 경우 imico_pop_color_uncheck imico_pop_circle_check 추가 
                                        */}
                                        <span
                                            className={`${Styles.color} ${
                                                Styles.imico_pop_color_uncheck
                                                } ${Styles.imico_pop_circle_check}`}
                                        >
                                            &nbsp;
                                        </span>
                                        <ul className={Styles.color_list}>
                                            {/* 컬러가 선택되지 않았을 경우 disabled 추가  */}
                                            <li className={`${Styles.item} ${Styles.disabled}`}>
                                                <label htmlFor="red">빨강(R)</label>
                                                {/* 컬러가 선택되지 않았을 경우 disabled 추가  */}
                                                <input type="text" id="red" name="red" disabled />
                                                <div className={Styles.graph} />
                                            </li>
                                            {/* 컬러가 선택되지 않았을 경우 disabled 추가  */}
                                            <li className={`${Styles.item} ${Styles.disabled}`}>
                                                <label htmlFor="green">녹색(G)</label>
                                                {/* 컬러가 선택되지 않았을 경우 disabled 추가  */}
                                                <input
                                                    type="text"
                                                    id="green"
                                                    name="green"
                                                    disabled
                                                />
                                            </li>
                                            {/* 컬러가 선택되지 않았을 경우 disabled 추가  */}
                                            <li className={`${Styles.item} ${Styles.disabled}`}>
                                                <label htmlFor="blue">파랑(B)</label>
                                                {/* 컬러가 선택되지 않았을 경우 disabled 추가  */}
                                                <input type="text" id="blue" name="blue" disabled />
                                            </li>
                                        </ul>
                                        <div
                                            className={`${Styles.btn_picker} ${
                                                Styles.imbtn_picker
                                                }`}
                                        >
                                            컬러피커 열기
                                        </div>
                                    </div>
                                    <div className={Styles.color_graph}>
                                        <ul className={Styles.graph_list}>
                                            {/* 컬러가 선택되지 않았을 경우 disabled 추가  */}
                                            <li className={`${Styles.item} ${Styles.disabled}`}>
                                                <label htmlFor="hue">색상</label>
                                                {/* 컬러가 선택되지 않았을 경우 disabled 추가  */}
                                                <input type="text" id="hue" name="hue" disabled />
                                                <div className={Styles.graph_box}>
                                                    {/* 그래프 slider가 선택되면 on 클래스 추가 */}
                                                    {/* slider 이동할 수 있도록  left값 조절 해주세요 */}
                                                    <span
                                                        className={`${Styles.slider} ${
                                                            Styles.btn_pop_color_slide
                                                            }`}
                                                        style={{ left: 10 + 'px' }}
                                                    >
                                                        &nbsp;
                                                    </span>
                                                    <div className={Styles.bar}>
                                                        {/* 더미용 이미지 입니다. 나중에 여기에 이미지 or svg 넣어주세요 */}
                                                        <img
                                                            src="https://cdn.tutsplus.com/active/uploads/legacy/tuts/008_colorPicker/Tutorial/8.jpg"
                                                            width="100%"
                                                            style={{ maxHeight: 100 + '%' }}
                                                        />
                                                    </div>
                                                </div>
                                            </li>
                                            {/* 컬러가 선택되지 않았을 경우 disabled 추가  */}
                                            <li className={`${Styles.item} ${Styles.disabled}`}>
                                                <label htmlFor="saturation">채도</label>
                                                {/* 컬러가 선택되지 않았을 경우 disabled 추가  */}
                                                <input
                                                    type="text"
                                                    id="saturation"
                                                    name="saturation"
                                                    disabled
                                                />
                                                <div className={Styles.graph_box}>
                                                    {/* 그래프 slider가 선택되면 on 클래스 추가 */}
                                                    {/* slider 이동할 수 있도록  left값 조절 해주세요 */}
                                                    <span
                                                        className={`${Styles.slider} ${
                                                            Styles.btn_pop_color_slide
                                                            }`}
                                                        style={{ left: 100 + 'px' }}
                                                    >
                                                        &nbsp;
                                                    </span>
                                                    <div className={Styles.bar}>
                                                        {/* 더미용 이미지 입니다. 나중에 여기에 이미지 or svg 넣어주세요 */}
                                                        <img
                                                            src="https://cdn.tutsplus.com/active/uploads/legacy/tuts/008_colorPicker/Tutorial/8.jpg"
                                                            width="100%"
                                                            style={{ maxHeight: 100 + '%' }}
                                                        />
                                                    </div>
                                                </div>
                                            </li>
                                            {/* 컬러가 선택되지 않았을 경우 disabled 추가  */}
                                            <li className={`${Styles.item} ${Styles.disabled}`}>
                                                <label htmlFor="saturation">명도</label>
                                                {/* 컬러가 선택되지 않았을 경우 disabled 추가  */}
                                                <input
                                                    type="text"
                                                    id="lightness"
                                                    name="lightness"
                                                    disabled
                                                />
                                                <div className={Styles.graph_box}>
                                                    {/* 그래프 slider가 선택되면 on 클래스 추가 */}
                                                    {/* slider 이동할 수 있도록  left값 조절 해주세요 */}
                                                    <span className={`${Styles.slider} ${Styles.btn_pop_color_slide}`} style={{ left: 0 + 'px' }}>&nbsp;</span>
                                                    <div className={Styles.bar}>
                                                        {/* 더미용 이미지 입니다. 나중에 여기에 이미지 or svg 넣어주세요 */}
                                                        <img src="https://cdn.tutsplus.com/active/uploads/legacy/tuts/008_colorPicker/Tutorial/8.jpg" width="100%" style={{ maxHeight: 100 + '%' }} />
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* left 값 조절로 화살표 위치 잡을 수 있습니다. */}
                                <span className={`${Styles.arr} ${Styles.free}`} style={{ left: 101 + 'px' }}><i></i></span>
                            </div>

                            {/* 컬러피커 툴팁2 */}
                            <div className={`${Styles.tooltip_box} ${Styles.color_picker}`} style={{ left: '450px', top: '300px' }}>
                                <div className={Styles.tooltip_inner}>
                                    <div className={Styles.color_box}>
                                        {/* 하단 RGB 색상값을 style로 넣어주세요 */}
                                        {/* RGB면  backgroundColor:rgb(0, 0, 0) */}
                                        {/* 색상, 채도, 명도 값이면 backgroundColor:hsl(0, 0%, 0%) */}
                                        {/*
                                            색상 선택이 완료되면  imico_pop_circle_check_on 클래스 추가
                                            색상이 선택이 되지 않거나 투명일 경우 imico_pop_color_uncheck imico_pop_circle_check 추가
                                        */}
                                        <span className={`${Styles.color} ${Styles.imico_pop_color_uncheck} ${Styles.imico_pop_circle_check}`}>&nbsp;</span>
                                        <ul className={Styles.color_list}>
                                            {/* 컬러가 선택되지 않았을 경우 disabled 추가  */}
                                            <li className={`${Styles.item} ${Styles.disabled}`}>
                                                <label htmlFor="red">빨강(R)</label>
                                                {/* 컬러가 선택되지 않았을 경우 disabled 추가  */}
                                                <input type="text" id="red" name="red" disabled />
                                                <div className={Styles.graph}>
                                                </div>
                                            </li>
                                            {/* 컬러가 선택되지 않았을 경우 disabled 추가  */}
                                            <li className={`${Styles.item} ${Styles.disabled}`}>
                                                <label htmlFor="green">녹색(G)</label>
                                                {/* 컬러가 선택되지 않았을 경우 disabled 추가  */}
                                                <input type="text" id="green" name="green" disabled />
                                            </li>
                                            {/* 컬러가 선택되지 않았을 경우 disabled 추가  */}
                                            <li className={`${Styles.item} ${Styles.disabled}`}>
                                                <label htmlFor="blue">파랑(B)</label>
                                                {/* 컬러가 선택되지 않았을 경우 disabled 추가  */}
                                                <input type="text" id="blue" name="blue" disabled />
                                            </li>
                                        </ul>
                                        <div className={`${Styles.btn_picker} ${Styles.imbtn_picker}`}>컬러피커 열기</div>
                                    </div>
                                    <div className={Styles.color_graph}>
                                        <ul className={Styles.graph_list}>
                                            {/* 컬러가 선택되지 않았을 경우 disabled 추가  */}
                                            <li className={`${Styles.item} ${Styles.disabled}`}>
                                                <label htmlFor="hue">색상</label>
                                                {/* 컬러가 선택되지 않았을 경우 disabled 추가  */}
                                                <input type="text" id="hue" name="hue" disabled />
                                                <div className={Styles.graph_box}>
                                                    {/* 그래프 slider가 선택되면 on 클래스 추가 */}
                                                    {/* slider 이동할 수 있도록  left값 조절 해주세요 */}
                                                    <span className={`${Styles.slider} ${Styles.btn_pop_color_slide}`} style={{ left: 10 + 'px' }}>&nbsp;</span>
                                                    <div className={Styles.bar}>
                                                        {/* 더미용 이미지 입니다. 나중에 여기에 이미지 or svg 넣어주세요 */}
                                                        <img src="https://cdn.tutsplus.com/active/uploads/legacy/tuts/008_colorPicker/Tutorial/8.jpg" width="100%" style={{ maxHeight: 100 + '%' }} />
                                                    </div>
                                                </div>

                                            </li>
                                            {/* 컬러가 선택되지 않았을 경우 disabled 추가  */}
                                            <li className={`${Styles.item} ${Styles.disabled}`}>
                                                <label htmlFor="saturation">채도</label>
                                                {/* 컬러가 선택되지 않았을 경우 disabled 추가  */}
                                                <input type="text" id="saturation" name="saturation" disabled />
                                                <div className={Styles.graph_box}>
                                                    {/* 그래프 slider가 선택되면 on 클래스 추가 */}
                                                    {/* slider 이동할 수 있도록  left값 조절 해주세요 */}
                                                    <span className={`${Styles.slider} ${Styles.btn_pop_color_slide}`} style={{ left: 100 + 'px' }}>&nbsp;</span>
                                                    <div className={Styles.bar}>
                                                        {/* 더미용 이미지 입니다. 나중에 여기에 이미지 or svg 넣어주세요 */}
                                                        <img src="https://cdn.tutsplus.com/active/uploads/legacy/tuts/008_colorPicker/Tutorial/8.jpg" width="100%" style={{ maxHeight: 100 + '%' }} />
                                                    </div>
                                                </div>
                                            </li>
                                            {/* 컬러가 선택되지 않았을 경우 disabled 추가  */}
                                            <li className={`${Styles.item} ${Styles.disabled}`}>
                                                <label htmlFor="saturation">명도</label>
                                                {/* 컬러가 선택되지 않았을 경우 disabled 추가  */}
                                                <input type="text" id="lightness" name="lightness" disabled />
                                                <div className={Styles.graph_box}>
                                                    {/* 그래프 slider가 선택되면 on 클래스 추가 */}
                                                    {/* slider 이동할 수 있도록  left값 조절 해주세요 */}
                                                    <span className={`${Styles.slider} ${Styles.btn_pop_color_slide}`} style={{ left: 0 + 'px' }}>&nbsp;</span>
                                                    <div className={Styles.bar}>
                                                        {/* 더미용 이미지 입니다. 나중에 여기에 이미지 or svg 넣어주세요 */}
                                                        <img
                                                            src="https://cdn.tutsplus.com/active/uploads/legacy/tuts/008_colorPicker/Tutorial/8.jpg"
                                                            width="100%"
                                                            style={{ maxHeight: 100 + '%' }}
                                                        />
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* left 값 조절로 화살표 위치 잡을 수 있습니다. */}
                                <span
                                    className={`${Styles.arr} ${Styles.free}`}
                                    style={{ left: 101 + 'px' }}
                                >
                                    <i />
                                </span>
                            </div>

                            {/* 타임 툴팁 */}
                            <div
                                className={`${Styles.tooltip_box} ${Styles.clock_box}`}
                                style={{ left: '860px', top: '0' }}
                            >
                                <div className={Styles.tooltip_inner}>
                                    <div className={Styles.clock_board}>
                                        <div
                                            className={Styles.clock}
                                            style={{ background: 'orange' }}
                                        >
                                            이곳에 시계를 놔주세요.
                                            <br />
                                            개발 해주실때 style 제거 해주세요.
                                        </div>
                                    </div>
                                    <div className={Styles.time_board}>
                                        <div className={Styles.btn_cnt}>
                                            7
                                        </div>
                                        <div className={Styles.btn_cnt}>
                                            8
                                        </div>
                                        <div className={Styles.btn_cnt}>
                                            9
                                        </div>
                                        <div className={Styles.btn_cnt}>
                                            4
                                        </div>
                                        <div className={Styles.btn_cnt}>
                                            5
                                        </div>
                                        <div className={Styles.btn_cnt}>
                                            6
                                        </div>
                                        <div className={Styles.btn_cnt}>
                                            1
                                        </div>
                                        <div className={Styles.btn_cnt}>
                                            2
                                        </div>
                                        <div className={Styles.btn_cnt}>
                                            3
                                        </div>
                                        <div className={Styles.btn_cnt}>
                                            -
                                        </div>
                                        <div className={Styles.btn_cnt}>
                                            0
                                        </div>
                                        <div className={Styles.btn_cnt}>
                                            .
                                        </div>
                                        <div
                                            className={`${Styles.btn_cnt} ${Styles.btn_del} ${
                                                Styles.imico_pop_key_del
                                                }`}
                                        >
                                            <span className={Styles.blind}> 지우기</span>
                                        </div>
                                    </div>
                                </div>
                                {/* left 값 조절로 화살표 위치 잡을 수 있습니다. */}
                                <span className={Styles.arr}>
                                    <i />
                                </span>
                            </div>

                            {/* 타임 툴팁 - 시계만 있는 경우 */}
                            <div
                                className={`${Styles.tooltip_box} ${Styles.clock_only}`}
                                style={{ left: '860px', top: '330px' }}
                            >
                                <div className={Styles.tooltip_inner}>
                                    <div className={Styles.clock_board}>
                                        <div
                                            className={Styles.clock}
                                            style={{ background: 'orange' }}
                                        >
                                            이곳에 시계를 놔주세요.
                                            <br />
                                            개발 해주실때 style 제거 해주세요.
                                        </div>
                                    </div>
                                </div>
                                {/* left 값 조절로 화살표 위치 잡을 수 있습니다. */}
                                <span className={Styles.arr}>
                                    <i />
                                </span>
                            </div>

                            {/* 타임 툴팁 - 패드만 있는 경우 */}
                            <div
                                className={`${Styles.tooltip_box} ${Styles.pad_only}`}
                                style={{ left: '1080px', top: '330px' }}
                            >
                                <div className={Styles.tooltip_inner}>
                                    <div className={Styles.time_board}>
                                        <div className={Styles.btn_cnt}>
                                            7
                                        </div>
                                        <div className={Styles.btn_cnt}>
                                            8
                                        </div>
                                        <div className={Styles.btn_cnt}>
                                            9
                                        </div>
                                        <div className={Styles.btn_cnt}>
                                            4
                                        </div>
                                        <div className={Styles.btn_cnt}>
                                            5
                                        </div>
                                        <div className={Styles.btn_cnt}>
                                            6
                                        </div>
                                        <div className={Styles.btn_cnt}>
                                            1
                                        </div>
                                        <div className={Styles.btn_cnt}>
                                            2
                                        </div>
                                        <div className={Styles.btn_cnt}>
                                            3
                                        </div>
                                        <div className={Styles.btn_cnt}>
                                            -
                                        </div>
                                        <div className={Styles.btn_cnt}>
                                            0
                                        </div>
                                        <div className={Styles.btn_cnt}>
                                            .
                                        </div>
                                        <div
                                            className={`${Styles.btn_cnt} ${Styles.btn_del} ${
                                                Styles.imico_pop_key_del
                                                }`}
                                        >
                                            <span className={Styles.blind}> 지우기</span>
                                        </div>
                                    </div>
                                </div>
                                {/* left 값 조절로 화살표 위치 잡을 수 있습니다. */}
                                <span className={Styles.arr}>
                                    <i />
                                </span>
                            </div>

                            {/* 타임 툴팁 */}
                            <div className={`${Styles.tooltip_box} ${Styles.clock_box}`} style={{ left: '860px', top: '0' }}>
                                <div className={Styles.tooltip_inner}>
                                    <div className={Styles.clock_board}>
                                        <div className={Styles.clock} style={{ background: 'orange' }} >
                                            이곳에 시계를 놔주세요.<br />
                                            개발 해주실때 style 제거 해주세요.
                                        </div>
                                    </div>
                                    <div className={Styles.time_board}>
                                        <div className={Styles.btn_cnt}>7</div>
                                        <div className={Styles.btn_cnt}>8</div>
                                        <div className={Styles.btn_cnt}>9</div>
                                        <div className={Styles.btn_cnt}>4</div>
                                        <div className={Styles.btn_cnt}>5</div>
                                        <div className={Styles.btn_cnt}>6</div>
                                        <div className={Styles.btn_cnt}>1</div>
                                        <div className={Styles.btn_cnt}>2</div>
                                        <div className={Styles.btn_cnt}>3</div>
                                        <div className={Styles.btn_cnt}>-</div>
                                        <div className={Styles.btn_cnt}>0</div>
                                        <div className={Styles.btn_cnt}>.</div>
                                        <div className={`${Styles.btn_cnt} ${Styles.btn_del} ${Styles.imico_pop_key_del}`}>
                                            <span className={Styles.blind}> 지우기</span>
                                        </div>
                                    </div>
                                </div>
                                {/* left 값 조절로 화살표 위치 잡을 수 있습니다. */}
                                <span className={Styles.arr}><i></i></span>
                            </div>

                            {/* 타임 툴팁 - 시계만 있는 경우 */}
                            <div className={`${Styles.tooltip_box} ${Styles.clock_only}`} style={{ left: '860px', top: '330px' }}>
                                <div className={Styles.tooltip_inner}>
                                    <div className={Styles.clock_board}>
                                        <div className={Styles.clock} style={{ background: 'orange' }} >
                                            이곳에 시계를 놔주세요.<br />
                                            개발 해주실때 style 제거 해주세요.
                                        </div>
                                    </div>
                                </div>
                                {/* left 값 조절로 화살표 위치 잡을 수 있습니다. */}
                                <span className={Styles.arr}><i></i></span>
                            </div>

                            {/* 타임 툴팁 - 패드만 있는 경우 */}
                            <div className={`${Styles.tooltip_box} ${Styles.pad_only}`} style={{ left: '1080px', top: '330px' }}>
                                <div className={Styles.tooltip_inner}>
                                    <div className={Styles.time_board}>
                                        <div className={Styles.btn_cnt}>7</div>
                                        <div className={Styles.btn_cnt}>8</div>
                                        <div className={Styles.btn_cnt}>9</div>
                                        <div className={Styles.btn_cnt}>4</div>
                                        <div className={Styles.btn_cnt}>5</div>
                                        <div className={Styles.btn_cnt}>6</div>
                                        <div className={Styles.btn_cnt}>1</div>
                                        <div className={Styles.btn_cnt}>2</div>
                                        <div className={Styles.btn_cnt}>3</div>
                                        <div className={Styles.btn_cnt}>-</div>
                                        <div className={Styles.btn_cnt}>0</div>
                                        <div className={Styles.btn_cnt}>.</div>
                                        <div href="#" className={`${Styles.btn_cnt} ${Styles.btn_del} ${Styles.imico_pop_key_del}`}>
                                            <span className={Styles.blind}> 지우기</span>
                                        </div>
                                    </div>
                                </div>
                                {/* left 값 조절로 화살표 위치 잡을 수 있습니다. */}
                                <span className={Styles.arr}><i></i></span>
                            </div>
                        </section>
                    </section>
                </div>

                {/* 나의 작품 - 나의 작품 */}
                <div className={Styles.popup_wrap}>
                    <header className={Styles.pop_header}>
                        <h1>나의 작품</h1>
                        <button
                            onClick={this.close}
                            className={`${Styles.btn_back} ${Styles.imbtn_pop_back}`}
                        >
                            <span className={Styles.blind}>뒤로가기</span>
                        </button>
                    </header>
                    <div className={Styles.section_navi}>
                        <ul className={Styles.list}>
                            <li className={Styles.on}>
                                <div>나의 작품</div>
                            </li>
                            <li>
                                <div>관심 작품</div>
                            </li>

                        </ul>
                        <div className={Styles.art_sel_area}>
                            <div className={`${Styles.pop_selectbox} ${Styles.on}`}>
                                <div
                                    className={`${Styles.select_link} ${
                                        Styles.imico_pop_select_arr_down
                                        }`}
                                    title="모든 작품"
                                >
                                    모든 작품
                                </div>
                            </div>
                            <div className={Styles.pop_selectbox}>
                                <div
                                    className={`${Styles.select_link} ${
                                        Styles.imico_pop_select_arr_down
                                        }`}
                                    title="최신순"
                                >
                                    최신순
                                </div>
                            </div>
                            <div className={Styles.pop_selectbox}>
                                <div
                                    className={`${Styles.select_link} ${
                                        Styles.imico_pop_select_arr_down
                                        }`}
                                    title="전체기간"
                                >
                                    전체기간
                                </div>
                            </div>
                            <div className={Styles.srch_box}>
                                <label htmlFor="srch">
                                    <input type="text" id="srch" name="" />
                                </label>
                                <button
                                    type="button"
                                    className={`${Styles.btn_srch} ${Styles.imbtn_pop_srch}`}
                                >
                                    <span className={Styles.blind}>검색</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <section className={`${Styles.pop_content} ${Styles.art_content}`}>
                        <div className={Styles.section_cont}>
                            {/* [D] 메뉴 카테고리 선택에 따라 텍스트 변경  */}
                            <h2 className={Styles.blind}>나의 작품</h2>
                            <strong className={Styles.list_sjt}>전체 (9999)</strong>
                            <div className={Styles.scroll_box}>
                                <ul className={Styles.list}>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb} style={{
                                                backgroundImage:
                                                    "url('https://media.kappamoto.com/AK-Moto/foto/BMW_F700GS%20(13-16)_lato_K.jpg')",
                                            }}>
                                                <div className={Styles.info_bar}>
                                                    {`${Styles.view} ${Styles.imico_pop_info_view}`}
                                                    <span className={`${Styles.view} ${Styles.imico_pop_info_view}`}>9999</span>
                                                    <span className={`${Styles.like} ${Styles.imico_pop_info_like}`}>9999</span>
                                                    <span className={`${Styles.cmt} ${Styles.imico_pop_info_cmt}`}>9999</span>
                                                </div>
                                            </div>
                                            <div className={Styles.info_box}>
                                                <div className={Styles.user_thmb} style={{
                                                    backgroundImage:
                                                        "url('https://media.kappamoto.com/AK-Moto/foto/BMW_F700GS%20(13-16)_lato_K.jpg')",
                                                }}></div>
                                                <em className={Styles.tit}>90% 펜 스네이크 케익이 정말 맛이 있습니다.</em>
                                                <span className={Styles.from}>
                                                    from<em>atom 10150</em>
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb} style={{
                                                backgroundImage:
                                                    "url('https://media.kappamoto.com/AK-Moto/foto/BMW_F700GS%20(13-16)_lato_K.jpg')",
                                            }}>
                                                <div className={Styles.info_bar}>
                                                    {`${Styles.view} ${Styles.imico_pop_info_view}`}
                                                    <span className={`${Styles.view} ${Styles.imico_pop_info_view}`}>9999</span>
                                                    <span className={`${Styles.like} ${Styles.imico_pop_info_like}`}>9999</span>
                                                    <span className={`${Styles.cmt} ${Styles.imico_pop_info_cmt}`}>9999</span>
                                                </div>
                                            </div>
                                            <div className={Styles.info_box}>
                                                <div className={Styles.user_thmb} style={{
                                                    backgroundImage:
                                                        "url('https://media.kappamoto.com/AK-Moto/foto/BMW_F700GS%20(13-16)_lato_K.jpg')",
                                                }}></div>
                                                <em className={Styles.tit}>90% 펜 스네이크 케익이 정말 맛이 있습니다.</em>
                                                <span className={Styles.from}>
                                                    from<em>atom 10150</em>
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb} style={{
                                                backgroundImage:
                                                    "url('https://media.kappamoto.com/AK-Moto/foto/BMW_F700GS%20(13-16)_lato_K.jpg')",
                                            }}>
                                                <div className={Styles.info_bar}>
                                                    {`${Styles.view} ${Styles.imico_pop_info_view}`}
                                                    <span className={`${Styles.view} ${Styles.imico_pop_info_view}`}>9999</span>
                                                    <span className={`${Styles.like} ${Styles.imico_pop_info_like}`}>9999</span>
                                                    <span className={`${Styles.cmt} ${Styles.imico_pop_info_cmt}`}>9999</span>
                                                </div>
                                            </div>
                                            <div className={Styles.info_box}>
                                                <div className={Styles.user_thmb} style={{
                                                    backgroundImage:
                                                        "url('https://media.kappamoto.com/AK-Moto/foto/BMW_F700GS%20(13-16)_lato_K.jpg')",
                                                }}></div>
                                                <em className={Styles.tit}>90% 펜 스네이크 케익이 정말 맛이 있습니다.</em>
                                                <span className={Styles.from}>
                                                    from<em>atom 10150</em>
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb} style={{
                                                backgroundImage:
                                                    "url('https://media.kappamoto.com/AK-Moto/foto/BMW_F700GS%20(13-16)_lato_K.jpg')",
                                            }}>
                                                <div className={Styles.info_bar}>
                                                    {`${Styles.view} ${Styles.imico_pop_info_view}`}
                                                    <span className={`${Styles.view} ${Styles.imico_pop_info_view}`}>9999</span>
                                                    <span className={`${Styles.like} ${Styles.imico_pop_info_like}`}>9999</span>
                                                    <span className={`${Styles.cmt} ${Styles.imico_pop_info_cmt}`}>9999</span>
                                                </div>
                                            </div>
                                            <div className={Styles.info_box}>
                                                <div className={Styles.user_thmb} style={{
                                                    backgroundImage:
                                                        "url('https://media.kappamoto.com/AK-Moto/foto/BMW_F700GS%20(13-16)_lato_K.jpg')",
                                                }}></div>
                                                <em className={Styles.tit}>90% 펜 스네이크 케익이 정말 맛이 있습니다.</em>
                                                <span className={Styles.from}>
                                                    from<em>atom 10150</em>
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb} style={{
                                                backgroundImage:
                                                    "url('https://media.kappamoto.com/AK-Moto/foto/BMW_F700GS%20(13-16)_lato_K.jpg')",
                                            }}>
                                                <div className={Styles.info_bar}>
                                                    {`${Styles.view} ${Styles.imico_pop_info_view}`}
                                                    <span className={`${Styles.view} ${Styles.imico_pop_info_view}`}>9999</span>
                                                    <span className={`${Styles.like} ${Styles.imico_pop_info_like}`}>9999</span>
                                                    <span className={`${Styles.cmt} ${Styles.imico_pop_info_cmt}`}>9999</span>
                                                </div>
                                            </div>
                                            <div className={Styles.info_box}>
                                                <div className={Styles.user_thmb} style={{
                                                    backgroundImage:
                                                        "url('https://media.kappamoto.com/AK-Moto/foto/BMW_F700GS%20(13-16)_lato_K.jpg')",
                                                }}></div>
                                                <em className={Styles.tit}>90% 펜 스네이크 케익이 정말 맛이 있습니다.</em>
                                                <span className={Styles.from}>
                                                    from<em>atom 10150</em>
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb} style={{
                                                backgroundImage:
                                                    "url('https://media.kappamoto.com/AK-Moto/foto/BMW_F700GS%20(13-16)_lato_K.jpg')",
                                            }}>
                                                <div className={Styles.info_bar}>
                                                    {`${Styles.view} ${Styles.imico_pop_info_view}`}
                                                    <span className={`${Styles.view} ${Styles.imico_pop_info_view}`}>9999</span>
                                                    <span className={`${Styles.like} ${Styles.imico_pop_info_like}`}>9999</span>
                                                    <span className={`${Styles.cmt} ${Styles.imico_pop_info_cmt}`}>9999</span>
                                                </div>
                                            </div>
                                            <div className={Styles.info_box}>
                                                <div className={Styles.user_thmb} style={{
                                                    backgroundImage:
                                                        "url('https://media.kappamoto.com/AK-Moto/foto/BMW_F700GS%20(13-16)_lato_K.jpg')",
                                                }}></div>
                                                <em className={Styles.tit}>90% 펜 스네이크 케익이 정말 맛이 있습니다.</em>
                                                <span className={Styles.from}>
                                                    from<em>atom 10150</em>
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb} style={{
                                                backgroundImage:
                                                    "url('https://media.kappamoto.com/AK-Moto/foto/BMW_F700GS%20(13-16)_lato_K.jpg')",
                                            }}>
                                                <div className={Styles.info_bar}>
                                                    {`${Styles.view} ${Styles.imico_pop_info_view}`}
                                                    <span className={`${Styles.view} ${Styles.imico_pop_info_view}`}>9999</span>
                                                    <span className={`${Styles.like} ${Styles.imico_pop_info_like}`}>9999</span>
                                                    <span className={`${Styles.cmt} ${Styles.imico_pop_info_cmt}`}>9999</span>
                                                </div>
                                            </div>
                                            <div className={Styles.info_box}>
                                                <div className={Styles.user_thmb} style={{
                                                    backgroundImage:
                                                        "url('https://media.kappamoto.com/AK-Moto/foto/BMW_F700GS%20(13-16)_lato_K.jpg')",
                                                }}></div>
                                                <em className={Styles.tit}>90% 펜 스네이크 케익이 정말 맛이 있습니다.</em>
                                                <span className={Styles.from}>
                                                    from<em>atom 10150</em>
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb} style={{
                                                backgroundImage:
                                                    "url('https://media.kappamoto.com/AK-Moto/foto/BMW_F700GS%20(13-16)_lato_K.jpg')",
                                            }}>
                                                <div className={Styles.info_bar}>
                                                    {`${Styles.view} ${Styles.imico_pop_info_view}`}
                                                    <span className={`${Styles.view} ${Styles.imico_pop_info_view}`}>9999</span>
                                                    <span className={`${Styles.like} ${Styles.imico_pop_info_like}`}>9999</span>
                                                    <span className={`${Styles.cmt} ${Styles.imico_pop_info_cmt}`}>9999</span>
                                                </div>
                                            </div>
                                            <div className={Styles.info_box}>
                                                <div className={Styles.user_thmb} style={{
                                                    backgroundImage:
                                                        "url('https://media.kappamoto.com/AK-Moto/foto/BMW_F700GS%20(13-16)_lato_K.jpg')",
                                                }}></div>
                                                <em className={Styles.tit}>90% 펜 스네이크 케익이 정말 맛이 있습니다.</em>
                                                <span className={Styles.from}>
                                                    from<em>atom 10150</em>
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb} style={{
                                                backgroundImage:
                                                    "url('https://media.kappamoto.com/AK-Moto/foto/BMW_F700GS%20(13-16)_lato_K.jpg')",
                                            }}>
                                                <div className={Styles.info_bar}>
                                                    {`${Styles.view} ${Styles.imico_pop_info_view}`}
                                                    <span className={`${Styles.view} ${Styles.imico_pop_info_view}`}>9999</span>
                                                    <span className={`${Styles.like} ${Styles.imico_pop_info_like}`}>9999</span>
                                                    <span className={`${Styles.cmt} ${Styles.imico_pop_info_cmt}`}>9999</span>
                                                </div>
                                            </div>
                                            <div className={Styles.info_box}>
                                                <div className={Styles.user_thmb} style={{
                                                    backgroundImage:
                                                        "url('https://media.kappamoto.com/AK-Moto/foto/BMW_F700GS%20(13-16)_lato_K.jpg')",
                                                }}></div>
                                                <em className={Styles.tit}>90% 펜 스네이크 케익이 정말 맛이 있습니다.</em>
                                                <span className={Styles.from}>
                                                    from<em>atom 10150</em>
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={Styles.thmb} style={{
                                                backgroundImage:
                                                    "url('https://media.kappamoto.com/AK-Moto/foto/BMW_F700GS%20(13-16)_lato_K.jpg')",
                                            }}>
                                                <div className={Styles.info_bar}>
                                                    {`${Styles.view} ${Styles.imico_pop_info_view}`}
                                                    <span className={`${Styles.view} ${Styles.imico_pop_info_view}`}>9999</span>
                                                    <span className={`${Styles.like} ${Styles.imico_pop_info_like}`}>9999</span>
                                                    <span className={`${Styles.cmt} ${Styles.imico_pop_info_cmt}`}>9999</span>
                                                </div>
                                            </div>
                                            <div className={Styles.info_box}>
                                                <div className={Styles.user_thmb} style={{
                                                    backgroundImage:
                                                        "url('https://media.kappamoto.com/AK-Moto/foto/BMW_F700GS%20(13-16)_lato_K.jpg')",
                                                }}></div>
                                                <em className={Styles.tit}>90% 펜 스네이크 케익이 정말 맛이 있습니다.</em>
                                                <span className={Styles.from}>
                                                    from<em>atom 10150</em>
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <div className={Styles.pop_btn_box}>
                        <div>취소</div>
                        <div className={Styles.active}>불러오기</div>
                    </div>
                </div>

                {/* 나의 작품 - 나의 작품 없을 때 */}
                <div className={Styles.popup_wrap}>
                    <header className={Styles.pop_header}>
                        <h1>나의 작품</h1>
                        <button
                            onClick={this.close}
                            className={`${Styles.btn_back} ${Styles.imbtn_pop_back}`}
                        >
                            <span className={Styles.blind}>뒤로가기</span>
                        </button>
                    </header>
                    <div className={Styles.section_navi}>
                        <ul className={Styles.list}>
                            <li className={Styles.on}>
                                <div>나의 작품</div>
                            </li>
                            <li>
                                <div>관심 작품</div>
                            </li>

                        </ul>
                        <div className={Styles.art_sel_area}>
                            <div className={`${Styles.pop_selectbox} ${Styles.on}`}>
                                <div
                                    className={`${Styles.select_link} ${
                                        Styles.imico_pop_select_arr_down
                                        }`}
                                    title="모든 작품"
                                >
                                    모든 작품
                                </div>
                            </div>
                            <div className={Styles.pop_selectbox}>
                                <div
                                    className={`${Styles.select_link} ${
                                        Styles.imico_pop_select_arr_down
                                        }`}
                                    title="최신순"
                                >
                                    최신순
                                </div>
                            </div>
                            <div className={Styles.pop_selectbox}>
                                <div
                                    className={`${Styles.select_link} ${
                                        Styles.imico_pop_select_arr_down
                                        }`}
                                    title="전체기간"
                                >
                                    전체기간
                                </div>
                            </div>
                            <div className={Styles.srch_box}>
                                <label htmlFor="srch">
                                    <input type="text" id="srch" name="" />
                                </label>
                                <button
                                    type="button"
                                    className={`${Styles.btn_srch} ${Styles.imbtn_pop_srch}`}
                                >
                                    <span className={Styles.blind}>검색</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <section className={`${Styles.pop_content} ${Styles.art_content}`}>
                        <div className={Styles.section_cont}>
                            {/* [D] 메뉴 카테고리 선택에 따라 텍스트 변경  */}
                            <h2 className={Styles.blind}>나의 작품</h2>
                            <div className={Styles.result_box}>
                                <div className={`${Styles.thmb} ${Styles.imico_pop_mywrite_thmb}`}>&nbsp;</div>
                                <p className={Styles.result_dsc}>
                                    내가 만든 작품이 없습니다.<br />
                                    지금 작품 만들기를 시작해보세요!
                                </p>
                                <div className={Styles.pop_btn_box}>
                                    <div className={Styles.active}>작품 만들기</div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </div >
        );
    }
}

const mapStateToProps = (state) => ({
    ...state,
});

const mapDispatchToProps = (dispatch) => ({
    visibleAction: (visible) => dispatch(visibleAction(visible)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sample);

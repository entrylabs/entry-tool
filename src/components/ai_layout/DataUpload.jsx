import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { visibleAction } from '../../actions/index';
import Styles from '../../assets/entry/scss/popup.scss';

class DataUpload extends Component {
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
        const { UploadState } = this.props;
        if (UploadState == 'Default') {
            return (
                <Fragment>
                    <div className={Styles.popup_wrap}>
                        <header className={Styles.pop_header}>
                            <h1>테이블 추가하기</h1>
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
                                    <div>테이블 선택하기</div>
                                </li>
                                <li className={Styles.on}>
                                    <div>파일 올리기</div>
                                </li>
                                <li>
                                    <div>새로 만들기</div>
                                </li>
                            </ul>
                        </div>
                        <section className={`${Styles.pop_content} ${Styles.table_file_add}`}>
                            {/* [D] 메뉴 카테고리 선택에 따라 텍스트 변경  */}
                            <h2 className={Styles.blind}>파일 올리기</h2>
                            <div className={Styles.section_cont}>
                                <div className={Styles.file_add_box}>
                                    <p className={`${Styles.caution} ${Styles.imico_pop_caution}`}>
                                        100MB 이하의 svc, xls(x), json, xml 형식의 파일을 추가할 수 있습니다. xls(x) 형식의 경우, 함수 문장이 그대로 출력됩니다.
                                    </p>
                                    <div className={Styles.file_add}>
                                        <p className={Styles.dsc}>
                                            <strong>파일을 끌어다 놓거나 클릭해서 업로드</strong>
                                            <span>CSV, SLS, SLSX 파일을 여기에 끌어다 놓거나 클릭해서 업로드 할 수 있어요.</span>
                                        </p>
                                        <label htmlFor="file_add" className={Styles.add_label}>
                                            파일 선택
                                            <input type="file" id="file_add" name="file_add" className={Styles.blind} />
                                        </label>
                                    </div>
                                </div>
                                <div className={Styles.caution_box}>
                                    <p className={Styles.dsc}>
                                        <strong>
                                            아래와 같은 데이터가 테이블에 포함된 경우 엔트리의 약관 및 정책, 관련 법률에 의해 제재를 받을 수 있으니 주의하세요.
                                        </strong>
                                        <span>
                                            폭력적이고 잔인한 데이터, 선정적인 내용의 데이터, 불쾌감을 주거나 혐오단어가 포함된 데이터,<br />
                                            본인 또는 타인의 개인정보를 침해할 수 있는 내용의 데이터, 무단 사용이 금지된 저작권의 데이터{''}
                                            <a href="/" className={Styles.link}>[저작권에 대해 알아보기]</a>
                                        </span>
                                    </p>
                                </div>
                                <div className={Styles.pop_btn_box}>
                                    <div className={Styles.active} style={{ width : 180 }}>추가하기</div>
                                    </div>
                            </div>
                        </section>
                    </div>
                </Fragment>
            )
        } else if (UploadState == 'List') {
            return (
                <Fragment>
                    <div className={Styles.popup_wrap}>
                        <header className={Styles.pop_header}>
                            <h1>데이터 추가하기</h1>
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
                                    <div>테이블 선택하기</div>
                                </li>
                                <li className={Styles.on}>
                                    <div>파일 올리기</div>
                                </li>
                                <li>
                                    <div>새로 만들기</div>
                                </li>
                            </ul>
                        </div>
                        <section className={`${Styles.pop_content} ${Styles.table_file_add}`}>
                            {/* [D] 메뉴 카테고리 선택에 따라 텍스트 변경  */}
                            <h2 className={Styles.blind}>파일 올리기</h2>
                            <div className={Styles.section_cont}>
                                <div className={Styles.file_add_box}>
                                    <p className={`${Styles.caution} ${Styles.imico_pop_caution}`}>
                                        100MB 이하의 svc, xls(x), json, xml 형식의 파일을 추가할 수 있습니다. xls(x) 형식의 경우, 함수 문장이 그대로 출력됩니다.
                                    </p>
                                    <div className={Styles.file_list_box}>
                                        <div className={Styles.list_file_add}>
                                            <label htmlFor="upload" className={`${Styles.upload} ${Styles.imbtn_pop_upload}`}>
                                                <input type="file" id="upload" name="upload" className={Styles.blind} />
                                                파일 올리기
                                            </label>
                                        </div>
                                        {/* (120px + 12) X li 갯수 = 넓이 */}
                                        <div className={Styles.list_inner} style={{ width: 2232 }}>
                                            <ul className={Styles.obj_list}>
                                                <li className={Styles.on}>
                                                    <div className={Styles.link}>
                                                        <div className={Styles.thmb}>&nbsp;</div>
                                                        <em className={Styles.sjt}>오브젝트</em>
                                                    </div>
                                                    {/* input에 :checked 들어오면 active 클래스 추가 */}
                                                    <label htmlFor="check1" className={`${Styles.check} ${Styles.active}`}>
                                                        <input type="checkbox" id="check1" name="check1" className={Styles.blind} />
                                                    </label>
                                                </li>
                                                <li>
                                                    <div className={Styles.link}>
                                                        <div className={Styles.thmb}>&nbsp;</div>
                                                        <em className={Styles.sjt}>오브젝트</em>
                                                    </div>
                                                    <label htmlFor="check1" className={Styles.check}>
                                                        <input type="checkbox" id="check1" name="check1" className={Styles.blind} />
                                                    </label>
                                                </li>
                                                <li>
                                                    <div className={Styles.link}>
                                                        <div className={Styles.thmb}>&nbsp;</div>
                                                        <em className={Styles.sjt}>오브젝트</em>
                                                    </div>
                                                    <label htmlFor="check1" className={Styles.check}>
                                                        <input type="checkbox" id="check1" name="check1" className={Styles.blind} />
                                                    </label>
                                                </li>
                                                <li>
                                                    <div className={Styles.link}>
                                                        <div className={Styles.thmb}>&nbsp;</div>
                                                        <em className={Styles.sjt}>오브젝트</em>
                                                    </div>
                                                    <label htmlFor="check1" className={Styles.check}>
                                                        <input type="checkbox" id="check1" name="check1" className={Styles.blind} />
                                                    </label>
                                                </li>
                                                <li>
                                                    <div className={Styles.link}>
                                                        <div className={Styles.thmb}>&nbsp;</div>
                                                        <em className={Styles.sjt}>오브젝트</em>
                                                    </div>
                                                    <label htmlFor="check1" className={Styles.check}>
                                                        <input type="checkbox" id="check1" name="check1" className={Styles.blind} />
                                                    </label>
                                                </li>
                                                <li>
                                                    <div className={Styles.link}>
                                                        <div className={Styles.thmb}>&nbsp;</div>
                                                        <em className={Styles.sjt}>오브젝트</em>
                                                    </div>
                                                    <label htmlFor="check1" className={Styles.check}>
                                                        <input type="checkbox" id="check1" name="check1" className={Styles.blind} />
                                                    </label>
                                                </li>
                                                <li>
                                                    <div className={Styles.link}>
                                                        <div className={Styles.thmb}>&nbsp;</div>
                                                        <em className={Styles.sjt}>오브젝트</em>
                                                    </div>
                                                    <label htmlFor="check1" className={Styles.check}>
                                                        <input type="checkbox" id="check1" name="check1" className={Styles.blind} />
                                                    </label>
                                                </li>
                                                <li>
                                                    <div className={Styles.link}>
                                                        <div className={Styles.thmb}>&nbsp;</div>
                                                        <em className={Styles.sjt}>오브젝트</em>
                                                    </div>
                                                    <label htmlFor="check1" className={Styles.check}>
                                                        <input type="checkbox" id="check1" name="check1" className={Styles.blind} />
                                                    </label>
                                                </li>
                                                <li>
                                                    <div className={Styles.link}>
                                                        <div className={Styles.thmb}>&nbsp;</div>
                                                        <em className={Styles.sjt}>오브젝트</em>
                                                    </div>
                                                    <label htmlFor="check1" className={Styles.check}>
                                                        <input type="checkbox" id="check1" name="check1" className={Styles.blind} />
                                                    </label>
                                                </li>
                                                <li>
                                                    <div className={Styles.link}>
                                                        <div className={Styles.thmb}>&nbsp;</div>
                                                        <em className={Styles.sjt}>오브젝트</em>
                                                    </div>
                                                    <label htmlFor="check1" className={Styles.check}>
                                                        <input type="checkbox" id="check1" name="check1" className={Styles.blind} />
                                                    </label>
                                                </li>
                                                <li>
                                                    <div className={Styles.link}>
                                                        <div className={Styles.thmb}>&nbsp;</div>
                                                        <em className={Styles.sjt}>오브젝트</em>
                                                    </div>
                                                    <label htmlFor="check1" className={Styles.check}>
                                                        <input type="checkbox" id="check1" name="check1" className={Styles.blind} />
                                                    </label>
                                                </li>
                                                <li>
                                                    <div className={Styles.link}>
                                                        <div className={Styles.thmb}>&nbsp;</div>
                                                        <em className={Styles.sjt}>오브젝트</em>
                                                    </div>
                                                    <label htmlFor="check1" className={Styles.check}>
                                                        <input type="checkbox" id="check1" name="check1" className={Styles.blind} />
                                                    </label>
                                                </li>
                                                <li>
                                                    <div className={Styles.link}>
                                                        <div className={Styles.thmb}>&nbsp;</div>
                                                        <em className={Styles.sjt}>오브젝트</em>
                                                    </div>
                                                    <label htmlFor="check1" className={Styles.check}>
                                                        <input type="checkbox" id="check1" name="check1" className={Styles.blind} />
                                                    </label>
                                                </li>
                                                <li>
                                                    <div className={Styles.link}>
                                                        <div className={Styles.thmb}>&nbsp;</div>
                                                        <em className={Styles.sjt}>오브젝트</em>
                                                    </div>
                                                    <label htmlFor="check1" className={Styles.check}>
                                                        <input type="checkbox" id="check1" name="check1" className={Styles.blind} />
                                                    </label>
                                                </li>
                                                <li>
                                                    <div className={Styles.link}>
                                                        <div className={Styles.thmb}>&nbsp;</div>
                                                        <em className={Styles.sjt}>오브젝트</em>
                                                    </div>
                                                    <label htmlFor="check1" className={Styles.check}>
                                                        <input type="checkbox" id="check1" name="check1" className={Styles.blind} />
                                                    </label>
                                                </li>
                                                <li>
                                                    <div className={Styles.link}>
                                                        <div className={Styles.thmb}>&nbsp;</div>
                                                        <em className={Styles.sjt}>오브젝트</em>
                                                    </div>
                                                    <label htmlFor="check1" className={Styles.check}>
                                                        <input type="checkbox" id="check1" name="check1" className={Styles.blind} />
                                                    </label>
                                                </li>
                                                <li>
                                                    <div className={Styles.link}>
                                                        <div className={Styles.thmb}>&nbsp;</div>
                                                        <em className={Styles.sjt}>오브젝트</em>
                                                    </div>
                                                    <label htmlFor="check1" className={Styles.check}>
                                                        <input type="checkbox" id="check1" name="check1" className={Styles.blind} />
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                   
                                </div>
                                <div className={Styles.caution_box}>
                                    <p className={Styles.dsc}>
                                        <strong>
                                            아래와 같은 데이터가 테이블에 포함된 경우 엔트리의 약관 및 정책, 관련 법률에 의해 제재를 받을 수 있으니 주의하세요.
                                        </strong>
                                        <span>
                                            폭력적이고 잔인한 데이터, 선정적인 내용의 데이터, 불쾌감을 주거나 혐오단어가 포함된 데이터,<br />
                                            본인 또는 타인의 개인정보를 침해할 수 있는 내용의 데이터, 무단 사용이 금지된 저작권의 데이터{''}
                                            <a href="/" className={Styles.link}>[저작권에 대해 알아보기]</a>
                                        </span>
                                    </p>
                                </div>
                                <div className={Styles.pop_btn_box}>
                                    <div className={Styles.active} style={{ width : 180 }}>추가하기</div>
                                    </div>
                            </div>
                        </section>
                    </div>
                </Fragment>
            )
        } else {
            return (
                <Fragment>
                    <div className={Styles.popup_wrap}>
                        <header className={Styles.pop_header}>
                            <h1>테이블 추가하기</h1>
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
                                    <div>테이블 선택하기</div>
                                </li>
                                <li>
                                    <div>파일 올리기</div>
                                </li>
                                <li className={Styles.on}>
                                    <div>새로 만들기</div>
                                </li>
                            </ul>
                        </div>
                        <section className={`${Styles.pop_content} ${Styles.table_file_add}`}>
                            {/* [D] 메뉴 카테고리 선택에 따라 텍스트 변경  */}
                            <h2 className={Styles.blind}>새로 만들기</h2>
                            <div className={Styles.section_cont}>
                                <div className={Styles.file_add_box}>
                                    <div className={Styles.new_add_box}>
                                        <p className={Styles.dsc}>
                                            <strong>테이블 새로 만들기</strong>
                                            <span>데이터를 직접 입력해 나만의 테이블을 만들 수 있어요.</span>
                                        </p>
                                    </div>
                                </div>
                                <div className={Styles.caution_box}>
                                    <p className={Styles.dsc}>
                                        <strong>
                                            아래와 같은 데이터가 테이블에 포함된 경우 엔트리의 약관 및 정책, 관련 법률에 의해 제재를 받을 수 있으니 주의하세요.
                                        </strong>
                                        <span>
                                            폭력적이고 잔인한 데이터, 선정적인 내용의 데이터, 불쾌감을 주거나 혐오단어가 포함된 데이터,<br />
                                            본인 또는 타인의 개인정보를 침해할 수 있는 내용의 데이터, 무단 사용이 금지된 저작권의 데이터{''}
                                            <a href="/" className={Styles.link}>[저작권에 대해 알아보기]</a>
                                        </span>
                                    </p>
                                </div>
                                <div className={Styles.pop_btn_box}>
                                    <div className={Styles.active} style={{ width : 180 }}>추가하기</div>
                                    </div>
                            </div>
                        </section>
                    </div>
                </Fragment>
            )
        } 
    }
}
export default DataUpload;
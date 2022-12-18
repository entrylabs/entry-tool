import { Component, Fragment } from 'react';
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
                                className={`${Styles.btn_back} ${Styles.imbtn_pop_close}`}
                            >
                                <span className={Styles.blind}>닫기</span>
                            </button>
                            <a href="/" className={Styles.btn} role="button">추가하기</a>
                        </header>
                        <div className={Styles.section_container}>
                            <div className={Styles.container_inner}>
                                <div className={Styles.section_navi}>
                                    <ul className={`${Styles.list} ${Styles.table_list}`}>
                                        <li>
                                            <div>테이블 선택</div>
                                        </li>
                                        <li className={Styles.on}>
                                            <div>파일 올리기</div>
                                        </li>
                                        <li>
                                            <div>새로 만들기</div>
                                        </li>
                                    </ul>
                                </div>
                                <div className={`${Styles.section_content} ${Styles.table_file_add_content}`}>
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
                                    <div className={Styles.caution_box}>
                                        <p className={Styles.caution}>
                                            10MB 이하의 파일을 업로드할 수 있습니다. 엑셀 파일의 경우, 함수 문장이 그대로 출력됩니다.
                                        </p>
                                        <p className={Styles.caution}>
                                            <strong>아래와 같은 그림은 이용약관 및 관련 법률에 의해 제재를 받으실 수 있습니다.</strong><br />
                                            <span className={Styles.sub_dsc}>폭력적이고 잔인한 데이터, 선정적인 내용의 데이터, 불쾌감을 주거나 혐오단어가 포함된 데이터, 본인 또는 타인의 개인정보를 침해할 수 있는 내용의 데이터, 무단 사용이 금지된 저작권의 데이터</span> <a href="/">[저작권에 대해 알아보기]</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fragment>
            )
        } else if (UploadState == 'List') {
            return (
                <Fragment>
                    <div className={Styles.popup_wrap}>
                        <header className={Styles.pop_header}>
                            <h1>테이블 추가하기</h1>
                            <button
                                onClick={this.close}
                                className={`${Styles.btn_back} ${Styles.imbtn_pop_close}`}
                            >
                                <span className={Styles.blind}>닫기</span>
                            </button>
                            <a href="/" className={Styles.btn} role="button">추가하기</a>
                        </header>
                        <div className={Styles.section_container}>
                            <div className={Styles.container_inner}>
                                <div className={Styles.section_navi}>
                                    <ul className={`${Styles.list} ${Styles.table_list}`}>
                                        <li>
                                            <div>테이블 선택</div>
                                        </li>
                                        <li className={Styles.on}>
                                            <div>파일 올리기</div>
                                        </li>
                                        <li>
                                            <div>새로 만들기</div>
                                        </li>
                                    </ul>
                                </div>
                                <div className={`${Styles.section_content} ${Styles.table_file_add_content}`}>
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
                                    <div className={Styles.caution_box}>
                                        <p className={Styles.caution}>
                                            10MB 이하의 파일을 업로드할 수 있습니다. 엑셀 파일의 경우, 함수 문장이 그대로 출력됩니다.
                                        </p>
                                        <p className={Styles.caution}>
                                            <strong>아래와 같은 그림은 이용약관 및 관련 법률에 의해 제재를 받으실 수 있습니다.</strong><br />
                                            <span className={Styles.sub_dsc}>폭력적이고 잔인한 데이터, 선정적인 내용의 데이터, 불쾌감을 주거나 혐오단어가 포함된 데이터, 본인 또는 타인의 개인정보를 침해할 수 있는 내용의 데이터, 무단 사용이 금지된 저작권의 데이터</span> <a href="/">[저작권에 대해 알아보기]</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                className={`${Styles.btn_back} ${Styles.imbtn_pop_close}`}
                            >
                                <span className={Styles.blind}>닫기</span>
                            </button>
                            <a href="/" className={Styles.btn} role="button">추가하기</a>
                        </header>
                        <div className={Styles.section_container}>
                            <div className={Styles.container_inner}>
                                <div className={Styles.section_navi}>
                                    <ul className={`${Styles.list} ${Styles.table_list}`}>
                                        <li>
                                            <div>테이블 선택</div>
                                        </li>
                                        <li>
                                            <div>파일 올리기</div>
                                        </li>
                                        <li className={Styles.on}>
                                            <div>새로 만들기</div>
                                        </li>
                                    </ul>
                                </div>
                                <div className={`${Styles.section_content} ${Styles.table_file_add_content}`}>
                                    <div className={Styles.new_add_box}>
                                        <p className={Styles.dsc}>
                                            <strong>테이블 새로 만들기</strong>
                                            <span>데이터를 직접 입력해 나만의 테이블을 만들 수 있어요.</span>
                                        </p>
                                        <label htmlFor="table_add" className={Styles.add_label}>
                                            새로운 테이블 추가
                                            <input type="file" id="file_add" name="table_add" className={Styles.blind} />
                                        </label>
                                    </div>
                                    <div className={Styles.caution_box}>
                                        <p className={Styles.caution}>
                                            <strong>아래와 같은 그림은 이용약관 및 관련 법률에 의해 제재를 받으실 수 있습니다.</strong><br />
                                            <span className={Styles.sub_dsc}>폭력적이고 잔인한 데이터, 선정적인 내용의 데이터, 불쾌감을 주거나 혐오단어가 포함된 데이터, 본인 또는 타인의 개인정보를 침해할 수 있는 내용의 데이터, 무단 사용이 금지된 저작권의 데이터</span> <a href="/">[저작권에 대해 알아보기]</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fragment>
            )
        } 
    }
}
export default DataUpload;
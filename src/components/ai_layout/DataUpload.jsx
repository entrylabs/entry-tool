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
                            <li className={Styles.on}>
                                <div>데이터 선택</div>
                            </li>
                            <li>
                                <div>데이터 가져오기</div>
                            </li>
                        </ul>
                    </div>
                    <section className={`${Styles.pop_content} ${Styles.data_upload_content}`}>
                        {/* [D] 메뉴 카테고리 선택에 따라 텍스트 변경  */}
                        <h2 className={Styles.blind}>파일 올리기</h2>
                        <div className={Styles.section_cont}>
                            <p className={`${Styles.caution} ${Styles.imico_pop_caution}`}>
                                100MB 이하의 svc, xls(x), json, xml 형식의 파일을 추가할 수 있습니다. xls(x) 형식의 경우, 함수 문장이 그대로 출력됩니다.
                                <a href="#" className={Styles.more_link}>자세히 보기</a>
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
                                            <div className={`${Styles.thmb} ${Styles.imico_pop_data_thmb}`}>
                                                &nbsp;
                                            </div>
                                            <em className={Styles.sjt}>데이터 AAA</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={`${Styles.thmb} ${Styles.imico_pop_data_thmb}`}>
                                                &nbsp;
                                            </div>
                                            <em className={Styles.sjt}>데이터 AAA</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={`${Styles.thmb} ${Styles.imico_pop_data_thmb}`}>
                                                &nbsp;
                                            </div>
                                            <em className={Styles.sjt}>데이터 AAA</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={`${Styles.thmb} ${Styles.imico_pop_data_thmb}`}>
                                                &nbsp;
                                            </div>
                                            <em className={Styles.sjt}>데이터 AAA</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={`${Styles.thmb} ${Styles.imico_pop_data_thmb}`}>
                                                &nbsp;
                                            </div>
                                            <em className={Styles.sjt}>데이터 AAA</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={Styles.link}>
                                            <div className={`${Styles.thmb} ${Styles.imico_pop_data_thmb}`}>
                                                &nbsp;
                                            </div>
                                            <em className={Styles.sjt}>데이터 AAA</em>
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
                                            아래와 같은 데이터는 이용약관 및 관련 법률에 의해 제재를 받으실 수 있습니다.
                                        </strong>
                                        <p className={Styles.dsc}>
                                           폭력적이고 잔인한 데이터<br />
                                            선정적인 내용의 데이터<br />
                                            불쾌감을 주거나 혐오단어가 포함된 데이터<br />
                                            무단 사용이 금지된 저작권의 데이터 <a href="#" className={Styles.copyright_link}>[저작권에 대해 알아보기]</a>
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

            </Fragment>
        )
    }
}
export default DataUpload;
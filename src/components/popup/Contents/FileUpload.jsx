import React, { Component } from 'react';
import { connect } from 'react-redux';
import Styles from '../../../assets/scss/popup.scss';

class FileUpload extends Component {
    render() {
        return (
            <div className={Styles.section_cont}>
                {/* [D] 메뉴 카테고리 선택에 따라 텍스트 변경  */}
                <h2 className={Styles.blind}>파일 올리기</h2>
                <div className={Styles.cont_box}>
                    <div className={Styles.file_add_list_box}>
                        <p className={Styles.caution + " " + Styles.imico_pop_caution}>
                            10MB 이하의 jpg, png, bmp 또는 eo 형식의 오브젝트를 추가할 수 있습니다.
                        </p>
                        <div className={Styles.scroll_box}>
                            <div className={Styles.file_add_box}>
                                <label htmlFor="inpt_file" className={Styles.upload + " " + Styles.imbtn_pop_upload}>파일 올리기
                                </label>
                                <input type="file" name="inpt_file" id="inpt_file"/>
                            </div>
                            <ul className={Styles.obj_list}>
                                {/* [D] 오브젝트 링크가 클릭되면 li에 on  추가 */}
                                <li>
                                    <a href="#NULL" className={Styles.link}>
                                        <div className={Styles.thmb}>
                                            <img
                                                src="https://playentry.org/uploads/a5/b0/thumb/a5b0f63ea21833e115fddb0b58a8658b.png"
                                                alt=""/>
                                        </div>
                                        <em className={Styles.sjt}>오브젝트</em>
                                    </a>
                                </li>
                                <li className={Styles.on}>
                                    <a href="#NULL" className={Styles.link}>
                                        <div className={Styles.thmb}>
                                            <img
                                                src="https://media.kappamoto.com/AK-Moto/foto/BMW_F700GS%20(13-16)_lato_K.jpg"
                                                alt=""/>
                                        </div>
                                        <em className={Styles.sjt}>오브젝트</em>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className={Styles.img_caution_box}>
                            <div className={Styles.inner}>
                                            <span className={Styles.thmb}>
                                                <img
                                                    src="https://media.kappamoto.com/AK-Moto/foto/BMW_F700GS%20(13-16)_lato_K.jpg"
                                                    alt=""/>
                                            </span>
                                <div className={Styles.dsc_box}>
                                    <strong>
                                        아래와 같은 그림은 이용약관 및 관련 법률에 의해 제재를 받으실 수 있습니다.
                                    </strong>
                                    <p className={Styles.dsc}>
                                        폭력적이고 잔인한 그림<br/>
                                        선정적인 신체 노출 그림<br/>
                                        불쾌감을 주거나 혐오감을 일으키는 그림
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={Styles.pop_btn_box}>
                    <a href="#NULL">취소</a>
                    <a href="#NULL" className={Styles.active}>추가하기</a>
                </div>
            </div>
        );
    }
}

export default connect(
    null,
    null,
)(FileUpload);


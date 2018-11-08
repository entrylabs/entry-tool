import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SubmissionError, Field, reduxForm } from 'redux-form';
import Styles from '../../../assets/scss/popup.scss';
import { triggerEvent } from '../../../actions';
import { CommonUtils } from '../../../utils/Common';
import cookie from 'react-cookies';
import axios from 'axios';

const FIELDS = {
    username: {
        type: 'input',
        subType: 'text',
        placeholder: '4~20자의 영문 대 소문자, 숫자를 사용하세요.',
        label: '아이디 입력',
    },
    password: {
        type: 'input',
        subType: 'password',
        placeholder: '5~20자의 영문 대 소문자, 숫자를 사용하세요.',
        label: '비밀번호 입력',
        onKeyDown: (e, cb) => {
            if (e.key === 'Enter' && e.shiftKey === false) {
                e.preventDefault();
                cb();
            }
        }
    },
};

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.triggerLink = this.triggerLink.bind(this);
    }

    componentWillMount() {
        if(cookie.load('saveId') === "true") {
            this.setState({saveId: true});
            this.props.change("username", cookie.load('id'));
        }
    }

    triggerLink(e, link) {
        e.preventDefault();
        this.props.triggerEvent("link", link);
    }

    handleCheck(target) {
        const isChecked = !this.state[target];
        this.setState({ [target]: isChecked });
    }

    onSubmit(values) {
        if(!values.hasOwnProperty("username") || !values.hasOwnProperty("password")) {
            return null;
        }
        return axios.post("/api/user/auth", values).then(response => {
            if(this.state.saveId) {
                cookie.save("id", values.username, { path: '/'});
            }
            cookie.save("saveId", this.state.saveId, { path: '/'});
            this.props.triggerEvent("login", response.data);
        }).catch(error => {
            throw new SubmissionError({ username: 'error', password: 'error' });
        });
    }

    renderField(fieldConfig) {
        const { meta, input, id, enterCallback } = fieldConfig;
        const name = input.name;
        const field = FIELDS[name];
        return (
            <div className={`${Styles.pop_inpt_text} ${CommonUtils.toggleClass(meta.touched && meta.error, Styles.error)}`} key={name}>
                <label htmlFor={name} className={Styles.inpt_label}>
                    {field.label} <em className={Styles.chk_point}>(필수)</em>
                </label>
                <field.type {...input} type={field.subType} id={id} placeholder={field.placeholder} onKeyDown={(e) =>{field.onKeyDown(e, enterCallback)}}/>
            </div>
        );
    };

    renderErrorMsg() {
        if(this.props.form.LoginForm && this.props.form.LoginForm.submitErrors) {
            return <p className={Styles.error_dsc}>* 아이디 또는 비밀번호를 잘못 입력하셨습니다.</p>;
        }
        return "";
    }

    render() {
        const { handleSubmit } = this.props;
        return (
                <section className={`${Styles.pop_content} ${Styles.login_area}`}>
                    <section className={Styles.login_header}>
                        <h2 className={`${Styles.tit} ${Styles.imico_entrylogo}`}>
                            <span className={Styles.blind}>entry</span>
                        </h2>
                    </section>
                    <section className={Styles.login_cont}>
                        <form>
                        <div className={Styles.input_box}>
                            {Object.keys(FIELDS).map(name => <Field id={name} name={name} key={name} component={this.renderField} enterCallback={handleSubmit(props => this.onSubmit(props))}/>)}
                        </div>
                        <div className={Styles.input_box} style={{ marginTop: '0px' }}>
                            <div className={Styles.login_chk_box}>
                                <span className={Styles.pop_checkbox}>
                                    <input type="checkbox" id="login_id" name="login_id" className={Styles.blind} onChange={() => this.handleCheck('saveId')} defaultChecked={this.state.saveId}/>
                                    <label htmlFor="login_id" className={Styles.imbtn_pop_checked}>
                                        <span className={Styles.text}>아이디 저장</span>
                                    </label>
                                </span>
                                <span className={Styles.pop_checkbox}>
                                    <input type="checkbox" id="login_auto" name="login_auto" className={Styles.blind} onChange={() => this.handleCheck('rememberme')}/>
                                    <label htmlFor="login_auto" className={Styles.imbtn_pop_checked}>
                                        <span className={Styles.text}>자동 로그인</span>
                                    </label>
                                </span>
                                {this.renderErrorMsg()}
                            </div>
                        </div>
                        <div className={Styles.pop_btn_box}>
                            <a href="#NULL" className={Styles.active} onClick={handleSubmit(props => this.onSubmit(props))}>로그인</a>
                        </div>
                        </form>
                    </section>
                    <div className={Styles.find_log}>
                        <a href="#NULL" onClick={e => this.triggerLink(e, "findPassword")}>아이디, 비밀번호 찾기</a>
                        <a href="#NULL" onClick={e => this.triggerLink(e, "join")}>회원가입하기</a>
                    </div>
                </section>
        );
    }
}

const mapStateToProps = (state) => ({
    ...state,
});

const mapDispatchToProps = (dispatch) => ({
    triggerEvent: (event, data) => dispatch(triggerEvent(event, data)),
});

export default reduxForm({
    form: 'LoginForm',
})(connect(mapStateToProps, mapDispatchToProps)(LoginForm));


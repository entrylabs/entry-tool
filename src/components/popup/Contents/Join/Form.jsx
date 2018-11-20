import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Styles from '@assets/scss/popup.scss';
import { JoinAction, JoinPageMoveAction } from '@actions/join';
import { CommonUtils, FormAsyncException } from '@utils/Common';
import axios from 'axios';

const FIELDS = {
    username: {
        type: 'input',
        subType: 'text',
        placeholder: '4~20자의 영문 대 소문자, 숫자를 사용하세요.',
        label: '아이디 입력',
        required: true,
        syncValidate: [{
            condition: (values, name) => {
                const value = values[name];
                const regExp = /^([a-zA-Z0-9_%-.]{4,20})$/;
                return !regExp.test(value);
            },
            message: '* 4~20자의 영문/숫자를 조합하여 아이디를 입력하세요.',
        }],
        asyncValidate: (values) => {
            const url = `/api/checkUserName/${values.username}`;
            return axios.get(url).then((response) => {
                if (response.data.isExist !== 'empty') {
                    throw new FormAsyncException({ username: '이미 존재하는 아이디 입니다.' });
                }
            });
        },
    },
    password: {
        type: 'input',
        subType: 'password',
        placeholder: '5~20자의 영문 대 소문자, 숫자를 사용하세요.',
        label: '비밀번호 입력',
        required: true,
        syncValidate: [{
            condition: (values, name) => {
                const value = values[name];
                return value && !(value.length >= 5);
            },
            message: '* 5~10자의 영문/숫자를 조합하여 비밀번호를 입력하세요.',
        }],
    },
    password2: {
        type: 'input',
        subType: 'password',
        placeholder: '비밀번호를 한번 더 입력하세요.',
        label: '비밀번호 확인',
        required: true,
        syncValidate: [{
            condition: (values, name) => {
                return values.password !== values.password2;
            },
            message: '* 같은 비밀번호를 입력해 주세요.',
        }],
    },
};

class JoinForm extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e, callback) {
        e.preventDefault();
        callback();
    }

    onSubmit(values) {
        this.props.setForm(values);
        this.props.moveTo(2);
    }

    renderField(fieldConfig) {
        const { meta, input, id } = fieldConfig;
        const name = input.name;
        const field = FIELDS[name];
        return (
            <div className={`${Styles.pop_inpt_text} ${CommonUtils.toggleClass(meta.touched && meta.error, Styles.error)}`} key={name}>
                <label htmlFor={name} className={Styles.inpt_label}>
                    {field.label} <em className={Styles.chk_point}>(필수)</em>
                </label>
                <field.type {...input} type={field.subType} id={id} placeholder={field.placeholder}/>
                {meta.touched && meta.error ? <p className={Styles.error_dsc}>{meta.error}</p> : ''}
            </div>
        );
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <section className={`${Styles.pop_content} ${Styles.login_area}`}>
                <section className={Styles.login_header}>
                    <h2 className={`${Styles.tit} ${Styles.imico_entrylogo}`}>
                        <span className={Styles.blind}>entry</span>
                    </h2>
                    <p className={Styles.dsc}>
                        소프트웨어의 첫걸음,<br/>
                        엔트리에 오신 것을 환영 합니다.
                    </p>
                </section>
                <section className={Styles.login_cont}>
                    <form>
                        <div className={Styles.depth_list}>
                            <span className={Styles.on}>1</span>
                            <span className={Styles.on}>2<em className={Styles.blind}>단계</em></span>
                            <span>3</span>
                        </div>
                        <h3 className={Styles.cont_tit}>아이디, 비밀번호 입력</h3>
                        <div className={Styles.input_box}>
                            {Object.keys(FIELDS).map(name => <Field id={name} name={name} key={name}
                                                                    component={this.renderField}/>)}
                        </div>
                        <div className={Styles.pop_btn_box}>
                            <a href="#NULL" onClick={e => this.handleClick(e, () => this.props.moveTo(0))}>이전</a>
                            <a href="#NULL" className={Styles.active} onClick={handleSubmit(props => this.onSubmit(props))}>다음</a>
                        </div>
                    </form>
                </section>
            </section>
        );
    }
}

const validate = (values) => {
    return Object.keys(FIELDS).reduce((arr, name) => {
        if (FIELDS[name].required && !values[name]) {
            arr[name] = FIELDS[name].syncValidate[0].message;
        }

        FIELDS[name].syncValidate.forEach(err => {
            if (err.condition(values, name)) {
                arr[name] = err.message;
            }
        });

        return arr;
    }, {});
};

const asyncValidate = (values) => {
    const asyncFunction = Object.keys(FIELDS).map(name => {
        if (FIELDS[name].asyncValidate) {
            return FIELDS[name].asyncValidate(values);
        }
        return null;
    });

    return Promise.all(asyncFunction);
};

const mapStateToProps = (state) => ({
    ...state,
});

const mapDispatchToProps = (dispatch) => ({
    moveTo: (moveTo) => dispatch(JoinPageMoveAction(moveTo)),
    setForm: (data) => dispatch(JoinAction(data)),
});

export default reduxForm({
    form: 'JoinForm',
    validate,
    asyncValidate,
    asyncBlurFields: Object.keys(FIELDS).filter(name => FIELDS[name].asyncValidate),
})(connect(mapStateToProps, mapDispatchToProps)(JoinForm));



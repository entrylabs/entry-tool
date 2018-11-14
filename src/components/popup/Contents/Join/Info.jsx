import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Styles from '../../../../assets/scss/popup.scss';
import { JoinAction, JoinPageMoveAction, SubmitAction } from '../../../../actions/join';
import { CommonUtils, FormAsyncException } from '../../../../utils/Common';
import axios from 'axios';

const FIELDS = {
    grade: {
        type: 'select',
        options: [
            { value: 'e_1', name: '초등 1학년' },
            { value: 'e_2', name: '초등 2학년' },
            { value: 'e_3', name: '초등 3학년', },
            { value: 'e_4', name: '초등 4학년' },
            { value: 'e_5', name: '초등 5학년' },
            { value: 'e_6', name: '초등 6학년' }
            ],
        placeholder: '학년을 선택하세요.',
        label: '학년',
        required: true,
        syncValidate: [{
            condition: (values, name) => false,
            message: '* 학년을 선택해주세요.',
        }],
    },
    sex: {
        type: 'select',
        options: [
            { value: 'male', name: '남자' },
            { value: 'female', name: '여자' }
            ],
        placeholder: '성별을 선택하세요.',
        label: '성별',
        required: true,
        syncValidate: [{
            condition: (values, name) => false,
            message: '* 성별을 선택해주세요.',
        }],
    },
    email: {
        type: 'input',
        subType: 'text',
        placeholder: '이메일 주소를 입력하세요.',
        message: '* 비밀번호를 잊은 경우 이메일로 비밀번호를 찾을 수 있습니다.',
        label: '이메일',
        syncValidate: [{
            condition: (values, name) => {
                if (!values[name]) {
                    return false;
                }
                const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
                const value = values[name];
                return !regExp.test(value);
            },
            message: '이메일 형식을 확인해 주세요.',
        }],
        asyncValidate: (values) => {
            const url = `/api/checkEmailDup/${values.email}`;
            return axios.get(url).then((response) => {
                if (response.data.isExist !== 'empty') {
                    throw FormAsyncException({ email: '이미 존재하는 이메일 입니다.' });
                }
            });
        },
    },
};

class InfoForm extends Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.handleClick = this.handleClick.bind(this);
        this.renderField = this.renderField.bind(this);
    }

    handleClick(e, callback) {
        e.preventDefault();
        callback();
    }

    onSubmit(values) {
        this.props.setForm(values);
        const data = { ...this.props.joinReducer, ...values };
        this.props.SubmitAction(data);
    }

    renderField(fieldConfig) {
        switch (FIELDS[fieldConfig.input.name].type) {
            case 'select' :
                return this.renderSelect(fieldConfig);
            case 'input' :
            default:
                return this.renderInput(fieldConfig);
        }
    }

    renderSelect(fieldConfig) {
        const { meta, input, id, optionState } = fieldConfig;
        const name = input.name;
        const field = FIELDS[name];
        let placeholder = field.placeholder;
        const setValue = (e, option) => {
            e.preventDefault();
            this.props.change(name, option.value);
            this.setState({ [name]: false });
        };

        if (input.value) {
            placeholder = field.options.find(option => option.value === input.value).name;
        }

        const isErr = meta.touched && meta.error;
        //TODO. 공통 셀렉트박스로 변경
        return (
            <div className={`${Styles.pop_selectbox} ${CommonUtils.toggleClass(optionState[name], Styles.on)} ${CommonUtils.toggleClass(isErr, Styles.error)}`}>
                <em className={Styles.inpt_label}>
                    {field.label}
                    <em className={Styles.chk_point}>(필수)</em>
                </em>
                {/* [D] on 클래스가 들어오면  imico_pop_select_arr_up 으로 바꿔주세요 */}
                <a href="#NULL" onClick={e => this.handleClick(e, () => this.setState({ [name]: !optionState[name] }))}
                   className={`${Styles.select_link} ${CommonUtils.toggleClass(optionState.select_sex, Styles.imico_pop_select_arr_up, Styles.imico_pop_select_arr_down)}`}>
                    {placeholder}
                </a>
                {isErr ? <p className={Styles.error_dsc}>{meta.error}</p> : ''}
                {/* 공통 툴팁의 화살표 기본 위치는 가운데 입니다. */}
                <div className={Styles.tooltip_box}>
                    <div className={Styles.tooltip_inner}>
                        <ul className={Styles.select_list}>
                            {field.options.map(option => <li key={option.value} className={Styles.list_item} onClick={e => setValue(e, option)}><a href="#NULL" className={Styles.list_link}>{option.name}</a>
                            </li>)}
                        </ul>
                    </div>
                    <span className={Styles.arr}><i></i></span>
                </div>
                <input {...input} type="hidden" id={id}/>
            </div>
        );
    }

    renderInput(fieldConfig) {
        const { meta, input, id } = fieldConfig;
        const name = input.name;
        const field = FIELDS[name];

        return (
            <div
                className={`${Styles.pop_inpt_text}  ${CommonUtils.toggleClass(meta.touched && meta.error, Styles.error)}`}>
                <label htmlFor={name} className={Styles.inpt_label}>{field.label} <em className={Styles.chk_point}>(선택)</em></label>
                <field.type {...input} type={field.subType} id={id} placeholder={field.placeholder}/>
                {meta.touched && meta.error ? <p className={Styles.error_dsc}>{meta.error}</p> : <p className={Styles.email_dsc}>{field.message}</p>}
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
                    <div className={Styles.depth_list}>
                        <span className={Styles.on}>1</span>
                        <span className={Styles.on}>2</span>
                        {/* [D] 최종 단계에 있을 곳에 <em className={Styles.blind}>단계</em> 찍어주세요  */}
                        <span className={Styles.on}>3<em className={Styles.blind}>단계</em></span>
                    </div>
                    <form onSubmit={handleSubmit(props => this.onSubmit(props))}>
                        <h3 className={Styles.cont_tit}>개인정보 입력</h3>
                        <div className={Styles.input_box}>
                            {Object.keys(FIELDS).map(name => <Field id={name} name={name} key={name} optionState={this.state} component={this.renderField}/>)}
                        </div>
                        <div className={Styles.pop_btn_box}>
                            <a href="#NULL" onClick={e => this.handleClick(e, () => this.props.moveTo(1))}>이전</a>
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
    SubmitAction: (data) => dispatch(SubmitAction(data)),
});

export default reduxForm({
    form: 'InfoForm',
    validate,
    asyncValidate,
    asyncBlurFields: Object.keys(FIELDS).filter(name => FIELDS[name].asyncValidate),
})(connect(mapStateToProps, mapDispatchToProps)(InfoForm));



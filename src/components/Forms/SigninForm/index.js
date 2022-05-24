import React, { useRef, useState } from "react";
import { useNavigate } from "react-router";

//Form
import { useForm } from "react-hook-form";

//Field
import Field from "@components/Field";

//Icons
import logo from "@assets/img/logo.svg";
import key from "@assets/img/keyactive.svg";

//Components
import Button from "@components/Button";
import SpinnerLoad from "@components/SpinnerLoad";

//Styles
import "../Forms.scss";
import Checkbox from "../../Checkbox";
import { useValidator } from "../../../hooks/useValidator";

const SigninForm = ({ fetchData }) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [secondName, setSecondName] = useState("");
    const [phone, setPhone] = useState("+7");
    const {
        setError,
        errorData: { fields, error },
        ...validator
    } = useValidator();
    const [loaded, setLoaded] = useState(true);
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm();

    const onChangeHandler = (ev) => {
        setValue(ev.currentTarget.name, ev.currentTarget.value);
    };

    let btnRef = useRef([]);

    const registerHandler = async (e) => {
        e.preventDefault();

        if (!validator.isPhoneValid(phone)) {
            return;
        }
        if (!validator.isEmailValid(email)) {
            return;
        }
        if (!validator.isFirstNameValid(firstName)) {
            return;
        }
        if (!validator.isSecondNameValid(secondName)) {
            return;
        }
        if (!validator.isPasswordValid(password, 8)) {
            return;
        }
        if (!validator.isPasswordConfirmValid(password, 8, confirmPassword)) {
            return;
        }

        const body = {
            email,
            password,
            first_name: firstName,
            last_name: secondName,
            phone_number: phone,
        };

        setLoaded(false);

        fetchData(body);

        setLoaded(true);
    };

    return (
        <div className="form">
            <div className="form__title">
                <span>РЕГИСТРАЦИЯ</span>
                <img src={logo} alt="logo" />
            </div>
            <form
                onSubmit={(e) => registerHandler(e)}
                noValidate
                autoComplete="off"
            >
                <Field
                    name="first_name"
                    label="Имя"
                    classNames={`${fields.firstName && "error"}`}
                    onChange={(e) => {
                        validator.isFirstNameValid(e.target.value);
                        setFirstName(e.target.value);
                    }}
                />
                {fields.firstName && (
                    <span className="form__error">{error}</span>
                )}
                <Field
                    name="last_name"
                    label="Фамилия"
                    classNames={`${fields.secondName && "error"}`}
                    onChange={(e) => {
                        validator.isSecondNameValid(e.target.value);
                        setSecondName(e.target.value);
                    }}
                />
                {fields.secondName && (
                    <span className="form__error">{error}</span>
                )}
                <Field
                    name="email"
                    label="Email"
                    classNames={`${fields.email && "error"}`}
                    onChange={(e) => {
                        validator.isEmailValid(e.target.value);
                        setEmail(e.target.value);
                    }}
                />
                {fields.email && <span className="form__error">{error}</span>}
                <Field
                    name="phone"
                    label="Телефон"
                    classNames={`${fields.phone && "error"}`}
                    onChange={(e) => {
                        validator.isPhoneValid(e.target.value);
                        setPhone(e.target.value);
                    }}
                />
                {fields.phone && <span className="form__error">{error}</span>}
                <Field
                    name="password"
                    label="Пароль"
                    type="password"
                    classNames={`${fields.password && "error"}`}
                    onChange={(e) => {
                        validator.isPasswordValid(e.target.value, 4);
                        setPassword(e.target.value);
                    }}
                />
                {fields.password && (
                    <span className="form__error">{error}</span>
                )}
                <Field
                    name="confirm_password"
                    label="Повторите пароль"
                    type="password"
                    classNames={`${fields.password_confirm && "error"}`}
                    onChange={(e) => {
                        validator.isPasswordConfirmValid(
                            password,
                            8,
                            e.target.value
                        );
                        setConfirmPassword(e.target.value);
                    }}
                />
                {fields.password_confirm && (
                    <span className="form__error">{error}</span>
                )}
                <div className="form__confirm">
                    <Checkbox />
                    <span>
                        Я принимаю условия <a href="#">соглашения</a>
                    </span>
                </div>
                <Button
                    disabled={validator.hasInvalidFields()}
                    ref={btnRef}
                    className="form__button"
                    theme={"beforesubmit"}
                    type="submit"
                >
                    <img src={key} alt="key" />
                    {!loaded ? <SpinnerLoad /> : "ЗАРЕГИСТРИРОВАТЬСЯ"}
                </Button>
            </form>
        </div>
    );
};

export default SigninForm;

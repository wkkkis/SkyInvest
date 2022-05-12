import React, { useState } from "react";
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

const SigninForm = () => {
    const navigate = useNavigate();
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

    const onSubmitHandler = async (data) => {
        setLoaded(false);

        console.log(data);

        setLoaded(true);
    };

    const showFioError = () => {
        switch (errors.fio && errors.fio.type) {
            case "minLength":
                return "Введите больше 1 символа";
            case "maxLength":
                return "Введите меньше 50 символов";
            case "required":
                return "Поле обязательно";
            default:
                return null;
        }
    };

    const showEmailError = () => {
        switch (errors.email && errors.email.type) {
            case "minLength":
                return "Введите больше 1 символа";
            case "maxLength":
                return "Введите меньше 50 символов";
            case "required":
                return "Поле обязательно";
            default:
                return null;
        }
    };

    const showPhoneError = () => {
        switch (errors.telephone && errors.telephone.type) {
            case "minLength":
                return "Введите больше 1 символа";
            case "maxLength":
                return "Введите меньше 50 символов";
            case "required":
                return "Поле обязательно";
            default:
                return null;
        }
    };

    const showPasswordError = () => {
        switch (errors.password && errors.password.type) {
            case "minLength":
                return "Введите больше 1 символа";
            case "maxLength":
                return "Введите меньше 50 символов";
            case "required":
                return "Поле обязательно";
            default:
                return null;
        }
    };

    const showConfirmError = () => {
        switch (errors.confirm && errors.confirm.type) {
            case "minLength":
                return "Введите больше 1 символа";
            case "maxLength":
                return "Введите меньше 50 символов";
            case "required":
                return "Поле обязательно";
            default:
                return null;
        }
    };

    return (
        <div className="form">
            <div className="form__title">
                <span>РЕГИСТРАЦИЯ</span>
                <img src={logo} alt="logo" />
            </div>
            <form
                onSubmit={handleSubmit(onSubmitHandler)}
                noValidate
                autoComplete="off"
            >
                <Field
                    label="ФИО"
                    {...register("fio", { required: true, maxLength: 50 })}
                    onChange={onChangeHandler}
                />
                {errors.fio && (
                    <span className="form__error">{showFioError()}</span>
                )}
                <Field
                    label="Email"
                    {...register("email", { required: true, maxLength: 50 })}
                    onChange={onChangeHandler}
                />
                {errors.email && (
                    <span className="form__error">{showEmailError()}</span>
                )}
                <Field
                    label="Телефон"
                    {...register("telephone", {
                        required: true,
                        maxLength: 50,
                    })}
                    onChange={onChangeHandler}
                />
                {errors.telephone && (
                    <span className="form__error">{showPhoneError()}</span>
                )}
                <Field
                    label="Пароль"
                    {...register("password1", {
                        required: true,
                        maxLength: 50,
                    })}
                    type="password"
                    onChange={onChangeHandler}
                />
                {errors.password && (
                    <span className="form__error">{showPasswordError()}</span>
                )}
                <Field
                    label="Повторите пароль"
                    {...register("password2", {
                        required: true,
                        maxLength: 50,
                    })}
                    type="password"
                    onChange={onChangeHandler}
                />
                {errors.password && (
                    <span className="form__error">{showPasswordError()}</span>
                )}
                <div className="form__confirm">
                    <Checkbox {...register("confirm")} />
                    <span>
                        Я принимаю условия <a href="#">соглашения</a>
                    </span>
                </div>
                <Button
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

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
import Checkbox from "../../Checkbox";

//Styles
import "../Forms.scss";

//Router
import { router } from "@utils/router";
import { Link } from "react-router-dom";

const LoginForm = (loginFunc) => {
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

    return (
        <div className="form">
            <div className="form__title">
                <span>ВХОД</span>
                <img src={logo} alt="logo" />
            </div>
            <form
                onSubmit={handleSubmit(onSubmitHandler)}
                noValidate
                autoComplete="off"
            >
                <Field
                    label="Email"
                    {...register("email", { required: true, maxLength: 50 })}
                    onChange={onChangeHandler}
                />
                {errors.email && (
                    <span className="form__error">{showEmailError()}</span>
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
                <div className="form__confirm">
                    <Checkbox {...register("confirm")} />
                    <span>
                        Я принимаю условия{" "}
                        <Link to={router.reset_password}>Забыл пароль</Link>
                    </span>
                </div>
                <Button
                    className="form__button"
                    theme={"beforesubmit"}
                    type="submit"
                >
                    <img src={key} alt="key" />
                    {!loaded ? <SpinnerLoad /> : "АВТОРИЗОВАТЬСЯ"}
                </Button>
                <Button
                    className="form__button"
                    theme={"aftersubmit"}
                    onClick={() => navigate(router.signin)}
                >
                    Зарегистрироваться
                </Button>
            </form>
        </div>
    );
};

export default LoginForm;

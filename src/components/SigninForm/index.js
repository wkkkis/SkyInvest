import React, { useState } from "react";
import { useNavigate } from "react-router";

//Form
import { useForm } from "react-hook-form";

//Field
import Field from "@components/Field";

//Components
import Button from "@components/Button";
import SpinnerLoad from "@components/SpinnerLoad";

//Style
import "./SignIn.scss";

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
        <div className="signin">
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
                {errors.email && <span>{showEmailError()}</span>}
                <Field
                    label="Email"
                    {...register("email", { required: true, maxLength: 50 })}
                    onChange={onChangeHandler}
                />
                {errors.email && <span>{showEmailError()}</span>}
                <Field
                    label="Телефон"
                    {...register("telephone", {
                        required: true,
                        maxLength: 50,
                    })}
                    onChange={onChangeHandler}
                />
                {errors.email && <span>{showEmailError()}</span>}
                <Field
                    label="Пароль"
                    {...register("password1", {
                        required: true,
                        maxLength: 50,
                    })}
                    type="password"
                    onChange={onChangeHandler}
                />
                {errors.password && <span>{showPasswordError()}</span>}
                <Field
                    label="Повторите пароль"
                    {...register("password2", {
                        required: true,
                        maxLength: 50,
                    })}
                    type="password"
                    onChange={onChangeHandler}
                />
                {errors.password && <span>{showPasswordError()}</span>}
                <Button
                    className="signin__button"
                    theme={"beforesubmit"}
                    type="submit"
                >
                    {!loaded ? <SpinnerLoad /> : "ЗАРЕГИСТРИРОВАТЬСЯ"}
                </Button>
            </form>
        </div>
    );
};

export default SigninForm;

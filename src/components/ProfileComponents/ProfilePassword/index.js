import React, { useState } from "react";

//Form
import { useForm } from "react-hook-form";

//Field
import Field from "@components/Field";

//Components
import Button from "@components/Button";
import SpinnerLoad from "@components/SpinnerLoad";
import Select from "@components/Select";
import UserInfoBlock from "@components/UI/UserInfoBlock";
import { useDispatch, useSelector } from "react-redux";
import { changePassword } from "../../../store/user/user.api";

const ProfilePassword = () => {
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        reset,
    } = useForm();

    const { loaded } = useSelector((state) => state.user);

    const onChangeHandler = (ev) => {
        setValue(ev.currentTarget.name, ev.currentTarget.value);
    };

    const onSubmitHandler = async (data) => {
        dispatch(changePassword(data));
        reset();
    };

    const showFioError = () => {
        switch (errors.old_password && errors.old_password.type) {
            case "minLength":
                return "Введите больше";
            case "maxLength":
                return "Введите меньше";
            case "required":
                return "Поле Старый пароль обязательна";
            default:
                return null;
        }
    };

    const showEmailError = () => {
        switch (errors.new_password && errors.new_password.type) {
            case "minLength":
                return "Введите больше";
            case "maxLength":
                return "Введите меньше";
            case "required":
                return "Поле Новый пароль обязательна";
            default:
                return null;
        }
    };

    const showPhoneError = () => {
        switch (errors.return_new_password && errors.return_new_password.type) {
            case "minLength":
                return "Введите больше";
            case "maxLength":
                return "Введите меньше";
            case "required":
                return "Поле Повторите новый пароль обязательна";
            default:
                return null;
        }
    };

    return (
        <div className="main">
            <div className="main__title">
                <span>Пароль</span>
            </div>
            <div className="main__content">
                <form
                    onSubmit={handleSubmit(onSubmitHandler)}
                    className="main__content__form"
                    noValidate
                    autoComplete="off"
                >
                    <div className="main__content__form__fio">
                        <Field
                            label="Старый пароль"
                            {...register("old_password", {
                                required: true,
                                minLength: 2,
                                maxLength: 50,
                            })}
                            onChange={onChangeHandler}
                        />
                        {errors.old_password && (
                            <span className="form__error">
                                {showFioError()}
                            </span>
                        )}
                    </div>
                    <div className="main__content__form__email">
                        <Field
                            label="Новый пароль"
                            {...register("new_password", {
                                required: true,
                                minLength: 2,
                                maxLength: 50,
                            })}
                            onChange={onChangeHandler}
                        />
                        {errors.new_password && (
                            <span className="form__error">
                                {showEmailError()}
                            </span>
                        )}
                    </div>
                    <div className="main__content__form__phone">
                        <Field
                            label="Повторите новый пароль"
                            {...register("new_password2", {
                                required: true,
                                minLength: 2,
                                maxLength: 50,
                            })}
                            onChange={onChangeHandler}
                        />
                        {errors.new_password2 && (
                            <span className="form__error">
                                {showPhoneError()}
                            </span>
                        )}
                    </div>
                    <Button
                        type="submit"
                        className="googleauth_edit__button"
                        theme="beforesubmit"
                        disabled={loaded}
                    >
                        <svg
                            width="14"
                            height="13"
                            viewBox="0 0 14 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12.7148 2.80469L10.418 0.507812C10.2266 0.316406 9.81641 0.125 9.51562 0.125H2.625C1.64062 0.125 0.875 0.917969 0.875 1.875V10.625C0.875 11.6094 1.64062 12.375 2.625 12.375H11.375C12.332 12.375 13.125 11.6094 13.125 10.625V3.73438C13.125 3.43359 12.9336 3.02344 12.7148 2.80469ZM7 10.625C6.01562 10.625 5.25 9.85938 5.25 8.875C5.25 7.91797 6.01562 7.125 7 7.125C7.95703 7.125 8.75 7.91797 8.75 8.875C8.75 9.85938 7.95703 10.625 7 10.625ZM9.625 4.9375C9.625 5.18359 9.40625 5.375 9.1875 5.375H3.0625C2.81641 5.375 2.625 5.18359 2.625 4.9375V2.3125C2.625 2.09375 2.81641 1.875 3.0625 1.875H9.1875C9.40625 1.875 9.625 2.09375 9.625 2.3125V4.9375Z"
                                fill="#FDFDFE"
                            />
                        </svg>

                        <span>Сохранить</span>
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default ProfilePassword;

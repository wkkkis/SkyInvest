import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

//Form
import { useForm } from "react-hook-form";

//Field
import Field from "@components/Field";

//Components
import Button from "@components/Button";
import SpinnerLoad from "@components/SpinnerLoad";
import Select from "../../Select";

//Styles
import "../Forms.scss";
import "./USDT.scss";
import { useDispatch, useSelector } from "react-redux";
import {
    ustdConfirm,
    ustdDeposit,
    ustdPayment,
} from "../../../store/payment/pay.api";
import MessageBox from "../../MessageBox";

const USDTForm = () => {
    const dispatch = useDispatch();
    const [error, setError] = useState(false);
    const { usdt_for_pay, message, loaded, confirm } = useSelector(
        (state) => state.pay
    );
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
        dispatch(ustdDeposit(data.usdt));
    };

    const showCashError = () => {
        switch (errors.cash && errors.cash.type) {
            case "minLength":
                return "Введите больше";
            case "maxLength":
                return "Введите меньше";
            case "required":
                return "Поле сумма пополнения обязательна";
            default:
                return null;
        }
    };

    useEffect(() => {
        dispatch(ustdPayment());
    }, []);

    const onConfirmClick = () => {
        dispatch(ustdConfirm());
    };

    useEffect(() => {
        if (message) {
            setError(true);
        }
    }, [message]);

    return (
        <div className="form">
            {error && message
                ? Object.values(message).map((e) => (
                      <MessageBox
                          message={e}
                          onChange={(e) => setError(e)}
                          error={true}
                      />
                  ))
                : null}
            <div className="form__title">
                <span>USDT</span>
            </div>
            <form
                onSubmit={handleSubmit(onSubmitHandler)}
                noValidate
                autoComplete="off"
            >
                {confirm && (
                    <Field
                        label="Сумма пополнения"
                        type="money"
                        {...register("usdt", {
                            required: true,
                            minLength: 2,
                            maxLength: 50,
                        })}
                        error={errors.usdt && "Поле обязательна"}
                        onChange={onChangeHandler}
                    />
                )}
                {usdt_for_pay && (
                    <>
                        <span>Необходимо отправить USDT на этот адрес</span>
                        <span className="usdt_key">{usdt_for_pay.address}</span>
                    </>
                )}
                {errors.cash && (
                    <span className="form__error">{showCashError()}</span>
                )}
                <Button
                    onClick={
                        message === "usdt_confirm" ? () => {} : onConfirmClick
                    }
                    className="form__button"
                    theme={"beforesubmit"}
                    type="submit"
                >
                    {loaded ? (
                        <SpinnerLoad />
                    ) : (
                        <>
                            <svg
                                width="24"
                                height="25"
                                viewBox="0 0 24 25"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    opacity="1"
                                    d="M10.9219 15.0781C11.4844 15.6875 12.4688 15.6875 13.0312 15.0781L17.5312 10.5781C18.1406 10.0156 18.1406 9.03125 17.5312 8.46875C16.9688 7.85938 15.9844 7.85938 15.4219 8.46875L13.5 10.3906V2C13.5 1.20312 12.7969 0.5 12 0.5C11.1562 0.5 10.5 1.20312 10.5 2V10.3906L8.53125 8.46875C8.25 8.1875 7.875 8 7.5 8C7.07812 8 6.70312 8.1875 6.42188 8.46875C5.8125 9.03125 5.8125 10.0156 6.42188 10.5781L10.9219 15.0781ZM22.5 15.5H18L16.5 18.5H7.5L6 15.5H1.5C0.65625 15.5 0 16.2031 0 17V22.25C0 23.5156 0.984375 24.5 2.25 24.5H21.75C22.9688 24.5 24 23.5156 24 22.25V17C24 16.2031 23.2969 15.5 22.5 15.5Z"
                                    fill="white"
                                />
                            </svg>

                            <span>Оплатил</span>
                        </>
                    )}
                </Button>
            </form>
        </div>
    );
};

export default USDTForm;

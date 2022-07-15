import React, { useEffect, useState } from "react";

//Components
import MenuToggle from "@components/MenuToggle";
import Select from "@components/Select";
import Field from "@components/Field";
import Button from "@components/Button";

//Styles
import "./CreateGroupSidebar.scss";
import "react-calendar/dist/Calendar.css";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Calendar } from "react-calendar";
import { createGroup } from "../../store/group/group.api";
import BinanceActivation from "../Modals/BinanceActivation";
import { binanceApiActive } from "../../store/user/user.api";
import SpinnerLoad from "../SpinnerLoad";
import MessageBox from "../MessageBox";

const CreateGroupSidebar = ({ isOpen, toggle }) => {
    const dispatch = useDispatch();
    const [dateTwoShow, setDateTwoShow] = useState(false);
    const [dateOneShow, setDateOneShow] = useState(false);
    const [dateOne, setDateOne] = useState(null);
    const [dateTwo, setDateTwo] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [active_binance, set_active_binance] = useState(false);
    const [select, setSelect] = useState("");
    const { message } = useSelector((state) => state.group);
    const { complete } = useSelector((state) => state.user);
    const [error, setError] = useState({
        title: "pending",
        description: "pending",
        group_size: "pending",
        percent_from_income: "pending",
        need_sum: "pending",
        min_entry_sum: "pending",
        max_entry_sum: "pending",
        birth_day: "pending",
    });

    const validate = (name, value) => {
        setError((prevState) => ({
            ...prevState,
            [name]: value ? value : false,
        }));
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm();

    useEffect(() => {
        message?.message?.forEach((e) => {
            if (e === "Необходимо указать binance api ключи") {
                set_active_binance(true);
            }
        });

        if (complete === "Вы успешно стали трейдером") {
            set_active_binance(false);
        }
    }, [message, complete]);

    const binanceActivation = (data) => {
        dispatch(binanceApiActive(data));
    };

    const onChangeHandler = (ev) => {
        setValue(ev.currentTarget.name, ev.currentTarget.value);
    };

    const setDateTwoToggle = () => {
        setDateTwoShow(true);
        setDateOneShow(false);
    };

    const setDateOneToggle = () => {
        setDateTwoShow(false);
        setDateOneShow(true);
    };

    const submitValidate = () => {
        Object.entries(error).forEach((e) => {
            setError((prevState) => ({
                ...prevState,
                [e[0]]: e[1] !== "pending" ? e[1] : false,
            }));
        });
    };

    const onSubmitHandler = async (data) => {
        setLoaded(true);

        if (select && dateOne && dateTwo) {
            if (
                parseInt(data.need_sum) > parseInt(data.max_entry_sum) &&
                parseInt(data.need_sum) > parseInt(data.min_entry_sum) &&
                parseInt(data.group_size) <= 50 &&
                50 <= parseInt(data.need_sum)
            ) {
                const obj = {
                    ...data,
                    start_date: new Date(dateOne).toISOString(),
                    end_date: new Date(dateTwo).toISOString(),
                };
                dispatch(createGroup(obj));
            } else {
                if (parseInt(data.need_sum) < parseInt(data.max_entry_sum)) {
                    setError((prevState) => ({
                        ...prevState,
                        max_entry_sum: "limit",
                    }));
                }
                if (parseInt(data.need_sum) < parseInt(data.min_entry_sum)) {
                    setError((prevState) => ({
                        ...prevState,
                        min_entry_sum: "limit",
                    }));
                }
                if (parseInt(data.group_size) > 50) {
                    setError((prevState) => ({
                        ...prevState,
                        group_size: "limit",
                    }));
                }
                if (50 >= parseInt(data.need_sum)) {
                    setError((prevState) => ({
                        ...prevState,
                        need_sum: "limit",
                    }));
                }
            }
        }

        setLoaded(false);
    };

    useEffect(() => {
        let d = document.querySelector(".react-calendar__month-view__days");
        d?.addEventListener("click", (e) => {
            setTimeout(() => {
                setDateTwoShow(false);
                setDateOneShow(false);
            }, 0.5);
        });
    }, [dateOneShow, dateTwoShow]);

    return (
        <div className="create_group">
            <div className="create_group__sidebar">
                <div className="create_group__sidebar__title">
                    <div
                        className="create_group__sidebar__back"
                        onClick={() => toggle(false)}
                    ></div>
                    <span>Создать группу</span>
                    <MenuToggle isOpen={true} toggle={toggle} />
                </div>
                <form
                    onSubmit={handleSubmit(onSubmitHandler)}
                    className="create_group__sidebar__content"
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "8px",
                        }}
                    >
                        <span className="f12">Цель создания группы</span>
                        <Select
                            defaultOption="Трейдинг"
                            onChange={(e) => setSelect(e)}
                        >
                            <li>Трейдинг</li>
                            <li>ICO</li>
                            <li>Другое</li>
                        </Select>
                    </div>
                    <Field
                        area={true}
                        label="Название группы"
                        {...register("title", {
                            required: true,
                            minLength: 2,
                            maxLength: 50,
                        })}
                        onChange={(e) => {
                            onChangeHandler(e);
                            validate("title", e.target.value);
                        }}
                        error={!error.title && "Заполните поле"}
                    />
                    <Field
                        area={true}
                        label="Описание группы"
                        {...register("description", {
                            required: true,
                            minLength: 2,
                            maxLength: 500,
                        })}
                        onChange={(e) => {
                            onChangeHandler(e);
                            validate("description", e.target.value);
                        }}
                        error={!error.description && "Заполните поле"}
                    />
                    <Field
                        label="Количество людей в группе"
                        {...register("group_size", {
                            required: true,
                        })}
                        type="user_count"
                        onChange={(e) => {
                            onChangeHandler(e);
                            validate("group_size", e.target.value);
                        }}
                        error={
                            error.group_size === "limit"
                                ? "Максимальное количество инвесторов не должно превышать 50"
                                : error.group_size
                                ? ""
                                : "Заполните поле"
                        }
                    />
                    <Field
                        label="Процент начисления"
                        {...register("percent_from_income", {
                            required: true,
                            minLength: 1,
                            maxLength: 2,
                        })}
                        type="number"
                        onChange={(e) => {
                            onChangeHandler(e);
                            validate("percent_from_income", e.target.value);
                        }}
                        error={!error.percent_from_income && "Заполните поле"}
                    />
                    <Field
                        label="Необходимая сумма"
                        {...register("need_sum", {
                            required: true,
                            minLength: 2,
                            maxLength: 5,
                        })}
                        type="money"
                        onChange={(e) => {
                            onChangeHandler(e);
                            validate("need_sum", e.target.value);
                        }}
                        error={
                            error.need_sum === "limit"
                                ? "Минимальная сумма 50"
                                : error.need_sum
                                ? ""
                                : "Заполните поле"
                        }
                    />
                    <div className="create_group__sidebar__content__sum">
                        <Field
                            label="Минимальная сумма входа"
                            {...register("min_entry_sum", {
                                required: true,
                                minLength: 2,
                                maxLength: 5,
                            })}
                            type="money"
                            onChange={(e) => {
                                onChangeHandler(e);
                                validate("min_entry_sum", e.target.value);
                            }}
                            error={
                                error.min_entry_sum === "limit"
                                    ? "Лимит превышен"
                                    : error.min_entry_sum
                                    ? ""
                                    : "Заполните поле"
                            }
                        />
                        <Field
                            label="Максимальная сумма входа"
                            {...register("max_entry_sum", {
                                required: true,
                                minLength: 2,
                                maxLength: 5,
                            })}
                            type="money"
                            onChange={(e) => {
                                onChangeHandler(e);
                                validate("max_entry_sum", e.target.value);
                            }}
                            error={
                                error.max_entry_sum === "limit"
                                    ? "Лимит превышен"
                                    : error.max_entry_sum
                                    ? ""
                                    : "Заполните поле"
                            }
                        />
                    </div>
                    <div className="birthday">
                        <Field
                            label="Дата начала"
                            placeholder="-- / -- / ----"
                            name="birth_day"
                            onFocus={setDateOneToggle}
                            type="date"
                            value={
                                dateOne
                                    ? new Date(dateOne).toLocaleDateString()
                                    : ""
                            }
                            error={
                                !dateOne && errors.birthDay && "Заполните поле"
                            }
                        />
                        {dateOneShow ? (
                            <Calendar
                                className="calendar_one"
                                onChange={(e) => {
                                    setDateOne(e);
                                }}
                                value={dateOne}
                            />
                        ) : null}
                    </div>
                    <div className="birthday">
                        <Field
                            label="Дата конца"
                            placeholder="-- / -- / ----"
                            name="birth_day"
                            onFocus={setDateTwoToggle}
                            type="date"
                            value={
                                dateOne
                                    ? new Date(dateTwo).toLocaleDateString()
                                    : ""
                            }
                            error={
                                !dateTwo && errors.birthDay && "Заполните поле"
                            }
                        />
                        {dateTwoShow ? (
                            <Calendar
                                className="calendar_one"
                                onChange={(e) => {
                                    setDateTwo(e);
                                }}
                                value={dateOne}
                            />
                        ) : null}
                    </div>
                    <Button
                        theme="beforesubmit"
                        type="submit"
                        disabled={loaded}
                        onClick={submitValidate}
                    >
                        {!loaded ? "Создать группу" : <SpinnerLoad />}
                    </Button>
                </form>
                {active_binance && (
                    <BinanceActivation handleChange={binanceActivation} />
                )}
                {complete ? (
                    <MessageBox message={complete} error={false} />
                ) : null}
            </div>
        </div>
    );
};

export default CreateGroupSidebar;

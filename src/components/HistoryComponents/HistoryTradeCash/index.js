import React, { useEffect, useState } from "react";

//Components
import Field from "@components/Field";
import Select from "@components/Select";
import { Calendar } from "react-calendar";

//Styles
import "react-calendar/dist/Calendar.css";
import MessageBlock from "../../UI/MessageBlock";

const messagesData = [
    {
        succesfull: "failed",
        title: "Доход с копирования (#9379992)",
        date: "2019-06-11T00:00",
        sum: "200",
    },
    {
        succesfull: "fechted",
        title: "Доход с копирования (#9379992)",
        date: "2019-06-11T00:00",
        sum: "200",
    },
    {
        succesfull: "load",
        title: "Доход с копирования (#9379992)",
        date: "2019-06-11T00:00",
        sum: "2300",
    },
];

const TradeCash = () => {
    const [dateOneShow, setDateOneShow] = useState(false);
    const [dateTwoShow, setDateTwoShow] = useState(false);
    const [dateOne, setDateOne] = useState(null);
    const [dateTwo, setDateTwo] = useState(null);
    const [select, setSelect] = useState("Все");

    const setDateTwoToggle = () => {
        setDateTwoShow(true);
        setDateOneShow(false);
    };

    const setDateOneToggle = () => {
        setDateOneShow(true);
        setDateTwoShow(false);
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
        <div className="history_page history_payment">
            <div className="history_page__title">
                <span>Доходы с копирования</span>
            </div>
            <div className="history_page__filter">
                <div className="history_page__filter__date">
                    <Field
                        label="Дата от"
                        placeholder="-- / -- / ----"
                        onFocus={setDateOneToggle}
                        value={
                            dateOne
                                ? new Date(dateOne).toLocaleDateString()
                                : ""
                        }
                    />
                    {dateOneShow ? (
                        <Calendar
                            className="calendar_one"
                            onChange={setDateOne}
                            value={dateOne}
                        />
                    ) : null}
                </div>
                <div className="history_page__filter__date">
                    <Field
                        label="Дата от"
                        placeholder="-- / -- / ----"
                        onFocus={setDateTwoToggle}
                        value={
                            dateTwo
                                ? new Date(dateOne).toLocaleDateString()
                                : ""
                        }
                    />
                    {dateTwoShow ? (
                        <Calendar
                            className="calendar_one"
                            onChange={setDateTwo}
                            value={dateTwo}
                        />
                    ) : null}
                </div>
                <div className="history_page__filter__select">
                    <label>Статус</label>
                    <Select
                        defaultOption={select}
                        onChange={(e) => setSelect(e)}
                    >
                        <li>Все</li>
                        <li>Успешно</li>
                        <li>Неуспешно</li>
                        <li>Ожидание</li>
                    </Select>
                </div>
            </div>
            <div className="history_page__messages_info">
                <div className="history_page__messages_info__title opacity f12">
                    <span>Список операций</span>
                </div>
                <div className="history_page__messages_info__content">
                    {messagesData.map((e) => (
                        <MessageBlock {...e} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TradeCash;

import React, { useEffect, useState } from "react";

//Components
import Field from "@components/Field";
import Select from "@components/Select";
import { Calendar } from "react-calendar";

//Styles
import "react-calendar/dist/Calendar.css";
import MessageBlock from "../../UI/MessageBlock";
import { useDispatch, useSelector } from "react-redux";
import { getHistoryPayments } from "../../../store/history/history.api";

const Payment = () => {
    const [dateOneShow, setDateOneShow] = useState(false);
    const [dateTwoShow, setDateTwoShow] = useState(false);
    const [dateOne, setDateOne] = useState(null);
    const [dateTwo, setDateTwo] = useState(null);
    const [select, setSelect] = useState("Все");
    const [data, setData] = useState([]);

    const dispatch = useDispatch();

    const { history } = useSelector((state) => state.history);

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

    useEffect(() => {
        dispatch(getHistoryPayments());
    }, []);

    useEffect(() => {
        if (history && history.payments) {
            setData(
                [...history.payments, ...history.tether_payments].sort(
                    function (a, b) {
                        return new Date(b.created) - new Date(a.created);
                    }
                )
            );
        }
    }, [history]);

    useEffect(() => {
        if (dateOne && !dateTwo) {
            const start = new Date(dateOne).toISOString().split("T")[0];
            const end = new Date().toISOString().split("T")[0];
            dispatch(getHistoryPayments(start, end));
        } else if (!dateOne && dateTwo) {
            const start = new Date().toISOString().split("T")[0];
            const end = new Date(dateTwo).toISOString().split("T")[0];
            dispatch(getHistoryPayments(start, end));
        } else if (dateOne && dateTwo) {
            const start = new Date(dateOne).toISOString().split("T")[0];
            const end = new Date(dateTwo).toISOString().split("T")[0];
            dispatch(getHistoryPayments(start, end));
        }
    }, [dateOne, dateTwo]);

    return (
        <div className="history_page history_payment">
            <div className="history_page__title">
                <span>Пополнение</span>
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
                                ? new Date(dateTwo).toLocaleDateString()
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
                    {data && data.length
                        ? data.map((e) => (
                              <MessageBlock
                                  e={e}
                                  payment={true}
                                  withTime={true}
                              />
                          ))
                        : null}
                </div>
            </div>
        </div>
    );
};

export default Payment;

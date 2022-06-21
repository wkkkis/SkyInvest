import React, { useEffect, useState } from "react";

//Components
import Field from "@components/Field";
import Select from "@components/Select";
import { Calendar } from "react-calendar";

//Styles
import "react-calendar/dist/Calendar.css";
import MessageBlock from "../../UI/MessageBlock";
import { useDispatch, useSelector } from "react-redux";
import { getHistoryJoinGroup } from "../../../store/history/history.api";

const Group = () => {
    const [dateOneShow, setDateOneShow] = useState(false);
    const [dateTwoShow, setDateTwoShow] = useState(false);
    const [dateOne, setDateOne] = useState(null);
    const [dateTwo, setDateTwo] = useState(null);
    const [select, setSelect] = useState("Все");

    const dispatch = useDispatch();

    const { history } = useSelector((state) => state.history);

    useEffect(() => {
        dispatch(getHistoryJoinGroup());
    }, []);

    const setDateTwoToggle = () => {
        setDateTwoShow(true);
        setDateOneShow(false);
    };

    const setDateOneToggle = () => {
        setDateOneShow(true);
        setDateTwoShow(false);
    };

    document.addEventListener("click", (e) => {
        if (e.target.localName !== "input") {
            if (
                e.path[1].className.includes("react-calendar") ||
                e.path[3].className.includes("react-calendar") ||
                e.path[4].className.includes("react-calendar")
            ) {
                return;
            } else {
                setDateOneShow(false);
                setDateTwoShow(false);
            }
        }
    });

    useEffect(() => {
        if (dateOne && !dateTwo) {
            const start = new Date(dateOne).toISOString().split("T")[0];
            const end = new Date().toISOString().split("T")[0];
            dispatch(getHistoryJoinGroup(start, end));
        } else if (!dateOne && dateTwo) {
            const start = new Date().toISOString().split("T")[0];
            const end = new Date(dateTwo).toISOString().split("T")[0];
            dispatch(getHistoryJoinGroup(start, end));
        } else if (dateOne && dateTwo) {
            const start = new Date(dateOne).toISOString().split("T")[0];
            const end = new Date(dateTwo).toISOString().split("T")[0];
            dispatch(getHistoryJoinGroup(start, end));
        }
    }, [dateOne, dateTwo]);

    return (
        <div className="history_page history_payment">
            <div className="history_page__title">
                <span>Вступление в группы</span>
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
                    {history && history.length
                        ? history.map((e) => <MessageBlock e={e} />)
                        : null}
                </div>
            </div>
        </div>
    );
};

export default Group;

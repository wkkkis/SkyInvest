import React from "react";

//Helpers
import { dateFormatter } from "@utils/stringHelper";

//Styles
import "./MessageBlock.scss";

const MessageBlock = ({ e, payment = false, cash = false }) => {
    return (
        <div className="messageblock">
            <div className="messageblock__header">
                <div className="messageblock__header__title">
                    <span>
                        {payment
                            ? "Пополнение"
                            : cash
                            ? "Вывод"
                            : `Вступление в группу (#${e?.id})`}
                    </span>
                </div>
                <div className="messageblock__header__success">
                    <span
                        className={
                            payment || cash
                                ? e?.status === "expectation"
                                    ? "load"
                                    : e?.status === "success"
                                    ? "success"
                                    : "fail"
                                : "success"
                        }
                    >
                        {payment || cash
                            ? e?.status === "expectation"
                                ? "Ожидание"
                                : e?.status === "success"
                                ? "Успешно"
                                : "Не успешно"
                            : "Успешно"}
                    </span>
                </div>
            </div>
            {/* {card ? (
                <div className="messageblock__card">
                    <span>Кошолек:</span>
                    <span className="opacity">{card}</span>
                </div>
            ) : null} */}
            <div className="messageblock__footer">
                <div className="messageblock__footer__date">
                    <span>Дата:</span>
                    <span className="opacity">
                        {dateFormatter(new Date(e?.date_joined || e?.created))}
                    </span>
                </div>
                <div className="messageblock__footer__sum">
                    <span>Сумма:</span>
                    <span className="opacity">
                        {e?.invested_sum || e?.amount}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default MessageBlock;

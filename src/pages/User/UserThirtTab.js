import React, { useEffect, useState } from "react";

import Button from "@components/Button";
import ReactPaginate from "react-paginate";
import { useDispatch } from "react-redux";
import { getTraderHistpry } from "../../store/group/group.api";
import Pagination from "react-responsive-pagination";

const UserThirdTab = ({ id }) => {
    const [itemOffset, setItemOffset] = useState(0);
    const [filter, setFilter] = useState("days");
    let totalCount = 17;
    const [currentPage, setCurrentPage] = useState(0);

    const dispatch = useDispatch();

    const handlePageClick = (event) => {
        const newOffset = event.selected;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    useEffect(() => {
        dispatch(getTraderHistpry(id));
    }, []);

    return (
        <div className="user_tab">
            <div className="user_tab__btns">
                <Button
                    className={filter === "days" ? "active" : "noactive"}
                    theme="aftersubmit"
                    onClick={() => setFilter("days")}
                >
                    Дни
                </Button>
                <Button
                    className={filter === "week" ? "active" : "noactive"}
                    theme="aftersubmit"
                    onClick={() => setFilter("week")}
                >
                    Неделя
                </Button>
                <Button
                    className={filter === "month" ? "active" : "noactive"}
                    theme="aftersubmit"
                    onClick={() => setFilter("month")}
                >
                    Месяц
                </Button>
                <Button
                    className={filter === "threemonth" ? "active" : "noactive"}
                    theme="aftersubmit"
                    onClick={() => setFilter("threemonth")}
                >
                    Три месяца
                </Button>
            </div>
            <div className="user_tab__table">
                <table>
                    <thead>
                        <tr>
                            <th>
                                <span>Время</span>
                            </th>
                            <th>
                                <span>Тикер</span>
                            </th>
                            <th>
                                <span>Сторона</span>
                            </th>
                            <th>
                                <span>Цена</span>
                            </th>
                            <th>
                                <span>Количество</span>
                            </th>
                            <th>
                                <span>Комиссия</span>
                            </th>
                            <th>
                                <span>Реализованная прибыль</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: 18 }).map((e) => (
                            <tr>
                                <td>
                                    <span>2022-04-18 16:28:39</span>
                                </td>
                                <td className="simbol">
                                    <div>
                                        <span>GMTUSDT</span>
                                        <p>Бессрочный</p>
                                    </div>
                                </td>
                                <td className="green">
                                    <span>Открыть лонг</span>
                                </td>
                                <td>
                                    <span>2.35939</span>
                                </td>
                                <td>
                                    <span>0.00471877 USD</span>
                                </td>
                                <td className="marga">
                                    <span>0.00471877 USD</span>
                                </td>
                                <td>
                                    <span>0.00471877 USD</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="user_tab__mobile_table">
                {Array.from({ length: 18 }).map((e, idx) => (
                    <div className="user_tab__mobile_table__card" key={idx + 1}>
                        <div className="user_tab__mobile_table__card__line">
                            <div className="line__title">
                                <span>Время</span>
                            </div>
                            <div className="line__desc simbol">
                                <span>2022-04-18 16:28:39</span>
                            </div>
                        </div>
                        <div className="user_tab__mobile_table__card__line">
                            <div className="line__title">
                                <span>Тикер</span>
                            </div>
                            <div className="line__desc">
                                <span>GMTUSDT</span>
                                <p>Бессрочный</p>
                            </div>
                        </div>
                        <div className="user_tab__mobile_table__card__line">
                            <div className="line__title">
                                <span>Сторона</span>
                            </div>
                            <div className="line__desc green">
                                <span>Открыть лонг</span>
                            </div>
                        </div>
                        <div className="user_tab__mobile_table__card__line">
                            <div className="line__title">
                                <span>Цена</span>
                            </div>
                            <div className="line__desc">
                                <span>2.35939</span>
                            </div>
                        </div>
                        <div className="user_tab__mobile_table__card__line">
                            <div className="line__title">
                                <span>Количество</span>
                            </div>
                            <div className="line__desc">
                                <span>11.79695 USDT</span>
                            </div>
                        </div>
                        <div className="user_tab__mobile_table__card__line">
                            <div className="line__title">
                                <span>Комиссия</span>
                            </div>
                            <div className="line__desc">
                                <span>0.00471877 USDT</span>
                            </div>
                        </div>
                        <div className="user_tab__mobile_table__card__line">
                            <div className="line__title">
                                <span>Реализованная прибыль</span>
                            </div>
                            <div className="line__desc">
                                <span>0.00471877</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="user_tab__paginate">
                <Pagination
                    disabledItemClassName="disabled-link"
                    total={totalCount}
                    current={currentPage}
                    onPageChange={(page) => setCurrentPage(page)}
                    nextLabel=">"
                    previousLabel="<"
                />
            </div>
        </div>
    );
};

export default UserThirdTab;

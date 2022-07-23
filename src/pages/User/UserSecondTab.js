import React, { useEffect, useState } from "react";

import Button from "@components/Button";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { getOpenTrades } from "../../store/group/group.api";
import MessageBox from "../../components/MessageBox";
import Pagination from "react-responsive-pagination";

const UserSecondTab = ({ id }) => {
    const [itemOffset, setItemOffset] = useState(0);
    const [filter, setFilter] = useState("days");
    let totalCount = 17;
    const [currentPage, setCurrentPage] = useState(0);

    const dispatch = useDispatch();

    const { groups, message, complete } = useSelector((state) => state.group);

    const handlePageClick = (event) => {
        const newOffset = event.selected;
        setItemOffset(newOffset);
    };

    useEffect(() => {
        dispatch(getOpenTrades(id));
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
                                <span>Символ</span>
                            </th>
                            <th>
                                <span>Размер</span>
                            </th>
                            <th>
                                <span>Цена входа</span>
                            </th>
                            <th>
                                <span>Цена маркировки</span>
                            </th>
                            <th>
                                <span>Цена ликвидации</span>
                            </th>
                            <th>
                                <span>Маржа</span>
                            </th>
                            <th>
                                <span>PNL(ROE%)</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: 18 }).map((e) => (
                            <tr>
                                <td className="simbol green_left_border">
                                    <div>
                                        <span>GMTUSDT</span>
                                        <p>Бессрочный</p>
                                    </div>
                                    <icon>11x</icon>
                                </td>
                                <td className="green">
                                    <span>18.35939 USDT</span>
                                </td>
                                <td>
                                    <span>2.35939</span>
                                </td>
                                <td>
                                    <span>2.35939</span>
                                </td>
                                <td className="yellow">
                                    <span>2.35939</span>
                                </td>
                                <td className="marga">
                                    <span>2.35 USDT</span>
                                    <p>(Кросс)</p>
                                </td>
                                <td className="red_text">
                                    <span>GMTUSDT</span>
                                    <p>(-5.23% +10 USDT)</p>
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
                                <span>Символ</span>
                            </div>
                            <div className="line__desc simbol">
                                <span>GMTUSDT</span>
                                <p>Бессрочный</p>
                                <icon>11x</icon>
                            </div>
                        </div>
                        <div className="user_tab__mobile_table__card__line">
                            <div className="line__title">
                                <span>Размер</span>
                            </div>
                            <div className="line__desc">
                                <span>18.35939 USDT</span>
                            </div>
                        </div>
                        <div className="user_tab__mobile_table__card__line">
                            <div className="line__title">
                                <span>Цена входа</span>
                            </div>
                            <div className="line__desc">
                                <span>2.35939</span>
                            </div>
                        </div>
                        <div className="user_tab__mobile_table__card__line">
                            <div className="line__title">
                                <span>Цена маркировки</span>
                            </div>
                            <div className="line__desc">
                                <span>2.35939</span>
                            </div>
                        </div>
                        <div className="user_tab__mobile_table__card__line">
                            <div className="line__title">
                                <span>Цена ликвидации</span>
                            </div>
                            <div className="line__desc">
                                <span>2.35939</span>
                            </div>
                        </div>
                        <div className="user_tab__mobile_table__card__line">
                            <div className="line__title">
                                <span>Маржа</span>
                            </div>
                            <div className="line__desc">
                                <span>2.35 USDT</span>
                                <p>(Кросс)</p>
                            </div>
                        </div>
                        <div className="user_tab__mobile_table__card__line">
                            <div className="line__title">
                                <span>PNL(ROE%)</span>
                            </div>
                            <div className="line__desc">
                                <span>GMTUSDT</span>
                                <p>(-5.23% +10 USDT)</p>
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
            {message
                ? Object.values(message).map((e) => (
                      <MessageBox message={e[0]} error={true} />
                  ))
                : null}
            {complete ? <MessageBox message={complete} error={false} /> : null}
        </div>
    );
};

export default UserSecondTab;

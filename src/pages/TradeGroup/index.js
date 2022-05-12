import React from "react";

//Icons
import tradeGroup from "@assets/img/forAboutCauses.svg";

//Components
import CardInfo from "@components/CardInfo";
import Button from "@components/Button";
import ProgressBar from "@components/ProgressBar";
import Footer from "@components/Footer";

//Styles
import "./TradeGroup.scss";

const mockData = {
    mygroup: [
        {
            name: "User Name",
            email: "username@mail.com",
            rating: "50/50",
            from: "30",
            to: "50",
            completed: "50",
            started: true,
        },
        {
            name: "User Name",
            email: "username@mail.com",
            rating: "50/50",
            from: "100",
            to: "700",
            completed: "80",
            started: false,
        },
        {
            name: "User Name",
            email: "username@mail.com",
            rating: "50/50",
            from: "600",
            to: "4000",
            completed: "30",
            started: true,
        },
        {
            name: "User Name",
            email: "username@mail.com",
            rating: "50/50",
            from: "30",
            to: "50",
            completed: "50",
            started: true,
        },
        {
            name: "User Name",
            email: "username@mail.com",
            rating: "50/50",
            from: "100",
            to: "700",
            completed: "80",
            started: false,
        },
        {
            name: "User Name",
            email: "username@mail.com",
            rating: "50/50",
            from: "600",
            to: "4000",
            completed: "30",
            started: true,
        },
        {
            name: "User Name",
            email: "username@mail.com",
            rating: "50/50",
            from: "30",
            to: "50",
            completed: "50",
            started: true,
        },
        {
            name: "User Name",
            email: "username@mail.com",
            rating: "50/50",
            from: "100",
            to: "700",
            completed: "80",
            started: false,
        },
        {
            name: "User Name",
            email: "username@mail.com",
            rating: "50/50",
            from: "600",
            to: "4000",
            completed: "30",
            started: true,
        },
        {
            name: "User Name",
            email: "username@mail.com",
            rating: "50/50",
            from: "30",
            to: "50",
            completed: "50",
            started: true,
        },
        {
            name: "User Name",
            email: "username@mail.com",
            rating: "50/50",
            from: "100",
            to: "700",
            completed: "80",
            started: false,
        },
        {
            name: "User Name",
            email: "username@mail.com",
            rating: "50/50",
            from: "600",
            to: "4000",
            completed: "30",
            started: true,
        },
    ],
};

const TradeGroup = () => {
    return (
        <div className="main trade_group">
            <div className="main__content__premium">
                <div className="main__title">
                    <img src={tradeGroup} alt="instruct" />
                    <div className="main__title__text">
                        <p>Список</p>
                        <span>групп </span>
                    </div>
                </div>
                <div className="main__content__premium__desc">
                    <p>
                        Sky Invest занимается брокерской/дилерской деятельностью
                        на более 150 рынках по всему миру. В качестве брокера
                        Sky Invest предоставляет институционным и
                        профессиональным трейдерам прямой доступ к ("онлайн")
                    </p>
                </div>
            </div>

            <div className="main__trade_group">
                {mockData.mygroup.map((e) => (
                    <CardInfo
                        key={e.name}
                        className="main__trade_group__item"
                        name={e.name}
                        email={e.email}
                        rating={e.rating}
                        logo="https://cdn.dribbble.com/users/24078/screenshots/15522433/media/e92e58ec9d338a234945ae3d3ffd5be3.jpg?compress=1&resize=400x300"
                    >
                        <div className="main__trade_group__item__title">
                            <span>Название группы</span>
                        </div>
                        <div className="main__trade_group__item__desc">
                            <p>
                                Внеси свой первый депозит на Bitget и получи +5%
                                кешбэка на счет USDT-M. Макс.выплата торгового
                                бонуса составляет до 100$.
                            </p>
                        </div>
                        <Button>ПОКАЗАТЬ ВСЕ</Button>
                        <div className="main__trade_group__item__linebar">
                            <ProgressBar
                                completed={e.completed}
                                from={e.from}
                                to={e.to}
                                start="2019-06-11T00:00"
                                end="2019-06-11T00:00"
                            />
                        </div>
                        <Button
                            className="main__trade_group__item__btn"
                            disabld={e.started}
                            theme={e.started ? "disabled" : "beforesubmit"}
                        >
                            {e.started
                                ? "Группа заполнена"
                                : "Вступить в группу"}
                        </Button>
                    </CardInfo>
                ))}
            </div>

            <Footer />
        </div>
    );
};

export default TradeGroup;

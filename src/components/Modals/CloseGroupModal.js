import React, { useEffect, useState } from "react";

//Components
import Button from "@components/Button";
import CardInfo from "../CardInfo";
import InfoBlock from "@components/UI/InfoBlock";
import RangeSlider from "@components/RangeSlider";
import Checkbox from "@components/Checkbox";

//Icons
import balance from "@assets/img/balance.svg";

//Styles
import "./Modal.scss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import router from "../../utils/router";

export const PareButton = () => {
    const [active, setActive] = useState(false);

    return (
        <Button
            theme={active ? "beforesubmit" : "aftersubmit"}
            onClick={() => setActive(!active)}
        >
            <img src={balance} alt="" />
            <span>USDTETH</span>
        </Button>
    );
};

const CloseGroupModal = ({ handleChange, info }) => {
    const [pareChange, setPareChange] = useState(0);
    const navigate = useNavigate();
    const { isAuth } = useSelector((state) => state.auth);

    const hadnleClick = (toggle) => {
        if (toggle) {
            handleChange(toggle);
        } else {
            handleChange(0);
        }
    };

    useEffect(() => {
        document.addEventListener("click", (e) => {
            if (e.target.className === "modal") {
                handleChange(false);
            }
        });
    }, []);

    return (
        <div className="modal">
            <div className="modal__block">
                <div className="modal__block__title">
                    <span>Копирование трейдера</span>
                </div>
                <div className="modal__block__desc opacity">
                    <span>
                        Вы можете выбрать пары и указать свою сумму, которую
                        будете копировать.
                    </span>
                </div>
                <div className="modal__block__line"></div>
                <CardInfo
                    className="modal__block__profit"
                    name={"Богдан Богданов"}
                    email={"danghoang87hl@gmail.com"}
                    rating={"50/50"}
                    logo="https://cdn.dribbble.com/users/24078/screenshots/15522433/media/e92e58ec9d338a234945ae3d3ffd5be3.jpg?compress=1&resize=400x300"
                />
                <div className="modal__block__line"></div>
                <div className="modal__block__close_group">
                    <div className="modal__block__close_group__item">
                        <span>Дата начала:</span>
                        <p>15.08.2022</p>
                    </div>
                    <div className="modal__block__close_group__item">
                        <span>Дата завершения:</span>
                        <p>15.08.2022</p>
                    </div>
                    <div className="modal__block__close_group__item">
                        <span>Сумма инвестированная:</span>
                        <p>10 000 USDT</p>
                    </div>
                    <div className="modal__block__close_group__item">
                        <span>Результат: </span>
                        <p>+100 %</p>
                    </div>
                    <div className="modal__block__close_group__item">
                        <span>Количество групп:</span>
                        <p>15</p>
                    </div>
                    <div className="modal__block__close_group__item">
                        <span>
                            Средняя прибыль/убыток на каждого инвестора:
                        </span>
                        <p>+ 10 USD</p>
                    </div>
                </div>
                <div className="modal__block__btns">
                    <Button
                        className="modal__block__btns__button"
                        theme="aftersubmit"
                        onClick={() => hadnleClick(false)}
                    >
                        Отмена
                    </Button>
                    <Button
                        className="modal__block__btns__button"
                        theme="beforesubmit"
                        onClick={() => {
                            if (isAuth) {
                                hadnleClick(false);
                            } else {
                                navigate(router.login);
                            }
                        }}
                    >
                        Копировать
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CloseGroupModal;

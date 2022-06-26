import React, { useState } from "react";

//Icons
import star from "@assets/img/star.svg";
import starBorder from "@assets/img/starBorder.svg";

//Components
import Button from "@components/Button";
import Checkbox from "../Checkbox";

//Styles
import "./Modal.scss";

const StartClick = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <img
            src={toggle ? star : starBorder}
            alt=""
            onClick={() => setToggle(!toggle)}
        />
    );
};

const EstimateModal = ({ handleChange, info }) => {
    const [starArr, setToggle] = useState(info);

    const hadnleClick = (toggle) => {
        if (toggle) {
            handleChange(Array.from({ length: starArr + 1 }, (_, i) => i + 1));
        } else {
            handleChange(false);
        }
    };

    return (
        <div className="modal">
            <div className="modal__block">
                <div className="modal__block__title">
                    <span>ОЦЕНИТЬ ТРЕЙДЕРА</span>
                </div>
                <div className="modal__block__estimate">
                    {Array.from({ length: 10 }).map((e, idx) => (
                        <img
                            src={starArr >= idx + 1 ? star : starBorder}
                            alt={idx}
                            onClick={() => setToggle(idx + 1)}
                        />
                    ))}
                </div>
                <div className="modal__block__btns">
                    <Button
                        className="modal__block__bts_button"
                        theme="beforesubmit"
                        onClick={() => hadnleClick(true)}
                    >
                        Продолжить
                    </Button>
                    <Button
                        className="modal__block__bts_button"
                        theme="aftersubmit"
                        onClick={() => hadnleClick(false)}
                    >
                        Отменить
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default EstimateModal;

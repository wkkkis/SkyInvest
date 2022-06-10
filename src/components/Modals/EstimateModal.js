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
    const [toggle, setToggle] = useState(0);

    const hadnleClick = (toggle) => {
        handleChange(toggle);
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
                            src={toggle > idx - 1 ? star : starBorder}
                            alt={idx}
                            onClick={() => setToggle(idx)}
                        />
                    ))}
                </div>
                <div className="modal__block__btns">
                    <Button
                        className="modal__block__bts_button"
                        theme="beforesubmit"
                        onClick={() => hadnleClick(false)}
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

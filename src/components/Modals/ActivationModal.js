import React, { useEffect } from "react";

//Components
import Button from "@components/Button";
import Checkbox from "../Checkbox";

//Styles
import "./Modal.scss";

const ActivationModal = ({ handleChange, title, desc }) => {
    const hadnleClick = (toggle) => {
        handleChange(toggle);
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
                    <span>{title || "Ваш аккаунт успешно активирован!"}</span>
                </div>
                <div className="modal__block__desc">
                    <span>
                        {desc ||
                            "Нажмите продолжить чтобы продолжить процесс логинизации."}
                    </span>
                </div>
                <div className="modal__block__btns">
                    <Button
                        className="modal__block__bts_button"
                        theme="aftersubmit"
                        onClick={() => hadnleClick(true)}
                    >
                        Продолжить
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ActivationModal;

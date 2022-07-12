import React, { useEffect } from "react";

//Components
import Button from "@components/Button";
import Field from "@components/Field";

//Styles
import "./Modal.scss";

const RemoveOtpModal = ({ handleChange }) => {
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
                    <span>Отключить двухфакторную аунтификацию ?</span>
                </div>
                {/* <div className="modal__block__desc">
                    <span>
                        При удалении группы средства вернутся обратно инвесторам
                    </span>
                </div> */}
                <div className="modal__block__btns">
                    <Button
                        className="modal__block__btns__button"
                        theme="danger"
                        onClick={() => hadnleClick(true)}
                    >
                        Отключить
                    </Button>
                    <Button
                        className="modal__block__btns__button"
                        theme="beforesubmit"
                        onClick={() => hadnleClick(false)}
                    >
                        Отменить
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default RemoveOtpModal;
